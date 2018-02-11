import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="about-wrapper">
            <img
              src={config.userAvatar}
              className="about-img"
              alt={config.userName}
            />
            <CardText>
              <div className="about-text md-body-1">
                <p>
                  Originally from Philadelphia, now living in Baltimore. I like hiking, biking, reading, tennis, squash, bike maintenance, carving, WWOOFing...
                </p>
                <p><a href="https://github.com/mkaplan9" target="blank">Github</a></p>
                <p><a href="https://www.linkedin.com/in/max-kaplan-6a946455/" target="blank">LinkedIn</a></p>
                <br></br>
                <br></br>
                <p>Bitcoin: 1MYZdwK9fkpHpTv5t8vihAqcTdYUjyyeAf</p>
                <p>Ethereum: 0x789b24AcD89C3042c5557164C71eEdF0A18C2516</p>
                <p>Ripple: </p>
                <p>Litecoin: LZ7jPR4iyTEQBgSMYJTRAsJ1wo7UTPxuTy</p>
                <p>Turtlecoin: TRTLuwfW2vPgFWME15yZH6DvqmVXksjfVbqSnTE94XVWDE9dxzqg4W4bvMweb5TiiXKQ
                  wtqrPJgcGTAvq7b5JUpPSbv86BPnny8</p>
              </div>
            </CardText>
          </div>
        </Card>
      </div>
    );
  }
}

export default About;
