document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    // Ambil data dari form
    const formData = new FormData(this);

    // Kirim data menggunakan fetch atau metode pengiriman lainnya
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            // Tampilkan notifikasi sukses
            showNotification('Pesan berhasil dikirim!', 'success');
            this.reset(); // Reset form
        } else {
            // Tampilkan notifikasi kesalahan
            showNotification('Terjadi kesalahan, coba lagi.', 'error');
        }
    }).catch(error => {
        console.error('Error:', error);
        showNotification('Terjadi kesalahan, coba lagi.', 'error');
    });
});

// Fungsi untuk menampilkan notifikasi
function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;

    // Tambahkan kelas sesuai dengan tipe notifikasi
    if (type === 'success') {
        notification.classList.remove('error');
    } else {
        notification.classList.add('error');
    }

    notification.classList.add('show');
    notification.classList.remove('hidden');

    // Sembunyikan notifikasi setelah 3 detik
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 500); // Delay untuk animasi hilang
    }, 3000);
}
