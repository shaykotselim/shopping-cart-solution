 function updateCase (product, price, isIncrease){
    const caseInput = document.getElementById(product + '-input')
    let caseInputText = caseInput.value;
    
    if ( isIncrease == true) {
        caseInputText = parseInt(caseInputText) + 1;
    }

    else if (caseInputText > 0) {
        caseInputText = parseInt (caseInputText) -1;
    }
        caseInput.value = caseInputText;
    // update total 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseInputText * price;
    calculateTotal ()
 }
 function calculateTotal (){
     const phoneInputText = document.getElementById('phone-input');
   
     const phoneNumberText =parseInt(phoneInputText.value);
     const phoneTotalText = phoneNumberText * 1259;
     
     const caseInputText = document.getElementById('case-input');
     const caseNumberText =parseInt(caseInputText.value);
     const caseTotalText = caseNumberText * 59;

     const subTotal = phoneTotalText + caseTotalText;
     const taxTotal = subTotal / 10;
     const totalPrice = subTotal + taxTotal;
     document.getElementById('sub-total').innerText = subTotal;
     document.getElementById('tax-total').innerText = taxTotal;
     document.getElementById('cost-total').innerText = totalPrice;
 }
// Phone quantity increase & decrease
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCase ('phone', 1259, true);
})
 
document.getElementById('phone-minus').addEventListener('click', function () {
    updateCase ('phone', 1259, false)
})


//  phoneCase Quantity increase & decrease
document.getElementById('case-plus').addEventListener('click', function () { 
    updateCase ('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateCase ('case', 59, false);
})