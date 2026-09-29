// ========================================
// JOB DATA
// ========================================

const jobs = [

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


// ========================================
// DOM ELEMENTS
// ========================================

const jobsContainer =
    document.getElementById("jobs-container");

const jobCount =
    document.getElementById("job-count");

const noJobsMessage =
    document.getElementById("no-jobs-message");

const jobSearch =
    document.getElementById("job-search");

const categoryFilter =
    document.getElementById("category-filter");

const locationFilter =
    document.getElementById("location-filter");

const sortJobs =
    document.getElementById("sort-jobs");


// ========================================
// DISPLAY JOBS
// ========================================

function displayJobs(jobList) {

    jobsContainer.innerHTML = "";


    // No jobs found

    if (jobList.length === 0) {

        noJobsMessage.style.display = "block";

        jobCount.textContent =
            "0 jobs found.";

        return;
    }


    noJobsMessage.style.display = "none";


    // Job count

    jobCount.textContent =
        `${jobList.length} jobs found.`;


    // Display jobs

    jobList.forEach((job) => {

        const jobCard =
            document.createElement("div");

        jobCard.classList.add("job-card");


        jobCard.innerHTML = `

            <h2>
                ${job.title}
            </h2>

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


        jobsContainer.append(jobCard);

    });


    // ========================================
    // VIEW DETAILS BUTTONS
    // ========================================

    const buttons =
        document.querySelectorAll(".view-job-btn");


    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const jobId =
                button.dataset.jobId;

            window.location.href =
                `job-details.html?id=${jobId}`;

        });

    });

}


// ========================================
// SEARCH + FILTER + SORT
// ========================================

function filterJobs() {

    const searchText =
        jobSearch.value.toLowerCase().trim();

    const selectedCategory =
        categoryFilter.value;

    const locationText =
        locationFilter.value.toLowerCase().trim();

    const selectedSort =
        sortJobs.value;


    // ========================================
    // FILTER JOBS
    // ========================================

    const filteredJobs = jobs.filter((job) => {

        const title =
            job.title.toLowerCase();

        const company =
            job.company.toLowerCase();

        const skills =
            job.skills.join(" ").toLowerCase();

        const jobLocation =
            job.location.toLowerCase();


        // Search condition

        const matchesSearch =
            title.includes(searchText) ||
            company.includes(searchText) ||
            skills.includes(searchText);


        // Category condition

        const matchesCategory =
            selectedCategory === "all" ||
            job.category === selectedCategory;


        // Location condition

        const matchesLocation =
            jobLocation.includes(locationText);


        return matchesSearch &&
               matchesCategory &&
               matchesLocation;

    });


    // ========================================
    // SALARY SORTING
    // ========================================

    if (selectedSort === "salary-low") {

        filteredJobs.sort((a, b) => {

            return a.minSalary - b.minSalary;

        });

    }


    if (selectedSort === "salary-high") {

        filteredJobs.sort((a, b) => {

            return b.minSalary - a.minSalary;

        });

    }


    // ========================================
    // DISPLAY FILTERED JOBS
    // ========================================

    displayJobs(filteredJobs);

}


// ========================================
// SEARCH EVENT
// ========================================

if (jobSearch) {

    jobSearch.addEventListener(
        "input",
        filterJobs
    );

}


// ========================================
// CATEGORY EVENT
// ========================================

if (categoryFilter) {

    categoryFilter.addEventListener(
        "change",
        filterJobs
    );

}


// ========================================
// LOCATION EVENT
// ========================================

if (locationFilter) {

    locationFilter.addEventListener(
        "input",
        filterJobs
    );

}


// ========================================
// SORT EVENT
// ========================================

if (sortJobs) {

    sortJobs.addEventListener(
        "change",
        filterJobs
    );

}


// ========================================
// READ PARAMETERS FROM URL
// ========================================

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const searchParam =
    urlParams.get("search");


const locationParam =
    urlParams.get("location");


const categoryParam =
    urlParams.get("category");


// ========================================
// SET VALUES FROM URL
// ========================================

if (searchParam) {

    jobSearch.value =
        searchParam;

}


if (locationParam) {

    locationFilter.value =
        locationParam;

}


if (categoryParam) {

    categoryFilter.value =
        categoryParam;

}


// ========================================
// INITIAL JOB DISPLAY
// ========================================

if (jobsContainer) {

    if (
        searchParam ||
        locationParam ||
        categoryParam
    ) {

        filterJobs();

    } else {

        displayJobs(jobs);

    }

}