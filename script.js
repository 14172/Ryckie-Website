const nameInput = document.getElementById('name');
const greeting = document.getElementById('greeting');
const form = document.getElementById('booking-form');
const message = document.getElementById('form-message');

// 1. 即時更新歡迎語
nameInput.addEventListener('input', () => {
  greeting.textContent = nameInput.value
    ? `您好，${nameInput.value}！歡迎預約`
    : '您好！';
});

// 2. 表單送出檢查
form.addEventListener('submit', function(event) {
  event.preventDefault(); // 阻止預設送出行為

  const name = nameInput.value.trim();
  const email = document.getElementById('email').value.trim();
  const date = document.getElementById('date').value;

  if (!name || !email || !date) {
    message.textContent = '請完整填寫所有欄位！';
    message.style.color = 'red';
  } else {
    message.textContent = `預約成功！我會聯繫您，${name}。`;
    message.style.color = 'green';
    form.reset();
    greeting.textContent = '您好！';
  }
});
