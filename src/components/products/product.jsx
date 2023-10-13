import React from 'react';
import useApiData from '../../data/api/apiFetch';
import { apiUrl } from '../../data/api/apiUrl';
import { Link } from 'react-router-dom';

export function DataCard() {
  const { data, isLoading, isError } = useApiData(apiUrl);
  console.log(data);
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="py-1">
        <h2>Products</h2>
      </div>

      <div className="sm:w-11/12 desktop2xl:w-9/12 grid justify-items-center mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 desktop1xl:grid-cols-5 desktop2xl:grid-cols-6 gap-4">
        {data.map((dataName) => {
          const discountPercentage = Math.round(
            ((dataName.price - dataName.discountedPrice) / dataName.price) * 100
          );

          return (
            <div
              className="container w-60 h-80 flex flex-col bg-white rounded-lg drop-shadow-xl"
              key={dataName.id}
            >
              <div className="flex justify-center items-center h-36">
                {dataName.discountedPrice < dataName.price && (
                  <div className="sales_container">
                    {`${discountPercentage}% OFF`}
                  </div>
                )}
                <img
                  className="object-cover w-full h-full rounded-t-lg"
                  src={dataName.imageUrl}
                />
              </div>
              <div className="flex flex-col m-1">
                <div>
                  <h3 className="text-xl">{dataName.title}</h3>
                </div>
                <div className="flex">
                  <p>
                    {dataName.description.length > 50
                      ? `${dataName.description.substring(0, 40)}...`
                      : dataName.description}
                  </p>
                </div>
                <div className="flex h-10 items-center">
                  {dataName.discountedPrice < dataName.price ? (
                    <>
                      <div className="discount_price grow font-bold text-red-500">
                        {dataName.discountedPrice}
                      </div>
                      <div
                        className="price grow"
                        style={{ textDecoration: 'line-through' }}
                      >
                        {dataName.price}
                      </div>
                    </>
                  ) : (
                    <div className="price grow font-bold">{dataName.price}</div>
                  )}
                </div>
                <div className="flex justify-center space-x-2">
                  <Link to={`/product/details/${dataName.id}`}>
                    <button className="global_button">View more</button>
                  </Link>
                  <button className="global_button font-bold">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DataCard;
