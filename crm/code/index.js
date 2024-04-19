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
