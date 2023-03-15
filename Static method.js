/*
Static method pada JavaScript ES6 adalah metode yang terikat pada kelas atau objek tertentu, 
bukan pada instance (salinan) dari kelas atau objek tersebut. Dengan kata lain, 
kita dapat memanggil metode static langsung dari kelas atau objeknya tanpa perlu membuat instance terlebih dahulu.

Sebagai contoh, jika kita memiliki kelas "Person" dengan metode "sayHello" yang didefinisikan sebagai metode statis, 
kita bisa memanggil metode ini dengan cara "Person.sayHello()" tanpa harus membuat objek Person terlebih dahulu. 
Hal ini berguna ketika kita ingin membuat metode yang terkait dengan kelas, bukan dengan instance dari kelas tersebut.

Dalam penulisan metode statis, kita menggunakan kata kunci "static" sebelum nama metode yang ingin didefinisikan. 
Sehingga, sebuah contoh penulisan metode statis di dalam kelas dapat terlihat seperti ini:
*/

class Person{
    static sayHello(){
        console.log("Hello");
    }
}
Person.sayHello();