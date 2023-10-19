import { useState, useEffect } from 'react';

const useDataFetching = (fetchFunction) => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetchFunction();
      setData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return { data, isModalOpen, fetchData, setIsModalOpen };
};

export default useDataFetching;
