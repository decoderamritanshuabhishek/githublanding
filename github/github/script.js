// Function to toggle dropdown content visibility on click
function toggleDropdown() {
    const dropdownContent = this.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  }
  
  // Attach click event listener to dropdown items
  document.querySelectorAll('.dropdown').forEach(item => {
    item.addEventListener('click', toggleDropdown);
  });
