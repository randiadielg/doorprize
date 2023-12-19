import { useState, useEffect } from "react";
import { w3cwebsocket } from "websocket";
import { DOORPRIZE_WS_HOST } from "../constants";

let client = new w3cwebsocket(DOORPRIZE_WS_HOST);

interface UseDoorprizeWebsocketProps {
  onStop?: () => void;
  onGetNumber?: () => void;
}

const useDoorprizeWebsocket = (props?: UseDoorprizeWebsocketProps) => {
  const { onStop = () => {}, onGetNumber = () => {} } = props || {};
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [number, setNumber] = useState<number>();
  const [isDisconnected, setIsDisconnected] = useState(true);

  useEffect(() => {
    client.onopen = () => {
      setIsDisconnected(false);
      console.log("WebSocket Client Connected");
    };
    client.onmessage = (message) => {
      const stringMessage = message.data.toString();
      if (stringMessage === "stop") {
        setIsRandomizing(false);
        onStop();
      } else {
        setNumber(parseInt(stringMessage));
        setIsRandomizing(true);
        onGetNumber();
      }
    };
    client.onclose = () => {
      setIsDisconnected(true);
    };

    client.onerror = (err) => {
      console.error(
        "Socket encountered error: ",
        err.message,
        "Closing socket"
      );
      client.close();
    };
  }, [onStop, onGetNumber]);

  return { isRandomizing, number, isDisconnected };
};

export default useDoorprizeWebsocket;
