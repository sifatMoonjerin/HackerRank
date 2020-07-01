arr = []

for _ in range(6):
    arr.append(list(map(int, input().rstrip().split())))

length = len(arr)

maxSum = -math.inf

for i in range(length-2):
    for j in range(length-2):
        add = arr[i][j]+arr[i][j+1]+arr[i][j+2]+arr[i+1][j+1]+arr[i+2][j]+arr[i+2][j+1]+arr[i+2][j+2]
        if add > maxSum:
            maxSum = add

print(maxSum)