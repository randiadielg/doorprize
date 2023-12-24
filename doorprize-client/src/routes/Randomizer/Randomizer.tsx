import { useEffect, useState } from "react";
import axios from "axios";
import { SERVER_HOST } from "../../constants";
import { Card, List, Popover, Typography } from "antd";
import useDoorprizeWebsocket from "../../hooks/useDoorprizeWebsocket";
import useGet from "../../hooks/useGet";

const RandomizerView = () => {
  const { persons, isRandomizing, isDisconnected } = useDoorprizeWebsocket();
  const [maxNumber, setMaxNumber] = useState(150);
  const [dummyRandom, setDummyRandom] = useState<number>();
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
        setDummyRandom(Math.round(Math.random() * maxNumber));
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
          <List
            grid={{ gutter: 16, column: 3 }}
            dataSource={persons}
            renderItem={(person, index) => (
              <List.Item>
                <Card style={{ width: "400px" }}>
                  <Typography.Text
                    style={{
                      fontSize: 50,
                      fontWeight: "bolder",
                      display: "block",
                      textAlign: "center",
                      width: "100%",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {
                      items[
                        dummyRandom > items.length / 2
                          ? dummyRandom - index
                          : dummyRandom + index
                      ]
                    }
                  </Typography.Text>
                </Card>
              </List.Item>
            )}
          />
        )}
        {/* {dummyRandom && (
          <Typography.Title
            style={{ margin: 0, fontSize: "200px", color: "#FFA100" }}
          >
            {items[dummyRandom]}
          </Typography.Title>
        )} */}
      </div>
    );
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {isDisconnected && "Error"}
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={persons}
        renderItem={(person) => (
          <List.Item>
            <Card style={{ width: "400px" }}>
              <Popover title={person.name}>
                <Typography.Text
                  style={{
                    fontSize: 45,
                    fontWeight: "bolder",
                    display: "block",
                    textAlign: "center",
                    width: "100%",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {person.name}
                </Typography.Text>
              </Popover>
            </Card>
          </List.Item>
        )}
      />
      {/* {number && (
        <Typography.Title
          style={{ margin: 0, fontSize: "200px", color: "#FFA100" }}
        >
          {isDisconnected && "Error"}
          {items[number]}
        </Typography.Title>
      )} */}
    </div>
  );
};

export default RandomizerView;
