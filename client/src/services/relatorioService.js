import api from "./api";

export async function buscarRelatorio(params) {
  const response = await api.get("/relatorios", { params });
  return response.data;
}