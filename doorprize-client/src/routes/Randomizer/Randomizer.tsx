import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_HOST } from "../../constants";
import { Typography } from "antd";
import useDoorprizeWebsocket from "../../hooks/useDoorprizeWebsocket";
import useGet from "../../hooks/useGet";

const RandomizerView = () => {
  const { number, isRandomizing, isDisconnected } = useDoorprizeWebsocket();
  const [maxNumber, setMaxNumber] = useState(150);
  const [dummyRandom, setDummyRandom] = useState<string>();
  const { data: items } = useGet(`${SERVER_HOST}/items`);

  const fetchMax = async () => {
    const res = await axios.get(`${SERVER_HOST}/max`);
    setMaxNumber(res.data);
  };

  useEffect(() => {
    fetchMax();
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRandomizing) {
      interval = setInterval(() => {
        setDummyRandom(Math.round(Math.random() * maxNumber).toString());
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [maxNumber, isRandomizing]);

  if (isRandomizing) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        {dummyRandom && (
          <Typography.Title
            style={{ margin: 0, fontSize: "200px", color: "#FFA100" }}
          >
            {items[dummyRandom]}
          </Typography.Title>
        )}
      </div>
    );
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {number && (
        <Typography.Title
          style={{ margin: 0, fontSize: "200px", color: "#FFA100" }}
        >
          {isDisconnected && "Error"}
          {items[number]}
        </Typography.Title>
      )}
    </div>
  );
};

export default RandomizerView;
