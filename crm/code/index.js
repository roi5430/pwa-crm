//employees

const tableBody = document.getElementById('employees-table-body');

workers.forEach(worker => {
  const row = document.createElement('tr');
  row.innerHTML = `
        <td>${
          worker.info.name +
          ' ' +
          worker.info.surname +
          ' ' +
          worker.info.birthdate
        }</td>
        <td>${worker.info.phone + ' ' + worker.info.email}</td>
        <td>${worker.info.address}</td>
        <td>${worker.role}</td>
        <td>${worker.salary.type} ${worker.salary.rate}</td>
        <td>${worker.vacation.days + '/' + worker.sick_leave.days}</td>
        <td>${worker.schedule}</td>
    `;
  tableBody.appendChild(row);
});

function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

// Функція закриття модального вікна
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// Функція застосування даних співробітника
function applyEmployee() {
  // Отримання значень з полів вводу
  const fullName = document.getElementById('fullName').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const passport = document.getElementById('passport').value;
  const employmentContract =
    document.getElementById('employmentContract').value;
  const position = document.getElementById('position').value;
  const salary = document.getElementById('salary').value;
  const workSchedule = document.getElementById('workSchedule').value;

  // Виведення отриманих даних у сповіщенні
  alert(
    `ПІБ: ${fullName}\nНомер телефону: ${phoneNumber}\nЕмейл: ${email}\nАдреса проживання: ${address}\nПаспорт: ${passport}\nДоговір про працю: ${employmentContract}\nПосада: ${position}\nЗарплата: ${salary}\nРобочий графік: ${workSchedule}`
  );

  closeModal();
}
