import { useState, useEffect } from "react"
import {
  Card,
  Input,
  Slider,
  Switch,
  Tabs,
  Typography,
  Collapse,
  Space,
  InputNumber,
} from "antd"
import { getIntentRules } from "../store/api";

const { TabPane } = Tabs
const { Panel } = Collapse
const { Text } = Typography

export const defaultValues = [
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

type IntentRulesConfigProps = {
  onChange?: (rules: IntentRulesData) => void;
  onTabChange?: (intentType: string) => void;
};

export type IntentRulesData = typeof defaultValues;

function mergeWithDefaults(rules: IntentRulesData) {
  return defaultValues.map(defaultRule => {
    const found = rules.find(r => r.intentType === defaultRule.intentType);
    return { ...defaultRule, ...found, 
      behavioralSignals: found?.behavioralSignals ?? defaultRule.behavioralSignals,
      historicalFactors: found?.historicalFactors ?? defaultRule.historicalFactors,
      threshold: found?.threshold ?? defaultRule.threshold,
      isActive: found?.isActive ?? defaultRule.isActive,
    };
  });
}

export function IntentRulesConfig({ onChange, onTabChange }: IntentRulesConfigProps) {
  const [rules, setRules] = useState<IntentRulesData>([]);
  const [activeIntentType, setActiveIntentType] = useState(rules[0]?.intentType || "high-intent");

  // Fetch rules from API on mount
  useEffect(() => {
    async function fetchRules() {
      try {
        const apiRules = await getIntentRules();
        if (Array.isArray(apiRules) && apiRules.length > 0) {
          const merged = mergeWithDefaults(apiRules);
          setRules(merged);
          onChange?.(merged);
        } else {
          setRules(defaultValues);
          onChange?.(defaultValues);
        }
      } catch (e) {
        setRules(defaultValues);
        onChange?.(defaultValues);
      }
    }
    fetchRules();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Helper to update a signal or factor
  const updateSignal = (intentIdx: number, type: "behavioralSignals" | "historicalFactors", signalIdx: number, key: string, value: any) => {
    const newRules = JSON.parse(JSON.stringify(rules));
    newRules[intentIdx][type][signalIdx][key] = value;
    setRules(newRules);
    onChange?.(newRules);
  };

  // Helper to update threshold
  const updateThreshold = (intentIdx: number, value: number) => {
    const newRules = JSON.parse(JSON.stringify(rules));
    newRules[intentIdx].threshold = value;
    setRules(newRules);
    onChange?.(newRules);
  };

  // Handler for tab change
  const handleTabChange = (key: string) => {
    setActiveIntentType(key);
    if (onTabChange) onTabChange(key);
  };

  return (
    <Tabs
      activeKey={activeIntentType}
      onChange={handleTabChange}
    >
      {rules.map((intent, intentIdx) => (
        <TabPane
          tab={intent.intentType.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
          key={intent.intentType}
        >
          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <Card title={`${intent.intentType.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())} Detection Threshold`}>
              <Text>Set the confidence threshold required to classify a user as {intent.intentType.replace(/-/g, " ")}</Text>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 16 }}>
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={intent.threshold}
                  onChange={value => updateThreshold(intentIdx, value as number)}
                  style={{ flex: 1 }}
                />
                <span style={{ width: 48, textAlign: "right" }}>{intent.threshold}%</span>
              </div>
              <Text type="secondary" style={{ fontSize: 12 }}>
                The confidence threshold required to classify a user as {intent.intentType.replace(/-/g, " ")}
              </Text>
            </Card>

            <Collapse accordion>
              <Panel header="Behavioral Signals" key="behavioral-signals">
                <Card>
                  <Space direction="vertical" style={{ width: "100%" }}>
                    {intent.behavioralSignals.map((signal, signalIdx) => (
                      <div key={signal._id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <Text>{signal.name.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}</Text>
                          <br />
                          <Text type="secondary" style={{ fontSize: 12 }}>
                            {signal.description}
                          </Text>
                          {"threshold" in signal && (
                            <div style={{ marginTop: 8 }}>
                              {/* <InputNumber
                                min={1}
                                max={typeof signal.threshold === "number" ? Math.max(signal.threshold * 2, 10) : 10}
                                step={1}
                                value={signal.threshold}
                                onChange={(value) => {
                                  if (value !== null) updateSignal(intentIdx, "behavioralSignals", signalIdx, "threshold", value);
                                }}
                                style={{ width: 180 }}
                              /> */}
                            </div>
                          )}
                        </div>
                        <Switch
                          checked={signal.enabled}
                          onChange={checked => updateSignal(intentIdx, "behavioralSignals", signalIdx, "enabled", checked)}
                        />
                      </div>
                    ))}
                  </Space>
                </Card>
              </Panel>
              {intent.historicalFactors.length > 0 && (
                <Panel header="Historical Data" key="historical-data">
                  <Card>
                    <Space direction="vertical" style={{ width: "100%" }}>
                      {intent.historicalFactors.map((factor, factorIdx) => (
                        <div key={factor._id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div>
                            <Text>{factor.name.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}</Text>
                            <br />
                            <Text type="secondary" style={{ fontSize: 12 }}>
                              {factor.description}
                            </Text>
                          </div>
                          <Switch
                            checked={factor.enabled}
                            onChange={checked => updateSignal(intentIdx, "historicalFactors", factorIdx, "enabled", checked)}
                          />
                        </div>
                      ))}
                    </Space>
                  </Card>
                </Panel>
              )}
            </Collapse>
          </Space>
        </TabPane>
      ))}
    </Tabs>
  );
}
