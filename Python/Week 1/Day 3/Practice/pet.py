class Pet :
    def __init__(self,name,pet_types,tricks):
        self.name = name
        self.pet_type= pet_type
        self.types = types
        self.tricks= tricks
        self.health = 100
        self.energiy= 100



    def sleep(self):
        self.energie+=25

    def eat (self):
        self.energie+= 5
        self.health+= 10

    def play(self):
        self.health+= 5

    def noise(self):
        if (self.pet_type =="Dog"):
            print ("woof!")
        elif (self.pet_type == "cat"):
            print("Mewao")
        else:
            print("haaaaaa")

pet1 =Pet ("Fluffy", "Dog" ,["sit","Roll over"])
