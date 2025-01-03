// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Select the form element
    const form = document.querySelector("form");

    // Add an event listener for form submission
    form.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value.trim();

        // Validate required fields
        if (!name || !email || !phone || !subject) {
            alert("অনুগ্রহ করে সব বাধ্যতামূলক তথ্য পূরণ করুন।");
            return;
        }

        // Display a confirmation message
        alert(
            ধন্যবাদ, ${name}! আপনার ফর্মটি সফলভাবে জমা দেওয়া হয়েছে।\n\n +
            বিষয়: ${subject}\nইমেইল: ${email}\nফোন: ${phone}\n +
            অতিরিক্ত তথ্য: ${message || "নেই"}
        );

        // Optionally clear the form after submission
        form.reset();
    });
});