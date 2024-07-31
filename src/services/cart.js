// quais açoes o carrinho pode fazer

//adicionar item no carrinho
async function addItem(userCart,item){
    userCart.push(item);
}

//calcula o total
async function calculateTotal(userCart){
    console.log("\nshopee cart is")
   const  result =  userCart.reduce((total, item)=> total + item.subTotal(),0);
   
   console.log(`\n🎁${result}`)
}

//deletar um item 
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item)=> item.name === name)

    if(index != -1){
        userCart.splice(index,1)
    }

}
//remover um item por index
async function removeItemByIndex(userCart,index){

    const deleteItem = index -1

    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteItem,1);
    }
}

async function removeItem(userCart,item){
      const indexFound = userCart.findIndex((p,index)=> p.name === item.name );

      if(indexFound == -1){
        console.log("item não encontrado")
      }

      if(userCart[indexFound].quantity > 1){
         userCart[indexFound].quantity -= 1;
         return;
      };

      if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound,1);
        return;
      }
}

//cupom fiscal
async function displayCart(userCart){
    console.log("\nShopee list:")
    userCart.forEach((item,index) => {
        console.log(`${index+1}.${item.name} - R$ ${item.price} * ${item.quantity} | Subtotal = ${item.subTotal()}`)
    });
}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
};