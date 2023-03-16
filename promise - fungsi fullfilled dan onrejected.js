/*
Gunakan method .then() pada objek promise yang kita buat untuk menangani nilai dari resolve() 
ketika Promise onFulfilled. Di dalam method .then(), berikan parameter berupa function handle callback.
*/

const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = false;
    if (isCoffeeMakerReady) {
      resolve('Kopi berhasil dibuat');
    } else {
      reject('Mesin Kopi tidak bisa digunakan!');
    }
  };
   
  const handlerSuccess = coffee => {
    console.log(coffee);
  };
   
  const handlerRejected = rejectionReason => {
    console.log(rejectionReason)
  };
  
  const makeCoffee = new Promise(executorFunction);
  makeCoffee.then(handlerSuccess, handlerRejected);

/*
- makeCoffe adalah objek promiswe yang menghasilkan resolve()
- handlerSucces adalah deklarasi untuk mencetak nilai dari parameter

*/   