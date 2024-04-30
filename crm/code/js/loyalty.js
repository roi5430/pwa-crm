const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];

function openModal() {
  modal.style.display = 'block';
}
function closeModal() {
  modal.style.display = 'none';
}

function applyActions() {
  const bonusAmount = document.getElementById('bonus').value;
  const promoCode = document.getElementById('promoCode').value;

  alert('Кількість бонусів: ' + bonusAmount + '\nПромокод: ' + promoCode);
  closeModal();
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
