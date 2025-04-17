import { cart,removefromcart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatcurrency } from "./utils/money.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import {deliveryOptions} from '../data/deliveryOption.js';


/////////////////////////////////////////////////////////
const today = dayjs();
console.log(today);
const deliveryDate = today.add(7,'days')
deliveryDate.format('dddd, MMMM D');
console.log(deliveryDate.format('dddd, MMMM D'));
/////////////////////////////////////////////////////////
let carthtml = ``;
cart.forEach((item)=>{

    const productid = item.productId;

    let machingproduct;
    products.forEach((product)=>{
        if(product.id === productid){
            machingproduct = product;
        }
    });

    const deliveryOptionId = item.deliveryOptionId;
    let deliveryOption;
    deliveryOptions.forEach((optin)=>{
        if(optin.id === deliveryOptionId){
            deliveryOption = optin;
        }
    });

    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays,'days');
    const datestring = deliveryDate.format('dddd,MMMM D');


    carthtml += `
    <div class="cart-item-container js-cart-item-container-${machingproduct.id}">
            <div class="delivery-date">
              Delivery date: ${datestring}
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
                ${deliveryOptionHTML(machingproduct,item)}
                
                
              </div>
            </div>
          </div>
    `
});

function deliveryOptionHTML(machingproduct,cartitem){
    let html = '';
    deliveryOptions.forEach((item)=>{
        const today = dayjs();
        const deliveryDate = today.add(item.deliveryDays,'days');
        const datestring = deliveryDate.format('dddd,MMMM D');
        const priceString = item.priceCents === 0 ? 'FREE' :`$${formatcurrency(item.priceCents)} - `
        
        const checked = item.id === cartitem.deliveryOptionId;
        html += `
        <div class="delivery-option">
            <input type="radio" 
            ${checked ? 'checked' : ''}
            class="delivery-option-input"
            name="delivery-option-${machingproduct.id}">
            <div>
            <div class="delivery-option-date">
                ${datestring}
            </div>
            <div class="delivery-option-price">
                ${priceString} Shipping
            </div>
            </div>
        </div>
        `

    })
    return html;
}

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