import React from "react";

//import stock
import stock_react_pet_main from "../img/portfolio/react_pet/1.png";
import stock_react_pet_1 from "../img/portfolio/react_pet/2.png";

import stock_react_tundra_main from "../img/portfolio/react_tundra/1.png";
import stock_react_tundra_1 from "../img/portfolio/react_tundra/2.png";
import stock_react_tundra_2 from "../img/portfolio/react_tundra/3.png";
import stock_react_tundra_3 from "../img/portfolio/react_tundra/4.png";
import stock_react_tundra_4 from "../img/portfolio/react_tundra/5.png";

import stock_vue_food_main from "../img/portfolio/vue_food/1.png";
import stock_vue_food_1 from "../img/portfolio/vue_food/2.png";
import stock_vue_food_2 from "../img/portfolio/vue_food/3.png";

import stock_vue_marketplace_main from "../img/portfolio/vue_marketplace/1.png";
import stock_vue_marketplace_1 from "../img/portfolio/vue_marketplace/2.png";
import stock_vue_marketplace_2 from "../img/portfolio/vue_marketplace/3.png";
import stock_vue_marketplace_3 from "../img/portfolio/vue_marketplace/4.png";
import stock_vue_marketplace_4 from "../img/portfolio/vue_marketplace/5.png";

import stock_blockchain_marketplace_main from "../img/portfolio/Blockchain/1.jpg";
import stock_blockchain_marketplace_1 from "../img/portfolio/Blockchain/1.jpg";

import stock_django_backend_marketplace_main from "../img/portfolio/python/backend/1.jpg";
import stock_django_backend_marketplace_1 from "../img/portfolio/python/backend/4.jpg";
import stock_django_backend_marketplace_2 from "../img/portfolio/python/backend/2.jpg";
import stock_django_backend_marketplace_3 from "../img/portfolio/python/backend/3.jpg";

import stock_django_hospital_main from "../img/portfolio/python/Hospital/1.jpg";
import stock_django_hospital_1 from "../img/portfolio/python/Hospital/1.jpg";
import stock_django_hospital_2 from "../img/portfolio/python/Hospital/2.jpg";


class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
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
              <div className="work-box">
                <a href={stock_react_pet_main} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={stock_react_pet_main} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                        <h2 className="w-title">Pet Shop</h2>
                        <br/>
                        <div className="w-more">
                          <span className="w-ctegory">
                            React
                          </span>
                          <span className="w-ctegory">
                            Redux
                          </span>
                          <span className="w-ctegory">
                            Hooks
                          </span>
                          <span className="w-ctegory">
                            Node&Express
                          </span>
                          <span className="w-ctegory">
                            MongoDB
                          </span>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock_react_pet_1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href={stock_react_tundra_main} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={stock_react_tundra_main} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                        <h2 className="w-title">Tundra Shop</h2>
                        <br/>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Next
                          </span>
                          <span className="w-ctegory">
                            TypeScript
                          </span>
                          <span className="w-ctegory">
                            Redux
                          </span>
                          <span className="w-ctegory">
                            Hooks
                          </span>
                          <span className="w-ctegory">
                            Node&Express
                          </span>
                          <span className="w-ctegory">
                            PostgreSQL
                          </span>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock_react_tundra_1}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock_react_tundra_2}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock_react_tundra_3}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock_react_tundra_4}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href={stock_vue_food_main} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={stock_vue_food_main} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <h2 className="w-title">Food Order</h2>
                      <br/>
                      <div className="w-more">
                        <span className="w-ctegory">
                          Vue
                        </span>
                        <span className="w-ctegory">
                          Vuex
                        </span>
                        <span className="w-ctegory">
                          Vuetify
                        </span>
                        <span className="w-ctegory">
                          Laravel
                        </span>
                        <span className="w-ctegory">
                          MySQL
                        </span>
                        <span className="w-ctegory">
                          Nest
                        </span>
                        <span className="w-ctegory">
                          CI/CD
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock_vue_food_1}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock_vue_food_2}
                  data-lightbox="gallery-aguadeluz"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href={stock_vue_marketplace_main} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock_vue_marketplace_main} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                        <h2 className="w-title">Blockchain Marketplace</h2>
                        <br/>
                        <div className="w-more">
                          <span className="w-ctegory">
                            Vue
                          </span>
                          <span className="w-ctegory">
                            Vuex
                          </span>
                          <span className="w-ctegory">
                            Quasar
                          </span>
                          <span className="w-ctegory">
                            Web3
                          </span>
                          <span className="w-ctegory">
                            SwapSDK
                          </span>
                          <span className="w-ctegory">
                            Smart Contract
                          </span>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock_vue_marketplace_1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock_vue_marketplace_2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock_vue_marketplace_3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock_vue_marketplace_4}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href={stock_blockchain_marketplace_main} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock_blockchain_marketplace_main} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                        <h2 className="w-title">Blockchain & NFT Deliverables</h2>
                        <br/>
                        <div className="w-more">
                          <span className="w-ctegory">
                          Crypto
                          </span>
                          <span className="w-ctegory">
                          NFT
                          </span>
                          <span className="w-ctegory">
                          Solidity
                          </span>
                          <span className="w-ctegory">
                          Web3
                          </span>
                          <span className="w-ctegory">
                          Smart Contract
                          </span>
                          <span className="w-ctegory">
                          Truffle
                          </span>
                          <span className="w-ctegory">
                          ERC20 Website Issue Fixing
                          </span>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock_blockchain_marketplace_1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href={stock_django_backend_marketplace_main} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock_django_backend_marketplace_main} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                        <h2 className="w-title">Back-End Development Deliverables</h2>
                        <br/>
                        <div className="w-more">
                          <span className="w-ctegory">
                          Python
                          </span>
                          <span className="w-ctegory">
                          Django
                          </span>
                          <span className="w-ctegory">
                          PostgreSQL
                          </span>
                          <span className="w-ctegory">
                          NGINX
                          </span>
                          <span className="w-ctegory">
                          RabbitMQ
                          </span>
                          <span className="w-ctegory">
                          AWS Services
                          </span>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock_django_backend_marketplace_1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock_django_backend_marketplace_2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock_django_backend_marketplace_3}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>

            <div className="col-md-4">
              <div className="work-box">
                <a href={stock_django_hospital_main} data-lightbox="gallery-todo">
                  <div className="work-img">
                    <img src={stock_django_hospital_main} alt="" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                        <h2 className="w-title">Communication barrier between Patients and Healthcare professionals.</h2>
                        <br/>
                        <div className="w-more">
                          <span className="w-ctegory">
                          Python
                          </span>
                          <span className="w-ctegory">
                          Flask
                          </span>
                          <span className="w-ctegory">
                          PostgreSQL
                          </span>
                          <span className="w-ctegory">
                          GraphQL
                          </span>
                          <span className="w-ctegory">
                          Docker
                          </span>
                          <span className="w-ctegory">
                          CI/CD
                          </span>
                          <span className="w-ctegory">
                          NGINX
                          </span>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href={stock_django_hospital_1}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
                <a
                  href={stock_django_hospital_2}
                  data-lightbox="gallery-todo"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
