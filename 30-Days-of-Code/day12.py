class Person:
    def __init__(self, firstName, lastName, idNumber):
        self.firstName = firstName
        self.lastName = lastName
        self.idNumber = idNumber
    def printPerson(self):
        print("Name:", self.lastName + ",", self.firstName)
        print("ID:", self.idNumber)

class Student(Person):
    def __init__(self, firstName, lastName, idNumber, scores):
        Person.__init__(self, firstName, lastName, idNumber)
        self.scores = scores
        
    def calculate(self):
        average = sum(self.scores)/len(self.scores)
        if average>=90:
            return 'O'
        elif average>=80:
            return 'E'
        elif average>=70:
            return 'A'
        elif average>=55:
            return 'P'
        elif average>=40:
            return 'D'
        else:
            return 'T'