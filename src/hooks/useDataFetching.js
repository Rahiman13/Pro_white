import { useState, useEffect } from 'react';
import { useLoader } from '../context/LoaderContext';

export const useDataFetching = (fetchFunction, taskId) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { startLoading, stopLoading } = useLoader();

  useEffect(() => {
    const fetchData = async () => {
      try {
        startLoading(taskId);
        const result = await fetchFunction();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        stopLoading(taskId);
      }
    };

    fetchData();
    
    return () => {
      stopLoading(taskId); // Cleanup on unmount
    };
  }, [fetchFunction, taskId, startLoading, stopLoading]);

  return { data, error };
}; 