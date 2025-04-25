import axios from "axios";

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
  return response;
}

export const createIntentRules = async (rule: any) => {
    let data = JSON.stringify({
        "intentType": rule.intentType,
        "threshold": rule.threshold,
        "behavioralSignals": rule.behavioralSignals,
        "historicalFactors": rule.historicalFactors,
      });

      console.log(rule)
//   let data = JSON.stringify(rule);

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://pdp-intent-api.aezy.in/api/intent-rules',
    headers: { 
      'accept': 'application/json', 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MGJkMGIxNWZhYWRhMDZhY2NmNTk4ZiIsInJvbGUiOiJhZG1pbiIsIm1lcmNoYW50Ijp7Il9pZCI6IjY4MGJkMGIwNWZhYWRhMDZhY2NmNTk4MCIsIm5hbWUiOiJEZW1vIFN0b3JlIiwiZG9tYWluIjoiZGVtb3N0b3JlLm15c2hvcGlmeS5jb20ifSwiaWF0IjoxNzQ1NjExNTc5LCJleHAiOjE3NDU2OTc5Nzl9.sYPZd4qHNo7LjMBTpPawuNSsJzkRAtBqlM5O__G3xcE', 
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
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MGJkMGIxNWZhYWRhMDZhY2NmNTk4ZiIsInJvbGUiOiJhZG1pbiIsIm1lcmNoYW50Ijp7Il9pZCI6IjY4MGJkMGIwNWZhYWRhMDZhY2NmNTk4MCIsIm5hbWUiOiJEZW1vIFN0b3JlIiwiZG9tYWluIjoiZGVtb3N0b3JlLm15c2hvcGlmeS5jb20ifSwiaWF0IjoxNzQ1NjExNTc5LCJleHAiOjE3NDU2OTc5Nzl9.sYPZd4qHNo7LjMBTpPawuNSsJzkRAtBqlM5O__G3xcE'
        }
      };
      
      const response = await axios.request(config);

      return response.data;
}

export const getWidgetConfigs = async () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://pdp-intent-api.aezy.in/api/widgets',
        headers: { 
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MGJkMGIxNWZhYWRhMDZhY2NmNTk4ZiIsInJvbGUiOiJhZG1pbiIsIm1lcmNoYW50Ijp7Il9pZCI6IjY4MGJkMGIwNWZhYWRhMDZhY2NmNTk4MCIsIm5hbWUiOiJEZW1vIFN0b3JlIiwiZG9tYWluIjoiZGVtb3N0b3JlLm15c2hvcGlmeS5jb20ifSwiaWF0IjoxNzQ1NjExNTc5LCJleHAiOjE3NDU2OTc5Nzl9.sYPZd4qHNo7LjMBTpPawuNSsJzkRAtBqlM5O__G3xcE'
        }
      };
      
      const response = await axios.request(config);

      return response.data.data;
}