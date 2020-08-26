import React, { Component } from "react";
import { RoomContext } from "../Context.jsx";
import Loading from "./Loading.jsx";
import Room from "./Room.jsx";
import Title from "./Title.jsx";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { loading, featuredRooms: rooms } = this.context;

    return (
      <div>
        <Title title="featured-rooms" />
        <div className="featured-rooms-center">
          {loading ? (
            <Loading />
          ) : (
            rooms.map((room) => {
              return <Room key={room.id} room={room} />;
            })
          )}
        </div>
      </div>
    );
  }
}
