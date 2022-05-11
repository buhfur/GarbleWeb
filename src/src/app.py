#!/usr/bin/env python3 
import appData
from flask import Flask , render_template 
from collections import Counter
import random 
import requests 
import json

#Main flask app that provides the base structure for the web app 

#returns a dictionary of data from the 
#anagramica api, using randomly generate letters
app = Flask(__name__)
#query the scrabble api here 
@app.route('/')
def index():
    return render_template('index.html')

#@app.route('/test', methods=['GET','POST'])
@app.route('/data')
def test():
    game_data = appData.get_level_data() 
    return render_template('data.html',game_data=game_data)





if __name__ == '__main__':
    app.run(debug=True)
