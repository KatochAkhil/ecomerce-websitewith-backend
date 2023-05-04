import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="first-item">
              <div className="logo">
                <img
                  src="./images/white-logo.png"
                  alt="hexashop ecommerce templatemo"
                />
              </div>
              <ul>
                <li>
                  <a href="#">
                    16501 Collins Ave, Sunny Isles Beach, FL 33160, United
                    States
                  </a>
                </li>
                <li>
                  <a href="#">hexashop@company.com</a>
                </li>
                <li>
                  <a href="#">010-020-0340</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <h4>Shopping &amp; Categories</h4>
            <ul>
              <li>
                <a href="#">Men`s Shopping</a>
              </li>
              <li>
                <a href="#">Women’s Shopping</a>
              </li>
              <li>
                <a href="#">Kid's Shopping</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Homepage</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h4>Help &amp; Information</h4>
            <ul>
              <li>
                <a href="#">FAQ's</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Refund </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-12">
            <div className="under-footer">
              <p>
                Made with ♥️ By{" "}
                <a
                  href="https://portfolio-8llicblox-katochakhil.vercel.app/"
                  target="_blank"
                >
                  Akhil Katoch
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
