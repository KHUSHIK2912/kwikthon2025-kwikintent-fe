import { useState, useEffect } from "react";
import {
  Card,
  Input,
  Radio,
  Select,
  Switch,
  Typography,
  Space,
  Form,
  Spin,
} from "antd";
import {
  ClockCircleOutlined,
  PercentageOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { getWidgetConfigs } from "../store/api";
const { Option } = Select;
const { TextArea } = Input;
const { Text } = Typography;

const widgetOptions = [
  {
    key: "urgency",
    icon: <ClockCircleOutlined style={{ fontSize: 24 }} />,
    title: "Urgency",
    description: "Limited time offers",
  },
  {
    key: "payment-options",
    icon: <PercentageOutlined style={{ fontSize: 24 }} />,
    title: "Payment Options",
    description: "Prepaid incentives",
  },
  {
    key: "custom",
    icon: <UserOutlined style={{ fontSize: 24 }} />,
    title: "Custom",
    description: "Custom widget",
  },
];

type HighIntentWidgetConfigProps = {
  widgetConfigs: any[];
  loading: boolean;
};

export function HighIntentWidgetConfig({ widgetConfigs, loading }: HighIntentWidgetConfigProps) {
  const [highIntentWidgetType, setHighIntentWidgetType] = useState("urgency");
  const [widgetConfig, setWidgetConfig] = useState<any>(null);

  useEffect(() => {
    async function fetchConfig() {
      try {
        const highIntentConfig = Array.isArray(widgetConfigs)
          ? widgetConfigs.find((c) => c.intentType === "high-intent")
          : null;
        setWidgetConfig(highIntentConfig);
        if (highIntentConfig?.widgetType) {
          setHighIntentWidgetType(highIntentConfig.widgetType);
        }
      } catch (e) {
        setWidgetConfig(null);
      }
    }
    fetchConfig();
  }, [widgetConfigs]);

  if (loading) {
    return <Spin />;
  }

  const content = widgetConfig?.content || {};
  const settings = widgetConfig?.settings || {};
  const styling = widgetConfig?.styling || {};

  console.log(content)

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
        {widgetOptions.map((option) => (
          <Card
            key={option.key}
            hoverable
            onClick={() => setHighIntentWidgetType(option.key)}
            style={{
              width: 418,
              border:
                highIntentWidgetType === option.key
                  ? "2px solid #1677ff"
                  : "1px solid #f0f0f0",
              boxShadow:
                highIntentWidgetType === option.key
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
            <div style={{ color: "#888", fontSize: 12 }}>
              {option.description}
            </div>
          </Card>
        ))}
      </Space>

      {highIntentWidgetType === "urgency" && (
        <Card title="Urgency Widget Settings">
          <Form layout="vertical">
            <Form.Item label="Urgency Message">
              <Input defaultValue={content.title || "Limited time offer! Only 5 left in stock."} />
            </Form.Item>
            <Form.Item label="Urgency Subtext">
              <Input defaultValue={content.message || "Only 5 left in stock."} />
            </Form.Item>
            <Form.Item label="Show Countdown Timer" valuePropName="checked">
              <Switch defaultChecked={settings.showCountdown ?? true} />
              <div>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  Display a countdown timer to create urgency
                </Text>
              </div>
            </Form.Item>
            <Form.Item label="Timer Duration (minutes)">
              <Input
                type="number"
                defaultValue={settings.countdownDuration ? settings.countdownDuration / 60 : 15}
              />
            </Form.Item>
            <Form.Item label="Widget Position">
              <Select defaultValue={styling.position || "below-price"} style={{ width: 200 }}>
                <Option value="below-price">Below Price</Option>
                <Option value="above-add-to-cart">Above Add to Cart</Option>
                <Option value="floating">Floating Notification</Option>
              </Select>
            </Form.Item>
          </Form>
        </Card>
      )}

      {highIntentWidgetType === "payment-options" && (
        <Card title="Payment Options Widget Settings">
          <Form layout="vertical">
            <Form.Item label="Prepaid Incentive Message">
              <Input defaultValue={content.message || "Pay now and get 5% extra discount!"} />
            </Form.Item>
            <Form.Item label="Prepaid Discount (%)">
              <Input type="number" defaultValue={settings.discountPercentage || 5} />
            </Form.Item>
            <Form.Item label="Highlight UPI/Cards" valuePropName="checked">
              <Switch defaultChecked={settings.highlightUPIAndCards ?? true} />
              <div>
                <Text type="secondary" style={{ fontSize: 12 }}>
                  Highlight UPI and card payment options
                </Text>
              </div>
            </Form.Item>
          </Form>
        </Card>
      )}

      {highIntentWidgetType === "custom" && (
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
  );
}
