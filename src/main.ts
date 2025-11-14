import { api } from "./api.js";


async function getPedidos() {
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

getPedidos();
