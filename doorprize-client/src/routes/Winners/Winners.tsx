import { SERVER_HOST } from "../../constants";
import { Alert, Card, Divider, Space, Spin, Typography } from "antd";
import useGet from "../../hooks/useGet";
import { useMemo } from "react";

import axios from "axios";
import useDoorprizeWebsocket from "../../hooks/useDoorprizeWebsocket";

const WinnersView = () => {
  const { data, refetch } = useGet(`${SERVER_HOST}/winners`);
  const { data: max } = useGet(`${SERVER_HOST}/max`);
  const { number, isRandomizing, isDisconnected } = useDoorprizeWebsocket({
    onStop: refetch,
  });

  const cancelToggle = async (num: number) => {
    await axios.post(`${SERVER_HOST}/cancel`, { number: num });
    await refetch();
  };

  const emptyArray = useMemo(() => {
    var arr = [];
    for (var i = 0; i <= max; i++) {
      arr.push("");
    }
    return arr;
  }, [max]);

  return (
    <>
      {isDisconnected && (
        <Alert message="Connection Disconnected, Please Refresh" type="error" />
      )}
      <Space size={[8, 16]} wrap>
        {emptyArray.map((_, idx) => (
          <Card
            onClick={() => {
              cancelToggle(idx);
            }}
            size="small"
            style={{
              cursor: "pointer",
              animation:
                idx === number && !isRandomizing && !data[idx]?.isCancelled
                  ? "success-blink 2s infinite"
                  : "",
              transition: "1s",
              minWidth: "54px",
              background: data[idx]?.isCancelled
                ? "#FFCCCB"
                : data[idx]?.isWin
                ? "#abf7b1"
                : "#F9F9F9",
            }}
          >
            <Typography.Title
              style={{ margin: "0", textAlign: "center" }}
              level={5}
            >
              {idx}
            </Typography.Title>
          </Card>
        ))}
      </Space>

      {isRandomizing && (
        <>
          <Divider />
          <Card size="small">
            <Space>
              <Spin />
              Shuffling
            </Space>
          </Card>
        </>
      )}
    </>
  );
};

export default WinnersView;
