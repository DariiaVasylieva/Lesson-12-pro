function Man(name, age){
    this.name = name;
    this.age = age;
}

Man.prototype.getInfo = function(){
    console.log(`Name: ${this.name}, age: ${this.age}`);
}

function Car(brand, model, productionYear, numberPlate){
    this.brand = brand;
    this.model = model;
    this.productionYear = productionYear;
    this.numberPlate = numberPlate;
}

Car.prototype.assignTheOwner = function(man){
    this.owner = man.age >= 18 ? man : console.log(`Could not assign the owner to a man under 18.`);
}

Car.prototype.getInfo = function(){
    let ownerInfo = this.owner ? `Name: ${this.owner.name}, age: ${this.owner.age}` : 'No owner assigned';
    console.log(`Car brand is : ${this.brand}
    model is : ${this.model}
    production year is : ${this.productionYear}
    numberPlate is : ${this.numberPlate}.
    The owner is : ${ownerInfo}
    `);
}

let andrey = new Man('Andrey', '15');
andrey.getInfo();

let dasha = new Man('Dasha', '19');
dasha.getInfo();

let lisa = new Man('Lisa', '21');
lisa.getInfo();

let AndreysCar = new Car('Mazda', 'CX-9', '2017' , 'FG567890UY');
AndreysCar.assignTheOwner(andrey);
AndreysCar.getInfo();

let DashasCar = new Car('Ford', 'C-Max 2', '2011' , 'FD892681JE');
DashasCar.assignTheOwner(dasha);
DashasCar.getInfo();

let LisasCar = new Car('BMW', '8', '2018' , 'JO359027GL');
LisasCar.assignTheOwner(lisa);
LisasCar.getInfo();