// Sidebar navigation highlight
const links = document.querySelectorAll(".sidebar a");

links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(l => l.style.color = "#d1d5db");
        this.style.color = "white";
    });
});

// Fake search functionality
const search = document.querySelector(".search");

search.addEventListener("keyup", function() {
    console.log("Searching for:", this.value);
});

// Simulate adding a lead
function addLead() {
    alert("Add Lead button clicked!");
}

// Example: make leads clickable
const leads = document.querySelectorAll(".lead");

leads.forEach(lead => {
    lead.addEventListener("click", () => {
        alert("Opening Lead Details...");
    });
});
