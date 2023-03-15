//pewarisan sifat atau extend class :
// class ChildClass extends ParentClass {}
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
   
// constructor class Car, kita melihat penggunaan super(), apa itu maksudnya? 
// Keyword super digunakan untuk mengakses properti dan method yang ada pada induk class ketika berada pada child class. 
// Jadi super(licensePlate, manufacture) di atas berarti kita mengakses constructor dari parent class dan mengirimkan licensePlate, 
// dan manufacture sebagai data yang dibutuhkan olehnya agar objek (instance) Car berhasil dibuat.
  
  class Car extends Vehicle {
    constructor(licensePlate, manufacture, wheels) {
      super(licensePlate, manufacture);
      this.wheels = wheels;
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
   
  const car = new Car('H121S', 'Honda', 4, '\n');
  car.startEngines();

//   overriding
const johnCar = new Car('H121S', 'Honda', 4);
johnCar.info();
  