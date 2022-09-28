
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const AmountValue = parseFloat(inputAmountText);
    //reset deposit input field
    inputField.value = '';
    return AmountValue;  
}
function updateTotalField(totalFieldId,amount){
    debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const totalAmont = parseFloat(totalText);
    totalElement.innerText = totalAmont + amount;
}
function getCurrentBalance(){
    const previousBalance = document.getElementById('total_balance');
    const previousBalanceText = previousBalance.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText); 
    return previousBalanceAmount;
}
function updateBalance(amount,isAdd){
    const previousBalance = document.getElementById('total_balance');
    const previousBalanceAmount = getCurrentBalance();

    if(isAdd == true){
        previousBalance.innerText = previousBalanceAmount + amount;
    }
    else{
        previousBalance.innerText = previousBalanceAmount - amount; 
    }
}
//handle deposit balance
document.getElementById('deposit_submit').addEventListener('click',function(){
    const depositAmount = getInputValue('deposit_input');
    if(depositAmount > 0){
    updateTotalField('deposit_total', depositAmount);
    updateBalance(depositAmount,true);
    }
    
})
//handle withdraw balance
document.getElementById('withdraw_submit').addEventListener('click',function(){
    const withdrawAmount = getInputValue('withdraw_input')
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
    updateTotalField('withdraw_total',withdrawAmount);
    updateBalance(withdrawAmount,false);
    }
    if(withdrawAmount > currentBalance){
        console.log('You can not withdraw more then what you have in your account!!')
    }

});