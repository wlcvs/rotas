import { api } from "./api.js";

const periods = { 
  morning: [
    ["09:00:00", "11:00:00"],
    ["10:00:00", "13:00:00"],
    ["11:00:00", "13:00:00"]
  ],
  afternoon: [
    ["13:00:00", "17:00:00"],
    ["14:00:00", "16:00:00"]
  ], 
  night: [
    ["17:00:00", "20:00:00"],
    ["18:00:00", "20:00:00"]
  ]
};

async function getOrders() {

  const response: any = await api.get("/importacao/pedidos/", {
    params: {
      client_id: 1,
      centro_distribuicao_id: 2,
      data_entrega_inicial:"2025-11-14T09:00:00",
      data_entrega_final: "2025-11-14T13:00:00",
    }
  });
  console.log(response.data);
}

getOrders();
