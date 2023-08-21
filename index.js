let couponApplied = false;
let total = 0;
let discount = 0;
let totalAmount = 0;

function handleClickBtn(target) {
    const selectedItemContainer = document.getElementById('selected-items');
    const itemName = target.parentNode.childNodes[5].innerText;
    
    const li = document.createElement('ol');
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
    //console.log(target.parentNode.childNodes[7].innerText.split(" ")[0]);
    const price = target.parentNode.childNodes[7].innerText.split(" ")[0];
    total = parseFloat(total)+parseFloat(price);
    document.getElementById('total').innerText = total;
    totalAmount = parseFloat(total)-parseFloat(discount);
    document.getElementById('totalAmount').innerText = totalAmount;
   // console.log(total);
}






// function applyCoupon() {
    
//     const couponCode = document.getElementById('couponInput').value;
//     const discountAmount = 0.2; // 20% discount




  
//     if (couponCode === 'SELL200' && !couponApplied) {

        
        
//       total *= (1 - discountAmount); // Apply the discount
//       document.getElementById('total').innerText = total.toFixed(2);
//       couponApplied = true;
//       alert('Coupon applied successfully!');
      
//       discount = parseFloat(total)*0.2;
      
//       document.getElementById('discount').innerText = discount.toFixed(2);
      


//     } else {
//       alert('Invalid coupon code or already applied.');
//     }
//   }



function applyCoupon() {
    const couponCode = document.getElementById('couponInput').value;
    const discountAmount = 0.2; // 20% discount
  
    if (couponCode === 'SELL200' && !couponApplied) {
      if (total > 200) {
        total *= (1 - discountAmount); // Apply the discount
        document.getElementById('total').innerText = total.toFixed(2);
        couponApplied = true;
        alert('Coupon applied successfully!');
        discount = parseFloat(total)*0.2;
      
     document.getElementById('discount').innerText = discount.toFixed(2);
        updateMakePurchaseButtonState();
      } else {
        alert('Coupon cannot be applied as total is not greater than 200.');
      }
    } else {
      alert('Invalid coupon code or already applied.');
    }
  }
  
  function updateMakePurchaseButtonState() {
    const makePurchaseButton = document.getElementById('makePurchaseButton');
    makePurchaseButton.disabled = total === 0;
  }
  
  
  document.getElementById('couponInput').addEventListener('input', function() {
    const couponInput = document.getElementById('couponInput');
    const applyCouponButton = document.getElementById('applyCouponButton');
    
    if (couponInput.value.trim() !== '') {
      applyCouponButton.disabled = false;
    } else {
      applyCouponButton.disabled = true;
    }
  });


  function updateMakePurchaseButtonState() {
    const makePurchaseButton = document.getElementById('makePurchaseButton');
    makePurchaseButton.disabled = total === 0;
  }




