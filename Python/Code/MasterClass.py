# print("Hello, Python!")
# name = "Alice"
# age = 25
# height = 5.7
# is_student = True

# print(name)
# print(age)
# print(height)
# print(is_student)

a = int("10")
b = float(5)
c = str(42)
# Converts from: a tuple ("apple", "banana", "cherry") → list ["apple", "banana", "cherry"]
d = list(("cherry","apple", "banana")) 
# Converts from: keyword arguments (or equivalently a mapping of keys to values) → dict {"name": "John", "age": 36}
e = dict(name="John", age=36)
# print(a,b,c,d,e)
# myTuple = (a,b,c,d,e) # immutable
myList = [a,b,c,d,e]  # mutable
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

myList.append(4)
print(f"myList.append(4): {myList}")
myList.insert(1,"a")
print(f"myList.insert(1,\"a\"): {myList}")
myList.pop()
print(f"myList.pop(): {myList}")
myList.pop(1)
print(f"myList.pop(1): {myList}")
# myList.remove(d)
# print(f"myList.remove(d): {myList}")
# d.sort()
# print(f"d.sort(): {d}")
# print(f"myList after d.sort(). Comment out remove(d): {myList}")
# newList = sorted(d)
# print(f"newList after sorted(d): {newList}")
myList.reverse()
print(f"myList.reverse(): {myList}")
print(f"myList.count(d): {myList.count(d)}")