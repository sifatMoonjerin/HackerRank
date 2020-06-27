n = int(input())

arr = list(map(int, input().rstrip().split()))
output = ''

for ch in range(len(arr), 0, -1):
    output += (str(arr[ch-1]) + ' ')

print(output.strip())