// button js
const depositBtn = document.getElementById('deposit-btn');
const buyBtc = document.getElementById('buy-btc');
const buyEth = document.getElementById('buy-eth')
// field js
const depositField = document.getElementById('balance-field');
const btcField = document.getElementById('btc-field');
const ethField = document.getElementById('eth-field');

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