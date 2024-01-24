# https://www.codewars.com/kata/546e2562b03326a88e000020/train/python

def square_digits(num):
    num = str(num)
    numString = ""
    for item in num:
        total = 0
        total += int(item) * int(item)
        print(total)
        numString += str(total)
    return int(numString)