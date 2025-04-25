import { useState } from "react"
import {
  Card,
  Input,
  Radio,
  Select,
  Switch,
  Tabs,
  Typography,
  Space,
  Form,
} from "antd"
import { ClockCircleOutlined, PercentageOutlined, UserOutlined } from "@ant-design/icons"
const { TabPane } = Tabs
const { Option } = Select
const { TextArea } = Input
const { Text, Title } = Typography

export function WidgetConfig() {
  const [highIntentWidgetType, setHighIntentWidgetType] = useState("urgency")
  const [priceSensitiveWidgetType, setPriceSensitiveWidgetType] = useState("discount")
  const [justBrowsingWidgetType, setJustBrowsingWidgetType] = useState("social-proof")

  return (
    <Tabs defaultActiveKey="high-intent">
      <TabPane tab="High Intent" key="high-intent">
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Card title="Widget Type">
            <Radio.Group
              value={highIntentWidgetType}
              onChange={e => setHighIntentWidgetType(e.target.value)}
              style={{ width: "100%" }}
            >
              <Space direction="horizontal" style={{ width: "100%", justifyContent: "space-between" }}>
                <Radio value="urgency">
                  <Space direction="vertical" align="center">
                    <ClockCircleOutlined style={{ fontSize: 24 }} />
                    <Text>Urgency</Text>
                    <Text type="secondary" style={{ fontSize: 12 }}>Limited time offers</Text>
                  </Space>
                </Radio>
                <Radio value="payment-options">
                  <Space direction="vertical" align="center">
                    <PercentageOutlined style={{ fontSize: 24 }} />
                    <Text>Payment Options</Text>
                    <Text type="secondary" style={{ fontSize: 12 }}>Prepaid incentives</Text>
                  </Space>
                </Radio>
                <Radio value="custom">
                  <Space direction="vertical" align="center">
                    <UserOutlined style={{ fontSize: 24 }} />
                    <Text>Custom</Text>
                    <Text type="secondary" style={{ fontSize: 12 }}>Custom widget</Text>
                  </Space>
                </Radio>
              </Space>
            </Radio.Group>
          </Card>

          {highIntentWidgetType === "urgency" && (
            <Card title="Urgency Widget Settings">
              <Form layout="vertical">
                <Form.Item label="Urgency Message">
                  <Input defaultValue="Limited time offer! Only 5 left in stock." />
                </Form.Item>
                <Form.Item label="Show Countdown Timer" valuePropName="checked">
                  <Switch defaultChecked />
                  <div>
                    <Text type="secondary" style={{ fontSize: 12 }}>
                      Display a countdown timer to create urgency
                    </Text>
                  </div>
                </Form.Item>
                <Form.Item label="Timer Duration (minutes)">
                  <Input type="number" defaultValue="15" />
                </Form.Item>
                <Form.Item label="Widget Position">
                  <Select defaultValue="below-price" style={{ width: 200 }}>
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
                  <Input defaultValue="Pay now and get 5% extra discount!" />
                </Form.Item>
                <Form.Item label="Prepaid Discount (%)">
                  <Input type="number" defaultValue="5" />
                </Form.Item>
                <Form.Item label="Highlight UPI/Cards" valuePropName="checked">
                  <Switch defaultChecked />
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
      </TabPane>

      <TabPane tab="Price Sensitive" key="price-sensitive">
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Card title="Widget Type">
            <Radio.Group
              value={priceSensitiveWidgetType}
              onChange={e => setPriceSensitiveWidgetType(e.target.value)}
              style={{ width: "100%" }}
            >
              <Space direction="horizontal" style={{ width: "100%", justifyContent: "space-between" }}>
                <Radio value="discount">
                  <Space direction="vertical" align="center">
                    <PercentageOutlined style={{ fontSize: 24 }} />
                    <Text>Discount</Text>
                    <Text type="secondary" style={{ fontSize: 12 }}>Personalized offers</Text>
                  </Space>
                </Radio>
                <Radio value="bundle">
                  <Space direction="vertical" align="center">
                    <UserOutlined style={{ fontSize: 24 }} />
                    <Text>Bundle</Text>
                    <Text type="secondary" style={{ fontSize: 12 }}>Value bundle offers</Text>
                  </Space>
                </Radio>
                <Radio value="custom">
                  <Space direction="vertical" align="center">
                    <UserOutlined style={{ fontSize: 24 }} />
                    <Text>Custom</Text>
                    <Text type="secondary" style={{ fontSize: 12 }}>Custom widget</Text>
                  </Space>
                </Radio>
              </Space>
            </Radio.Group>
          </Card>

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
        </Space>
      </TabPane>

      <TabPane tab="Just Browsing" key="just-browsing">
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Card title="Widget Type">
            <Radio.Group
              value={justBrowsingWidgetType}
              onChange={e => setJustBrowsingWidgetType(e.target.value)}
              style={{ width: "100%" }}
            >
              <Space direction="horizontal" style={{ width: "100%", justifyContent: "space-between" }}>
                <Radio value="social-proof">
                  <Space direction="vertical" align="center">
                    <UserOutlined style={{ fontSize: 24 }} />
                    <Text>Social Proof</Text>
                    <Text type="secondary" style={{ fontSize: 12 }}>Show popularity</Text>
                  </Space>
                </Radio>
                <Radio value="information">
                  <Space direction="vertical" align="center">
                    <ClockCircleOutlined style={{ fontSize: 24 }} />
                    <Text>Information</Text>
                    <Text type="secondary" style={{ fontSize: 12 }}>Product highlights</Text>
                  </Space>
                </Radio>
                <Radio value="custom">
                  <Space direction="vertical" align="center">
                    <UserOutlined style={{ fontSize: 24 }} />
                    <Text>Custom</Text>
                    <Text type="secondary" style={{ fontSize: 12 }}>Custom widget</Text>
                  </Space>
                </Radio>
              </Space>
            </Radio.Group>
          </Card>

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
        </Space>
      </TabPane>
    </Tabs>
  )
}
