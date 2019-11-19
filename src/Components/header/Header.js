import React from "react";
import NavMenu from "./NavMenu";

const Header = ({arr}) => {
  
  return (
    <div>
      <div className="main-list">
        <div>
          <img
            class="logo-docplanner"
            src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
            alt="Docplanner Group"
          ></img>
        </div>
        <div>
          <ul className="list-menu">
            {arr.map((el, key) => (
              <NavMenu name={el.name} drop={el.drop} key={key} />
            ))}
          </ul>
        </div>
      </div>
      <div className="article">
        <img
          className="img_lead"
          src="https://www.docplanner.com/img/sygnet.png"
          srcset="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x"
        />

        <div className="title_docplanner">
          <h3>Making the healthcare experience more human</h3>
        </div>
        <div className="paragraph-docpalanner">
          <p>
            We want patients to find the perfect doctor and book an
            <br />
            appointment in the most easy way.The patient journey should be
            <br /> enjoyable, and that's why we are always next to them:to help
            them
            <br />
            find the best possible care. Anytime,anywhere.
          </p>
          <p>
            We also help doctors to better manage their practice and build their
            <br /> online reputation. With our integrated end-to-end solution,
            doctors
            <br /> are able not only to improve their online presence, but also
            to
            <br /> devote their time to what really matters: their patients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
