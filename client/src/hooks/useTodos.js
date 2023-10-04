import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useError } from './useError';
import { listTodosService } from '../services/todosService';
import { handleError } from '../utils/handleError';

export const useTodos = () => {
  const { setErrMsg } = useError();

  const [todos, setTodos] = useState({});
  const { searchParams, setSearchParams } = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);

        const body = await listTodosService(searchParams);

        setTodos(body.data.todos);
      } catch (err) {
        handleError(err, setErrMsg);
      }
    };
    fetchTodos();
  }, [searchParams, setErrMsg]);

  return {
    todos,
    searchParams,
    setSearchParams,
    loading,
  };
};
