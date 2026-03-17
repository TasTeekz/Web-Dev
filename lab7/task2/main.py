from models import Vehicle, Car, Motorcycle


def main():
    v1 = Vehicle("Toyota", "Corolla", 2020)
    v2 = Car("BMW", "M5", 2023, 4)
    v3 = Motorcycle("Yamaha", "R1", 2022, 1000)

    vehicles = [v1, v2, v3]

    for vehicle in vehicles:
        print(vehicle)
        print(vehicle.start_engine())
        print(vehicle.move())
        print("-" * 40)

    print(v2.honk())
    print(v3.wheelie())


if __name__ == "__main__":
    main()