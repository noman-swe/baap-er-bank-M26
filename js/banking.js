// handle deposite button event
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get the amount diposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmount; 

    //clear the deposit input
    depositInput.value = '';
});