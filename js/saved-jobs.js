// ========================================
// SAVED JOBS
// ========================================


// ========================================
// GET DOM ELEMENTS
// ========================================

const savedJobsContainer =
    document.getElementById("saved-jobs-container");

const savedJobCount =
    document.getElementById("saved-job-count");

const noSavedJobsMessage =
    document.getElementById("no-saved-jobs-message");


// ========================================
// GET SAVED JOBS
// ========================================

let savedJobs =
    JSON.parse(
        localStorage.getItem("savedJobs")
    ) || [];


// ========================================
// DISPLAY SAVED JOBS
// ========================================

function displaySavedJobs() {

    savedJobsContainer.innerHTML = "";


    // ========================================
    // NO SAVED JOBS
    // ========================================

    if (savedJobs.length === 0) {

        noSavedJobsMessage.style.display =
            "block";

        savedJobCount.textContent =
            "0 saved jobs";

        return;
    }


    // ========================================
    // HIDE EMPTY MESSAGE
    // ========================================

    noSavedJobsMessage.style.display =
        "none";


    // ========================================
    // JOB COUNT
    // ========================================

    savedJobCount.textContent =
        `${savedJobs.length} saved jobs`;


    // ========================================
    // DISPLAY SAVED JOBS
    // ========================================

    savedJobs.forEach((job) => {

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

            <button
                class="remove-job-btn"
                data-job-id="${job.id}"
            >
                Remove Job
            </button>

        `;


        savedJobsContainer.append(jobCard);

    });


    // ========================================
    // VIEW DETAILS BUTTONS
    // ========================================

    const viewButtons =
        document.querySelectorAll(
            ".view-job-btn"
        );


    viewButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const jobId =
                    button.dataset.jobId;

                window.location.href =
                    `job-details.html?id=${jobId}`;

            }
        );

    });


    // ========================================
    // REMOVE JOB BUTTONS
    // ========================================

    const removeButtons =
        document.querySelectorAll(
            ".remove-job-btn"
        );


    removeButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const jobId =
                    Number(button.dataset.jobId);


                // Remove selected job

                savedJobs =
                    savedJobs.filter((job) => {

                        return job.id !== jobId;

                    });


                // Update localStorage

                localStorage.setItem(
                    "savedJobs",
                    JSON.stringify(savedJobs)
                );


                // Display updated list

                displaySavedJobs();

            }
        );

    });

}


// ========================================
// INITIAL DISPLAY
// ========================================

if (savedJobsContainer) {

    displaySavedJobs();

}