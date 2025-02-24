from datetime import date

def say_hello(name):
    salutation = "Hello, " + name + "!"
    print(salutation)
    print(salutation.capitalize())
    print(salutation.split())
    print(salutation.upper())
    print(salutation.lower())
    print(salutation.title())
    print(salutation.replace('Hello', 'Hi'))
    print(salutation.startswith('Hello'))
    print(salutation.endswith('Hello'))   

say_hello('VS Code')

def say_day_of_week(date):
    print(date.strftime('%A'))

say_day_of_week(date.today())


import numpy as np
msg = "Roll a dice! The roll gives... "
print(msg)
print(np.random.randint(1,9))
    