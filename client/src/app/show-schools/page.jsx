'use client';

import { useEffect, useState } from "react";

const page = () => {
  const [schoolsData, setSchoolsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getSchoolsData();
  }, []);

  async function getSchoolsData() {
    try {
      setIsLoading(true);
      let res = await fetch(`https://school-listing-server.onrender.com/school/get`);
      res = await res.json();
      setSchoolsData(res);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.error('Error:', error)
    } finally {
      setIsLoading(false);
      setIsError(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center text-gray-900 bg-gradient-to-r from-primary-500 via-gray-100 to-primary-900 min-h-screen">
      <div className="max-w-[1248px] sm:mx-4 md:mx-6 lg:mx-[32px] xl:mx-[72px] mt-[120px] mb-[120px] sm:mt-[80px] flex flex-col gap-[30px] sm:gap-[40px]">
        <h1 className="xl:text-[32px] lg:text-[25px]">Show Schools</h1>
        {isLoading && <h1 style={{ textAlign: 'center' }}>Loading...</h1>}
        {isError && <h1 style={{ textAlign: 'center' }}>Error!!😒</h1>}
        <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-[30px] lg:gap-[25px] sm:gap-[40px] md:gap-[22px]">
          {(schoolsData && schoolsData.length > 0) &&
            schoolsData.map(({ image, name, address, city, _id }) => {
              return (<div key={_id} className="rounded-[10px] border p-2 flex flex-col gap-[20px] sm:gap-[12px] lg:gap-[17px] text-center pb-5">
                <div className="flex items-center justify-center bg-gray-200 w-96 h-96 xl:w-80 xl:h-80 lg:w-80 lg:h-80 md:w-60 md:h-60 rounded-t-md">
                  <img src={image} alt={name} className="max-w-full max-h-full object-contain" />
                </div>
                <h2 className="text-[25px] lg:text-[22px] md:text-[20px]">{name}</h2>
                <p className="text-[20px] lg:text-[18px] md:text-[16px]">{`${city} ${address}`}</p>
              </div>)
            })
          }
        </div>
      </div>
    </div>
  );
}

export default page;