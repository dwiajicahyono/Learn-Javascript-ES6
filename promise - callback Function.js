/*
Sebelumnya kita ketahui bahwa saat kita melakukan settimeout 
kode yang diluar itu akan teroutput sendiri oleh karena itu 
akan sulit apabila kita melakukan suatu tugas ketika menangani
menangani suatu nilai yang didapatkan secara asynchronous pada 
program yang berjalan secara synchronous.
Contoh :
const getCake = () => {
  let cake = null;
  console.log('Sedang membuat kue, silakan tunggu ....');
  
  setTimeout(() => {
    cake = 'Kue Selesai!';
  }, 3000);
  
  return cake;
};
 
const cake = getCake();
console.log(cake);
 
 Output:
Sedang membuat kue, silakan tunggu ....
null

maka kita perlu calbback untuk melakukan set timeoutnya

 */ 

const getCake = callback =>{
    let cake = null;
    console.log("Sedang membuat kue, mohon tunggu sebentar ...") ;
    setTimeout(() => {
        cake = "Kue selesai dibuat";
        callback(cake);
    }, 3000);
};

getCake(cake =>{ //fungsi dengan parameter cake
    console.log(cake);
});