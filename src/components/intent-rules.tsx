import { useState } from "react"
import {
  Card,
  Input,
  Slider,
  Switch,
  Tabs,
  Typography,
  Collapse,
  Space,
} from "antd"

const { TabPane } = Tabs
const { Panel } = Collapse
const { Text } = Typography

const defaultValues = [
    {
      "performance": {
        "totalDetections": 0,
        "accurateDetections": 0,
        "falsePositives": 0,
        "falseNegatives": 0,
        "lastUpdated": "2025-04-25T14:47:26.728Z"
      },
      "_id": "680ba07eb0f3532d513399c3",
      "merchant": "680ba07eb0f3532d513399b6",
      "intentType": "high-intent",
      "threshold": 70,
      "behavioralSignals": [
        {
          "name": "timeOnPage",
          "description": "User spends significant time on product page",
          "enabled": true,
          "weight": 3,
          "threshold": 120,
          "_id": "680ba07eb0f3532d513399c4"
        },
        {
          "name": "scrollDepth",
          "description": "User scrolls to product details and reviews",
          "enabled": true,
          "weight": 2,
          "threshold": 80,
          "_id": "680ba07eb0f3532d513399c5"
        },
        {
          "name": "imageViews",
          "description": "User views multiple product images",
          "enabled": true,
          "weight": 2,
          "threshold": 3,
          "_id": "680ba07eb0f3532d513399c6"
        },
        {
          "name": "addToCartHover",
          "description": "User hovers over add to cart button",
          "enabled": true,
          "weight": 3,
          "threshold": 1,
          "_id": "680ba07eb0f3532d513399c7"
        },
        {
          "name": "returnVisitor",
          "description": "User has visited this product before",
          "enabled": true,
          "weight": 2,
          "threshold": 1,
          "_id": "680ba07eb0f3532d513399c8"
        }
      ],
      "historicalFactors": [
        {
          "name": "previousPurchaseHistory",
          "description": "User has purchased similar items before",
          "enabled": true,
          "weight": 3,
          "_id": "680ba07eb0f3532d513399c9"
        },
        {
          "name": "cartAbandonmentHistory",
          "description": "User has abandoned cart in the past",
          "enabled": true,
          "weight": 2,
          "_id": "680ba07eb0f3532d513399ca"
        },
        {
          "name": "averageOrderValue",
          "description": "User's historical average order value",
          "enabled": true,
          "weight": 1,
          "_id": "680ba07eb0f3532d513399cb"
        }
      ],
      "isActive": true,
      "deviceContext": [],
      "createdAt": "2025-04-25T14:47:26.728Z",
      "updatedAt": "2025-04-25T14:47:26.728Z",
      "__v": 0
    },
    {
      "performance": {
        "totalDetections": 0,
        "accurateDetections": 0,
        "falsePositives": 0,
        "falseNegatives": 0,
        "lastUpdated": "2025-04-25T14:47:26.729Z"
      },
      "_id": "680ba07eb0f3532d513399d3",
      "merchant": "680ba07eb0f3532d513399b6",
      "intentType": "just-browsing",
      "threshold": 30,
      "behavioralSignals": [
        {
          "name": "quickPageViews",
          "description": "User views multiple products quickly",
          "enabled": true,
          "weight": 2,
          "threshold": 30,
          "_id": "680ba07eb0f3532d513399d4"
        },
        {
          "name": "limitedEngagement",
          "description": "User doesn't engage deeply with product details",
          "enabled": true,
          "weight": 3,
          "threshold": 20,
          "_id": "680ba07eb0f3532d513399d5"
        },
        {
          "name": "firstTimeVisitor",
          "description": "User is visiting the site for the first time",
          "enabled": true,
          "weight": 2,
          "threshold": 1,
          "_id": "680ba07eb0f3532d513399d6"
        }
      ],
      "historicalFactors": [],
      "isActive": true,
      "deviceContext": [],
      "createdAt": "2025-04-25T14:47:26.729Z",
      "updatedAt": "2025-04-25T14:47:26.729Z",
      "__v": 0
    },
    {
      "performance": {
        "totalDetections": 0,
        "accurateDetections": 0,
        "falsePositives": 0,
        "falseNegatives": 0,
        "lastUpdated": "2025-04-25T14:47:26.729Z"
      },
      "_id": "680ba07eb0f3532d513399cc",
      "merchant": "680ba07eb0f3532d513399b6",
      "intentType": "price-sensitive",
      "threshold": 50,
      "behavioralSignals": [
        {
          "name": "priceCheckFrequency",
          "description": "User checks price multiple times or compares with other products",
          "enabled": true,
          "weight": 3,
          "threshold": 2,
          "_id": "680ba07eb0f3532d513399cd"
        },
        {
          "name": "couponSearch",
          "description": "User searches for coupons or discount codes",
          "enabled": true,
          "weight": 3,
          "threshold": 1,
          "_id": "680ba07eb0f3532d513399ce"
        },
        {
          "name": "priceSortUsage",
          "description": "User sorts products by price (low to high)",
          "enabled": true,
          "weight": 2,
          "threshold": 1,
          "_id": "680ba07eb0f3532d513399cf"
        },
        {
          "name": "cartHesitation",
          "description": "User adds to cart but hesitates to checkout",
          "enabled": true,
          "weight": 2,
          "threshold": 1,
          "_id": "680ba07eb0f3532d513399d0"
        }
      ],
      "historicalFactors": [
        {
          "name": "discountUsageHistory",
          "description": "User has used discounts or coupons in the past",
          "enabled": true,
          "weight": 3,
          "_id": "680ba07eb0f3532d513399d1"
        },
        {
          "name": "salePurchaseHistory",
          "description": "User primarily purchases during sales",
          "enabled": true,
          "weight": 2,
          "_id": "680ba07eb0f3532d513399d2"
        }
      ],
      "isActive": true,
      "deviceContext": [],
      "createdAt": "2025-04-25T14:47:26.729Z",
      "updatedAt": "2025-04-25T14:47:26.729Z",
      "__v": 0
    }
  ]

export function IntentRulesConfig() {
  const [highIntentThreshold, setHighIntentThreshold] = useState(70)
  const [priceSensitiveThreshold, setPriceSensitiveThreshold] = useState(50)

  return (
    <Tabs defaultActiveKey="high-intent">
      <TabPane tab="High Intent" key="high-intent">
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Card title="High Intent Detection Threshold">
            <Text>Set the confidence threshold required to classify a user as high intent</Text>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 16 }}>
              <Slider
                min={0}
                max={100}
                step={1}
                value={highIntentThreshold}
                onChange={setHighIntentThreshold}
                style={{ flex: 1 }}
              />
              <span style={{ width: 48, textAlign: "right" }}>{highIntentThreshold}%</span>
            </div>
            <Text type="secondary" style={{ fontSize: 12 }}>
              The confidence threshold required to classify a user as high intent
            </Text>
          </Card>

          <Collapse accordion>
            <Panel header="Behavioral Signals" key="behavioral-signals">
              <Card>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <Text>Time on Product Page</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        User spends significant time on product page
                      </Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <Text>Deep Scroll Depth</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        User scrolls to product details and reviews
                      </Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <Text>Multiple Image Views</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        User views multiple product images
                      </Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <Text>Add to Cart Hover</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        User hovers over add to cart button
                      </Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <Text>Return Visitor</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        User has visited this product before
                      </Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </Space>
              </Card>
            </Panel>
            <Panel header="Historical Data" key="historical-data">
              <Card>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <Text>Previous Purchase History</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        User has purchased similar items before
                      </Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <Text>Cart Abandonment History</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        User has abandoned cart in the past
                      </Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <Text>Average Order Value</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        User's historical average order value
                      </Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </Space>
              </Card>
            </Panel>
            <Panel header="Custom Rules" key="custom-rules">
              <Card>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Text>Add Custom Rule</Text>
                  <Input placeholder="Enter custom rule condition" />
                </Space>
              </Card>
            </Panel>
          </Collapse>
        </Space>
      </TabPane>

      <TabPane tab="Price Sensitive" key="price-sensitive">
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Card title="Price Sensitive Detection Threshold">
            <Text>Set the confidence threshold required to classify a user as price sensitive</Text>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 16 }}>
              <Slider
                min={0}
                max={100}
                step={1}
                value={priceSensitiveThreshold}
                onChange={setPriceSensitiveThreshold}
                style={{ flex: 1 }}
              />
              <span style={{ width: 48, textAlign: "right" }}>{priceSensitiveThreshold}%</span>
            </div>
            <Text type="secondary" style={{ fontSize: 12 }}>
              The confidence threshold required to classify a user as price sensitive
            </Text>
          </Card>

          <Collapse accordion>
            <Panel header="Behavioral Signals" key="behavioral-signals-ps">
              <Card>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <Text>Price Check Frequency</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        User checks price multiple times or compares with other products
                      </Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <Text>Coupon Search</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        User searches for coupons or discount codes
                      </Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <Text>Price Sort Usage</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        User sorts products by price (low to high)
                      </Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <Text>Cart Hesitation</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        User adds to cart but hesitates to checkout
                      </Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </Space>
              </Card>
            </Panel>
            <Panel header="Historical Data" key="historical-data-ps">
              <Card>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <Text>Discount Usage History</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        User has used discounts or coupons in the past
                      </Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <Text>Sale Purchase History</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        User primarily purchases during sales
                      </Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </Space>
              </Card>
            </Panel>
          </Collapse>
        </Space>
      </TabPane>

      <TabPane tab="Just Browsing" key="just-browsing">
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Text type="secondary">
            Users who don't meet the criteria for High Intent or Price Sensitive are classified as Just Browsing.
          </Text>
          <Collapse accordion>
            <Panel header="Behavioral Signals" key="behavioral-signals-jb">
              <Card>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <Text>Quick Page Views</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        User views multiple products quickly
                      </Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <Text>Limited Engagement</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        User doesn't engage deeply with product details
                      </Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <Text>First-time Visitor</Text>
                      <br />
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        User is visiting the site for the first time
                      </Text>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </Space>
              </Card>
            </Panel>
          </Collapse>
        </Space>
      </TabPane>
    </Tabs>
  )
}
