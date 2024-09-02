
class Car {
    make: string = 'toyota';

    drive(): void {
        console.log(`Driving a ${this.make}`);
    };
};

const car = new Car();
car.drive(); 
