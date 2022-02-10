//handal deposit balance
document.getElementById("deposit-button").addEventListener("click", function(){
    //get amount deposited
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText)
    //console.log(newDepositAmount);

    //update deposit total
    const TotalDeposit = document.getElementById("deposit-total");
    //console.log(TotalDeposit);
    const previousDepositAmountText = TotalDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newTotalDeposit = previousDepositAmount + newDepositAmount;
    //console.log(newTotalDeposit);
    TotalDeposit.innerText = newTotalDeposit;

    // update Account Balance
    const totalBalance = document.getElementById("total-account-balance");
    const previousTotalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceText);
    const totalAccountBalance = previousTotalBalance + newDepositAmount;
    totalBalance.innerText = totalAccountBalance;
    // clear deposite input fild
    depositInput.value = " ";
});

//handle withdraw balance
document.getElementById("withdraw-button").addEventListener("click", function(){
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInput.value;
    const newWithdrawamount = parseFloat(withdrawInputText);
    //console.log(typeof newWithdrawamount);

    //update withdraw balance
    const TotalWithdraw = document.getElementById("withdraw-total");
    //console.log(TotalWithdraw);
    const previousWithdrawAmountText = TotalWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
   // console.log(previousWithdrawAmount)
    const newTotalWithdraw = previousWithdrawAmount + newWithdrawamount;
    console.log(newTotalWithdraw);
    TotalWithdraw.innerText = newTotalWithdraw;

    // update Account Balance
    const totalBalance = document.getElementById("total-account-balance");
    const previousTotalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceText);
    const totalAccountBalance = previousTotalBalance - newWithdrawamount;
    totalBalance.innerText = totalAccountBalance;

    //clear withdraw input field
    withdrawInput.value="";
})



