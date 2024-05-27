const api_url_dev = "https://flourishcare-api.onrender.com/api/v1"
const api_url_prod = ""

export const api_url =
  process.env.NODE_ENV === "development" ? api_url_dev : api_url_prod
