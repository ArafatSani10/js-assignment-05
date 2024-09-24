
let modalgId = document.getElementById('modal')






document.getElementById('btn-donate').addEventListener('click', function (event) {
    event.preventDefault();
    let donateInput = parseFloat(document.getElementById('input-donation').value);

    if (isNaN(donateInput)){
        alert('Invalid donation amount');
        return
    }
    else if (donateInput < 0) {
        alert('Negetive Number are not allowed')
        return
    }


    else {
        // alert('Number is entered')

        modal.showModal();


    }
    let coinNumber = parseFloat(document.getElementById('btn-add-coin').innerText);
    let totalDonate = coinNumber + donateInput;
    document.getElementById('btn-add-coin').innerText = totalDonate.toFixed(2);


    let myCredit = parseFloat(document.getElementById('my-cedit').innerText);
    let creditDonate = myCredit - donateInput;
    document.getElementById('my-cedit').innerText = creditDonate.toFixed(2);



    // history part for one

    let historyItem = document.createElement("div");

    let nowTime = new Date();
    let donationDate = nowTime.toString();



    historyItem.className = "bg-white rounded-md border border-indigo-500";

    historyItem.innerHTML = `
     <p class="font-bold px-3 py-2"> ${donateInput} Taka is Donate for Flood at Noakhali, Bangladesh</p>
     
   
     <p class="font-bold px-3 py-2"> Date: ${donationDate} </p>

     `;

    let historyContainer = document.getElementById('history-list');

    historyContainer.insertBefore(historyItem, historyContainer.firstChild)



    


})




// fenir
document.getElementById('btn-donate-feni').addEventListener('click', function (event) {
    event.preventDefault();
    let donateInputFeni = parseFloat(document.getElementById('donate-input-feni').value);
    if (isNaN(donateInputFeni)) {
        alert('Invalid donation amount');
        return
    }
    else if (donateInputFeni < 0) {
        alert('Negetive Number are not allowed');
        return
    } else {
        modal.showModal();
    }

    let coinNumberFeni = parseFloat(document.getElementById('btn-add-coin-feni').innerText);
    let totalDonateFeni = coinNumberFeni + donateInputFeni;
    document.getElementById('btn-add-coin-feni').innerText = totalDonateFeni.toFixed(2);
    // document.getElementById('my-cedit').innerText = creditDonateFeni.toFixed(2);

    let myCreditFeni = parseFloat(document.getElementById('my-cedit').innerText);

    let creditDonateFeni = myCreditFeni - donateInputFeni;
    document.getElementById('my-cedit').innerText = creditDonateFeni.toFixed(2);




    // history for  feni

    let historyItem = document.createElement("div");
    let nowTime = new Date();
    let donationDate = nowTime.toString();

    historyItem.className = "bg-white rounded-md border border-indigo-500";

    historyItem.innerHTML = `
<p class="font-bold px-3 py-2"> ${donateInputFeni}  Taka is Donated for Flood Relief in Feni,Bangladesh</p>

<p class="font-bold px-3 py-2"> Date: ${donationDate} </p>

`;

    let historyContainer = document.getElementById("history-list");

    historyContainer.insertBefore(historyItem, historyContainer.firstChild)



})

// quotar calculation
document.getElementById('btn-donate-quota').addEventListener('click', function (event) {
    event.preventDefault();
    let donateInputQuota = parseFloat(document.getElementById('donate-input-quota').value);

    if (isNaN(donateInputQuota)) {
        alert('Invalid donation amount');
        return
    }
    else if (donateInputQuota < 0) {
        alert('Negetive Number are not allowed');
        return
    }
    else {
        // alert('Number is entered')
        modal.showModal();
    }
    let coinNumberQuota = parseFloat(document.getElementById('btn-add-coin-quota').innerText);
    let totalDonateQuota = coinNumberQuota + donateInputQuota;
    document.getElementById('btn-add-coin-quota').innerText = totalDonateQuota.toFixed(2);

    let myCreditQuota = parseFloat(document.getElementById('my-cedit').innerText);

    let creditDonateQuota = myCreditQuota - donateInputQuota;
    document.getElementById('my-cedit').innerText = creditDonateQuota.toFixed(2);




    // history for quota

    let historyItem = document.createElement("div");
    let nowTime = new Date();
    let donationDate = nowTime.toString();

    historyItem.className = "bg-white rounded-md border border-indigo-500";

    historyItem.innerHTML = `
<p class="font-bold px-3 py-2"> ${donateInputQuota}  Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>

<p class="font-bold px-3 py-2"> Date: ${donationDate} </p>

`;

    let historyContainer = document.getElementById('history-list');

    historyContainer.insertBefore(historyItem, historyContainer.firstChild)
})


// index to blog
document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = './blog.html'
})






// history button 

let historyTab = document.getElementById('btn-show-history');
let donationTab = document.getElementById('btn-show-donation');
historyTab.addEventListener('click', function () {

    historyTab.classList.add('bg-yellow-200');


    donationTab.classList.remove('bg-yellow-200');

    document.getElementById('cards-donation').classList.add('hidden');

    document.getElementById('donationHistory').classList.remove('hidden');
})

donationTab.addEventListener('click', function () {
    donationTab.classList.add('bg-yellow-200')

    historyTab.classList.remove('bg-yellow-200');

    document.getElementById('cards-donation').classList.remove('hidden');

    document.getElementById("donationHistory").classList.add("hidden");

})





