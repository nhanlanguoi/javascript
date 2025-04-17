import { cart,removefromcart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatcurrency } from "./utils/money.js";

let carthtml = ``;
cart.forEach((item)=>{

    const productid = item.productId;

    let machingproduct;
    products.forEach((product)=>{
        if(product.id === productid){
            machingproduct = product;
        }
    });

    carthtml += `
    <div class="cart-item-container js-cart-item-container-${machingproduct.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${machingproduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${machingproduct.name}
                </div>
                <div class="product-price">
                  $${formatcurrency(machingproduct.priceCents)};
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${item.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-Id1 ="${machingproduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${machingproduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${machingproduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${machingproduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `
});

document.querySelector('.js-order-summary').innerHTML = carthtml;


document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click', ()=>{
        const productid = link.dataset.productId1
        removefromcart(productid);

        const contaniner = document.querySelector(`.js-cart-item-container-${productid}`);
        console.log(contaniner);
        contaniner.remove();// nó sẽ hoạt động vì carthtml không còn lưu nó nữa mà đã chuyển cho DOM bằng lệnh document.querySelector('.js-order-summary').innerHTML = carthtml;

    })
});

console.log(document.querySelectorAll('.js-delete-link'))