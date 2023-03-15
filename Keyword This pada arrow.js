function People(name, age, hobby){
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}

//menambahkan intromyself ke peopple

People.prototype.introMyself = function(){
    //this -> people
    setTimeout(() =>{
    //this -> people
    console.log(`Hello! Nama saya ${this.name}, umur saya ${this.age}.`);
    console.log(`hobby saya adalah ${this.hobby}`);

}, 1000);

};

const programmer = new People('dwi', 21, ['coding', 'Read Book', 'Play Game']);
programmer.introMyself()