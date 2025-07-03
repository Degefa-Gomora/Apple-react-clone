// import $ from "jquery";
// import styles from "./Footer.module.css";

// $(document).ready(function () {
//   function toggleFooterLinks() {
//     // Check if screen width is 768px or less (mobile view)
//     if ($(window).width() <= 768) {
//       $(".footer-links-wrapper ul").hide(); // Hide all footer lists initially on small screens

//       $(".footer-links-wrapper h3")
//         .off("click") // Remove any previous click event to avoid duplicates
//         .on("click", function () {
//           $(this).next("ul").slideToggle(); // Toggle the visibility of the next <ul>
//           $(this).toggleClass("expanded"); // Toggle "expanded" class for styling purposes
//         });
//     } else {
//       $(".footer-links-wrapper ul").show(); // Show all lists on large screens
//       $(".footer-links-wrapper h3").off("click"); // Remove the click event on large screens
//     }
//   }

//   toggleFooterLinks(); // Call the function initially to apply behavior based on screen size
//   $(window).resize(toggleFooterLinks); // Reapply behavior when the window is resized
// });










// // import $ from 'jquery';
// // $( document ).ready(function() {
// //     if ($(window).width() <= 768){  
// //         $('.footer-links-wrapper').addClass("someClass");
// //     }else{
// //         $('.footer-links-wrapper').removeClass("someClass");
// //     }
// //     $(window).on('resize', function(event){
// //         if ($(window).width() <= 768){  
// //             $('.footer-links-wrapper').addClass("someClass");
// //         }else{
// //             $('.footer-links-wrapper').removeClass("someClass");
// //             $('.footer-links-wrapper ul').show();
// //         }   
// //     });
// //     // Footer collapse functionality 
// //     $(document).on("click", ".someClass h3", function(){
// //         $(this).next('ul').slideToggle();
// //         $(this).toggleClass("expanded");
// //     });
    
    
// // });

import $ from "jquery";
import styles from "./Footer.module.css";

$(document).ready(function () {
  function toggleFooterLinks() {
    const wrapperClass = styles.footerLinksWrapper;
    const expandedClass = styles.expanded;

    if ($(window).width() <= 768) {
      $(`.${wrapperClass} ul`).hide();

      $(`.${wrapperClass} h3`)
        .off("click")
        .on("click", function () {
          $(this).next("ul").slideToggle();
          $(this).toggleClass(expandedClass);
        });
    } else {
      $(`.${wrapperClass} ul`).show();
      $(`.${wrapperClass} h3`).off("click");
    }
  }

  toggleFooterLinks();
  $(window).resize(toggleFooterLinks);
});
