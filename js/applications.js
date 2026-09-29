// ========================================
// APPLICATIONS PAGE
// ========================================

const applicationsContainer =
    document.getElementById("applications-container");

const noApplicationsMessage =
    document.getElementById("no-applications-message");


// ========================================
// DISPLAY APPLICATIONS
// ========================================

function displayApplications() {

    const applications = getApplications();

    applicationsContainer.innerHTML = "";


    // ========================================
    // NO APPLICATIONS
    // ========================================

    if (applications.length === 0) {

        noApplicationsMessage.style.display = "block";

        return;
    }


    // Hide no applications message

    noApplicationsMessage.style.display = "none";


    // ========================================
    // DISPLAY EACH APPLICATION
    // ========================================

    applications.forEach((application) => {

        const applicationCard =
            document.createElement("div");

        applicationCard.classList.add("job-card");


        applicationCard.innerHTML = `
            <h2>
              ${application.jobTitle}
            </h2>

            <p>
              <strong>Company:</strong>
              ${application.company}
            </p>

           <p>
              <strong>Location:</strong>
              ${application.location}
            </p>

            <p>
               <strong>Applicant:</strong>
               ${application.fullName}
            </p>

            <p>
                <strong>Email:</strong>
                ${application.email}
            </p>

            <p>
                <strong>Phone:</strong>
                ${application.phone}
            </p>

            <p>
                <strong>Resume:</strong>
                ${application.resume}
            </p>

            <p>
                <strong>Cover Letter:</strong>
                ${application.coverLetter}
            </p>

            <p>
                <strong>Status:</strong>
                ${application.status}
            </p>

            <p>
                <strong>Applied On:</strong>
                ${application.date}
            </p>

        `;


        applicationsContainer.append(applicationCard);

    });

}


// ========================================
// RUN FUNCTION
// ========================================

if (applicationsContainer) {

    displayApplications();

}