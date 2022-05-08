#!/usr/bin/env python3
import random 
import requests 
import time 
import json
import logging
from collections import Counter

#setup logging for this test script 
logging.basicConfig(filename='test.log', encoding='utf-8', level=logging.DEBUG)
def count_char(s, max_c=2,min_c=None):
    count = Counter(s) 
    for char in s :
        if str(count[char]) >= max_c:
            logging.info(f"\tString {s} more than {max_c} times\n")
            #ideally we are just gonna return 1 to signal that a given character occurs too much 
            return 1

    return 0 

#Returns the data needed for running the game e.g ( the letters input for the user, 
#and all the possible anagrams that can be made with said letters )
def get_level_data(levels=6,letter_count=6, min_wlen=3,max_ans=10 ):
    alpha = "abcdefghijklmnopqrstuvwxyz"
    level_data = {}  
    #test script for querying the anagramica api 
    #keep generating urls until you find "n" urls that match my criteria 
    for _ in range(levels):
        #randomly get n letters 
        letters = [random.choice("abcdefghijklmnopqrstuvwxyz") for _ in range(letter_count)]
        url = f"http://anagramica.com/all/{''.join(letters) }"
        req = requests.get(url)
        response = (req.json())['all']
        #make sure no letter repeats more than 2 times 
        for word in response:
            print(f'length of {word} is {len(word)}')
            if len(word) < min_wlen: # make sure each answer is long enough 
                response.remove(word)
                print(f'removed {word} which had length fewer than {min_wlen}, on level {_}')
                #ISSUE: adding too many entries 
        #make sure there are enough words to use for answers
        if len(response) > 7:
            level_data.update({f"{_}":{  "letters":''.join(letters),"answers":response}})

        else:
            print('not enough words to add to list ')
        #logging.info(response['all'])
        logging.info(f"found new entry for level {_}")

    return level_data

if __name__ == '__main__':

    with open('levelData.json', 'w+', encoding='utf-8') as answer_data: 
            data = get_level_data() 
        #print out the data nicely  to a file 

            #answer_data.write(json.dumps(data,indent=4))
            answer_data.writelines(json.dumps(data,indent=4))
