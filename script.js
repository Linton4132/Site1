// script.js
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Сбор данных формы
    var formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
    
    console.log(formData);
    
    // Здесь можно добавить AJAX-запрос для отправки данных на сервер
  });
  