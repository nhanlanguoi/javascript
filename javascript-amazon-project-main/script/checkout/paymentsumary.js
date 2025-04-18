import { cart } from "../../data/cart.js";
import { getproduct } from "../../data/products.js";
import { getdeliveryOption } from "../../data/deliveryOption.js";
import formatcurrency from "../utils/money.js";
export function renderpaymentsummary(){
    let productpricecent = 0;
    let shippingpricent =0;
    cart.forEach((iteam)=>{
        const product = getproduct(iteam.productId);
        productpricecent += product.priceCents *iteam.quantity;
        

        const deliveryOption = getdeliveryOption(iteam.deliveryOptionId);
        shippingpricent += deliveryOption.priceCents;


    })
    const total = productpricecent+shippingpricent;
    const tax = total *0.1;
    const totalcent = total + tax;

    let paymentsummaryhtml= `
    <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${formatcurrency(productpricecent)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatcurrency(shippingpricent)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatcurrency(total)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatcurrency(tax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatcurrency(totalcent)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
    `

    document.querySelector('.js-payment-summary').innerHTML =paymentsummaryhtml;
}