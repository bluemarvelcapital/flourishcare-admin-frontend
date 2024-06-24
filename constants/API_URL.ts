// const api_url_dev = "https://flourishcare-api.onrender.com"
const api_url_dev = process.env.NEXT_PUBLIC_DEV_API_URL;
const api_url_prod = process.env.NEXT_PUBLIC_PROD_API_URL;

export const api_url =
    process.env.NODE_ENV === "development" ? api_url_dev : api_url_prod;
