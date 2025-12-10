# print("Hello, Python!")
# name = "Alice"
# age = 25
# height = 5.7
# is_student = True

# print(name)
# print(age)
# print(height)
# print(is_student)

# a = int("10")
# b = float(5)
# c = str(42)
# Converts from: a tuple ("apple", "banana", "cherry") → list ["apple", "banana", "cherry"]
# d = list(("cherry","apple", "banana")) 
# Converts from: keyword arguments (or equivalently a mapping of keys to values) → dict {"name": "John", "age": 36}
# e = dict(name="John", age=36)
# print(a,b,c,d,e)
# myTuple = (a,b,c,d,e) # immutable: TOII(TupleOrderedImmutableIndexed)
# myList = [a,b,c,d,e]  # mutable: LIMO(ListIndexedMutableOrdered)
# mySet = {a,b,c,d,e}  # TypeError: unhashable type: 'list'
# myDict = dict(intA=a, floatB=b,strC=c,listD=d,dictE=e)
# print(myDict)

# # The f before the double quotes makes the string an f-string (formatted string literal). It tells Python to evaluate expressions inside { } — here {name} — and insert their values into the string. So f"Welcome, {name}!" produces a string with the value of the variable name.

# name = input("Enter your name: ")
# print(f"Welcome, {name}!")

# score = 85
# if score>=90:
#     print("A grade")
# elif score>=75:
#     print("B grade")
# else:
#     print("C grade")

# for i in range(1,6):
#     print(i)

# for x in myTuple:
#     print(x)
# for x in myList:
#     print(x)
# for k in myDict:               # keys
#     print(k)
# for v in myDict.values():      # values
#     print(v)
# for k, v in myDict.items():    # (key, value) pairs
#     print(k, v)
# for x in myDict:
#     print(f"{x}: {myDict[x]}")

# count=0;
# while count<10:
#     print(count)
#     count+=1

# for num in range(10):
#     if num == 5:
#         break
#     if num % 2 == 0:
#         continue
#     print(num)

# def greet(name):
#     print(f"Hello, {name}!")
# greet("Salaam")

# square = lambda x: x**2
# print(square(5))

# a = int("10")
# b = float(5)
# c = str(42)
# # Converts from: a tuple ("apple", "banana", "cherry") → list ["apple", "banana", "cherry"]
# d = list(("apple", "banana", "cherry")) 
# # Converts from: keyword arguments (or equivalently a mapping of keys to values) → dict {"name": "John", "age": 36}
# e = dict(name="John", age=36)
# # print(a,b,c,d,e)
# # myTuple = (a,b,c,d,e) # immutable
# myList = [a,b,c,d,e]  # mutable

# myList.append(4)
# print(f"myList.append(4): {myList}")
# myList.insert(1,"a")
# print(f"myList.insert(1,\"a\"): {myList}")
# myList.pop()
# print(f"myList.pop(): {myList}")
# myList.pop(1)
# print(f"myList.pop(1): {myList}")
# myList.remove(d)
# print(f"myList.remove(d): {myList}")
# d.sort()
# print(f"d.sort(): {d}")
# print(f"myList after d.sort(). Comment out remove(d): {myList}")
# newList = sorted(d)
# print(f"newList after sorted(d): {newList}")
# myList.reverse()
# print(f"myList.reverse(): {myList}")
# print(f"myList.count(d): {myList.count(d)}")
# print(f"myList.index(d): {myList.index(d)}")

# print(f"\" \".join([\"Hi\",\"All\"]): {" ".join(["Hi","All"])}")
# print(f"\" \".join(d): {" ".join(d)}")
# print(f"\"hello\".find(\"lo\"): {"hello".find("lo")}")
# alphabets="a,b,c,d,e,f,g,h"
# print(f"alphabets.split(\",\"): {alphabets.split(",")}")

# Tuple
# point = (9, 0, -1, 4, 1000)
# print(point[2])

# cache = {}
# # preferred — handles subclasses and multiple types
# print(isinstance(cache, dict))   # True for dict (and subclasses)
# print(isinstance(cache, set))    # False
# # check multiple at once
# print(isinstance(cache, (dict, set)))  # True if either
# # exact type check
# print(type(cache) is dict)   # True only if exactly dict
# print(type(cache) is set)    # False

# cache[(2025, "IN")] = "Data for India 2025"  # tuple as dict key

# # sets
# # Sets are unordered containers.
# # The display order is meaningless.
# # The only guarantee is: no duplicates + fast membership testing.
# # A set’s internal storage is a hash table.
# # Items are placed based on their hash values, not on the order you wrote them.

alphaNumeric1={"a","b","c","d",1,2,3,4,"a","b","c","d",1,2,3,4}
# # Auto-removes duplicates; fast `in`
# # print(alphaNumeric1)
# # if "a" in alphaNumeric1:
# #     print("Present")

# # set operations
# alphaNumeric2={"c","d",1,2,"z","d",89}
# print("intersection:", alphaNumeric1 & alphaNumeric2)    # or .intersection()
# print("union:       ", alphaNumeric1 | alphaNumeric2)    # or .union()

# # If you need to preserve order and uniqueness, consider 
# # collections.OrderedDict (Python <3.7) or use 
# # dict.fromkeys/list comprehensions (or use list + set logic) depending on your requirements.

# unique_ordered = list(dict.fromkeys(alphaNumeric1))   # preserves first-seen order
# print(unique_ordered)

# from collections import OrderedDict
# unique = list(OrderedDict.fromkeys(alphaNumeric1))
# print(unique)

# # Dict
# person = {"name": "Fatima", "age": 22}
# person["age"] = 23    # mutate
# person["city"] = "Delhi"
# # Lookup
# print(person)

# try:
#     x = int(input("Enter a number: "))
#     print(10/x)
# except ZeroDivisionError:
#     print("Cannot divide by zero!")
# except ValueError:
#     print("Invalid input!")
# finally:
#     print("Program complete.")

# with open('./FileHandling.txt','x') as file:
#     file.write('\'x\' for creating and writing to a new file')

# with open('./FileHandling.txt','w') as file:
#     file.write('\'w\' for writing (truncating the file if it already exists). \nIn text mode (the default, or when \'t\' is appended to the mode argument), the contents of the file are returned as strings, the bytes having been first decoded using a platform-dependent encoding or using the specified encoding if given.')

# with open('./FileHandling.txt','a') as file:
#     length = file.write('\n\n\'a\' for appending (which on some Unix systems, means that all writes append to the end of the file regardless of the current seek position)')
#     print(length)

# with open('./FileHandling.txt','w+t') as file:
#     file.write('\'+\'open a disk file for updating (reading and writing)\nw+t = write and update')

# with open('./FileHandling.txt', 'r') as file:
#     content = file.read()
#     print(content)

# class MyClass:
#     x=5
# obj1=MyClass()
# print(obj1.x)


# # Using init method
# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age
# p1 = Person("Emil", 36)
# print(p1.name)
# print(p1.age)
# del(p1.age) #age is no longer accessible
# # print(p1.age)

# # Without using init method
# class Person:
#   pass  # keyword for creating empty class
# p1 = Person()
# p1.name = "Tobias"
# p1.age = 25
# print(p1.name)
# print(p1.age)

# # Class Properties vs Object Properties
# # Properties defined inside __init__() belong to each object (instance properties).
# # Properties defined outside methods belong to the class itself (class properties) and are shared by all objects:
# class Person:
#   species = "Human" # Class property
#   def __init__(self, name):
#     self.name = name # Instance property
# p1 = Person("Emil")
# p2 = Person("Tobias")
# print(p1.name)
# print(p2.name)
# print(p1.species)
# print(p2.species)

# # When should you NOT modify class attributes?
# # Avoid if the attribute is meant to be per-instance.
# class Person:
#     friends = []
# p1 = Person()
# p2 = Person()
# p1.friends.append("Ali")
# print(p2.friends)  # Ali (unexpected!)
# # # Never put mutable objects (list/dict/set) as class attributes unless you truly want them shared.

# # The __str__() method is a special method that controls what is returned when the object is printed:
# # Without the __str__() method:
# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age
# p1 = Person("Emil", 36)
# print(p1)

# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.age = age
#   def __str__(self):
#     return f"{self.name} ({self.age})"    
# p1 = Person("Tobias", 36)
# print(p1)

# # Multiple Methods
# # A class can have multiple methods that work together:
# class Playlist:
#   def __init__(self, name):
#     self.name = name
#     self.songs = []
#   def add_song(self, song):
#     self.songs.append(song)
#     print(f"Added: {song}")
#   def remove_song(self, song):
#     if song in self.songs:
#       self.songs.remove(song)
#       print(f"Removed: {song}")
#   def show_songs(self):
#     print(f"Playlist '{self.name}':")
#     for song in self.songs:
#       print(f"- {song}")
# my_playlist = Playlist("Favorites")
# my_playlist.add_song("RAAG RAAG RAAG...")
# my_playlist.add_song("AAG AAG AAG...")
# my_playlist.add_song("JAAG JAAG JAAG...")
# my_playlist.remove_song("AAG AAG AAG...")
# my_playlist.show_songs()

# # Inheritance
# # child class will inherit the init function of parent class
# class Person:
#   def __init__(self, fname, lname):
#     self.firstname = fname
#     self.lastname = lname
#   def printname(self):
#     print(self.firstname, self.lastname)
#   def welcome(self):
#     print("Welcome", self.firstname, self.lastname)

# class Student(Person):
#   def __init__(self, fname, lname, year):
#     super().__init__(fname, lname)
#     self.graduationyear = year
#   def welcome(self):
#     print("Welcome", self.firstname, self.lastname, "to the class of", self.graduationyear)
# x = Student("Mike", "Olsen", 2024)
# x.welcome()

# super() = follow the inheritance chain automatically
# Python looks at the class hierarchy (MRO — Method Resolution Order) and calls the next class in line.
class A:
    def __init__(self):
        print("A init")
        super().__init__()
class B:
    def __init__(self):
        print("B init")
        super().__init__()
class C(A, B):
    def __init__(self):
        print("C init")
        super().__init__()
C()
