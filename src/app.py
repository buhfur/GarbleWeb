#!/usr/bin/env python3 
#import appData
from flask import Flask , render_template, request 
from collections import Counter
import random 
import requests 
import json

#Returns the data needed for running the game e.g ( the letters input for the user, 
#and all the possible anagrams that can be made with said letters )
def get_level_data(levels=6,letter_count=6, min_wlen=3,max_ans=10 ):
    entries = 0
    #test script for querying the anagramica api 
    level_data = {}
    while len(level_data.keys()) != levels: 
        letters = [random.choice("abcdefghijklmnopqrstuvwxyz") for _ in range(letter_count)]
        url = f"http://anagramica.com/all/{''.join(letters)}"
        req = requests.get(url)
        response = (req.json())['all'] 
        answers = [x for x in response if len(x) >= min_wlen ] #Check if the given reponse has enough words 
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

    game_data = request.args.get('data')
    print(game_data) 
    return render_template('index.html', data=game_data)
'''
TODO:
    idea - make the act of genrating data much faster but stopping 
    execution when it first comes across a word that doesn't meet the min_c size 
    requirement.


    why might this work ? 
        - the array of the generated "answers" is already sorted for us by the api.
        Therefore, it might be faster to just give up on that generated  answer
        during execution , and then just try to 'spin the wheel' on the api in order 
        to get a proper set of data to use for the game 
'''
#@app.route('/test', methods=['GET','POST']) # here just in case I want the app to update the database used for garble 
@app.route('/data/', defaults={'levels':1})
@app.route('/data/<int:levels>')
def test(levels=1): # levels indicates how many sets of [letters: answers ] you want to generate
    game_data = get_level_data(levels) 
    #return render_template('data.html',game_data=game_data)
    return game_data 

#next step is using javascript code to present the answers on the webpage
#by fetching the API endpoints 

#or 
# just pass in the data to a template for the user 






if __name__ == '__main__':
    app.run(debug=True)
