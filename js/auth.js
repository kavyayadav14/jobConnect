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

// ========================================
// LOGIN USER
// ========================================

const loginForm =
    document.getElementById("login-form");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // ========================================
            // GET LOGIN VALUES
            // ========================================

            const email =
                document
                    .getElementById("login-email")
                    .value
                    .trim()
                    .toLowerCase();


            const password =
                document
                    .getElementById("login-password")
                    .value;


            const message =
                document.getElementById(
                    "login-message"
                );


            // ========================================
            // VALIDATION
            // ========================================

            if (!email || !password) {

                message.textContent =
                    "Please enter email and password.";

                return;
            }


            // ========================================
            // GET USERS
            // ========================================

            const users =
                JSON.parse(
                    localStorage.getItem("users")
                ) || [];


            // ========================================
            // FIND USER
            // ========================================

            const user =
                users.find(function (user) {

                    return user.email === email;

                });


            // ========================================
            // CHECK USER
            // ========================================

            if (!user) {

                message.textContent =
                    "No account found with this email.";

                return;
            }


            // ========================================
            // CHECK PASSWORD
            // ========================================

            if (user.password !== password) {

                message.textContent =
                    "Incorrect password.";

                return;
            }


            // ========================================
            // SAVE LOGGED-IN USER
            // ========================================

            localStorage.setItem(
                "currentUser",
                JSON.stringify(user)
            );


            // ========================================
            // SUCCESS
            // ========================================

            message.textContent =
                "Login successful!";


            // ========================================
            // REDIRECT
            // ========================================

            setTimeout(function () {

                window.location.assign(
                    "index.html"
                );

            }, 500);

        }
    );

}