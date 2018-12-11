//retrieving the custom amount from the back window and putting it in local storage
function addInLocal() {
var amount = document.getElementById('amount').value;
localStorage.setItem("amount", amount);
}

var customamount = document.getElementById('customamount');
var overviewOrder = document.getElementById('overviewOrder');
var localStorageAmount = localStorage.getItem("amount");
console.log(localStorageAmount);

function setOverviewOrder(){
    if (localStorageAmount < 49 && localStorageAmount > 5 ) {
      overviewOrder.innerHTML = "You are a real hero";
    }
    else if (localStorageAmount < 75 && localStorageAmount > 49 ) {
      overviewOrder.innerHTML = "One small Bothle with extra battery";
    }
    else if (localStorageAmount < 399 && localStorageAmount > 75 ) {
      overviewOrder.innerHTML = "One large Bothle with extra battery";
    }
    else if (localStorageAmount < 499 && localStorageAmount > 399 ) {
      overviewOrder.innerHTML = "6 large + 6 small Bothles";
    }
    else if (localStorageAmount < 999 && localStorageAmount > 499 ) {
      overviewOrder.innerHTML = "12 large Bothles";
    }
    else if (localStorageAmount < 1049 && localStorageAmount > 999 ) {
      overviewOrder.innerHTML = "50 large Bothles with 24 extra batteries";
    }
    else if (localStorageAmount > 1049 ) {
      overviewOrder.innerHTML = "90 large Bothles with 90 extra batteries";
    }
}
setOverviewOrder();

//change amount
function customAmountFunction(){
  customamount.innerHTML = localStorage.getItem("amount");
}
customAmountFunction();
