// membuat sebuah variabel namaMakanan yang valuenya dalam bentuk array
const namaMakanan = new Map([[1, "Kabobs"], [2, "Menantea"], [3, "KFC"]]);
// memindahkan variabel namaMakanan ke variabel makanan
let makanan;
// melakukan perulangan dengan memanggil semua element
for (makanan of namaMakanan) {
    // menampilkan output 
    console.log(makanan);
}; // output : [1, "Kabobs"] [2, "Menantea"] [3, "KFC"]


// membuat sebuah variabel person yang valuenya berupa objek
const person = {
    firstName: "Alexander",
    middleName: "Pierro",
    lastName: "Picasso"
}
// memindahkan variabel orang ke variabel person
let orang;
// melakukan perulangan
for (orang of person) {
    console.log(`${orang}`);
}   // output : error karena tidak iterable