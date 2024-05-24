const api_url_dev = "https://c583-197-210-28-236.ngrok-free.app/api/v1"
const api_url_prod = ""

export const api_url =
  process.env.NODE_ENV === "development" ? api_url_dev : api_url_prod
