#!/usr/bin/env python3 
from flask import Flask , render_template 
from collections import Counter
import random 
import requests 
import json

#returns a dictionary of data from the 
#anagramica api, using randomly generate letters
#Input: (size: Integer) , indicates the maximum length of the characters for the answers generated
'''
{ 
  "template-Levelx": {
     "answers": [ "owl", "mew", ....],
     "letters": "abcde"
    }
} 
'''
levelData = {} 
def count_char(s,c, max_c=2,min_c=None):
    count = Counter(s) 

    for char in s :
        if str(count[char]) >= max_c:
            print(f"\tString {s} more than {max_c} times\n")
            #ideally we are just gonna return 1 to signal that a given character occurs too much 
            return 1

    return 0 
    
    

#function to determine how many levels there are and the maximum size of hte answers
def get_game_data(size):
    alpha = "abcdefghijklmnopqrstuvwxyz"
    #randomly get 6 letters 
    letters = [random.choice("abcdefghijklmnopqrstuvwxyz") for _ in range(size)]
    #make sure no letter repeats more than 2 times 

    for _ in range(size) :
        link = f"http://anagramica.com/api/best/{''.join(letters) }"

    #query the api 

    

#makes get requests to the links and if the api returns a 404 status code, then generate a new
# link in its place 
#Input : List or String 
def make_req(url=None):
#    urls = [generateUrl() for _ in range(6) ] 
    if type(url) is list:
        resp = [requests.get(url) for url in range(len(url)) ]

    else if 

    return resp
        
            
            
                
app = Flask(__name__)


#query the scrabble api here 
@app.route('/game')
def game():
    #pass in data to jiinja from the get_game_data function 
   requests.get( 
@app.route('/')
def index():
    return render_template('index.html')




if __name__ == '__main__':
    app.run(debug=True)
