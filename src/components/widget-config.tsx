import { useState, useEffect } from "react"
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
import { HighIntentWidgetConfig } from "./high-intent-widget-config"
import { PriceSensitiveWidgetConfig } from "./price-sensitive-widget-config"
import { JustBrowsingWidgetConfig } from "./just-browsing-widget-config"
import { getWidgetConfigs } from "../store/api"
const { TabPane } = Tabs
const { Option } = Select
const { TextArea } = Input
const { Text, Title } = Typography

export const defaultWidgetConfigs = [
  {
      "content": {
          "title": "Limited Time Offer!",
          "message": "Only 5 left in stock at this price!",
          "additionalText": "Offer expires in {countdown}"
      },
      "styling": {
          "colors": {
              "background": "#fff5f7",
              "text": "#e53e3e",
              "accent": "#e53e3e"
          },
          "position": "below-price",
          "showIcons": true
      },
      "settings": {
          "showCountdown": true,
          "countdownDuration": 900,
          "showStockLevel": false,
          "showRecentActivity": false,
          "discountType": null,
          "discountValue": 0,
          "oneTimeUse": false,
          "showOriginalPrice": false
      },
      "displayRules": {
          "categories": [],
          "excludedProducts": [],
          "deviceTypes": [],
          "geoLocations": []
      },
      "performance": {
          "impressions": 255,
          "conversions": 0,
          "lastUpdated": "2025-04-25T20:40:50.527Z",
          "interactions": 0
      },
      "intentType": "high-intent",
      "widgetType": "urgency",
      "name": "High Intent Urgency Widget",
      "isActive": true
  },
  {
      "content": {
          "title": "Popular Choice!",
          "message": "{count}+ people purchased this item in the last 24 hours!",
          "additionalText": "Join others who love this product"
      },
      "styling": {
          "colors": {
              "background": "#ebf8ff",
              "text": "#3182ce",
              "accent": "#3182ce"
          },
          "position": "below-price",
          "showIcons": true
      },
      "settings": {
          "showCountdown": false,
          "countdownDuration": 0,
          "showStockLevel": false,
          "showRecentActivity": false,
          "discountType": null,
          "discountValue": 0,
          "oneTimeUse": false,
          "showOriginalPrice": false
      },
      "displayRules": {
          "categories": [],
          "excludedProducts": [],
          "deviceTypes": [],
          "geoLocations": []
      },
      "performance": {
          "impressions": 160,
          "conversions": 0,
          "lastUpdated": "2025-04-25T19:28:24.022Z",
          "interactions": 0
      },
      "intentType": "just-browsing",
      "widgetType": "social-proof",
      "name": "Just Browsing Social Proof Widget",
      "isActive": true
  },
  {
      "content": {
          "title": "Special Offer",
          "message": "Use code {code} for {discount}% off",
          "additionalText": "Limited time offer"
      },
      "styling": {
          "colors": {
              "background": "#fffaf0",
              "text": "#dd6b20",
              "accent": "#dd6b20"
          },
          "position": "above-add-to-cart",
          "showIcons": true
      },
      "settings": {
          "discountValue": 10,
          "showCountdown": false,
          "countdownDuration": 0,
          "showStockLevel": false,
          "showRecentActivity": false,
          "discountType": null,
          "oneTimeUse": false,
          "showOriginalPrice": false
      },
      "displayRules": {
          "categories": [],
          "excludedProducts": [],
          "deviceTypes": [],
          "geoLocations": []
      },
      "performance": {
          "impressions": 155,
          "conversions": 0,
          "lastUpdated": "2025-04-25T19:27:54.879Z",
          "interactions": 0
      },
      "intentType": "price-sensitive",
      "widgetType": "discount",
      "name": "Price Sensitive Discount Widget",
      "isActive": true
  }
]

type WidgetConfigProps = {
  active: boolean;
  onLoaded: (configs: any[]) => void;
};

export function WidgetConfig({ active, onLoaded }: WidgetConfigProps) {
  const [widgetConfigs, setWidgetConfigs] = useState([]);
  const [loadingWidgetConfigs, setLoadingWidgetConfigs] = useState(false);
  // const [highIntentWidgetType, setHighIntentWidgetType] = useState("urgency")
  // const [priceSensitiveWidgetType, setPriceSensitiveWidgetType] = useState("discount")
  // const [justBrowsingWidgetType, setJustBrowsingWidgetType] = useState("social-proof")

  useEffect(() => {
    if (active) {
      setLoadingWidgetConfigs(true);
      getWidgetConfigs()
        .then((configs) => {
          setWidgetConfigs(configs || []);
          onLoaded?.(configs || []);
          console.log(configs)
        })
        .finally(() => setLoadingWidgetConfigs(false));
    }
  }, [active, onLoaded]);

  return (
    <Tabs defaultActiveKey="high-intent">
      <TabPane tab="High Intent" key="high-intent">
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <HighIntentWidgetConfig
            widgetConfigs={widgetConfigs}
            loading={loadingWidgetConfigs}
          />
        </Space>
      </TabPane>

      <TabPane tab="Price Sensitive" key="price-sensitive">
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <PriceSensitiveWidgetConfig />
        </Space>
      </TabPane>

      <TabPane tab="Just Browsing" key="just-browsing">
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <JustBrowsingWidgetConfig />
        </Space>
      </TabPane>
    </Tabs>
  )
}
