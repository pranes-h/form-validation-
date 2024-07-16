document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const username = document.getElementById("usname");
    const email = document.getElementById("mail");
    const password = document.getElementById("pass");
    const confirmPassword = document.getElementById("cpass");
    const errorDivs = document.querySelectorAll(".error");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let valid = true;

        // Reset error messages
        errorDivs.forEach(div => div.textContent = "");

        // Validate username
        if (username.value.trim() === "") {
            showError(username, "Username is required");
            valid = false;
        }

        // Validate email
        if (email.value.trim() === "") {
            showError(email, "Email is required");
            valid = false;
        } else if (!isValidEmail(email.value.trim())) {
            showError(email, "Invalid email format");
            valid = false;
        }

        // Validate password
        if (password.value.trim() === "") {
            showError(password, "Password is required");
            valid = false;
        }

        // Validate confirm password
        if (confirmPassword.value.trim() === "") {
            showError(confirmPassword, "Please confirm your password");
            valid = false;
        } else if (password.value.trim() !== confirmPassword.value.trim()) {
            showError(confirmPassword, "Passwords do not match");
            valid = false;
        }

        // If form is valid, submit it
        if (valid) {
            form.submit();
        }
    });

    function showError(input, message) {
        const errorDiv = input.nextElementSibling;
        errorDiv.textContent = message;
        errorDiv.style.color = "red";
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
