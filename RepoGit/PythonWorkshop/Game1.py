#Game1.python

print("Let's start the game!")
import random

licznik = 1
lucky_number = random.randint(1, 100)

print('Welcome to the game!')

while True:
  user_lucky_number = int(input(('State what number the computer is thinking of: ')))
  if user_lucky_number == lucky_number:
    print(f'Congratulations!!! You Won!!! You needed for this {licznik} trials')
    break
  elif user_lucky_number > lucky_number:
    print('Missed, you need to aim Lower')
    licznik += 1
  elif user_lucky_number < lucky_number:
    print('Missed, you need to aim Higher')
    licznik += 1