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
              date="2018.07-2022.09"
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
                CONSTELLATION SOFTWAREE INC, CANADA
              </h6>
              <div class="exper_desc">
                <p>
                •	Development and Maintenance.
                <br/>
                •	Created from scratch in Typescript for most components with React and Vue with storybook in mind.
                <br/>
                •	Developed authorization workflow, dashboard of traffic system on Ann arbor and so on, Analytics, Warnings, and Violations page.
                <br/>
                •	Using Google Map API, implemented Adobe XD design to perfect UI.
                <br/>
                •	Using React Web socket, display real-time data for vehicles and traffic signals.
                <br/>
                •	Backend with Laravel and custom PHP script.
                <br/>
                •	Used the GIT tool to keep track of all work and all changes in source code and deployed the applications.
                <br/>
                •	Participated in Agile methodology for application development, had Scrum meetings every day.
                <br/>
                •	Tracking and updating project progress in Azure DevOps was strongly enforced.
                <br/>
                •	Communication was held through our Slack channel.
                <br/>
                </p>
              </div>
              <div style={{ textAlign: "left", marginTop: "15px", color: "rgb(174, 148, 79)", fontWeight: "bold" }}>
                React(Next), Vue(Quasar, Vuetify, Nuxt), TypeScript, Storybook, Swagger Tool, TDD, AWS Services(Lambda, API Gateway, Cognito, S3 Bucket, SNS, SQS, EC2),
                CI/CD, Docker, Kubernets, GCP, Teraform, Git, Slack, Jira, Trello
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2019.12-2022.10"
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
                Smart Contract, Web3, ERC(20, 721, 1155), Metamask, SwapSDK, Defi protocol(Staking, Farming, Swap, Pool, Burn), TDD, Git, Slack, Jira, Trello 
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2015.03-2018.04"
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
                KINAXIS, CANADA
              </h6>
              <div class="exper_desc">
                <p>
                •	Developed front end application with mainly Vue and React
                <br/>
                •	Worked with the team to plan sprints.
                <br/>
                •	Develop and maintain custom data-centric web applications using Node JS, React and Services with Agile/SCRUM. 
                <br/>
                •	Served as a lead developer for building an educational marketing simulation app using Django, React, Redux, Crossbar, and Autobahn.
                <br/>
                •	Mentoring and assisting with training of new and junior programmers as well as doing code reviews for other team members to ensure highest possible quality in software products.
                <br/>
                •	Planned and reengineered a legacy application into a modern Laravel and Vue.js based software. Together with the subject matter experts developed the requirements for new features and functionalities based on the latest government regulations and led the team of in-house and offshore developers and testers to implement the final product.
                <br/>
                •	Provided high-performance cloud deployment solutions and maintain rapid deployment pipelines, server monitoring, and troubleshooting.
                <br/>
                •	Identify and implement best practices for securing web servers, which is brave enough to challenge technical decisions.
                <br/>
                •	Write scripts and automation using Perl/Python/Groovy/Java/Bash
                <br/>
                •	Configure and manage data sources like MySQL, PostgreSQL, MongoDB, Elasticsearch, Redis, Cassandra, Hadoop, etc.
                </p>
              </div>
              <div style={{ textAlign: "left", marginTop: "15px", color: "rgb(174, 148, 79)", fontWeight: "bold" }}>
                Laravel, Vue, Node, Python, Django, Flask, Fast API, React, TypeScript, TDD, Swagger Tool, MongoDB, Oracle, Redis, Microservice Architecture, AWS Services(Lambda, API Gateway, Cognito, S3 Bucket, SNS, SQS, EC2),
                CI/CD, Docker, Kubernets, GCP, Teraform, Azure, Git, Slack, Jira, Trello
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
