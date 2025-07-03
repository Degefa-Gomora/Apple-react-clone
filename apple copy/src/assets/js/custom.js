$(document).ready(function () {
  function toggleFooterLinks() {
    // Check if screen width is 768px or less (mobile view)
    if ($(window).width() <= 768) {
      $(".footer-links-wrapper ul").hide(); // Hide all footer lists initially on small screens

      $(".footer-links-wrapper h3")
        .off("click") // Remove any previous click event to avoid duplicates
        .on("click", function () {
          $(this).next("ul").slideToggle(); // Toggle the visibility of the next <ul>
          $(this).toggleClass("expanded"); // Toggle "expanded" class for styling purposes
        });
    } else {
      $(".footer-links-wrapper ul").show(); // Show all lists on large screens
      $(".footer-links-wrapper h3").off("click"); // Remove the click event on large screens
    }
  }

  toggleFooterLinks(); // Call the function initially to apply behavior based on screen size
  $(window).resize(toggleFooterLinks); // Reapply behavior when the window is resized
});
