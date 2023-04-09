<script>
  // Array of image URLs
  var images = [
    '\images\1.jpg',
    '\images\2.jpg',
    '\images\3.jpg',
    '\images\4.jpg',
    '\images\5.jpg',

  ];

  // Set the time interval for each slide (in milliseconds)
  var interval = 3000;

  // Set the starting index of the image array
  var index = 0;

  // Get the slideshow container element
  var slideshow = document.getElementById('slideshow');

  // Create a function to display each image in the slideshow
  function displayImage() {
    // Set the image source and alt attributes
    var img = document.createElement('img');
    img.src = images[index];
    img.alt = 'Classic Volvo car';

    // Remove any previous images from the slideshow
    slideshow.innerHTML = '';

    // Add the current image to the slideshow
    slideshow.appendChild(img);

    // Increment the index for the next image
    index++;

    // If the index exceeds the length of the image array, reset it to zero
    if (index == images.length) {
      index = 0;
    }

    // Set a timer to call this function again after the specified interval
    setTimeout(displayImage, interval);
  }

  // Call the displayImage function to start the slideshow
  displayImage();

  unction updateSlideshow() {
    var slideshow = document.getElementById('slideshow');
    var images = slideshow.getElementsByTagName('img');

    // Set the slideshow container height to match the first image height
    slideshow.style.height = images[0].offsetHeight + 'px';

    // Show the first image and set a timer to cycle through the rest
    images[0].style.display = 'block';
    var i = 0;
    setInterval(function() {
      images[i].style.display = 'none';
      i = (i + 1) % images.length;
      images[i].style.display = 'block';
    }, 5000);
  }

  // Call the updateSlideshow function when the page loads
  window.onload = function() {
    updateSlideshow();
    window.addEventListener('resize', updateSlideshow); // Call updateSlideshow whenever the window is resized
  }

</script>
