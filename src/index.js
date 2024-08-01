import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"
import * as payment from "./services/payment.js"

const myCart = []

console.log("Welacome to the your shopee cart")

const item1 = await createItem("Ferrari",100,1);
const item2 = await createItem("Lamborghini",500,2)

 await cartService.addItem(myCart,item1)
 await cartService.addItem(myCart,item2)

 await cartService.displayCart(myCart)

 await cartService.deleteItem(myCart, item2.name)

 await cartService.displayCart(myCart)

 await cartService.addItem(myCart,item2)

 await cartService.displayCart(myCart)

 await cartService.removeItem(myCart,item2)


 await cartService.displayCart(myCart)

 
 await cartService.removeItem(myCart,item2)

 await cartService.displayCart(myCart)

console.log("\nshopee cart is")

 let result = await cartService.calculateTotal(myCart)

 console.log(`\n🎁${result}`)

await payment.paymentCart(myCart,10,1000,7,result)