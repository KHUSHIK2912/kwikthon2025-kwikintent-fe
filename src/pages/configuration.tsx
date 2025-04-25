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
import { createIntentRules, getIntentRules } from "../store/api";
import { message } from "antd";
import type { IntentRulesData } from "../components/intent-rules";
import { defaultValues } from "../components/intent-rules";

const { Content } = Layout;
const { Title, Text } = Typography;

export default function ConfigurationPage() {
  const [activeTab, setActiveTab] = useState("intent-rules");
  const [rules, setRules] = useState<IntentRulesData>([]);
  const [activeIntentType, setActiveIntentType] = useState("high-intent");
  const [resetKey, setResetKey] = useState(0);

  // Handler to receive updated rules from child
  const handleRulesChange = (newRules: IntentRulesData) => {
    setRules(newRules);
  };

  // Handler for tab change
  const handleTabChange = (key: string) => {
    setActiveTab(key);
    if (key === "intent-rules") {
      // Default to high-intent on entering intent-rules tab
      setActiveIntentType("high-intent");
    }
  };

  // Handler for intent type tab change inside IntentRulesConfig
  const handleIntentTypeChange = (intentType: string) => {
    setActiveIntentType(intentType);
  };

  // Save handler
  const handleSaveRules = async () => {
    try {
      // Find the rule for the currently active intent type
      const ruleToSave = rules.find(rule => rule.intentType === activeIntentType);
      if (ruleToSave) {
        await createIntentRules(ruleToSave);
        // Fetch latest rules from API after saving
        const latestRules = await getIntentRules();
        if (Array.isArray(latestRules) && latestRules.length > 0) {
          setRules(latestRules);
        }
        message.success("Rules saved successfully!");
      } else {
        message.error("No rule found for the selected intent type.");
      }
    } catch (err) {
      message.error("Failed to save rules.");
    }
  };

  // Reset handler
  const handleResetRules = () => {
    setRules(JSON.parse(JSON.stringify(defaultValues)));
    setResetKey(prev => prev + 1); // force re-mount of IntentRulesConfig
    message.success("Rules reset to defaults.");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: 32 }}>
        <Title level={2}>KwikIntent Configuration</Title>
        <Tabs
          activeKey={activeTab}
          onChange={handleTabChange}
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
                    <Button key="reset" onClick={handleResetRules}>Reset to Defaults</Button>,
                    <Button key="save" type="primary" onClick={handleSaveRules}>
                      Save Rules
                    </Button>,
                  ]}
                >
                  <IntentRulesConfig key={resetKey} onChange={handleRulesChange} onTabChange={handleIntentTypeChange} />
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
                  <WidgetConfig active={activeTab === "widgets"} onLoaded={() => {}} />
                </Card>
              ),
            },
            // {
            //   key: "advanced",
            //   label: "Advanced Settings",
            //   children: (
            //     <Card
            //       title="Advanced Settings"
            //       extra={
            //         <Text type="secondary">
            //           Configure advanced settings for KwikIntent
            //         </Text>
            //       }
            //     >
            //       <Text type="secondary">
            //         Advanced configuration options will be displayed here.
            //       </Text>
            //     </Card>
            //   ),
            // },
          ]}
        />
      </Content>
    </Layout>
  );
}
