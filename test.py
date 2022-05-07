#!/usr/bin/env python3
import random 
import requests 

def getLetters():
    alpha = "abcdefghijklmnopqrstuvwxyz"
    #test script for querying the anagramica api 

    #randomly get n letters 
    letters = [random.choice("abcdefghijklmnopqrstuvwxyz") for _ in range(7)]
    #make sure no letter repeats more than 2 times 
    req = f"http://anagramica.com/api/best/{''.join(letters) }"

    #make get request to url 
    return req


print([getLetters() for _ in range(7) ]) # generates all the levels we need 

