document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    console.log('button clicked');

    const cashOut = document.getElementById('input-cash-out').value;

    const pin = document.getElementById('input-cash-out-pin').value;
    console.log(cashOut,pin);

    if(pin === '1234'){
        console.log('money is reducing');
        const balance = document.getElementById('current-balance').innerText;
        console.log(balance);

        const newBalance = parseFloat(balance) - parseFloat(cashOut);
        console.log(newBalance);
        //update the UI

        document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert('please try again');
    }
})