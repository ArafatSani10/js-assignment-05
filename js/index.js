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

// fenir calculation
document.getElementById('btn-donate-feni').addEventListener('click', function(event){
    event.preventDefault();
    let donateInputFeni = parseFloat(document.getElementById('donate-input-feni').value);
    if(isNaN (donateInputFeni)){
        alert('please entered the valid Number');
    }
    else if(donateInputFeni < 0){
        alert('Negetive Number are not allowed');
    }
    else{
        alert('Number is entered')
    }

    let coinNumberFeni = parseFloat(document.getElementById('btn-add-coin-feni').innerText);
    let totalDonateFeni = coinNumberFeni + donateInputFeni;
    document.getElementById('btn-add-coin-feni').innerText = totalDonateFeni;


    let myCreditFeni = parseFloat(document.getElementById('my-cedit').innerText);
    let creditDonateFeni = myCreditFeni - donateInputFeni;
    document.getElementById('my-cedit').innerText = creditDonateFeni;
})