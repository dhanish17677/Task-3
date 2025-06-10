import axios from 'axios';

const BASE_URL = 'http://localhost:8080/tasks';

export const getTasks = () => axios.get(`${BASE_URL}`);
export const getTaskById = (id: string) => axios.get(`${BASE_URL}/${id}`);
export const createTask = (data: any) => axios.post(`${BASE_URL}`, data);
export const updateTask = (id: string, data: any) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteTask = (id: string) => axios.delete(`${BASE_URL}/${id}`);
export const executeTask = (id: string) => axios.put(`${BASE_URL}/${id}/execution`);
export const getExecutionsForTask = (id: string) => axios.get(`${BASE_URL}/${id}/executions`);
