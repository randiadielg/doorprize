import { Alert, Button, InputNumber, Typography } from "antd";
import { SERVER_HOST } from "../../constants";
import useDoorprizeWebsocket from "../../hooks/useDoorprizeWebsocket";
import { useState } from "react";

const Remote = () => {
  const { persons, isRandomizing, isDisconnected } = useDoorprizeWebsocket();
  const [count, setCount] = useState<number | null>(1);

  const handleButtonClick = async () => {
    if (isRandomizing) {
      await fetch(`${SERVER_HOST}/stop`);
      return;
    }
    await fetch(`${SERVER_HOST}/trigger?count=${count || 1}`);
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {persons && (
          <Typography.Title>
            {isRandomizing
              ? "Shuffling..."
              : persons.map((person) => <>{person.name}, </>)}
          </Typography.Title>
        )}
        {isDisconnected && (
          <Alert
            message="Connection Disconnected, Please Refresh"
            type="error"
          />
        )}
        <Button
          onClick={handleButtonClick}
          type="primary"
          shape="round"
          size="large"
        >
          {!isRandomizing ? <>Randomize!</> : <>Stop</>}
        </Button>
        <InputNumber value={count} onChange={setCount} />
      </div>
    </>
  );
};

export default Remote;
