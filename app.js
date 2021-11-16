const fullName = prompt("Full name: ");
document.getElementById("fullName").innerHTML = fullName;

const position = prompt("Position: ");
document.getElementById("position").innerHTML = position;

const email = prompt("Email: ");
document.getElementById("email").innerHTML = email;
document.getElementById("email").href = `mailto:${email}`;

const phone = prompt("Phone: ");
document.getElementById("phone").innerHTML = `Tel. ${phone}`;
document.getElementById("phone").href = `tel:${phone}`;

const whatsapp = prompt("Whatsapp number (optional): ");
const whatsappNumber = whatsapp && whatsapp.trim();

if (whatsappNumber) {
    document.getElementById("whatsapp").innerHTML = `Whatsapp. ${whatsapp}`;
    document.getElementById("whatsapp").href = `https://wa.me/${whatsapp.replace(/\s/g, '')}`;
} else {
    document.getElementById("whatsapp").remove();
}
