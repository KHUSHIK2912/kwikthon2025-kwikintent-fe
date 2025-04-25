import { useState, useEffect } from "react"
import { Card, Badge, Space, Typography, Progress } from "antd"
import { ClockCircleOutlined, CreditCardOutlined } from "@ant-design/icons"

const { Text } = Typography

export function HighIntentWidget() {
  const [timeLeft, setTimeLeft] = useState(900) // 15 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <Space direction="vertical" size="middle" style={{ width: "100%" }}>
      <Card
        style={{ borderColor: "#fecaca", background: "#fef2f2" }}
        bodyStyle={{ padding: 16 }}
      >
        <Space align="start">
          <ClockCircleOutlined style={{ color: "#f43f5e", fontSize: 20, marginTop: 4 }} />
          <div>
            <Text strong style={{ color: "#be123c" }}>
              Limited Time Offer!
            </Text>
            <div>
              <Text type="danger" style={{ fontSize: 13 }}>
                Only 5 left in stock at this price. Order now!
              </Text>
            </div>
            <div style={{ fontWeight: 500, color: "#be123c", marginTop: 4 }}>
              <span>Offer expires in: </span>
              <span style={{ fontVariantNumeric: "tabular-nums" }}>
                {minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
              </span>
            </div>
            <Progress
              percent={Math.round((timeLeft / 900) * 100)}
              showInfo={false}
              strokeColor="#f43f5e"
              trailColor="#fecaca"
              style={{ marginTop: 8 }}
            />
          </div>
        </Space>
      </Card>

      <Card>
        <Space align="start">
          <CreditCardOutlined style={{ color: "#22c55e", fontSize: 20, marginTop: 4 }} />
          <div>
            <Space>
              <Text strong>Pay now and save!</Text>
              <Badge color="#22c55e" text="5% OFF" />
            </Space>
            <div>
              <Text type="secondary" style={{ fontSize: 13 }}>
                Get an additional 5% discount with prepaid payment options
              </Text>
            </div>
            <Space style={{ marginTop: 8 }}>
              <Badge color="#d1fae5" text="UPI" />
              <Badge color="#d1fae5" text="Credit Card" />
              <Badge color="#d1fae5" text="Debit Card" />
            </Space>
          </div>
        </Space>
      </Card>
    </Space>
  )
}
