// ========================================
// USER PROFILE
// ========================================


// ========================================
// GET LOGGED-IN USER
// ========================================

const profileUser =
    JSON.parse(localStorage.getItem("currentUser"));


// ========================================
// CHECK LOGIN
// ========================================

if (!profileUser) {

    window.location.assign("login.html");

}


// ========================================
// GET PROFILE FORM
// ========================================

const profileForm =
    document.getElementById("profile-form");


// ========================================
// GET INPUT FIELDS
// ========================================

const profileName =
    document.getElementById("profile-name");

const profileEmail =
    document.getElementById("profile-email");

const profilePhone =
    document.getElementById("profile-phone");

const profileLocation =
    document.getElementById("profile-location");

const profileSkills =
    document.getElementById("profile-skills");

const profileAbout =
    document.getElementById("profile-about");

const profileMessage =
    document.getElementById("profile-message");


// ========================================
// LOAD PROFILE DATA
// ========================================

if (profileUser) {

    profileName.value =
        profileUser.name || "";

    profileEmail.value =
        profileUser.email || "";

    profilePhone.value =
        profileUser.phone || "";

    profileLocation.value =
        profileUser.location || "";

    profileSkills.value =
        profileUser.skills || "";

    profileAbout.value =
        profileUser.about || "";

}


// ========================================
// SAVE PROFILE
// ========================================

if (profileForm) {

    profileForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // ========================================
            // GET UPDATED VALUES
            // ========================================

            const updatedName =
                profileName.value.trim();

            const updatedPhone =
                profilePhone.value.trim();

            const updatedLocation =
                profileLocation.value.trim();

            const updatedSkills =
                profileSkills.value.trim();

            const updatedAbout =
                profileAbout.value.trim();


            // ========================================
            // VALIDATION
            // ========================================

            if (!updatedName) {

                profileMessage.textContent =
                    "Please enter your name.";

                return;

            }


            // ========================================
            // UPDATE USER OBJECT
            // ========================================

            profileUser.name =
                updatedName;

            profileUser.phone =
                updatedPhone;

            profileUser.location =
                updatedLocation;

            profileUser.skills =
                updatedSkills;

            profileUser.about =
                updatedAbout;


            // ========================================
            // GET ALL USERS
            // ========================================

            const users =
                JSON.parse(
                    localStorage.getItem("users")
                ) || [];


            // ========================================
            // FIND CURRENT USER
            // ========================================

            const userIndex =
                users.findIndex(function (user) {

                    return user.email === profileUser.email;

                });


            // ========================================
            // UPDATE USER IN USERS ARRAY
            // ========================================

            if (userIndex !== -1) {

                users[userIndex] =
                    profileUser;

                localStorage.setItem(
                    "users",
                    JSON.stringify(users)
                );

            }


            // ========================================
            // UPDATE CURRENT USER
            // ========================================

            localStorage.setItem(
                "currentUser",
                JSON.stringify(profileUser)
            );


            // ========================================
            // SUCCESS MESSAGE
            // ========================================

            profileMessage.textContent =
                "Profile updated successfully.";

        }
    );

}