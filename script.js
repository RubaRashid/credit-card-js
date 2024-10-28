// JavaScript to store debit card details
// const person = {
//     Name : "CARDHOLDER NAME",
//     address : "house no. L 920 sector 48-E korangi 2 karachi",
//     DateOfBirth : "5-5-2003",
//     MobileNumber : 923056789012,
//     EmailAddress : "ruba@gmail.com",
//     CNIC : 42201123456789,
//     bankname :"BANK NAME",
//     number: "1234  5678  9012  3456",
//     expiry: "01/25",
//     cvv: "1234"
// }

// let  {bankname, expiry, number, Name, cvv } = person ;

// document.getElementById("bankName").innerHTML = bankname;
// document.getElementById("number").innerHTML = number;
// document.getElementById("cvv").innerHTML = cvv;
// document.getElementById("expiry").innerHTML += expiry;
// document.getElementById("name").innerHTML = Name;


document.getElementById('submit').addEventListener('click', function () {
    const bankName = document.getElementById('bank-name').value;
    const cardNumber = document.getElementById('input-number').value;
    const cardHolder = document.getElementById('input-holder').value;
    const expiryDate = document.getElementById('input-expiry').value;
    const cvv = document.getElementById('input-cvv').value;

    if (bankName) {
        document.getElementById('card-bankName').innerText = bankName;
    }
    if (cardNumber) {
        document.getElementById('card-number').innerText = cardNumber;
    }
    if (cardHolder) {
        document.getElementById('card-holder').innerText = cardHolder;
    }
    if (expiryDate) {
        document.getElementById('expiry-date').innerText = expiryDate;
    }
    if (cvv) {
        document.getElementById('cvv').innerText = cvv;
    }

    document.getElementById('card').classList.toggle('flip');
});
