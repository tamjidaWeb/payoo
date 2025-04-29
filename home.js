//add money to the account 

//step 1: add an event handler to the add money button inside the form

document.getElementById('btn-add-money').addEventListener('click',function(e){
    //prevent page reload after form submit
    e.preventDefault();
    console.log('money add bttn clicked');

    //step 2: get the value of the input field
    const addMoneyInput = document.getElementById('amount-input').value;
    console.log(addMoneyInput);

    //get the pin number

    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);


    // step 3: verify the pin number
    if(pinNumberInput === '1234'){
        console.log('adding money to your account');

        //step 4: get the corrent balance
        const balance = document.getElementById('current-balance').innerText;
        console.log(balance);

        //step 5: addMoneyInput with balance
        const newBalance = parseFloat(balance) + parseFloat(addMoneyInput);
        console.log(newBalance);


        //step 6:update the balance in the UI/DOM
        document.getElementById('current-balance').innerText = newBalance;

    }
    else{
        alert('please try again!')
    }
})
