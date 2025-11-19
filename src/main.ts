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
    ATENDIMENTO: 1, 
    SEPARACAO: 2,
    EMPACOTAMENTO: 3,
    FATURAMENTO: 4,
    AGUARDANDO_ATENDIMENTO: 9,
    EM_ATENDIMENTO: 10,
    PENDENTE: 11,
    AGUARDANDO_SEPARACAO: 12,
    EM_SEPARACAO: 13,
    PENDENTE_SEPARACAO: 14,
    AGUARDANDO_EMPACOTAMENTO: 18,
    EM_EMPACOTAMENTO: 19,
    PENDENTE_EMPACOTAMENTO: 20,
    AGUARDANDO_FATURAMENTO: 21,
    EM_FATURAMENTO: 22,
    AGUARDANDO_LOGISTICA: 23,
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
      compra_status_id: statusID.AGUARDANDO_LOGISTICA,
      data_entrega_inicial: period.initial, 
      data_entrega_final: period.final, 
    }
  });

  console.log(response.data);
}

getOrders();
