const Import = require('readline-sync');

var Panjang = Import.questionInt('Masukan Panjang:');
var Lebar = Import.questionInt('Masukan Lebar:');

var Hitung = Panjang * Lebar;

console.log('Luas persegi panjang adalah',Hitung);