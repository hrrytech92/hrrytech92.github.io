import React from "react";
import "./stars.scss";
import Typed from "react-typed";

class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      about_me: [
        {
          id: "first-p-about",
          content:
            "Possess extensive and rich knowledge of all software such as Website, Blockchain and more for over 8 years.<br/><br/>Specializing in front end development.<br/>Experienced with all stages of the evelopment cycle for dynamic web projects.<br/>Well-versed in numerous programming languages including HTML5, JavaScript, CSS, TypeScript, React, Vue, MySQL, NOSQL.<br/><br/>Strong background in project management and customer relations.<br/>Strong experience in a plenty of languages, such as Node(Express), Python(Django, Flask) and Golang.<br/><br/>Experienced with NFT (non-fungible token) and Defi implementation. Have experiences with solidity smart contract languages. Deep knowledgement about the Blockchain ecosystem, wallet and decentralization. Blockchain implementation needs frontend website implementation as a part of it.<br/><br/>Devops engineering using Docker, AWS AppSync, AWS EC2, AWS Lambda, AWS S3, AWS RDS, etc.<br/>Agile Methodologies such as Scrum.<br/> Have remote work experiences and team work experiences."
        }
      ]
    }
  }
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <h1 className="intro-title mb-4">Hello, This is harry.</h1>
                  <p className="intro-subtitle">
                    <span className="text-slider-items"></span>
                    <strong className="text-slider">
                      <Typed
                        strings={[
                          "Back-End Developer",
                          "Front-End Developer",
                          "Blockchain Developer"
                        ]}
                        typeSpeed={80}
                        backDelay={1100}
                        backSpeed={30}
                        loop
                      />
                    </strong>
                  </p>
                  <p className="pt-3">
                    <a
                      className="btn btn-primary btn js-scroll px-4"
                      href="#work"
                      role="button"
                    >
                      View My Work
                    </a>
                  </p>
                </div>
                <div className="col-md-7">
                  {this.state.about_me.map(content => {
                    return (
                      <p className="lead" key={content.id} dangerouslySetInnerHTML={{__html: content.content}}>
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
