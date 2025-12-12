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

# # super() = follow the inheritance chain automatically
# # Python looks at the class hierarchy (MRO — Method Resolution Order) and calls the next class in line.
# class A:
#     def __init__(self):
#         print("A init")
#         super().__init__()
# class B:
#     def __init__(self):
#         print("B init")
#         super().__init__()
# class C(A, B):
#     def __init__(self):
#         print("C init")
#         super().__init__()
# C()


# # Polymorphism
# # Function Polymorphism
# # An example of a Python function that can be used on different objects is the len() function.
# mytuple = ("apple", "banana", "cherry")
# print(len(mytuple))

# thisdict = {
#   "brand": "Ford",
#   "model": "Mustang",
#   "year": 1964
# }
# print(len(thisdict))


# # Class Polymorphism
# # Polymorphism is often used in Class methods, where we can have multiple classes with the same method name.
# class Car:
#   def __init__(self, brand, model):
#     self.brand = brand
#     self.model = model
#   def move(self):
#     print("Drive!")
# class Boat:
#   def __init__(self, brand, model):
#     self.brand = brand
#     self.model = model
#   def move(self):
#     print("Sail!")
# class Plane:
#   def __init__(self, brand, model):
#     self.brand = brand
#     self.model = model
#   def move(self):
#     print("Fly!")

# car1 = Car("Ford", "Mustang")       #Create a Car object
# boat1 = Boat("Ibiza", "Touring 20") #Create a Boat object
# plane1 = Plane("Boeing", "747")     #Create a Plane object

# for x in (car1, boat1, plane1):
#   x.move()

# # Inheritance Class Polymorphism
# # What about classes with child classes with the same name? Can we use polymorphism there?
# # Yes. If we use the example above and make a parent class called Vehicle, and make Car, Boat, Plane child classes of Vehicle, the child classes inherits the Vehicle methods, but can override them
# class Vehicle:
#   def __init__(self, brand, model):
#     self.brand = brand
#     self.model = model

#   def move(self):
#     print("Move!")

# class Car(Vehicle):
#   pass

# class Boat(Vehicle):
#   def move(self):
#     print("Sail!")

# class Plane(Vehicle):
#   def move(self):
#     print("Fly!")

# car1 = Car("Ford", "Mustang") #Create a Car object
# boat1 = Boat("Ibiza", "Touring 20") #Create a Boat object
# plane1 = Plane("Boeing", "747") #Create a Plane object

# for x in (car1, boat1, plane1):
#     x.move()
#     print(f"\r{x.brand} {x.model}")


# # Encapsulation
# # Create a private class property named __age:
# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.__age = age # Private property
# p1 = Person("Emil", 25)
# print(p1.name)
# print(p1.__age) # Note: Private properties cannot be accessed directly from outside the class.
# # But it does not provide full security.
# # Because accessing via mangled name works
# # Because the goal is protection against accidental misuse, not real hiding.
# p1._Person__age
# Note: While you can access private properties using the mangled name, it's not recommended. 
# It defeats the purpose of encapsulation.

# # Use a getter method to access a private property:
# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.__age = age
#   def get_age(self):
#     return self.__age
# p1 = Person("Tobias", 25)
# print(p1.get_age())

# # To modify a private property, you can create a setter method.
# # The setter method can also validate the value before setting it:
# # Example
# class Person:
#   def __init__(self, name, age):
#     self.name = name
#     self.__age = age

#   def get_age(self):
#     return self.__age

#   def set_age(self, age):
#     if age > 0:
#       self.__age = age
#     else:
#       print("Age must be positive")

# p1 = Person("Tobias", 25)
# print(p1.get_age())

# p1.set_age(26)
# print(p1.get_age())

# class Student:
#   def __init__(self, name):
#     self.name = name
#     self.__grade = 0

#   def set_grade(self, grade):
#     if 0 <= grade <= 100:
#       self.__grade = grade
#     else:
#       print("Grade must be between 0 and 100")

#   def get_grade(self):
#     return self.__grade

#   def get_status(self):
#     if self.__grade >= 60:
#       return "Passed"
#     else:
#       return "Failed"

# student = Student("Emil")
# student.set_grade(85)
# print(student.get_grade())
# print(student.get_status())


# # Python Inner Classes
# # An inner class is a class defined inside another class. The inner class can access the properties and methods of the outer class.
# # Inner classes are useful for grouping classes that are only used in one place, making your code more organized.
# # Create an inner class:
# class Outer:
#   def __init__(self):
#     self.name = "Outer Class"
#   class Inner:
#     def __init__(self):
#       self.name = "Inner Class"

#     def display(self):
#       print("This is the inner class")
# outer = Outer()
# print(outer.name)

# # Accessing Inner Class from the Outside
# # To access the inner class, create an object of the outer class, and then create an object of the inner class:
# # Example
# # Access the inner class and create an object:
# class Outer:
#   def __init__(self):
#     self.name = "Outer"

#   class Inner:
#     def __init__(self):
#       self.name = "Inner"

#     def display(self):
#       print("Hello from inner class")

# outer = Outer()
# inner = outer.Inner()
# inner.display()

# # Accessing Outer Class from Inner Class
# # Inner classes in Python do not automatically have access to the outer class instance.
# # If you want the inner class to access the outer class, you need to pass the outer class instance as a parameter:
# # Example
# # Pass the outer class instance to the inner class:
# class Outer:
#   def __init__(self):
#     self.name = "Emil"
#   class Inner:
#     def __init__(self, outer):
#       self.outer = outer
#     def display(self):
#       print(f"Outer class name: {self.outer.name}")
# outer = Outer()
# inner = outer.Inner(outer)
# inner.display()

# # Practical Example
# # Inner classes are useful for creating helper classes that are only used within the context of the outer class:
# # Use an inner class to represent a car's engine:

# class Car:
#   def __init__(self, brand, model):
#     self.brand = brand
#     self.model = model
#     self.engine = self.Engine()
#   class Engine:
#     def __init__(self):
#       self.status = "Off"
#     def start(self):
#       self.status = "Running"
#       print("Engine started")
#     def stop(self):
#       self.status = "Off"
#       print("Engine stopped")
#   def drive(self):
#     if self.engine.status == "Running":
#       print(f"Driving the {self.brand} {self.model}")
#     else:
#       print("Start the engine first!")
# car = Car("Toyota", "Corolla")
# car.drive()
# car.engine.start()
# car.drive()

# # Multiple Inner Classes
# # A class can have multiple inner classes:
# # Create multiple inner classes:
# class Computer:
#   def __init__(self):
#     self.cpu = self.CPU()
#     self.ram = self.RAM()
#   class CPU:
#     def process(self):
#       print("Processing data...")
#   class RAM:
#     def store(self):
#       print("Storing data...")
# computer = Computer()
# computer.cpu.process()
# computer.ram.store()

# # Create an Iterator
# # To create an object/class as an iterator you have to implement the methods __iter__() and __next__() to your object.
# # As you will learn in the Python Classes/Objects chapter, all classes have a function called __init__(), which allows you to do some initializing when the object is being created.
# # The __iter__() method acts similar, you can do operations (initializing etc.), but must always return the iterator object itself.
# # The __next__() method also allows you to do operations, and must return the next item in the sequence.
# # Example
# # Create an iterator that returns numbers, starting with 1, and each sequence will increase by one (returning 1,2,3,4,5 etc.):
# class MyNumbers:
#   def __iter__(self):
#     self.a = 1
#     return self
#   def __next__(self):
#     x = self.a
#     self.a += 1
#     return x
# myclass = MyNumbers()
# myiter = iter(myclass)
# print(next(myiter))
# print(next(myiter))
# print(next(myiter))
# print(next(myiter))
# print(next(myiter))

# # StopIteration
# # Stop after 20 iterations:

# class MyNumbers:
#   def __iter__(self):
#     self.a = 1
#     return self

#   def __next__(self):
#     if self.a <= 20:
#       x = self.a
#       self.a += 1
#       return x
#     else:
#       raise StopIteration

# myclass = MyNumbers()
# myiter = iter(myclass)

# for x in myiter:
#   print(x)

# # Generators are functions that can pause and resume their execution.
# # When a generator function is called, it returns a generator object, which is an iterator.
# # The code inside the function is not executed yet, it is only compiled. The function only executes when you iterate over the generator.
# # Example
# # A simple generator function:
# def my_generator():
#   yield 1
#   yield 2
#   yield 3
# for value in my_generator():
#   print(value)

# # The yield keyword is what makes a function a generator.
# # When yield is encountered, the function's state is saved, and the value is returned. The next time the generator is called, it continues from where it left off.
# # Example
# # Generator that yields numbers:

# def count_up_to(n):
#   count = 1
#   while count <= n:
#     yield count
#     count += 1

# for num in count_up_to(5):
#   print(num)

# # Generator for large sequences:
# def large_sequence(n):
#   for i in range(n):
#     yield i
# # This doesn't create a million numbers in memory
# gen = large_sequence(1000000)
# print(next(gen))
# print(next(gen))
# print(next(gen))