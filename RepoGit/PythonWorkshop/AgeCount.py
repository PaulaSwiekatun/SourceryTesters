#Age_count.py

print('Hello!, State your name and date of birth. So I can count how old you are')

import datetime

def count_age():
    name = input('Enter your name: ')
    year_of_birth = int(input('Enter the year of your birth:: '))
    current_year = datetime.datetime.now().year
    age = current_year - year_of_birth
    print(f'Hi {name}! you have {age} years.')

count_age()


