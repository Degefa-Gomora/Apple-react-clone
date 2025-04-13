import React from "react";

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
              <img src="images/icons/16.png" alt="Country Flag" />
            </div>
            <div className="footer-country-name">United States</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
