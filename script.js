// Typing effect for "Hello everyone"
const typingEffect = document.querySelector('.typing-effect');
const helloText = "Hello Everyone!";
let helloIndex = 0;
let helloInterval;

function typeHello() {
    if (helloIndex < helloText.length) {
        typingEffect.textContent += helloText.charAt(helloIndex);
        helloIndex++;
        helloInterval = setTimeout(typeHello, 150);
    }
}

typeHello();

// Multiple Typing Text Animation for "I'am Jere"
const words = ["Jere", "a Gamers", "a Web Developer", "The Editor", "a newbie ᵔ ᵕ ᵔ)"];
let wordIndex = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingSpeed = 150;
const erasingSpeed = 100;
const delayBetweenWords = 1000;
const multipleTyping = document.querySelector('.multiple-typing');

function typeWords() {
    // Update class for color change
    multipleTyping.className = 'multiple-typing word-' + (wordIndex + 1);

    if (isDeleting) {
        if (charIndex > 0) {
            currentText = words[wordIndex].substring(0, charIndex - 1);
            multipleTyping.textContent = currentText;
            charIndex--;
            setTimeout(typeWords, erasingSpeed);
        } else {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeWords, typingSpeed);
        }
    } else {
        if (charIndex < words[wordIndex].length) {
            currentText = words[wordIndex].substring(0, charIndex + 1);
            multipleTyping.textContent = currentText;
            charIndex++;
            setTimeout(typeWords, typingSpeed);
        } else {
            isDeleting = true;
            setTimeout(typeWords, delayBetweenWords);
        }
    }
}

setTimeout(typeWords, delayBetweenWords);


document.addEventListener("DOMContentLoaded", function() {
    function revealOnScroll() {
        const blogSection = document.getElementById("blog-section");
        const sectionPosition = blogSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            blogSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
});



//Security Web//

// Contoh sederhana validasi input
function validateInput(input) {
    const regex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    if (regex.test(input)) {
        alert("Input tidak valid!");
        return false;
    }
    return true;
}

// Panggil fungsi ini pada saat input form disubmit
document.getElementById("myForm").onsubmit = function() {
    return validateInput(document.getElementById("inputField").value);
}

if (location.protocol !== 'https:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}


// Mencegah klik kanan
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Mencegah seleksi teks
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'c' || e.key === 's' || e.key === 'u' || e.key === 'p')) {
        e.preventDefault();
    }
});

// Memblokir klik kanan
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Memblokir beberapa tombol pintas
document.addEventListener('keydown', function(event) {
    // Daftar tombol pintas yang ingin diblokir
    var blockedKeys = [123, 73, 74, 67, 88, 85];  F12, I, J, C, X, U

    // Jika tombol yang ditekan ada di daftar blockedKeys
    if (blockedKeys.includes(event.keyCode) || (event.ctrlKey && (event.keyCode === 85))) {
        event.preventDefault();
    }
});

function validateForm() {
    const email = document.getElementById("email").value;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!regex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    return true;
}

function escapeHTML(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}

document.getElementById("output").innerHTML = escapeHTML(userInput);

function getCSRFToken() {
    // Fungsi untuk mendapatkan token CSRF dari meta tag atau cookie
    return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
}

function sendData(url, data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'CSRF-Token': getCSRFToken()
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}


let failedAttempts = 0;

function checkLogin() {
    if (failedAttempts >= 3) {
        alert("Too many failed attempts. Please try again later.");
        return false;
    }
    
    // Logika validasi login
    if (isLoginSuccessful()) {
        failedAttempts = 0;
    } else {
        failedAttempts++;
        if (failedAttempts >= 3) {
            setTimeout(() => { failedAttempts = 0; }, 30000); // 30 detik delay
        }
    }
}

function setCSP() {
    const csp = "default-src 'self'; script-src 'self' https://trusted.cdn.com; style-src 'self' 'unsafe-inline'";
    const meta = document.createElement('meta');
    meta.httpEquiv = "Content-Security-Policy";
    meta.content = csp;
    document.getElementsByTagName('head')[0].appendChild(meta);
}

setCSP();


if (self === top) {
    // Jika halaman tidak berada di dalam iframe, tidak lakukan apa-apa
} else {
    top.location = self.location; // Jika halaman berada di dalam iframe, keluar dari iframe
}


function encryptData(data, key) {
    const encryptedData = CryptoJS.AES.encrypt(data, key).toString();
    return encryptedData;
}

function sendEncryptedData(url, data) {
    const encryptedData = encryptData(data, "secret-key");
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: encryptedData })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'u')) {
        e.preventDefault();
    }
});

let idleTime = 0;
    const idleLimit = 60 * 60 * 1000; // 1 hour in milliseconds

    function showNotification() {
        document.getElementById("notification").style.display = "block";
    }

    function resetTimer() {
        idleTime = 0;
        document.getElementById("notification").style.display = "none";
    }

    function startIdleTimer() {
        setInterval(() => {
            idleTime += 1000;
            if (idleTime >= idleLimit) {
                showNotification();
            }
        }, 1000);
    }

    function activityDetected() {
        resetTimer();
    }

    document.addEventListener("mousemove", activityDetected);
    document.addEventListener("scroll", activityDetected);
    document.addEventListener("keydown", activityDetected);

    startIdleTimer();