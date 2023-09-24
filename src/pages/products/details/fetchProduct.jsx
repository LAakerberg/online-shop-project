import React from 'react';
import { useParams } from 'react-router-dom';
import useApiData from '../../../data/api/apiFetch';
import { apiUrl } from '../../../data/api/apiUrl';

export function SpecificData() {
  const { id } = useParams();
  const { data, isLoading, isError } = useApiData(apiUrl + id);
  console.log(data);
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="sm:w-11/12 desktop2xl:w-9/12 m-auto border pb-2">
      <div className="bg-white border border-black rounded-md w-full py-2 px-1">
        <div className="border-b border-black">
          <h2>{data.title}</h2>
          <p className="italic">Product ID: {id}</p>
        </div>
        <div>
          <div className="flex px-1">
            <div className="flex-1">
              <div className="p-1">
                <img src={data.imageUrl} className="object-cover w-full h-96" />
              </div>
              <div className="p-1">
                <h4 className="underline underline-offset-4">Descriptions</h4>
                <p>{data.description}</p>
              </div>
              <div className="p-2">
                <p className="font-bold italic">Tags: {data.tags}</p>
              </div>
            </div>
            <div className="flex-initial w-48 border-l border-black p-1">
              <div className="flex flex-col justify-between h-full">
                <div className="">
                  <ul className="product_item">
                    <li className="product_item">Price: {data.price}</li>
                    <li className="product_item">
                      Sales:{' '}
                      {data.discountedPrice < data.price &&
                        data.discountedPrice}
                    </li>
                    <li className="product_item">Rating</li>
                    <li className="product_item">Reviews</li>
                  </ul>
                </div>
                <div className="w-full">
                  <button className="global_button w-full">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
