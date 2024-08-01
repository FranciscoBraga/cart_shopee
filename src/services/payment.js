//quais ações envolve o pagamento

//inclui moedas para obter desconto
async function paymentCart(userCart,qtaMoeda,cardLimit,parcel,subTotal){
  console.log(`\n Shopee payment:`)
    const total = (subTotal - qtaMoeda) * amountParcel(parcel) ;

    if(card(cardLimit,total)){
        displayPayment(userCart,total)
    }else{
      console.log('Problemas com seu cartão de crédito')
    }
}
//verificar a quantidade de parcelas
  function amountParcel(parcel){
    if(parcel > 3){
        return 0.2 * parcel
    }
    return 1
}

//liberar ou não pagamento conforme o limite do cartão
  function card(cardLimit,total){
  if(cardLimit < total){
    return false
  }
  return true
}

//nota fiscal
 function displayPayment(userCart, total){
  userCart.forEach((item,index) => {
    console.log(`${index+1} - ${item.name} - R$ ${item.price } * ${item.quantity} | SubTotal = ${item.subTotal()} `)
  });
  console.log(`\nValor Total: ${total}`)
}

export {paymentCart}
