import React, { useState, useEffect } from "react";
import NavCard from "./NavCard.js";
import "../styles/NavOptions.css";
import { useLocation } from "react-router-dom";
const NavOptions = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
  audio,
  accessories,
}) => {
  let location = useLocation();
  const [miPhoneToggle, setMiPhoneToggle] = useState(false);
  const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopToggle, setLaptopToggle] = useState(false);
  const [fitnessToggle, setFitnessToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);

  useEffect(() => {
    if (location.hash === "#miphones") {
      setMiPhoneToggle(true);
    } else {
      setMiPhoneToggle(false);
    }
    if (location.hash === "#redmiphones") {
      setRedmiPhoneToggle(true);
    } else {
      setRedmiPhoneToggle(false);
    }
    if (location.hash === "#tv") {
      setTvToggle(true);
    } else {
      setTvToggle(false);
    }
    if (location.hash === "#laptops") {
      setLaptopToggle(true);
    } else {
      setLaptopToggle(false);
    }
    if (location.hash === "#lifestyle") {
      setFitnessToggle(true);
    } else {
      setFitnessToggle(false);
    }
    if (location.hash === "#home") {
      setHomeToggle(true);
    } else {
      setHomeToggle(false);
    }
    if (location.hash === "#audio") {
      setAudioToggle(true);
    } else {
      setAudioToggle(false);
    }

    if (location.hash === "#accessories") {
      setAccessoriesToggle(true);
    } else {
      setAccessoriesToggle(false);
    }
    return () => {
      setMiPhoneToggle(false);
      setRedmiPhoneToggle(false);
      setTvToggle(false);
      setLaptopToggle(false);
      setFitnessToggle(false);
      setHomeToggle(false);
      setAudioToggle(false);
      setAccessoriesToggle(false);
    };
  }, [location]);

  return (
    <div className="navOptions">
      {miPhoneToggle ? (
        miPhones.map((item) => (
          <NavCard
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.image}
          />
        ))
      ) : (
        <></>
      )}

      {redmiPhoneToggle
        ? redmiPhones.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {tvToggle
        ? tv.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {laptopToggle
        ? laptop.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {fitnessToggle
        ? fitnessAndLifeStyle.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {homeToggle
        ? home.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {audioToggle
        ? audio.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}

      {accessoriesToggle
        ? accessories.map((item) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
    </div>
  );
};

export default NavOptions;
