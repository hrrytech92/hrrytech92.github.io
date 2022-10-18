import React from "react";
// import myImage from "../img/myImage.png";
import DisplayLottie from "./DisplayLottie";
// import {lottieAnimationFile} from "../portfolio";
import { Fade } from "react-reveal";
import animationEthereumData from '../constant/lottie/skills/ethereum.json';
import animationCloudinfraData from '../constant/lottie/skills/cloudinfra.json';
import animationFullStackData from '../constant/lottie/skills/fullstack.json';
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "ReactJS_skill", content: "React", porcentage: "100%", value: "100" },
        { id: "VueJS_skill", content: "Vue", porcentage: "100%", value: "100" },
        { id: "PHP_skill", content: "PHP", porcentage: "70%", value: "70" },
        {
          id: "Node_skill",
          content: "Node&Express",
          porcentage: "100%",
          value: "100"
        },
        {
          id: "Django_skill",
          content: "Django",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Golang_skill",
          content: "Golang",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "SmartContract_skill",
          content: "Smart Contract",
          porcentage: "85%",
          value: "85"
        },
        {
          id: "Web3_skill",
          content: "Web3",
          porcentage: "90%",
          value: "90"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Possess extensive and rich knowledge of all software such as Website, Blockchain and more for over 8 years.<br/>Specializing in front end development.<br/>Experienced with all stages of the evelopment cycle for dynamic web projects.<br/>Well-versed in numerous programming languages including HTML5, JavaScript, CSS, React, Vue, MySQL, NOSQL.<br/>Strong background in project management and customer relations.<br/>Strong experience in a plenty of languages, such as Node(Express) and Python(Django, Flask).<br/>Agile Methodologies such as Scrum Have remote work experiences and team work experiences.<br/>Devops engineering using Docker, AWS AppSync, AWS EC2, AWS Lambda, AWS S3, AWS RDS, etc. <br/>Work with the Agile methodology and have experience with the following tools JIRA, Trello and GitHub."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">What I do</h3>
              {/* <p className="subtitle-a">
                Incididunt nostrud id aute culpa excepteur pariatur consequat
                elit culpa nulla enim anim incididunt.
              </p> */}
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
           <div className="row">
              <div className="col-md-6">
                <Fade left duration={2000}>
                  <DisplayLottie
                    animationData={animationFullStackData}
                  />
                </Fade>
              </div>
               <div className="col-md-6">
                <Fade right duration={2000}>
                  <h3>Full Stack Dev</h3>
                  <div className="tech_icons_container">
                    <img src="https://cdn.iconscout.com/icon/free/png-128/react-1175109.png" width="200"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-128/vue-282497.png" width="200"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-128/nodejs-2-226035.png" width="200"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-128/angular-3-226070.png" width="200"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-128/javascript-1-225993.png" width="200"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-128/jquery-7-1175152.png" width="200"  alt=""/>
                  
                    <img src="https://cdn.iconscout.com/icon/free/png-128/typescript-1-1175078.png" width="200"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-128/php-99-1175127.png" width="200"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-128/codeigniter-5-1175246.png" width="200"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-128/laravel-2-1175146.png" width="200"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-128/yii-2-1175059.png" width="200"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-128/html5-40-1175193.png" width="200"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-128/css3-11-1175239.png" width="200"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-128/sass-13-1175092.png" width="200"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-128/mongodb-4-1175139.png" width="200"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-128/mysql-4-226026.png" width="200"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-128/redis-6-1175105.png" width="200"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-128/python-20-1175115.png" width="200"  alt=""/>    
                  
                    <img src="https://cdn.iconscout.com/icon/free/png-128/django-13-1175187.png" width="200"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-64/cakephp-3-1175050.png" width="100"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-64/webpack-1-1174980.png" width="100"  alt=""/>
                  
                    <img src="https://cdn.iconscout.com/icon/free/png-64/symfony-3-1174988.png" width="100"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-64/go-76-1175027.png" width="100"  alt=""/>
                  </div>
                  <div className="tech_desc">
                    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                    <p>⚡ Building RESTful APIs in Node&Express, Django & Django REST Framework and Golang.</p>
                    <p>⚡ Building responsive Single-Page-Apps (SPA) & PWA in React(Redux, Hook, Context, Flux, Next).</p>
                    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                    <p>⚡ Building responsive Single-Page-Apps (SPA) & PWA in Vue(Vuex, Vuetify, Nuxt, Quasar).</p>
                    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                    <p>⚡ Building server side rendering website in Next and Nuxt.</p>
                    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                  </div>
                </Fade>
               </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Fade left duration={2000}>
                  <DisplayLottie
                    animationData={animationEthereumData}
                  />
                </Fade>
              </div>
               <div className="col-md-6">
               <Fade right duration={2000}>
                <h3>Blockchain Dev</h3>
                  <div className="tech_icons_container">
                    <img src="https://github.com/kroim/profile/blob/master/icons/icon_nft.png?raw=true" width="200"  alt=""/>
                    <img src="https://github.com/kroim/profile/blob/master/icons/icon_defi.png?raw=true" width="200"  alt=""/>
                    <img src="https://github.com/kroim/profile/blob/master/icons/icon_pancake.png?raw=true" width="200"  alt=""/>
                    <img src="https://github.com/kroim/profile/blob/master/icons/icon_solidity.png?raw=true" width="200"  alt=""/>
                    <img src="https://github.com/kroim/profile/blob/master/icons/icon_truffle.png?raw=true" width="200"  alt=""/>
                    <img src="https://github.com/kroim/profile/blob/master/icons/icon_metamask.png?raw=true" width="200"  alt=""/>
                    <img src="https://github.com/kroim/profile/blob/master/icons/icon_pivx.png?raw=true" width="200"  alt=""/>
                    <img src="https://github.com/kroim/profile/blob/master/icons/icon_bitcoin.png?raw=true" width="200"  alt=""/>
                  </div>
                  <div className="tech_desc">
                    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                    <p>⚡ Experience in developing Smart Contract using Solidity & Ethereum</p>
                    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                    <p>⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura</p>
                    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                    <p>⚡ Developing NFT Smart Contracts using ERC-721 Token Standard</p>
                    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                    <p>⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS</p>
                  </div>
               </Fade>
               </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Fade left duration={2000}>
                  <DisplayLottie
                    animationData={animationCloudinfraData}
                  />
                </Fade>
              </div>
               <div className="col-md-6">
                <Fade right duration={2000}>
                  <h3>Devops Dev</h3>
                  <div className="tech_icons_container">
                    <img src="https://cdn.iconscout.com/icon/free/png-128/git-18-1175219.png" width="200"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-128/docker-13-1175230.png" width="200"  alt=""/>
                    <img src="https://cdn.iconscout.com/icon/free/png-64/github-170-1175028.png" width="100"  alt=""/>
                  </div>
                  <div className="tech_desc">
                    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                    <p>⚡ Experience of working on AWS(AWS AppSync, AWS Amplify, AWS Lambda, AWS EC2, AWS S3, AWS RDS, etc).</p>
                    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                    <p>⚡ Experience of working on multiple cloud platforms</p>
                    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                    <p>⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases</p>
                    {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                    <p>⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions</p>
                  </div>
                </Fade>
               </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
