import React from "react";
import drop1 from "../../images/drop-1.png";
import drop2 from "../../images/drop-2.png";
import drop3 from "../../images/drop-3.png";
import drop1logo from "../../images/logodrop-1.svg";
import drop2logo from "../../images/logodrop-2.svg";
import drop3logo from "../../images/logodrop-3.svg";
import bottomlogo1 from "../../images/bottomlogo1.svg";
import bottomlogo2 from "../../images/bottomlogo2.svg";
import bottomlogo3 from "../../images/bottomlogo-3.svg";
import "./home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className='home'>
      <Link
        to='/drop1'
        className='home__drop'
      >
        <img
          className='home__drop-img'
          src={drop1}
          alt='drop-1'
        />
        <div className='home__overlay'>
          <img
            className='home__overlay-logo'
            src={drop1logo}
            alt='drop-1'
            id='overlay-logo'
          />
          <p
            className='home__overlay-description'
            id='overlay-description'
          >
            UNC — the clothing brand has been in existence since 2021. Basing
            and logistics management in Russia, Cheboksary.
          </p>
          <img
            className='home__bottom-logo'
            id='bottom-logo'
            src={bottomlogo1}
            alt='drop-1'
          ></img>
        </div>
      </Link>
      <Link
        to='/drop2'
        className='home__drop'
      >
        <img
          className='home__drop-img'
          src={drop2}
          alt='drop-2'
        />
        <div className='home__overlay'>
          <img
            className='home__overlay-logo'
            src={drop2logo}
            alt='drop-2'
            id='overlay-logo'
          />
          <p
            className='home__overlay-description'
            id='overlay-description2'
          >
            UNC — the clothing brand has been in existence since 2021. Basing
            and logistics management in Russia, Cheboksary.
          </p>
          <img
            className='home__bottom-logo'
            id='bottom-logo'
            src={bottomlogo2}
            alt='drop-2'
          ></img>
        </div>
      </Link>
      <Link
        to='/drop3'
        className='home__drop'
      >
        <img
          className='home__drop-img'
          src={drop3}
          alt='drop-3'
        />
        <div className='home__overlay'>
          <img
            className='home__overlay-logo'
            src={drop3logo}
            alt='drop-3'
            id='overlay-logo'
          ></img>
          <p
            className='home__overlay-description'
            id='overlay-description'
          >
            UNC — the clothing brand has been in existence since 2021. Basing
            and logistics management in Russia, Cheboksary.
          </p>
          <img
            className='home__bottom-logo'
            id='bottom-logo'
            src={bottomlogo3}
            alt='drop-3'
          ></img>
        </div>
      </Link>
    </section>
  );
}
