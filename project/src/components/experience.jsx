import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// import myImage from "../img/myImage.png";

class Experience extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <section id="experience" className="about-mf sect-pt4 route">
        <div className="row">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2017.01-2019.12"
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={<i className="fab fa-angular experience-icon"></i>}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                Front-END ENGINEER
              </h3>
              <h6
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                BLOCKSISM, SWEDEN
              </h6>
              <div class="exper_desc">
                <p>
                •	Designed the application architecture on TypeScript, React, and Redux.
                <br/>
                •	Designed a REST API with a subteam of back-end developers.
                <br/>
                •	Configured the project's Webpack build process.
                <br/>
                •	Led the front-end developers—doing code reviews to achieve maintainable and high-quality code.
                <br/>
                •	Worked in an agile scrum team.
                <br/>
                •	Created 27 web portals for the Football Federation in Australia, based on a custom dynamic template system.
                <br/>
                •	Built a front-end permissions library which became the company standard.
                <br/>
                •	Developed JavaScript sports widgets in an Agile distributed team.
                </p>
              </div>
              <div style={{ textAlign: "left", marginTop: "15px", color: "rgb(174, 148, 79)", fontWeight: "bold" }}>
                React(Next), Vue(Quasar, Vuetify, Nuxt)
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2020.03-2021.03"
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={<i className="fab fa-angular experience-icon"></i>}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                Full Stack Developer
              </h3>
              <h6
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                CONSTELLATION SOFTWARE INC, CANADA
              </h6>
              <div class="exper_desc">
                <p>
                •	Worked on building accounting freelancing website for firms using Laravel, Vue.js and MySQL.
                <br/>
                •	Built back-end APIs using Laravel best practice.
                <br/>
                •	Implemented full-text search using Elasticsearch.
                <br/>
                •	Wrote many reusable Vue.js components using best practice.
                <br/>
                •	Improved old-fashioned Vue.js components with modularity and DRY principles in mind.
                <br/>
                •	Set up JavaScript code linting and auto-formatting system using ESLint and Prettier.
                <br/>
                •	Improved code design.
                </p>
              </div>
              <div style={{ textAlign: "left", marginTop: "15px", color: "rgb(174, 148, 79)", fontWeight: "bold" }}>
                Laravel, Vue
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021.01-2021.12"
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={<i className="fab fa-angular experience-icon"></i>}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ textAlign: "left" }}
              >
                BLOCKCHAIN DEVELOPER
              </h3>
              <h6
                className="vertical-timeline-element-subtitle"
                style={{ textAlign: "left" }}
              >
                UNISOFT, CANADA
              </h6>
              <div class="exper_desc">
                <p>
                •	Defi team development
                <br/>
                •	Mastering Swap SDKs.
                <br/>
                •	Implement the smart contract by using Swap SDK.
                <br/>
                •	Forking the Swap Protocol and customize it.
                <br/>
                •	Understand the EVM and optimizing solution of smart contract
                <br/>
                •	Working on Ethereum blockchain network
                <br/>
                •	Mastering NFT and learning how to Defi work
                <br/>
                •	NFT team development (art design, marketing, smart contract development, frontend)
                <br/>
                •	Learning Defi with many new core concepts
                <br/>
                Concept Mastering (AMM, Liquidity Pool, Yield Farming, Staking, Swap, Router)
                <br/>
                •	Understand the usage of web3.js, ether.js
                </p>
              </div>
              <div style={{ textAlign: "left", marginTop: "15px", color: "rgb(174, 148, 79)", fontWeight: "bold" }}>
                Smart Contract, Web3, ERC(20, 721, 1155), Metamask, SwapSDK
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              }
            />
          </VerticalTimeline>
        </div>
      </section>
    );
  }
}

export default Experience;
