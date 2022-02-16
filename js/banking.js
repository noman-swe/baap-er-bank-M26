// handle deposite button event
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get the amount diposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);
    //console.log(depositAmount);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal; 

    // update account balance
    const prevoiusBalanceTotal =  document.getElementById('balance-total');
    const previousBalanceTotalText = prevoiusBalanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    prevoiusBalanceTotal.innerText = newBalanceTotal;

    //clear the deposit input
    depositInput.value = '';
});

// handle with withdraw handler 
document.getElementById('withdraw-btn').addEventListener('click', function(){

    // new amount from input field
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);

    //exsisting amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // set the value in balance section
    balanceTotal.innerText = newBalanceTotal;    

    // clear withdraw input value
    withdrawInput.value = '';
});
