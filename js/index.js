document.getElementById('btn-donate').addEventListener('click', function (event) {
    event.preventDefault();
    let donateInput = parseFloat(document.getElementById('input-donation').value);

    if (isNaN(donateInput)) {
        alert('please entered the valid Number');
    }

    else if (donateInput < 0) {
        alert('Negetive Number are not allowed')
    }

    else {
        alert('Number is entered')
    }
    let coinNumber = parseFloat(document.getElementById('btn-add-coin').innerText);
    let totalDonate = coinNumber + donateInput;
    document.getElementById('btn-add-coin').innerText = totalDonate.toFixed(2);


    let myCredit = parseFloat(document.getElementById('my-cedit').innerText);
    let creditDonate = myCredit - donateInput;
    document.getElementById('my-cedit').innerText = creditDonate.toFixed(2);



     // history part for one

     let historyItem = document.createElement("div");

     historyItem.className ="bg-white rounded-md border border-indigo-500";
     
     historyItem.innerHTML= `
     <p class="font-bold px-3 py-2"> ${donateInput} Taka is Donate for Flood at Noakhali, Bangladesh</p>
     
     <p class="font-bold px-3 py-2"> Date: ${new Date().toLocaleDateString()}</p>
     `;
     
     const historyContainer = document.getElementById('history-list');
     
     historyContainer.insertBefore(historyItem, historyContainer.firstChild)
     

})




// fenir
document.getElementById('btn-donate-feni').addEventListener('click', function (event) {
    event.preventDefault();
    let donateInputFeni = parseFloat(document.getElementById('donate-input-feni').value);
    if (isNaN(donateInputFeni)) {
        alert('please entered the valid Number');
    }
    else if (donateInputFeni < 0) {
        alert('Negetive Number are not allowed');
    } else {
        alert('Number is entered')
    }

    let coinNumberFeni = parseFloat(document.getElementById('btn-add-coin-feni').innerText);
    let totalDonateFeni = coinNumberFeni + donateInputFeni;
    document.getElementById('btn-add-coin-feni').innerText = totalDonateFeni.toFixed(2);
    // document.getElementById('my-cedit').innerText = creditDonateFeni.toFixed(2);

    let myCreditFeni = parseFloat(document.getElementById('my-cedit').innerText);

    let creditDonateFeni = myCreditFeni - donateInputFeni;
    document.getElementById('my-cedit').innerText = creditDonateFeni.toFixed(2);



    
    // history for  two

    const historyItem = document.createElement("div");

historyItem.className ="bg-white rounded-md border border-indigo-500";

historyItem.innerHTML= `
<p class="font-bold px-3 py-2"> ${donateInputFeni}  Taka is Donated for Flood Relief in Feni,Bangladesh</p>

<p class="font-bold px-3 py-2"> Date: ${new Date().toLocaleDateString()}</p>
`;

const historyContainer = document.getElementById("history-list");

historyContainer.insertBefore(historyItem, historyContainer.firstChild)



})

// quotar calculation
document.getElementById('btn-donate-quota').addEventListener('click', function (event) {
    event.preventDefault();
    let donateInputQuota = parseFloat(document.getElementById('donate-input-quota').value);

    if (isNaN(donateInputQuota)) {
        alert('please entered the valid Number');
    }
    else if (donateInputQuota < 0) {
        alert('Negetive Number are not allowed');
    }
    else {
        alert('Number is entered')
    }
    let coinNumberQuota = parseFloat(document.getElementById('btn-add-coin-quota').innerText);
    let totalDonateQuota = coinNumberQuota + donateInputQuota;
    document.getElementById('btn-add-coin-quota').innerText = totalDonateQuota.toFixed(2);

    let myCreditQuota = parseFloat(document.getElementById('my-cedit').innerText);

    let creditDonateQuota = myCreditQuota - donateInputQuota;
    document.getElementById('my-cedit').innerText = creditDonateQuota.toFixed(2);



    
    // history for quota

    const historyItem = document.createElement("div");

historyItem.className ="bg-white rounded-md border border-indigo-500";

historyItem.innerHTML= `
<p class="font-bold px-3 py-2"> ${donateInputQuota}  Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>

<p class="font-bold px-3 py-2"> Date: ${new Date().toLocaleDateString()}</p>
`;

const historyContainer = document.getElementById("history-list");

historyContainer.insertBefore(historyItem, historyContainer.firstChild)
})


// index to blog
document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = './blog.html'
})






// history button 

let historyTab = document.getElementById('btn-show-history');
let donationTab = document.getElementById('btn-show-donation');
historyTab.addEventListener('click', function(){

    historyTab.classList.add( 'bg-yellow-200');


    donationTab.classList.remove('bg-yellow-200');

    document.getElementById('cards-donation').classList.add('hidden');

    document.getElementById('donationHistory').classList.remove('hidden');
})

donationTab.addEventListener('click', function(){
    donationTab.classList.add('bg-yellow-200')

    historyTab.classList.remove('bg-yellow-200');

    document.getElementById('cards-donation').classList.remove('hidden');

    document.getElementById("donationHistory").classList.add("hidden");

})





