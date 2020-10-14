class Car {
    constructor(color, score) {
        this.color = color;
        this.score = score;
    }
}

class Race {
    constructor(car1, car2) {
        this.cars = [car1, car2];
    }

    add = (car) => {
        this.cars.push(car);
    };

    getWinner = () => {
        let maxScore = this.cars.reduce((max, car) => car.score > max ? car.score : max, this.cars[0].score);
        let winningCar = this.cars.filter(car => car.score === maxScore)[0];
        console.log("And the winner is..." + winningCar.color);
    };
}

const c1 = new Car('blue', 20);
const c2 = new Car('green', 30);
const c3 = new Car('red', 24);

const race = new Race(c1, c2);
race.add(c3);

// prints: And the winner is... green
console.log(race.getWinner());