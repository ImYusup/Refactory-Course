console.log('Soal No 2 : Combine several arrays');

function combine (str) {
  
  let hasil = [];
  
  for (let i=0; i<str.length; i++){
   hasil.push(str[i]);
  }
  return hasil.join(' ');
}
console.log(combine(['Behind', 'every', 'great', 'man']));
console.log(combine(['is', 'a', 'woman']));
console.log(combine(['rolling', 'her', 'eyes']));
