document.getElementById('btn-donate').addEventListener('click', function(event){
    event.preventDefault();
    let donateInput = parseFloat(document.getElementById('input-donation').value);

    if(isNaN(donateInput)){
        alert('please entered the valid Number');
    }

    else if(donateInput < 0){
        alert('Negetive Number are not allowed')
    }

    else{
        alert('Number is entered')
    }
    let coinNumber = parseFloat(document.getElementById('btn-add-coin').innerText);
    let totalDonate = coinNumber + donateInput;
    document.getElementById('btn-add-coin').innerText = totalDonate;


    let myCredit = parseFloat(document.getElementById('my-cedit').innerText);
    let creditDonate = myCredit - donateInput;
    document.getElementById('my-cedit').innerText = creditDonate;
})

