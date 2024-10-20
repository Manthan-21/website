// Get elements
const sidebar = document.getElementById('sidebar');
const accountBtn = document.getElementById('accountBtn');
const closeBtn = document.getElementById('closeBtn');

// Open the sidebar when the account icon is clicked
accountBtn.onclick = function() {
    sidebar.style.width = "250px"; // Open the sidebar
    document.body.classList.add('open'); // Shift the body to the left
}

// Close the sidebar when the close button is clicked
closeBtn.onclick = function() {
    sidebar.style.width = "0"; // Close the sidebar
    document.body.classList.remove('open'); // Shift the body back
}
