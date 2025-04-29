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
    console.log(pinNumberInput)
})