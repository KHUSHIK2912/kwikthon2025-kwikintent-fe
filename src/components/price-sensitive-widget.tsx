import { Card, Badge, Button, Input, Space, Typography, Row, Col } from "antd";
import { PercentageOutlined, TagsOutlined } from "@ant-design/icons";

const { Text, Paragraph } = Typography;

export function PriceSensitiveWidget() {
  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <Card
        style={{ borderColor: "#fed7aa", background: "#fff7ed" }}
        bodyStyle={{ padding: 16 }}
      >
        <Space align="start">
          <PercentageOutlined style={{ color: "#f97316", fontSize: 20, marginTop: 4 }} />
          <div>
            <Space align="center" style={{ marginBottom: 4 }}>
              <Text strong style={{ color: "#c2410c" }}>
                Special offer just for you!
              </Text>
              <Badge color="#f97316" text="10% OFF" />
            </Space>
            <Paragraph style={{ color: "#ea580c", margin: 0 }}>
              Use this exclusive discount code at checkout:
            </Paragraph>
            <Space>
              <Input value="SAVE10" readOnly style={{ width: 100, color: "#c2410c", fontWeight: 500 }} />
              <Button
                type="default"
                size="small"
                style={{
                  background: "#ffedd5",
                  color: "#c2410c",
                  borderColor: "#fed7aa",
                }}
                onClick={() => {
                  navigator.clipboard.writeText("SAVE10");
                }}
              >
                Copy
              </Button>
            </Space>
            <Paragraph type="secondary" style={{ fontSize: 12, color: "#ea580c", margin: 0 }}>
              *Limited time offer. One-time use only.
            </Paragraph>
          </div>
        </Space>
      </Card>

      <Card>
        <Space align="start">
          <TagsOutlined style={{ color: "#3b82f6", fontSize: 20, marginTop: 4 }} />
          <div>
            <Text strong>Bundle & Save More!</Text>
            <Paragraph type="secondary" style={{ margin: 0 }}>
              Add these items to your cart and save an additional 15%:
            </Paragraph>
            <Row gutter={8} style={{ marginTop: 8 }}>
              <Col span={12}>
                <Space align="center" style={{ width: "100%" }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 6,
                      background: "#f1f5f9",
                    }}
                  />
                  <div style={{ fontSize: 12 }}>
                    <Text strong>Carrying Case</Text>
                    <br />
                    <Text type="secondary">₹499</Text>
                  </div>
                </Space>
              </Col>
              <Col span={12}>
                <Space align="center" style={{ width: "100%" }}>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 6,
                      background: "#f1f5f9",
                    }}
                  />
                  <div style={{ fontSize: 12 }}>
                    <Text strong>Extra Ear Pads</Text>
                    <br />
                    <Text type="secondary">₹299</Text>
                  </div>
                </Space>
              </Col>
            </Row>
          </div>
        </Space>
      </Card>
    </Space>
  );
}
