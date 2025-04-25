import { Avatar, List, Space, Tag, Typography } from "antd";

const { Text } = Typography;

export function RecentDetections() {
  const detections = [
    {
      id: 1,
      user: "User 12458",
      intent: "High Intent",
      action: "Showed urgency widget",
      time: "2 minutes ago",
      product: "Premium Headphones",
      converted: true,
    },
    {
      id: 2,
      user: "User 12459",
      intent: "Price Sensitive",
      action: "Showed discount widget",
      time: "5 minutes ago",
      product: "Wireless Earbuds",
      converted: true,
    },
    {
      id: 3,
      user: "User 12460",
      intent: "Just Browsing",
      action: "Showed social proof",
      time: "12 minutes ago",
      product: "Smart Watch",
      converted: false,
    },
    {
      id: 4,
      user: "User 12461",
      intent: "High Intent",
      action: "Showed urgency widget",
      time: "18 minutes ago",
      product: "Fitness Tracker",
      converted: true,
    },
    {
      id: 5,
      user: "User 12462",
      intent: "Price Sensitive",
      action: "Showed discount widget",
      time: "25 minutes ago",
      product: "Bluetooth Speaker",
      converted: false,
    },
  ];

  // Color mapping for intent types
  const intentColor = (intent: string) => {
    if (intent === "High Intent") return "green";
    if (intent === "Price Sensitive") return "orange";
    return "blue";
  };

  return (
    <List
      itemLayout="horizontal"
      dataSource={detections}
      renderItem={detection => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`/placeholder.svg?height=32&width=32`}
                style={{ backgroundColor: "#f0f0f0", color: "#555" }}
              >
                {detection.user.substring(0, 2)}
              </Avatar>
            }
            title={
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Text strong>{detection.user}</Text>
                <Text>{detection.action}</Text>
              </div>
            }
            description={
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Space>
                  <Tag
                    color={intentColor(detection.intent)}
                  >
                    {detection.intent}
                  </Tag>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    {detection.product}
                  </Text>
                </Space>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    {detection.time}
                  </Text>
                  {detection.converted ? (
                    <Tag color="green">Converted</Tag>
                  ) : (
                    <Tag color="default">Pending</Tag>
                  )}
                </div>
              </div>
            }
          />
        </List.Item>
      )}
    />
  );
}
