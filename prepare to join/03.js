function cart (shoppers) {
  
   let belanja = [
                    ['roti' , 5000],
                    ['rokok', 20000],
                    ['kopi' ,1000],
                    ['mie instan' ,2000],
    ]; 
  // condition if no array  
   if (shoppers[0] === undefined) {
     return [];
   }
  
  
 const hasil = [];
 //create object here
 for (let i=0; i<belanja.length; i++) {
   let obj = {
     //kode_product:belanja[i][0],
     name_product: [],
     harga: belanja[i][1],
     quantity: 0,
   };
 
 //create calculate coding here
 for (let j=0; j<shoppers.length; j++){
   if (shoppers[j].name_product === belanja[i][0]) {
     obj.name_product.push(shoppers[j].name_product);
     obj.quantity += shoppers[j].amount;
     obj.harga *= obj.quantity;
   }
 }
  hasil.push(obj); 
 }
 
 return hasil;
}

console.log(
  cart([
  {name_product:'roti', amount: 3},
  {name_product:'rokok',amount: 2},
  {name_product:'kopi', amount: 6},
  {name_product:'mie instan',amount: 10},
  ])
  );
console.log(cart([]));