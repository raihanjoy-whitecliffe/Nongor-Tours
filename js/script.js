function validateContact() {
    /*taking input from the form*/
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    /*Empty field check*/
    if (fullName === "" || email === "" || phone === "" || message === "") {
        alert("❌ Missing Information: Please fill in all fields");
        return;
    }

    /* Email format check*/
    if (email.indexOf("@") === -1) {
        alert("❌ Invalid Email: Your email must contain an '@' symbol.");
        return; 
    }

    /*confirmation before paying*/
    let sendMessage = alert("Are you sure you want to send this message now?");
    if (sendMessage) {
        alert("Thank you! Your message has been sent successfully.");
    } else {
        alert("❌ Message submission cancelled.");
    }
}
// Total
let totalCost = 0;
//Mount cook page checkout
function buymtcooksingle() {
    totalCost += 6000;
    updateDisplays();
}
function mtcookgroup() {
    let quantity = document.getElementById("people-count").value;
    if (quantity < 2 || quantity > 5) { alert("Please select 2-5 people"); }
    else { totalCost += (quantity * 5700); updateDisplays(); }
}

// Hobbiton page checkout
function buyhobbitonsingle() {
    totalCost += 3000;
    updateDisplays();
}
function buyhobbitongroup() {
    let quantity = document.getElementById("people-count").value;
    if (quantity < 2 || quantity > 5) { alert("Please select 2-5 people"); }
    else { totalCost += (quantity * 2500); updateDisplays(); }
}

// clear button for both pages
function clearT() {
    totalCost = 0;
    document.getElementById("people-count").value = 0;
    document.getElementById("cardName").value = "";
    document.getElementById("cardNumber").value = "";
    document.getElementById("expiry").value = "";
    document.getElementById("cvv").value = "";
    document.getElementById("customerName").value = "";
    document.getElementById("customerEmail").value = "";
    document.getElementById("customerPhone").value = "";
    updateDisplays();
}
function updateDisplays() {
    if(document.getElementById("display-total")) document.getElementById("display-total").innerText = totalCost;
    if(document.getElementById("final-amount")) document.getElementById("final-amount").innerText = totalCost;
    if(document.getElementById("people-count-show")) document.getElementById("people-count-show").innerText = document.getElementById("people-count").value;
}


// Payment Validation
function processPayment() {
    let name = document.getElementById('cardName').value;
    let number = document.getElementById('cardNumber').value;
    let cvv = document.getElementById('cvv').value;
    let customerName = document.getElementById('customerName').value;
 //checks if the cart is empty 
    if (totalCost === 0) {
        alert("Your cart is empty!");
    } else if (name === "") {
        alert("Card Owner Name is needed!");
    } else if (number.length !== 16) {
        alert("Card number must be 16 digits.");
    } else if (cvv.length !== 3) {
        alert("CVV must be 3 digits.");
    } else {
        alert(" $" + totalCost + " successful! Thank you, " + customerName + ".");
        clearT(); // Resets total and updates the display
    }
}
// mtcook buttons
if (document.getElementById('mtcook-single')) document.getElementById('mtcook-single').onclick = buymtcooksingle;
if (document.getElementById('mtcook-group')) document.getElementById('mtcook-group').onclick = mtcookgroup;

// Hobbiton buttons
if (document.getElementById('hobbiton-single')) document.getElementById('hobbiton-single').onclick = buyhobbitonsingle;
if (document.getElementById('hobbiton-group')) document.getElementById('hobbiton-group').onclick = buyhobbitongroup;

// Clear Button
if (document.getElementById('clear-btn')) document.getElementById('clear-btn').onclick = clearT;