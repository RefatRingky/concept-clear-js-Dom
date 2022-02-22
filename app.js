// button js
const depositBtn = document.getElementById('deposit-btn');
const buyBtc = document.getElementById('buy-btc');
const buyEth = document.getElementById('buy-eth')
// field js
const depositField = document.getElementById('balance-field');
const btcField = document.getElementById('btc-field');
const ethField = document.getElementById('eth-field');
// Get value from Input box
function getInputValue(boxID) {
    let inputBox = document.getElementById(boxID)
    let inputAmount = parseFloat(inputBox.value)
    if (isNaN(inputAmount) || inputAmount < 0) {
      inputBox.value = ''
      return alert('Please input valid amount of money in number format')
    }
    inputBox.value = ''
    return inputAmount
  }
depositBtn.addEventListener('click',function (event) {
    event.preventDefault();
    let depositBox = document.getElementById('deposit-box');
    // console.log(depositBox.value);
    let availableBalnace = parseFloat(depositField.innerText);
    let inputNumber = parseFloat(depositBox.value);
    if (isNaN(inputNumber) || (inputNumber < 0)) {
        depositBox.value = '';
        return alert('Please Input Valid Number');
    }
    depositField.innerText = inputNumber + availableBalnace;
    depositBox.value = '';
})