// // step 1: set event handler
// document.getElementById('btn-login').addEventListener('click', function(event){
//     //step 2: prevent default behavior reloading browser
//     event.preventDefault();
  
//     // step 3: get the phone number and the pin number

//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;

//     console.log(phoneNumber,pinNumber);

//     // step 4:validate phone and pin number
//     if(pinNumber ==='1234' && phoneNumber.startsWith('01') && phoneNumber.length === 3){
//         console.log('you are logged in successfully')

//         // step 5: allow user to use the website
//     }
//     else{
//         alert('wrong pin or pin number')
//     }
    
// })




document.getElementById('btn-login').
        addEventListener('click', function(event){
        event.preventDefault();


        // get phone number and pin

        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        console.log(phoneNumber,pinNumber);

        if(pinNumber === '1234' && phoneNumber.startsWith('01') && phoneNumber.length === 3){
            console.log('you are logged in successfully');
            window.location.href = '/home.html';
        }
            else{
                alert('wrong pin or pin number');
            }

               })
