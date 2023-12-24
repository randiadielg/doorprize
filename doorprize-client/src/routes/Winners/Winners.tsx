import { SERVER_HOST } from "../../constants";
import { Alert, Card, Divider, Space, Spin, Typography } from "antd";
import useGet from "../../hooks/useGet";
import { useMemo } from "react";

import axios from "axios";
import useDoorprizeWebsocket from "../../hooks/useDoorprizeWebsocket";

const WinnersView = () => {
  const { data, refetch } = useGet(`${SERVER_HOST}/winners`);
  const { data: maxData } = useGet(`${SERVER_HOST}/max`);
  const { data: items } = useGet(`${SERVER_HOST}/items`);
  const { persons, isRandomizing, isDisconnected } = useDoorprizeWebsocket({
    onStop: refetch,
  });

  const maxIdx = maxData - 1;

  const cancelToggle = async (num: number) => {
    await axios.post(`${SERVER_HOST}/cancel`, { number: num });
    await refetch();
  };

  const emptyArray = useMemo(() => {
    var arr = [];
    for (var i = 0; i <= maxIdx; i++) {
      arr.push("");
    }
    return arr;
  }, [maxIdx]);

  return (
    <>
      {isDisconnected && (
        <Alert message="Connection Disconnected, Please Refresh" type="error" />
      )}
      <Space size={[8, 16]} wrap>
        {emptyArray?.map((_, idx) => (
          <Card
            onClick={() => {
              cancelToggle(idx);
            }}
            size="small"
            style={{
              cursor: "pointer",
              animation:
                Boolean(persons?.find((person) => idx === person.index)) &&
                !isRandomizing &&
                !data[idx]?.isCancelled
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
              {items[idx]}
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
