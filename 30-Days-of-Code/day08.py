phoneBook = {}

entries = int(input())

for entry in range(0,entries):
    name, phoneNumber = input().split(' ')
    phoneBook[name] = phoneNumber

while True:
    try:
        entry = input()
        if entry in phoneBook:
            print(entry+'='+phoneBook[entry])
        else:
            print("Not found")
    except EOFError:
        break