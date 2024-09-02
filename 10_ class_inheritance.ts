


import { Car } from "./09_class_constructor_private";


export class ElectricCar extends Car {
    batteryLife: number;

    constructor(make: string, batteryLife: number) {
        super(make);
        this.batteryLife = batteryLife;
    };

    charge(): void {
        console.log('Charging the car');
    };
};

const electricCar = new ElectricCar('Tesla', 100);
electricCar.getMake();