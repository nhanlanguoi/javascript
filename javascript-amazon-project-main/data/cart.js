export let cart = JSON.parse(localStorage.getItem('cart'));


if(!cart){
    cart = [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 3,
    },{
    
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
    }]
}




function saveTostorage(){
    localStorage.setItem('cart' , JSON.stringify(cart));
}

export function addtocart(productId){
  let machingItem;
      cart.forEach((item)=>{
        if(productId === item.productId){
          machingItem = item;
        }
      });

      if(machingItem){
        machingItem.quantity++;
      }else{
        cart.push({
          productId: productId,
          quantity:1,
        });
      }
      saveTostorage();
}


export function removefromcart(productid){
    for(let i = 0; i < cart.length; i++){
        if(cart[i].productId === productid){
            cart.splice(i, 1); // Xóa phần tử tại vị trí i
            break; // Thoát vòng lặp sau khi xóa
        }
    }
    saveTostorage();
}