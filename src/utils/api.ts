import axios from "axios";
import type { Message } from '../types/Message.interface'


const API_URL = 'https://jsonplaceholder.typicode.com/comments';

export const fetchMessages: Promise<Message[]> = axios
  .get<Message[]>(API_URL)
  .then((response) => {
    return new Promise<Message[]>((resolve) => setTimeout(() => resolve(response.data), 2000))
  })
  .catch((error) => {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const message = error.response?.statusText || "Помилка запиту до API";
      throw new Error(`HTTP ${status}: ${message}`);
    }
    throw new Error("Невідома помилка під час запиту.");
    }
  )
