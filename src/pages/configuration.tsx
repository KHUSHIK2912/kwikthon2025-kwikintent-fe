import { useState } from "react";
import {
  Layout,
  Button,
  Card,
  Tabs,
  Typography,
} from "antd";

import { IntentRulesConfig } from "../components/intent-rules";
import { WidgetConfig } from "../components/widget-config";

const { Content } = Layout;
const { Title, Text } = Typography;

export default function ConfigurationPage() {
  const [activeTab, setActiveTab] = useState("intent-rules");

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: 32 }}>
        <Title level={2}>KwikIntent Configuration</Title>
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          style={{ marginTop: 24 }}
          items={[
            {
              key: "intent-rules",
              label: "Intent Detection Rules",
              children: (
                <Card
                  title="Intent Detection Rules"
                  extra={
                    <Text type="secondary">
                      Configure how KwikIntent detects different user intents based on behavior
                    </Text>
                  }
                  style={{ marginBottom: 24 }}
                  actions={[
                    <Button key="reset">Reset to Defaults</Button>,
                    <Button key="save" type="primary">
                      Save Rules
                    </Button>,
                  ]}
                >
                  <IntentRulesConfig />
                </Card>
              ),
            },
            {
              key: "widgets",
              label: "Widget Configuration",
              children: (
                <Card
                  title="Widget Configuration"
                  extra={
                    <Text type="secondary">
                      Configure the widgets shown for each intent type
                    </Text>
                  }
                  style={{ marginBottom: 24 }}
                  actions={[
                    <Button key="reset">Reset to Defaults</Button>,
                    <Button key="save" type="primary">
                      Save Widget Settings
                    </Button>,
                  ]}
                >
                  <WidgetConfig />
                </Card>
              ),
            },
            {
              key: "advanced",
              label: "Advanced Settings",
              children: (
                <Card
                  title="Advanced Settings"
                  extra={
                    <Text type="secondary">
                      Configure advanced settings for KwikIntent
                    </Text>
                  }
                >
                  <Text type="secondary">
                    Advanced configuration options will be displayed here.
                  </Text>
                </Card>
              ),
            },
          ]}
        />
      </Content>
    </Layout>
  );
}
