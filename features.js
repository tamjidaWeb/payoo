//show the cash out form

document.getElementById('show-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    console.log('show cash out');

    document.getElementById('cash-out-form').classList.remove('hidden');

    //hide the add money form

    document.getElementById('add-money-form').classList.add('hidden')
})

document.getElementById('show-add-money').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');

})