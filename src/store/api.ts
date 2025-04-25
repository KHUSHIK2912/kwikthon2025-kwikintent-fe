import axios from "axios";

export const loginAPI = async (username: string, password: string) => {
  let data = JSON.stringify({
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
  return response;
}

export const createIntentRules = async () => {
let data = JSON.stringify({
  "intentType": "high-intent",
  "threshold": 70,
  "behavioralSignals": [
    {
      "name": "timeOnPage",
      "description": "User spends significant time on product page",
      "enabled": true,
      "weight": 3,
      "threshold": 120
    }
  ]
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://pdp-intent-api.aezy.in/api/intent-rules',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MGE2NmEwNmM1MDRhOThiZjYxZTMzNSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzQ1NTg2NTk3LCJleHAiOjE3NDU2NzI5OTd9.6xyaWDoZvORiPn4io0EJEpXQHXVabHZoHEA6ux6am8c', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)

}

export const getIntentRules = async () => {

}