function resetForm() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("ipAddress").value = "";
}

function registrationForm() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let ipAddress = document.getElementById("ipAddress").value;

  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
      <h2 style="color: red;">Eingegebene Werte</h2>
      <ul>
          <li><strong>Vorname:</strong> ${firstName}</li>
          <li><strong>Nachname:</strong> ${lastName}</li>
          <li><strong>E-mail:</strong> ${email}</li>
          <li><strong>IP-Addresse:</strong> ${ipAddress}</li>
        </ul>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registrationButton").addEventListener("click", function (e) {
        e.preventDefault();
        registrationForm();
      });
    document.getElementById("resetButton").addEventListener("click", function () {
      resetForm();
    });
  });