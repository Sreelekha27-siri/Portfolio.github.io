document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the button element
    var downloadButton = document.getElementById("ViewResume");

    // Add a click event listener to the button
    downloadButton.addEventListener("click", function() {
        // Define the path to your resume PDF
        var pdfPath = "pdf/RESUME.pdf"; // Update the path if needed

        // Open the PDF in a new tab or window
        var newTab = window.open(pdfPath, "_blank");

        // Check if the new tab was successfully opened
        if (!newTab) {
            alert("Please allow pop-ups to view the resume.");
        }
    });
});
