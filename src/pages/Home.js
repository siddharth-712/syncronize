import React, { useState } from "react";
import Logo from "../components/Logo/Logo";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [roomID, setRoomID] = useState();
  const [username, setUsername] = useState();
  const createNewRoom = (e) => {
    const id = uuidv4();
    setRoomID(id.substring(9, 23));
    toast.success("Created a new Room ID");
  };

  const joinRoom = (e) => {
    if (!roomID || !username) {
      toast.error("RoomID and Username not found!!");
      return;
    }

    // Redirect
    navigate(`/editor/${roomID}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === "ENTER") {
      joinRoom();
    }
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <Logo />
        <h4 className="main__label">Paste invitation ROOM ID</h4>
        <div className="input__group">
          <input
            value={roomID}
            onChange={(e) => setRoomID(e.target.value)}
            type="text"
            className="input__box"
            placeholder="ROOM ID"
            onKeyUp={handleInputEnter}
          />
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="input__box"
            placeholder="USERNAME"
            onKeyUp={handleInputEnter}
          />
          <button onClick={joinRoom} className="btn btn__join">
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <button onClick={createNewRoom} className="create__newRoom">
              New Room
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
