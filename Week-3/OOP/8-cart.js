#!/usr/bin/env node

class Cart {
    
    constructor (total, items) {   
            this.total = 0;
            this.store = [];
    }

    addItem (itemId, price, quantity)  {
        this.total += price
        let element =
        this.store.push(itemId,price,quantity)
        console.log(this.store)
    }

    removeItem () {

    }

    addDiscount () {

    }

    totalItems () {
            console.log(this.addItem())
    }

    totalQuantity () {

    }

    totalPrice () {

    }

    showAll () {
        console.log(this.store)
        return this
    }

    checkout () {

    }
}   


const cart = new Cart()

cart.addItem({ item_id: 1, price: 30000, quantity: 3})
// cart.addItem({ item_id: 2, price: 10000 })
// cart.addItem({ item_id: 3, price: 5000, quantity:2 })
// // car.removeItem({item_id: 2})
// cart.addItem({ item_id: 4, price: 400, quantity: 6 })
// // // cart.addDiscount('50%')
// cart.totalItems()
// //cart.showAll()