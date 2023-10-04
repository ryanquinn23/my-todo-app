import { axiosInstance } from './axiosInstance';

export const createTodoService = async (formData, config) => {
  const res = await axiosInstance.post('/todos', formData, config);

  return res.data;
};

export const listTodosService = async (searchParams) => {
  const res = await axiosInstance.get(`/todos?${searchParams.toString()}`);

  return res.data;
};

export const deleteTodoService = async (todoId) => {
  const res = await axiosInstance.delete(`/todos/${todoId}`);

  return res.data;
};
