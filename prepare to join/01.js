console.log('Soal No 1 : Palindrome');

function reverse (str) {
  
  let hasilKata = ' ';
  
  for (let i=str.length-1; i>=0; i--) {
    hasilKata += str[i];
  }
  //console.log(hasilKata);
  return hasilKata;

}
console.log(reverse('ibu ratna antar ubi'));