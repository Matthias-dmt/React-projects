import React from "react";
import Hero from "../components/Hero.jsx";
import Banner from "../components/Banner.jsx";
import Services from "../components/Services.jsx";
import FeaturedRooms from "../components/FeaturedRooms.jsx";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}
