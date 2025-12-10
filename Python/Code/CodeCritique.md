# Q) I want you to evaluate my answers to the exercise question I provide in this chat. You may provide suggestions wherever applicable(keeping in mind I have 2 days more to complete python) First up

Exercise 1 Problem statement:
"Performing Bubble Sort

Q. Implement a function bubble_sort(arr) that takes a list of numbers and returns a new list with the elements sorted in ascending order. Do not use Python’s built-in sort methods (like sorted or list.sort). Use only basic loops to perform the sorting. Return the sorted list.

Hint: Think about how a single pass through the list moves the largest unsorted element to its final position at the end"

My answer:

```python
input = [24, -3, 24, -3, 2, 0, 17, 1]

def bubble_sort(numList):
    output = numList
    passCount=0
    # pass
    for i in range(0,len(output)):
        # iteration
        j=0
        swapCount=0
        while j<(len(output)-passCount):
            if (j+1<len(output)-passCount) and output[j]>output[j+1]:
                swapValue=output.pop(j)
                output.insert(j+1,swapValue)
                swapCount+=1
            elif (j==(len(output)-1-passCount)) and swapCount==0:
                print(f"Output was already ascendingly sorted: {output}")
                return output
            elif (j==(len(output)-1-passCount)) and swapCount>0:
                print(f"Output at end of pass number {passCount} is: {output}")
                print(f"It took {swapCount} swaps")
            j+=1
        passCount+=1
        

bubble_sort(input)
```

My console output:

```bash
$ py Exercise1.py 
Output at end of pass number 0 is: 
[-3, 24, -3, 2, 0, 17, 1, 24]      
It took 6 swaps
Output at end of pass number 1 is: 
[-3, -3, 2, 0, 17, 1, 24, 24]      
It took 5 swaps
Output at end of pass number 2 is: 
[-3, -3, 0, 2, 1, 17, 24, 24]      
It took 2 swaps
Output at end of pass number 3 is: 
[-3, -3, 0, 1, 2, 17, 24, 24]      
It took 1 swaps
Output was already ascendingly sorted: [-3, -3, 0, 1, 2, 17, 24, 24]
```

# A) Why (design & correctness issues in your solution)

* You mutate the caller’s list because `output = numList` copies the reference — usually undesirable; make an explicit copy if you should not change the original.
* You shadow the built-in `input` name; avoid using Python built-ins as variable names.
* Swapping via `pop`/`insert` is correct but inefficient and harder to read. Use tuple swap (`a, b = b, a`) for clarity and O(1) operations.
* The function prints progress inside it; that mixes concerns (sorting vs UI). A sorting function should return the sorted result and optionally provide a separate way to inspect pass-by-pass state.
* You rely on an early `return` only when the list becomes sorted; but if that never happens your function falls off the end and returns `None`. Always return the sorted list at the end.
* Loop bounds are more complex than necessary. A straightforward `for i in range(n-1)` with inner `for j in range(n-1-i)` is clearer and less error-prone.
* Naming: prefer `snake_case` (e.g., `bubble_sort`, `swap_count`) and avoid mixed styles.

How (clean, correct, idiomatic implementation)

```python
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
```

What (summary and practical suggestions to finish in 2 days)

* Fixes to apply now: copy input, avoid built-ins, use tuple swap, ensure function always returns, separate printing / logging from sorting.
* Add a couple of unit tests (empty list, single element, duplicates, already-sorted) to verify behavior.
* Optional improvements to practice:

  * Count and return number of comparisons and swaps (good for benchmarking).
  * Implement an in-place variant (modify original) and compare memory usage.
  * Implement and compare insertion sort and selection sort to understand trade-offs.
* Complexity reminder: bubble sort is O(n²) time, O(1) extra space (in-place). With early-exit optimization the best-case can be O(n) for already-sorted input.

If you want, I can:

* provide unit-test code using `unittest` or `pytest`,
* show a version that yields intermediate passes for visualization,
* or give a short explanation comparing bubble vs insertion vs selection for your next practice task.
