/**
 * Indextheme.js
 *
 * This script runs on page load and checks the current URL path
 * to determine which navigation link should be marked as "active."
 */
document.addEventListener('DOMContentLoaded', () => {
    // Get the full URL path, e.g., /my-repo/Experience/experience.html
    const path = window.location.pathname;

    // 1. Deactivate all buttons initially
    document.querySelectorAll('#nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    // 2. Determine the correct link ID to activate based on the path
    let activeId = 'nav-skill'; // Default to Skills (for index.html or root URL)

    // Check for specific folder paths (case-insensitive for robustness)
    if (path.toLowerCase().includes('/experience/')) {
        activeId = 'nav-experience';
    } else if (path.toLowerCase().includes('/desultory/')) {
        activeId = 'nav-essay';
    } else if (path.toLowerCase().includes('index.html') || path.endsWith('/')) {
        activeId = 'nav-skill';
    }
    
    // 3. Activate the corresponding button
    const activeLink = document.getElementById(activeId);
    if (activeLink) {
        activeLink.classList.add('active');
    }
});