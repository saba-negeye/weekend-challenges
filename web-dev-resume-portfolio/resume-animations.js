//call method outside function
askMode();




//light or dark mode stretch goal 
//if value is stored/true then style body accordingly 
if (localStorage.background) {
    $("body").css("background-color", localStorage.background);
} else {
    // Ask the user for the mode if
    askMode();
}

// Function to prompt the user for light or dark mode
function askMode() {
    var mode = prompt("Would you like to view the resume in light mode or dark mode? Enter light or dark:");
    if (mode == "light") {
        localStorage.background = "white"; // Save light mode in localStorage
    } else if (mode == "dark") {
        localStorage.background = "black"; // Save dark mode in localStorage
    } else {
        alert("Invalid input! Please enter 'light' or 'dark'.");
        askMode(); // Call function again for valid input
    }
}

//animation function to slide toggle contact information button to reveal list
$(document).ready(function () {
    // Toggle connect-links when connect-button is hovered
    $("#connect-button").hover(function () {
        $("#connect-links").slideToggle("slow");
    });

    //keeps connect-links tag stay open when hovering over it and slideup after 300 ms
    $("#connect-links").hover(function () {
        $(this).stop(true, true).show(); // Show immediately
    }, function () {
        $(this).delay(3000).slideUp("slow"); // Slide up after delay
    });
});

//download resume progress bar animation 

$(document).ready(function() {
    $('#resume-link').click(function(e) {
        //object is passed into the click handler so next function can be called on it
        e.preventDefault(); // Prevent default behavior of a tag link opening 


        // Reset progress bar to 0
        $('#download-progress').css('width', '0%').show();

        // Animate the progress bar
        $('#download-progress').animate({ width: '100%' }, 3000, function() {
            alert("Resume has downloaded, redirecting you to a new URL")
            // After animation, open the PDF file in a new tab
            window.open("/Users/saban/Documents/bootcamp/weekend-challenges/interactive-resume/Saba's Resume.pdf",'_blank'); // Change to your PDF URL
        });
    });
});