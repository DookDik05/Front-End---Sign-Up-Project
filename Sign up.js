document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); // หยุดการส่งฟอร์มเพื่อทำการตรวจสอบก่อน

    let isValid = true;

    // ตรวจสอบชื่อ
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'กรุณากรอกชื่อ';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // ตรวจสอบนามสกุล
    const lastnameInput = document.getElementById('lastname');
    const lastnameError = document.getElementById('lastname-error');
    if (lastnameInput.value.trim() === '') {
        lastnameError.textContent = 'กรุณากรอกนามสกุล';
        isValid = false;
    } else {
        lastnameError.textContent = '';
    }

    // ตรวจสอบอีเมล์
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'กรุณากรอกอีเมล์';
        isValid = false;
    } else if (!emailInput.value.match(emailPattern)) {
        emailError.textContent = 'กรุณากรอกอีเมล์ให้ถูกต้อง';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // ตรวจสอบรหัสผ่าน
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'กรุณากรอกรหัสผ่าน';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    // ตรวจสอบการยอมรับข้อกำหนด
    const termsInput = document.getElementById('terms');
    const termsError = document.getElementById('terms-error');
    if (!termsInput.checked) {
        termsError.textContent = 'กรุณายอมรับข้อกำหนดและเงื่อนไข';
        isValid = false;
    } else {
        termsError.textContent = '';
    }

    // หากข้อมูลครบถ้วนถูกต้อง จะทำการ submit ฟอร์ม
    if (isValid) {
        this.submit();
    }
});
