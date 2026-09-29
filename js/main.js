console.log("main.js is working!");


// ================================
// FEATURED JOB DATA
// ================================

const featuredJobs = [

    {
        id: 1,
        title: "Frontend Developer",
        company: "Tech Solutions",
        location: "Noida",
        salary: "4 - 6 LPA",
        minSalary: 4,
        experience: "0 - 1 Years",
        type: "Full Time",
        category: "frontend",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ]
    },

    {
        id: 2,
        title: "Java Developer",
        company: "ABC Technologies",
        location: "Delhi",
        salary: "5 - 7 LPA",
        minSalary: 5,
        experience: "0 - 1 Years",
        type: "Full Time",
        category: "backend",
        skills: [
            "Java",
            "SQL",
            "Spring Boot"
        ]
    },

    {
        id: 3,
        title: "Full Stack Developer",
        company: "WebTech Pvt. Ltd.",
        location: "Gurugram",
        salary: "6 - 8 LPA",
        minSalary: 6,
        experience: "0 - 2 Years",
        type: "Full Time",
        category: "fullstack",
        skills: [
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB"
        ]
    },

    {
        id: 4,
        title: "Data Analyst",
        company: "DataWorks",
        location: "Noida",
        salary: "4 - 6 LPA",
        minSalary: 4,
        experience: "0 - 1 Years",
        type: "Full Time",
        category: "data",
        skills: [
            "SQL",
            "Python",
            "Excel"
        ]
    },

    {
        id: 5,
        title: "React Developer",
        company: "Innovate Labs",
        location: "Delhi",
        salary: "5 - 8 LPA",
        minSalary: 5,
        experience: "0 - 2 Years",
        type: "Full Time",
        category: "frontend",
        skills: [
            "React",
            "JavaScript",
            "HTML",
            "CSS"
        ]
    },

    {
        id: 6,
        title: "Node.js Developer",
        company: "CloudTech",
        location: "Gurugram",
        salary: "6 - 9 LPA",
        minSalary: 6,
        experience: "1 - 2 Years",
        type: "Full Time",
        category: "backend",
        skills: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST API"
        ]
    }

];


// ================================
// FEATURED JOBS CONTAINER
// ================================

const featuredJobsContainer = document.getElementById(
    "featured-jobs-container"
);


// ================================
// DISPLAY FEATURED JOBS
// ================================

function displayFeaturedJobs() {

    featuredJobsContainer.innerHTML = "";

    featuredJobs.forEach((job) => {

        const jobCard = document.createElement("div");

        jobCard.classList.add("job-card");

        jobCard.innerHTML = `
            <h2>${job.title}</h2>

            <p>
                <strong>Company:</strong>
                ${job.company}
            </p>

            <p>
                <strong>Location:</strong>
                ${job.location}
            </p>

            <p>
                <strong>Salary:</strong>
                ${job.salary}
            </p>

            <p>
                <strong>Experience:</strong>
                ${job.experience}
            </p>

            <p>
                <strong>Job Type:</strong>
                ${job.type}
            </p>

            <p>
                <strong>Skills:</strong>
                ${job.skills.join(", ")}
            </p>

            <button
                class="view-job-btn"
                data-job-id="${job.id}"
            >
                View Details
            </button>
        `;

        featuredJobsContainer.append(jobCard);
    });
}


// ================================
// RUN FEATURED JOBS
// ================================

if (featuredJobsContainer) {

    displayFeaturedJobs();

}


// ================================
// VIEW JOB DETAILS
// ================================

const viewJobButtons = document.querySelectorAll(
    ".view-job-btn"
);

viewJobButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const jobId = button.dataset.jobId;

        window.location.href =
            `job-details.html?id=${jobId}`;

    });

});


// ================================
// JOB DETAILS PAGE
// ================================

const jobDetailsContainer = document.getElementById(
    "job-details-container"
);


if (jobDetailsContainer) {

    // Get ID from URL

    const urlParams = new URLSearchParams(
        window.location.search
    );

    const jobId = Number(
        urlParams.get("id")
    );


    // Find selected job

    const selectedJob = featuredJobs.find((job) => {

        return job.id === jobId;

    });


    // ================================
    // DISPLAY SELECTED JOB
    // ================================

    if (selectedJob) {

        jobDetailsContainer.innerHTML = `

            <div class="job-details-card">

                <h1>
                    ${selectedJob.title}
                </h1>

                <h2>
                    ${selectedJob.company}
                </h2>

                <p>
                    <strong>Location:</strong>
                    ${selectedJob.location}
                </p>

                <p>
                    <strong>Salary:</strong>
                    ${selectedJob.salary}
                </p>

                <p>
                    <strong>Experience:</strong>
                    ${selectedJob.experience}
                </p>

                <p>
                    <strong>Job Type:</strong>
                    ${selectedJob.type}
                </p>

                <p>
                    <strong>Skills:</strong>
                    ${selectedJob.skills.join(", ")}
                </p>

                <button
                    class="apply-btn"
                    data-job-id="${selectedJob.id}"
                >
                    Apply Now
                </button>

            </div>

        `;

    } else {

        jobDetailsContainer.innerHTML = `

            <h2>
                Job not found.
            </h2>

            <p>
                Please go back and select another job.
            </p>

        `;

    }

}

// ================================
// APPLY FOR JOB
// ================================

const applyButton = document.querySelector(".apply-btn");

if (applyButton) {

    applyButton.addEventListener("click", () => {

        const jobId = applyButton.dataset.jobId;

        window.location.href = `apply.html?id=${jobId}`;

    });

}

// ================================
// APPLICATION FORM HANDLING
// ================================

const applicationForm =
    document.getElementById("application-form");

if (applicationForm) {

    applicationForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const fullName =
            document.getElementById("full-name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const resume =
            document.getElementById("resume").files[0];

        const coverLetter =
            document.getElementById("cover-letter").value.trim();

        const message =
            document.getElementById("application-message");


        // ========================================
        // VALIDATION
        // ========================================

        if (!fullName || !email || !phone || !resume || !coverLetter) {

            message.textContent =
                "Please fill all the fields.";

            return;
        }


        // ========================================
        // CREATE APPLICATION OBJECT
        // ========================================

        const urlParams = new URLSearchParams(
           window.location.search
        );

        const jobId = Number(
           urlParams.get("id")
        );


       const selectedJob = featuredJobs.find((job) => {
            return job.id === jobId;
        });


    const application = {

       jobId: selectedJob.id,
       jobTitle: selectedJob.title,
       company: selectedJob.company,
       location: selectedJob.location,

       fullName: fullName,
       email: email,
       phone: phone,
       resume: resume.name,
       coverLetter: coverLetter,

       status: "Applied",

       date: new Date().toLocaleDateString()
    };

        // ========================================
        // SAVE APPLICATION
        // ========================================

        saveApplication(application);


        // ========================================
        // SUCCESS MESSAGE
        // ========================================

        message.textContent =
            "Application submitted successfully!";


        // Clear form
        applicationForm.reset();

    });

}

// ================================
// HOME PAGE SEARCH
// ================================

const homeJobSearch =
    document.getElementById("home-job-search");

const homeLocationSearch =
    document.getElementById("home-location-search");

const homeSearchBtn =
    document.getElementById("home-search-btn");


if (homeSearchBtn) {

    homeSearchBtn.addEventListener("click", () => {

        const searchText =
            homeJobSearch.value.trim();

        const locationText =
            homeLocationSearch.value.trim();


        const params =
            new URLSearchParams();


        if (searchText) {
            params.set("search", searchText);
        }

        if (locationText) {
            params.set("location", locationText);
        }


        window.location.href =
            `jobs.html?${params.toString()}`;

    });

}

// ========================================
// AUTHENTICATION STATE
// ========================================

const currentUser =
    JSON.parse(localStorage.getItem("currentUser"));


// ========================================
// GET NAVBAR ELEMENTS
// ========================================

const loginLink =
    document.getElementById("login-link");

const registerLink =
    document.getElementById("register-link");

const userName =
    document.getElementById("user-name");

const logoutLink =
    document.getElementById("logout-link");


// ========================================
// CHECK LOGIN STATUS
// ========================================

if (currentUser) {

    // Hide Login and Register
    if (loginLink) {
        loginLink.style.display = "none";
    }

    if (registerLink) {
        registerLink.style.display = "none";
    }


    // Show User Name
    if (userName) {

        userName.textContent =
            "Hello, " + currentUser.name;

        userName.style.display = "inline";
    }


    // Show Logout
    if (logoutLink) {
        logoutLink.style.display = "inline";
    }

} else {

    // User is NOT logged in

    if (userName) {
        userName.style.display = "none";
    }

    if (logoutLink) {
        logoutLink.style.display = "none";
    }

}


// ========================================
// LOGOUT
// ========================================

if (logoutLink) {

    logoutLink.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            // Remove logged-in user
            localStorage.removeItem("currentUser");

            // Go to home page
            window.location.assign("index.html");

        }
    );
}