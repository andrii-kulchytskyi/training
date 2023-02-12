type Man = {
    name: string, height: number
}


let man1: Man = {name: 'Dima', height: 1.78}
let man2: Man = {name: 'Sasha', height: 1.8}


let people: Array<Man> = [
    {name: 'Dima', height: 1.78},
    {name: 'Sasha', height: 1.8}
]

let createMan = (name: string, height: number): Man => {
    return {
        name,
        height
    };
}

interface ICar {
    model: string,
    year: number,
    on: boolean,
    turnOn: Function,
    rename: (model: any) => void
}

let car: ICar = {
    model: 'Reno Stepway',
    year: 2016,
    on: false,
    turnOn() {
        this.on = true;
    },
    rename(model) {
        this.model = model;
    }
}

interface IGarage {
    addCar: (car: ICar) => void,
    logAllCarsNames: () => void
    getAllCars: () => ICar[]
}

let createGarage = (): IGarage => {
    let _cars: ICar[] = [];

    return {
        addCar(car) {
            _cars.push(car);
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ');
            _cars.forEach(c => console.log(c.model));
        },
        getAllCars() {
            return _cars;
        }
    }
}


export default 1