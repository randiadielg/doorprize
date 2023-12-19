import { SERVER_HOST } from "../../constants";
import { Alert, Card, Space, Typography } from "antd";
import useGet from "../../hooks/useGet";

import useDoorprizeWebsocket from "../../hooks/useDoorprizeWebsocket";

const LeaderboardView = () => {
  const { data, refetch } = useGet(`${SERVER_HOST}/winners`);
  const { data: arrayOfWinners, refetch: arrayRefetch } = useGet(
    `${SERVER_HOST}/winners/array`
  );

  const { isDisconnected } = useDoorprizeWebsocket({
    onStop: () => {
      refetch();
      arrayRefetch();
    },
  });
  return (
    <>
      {isDisconnected && (
        <Alert message="Connection Disconnected, Please Refresh" type="error" />
      )}
      <Space size={[8, 16]} wrap>
        {(arrayOfWinners || []).map((number: number) => {
          if (!data[number]?.isCancelled && data[number]?.isWin) {
            return (
              <Card style={{ minWidth: "120px", background: "#FFFDD0" }}>
                <Typography.Title
                  style={{ margin: "0", textAlign: "center" }}
                  level={1}
                >
                  {number}
                </Typography.Title>
              </Card>
            );
          }
          return null;
        })}
      </Space>
    </>
  );
};

export default LeaderboardView;
