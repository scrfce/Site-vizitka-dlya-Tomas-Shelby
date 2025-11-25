// Навигация между секциями
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetSection = button.getAttribute('data-section');
        
        // Удаляем активный класс со всех кнопок и секций
        navButtons.forEach(btn => btn.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));
        
        // Добавляем активный класс к текущей кнопке и секции
        button.classList.add('active');
        document.getElementById(targetSection).classList.add('active');
        
        // Прокрутка к началу контента
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Валидация формы
const contactForm = document.getElementById('contactForm');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', (e) => {
    // Сброс сообщений
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    
    // Получение значений полей
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Валидация
    const errors = [];
    
    if (name.length < 2) {
        errors.push('Имя должно содержать минимум 2 символа');
    }
    
    // Проверка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push('Введите корректный адрес электронной почты (например: example@mail.com)');
    }
    
    if (message.length < 10) {
        errors.push('Сообщение должно содержать минимум 10 символов');
    }
    
    // Отображение ошибок
    if (errors.length > 0) {
        e.preventDefault();
        errorMessage.innerHTML = errors.join('<br>');
        errorMessage.style.display = 'block';
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return false;
    }
    
    // Если валидация пройдена, форма отправится сама через FormSubmit
    // Показываем сообщение об отправке
    setTimeout(() => {
        successMessage.style.display = 'block';
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
});

// Реальная валидация email при вводе
const emailInput = document.getElementById('email');
emailInput.addEventListener('blur', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.value && !emailRegex.test(this.value)) {
        this.style.borderColor = '#8a2a2a';
    } else {
        this.style.borderColor = '#2a2a2a';
    }
});
