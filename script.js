// File: JS/script.js

// Menunggu sampai DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('Form-BMI');
    const output = document.getElementById('output');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form dari submit default

        // Mengambil nilai dari inputan form
        const weight = parseFloat(document.getElementById('Weight').value);
        const height = parseFloat(document.getElementById('Height').value) / 100; // Konversi ke meter

        // Menghitung BMI
        const bmi = weight / (height * height);

        // Menampilkan hasil BMI dengan interpretasi
        let interpretation;
        if (bmi < 18.5) {
            interpretation = 'Kurus';
        } else if (bmi < 24.9) {
            interpretation = 'Normal';
        } else if (bmi < 29.9) {
            interpretation = 'Berat badan berlebih';
        } else {
            interpretation = 'Obesitas';
        }

        // Menampilkan hasil di elemen output
        output.innerHTML = `
            <h2>Hasil BMI Anda</h2>
            <p>BMI Anda adalah ${bmi.toFixed(2)}, yang berarti Anda ${interpretation}.</p>
        `;
    });

    // Menangani tombol reset untuk menghapus hasil sebelumnya
    form.addEventListener('reset', function() {
        output.innerHTML = '';
    });
});