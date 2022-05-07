#!/usr/bin/env python3
import random 
import requests 
import json
from collections import Counter

def count_char(s, max_c=2,min_c=None):
    count = Counter(s) 
    for char in s :
        if str(count[char]) >= max_c:
            print(f"\tString {s} more than {max_c} times\n")
            #ideally we are just gonna return 1 to signal that a given character occurs too much 
            return 1

    return 0 

#there should be at least 10 answers 
#answers should be more than 2 characters 
def get_level_data(levels=6,letter_count=6, min_wlen=3,max_ans=10 ):
    alpha = "abcdefghijklmnopqrstuvwxyz"


    level_data = {} 
    #test script for querying the anagramica api 
    #keep generating urls until you find n urls that match my criteria 
    for _ in range(levels):
        #randomly get n letters 
        letters = [random.choice("abcdefghijklmnopqrstuvwxyz") for _ in range(letter_count)]
        #make sure no letter repeats more than 2 times 
        url = f"http://anagramica.com/all/{''.join(letters) }"
        req = requests.get(url)
        response = req.json()
        for word in response:
            if len(word) < min_wlen: # make sure each answer is long enough 
                response.remove(word)
        #make sure there are enough words to use for answers
        level_data.update({"level":{  "letters":''.join(letters),"answers":response}})

        
        print(response['all'])
        print(f"found new entry for level {_}")

    return level_data
            
    


    #make get request to url 







if __name__ == '__main__':
    print(get_level_data())
