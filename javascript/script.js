

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// loading after frist load
window.addEventListener("load", () => {
  const loadingPage = document.querySelector(".loading-page");
  const mainContent = document.querySelector("main");

  // Start fade-out animation
  setTimeout(() => {
    loadingPage.classList.add("fade-out");

    // Wait for fade animation to end
    loadingPage.addEventListener("animationend", () => {
      loadingPage.remove(); // Completely remove loading screen
      mainContent.style.display = "block";
    });
  }, 3500); // simulate loading time
});
// longin singup form validation
document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.querySelector('.sign-in-form');
    const signUpForm = document.querySelector('.sign-up-form');

    const validateInput = (input, type) => {
        const errorElement = input.parentElement.querySelector('.error-message') || createErrorElement(input);
        let value = input.value.trim();
        let errorMessage = '';

        if (!value) {
            errorMessage = `${type} is required.`;
        } else if (type.toLowerCase() === 'email' && !/^[^ ]+@[^ ]+\.[a-z]{2,6}$/.test(value)) {
            errorMessage = 'Please enter a valid email address.';
        } else if (type.toLowerCase() === 'password' && value.length < 6) {
            errorMessage = 'Password must be at least 6 characters.';
        }

        errorElement.textContent = errorMessage;
        input.classList.toggle('invalid', !!errorMessage);

        return !errorMessage; // Returns true if valid
    };

    const createErrorElement = (input) => {
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error-message');
        errorDiv.style.color = 'red';
        errorDiv.style.fontSize = '0.8rem';
        errorDiv.style.marginTop = '5px';
        input.parentElement.appendChild(errorDiv);
        return errorDiv;
    };

    const attachValidation = (form) => {
        const inputs = form.querySelectorAll('.input-field input');
        inputs.forEach(input => {
            const type = input.placeholder.split(' ')[0];
            input.addEventListener('blur', () => validateInput(input, type));
            input.addEventListener('input', () => validateInput(input, type));
        });
    };

    const validateForm = (form) => {
        const inputs = form.querySelectorAll('.input-field input');
        let isValid = true;
        inputs.forEach(input => {
            const type = input.placeholder.split(' ')[0];
            const valid = validateInput(input, type);
            if (!valid) isValid = false;
        });
        return isValid;
    };

    attachValidation(signInForm);
    attachValidation(signUpForm);

    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm(signInForm)) {
            console.log('Sign-in form submitted successfully.');
            // Submit logic goes here
        }
    });

    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm(signUpForm)) {
            console.log('Sign-up form submitted successfully.');
            // Submit logic goes here
        }
    });
});
// navbar



const list = document.querySelectorAll(".nav__item");
list.forEach((item) => {
  item.addEventListener("click", () => {
    list.forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  });
});

// scroll to top button
