def decToBin(n):
    count = 0
    while n > 0:
        count = (count+1) if n%2 != 0 else 0
        n = n//2
    return count

print(decToBin(439))
