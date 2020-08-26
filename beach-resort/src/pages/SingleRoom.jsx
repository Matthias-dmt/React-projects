import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero.jsx";
import Banner from "../components/Banner.jsx";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context.jsx";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return <div>Hello from single rooms page</div>;
  }
}
