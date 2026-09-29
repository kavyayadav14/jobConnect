// ========================================
// LOCAL STORAGE - APPLICATIONS
// ========================================

function getApplications() {

    const applications =
        localStorage.getItem("applications");

    if (applications) {
        return JSON.parse(applications);
    }

    return [];
}


// ========================================
// SAVE APPLICATION
// ========================================

function saveApplication(application) {

    const applications = getApplications();

    applications.push(application);

    localStorage.setItem(
        "applications",
        JSON.stringify(applications)
    );
}