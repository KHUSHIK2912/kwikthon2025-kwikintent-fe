import { Card, Avatar, Space, Typography, Rate, List } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Text } = Typography;

export function JustBrowsingWidget() {
  // Example avatars (replace with real user data if available)
  const avatars = [
    { alt: "User 1", fallback: "U1" },
    { alt: "User 2", fallback: "U2" },
    { alt: "User 3", fallback: "U3" },
  ];

  const reviews = [
    {
      rating: 5,
      title: "Amazing sound quality!",
      text:
        "These headphones have incredible sound quality and the noise cancellation is top-notch. Highly recommend!",
    },
    {
      rating: 4,
      title: "Great battery life",
      text: "The battery lasts forever! I can go days without charging them.",
    },
  ];

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <Card
        style={{ borderColor: "#bfdbfe", background: "#eff6ff" }}
        bodyStyle={{ padding: 16 }}
      >
        <Space align="start">
          <UserOutlined style={{ color: "#3b82f6", fontSize: 20, marginTop: 4 }} />
          <div>
            <Text strong style={{ color: "#1d4ed8" }}>
              Popular Choice!
            </Text>
            <div>
              <Text type="secondary" style={{ color: "#2563eb" }}>
                120+ people purchased this item in the last 24 hours!
              </Text>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
              <Avatar.Group maxCount={3} maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
                {avatars.map((a, i) => (
                  <Avatar
                    key={i}
                    src="/placeholder.svg?height=24&width=24"
                    alt={a.alt}
                    style={{ border: "2px solid #fff" }}
                  >
                    {a.fallback}
                  </Avatar>
                ))}
              </Avatar.Group>
              <span style={{ fontSize: 12, color: "#2563eb" }}>and many more!</span>
            </div>
          </div>
        </Space>
      </Card>

      <Card>
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Text strong>Customer Reviews</Text>
          <List
            dataSource={reviews}
            renderItem={(review, idx) => (
              <List.Item key={idx} style={{ flexDirection: "column", alignItems: "flex-start" }}>
                <Space size="small">
                  <Rate disabled defaultValue={review.rating} count={5} style={{ fontSize: 14 }} />
                  <span style={{ fontSize: 12, fontWeight: 500 }}>Verified Purchase</span>
                </Space>
                <Text style={{ fontWeight: 500 }}>{review.title}</Text>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  {review.text}
                </Text>
              </List.Item>
            )}
          />
        </Space>
      </Card>
    </Space>
  );
}
