class Vehicle {
    constructor(licensePlate, manufacture) {
        this.licensePlate = licensePlate;
        this.manufacture = manufacture;
        this.engineActive = false;
    }
   
    startEngines() {
        console.log(`Mesin kendaraan ${this.licensePlate} dinyalakan!`);
      }
     
      info() {
        console.log(`Nomor Kendaraan: ${this.licensePlate}`);
        console.log(`Manufacture: ${this.manufacture}`);
        console.log(`Mesin: ${this.engineActive ? 'Active': 'Inactive'}`);
      }
     
      parking() {
        console.log(`Kendaraan ${this.licensePlate} parkir!`);
      }
 }
 
 class VehicleFactory {
    /* method static dapat di akses melalui class-nya langsung */
   repair(vehicles) {
      vehicles.forEach(vehicle => {
        console.log(`Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`)
      })
    }
 }
 
 class Car extends Vehicle {
    constructor(licensePlate, manufacture, wheel) {
        super(licensePlate, manufacture);
        this.wheel = wheel;
    }
 
    droveOff() {
        console.log(`Kendaraan ${this.licensePlate} melaju!`);
      }
     
      openDoor() {
        console.log(`Membuka pintu!`);
      }
  
      info(){
          super.info();
          console.log(`Jumlah roda: ${this.wheels}`);
      }
 }
 
 class Motorcycle extends Vehicle {
   constructor(licensePlate, manufacture, wheel) {
        super(licensePlate, manufacture);
        this.wheel = wheel;
    }
 
    droveOff() {
        console.log(`Kendaraan ${this.licensePlate} melaju!`);
      }
     
      openDoor() {
        console.log(`Membuka pintu!`);
      }
  
      info(){
          super.info();
          console.log(`Jumlah roda: ${this.wheels}`);
      }
 }
 
 const johnCar = new Car("H121S", "Honda", 4);
 const tomMotor = new Motorcycle("GF121J", "Yamaha", 2);
 const dimasCar = new Car("TA1408K", "Tesla", 4);
 
 /* Pemanggilan method repair langsung dari class-nya */
 VehicleFactory.repair([johnCar, tomMotor, dimasCar]);