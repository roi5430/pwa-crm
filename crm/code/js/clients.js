const clientsList = document.getElementById('clientsList');

customers.forEach(client => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<a class="client__item" href="client.html?id=${client.id}">
        <p>${client.userName} ${client.lastName} </p>
        <p>${client.birthDate}</p>
        <p> ${client.contactInformation.email}</p>
        <p> ${client.contactInformation.phone}</p></a>`;
  clientsList.appendChild(listItem);
});

const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

openModalBtn.addEventListener('click', openModal);

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

function saveClient() {
  const fullName = document.getElementById('fullName').value;
  const lastName = document.getElementById('lastName').value;
  const contact = document.getElementById('contact').value;
  const birthdate = document.getElementById('birthdate').value;
  const socialNetworks = document.getElementById('socialNetworks').value;
  const recommendation = document.getElementById('recommendation').value;
  const clientForm = document.getElementById('clientForm');

  if (
    !fullName ||
    !lastName ||
    !contact ||
    !birthdate ||
    !socialNetworks ||
    !recommendation
  ) {
    alert('Будь ласка, заповніть всі поля!');
    return;
  }

  const clientData = {
    id: Math.random().toString(36).substr(2, 9),
    userName: fullName,
    lastName: lastName,
    contactInformation: {
      email: '[redacted email address]',
      phone: contact,
    },
    birthDate: birthdate,
    socialNetworks: socialNetworks,
    source: recommendation,
    socialNetworks: {
      facebook: '[redacted URL]',
      telegram: '[redacted URL]',
    },
    visitHistory: [],
  };

  const customers = JSON.parse(localStorage.getItem('customers')) || [];
  customers.push(clientData);
  localStorage.setItem('customers', JSON.stringify(customers));

  alert('Дані клієнта збережено!');
  closeModal();
  clientForm.reset();
}

const cancelBtn = document.getElementById('cancelBtn');
cancelBtn.addEventListener('click', function () {
  document.getElementById('modal').style.display = 'none';
});
