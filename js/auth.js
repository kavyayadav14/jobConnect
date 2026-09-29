// ========================================
// REGISTER USER
// ========================================

const registerForm = document.getElementById("register-form");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("register-name").value.trim();

        const email =
            document.getElementById("register-email").value.trim().toLowerCase();

        const password =
            document.getElementById("register-password").value;

        const confirmPassword =
            document.getElementById("confirm-password").value;

        const message =
            document.getElementById("register-message");


        // ========================================
        // VALIDATION
        // ========================================

        if (!name || !email || !password || !confirmPassword) {

            message.textContent =
                "Please fill all the fields.";

            return;
        }


        if (password.length < 6) {

            message.textContent =
                "Password must be at least 6 characters.";

            return;
        }


        if (password !== confirmPassword) {

            message.textContent =
                "Passwords do not match.";

            return;
        }


        // ========================================
        // GET USERS
        // ========================================

        const users =
            JSON.parse(localStorage.getItem("users")) || [];


        // ========================================
        // CHECK EXISTING EMAIL
        // ========================================

        const existingUser =
            users.find(function (user) {

                return user.email === email;

            });


        if (existingUser) {

            message.textContent =
                "An account with this email already exists.";

            return;
        }


        // ========================================
        // CREATE USER
        // ========================================

        const newUser = {

            name: name,

            email: email,

            password: password

        };


        users.push(newUser);


        // ========================================
        // SAVE USER
        // ========================================

        localStorage.setItem(
            "users",
            JSON.stringify(users)
        );


       // ========================================
         // SUCCESS
       // ========================================

       message.textContent =
         "Registration successful!";

        registerForm.reset();

           console.log("Redirecting to login.html");

         setTimeout(function () {

         window.location.assign("login.html");

         }, 500);

    });

}