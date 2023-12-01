document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the class "playButton"
    var playButtons = document.querySelectorAll('.playButton');

    // Add a click event listener to each button
    playButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Get the audio source from the "data-audio" attribute
            var audioSrc = button.getAttribute('data-audio');

            // Create a new audio element with the specified source
            var audio = new Audio(audioSrc);

            // Play the audio when the button is clicked
            audio.play();
        });
    });

    // Get the jumpscare button element
    var jumpscareButton = document.getElementById('jumpscareButton');

    // Add a click event listener to the jumpscare button
    jumpscareButton.addEventListener('click', function () {
        // Get the audio and image sources from the "data-audio" and "data-image" attributes
        var audioSrc = jumpscareButton.getAttribute('data-audio');
        var imageSrc = jumpscareButton.getAttribute('data-image');

        // Create a new audio element with the specified source
        var audio = new Audio(audioSrc);

        // Create an image element with the specified source
        var image = new Image();
        image.src = imageSrc;

        // Style the image to cover the whole screen
        image.style.width = '100%';
        image.style.height = '100%';
        image.style.position = 'fixed';
        image.style.top = '0';
        image.style.left = '0';
        image.style.opacity = '1'; // Set initial opacity to fully visible

        // Play the audio and show the image when the button is clicked
        audio.play();
        document.body.appendChild(image);

        // Fades out the image after 1.5 seconds
        setTimeout(function () {
            image.style.transition = 'opacity 1s ease-out';
            image.style.opacity = '0';
            setTimeout(function () {
                // Remove the image from the DOM after fading out
                document.body.removeChild(image);
            }, 1000); // Adjust the delay time based on the transition duration
        }, 1500); // Adjust the delay time before fading out the image
    });
});
