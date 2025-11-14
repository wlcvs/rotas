import { api } from "./api.js";
import { getFormattedDate } from "./utils/formatDate.js"

const time_intervals = { 
  morning: ["09:00:00", "13:00:00"],
  afternoon: ["13:00:00", "17:00:00"], 
  night: ["17:00:00", "20:00:00"],
};

function catchThePeriod(day: "today" |
"tomorrow" = "today", time_interval: string[]) {
  return {
    period_initial: `${getFormattedDate(day)}T${time_interval[0]}`, 
    period_final: `${getFormattedDate(day)}T${time_interval[1]}`
  }
}

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

// getOrders();
console.log(catchThePeriod("today", time_intervals.morning).period_initial);
console.log(catchThePeriod("today", time_intervals.morning).period_final);
