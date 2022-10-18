import React from "react";

//import stock
import stock_react_pet_main from "../img/react_pet/1.png";
import stock_react_pet_1 from "../img/react_pet/2.png";

import stock_react_tundra_main from "../img/react_tundra/1.png";
import stock_react_tundra_1 from "../img/react_tundra/2.png";
import stock_react_tundra_2 from "../img/react_tundra/3.png";
import stock_react_tundra_3 from "../img/react_tundra/4.png";
import stock_react_tundra_4 from "../img/react_tundra/5.png";

import stock_vue_food_main from "../img/vue_food/1.png";
import stock_vue_food_1 from "../img/vue_food/2.png";
import stock_vue_food_2 from "../img/vue_food/3.png";

import stock_vue_marketplace_main from "../img/vue_marketplace/1.png";
import stock_vue_marketplace_1 from "../img/vue_marketplace/2.png";
import stock_vue_marketplace_2 from "../img/vue_marketplace/3.png";
import stock_vue_marketplace_3 from "../img/vue_marketplace/4.png";
import stock_vue_marketplace_4 from "../img/vue_marketplace/5.png";


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
                      <div className="col-sm-10">
                        <h2 className="w-title">Pet Shop</h2>
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
                      <div className="col-sm-2">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
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
                      <div className="col-sm-10">
                        <h2 className="w-title">Tundra Shop</h2>
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
                      <div className="col-sm-2">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
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
                      <div className="col-sm-10">
                        <h2 className="w-title">Food Order</h2>
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
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
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
                      <div className="col-sm-10">
                        <h2 className="w-title">Blockchain Marketplace</h2>
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
                          {/*} / <span className="w-date">18 Sep. 2018</span>*/}
                        </div>
                      </div>
                      <div className="col-sm-2">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
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

          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
