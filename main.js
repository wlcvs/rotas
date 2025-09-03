const axios = require("axios");

require('dotenv').config()

const api = axios.create({
  baseURL: "https://api.vipcommerce.com.br",
  headers: { 
    "Accept": "application/json",
    "Authorization": `Basic ${process.env.TOKEN}`,
    "DomainKey": "rossidelivery.com.br",
  },
});

async function run() {
  const res = await api.get("/importacao/pedidos/", {
    params: {
      centro_distribuicao_id: 2,
      compra_status_id: 21, 
      data_entrega_inicial: "2025-09-03 09:00:00",
      data_entrega_final: "2025-09-03 13:00:00",
    }
  });
  console.log(res.data);
}

run();
