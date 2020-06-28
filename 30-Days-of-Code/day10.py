def decToBin(n):
    count = 0
    maxCount = 0
    while n > 0:
        if n%2 != 0:
            count += 1
            maxCount = max(count, maxCount)
        else:
            count = 0
        n = n//2
        
    return maxCount

print(decToBin(439))
