const supportBtn = document.getElementById('supportBtn');
const supportPopup = document.getElementById('supportPopup');

supportBtn.addEventListener('click', function(e) {
    e.preventDefault();
    supportPopup.style.display = supportPopup.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function(e) {
    if (!supportPopup.contains(e.target) && !supportBtn.contains(e.target)) {
        supportPopup.style.display = 'none';
    }
});
