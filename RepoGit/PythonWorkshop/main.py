print('Hello Word')

print('Below are notes and assignments from the 5-hour "Python for Beginners" workshop.')

print('Poniżej są notatki i zadania z 5 godzinnych warsztatów "Python od podstaw"')

# Below are notes and assignments from the 5-hour "Python for Beginners" workshop.

# Zmienne i ich typy
# # Intiger - zmienna przechowująca wartość liczbową całkowitą.
# first_number = 12
# x = 34
# my_account = 2345
# print(first_number)
# print(type(first_number))

# # FLOAT = zimuenna przechowujca wartość liczbową zmiennioprzecinkową
# my_lucky_number = 12.23
# a = 1.1
# pi_number = 3.14
# print(type(my_lucky_number))

# # STRING - zmienna przechowująca wartość tekstową.

# my_text = 'Ala ma kota'
# my_description = 'To jest opis zdania'

# # F-STRING
# my_f_string = f"{my_text}, a Jaś ma psa"
# print(my_f_string)

# # BOOLEAN - zmienna przechowująca wartość logiczną TRUE/FALSE.

# my_answer = True
# your_answer = False
# print(type(my_answer))

# # NONE - zmienna przechowująca pustą wartość.

# nothing = None
# print(type(nothing))

# my_textbook = 'Teoria Wszystkiego'
# print(isinstance(my_textbook, str))

# # Stwórz zmienne zawierające napis, liczbę całkowitą, liczbę zmiennoprzecinkową.
# # Zmienna zawierająca napis na nazywać się my_first_words,
# # zmienna zawierająca liczbę całkowitą ma nazywać się my_favourite_number,
# # a zmienna zawierająca liczbę zmiennoprzecinkową ma nazywać się my_pi_number
# # Wyprintuj sobie te zmienne w konsoli.

my_first_words = 'Python'
first_number = 259
my_favorite_number = 346.12
my_pi_number = 3.14
print(type(first_number))
print(type(my_favorite_number))
print(type(my_pi_number))
print(type(my_first_words))

# # Zbior Danych

# # Lista - lista/tablica - listy tworzymy używając nawiasów []
# my_list = [1, 2, 3, 4, 5, 'Tekst']
# print(my_list[0])
# # -> elementy mogą się powtarzać
# # -> elementy są uporządkowane
# # -> elementy są indeksowane(indeks zaczyna się od 0)
# # -> elementy listy można, zmianiać, usówać, dodawać.
# # -> Listy można kroić aby wciągnąc tylko potrzebne części listy.

my_favorite_number = [3, 7, 9, 12, 77]

# # wyciągnięcie konkretnego elementu z listy

my_true_number = my_favorite_number[2]
print(my_true_number)

# # usinięcie elementu o podanym indexie

my_favorite_number.pop(3)
print(my_favorite_number)

# # sprawdzenie ile elementów zawiera lista

print(len(my_favorite_number))

# # dodanie elementu na końcu listy
my_favorite_number.append(38)
print(my_favorite_number)

# # dodanie elementu na określonym miejscu listy

my_favorite_number.insert(0, 99)
print(my_favorite_number)

# # my_new_list = my_favorite_number[2::]
# # print(my_new_list)

# #SUMOWANIE ELEMENTÓW
print(sum(my_favorite_number))

# # TUPLE - tupla/krotka ()
my_tuple = (1, 2, 3, 4, 'Paula')
print(my_tuple)
print(my_tuple[1])
print(len(my_tuple))

# # DICT - Słownik {} jest to zbiór klucz - wartość.
# # -> klucze są unikalne
# # -> nie jest indeksowalny
# # -> są mutwalne

my_dict = {'name': 'Paula', 'age': 38, 'city': 'Warsaw'}

users_list = [
{'name': 'Paula', 'age': 38, 'city': 'Warsaw'},
{'name': 'Tosia', 'age': 30, 'city': 'Warsaw'},
{'name': 'Kuba', 'age': 25, 'city': 'Warsaw'},
{'name': 'Cezarek', 'age': 19, 'city': 'Warsaw'}
]

welcom_string = f"Hello {my_dict['name']} you live in {my_dict['city']}"
print(welcom_string)

# # usuwanie klucza-wartosci z dict

# del my_dict['city']
# print(my_dict)

# # wyciągnij wszystkie klucze - zwraca liste

# print(my_dict.keys())

# # wyciągnij wartości z dicta
# print(my_dict.values())
# print(my_dict.items())

# my_dict['country'] = 'Poland'
# print(my_dict)

# # SET - zbiór, kolekcja unikalnych elementów, #które nie mają określonej kolejności. Tworzy się # przez klamry/nawiasy wąsate.
# # -> nie można indeksować.
# # -> nie można modyfikować.
# # -> elementy nie powtarzają się
# my_set = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
# print(my_set)
# print(len(my_set))

# # dodaj element na koniec SETU
# my_set.add(11)
# print(my_set)

# # dodanie kulku elementów do setu
# my_set.update({12, 13, 14})
# print(my_set)

# # usunięcie konkretnego elementu z SETU
# my_set.remove(7)
# print(my_set)

# dzięki użyciu funkcji wbudowanej w pythona # # #set() i zmienimy liczbę na set() zmienimy listę # na set, pozbywając się dzięki temu duplikatów. Na koniec używając funkcji wbudowanej listy() tworzymy liste bez duplikatów.

# my_final_list = ['anna', 'ania', 'ania', 'kasia', 'paula']
# print(set(my_final_list))

# final_users_list = list(set(my_final_list))
# print(final_users_list)

#Zadania:
#1. Stwórz listę z pięcioma owocami. Potem na koniec listy dodaj następny owoc (za pomocą funkcji append).
#Potem usuń drugi owoc z listy (za pomocą funkcji pop()).
#Po kazdej operacji wyprintuj jak wyglada lista.
#2. Stworz slownik reprezentujacy ksiazke. Slownik ten powinien zawierac tytul(title), autora(author), rok wydania(year) i ilosc stron(pages). Nastepnie wyprintuj autora i tytul w f'stringu.

my_fruits = ['banana', 'apple', 'pear', 'orange', 'pineapple']
print(my_fruits)
my_fruits.append('watermelon')
my_fruits.pop(1)
print(my_fruits)

my_book = {
"title": "The Little Prince",
"author": "Antoine de Saint Exupery",
"year": " 1942",
"pages": "84"
}
my_f_book = f"my favorite book is {my_book['title']} its author is {my_book['author']}"
print(my_f_book)

# OPERATORY ARTMETYCZNE I LOGICZNE
# + - * / % // ** =
# '''
# *Arytmetyczne*:
# +(dodawanie),
#  -(odejmowanie),
#  *(mnozenie),
#  **(potegowanie),
#  /(dzielenie),
#  %(reszta z dzielenia),
#  >(wieksze niz),
#  <(mniejsze niz),
#  >=(wieksze rowne niz),
#  <=(mniejsze równe niz),
#  ==(równa się),
#  != (nie równa się)
# *Logiczne*:
# - and - logiczne i
# - or - logiczne lub
# - not - logiczne nie
# '''

# x = 5
# y = 8.18

# print(x < y)
# print((x <= y) and (x == y))
# print((x <= y) or (x == y))
# print(x * y)
# print(y**x)

# # Instrukcje warunkowe
# # if.... else
# '''
# if warunek:
#   wykonujemy określona część kodu
# elif inny warunek:
#   wykonujemy określona cześć kodu
# else:
#   wykonują tę część kodu
# '''

Mark = 4
if Mark >= 5:
  print('good job')
elif Mark > 2 and Mark < +4:
   print('could be better')
else:
   print("that's not the worst")

# Pętla FOR
# Petla for - wykorzystywana w celu niepowielania kodu, gdy python stosuje zasadę DRY - don't repeat yourself. Pętla for iteruje po elementach zbioru danych i wykonuje czynnosc na kazdym elemencie tego zbioru.

# for zmienna in zbior:<br>
#     #kod do wykonania na kazdym elemencie zbioru

# my_animals = ['kot', 'pies', 'królik', 'koszatniczka']
# for animal in my_animals:
#   print(f'Witaj {animal}')

week_days = [
'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday', 'Sunday'
]

for day in week_days:
    if day == 'Saturday' or day == 'Sunday':
        print('It is the weekend!')
else:
   print('It is the middle of the week :(')

# funkcja wbudowana input
# users_info = input('podaj swoje imię')
# print(users_info)

# user_age = int(input('Ile masz lat?'))

# if user_age >= 18:
#     print('Jesteś pełnoletni')
# else:
#     print('Jesteś niepełnoletni')

# Pętla while
# Pętla while - jest to pętla, ktora będzie wykonywac się do #momentu az warunek przestanie byc spelniany.
# while warunek:<br>
#     #blok kodu do wykonania, dopóki warunek jest spełniony

# BREAK pozwala przerwać działanie pętli

# <br>
# NIGDY nie robimy pętli nieskończonych, gdyz zatniemy program.

# licznik = 0

# while licznik <= 5:
#   print(licznik)
#   licznik += 1

# number = 0
# while number < 5:
#   print(number)
#   number += 1

#   if number == 3:
#     break

# users_animal = input('Podaj jakiego masz zwierzaka: ')

# while True:
#   users_animal = input('Podaj swojego zwierzaka: ')
#   print(f'Witaj {users_animal}')

#   if users_animal == 'kot':
#     print('bye bye')
#     break





