class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"{self.brand} {self.model} engine started."

    def move(self):
        return f"{self.brand} {self.model} is moving."

    def __str__(self):
        return f"Vehicle(brand={self.brand}, model={self.model}, year={self.year})"


class Car(Vehicle):
    def __init__(self, brand, model, year, doors):
        super().__init__(brand, model, year)
        self.doors = doors

    def move(self):
        return f"Car {self.brand} {self.model} is driving on the road."

    def honk(self):
        return f"{self.brand} {self.model} says: Beep beep!"

    def __str__(self):
        return f"Car(brand={self.brand}, model={self.model}, year={self.year}, doors={self.doors})"


class Motorcycle(Vehicle):
    def __init__(self, brand, model, year, engine_capacity):
        super().__init__(brand, model, year)
        self.engine_capacity = engine_capacity

    def move(self):
        return f"Motorcycle {self.brand} {self.model} is speeding down the street."

    def wheelie(self):
        return f"{self.brand} {self.model} performs a wheelie!"

    def __str__(self):
        return (
            f"Motorcycle(brand={self.brand}, model={self.model}, "
            f"year={self.year}, engine_capacity={self.engine_capacity}cc)"
        )