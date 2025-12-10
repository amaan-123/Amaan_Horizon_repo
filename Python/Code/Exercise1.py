from typing import List

def bubble_sort(arr: List[int]) -> List[int]:
    """Return a new list with elements sorted ascending using bubble sort.
    This does not modify the input list.
    """
    n = len(arr)
    out = arr.copy()               # do not mutate caller's list
    if n < 2:
        return out

    for i in range(n - 1):        # i = number of completed passes
        swapped = False
        for j in range(n - 1 - i):# last i elements are already in place
            if out[j] > out[j + 1]:
                out[j], out[j + 1] = out[j + 1], out[j]
                swapped = True
        if not swapped:
            break                # early exit: array already sorted
    return out

# quick test
data = [24, -3, 24, -3, 2, 0, 17, 1]
print(bubble_sort(data))  # -> [-3, -3, 0, 1, 2, 17, 24, 24]
print(data)                # original unchanged

# # My attempt:
# input = [24, -3, 24, -3, 2, 0, 17, 1]

# def bubble_sort(numList):
#     output = numList
#     passCount=0
#     # pass
#     for i in range(0,len(output)):
#         # iteration
#         j=0
#         swapCount=0
#         while j<(len(output)-passCount):
#             if (j+1<len(output)-passCount) and output[j]>output[j+1]:
#                 swapValue=output.pop(j)
#                 output.insert(j+1,swapValue)
#                 swapCount+=1
#             elif (j==(len(output)-1-passCount)) and swapCount==0:
#                 print(f"Output was already ascendingly sorted: {output}")
#                 return output
#             elif (j==(len(output)-1-passCount)) and swapCount>0:
#                 print(f"Output at end of pass number {passCount} is: {output}")
#                 print(f"It took {swapCount} swaps")
#             j+=1
#         passCount+=1
        

# bubble_sort(input)
