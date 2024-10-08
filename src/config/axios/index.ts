import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL_API;
axios.defaults.baseURL = BASE_URL;

export const AUTHORIZATION_NOTION_URL = import.meta.env
  .AUTHORIZATION_NOTION_URL;

export const DATABASE_ID = import.meta.env.DATABASE_ID;
