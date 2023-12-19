import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_HOST } from "../../constants";
import { Typography } from "antd";
import useDoorprizeWebsocket from "../../hooks/useDoorprizeWebsocket";

const RandomizerView = () => {
  const { number, isRandomizing, isDisconnected } = useDoorprizeWebsocket();
  const [maxNumber, setMaxNumber] = useState(150);
  const [dummyRandom, setDummyRandom] = useState<string>();

  const fetchMax = async () => {
    const res = await axios.get(`${SERVER_HOST}/max`);
    setMaxNumber(res.data);
  };

  useEffect(() => {
    fetchMax();
  }, []);

  useEffect(() => {
    setInterval(() => {
      setDummyRandom(Math.round(Math.random() * maxNumber).toString());
    }, 10);
  }, [maxNumber]);

  if (isRandomizing) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography.Title
          style={{ margin: 0, fontSize: "200px", color: "#FFA100" }}
        >
          {dummyRandom}
        </Typography.Title>
      </div>
    );
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Typography.Title
        style={{ margin: 0, fontSize: "200px", color: "#FFA100" }}
      >
        {isDisconnected && "Error"}
        {number}
      </Typography.Title>
    </div>
  );
};

export default RandomizerView;
