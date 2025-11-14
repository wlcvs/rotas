import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.TOKEN;

export const api = axios.create({
  baseURL: "https://api.vipcommerce.com.br",
  headers: {
    'Accept': 'application/json',
    'Authorization': `Basic ${token}`,
    'DomainKey': "rossidelivery.com.br"
  }
});
