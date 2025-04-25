import { useState } from "react"
import {
  Card,
  Input,
  Radio,
  Select,
  Switch,
  Typography,
  Space,
  Form,
} from "antd"
import { PercentageOutlined, UserOutlined } from "@ant-design/icons"
import TextArea from "antd/es/input/TextArea"
const { Option } = Select
const { Text } = Typography

const widgetOptions = [
  {
    key: "discount",
    icon: <PercentageOutlined style={{ fontSize: 24 }} />,
    title: "Discount",
    description: "Personalized offers",
  },
  {
    key: "bundle",
    icon: <UserOutlined style={{ fontSize: 24 }} />,
    title: "Bundle",
    description: "Value bundle offers",
  },
  {
    key: "custom",
    icon: <UserOutlined style={{ fontSize: 24 }} />,
    title: "Custom",
    description: "Custom widget",
  },
];

export function PriceSensitiveWidgetConfig() {
  const [priceSensitiveWidgetType, setPriceSensitiveWidgetType] = useState("discount")

  return (
    <Space direction="vertical" size="large" style={{ width: "100%" }}>
      <Space
        direction="horizontal"
        size={12}
        style={{
          width: "100%",
          justifyContent: "center",
          gap: 50,
        }}
      >
        {widgetOptions.map(option => (
          <Card
            key={option.key}
            hoverable
            onClick={() => setPriceSensitiveWidgetType(option.key)}
            style={{
              width: 418,
              border:
                priceSensitiveWidgetType === option.key
                  ? "2px solid #1677ff"
                  : "1px solid #f0f0f0",
              boxShadow:
                priceSensitiveWidgetType === option.key
                  ? "0 0 0 2px #e6f4ff"
                  : undefined,
              cursor: "pointer",
              textAlign: "center",
              transition: "border 0.2s, box-shadow 0.2s",
            }}
            bodyStyle={{ padding: 16 }}
          >
            {option.icon}
            <div style={{ marginTop: 8, fontWeight: 500 }}>{option.title}</div>
            <div style={{ color: "#888", fontSize: 12 }}>{option.description}</div>
          </Card>
        ))}
      </Space>

      {priceSensitiveWidgetType === "discount" && (
        <Card title="Discount Widget Settings">
          <Form layout="vertical">
            <Form.Item label="Discount Message">
              <Input defaultValue="Special offer just for you! Use code SAVE10 for 10% off." />
            </Form.Item>
            <Form.Item label="Discount Type">
              <Select defaultValue="percentage" style={{ width: 200 }}>
                <Option value="percentage">Percentage</Option>
                <Option value="fixed">Fixed Amount</Option>
                <Option value="free-shipping">Free Shipping</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Discount Value">
              <Input type="number" defaultValue="10" />
            </Form.Item>
            <Form.Item label="One-time Use Only" valuePropName="checked">
              <Switch defaultChecked />
              <div>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  Limit discount to one-time use per user
                </Text>
              </div>
            </Form.Item>
          </Form>
        </Card>
      )}

{priceSensitiveWidgetType === "custom" && (
        <Card title="Custom Widget Settings">
          <Form layout="vertical">
            <Form.Item label="Custom Widget HTML">
              <TextArea
                rows={6}
                defaultValue={`<div class="kwik-intent-widget">
  <h3>Special Offer!</h3>
  <p>This product is perfect for you based on your preferences.</p>
  <button>Add to Cart Now</button>
</div>`}
              />
            </Form.Item>
            <Form.Item label="Custom CSS">
              <TextArea
                rows={6}
                defaultValue={`.kwik-intent-widget {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  padding: 15px;
  margin: 10px 0;
}`}
              />
            </Form.Item>
          </Form>
        </Card>
      )}
    </Space>
  )
}
