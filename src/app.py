#!/usr/bin/env python3 
#import appData
from flask import Flask , render_template, request 
from collections import Counter
import random 
import requests 
import json
# one of my goals is to make the variables and data memorable and explanatory 
"""
Returns the data needed for running the game e.g ( the letters input for the user, 
and all the possible anagrams that can be made with said letters )

When visiting whatever url this hosting on for this example i'm just going to use 
- ans_length : 
http://localhost:5000/data/{
get_level_data(levels=6,char_count=6, min_quant=3,max_quant=10 )

Parameters : 
    * levels (int) 
    * char_count  (int) 
    * min_quant (int)  - minimum amount of answers you want  for a given letter set 
    * max_quant (int ) 
    * char_count ( int )
"""
def get_level_data(levels=6,char_count=6, min_quant=3,max_quant=10 ):
    entries = 0
    #test script for querying the anagramica api 
    level_data = {}
    while len(level_data.keys()) != levels: 
        letters = [random.choice("abcdefghijklmnopqrstuvwxyz") for _ in range(char_count)]
        url = f"http://anagramica.com/all/{''.join(letters)}"
        req = requests.get(url)
        response = (req.json())['all'] 
        answers = [x for x in response if len(x) >= min_quant ] #Check if the given reponse has enough words 
        #TODO : add loading spinner to make the wait time interesting ! 
        if len(answers) > 7:
            #give the data an index by taking the difference between the levels and the length 
            #of level_data.keys() 
            # this code is present in case I want to generate a static amount of levels 
            level_data.update({f"{levels - len(level_data.keys())}":{  "letters":''.join(letters),"answers":answers}})
            print(f'keys : {level_data.keys()}')


        print(f"length of keys : {len(level_data.keys())}") 
    return level_data
#Main flask app that provides the base structure for the web app 

#returns a dictionary of data from the 
#anagramica api, using randomly generate letters
app = Flask(__name__)
#query the scrabble api here 
@app.route('/')
def index():
    game_data = request.args.get('level')
    print(game_data) 
    return render_template('level.html', game_data=game_data)

"""Custom API endpoint for GarbleWeb from the anagramica API"""
@app.route('/api/level/', defaults={'levels':1})
@app.route('/api/level/<int:levels>')
def data_endpoint(levels=1): # levels indicates how many sets of [letters: answers ] you want to generate
    game_data = get_level_data(levels) 
    return game_data 

#next step is using javascript code to present the answers on the webpage
#by fetching the API endpoints 

if __name__ == '__main__':
    app.run(debug=True)
