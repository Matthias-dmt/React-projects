import React from "react";
import RoomsFilter from "./RoomFilter.jsx";
import RoomsList from "./RoomList.jsx";

import { withRoomConsumer } from "../Context.jsx";
import Loading from "./Loading.jsx";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from "react";
// import RoomsFilter from "./RoomFilter.jsx";
// import RoomsList from "./RoomList.jsx";

// import { RoomConsumer } from "../Context.jsx";
// import Loading from "./Loading.jsx";

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <>
//             Hello from rooms RoomsContainer
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
