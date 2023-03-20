//import React from 'react';
import { useEffect, useState } from 'react';
//import { apiUrl } from './apiUrl';

function useApiData(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchedData = await fetch(url);
        const json = await fetchedData.json();
        setData(json);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);
  return { data, isLoading, isError };
}

export default useApiData;

// App data:

/* function App() {
    const { data, isLoading, isError } = useApi(apiUrl);
    console.log(data);
  
    if (isLoading) {
      return <div>Loading</div>;
    }
  
    if (isError) {
      return <div>Error</div>;
    }
  
    return (
      <div>
        {data.map((dataName) => (
          <div key={data.id}>
            <h2 key={data.title}>{dataName.title}</h2>
            <p key={data.body}>{dataName.description}</p>
          </div>
        ))}
      </div>
    );
  } */

/* export function FetchData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch(apiUrl);
      const json = await response.json();
      console.log(json);
      setProducts(json);
    }
    getProducts(apiUrl);
  }, []);

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h2 className="text-xl">{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </>
  );
}
 */
