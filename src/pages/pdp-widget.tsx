import { useState } from "react";
import {
  Layout,
  Card,
  Button,
  Row,
  Col,
  Image,
  Rate,
  Typography,
  Space,
} from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import "antd/dist/reset.css";
import { PriceSensitiveWidget } from "../components/price-sensitive-widget";
import { HighIntentWidget } from "../components/high-intent-widget";
import { JustBrowsingWidget } from "../components/just-browsing-widget";

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

export default function PDPWidgetPreviewPage() {
  const [selectedIntent, setSelectedIntent] = useState("high-intent");

  return (
    <Content style={{ padding: 32 }}>
      <Title level={2}>PDP Widget Preview</Title>
      <Row gutter={24}>
        <Col xs={24} md={16}>
          <Card>
            <Row gutter={24}>
              <Col xs={24} md={12}>
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Product"
                  width={400}
                  height={400}
                  preview={false}
                />
                <Row gutter={8} style={{ marginTop: 8 }}>
                  {[...Array(4)].map((_, i) => (
                    <Col span={6} key={i}>
                      <Image
                        src="/placeholder.svg?height=80&width=80"
                        alt="Product thumbnail"
                        width={80}
                        height={80}
                        preview={false}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col xs={24} md={12}>
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: "100%" }}
                >
                  <div>
                    <Title level={3}>Premium Wireless Headphones</Title>
                    <Space>
                      <Rate defaultValue={4} disabled />
                      <Text type="secondary">4.0 (128 reviews)</Text>
                    </Space>
                  </div>
                  <div>
                    <Space>
                      <Title level={2} style={{ margin: 0 }}>
                        ₹2,999
                      </Title>
                      <Text delete type="secondary">
                        ₹4,999
                      </Text>
                      <Text type="success">40% off</Text>
                    </Space>
                    <div>
                      <Text type="secondary">Inclusive of all taxes</Text>
                    </div>
                  </div>
                  {selectedIntent === "price-sensitive" && (
                    <PriceSensitiveWidget />
                  )}
                  {selectedIntent === "high-intent" && <HighIntentWidget />}
                  {selectedIntent === "just-browsing" && <JustBrowsingWidget />}
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Button
                      type="primary"
                      icon={<ShoppingCartOutlined />}
                      block
                    >
                      {/* <PriceSensitiveWidget /> */}
                      Add to Cart
                    </Button>
                    <Button icon={<HeartOutlined />} block>
                      Add to Wishlist
                    </Button>
                  </Space>
                  <div>
                    <Title level={4}>Product Details</Title>
                    <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                      <li>Bluetooth 5.0 connectivity</li>
                      <li>Active noise cancellation</li>
                      <li>40 hours battery life</li>
                      <li>Quick charge - 5 min charge for 2 hours playback</li>
                      <li>Premium sound quality with deep bass</li>
                    </ul>
                  </div>
                </Space>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <div>
                <Title level={4}>Widget Preview Controls</Title>
                <Text type="secondary">
                  Select the user intent type to preview different widgets
                </Text>
              </div>
              <Space direction="vertical" style={{ width: "100%" }}>
                {["high-intent", "price-sensitive", "just-browsing"].map(
                  (intent) => (
                    <Button
                      key={intent}
                      type={selectedIntent === intent ? "primary" : "default"}
                      block
                      onClick={() => setSelectedIntent(intent)}
                    >
                      {intent
                        .split("-")
                        .map(
                          (word) => word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ")}
                    </Button>
                  )
                )}
              </Space>
              <Card type="inner">
                <Title level={5}>
                  Current Intent:{" "}
                  {selectedIntent
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
                </Title>
                <Paragraph>
                  {selectedIntent === "high-intent" &&
                    "This user has shown strong purchase signals. The widget shows urgency and payment options to encourage immediate purchase."}
                  {selectedIntent === "price-sensitive" &&
                    "This user is concerned about price. The widget shows personalized discounts to incentivize conversion."}
                  {selectedIntent === "just-browsing" &&
                    "This user is casually browsing. The widget shows social proof to build trust and interest."}
                </Paragraph>
              </Card>
              <div>
                <Title level={5}>Widget Settings</Title>
                <Text type="secondary">
                  Configure how the widget appears on the product page
                </Text>
                <Space
                  direction="vertical"
                  style={{ width: "100%", marginTop: 16 }}
                >
                  <Button block>Edit Widget Design</Button>
                  <Button block>Edit Widget Content</Button>
                  <Button block>Edit Widget Placement</Button>
                </Space>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </Content>
  );
}
