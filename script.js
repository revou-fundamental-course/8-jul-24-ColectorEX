document.addEventListener('DOMContentLoaded', function() {
    const formBMI = document.getElementById('Form-BMI');
    formBMI.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission to handle validation

        // Get form values
        const gender = document.querySelector('input[name="Gender"]:checked').value;
        const weight = parseFloat(document.getElementById('Weight').value);
        const height = parseFloat(document.getElementById('Height').value);
        const age = parseInt(document.getElementById('Age').value);

        // Validate inputs
        if (isNaN(weight) || weight <= 0) {
            alert('Masukkan berat badan yang valid (harus berupa angka lebih dari 0).');
            return;
        }

        if (isNaN(height) || height <= 0) {
            alert('Masukkan tinggi badan yang valid (harus berupa angka lebih dari 0).');
            return;
        }

        if (isNaN(age) || age <= 0 || age < 18) {
            alert('Masukkan umur yang valid (harus berupa angka lebih dari 0 dan minimal 18 tahun).');
            return;
        }

        // Calculate BMI
        const heightMeters = height / 100; // Convert height from cm to meters
        const BMI = weight / (heightMeters * heightMeters);

        // Display BMI result
        let interpretation = '';
        if (BMI < 18.5) {
            interpretation = 'Kurus';
        } else if (BMI >= 18.5 && BMI < 24.9) {
            interpretation = 'Normal';
        } else if (BMI >= 24.9 && BMI < 29.9) {
            interpretation = 'Gemuk';
        } else {
            interpretation = 'Obesitas';
        }

        alert(`BMI Anda adalah ${BMI.toFixed(2)} (${interpretation}).`);

        // Optionally, you can reset the form
        formBMI.reset();
    });
});
