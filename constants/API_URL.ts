const api_url_dev = "http://localhost:5000/api/v1";
const api_url_prod = process.env.NEXT_API_URL;
export const api_url = api_url_prod;
// process.env.NODE_ENV === "development" ? api_url_dev : api_url_prod;
