def factorial(n):
    return n if n==1 else n*factorial(n-1)

n = int(input())
result = factorial(n)
print(result)