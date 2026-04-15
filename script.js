const updateClock = () => {
    const now = new Date();
    
    // Formatting time with leading zeros
    const h = now.getHours().toString().padStart(2, '0');
    const m = now.getMinutes().toString().padStart(2, '0');
    const s = now.getSeconds().toString().padStart(2, '0');
    
    const timeString = h + m + s; // Example: "140509"

    // Loop through each digit 1 to 6
    for (let i = 1; i <= 6; i++) {
        const digitElement = document.getElementById(`d${i}`);
        const value = timeString[i - 1];
        
        // Update class only if it changed to save performance
        const newClass = `time-${value}`;
        if (digitElement.className.baseVal !== newClass) {
            digitElement.setAttribute("class", newClass);
            
            // Add 'active' class to sub-elements that should light up
            const segments = digitElement.querySelectorAll('use');
            segments.forEach(seg => {
                // The CSS handles the fill, but we could add more logic here
            });
        }
    }
    
    requestAnimationFrame(updateClock);
};

// Start the engine
requestAnimationFrame(updateClock);
