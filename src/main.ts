import { api } from "./api.js";
import { getFormattedDate } from "./utils/format-date.js"

const timeIntervals = { 
  morning: {
    scheduledDelivery1: ["09:00:00", "11:00:00"],
    normalDelivery: ["10:00:00", "13:00:00"],
    scheduledDelivery2: ["11:00:00", "13:00:00"]
  },
  afternoon: {
    normalDelivery: ["13:00:00", "17:00:00"],  
    scheduledDelivery: ["14:00:00", "16:00:00"],
  },
  night: {
    normalDelivery: ["17:00:00", "22:00:00"],  
    scheduledDelivery: ["18:00:00", "20:00:00"],
  }
};

const statusID = {

} as const;

function catchThePeriod(
  day: "today" | "tomorrow",
  [start, end]: [string, string]
) {

  const date = getFormattedDate(day);

  return {
    initial: `${date}T${start}`, 
    final: `${date}T${end}`
  };
}

async function getOrders() {
  const [start, end] = timeIntervals.morning.normalDelivery; 
  const period = catchThePeriod("today", [start, end]);
  const response = await api.get("/importacao/pedidos/", {
    params: {
      client_id: 1,
      centro_distribuicao_id: 2,
      compra_status_id: 22,
      data_entrega_inicial: period.initial, 
      data_entrega_final: period.final, 
    }
  });

  console.log(response.data);
}

getOrders();
