import React from "react";
import flag from "../assets/images/icons/16.png";

function Footer() {
  const footerSections = [
    {
      title: "Shop and Learn",
      links: [
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "TV",
        "Music",
        "AirPods",
        "HomePod",
        "iPod touch",
        "Accessories",
        "Gift Cards",
      ],
    },
    {
      title: "Services",
      links: [
        "Apple Music",
        "Apple News+",
        "Apple TV+",
        "Apple Arcade",
        "Apple Card",
        "iCloud",
      ],
      extra: {
        title: "Account",
        links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
      },
    },
    {
      title: "Apple Store",
      links: [
        "Find a Store",
        "Genius Bar",
        "Today at Apple",
        "Apple Camp",
        "Field Trip",
        "Apple Store App",
        "Refurbished and Clearance",
        "Financing",
        "Apple Trade In",
        "Order Status",
        "Shopping Help",
      ],
    },
    {
      title: "For Business",
      links: ["Apple and Business", "Shop for Business"],
      extra: [
        {
          title: "For Education",
          links: ["Apple and Education", "Shop for College"],
        },
        {
          title: "For Healthcare",
          links: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"],
        },
        {
          title: "For Government",
          links: ["Apple and Education", "Shop for College"],
        },
      ],
    },
    {
      title: "Apple Values",
      links: [
        "Find a Store",
        "Genius Bar",
        "Today at Apple",
        "Apple Camp",
        "Field Trip",
        "Apple Store App",
      ],
      extra: {
        title: "About Apple",
        links: [
          "Find a Store",
          "Genius Bar",
          "Today at Apple",
          "Apple Camp",
          "Field Trip",
          "Apple Store App",
        ],
      },
    },
  ];

  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [expandedSections, setExpandedSections] = React.useState({});

  React.useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setExpandedSections({});
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (index) => {
    if (isMobile) {
      setExpandedSections((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    }
  };

  const isSectionVisible = (index) => !isMobile || expandedSections[index];

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="upper-text-container">
          <p>
            1. Trade In: Trade‑in values vary...{" "}
            <a
              href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Customer Agreement
            </a>{" "}
            and{" "}
            <a
              href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/"
              target="_blank"
              rel="noopener noreferrer"
            >
              iPhone Payments terms
            </a>
            .
          </p>
          <p>
            2. Subscription required. <br />
            Apple TV+ is $4.99/month...{" "}
            <a
              href="https://www.apple.com/promo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              terms
            </a>
            .
          </p>
        </div>

        <div className="footer-links-wrapper row">
          {footerSections.map((section, index) => (
            <div className="col-sm-12 col-md" key={index}>
              <h3
                onClick={() => handleToggle(index)}
                className={expandedSections[index] ? "expanded" : ""}
              >
                {section.title}
              </h3>
              <ul
                style={{ display: isSectionVisible(index) ? "block" : "none" }}
              >
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>

              {Array.isArray(section.extra)
                ? section.extra.map((extraSec, j) => (
                    <div key={j}>
                      <h3
                        onClick={() => handleToggle(`${index}-${j}`)}
                        className={
                          expandedSections[`${index}-${j}`] ? "expanded" : ""
                        }
                      >
                        {extraSec.title}
                      </h3>
                      <ul
                        style={{
                          display: isSectionVisible(`${index}-${j}`)
                            ? "block"
                            : "none",
                        }}
                      >
                        {extraSec.links.map((link, k) => (
                          <li key={k}>
                            <a href="#">{link}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                : section.extra && (
                    <>
                      <h3
                        onClick={() => handleToggle(`${index}-extra`)}
                        className={
                          expandedSections[`${index}-extra`] ? "expanded" : ""
                        }
                      >
                        {section.extra.title}
                      </h3>
                      <ul
                        style={{
                          display: isSectionVisible(`${index}-extra`)
                            ? "block"
                            : "none",
                        }}
                      >
                        {section.extra.links.map((link, i) => (
                          <li key={i}>
                            <a href="#">{link}</a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
            </div>
          ))}
        </div>

        <div className="my-apple-wrapper">
          More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
          <a href="#">other retailer</a> near you. Or call 1‑800‑MY‑APPLE.
        </div>

        <div className="copyright-wrapper row">
          <div className="copyright col-sm-12 col-md-8">
            Copyright &copy; 2020 Apple Inc. All rights reserved.
          </div>
          <div className="footer-links-terms col-sm-12 col-lg-6">
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Sales and Refunds</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">Site Map</a>
              </li>
            </ul>
          </div>
          <div className="footer-country col-sm-12 col-md-4 text-md-right col-lg-2">
            <div className="flag-wrapper">
              <img src={flag} alt="Country Flag" />
            </div>
            <div className="footer-country-name">United States</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;




//not work on expanding the footer
// import React from "react";

// function Footer() {
//   return (
//     <footer className="footer-wrapper">
//       <div className="container">
//         <div className="upper-text-container">
//           <p>
//             1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
//             promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X
//             in good condition. Additional trade‑in values require purchase of a
//             new iPhone, subject to availability and limits. Must be at least 18.
//             Apple or its trade‑in partners reserve the right to refuse or limit
//             any Trade In transaction for any reason. In‑store trade‑in requires
//             presentation of a valid, government-issued photo ID (local law may
//             require saving this information). Sales tax may be assessed on full
//             value of new iPhone. Additional terms from Apple or Apple’s trade-in
//             partners may apply. Monthly pricing: Available to qualified
//             customers and requires 0% APR, 24-month installment loan with
//             Citizens One or Apple Card Monthly Installments and iPhone
//             activation with AT&T, Sprint, T-Mobile, or Verizon. Taxes and
//             shipping not included. Additional Apple Card Monthly Installments
//             terms are in the{" "}
//             <a
//               href="https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Customer Agreement
//             </a>
//             . Additional iPhone Payments terms are{" "}
//             <a href="https://www.apple.com/legal/sales-support/iphoneinstallments_us/">
//               here
//             </a>
//             .
//           </p>
//           <p>
//             2. Subscription required.
//             <br />
//             <br />
//             Magic Keyboard sold separately.
//             <br />
//             <br />
//             Apple TV+ is $4.99/month after free trial. One subscription per
//             Family Sharing group. Offer good for 3 months after eligible device
//             activation. Plan automatically renews until cancelled. Restrictions
//             and other <a href="https://www.apple.com/promo/">terms</a> apply.
//           </p>
//         </div>
//         <div className="footer-links-wrapper row">
//           <div className="links-wrapper-1 col-sm-12 col-md">
//             <h3>Shop and Learn</h3>
//             <ul>
//               <li>
//                 <a href="#">Mac</a>
//               </li>
//               <li>
//                 <a href="#">iPad</a>
//               </li>
//               <li>
//                 <a href="#">iPhone</a>
//               </li>
//               <li>
//                 <a href="#">Watch</a>
//               </li>
//               <li>
//                 <a href="#">TV</a>
//               </li>
//               <li>
//                 <a href="#">Music</a>
//               </li>
//               <li>
//                 <a href="#">AirPods</a>
//               </li>
//               <li>
//                 <a href="#">HomePod</a>
//               </li>
//               <li>
//                 <a href="#">iPod touch</a>
//               </li>
//               <li>
//                 <a href="#">Accessories</a>
//               </li>
//               <li>
//                 <a href="#">Gift Cards</a>
//               </li>
//             </ul>
//           </div>
//           <div className="links-wrapper-2 col-sm-12 col-md">
//             <h3>Services</h3>
//             <ul>
//               <li>
//                 <a href="#">Apple Music</a>
//               </li>
//               <li>
//                 <a href="#">Apple News+</a>
//               </li>
//               <li>
//                 <a href="#">Apple TV+</a>
//               </li>
//               <li>
//                 <a href="#">Apple Arcade</a>
//               </li>
//               <li>
//                 <a href="#">Apple Card</a>
//               </li>
//               <li>
//                 <a href="#">iCloud</a>
//               </li>
//             </ul>
//             <h3>Account</h3>
//             <ul>
//               <li>
//                 <a href="#">Manage Your Apple ID</a>
//               </li>
//               <li>
//                 <a href="#">Apple Store Account</a>
//               </li>
//               <li>
//                 <a href="#">iCloud.com</a>
//               </li>
//             </ul>
//           </div>
//           <div className="links-wrapper-3 col-sm-12 col-md">
//             <h3>Apple Store</h3>
//             <ul>
//               <li>
//                 <a href="#">Find a Store</a>
//               </li>
//               <li>
//                 <a href="#">Genius Bar</a>
//               </li>
//               <li>
//                 <a href="#">Today at Apple</a>
//               </li>
//               <li>
//                 <a href="#">Apple Camp</a>
//               </li>
//               <li>
//                 <a href="#">Field Trip</a>
//               </li>
//               <li>
//                 <a href="#">Apple Store App</a>
//               </li>
//               <li>
//                 <a href="#">Refurbished and Clearance</a>
//               </li>
//               <li>
//                 <a href="#">Financing</a>
//               </li>
//               <li>
//                 <a href="#">Apple Trade In</a>
//               </li>
//               <li>
//                 <a href="#">Order Status</a>
//               </li>
//               <li>
//                 <a href="#">Shopping Help</a>
//               </li>
//             </ul>
//           </div>
//           <div className="links-wrapper-4 col-sm-12 col-md">
//             <h3>For Business</h3>
//             <ul>
//               <li>
//                 <a href="#">Apple and Business</a>
//               </li>
//               <li>
//                 <a href="#">Shop for Business</a>
//               </li>
//             </ul>
//             <h3>For Education</h3>
//             <ul>
//               <li>
//                 <a href="#">Apple and Education</a>
//               </li>
//               <li>
//                 <a href="#">Shop for College</a>
//               </li>
//             </ul>
//             <h3>For Healthcare</h3>
//             <ul>
//               <li>
//                 <a href="#">Manage Your Apple ID</a>
//               </li>
//               <li>
//                 <a href="#">Apple Store Account</a>
//               </li>
//               <li>
//                 <a href="#">iCloud.com</a>
//               </li>
//             </ul>
//             <h3>For Government</h3>
//             <ul>
//               <li>
//                 <a href="#">Apple and Education</a>
//               </li>
//               <li>
//                 <a href="#">Shop for College</a>
//               </li>
//             </ul>
//           </div>
//           <div className="links-wrapper-5 col-sm-12 col-md">
//             <h3>Apple Values</h3>
//             <ul>
//               <li>
//                 <a href="#">Find a Store</a>
//               </li>
//               <li>
//                 <a href="#">Genius Bar</a>
//               </li>
//               <li>
//                 <a href="#">Today at Apple</a>
//               </li>
//               <li>
//                 <a href="#">Apple Camp</a>
//               </li>
//               <li>
//                 <a href="#">Field Trip</a>
//               </li>
//               <li>
//                 <a href="#">Apple Store App</a>
//               </li>
//             </ul>
//             <h3>About Apple</h3>
//             <ul>
//               <li>
//                 <a href="#">Find a Store</a>
//               </li>
//               <li>
//                 <a href="#">Genius Bar</a>
//               </li>
//               <li>
//                 <a href="#">Today at Apple</a>
//               </li>
//               <li>
//                 <a href="#">Apple Camp</a>
//               </li>
//               <li>
//                 <a href="#">Field Trip</a>
//               </li>
//               <li>
//                 <a href="#">Apple Store App</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="my-apple-wrapper">
//           More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
//           <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
//         </div>
//         <div className="copyright-wrapper row">
//           <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
//             Copyright &copy; 2020 Apple Inc. All rights reserved.
//           </div>
//           <div className="footer-links-terms col-sm-12 order-3 col-lg-6 order-lg-2">
//             <ul>
//               <li>
//                 <a href="#">Privacy Policy</a>
//               </li>
//               <li>
//                 <a href="#">Terms of Use</a>
//               </li>
//               <li>
//                 <a href="#">Sales and Refunds</a>
//               </li>
//               <li>
//                 <a href="#">Legal</a>
//               </li>
//               <li>
//                 <a href="#">Site Map</a>
//               </li>
//             </ul>
//           </div>
//           <div className="footer-country col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
//             <div className="flag-wrapper">
//               <img src="images/icons/16.png" alt="Flag" />
//             </div>
//             <div className="footer-country-name">United States</div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

