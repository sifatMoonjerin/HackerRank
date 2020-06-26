n = int(input())
arr = list(map(int, input().split()))

highest = max(arr)
i = 1
while(i<n):
    if highest == max(arr):
        arr.remove(max(arr))
        i+=1
    else:
        break

print(max(arr))