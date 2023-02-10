const dropdown = document.querySelector('.bar');
const dropdownContent = document.querySelector('.item');
dropdown.addEventListener("click", function() {
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
});

