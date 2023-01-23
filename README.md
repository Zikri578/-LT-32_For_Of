# -LT-32_For_Of

`"for...of"` adalah perintah perulangan di JavaScript yang digunakan untuk mengelilingi setiap elemen dari suatu iterable, seperti array atau objek yang dapat diiterasi. Perintah ini mengembalikan setiap elemen dari iterable dan memungkinkan Anda untuk melakukan operasi tertentu pada setiap elemen tersebut. Sintaks dari perintah `"for...of"` adalah sebagai berikut:

    for (variable of iterable) {
        // code to be executed
    }

Di mana variable adalah variabel yang digunakan untuk menyimpan setiap elemen dari iterable, dan iterable adalah objek yang akan dilakukan perulangan. Sebagai contoh:

    let numbers = [1, 2, 3, 4, 5];

    for (let number of numbers) {
        console.log(number);
    }

Dalam contoh di atas, kita menggunakan perintah `"for...of"` untuk mengelilingi setiap elemen dari array `"numbers"` dan mencetak setiap elemen tersebut. Output yang diharapkan adalah:

    1
    2
    3
    4
    5

Perintah for...of sangat berguna ketika Anda ingin mengelilingi setiap elemen dari suatu iterable dan melakukan operasi tertentu pada setiap elemen tersebut, seperti mencetak setiap elemen atau melakukan perhitungan pada setiap elemen. Perintah ini juga menjamin urutan elemen yang diiterasi, sehingga cocok digunakan untuk mengiterasi array atau objek yang memiliki urutan elemen yang penting.

Selain itu, perintah `"for...of"` hanya akan mengelilingi elemen yang diiterasi saja, tidak seperti perintah "for...in" yang akan mengelilingi semua properti dari objek termasuk yang diwarisi dari prototipe.

Namun, perintah for...of hanya dapat digunakan pada objek yang dapat diiterasi, seperti array, string, atau objek yang mengimplementasikan iterator. Jika Anda ingin mengiterasi objek yang tidak dapat diiterasi, Anda dapat menggunakan perintah `"for...in"` atau metode lain seperti `"Object.keys()"` atau `"Object.values()"`.

