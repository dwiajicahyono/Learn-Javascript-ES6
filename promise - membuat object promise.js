/*
const coffee = new Promise();
 akan eror karena kita perlu menentapkan resolver function atau 
 bisa disebut executor function di mana fungsi tersebut akan 
 dijalankan secara otomatis ketika constructor Promise dipanggil.

*/ 

const executorFunction = (resolve, reject) =>{
    const isCoffeMakerReady = true;

    if (isCoffeMakerReady){
        resolve("Kopi berhasil dibuat");
    } else{
        reject('Mesin kopi tidak bisa digunakan!');
    }
};

const makeCoffe = new Promise(executorFunction);
console.log(makeCoffe)

/*
adapun fungsi untuk resolve() sendiri untuk menerima satu parameter biasanya digunakan
untuk mengirimkan daya kettika promise berhasil dilakukan. ketika ini terpanggil promisw
akan berubah dari pending ke fullfilled

untuk reject() sendiri merupakan fungsi yang dapat menerima satu parameter yang digunakan untuk 
memberikan alasan. ketika dipanggil, fungsi ini dapat berubah dari pending menjadi rejected
*/ 