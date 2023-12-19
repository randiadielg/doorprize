import { Alert, Button, Typography } from "antd";
import { SERVER_HOST } from "../../constants";
import useDoorprizeWebsocket from "../../hooks/useDoorprizeWebsocket";
import useGet from "../../hooks/useGet";

const Remote = () => {
  const { data: items } = useGet(`${SERVER_HOST}/items`);
  const { number, isRandomizing, isDisconnected } = useDoorprizeWebsocket();

  const handleButtonClick = async () => {
    if (isRandomizing) {
      await fetch(`${SERVER_HOST}/stop`);
      return;
    }
    await fetch(`${SERVER_HOST}/trigger`);
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
        {number && (
          <Typography.Title>
            {isRandomizing ? "Shuffling..." : String(items[number])}
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
      </div>
    </>
  );
};

export default Remote;
