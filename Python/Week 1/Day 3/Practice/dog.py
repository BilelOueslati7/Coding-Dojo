from pet import Pet

class Dog(Pet):
    def __init__(self, name, pet_types, tricks):
        super().__init__(name, "Dog", tricks)

Dog1 = Dog("hjsnd", ["bkbkb" , "ghfyg"])