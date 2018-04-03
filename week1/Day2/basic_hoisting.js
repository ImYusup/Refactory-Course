console.log('1. SCOPE');
// contoh penulisan var global
var pertama = 10;
function jumlah () {
    // contoh penulisan var lokal
    var pertama = 5;
    return 'ini lokal variable ' +pertama;
}
console.log(jumlah());
console.log('ini global variable ' +pertama);

console.log('2. CLOSURE');
function plus (nilai) {
    return function (first, second) {
        return nilai + first + second
    }
}
var plusMore = plus (10);
console.log(plusMore(20,30));

console.log('3. PROTOTYPE');
// create kerangka first
function profile (nama, umur) {
    this.names = nama;
    this.age = umur;
};

// select ur method used
profile.prototype.perkenalan = function () {
    console.log('Hi, perkenalkan nama saya : ' +this.names+ ' berumur ' +this.age);
}
// create new profile
var input1 = new profile ('yusup', 27);
var input2 = new profile ('putri', 23);
// running the method!!
input1.perkenalan();
input2.perkenalan();

console.log('4. HOISTING');
cityNames ('Bandung');
function cityNames (kota) {
    console.log('Saya sedang di ' +kota);
}
// // atau
// function cityNames (kota) {
//     console.log('Saya sedang berada di ' +kota);
// }
// kota('Bandung');

console.log('5. CALLBACK');
function greet (names) {
    var names = 'Arsyad Al Khawarismi Priadi';
    alert ('Hey ganteng ' +names);  
}
function output (callback) {
    callback(names);
}
output(greet);

// asynchronouse
console.log('Hello');
console.log('Javascript');
console.log('Coder');

console.log('Hello');
setTimeout(() => {
   console.log('Javascript') 
}, 400);
console.log('Coder');

    