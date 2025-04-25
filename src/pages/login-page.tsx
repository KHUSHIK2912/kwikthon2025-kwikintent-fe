import { useState } from "react";
import { Form, Input, Button, Checkbox, Card, Typography } from 'antd';
import { loginAPI } from "../store/api";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

type LoginProps = {
  onLogin: () => void;
};

export const Login = ({ onLogin }: LoginProps) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await loginAPI(values.username, values.password);
      onLogin();
      navigate("/"); // Redirect to dashboard after login
    } catch (error) {
      console.error('Failed:', error);
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Card
        style={{ width: 350, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
        bodyStyle={{ padding: 32 }}
      >
        <div className="flex flex-col items-center mb-6">
          <img src="/logo192.png" alt="Logo" className="w-16 h-16 mb-2" />
          <Title level={3} style={{ marginBottom: 0 }}>KwikIntent Login</Title>
        </div>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input size="large" autoFocus className="rounded" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password size="large" className="rounded" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" className="mb-2">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item className="mb-0">
            <Button type="primary" htmlType="submit" loading={loading} block size="large">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
