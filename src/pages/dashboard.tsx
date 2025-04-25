import { useState } from "react";
import {
  Layout,
  Button,
  Card,
  Tabs,
  Typography,
  Space,
  Row,
  Col,
} from "antd";
import {
  SettingOutlined
} from "@ant-design/icons";
import { DashboardMetrics } from "../components/dashboard-metrics";
import { IntentDistributionChart } from "../components/intent-distribution-chart";
import { RecentDetections } from "../components/recent-detections";
import { ConversionRateChart } from "../components/conversion-rate-chart";

const { Content } = Layout;
const { Title, Text } = Typography;

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: 32 }}>
        <Row justify="space-between" align="middle" style={{ marginBottom: 24 }}>
          <Col>
            <Title level={2} style={{ margin: 0 }}>
              KwikIntent Dashboard
            </Title>
          </Col>
          <Col>
            <Button>View PDP Widget Preview</Button>
          </Col>
        </Row>
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={[
            {
              key: "overview",
              label: "Overview",
              children: (
                <Space direction="vertical" size="large" style={{ width: "100%" }}>
                  <DashboardMetrics />
                  <Row gutter={24}>
                    <Col xs={24} lg={14}>
                      <Card
                        title="Intent Distribution"
                        extra={
                          <Text type="secondary">
                            Distribution of detected user intents over the last 30 days
                          </Text>
                        }
                        style={{ marginBottom: 24 }}
                      >
                        <IntentDistributionChart />
                      </Card>
                    </Col>
                    <Col xs={24} lg={10}>
                      <Card
                        title="Conversion Rate by Intent"
                        extra={
                          <Text type="secondary">
                            How different intent types convert
                          </Text>
                        }
                        style={{ marginBottom: 24 }}
                      >
                        <ConversionRateChart />
                      </Card>
                    </Col>
                  </Row>
                  <Row gutter={24}>
                    <Col xs={24} lg={14}>
                      <Card
                        title="Recent Intent Detections"
                        extra={
                          <Text type="secondary">
                            Latest user intent detections and actions taken
                          </Text>
                        }
                        style={{ marginBottom: 24 }}
                      >
                        <RecentDetections />
                      </Card>
                    </Col>
                    <Col xs={24} lg={10}>
                      <Card
                        title="Active Widget Performance"
                        extra={
                          <Text type="secondary">
                            Effectiveness of your intent-based widgets
                          </Text>
                        }
                        style={{ marginBottom: 24 }}
                        actions={[
                          <Button key="configure" block icon={<SettingOutlined />}>
                            Configure Widgets
                          </Button>,
                        ]}
                      >
                        <Space direction="vertical" style={{ width: "100%" }}>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                              <Text strong>High Intent - Urgency Widget</Text>
                              <br />
                              <Text type="secondary">28% conversion rate</Text>
                            </div>
                            <Text style={{ color: "#22c55e", fontWeight: 500 }}>+12%</Text>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                              <Text strong>Price Sensitive - Discount Widget</Text>
                              <br />
                              <Text type="secondary">18% conversion rate</Text>
                            </div>
                            <Text style={{ color: "#22c55e", fontWeight: 500 }}>+8%</Text>
                          </div>
                          <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                              <Text strong>Just Browsing - Social Proof Widget</Text>
                              <br />
                              <Text type="secondary">7% conversion rate</Text>
                            </div>
                            <Text style={{ color: "#22c55e", fontWeight: 500 }}>+3%</Text>
                          </div>
                        </Space>
                      </Card>
                    </Col>
                  </Row>
                </Space>
              ),
            },
            // {
            //   key: "analytics",
            //   label: "Analytics",
            //   children: (
            //     <Card
            //       title="Analytics"
            //       extra={
            //         <Text type="secondary">
            //           Detailed analytics for your KwikIntent implementation
            //         </Text>
            //       }
            //     >
            //       <Text type="secondary">
            //         Analytics content will be displayed here.
            //       </Text>
            //     </Card>
            //   ),
            // },
            // {
            //   key: "configuration",
            //   label: "Configuration",
            //   children: (
            //     <Card
            //       title="Configuration"
            //       extra={
            //         <Text type="secondary">
            //           Configure your KwikIntent settings and rules
            //         </Text>
            //       }
            //     >
            //       <Text type="secondary">
            //         Configuration options will be displayed here.
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
