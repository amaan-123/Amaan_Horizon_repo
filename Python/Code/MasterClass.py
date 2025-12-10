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

class MyClass:
    x=5

obj1=MyClass()
print(obj1.x)