import React from "react";

//import stock
import css_certificate_main from "../img/certificate/certi_css.png";
import css_certificate from "../img/certificate/certi_css.png";

import react_certificate_main from "../img/certificate/certi_react.png";
import react_certificate from "../img/certificate/certi_react.png";


class Certificate extends React.Component {
  render() {
    return (
      <section id="certificate" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Certificate</h3>
                {/* <p className="subtitle-a">
                  Incididunt nostrud id aute culpa excepteur pariatur consequat
                  elit culpa nulla enim anim incididunt.
                </p> */}
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box" style={{ marginBottom: '0' }}>
                <a href={css_certificate_main} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={css_certificate_main} alt="" className="img-fluid" />
                  </div>
                </a>
                <a
                  href={css_certificate}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
              <div className="work-content" style={{ textAlign: "center" }}>
                <a target="_blank" href="https://www.hackerrank.com/certificates/19de7e220909"
                style={{ fontWeight: 'bold' }}>CSS Certificate</a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box" style={{ marginBottom: '0' }}>
                <a href={react_certificate_main} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={react_certificate_main} alt="" className="img-fluid" />
                  </div>
                </a>
                <a
                  href={react_certificate}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
               <div className="work-content" style={{ textAlign: "center" }}>
                <a target="_blank" href="https://www.hackerrank.com/certificates/341f514d5d3b"
                style={{ fontWeight: 'bold' }}>React Certificate</a>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Certificate;
