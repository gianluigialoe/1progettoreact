import React from 'react';
import { Facebook, Instagram,Twitter, } from 'react-bootstrap-icons';



const Footer = () => {
  return (
    <footer>
      <div className="row text-center mt-5">
        <div className="col-6 offset-3">
          <div className="row">
            <div className="col col-12 text-left mb-2 text-white">
           <Facebook />
             < Instagram />
              <Twitter />
              <i className="fa fa-youtube footer-icon"></i>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p><a href="#" className="text-white text-decoration-none" alt="footer link">Audio and Subtitles</a></p>
                  <p><a href="#" className="text-white text-decoration-none" alt="footer link">Media Center</a></p>
                  <p><a href="#" className="text-white text-decoration-none" alt="footer link">Privacy</a></p>
                  <p><a href="#" className="text-white text-decoration-none" alt="footer link">Contact us</a></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p><a href="#" className="text-white text-decoration-none" alt="footer link">Audio Description</a></p>
                  <p><a href="#" className="text-white text-decoration-none" alt="footer link">Investor Relations</a></p>
                  <p><a href="#" className="text-white text-decoration-none" alt="footer link">Legal Notices</a></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p><a href="#" className="text-white text-decoration-none" alt="footer link">Help Center</a></p>
                  <p><a href="#" className="text-white text-decoration-none" alt="footer link">Jobs</a></p>
                  <p><a href="#" className="text-white text-decoration-none" alt="footer link">Cookie Preferences</a></p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p><a href="#" className="text-white text-decoration-none" alt="footer link">Gift Cards</a></p>
                  <p><a href="#" className="text-white text-decoration-none" alt="footer link">Terms of Use</a></p>
                  <p><a href="#" className="text-white text-decoration-none" alt="footer link">Corporate Information</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-12 text-left mb-2 text-white">
              <button type="button" className="btn btn-sm footer-button rounded-0 mt-3 text-white">
                Service Code
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col col-12 text-left mb-2 mt-2 copyright text-white">
              © 1997-2022 Netflix, Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;