const fullName = prompt("Full name: ");
document.getElementById("fullName").innerHTML = fullName;

const position = prompt("Position: ");
document.getElementById("position").innerHTML = position;

const email = prompt("Email: ");
document.getElementById("email").innerHTML = email;
document.getElementById("email").href = `mailto:${email}`;

const phone = prompt("Phone: ");
document.getElementById("phone").innerHTML = phone;
document.getElementById("phone").href = `tel:${phone}`;
