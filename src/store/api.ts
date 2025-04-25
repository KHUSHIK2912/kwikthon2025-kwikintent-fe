import axios from "axios";

const getAuthToken = () => localStorage.getItem('authToken');

export const loginAPI = async (username: string, password: string) => {
  let data = JSON.stringify({
    "id": "680ba07eb0f3532d513399b6",
    "email": username,
    "password": password
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://pdp-intent-api.aezy.in/api/auth/login',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  const response  = await axios.request(config);
  localStorage.setItem('authToken', response.data.token);
  return response;
}

export const createIntentRules = async (rule: any) => {
    let data = JSON.stringify({
        "intentType": rule.intentType,
        "threshold": rule.threshold,
        "behavioralSignals": rule.behavioralSignals,
        "historicalFactors": rule.historicalFactors,
      });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://pdp-intent-api.aezy.in/api/intent-rules',
    headers: { 
      'accept': 'application/json', 
      'Authorization': `Bearer ${getAuthToken()}`,
      'Content-Type': 'application/json'
    },
    data : data
  };

  return axios.request(config);
}

export const getIntentRules = async () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://pdp-intent-api.aezy.in/api/intent-rules',
        headers: { 
          'Authorization': `Bearer ${getAuthToken()}`
        }
      };
      
      const response = await axios.request(config);

      return response.data.data;
}

export const getWidgetConfigs = async () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://pdp-intent-api.aezy.in/api/widgets',
        headers: { 
          'Authorization': `Bearer ${getAuthToken()}`
        }
      };
      
      const response = await axios.request(config);

      return response.data.data;
}