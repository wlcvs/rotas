import { api } from "./api.js";
import { getFormattedDate } from "./utils/formatDate.js"

const time_intervals = { 
  morning: {
    scheduled_delivery_1: ["09:00:00", "11:00:00"],
    normal_delivery: ["10:00:00", "13:00:00"],
    scheduled_delivery_2: ["11:00:00", "13:00:00"]
  },
  afternoon: {
    normal_delivery: ["13:00:00", "17:00:00"],  
    scheduled_delivery: ["14:00:00", "16:00:00"],
  },
  night: {
    normal_delivery: ["17:00:00", "20:00:00"],  
    scheduled_delivery: ["18:00:00", "20:00:00"],
  }
};

function catchThePeriod(day: "today" |
"tomorrow", time_interval: string[]) {
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
console.log(catchThePeriod("today", time_intervals.morning.scheduled_delivery_1).period_initial);
console.log(catchThePeriod("today", time_intervals.morning.scheduled_delivery_1).period_final);
