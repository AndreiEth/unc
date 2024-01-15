import React from "react";
import drop1 from "../../images/drop-1.png";
import drop2 from "../../images/drop-2.png";
import drop3 from "../../images/drop-3.png";
import drop1logo from "../../images/logodrop-1.svg";
import drop2logo from "../../images/logodrop-2.svg";
import drop3logo from "../../images/logodrop-3.svg";
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
          src={drop1}
          alt='drop-1'
        ></img>
        <div className='home__overlay'>
          <img
            className='home__drop-logo'
            src={drop1logo}
            alt='drop-1'
          ></img>
          <p className='home__overlay-description'>
            UNC — the clothing brand has been in existence since 2021. Basing
            and logistics management in Russia, Cheboksary.
          </p>
        </div>
      </Link>
      <Link
        to='/drop2'
        className='home__drop'
      >
        <img
          src={drop2}
          alt='drop-2'
        />
        <div className='home__overlay'>
          <img
            className='home__drop-logo'
            src={drop2logo}
            alt='drop-2'
          ></img>
          <p className='home__overlay-description'>
            UNC — the clothing brand has been in existence since 2021. Basing
            and logistics management in Russia, Cheboksary.
          </p>
        </div>
      </Link>
      <Link
        to='/drop3'
        className='home__drop'
      >
        <img
          src={drop3logo}
          alt='drop-3'
        />
        <div className='home__overlay'>
          <img
            className='home__drop-logo'
            src={drop1}
            alt='drop-3'
          ></img>
          <p className='home__overlay-description'>
            UNC — the clothing brand has been in existence since 2021. Basing
            and logistics management in Russia, Cheboksary.
          </p>
        </div>
      </Link>
    </section>
  );
}
