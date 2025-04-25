import { useState } from "react"
import {
  Card,
  Input,
  Switch,
  Typography,
  Space,
  Form,
} from "antd"
import { ClockCircleOutlined, UserOutlined } from "@ant-design/icons"
import TextArea from "antd/es/input/TextArea"

const { Text } = Typography

const widgetOptions = [
  {
    key: "social-proof",
    icon: <UserOutlined style={{ fontSize: 24 }} />,
    title: "Social Proof",
    description: "Show popularity",
  },
  {
    key: "information",
    icon: <ClockCircleOutlined style={{ fontSize: 24 }} />,
    title: "Information",
    description: "Product highlights",
  },
  {
    key: "custom",
    icon: <UserOutlined style={{ fontSize: 24 }} />,
    title: "Custom",
    description: "Custom widget",
  },
]

export function JustBrowsingWidgetConfig() {
  const [justBrowsingWidgetType, setJustBrowsingWidgetType] = useState("social-proof")

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
            onClick={() => setJustBrowsingWidgetType(option.key)}
            style={{
              width: 418,
              border:
                justBrowsingWidgetType === option.key
                  ? "2px solid #1677ff"
                  : "1px solid #f0f0f0",
              boxShadow:
                justBrowsingWidgetType === option.key
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

      {justBrowsingWidgetType === "social-proof" && (
        <Card title="Social Proof Widget Settings">
          <Form layout="vertical">
            <Form.Item label="Social Proof Message">
              <Input defaultValue="120+ people purchased this item in the last 24 hours!" />
            </Form.Item>
            <Form.Item label="Show Star Rating" valuePropName="checked">
              <Switch defaultChecked />
              <div>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  Display product rating with stars
                </Text>
              </div>
            </Form.Item>
            <Form.Item label="Show Review Count" valuePropName="checked">
              <Switch defaultChecked />
              <div>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  Display number of reviews
                </Text>
              </div>
            </Form.Item>
          </Form>
        </Card>
      )}
      {justBrowsingWidgetType === "custom" && (
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
      {/* You can add similar settings cards for "information" and "custom" if needed */}
    </Space>
  )
}
