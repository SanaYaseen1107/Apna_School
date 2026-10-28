// ==========================================
// APNA PUBLIC SCHOOL - MAIN SCRIPT.JS
// ==========================================

// 1. Mobile Navigation Menu Toggle (For mobile devices)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// 2. Student Result Lookup Function (For Google Sheet or form search)
function checkResult(event) {
    // Prevent default form submission
    if (event) {
        event.preventDefault();
    }
    
    const rollNumberInput = document.getElementById('rollNumberInput');
    const resultDisplay = document.getElementById('resultOutput');

    if (!rollNumberInput || !resultDisplay) return;

    const rollNumber = rollNumberInput.value.trim();

    if (rollNumber === "") {
        alert("Please enter your Roll Number or B-Form number first!");
        return;
    }

    // Display loading message
    resultDisplay.innerHTML = `<p style="color: #007bff; font-weight: bold;">Searching result for Roll No: ${rollNumber}...</p>`;

    // Google Sheet connection will be linked here later
    setTimeout(() => {
        resultDisplay.innerHTML = `
            <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #ddd; margin-top: 10px;">
                <h4 style="color: #28a745; margin-bottom: 5px;">Result Details</h4>
                <p><strong>Roll Number:</strong> ${rollNumber}</p>
                <p><strong>Status:</strong> Pass (Demo Mode)</p>
                <p style="font-size: 12px; color: #666;">This will be fully linked with Google Sheets soon!</p>
            </div>
        `;
    }, 800);
}

// Add submit event listener to result form
const resultForm = document.getElementById('resultForm');
if (resultForm) {
    resultForm.addEventListener('submit', checkResult);
}