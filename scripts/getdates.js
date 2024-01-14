// Get the current year
const currentYear = new Date().getFullYear();

// Set the copyright year in the first paragraph
const copyrightYearElement = document.getElementById('copyrightYear');

// Get the last modified date/time
const lastModified = document.lastModified;
copyrightYearElement.textContent = `Copyright ${currentYear}`;

// Set the last modified date/time in the second paragraph
if (lastModified) {
    document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;
} else {
    document.getElementById('lastModified').textContent = 'Last modified: Unknown';
}