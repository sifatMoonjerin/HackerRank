words = int(input())
for word in range(0,words):
    str = input()
    length = len(str)
    oddStr = ''
    evenStr = ''

    for i in range(0, length):
        if i%2 == 0:
            evenStr += str[i]
        else:
            oddStr += str[i]

    print(evenStr, oddStr)