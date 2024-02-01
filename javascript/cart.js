function updateCaseNumber(product, price, increasing) {
  const caseInput = document.getElementById(product + "-number");
  let caseNumber = caseInput.value;

  if (increasing) {
    caseNumber = parseInt(caseNumber) + 1;
  } else if (caseNumber > 0) {
    caseNumber = parseInt(caseNumber) - 1;
  }
  caseInput.value = caseNumber;
  // case amount
  const caseTotal = document.getElementById(product + "-total");
  caseTotal.innerText = caseNumber * price;

  subTotal();
}
function getAllInput(product){
    const getPhoneInput = document.getElementById(product + '-number');
    const phoneInput = parseInt(getPhoneInput.value);
    return phoneInput;
    
}


function subTotal(){
    const phoneTotal = getAllInput('phone') * 1219;
    const caseTotal = getAllInput('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}
//phone handle

document.getElementById("phone-plus").addEventListener("click", function () {
  updateCaseNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateCaseNumber("phone", 1219, false);
});

//case handle
document.getElementById("case-plus").addEventListener("click", function () {
  updateCaseNumber("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateCaseNumber("case", 59, false);
});
