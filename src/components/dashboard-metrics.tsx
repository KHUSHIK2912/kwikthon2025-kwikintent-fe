import { Card, Typography, Row, Col, Space } from "antd";
import {
  BulbOutlined,
  ShoppingCartOutlined,
  LineChartOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

const { Text } = Typography;

export function DashboardMetrics() {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={12} lg={6}>
        <Card>
          <Space
            direction="horizontal"
            style={{ width: "100%", justifyContent: "space-between" }}
          >
            <div>
              <Text type="secondary" style={{ fontSize: 14 }}>
                Total Intent Detections
              </Text>
              <div style={{ fontSize: 24, fontWeight: 700 }}>24,892</div>
              <Text type="secondary" style={{ fontSize: 12 }}>
                +18% from last month
              </Text>
            </div>
            <BulbOutlined style={{ fontSize: 24, color: "#888" }} />
          </Space>
        </Card>
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Card>
          <Space
            direction="horizontal"
            style={{ width: "100%", justifyContent: "space-between" }}
          >
            <div>
              <Text type="secondary" style={{ fontSize: 14 }}>
                Conversion Rate
              </Text>
              <div style={{ fontSize: 24, fontWeight: 700 }}>18.2%</div>
              <Text type="secondary" style={{ fontSize: 12 }}>
                +4.3% from baseline
              </Text>
            </div>
            <LineChartOutlined style={{ fontSize: 24, color: "#888" }} />
          </Space>
        </Card>
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Card>
          <Space
            direction="horizontal"
            style={{ width: "100%", justifyContent: "space-between" }}
          >
            <div>
              <Text type="secondary" style={{ fontSize: 14 }}>
                Avg. Order Value
              </Text>
              <div style={{ fontSize: 24, fontWeight: 700 }}>₹1,482</div>
              <Text type="secondary" style={{ fontSize: 12 }}>
                +₹128 from baseline
              </Text>
            </div>
            <ShoppingCartOutlined style={{ fontSize: 24, color: "#888" }} />
          </Space>
        </Card>
      </Col>
      <Col xs={24} md={12} lg={6}>
        <Card>
          <Space
            direction="horizontal"
            style={{ width: "100%", justifyContent: "space-between" }}
          >
            <div>
              <Text type="secondary" style={{ fontSize: 14 }}>
                Prepaid Ratio
              </Text>
              <div style={{ fontSize: 24, fontWeight: 700 }}>42.8%</div>
              <Text type="secondary" style={{ fontSize: 12 }}>
                +7.2% from baseline
              </Text>
            </div>
            <UsergroupAddOutlined style={{ fontSize: 24, color: "#888" }} />
          </Space>
        </Card>
      </Col>
    </Row>
  );
}
