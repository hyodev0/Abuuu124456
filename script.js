// --- CONFIGURAÇÕES ---
const MAIN_PASSWORD = "7094";
const SECRET_PASSWORD = "1412";
const TOTAL_IMAGES = 12;

// --- ELEMENTOS DO DOM ---
const loginScreen = document.getElementById('login-screen');
const mainContent = document.getElementById('main-content');
const passInput = document.getElementById('password-input');
const errorMsg = document.getElementById('error-msg');
const carouselImg = document.getElementById('carousel-img');

// --- LÓGICA DE LOGIN ---
function checkPassword() {
    if (passInput.value === MAIN_PASSWORD) {
        // Remove o blur e esconde a tela de login
        loginScreen.style.opacity = '0';
        setTimeout(() => {
            loginScreen.style.display = 'none';
            mainContent.classList.remove('blurred');
        }, 500); // Espera a animação
    } else {
        errorMsg.classList.remove('hidden');
        passInput.value = '';
        passInput.focus();
    }
}

// Permitir apertar ENTER no input
passInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// --- LÓGICA DO CARROSSEL ---
let currentImageIndex = 1;

function updateImage() {
    // Caminho da imagem: imgs/imagemX.png
    carouselImg.src = `imgs/${currentImageIndex}.png`;
}

function nextImage() {
    currentImageIndex++;
    if (currentImageIndex > TOTAL_IMAGES) {
        currentImageIndex = 1;
    }
    updateImage();
}

function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 1) {
        currentImageIndex = TOTAL_IMAGES;
    }
    updateImage();
}

// --- LÓGICA DO BOTÃO SECRETO ---
function accessSecret() {
    // Usando um prompt simples do navegador para manter o código limpo
    let attempt = prompt("Digite a senha secreta:");
    
    if (attempt === SECRET_PASSWORD) {
        window.location.href = "secreto.html";
    } else if (attempt !== null) {
        alert("Senha incorreta.");
    }
}