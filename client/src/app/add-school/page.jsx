import React from 'react';
const APP_URL = process.env.APP_URL || "";

export const metadata = {
  title: "Add Schools",
  description: "Here admin can add any school data of all information like name, address, city, state, contact, image and email_id",
  metadataBase: new URL(`${APP_URL}`),
  alternates: {
    canonical: `/add-school/`,
  }
}

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center text-gray-900">
      <div className="max-w-[1248px] sm:mx-4 md:mx-6 lg:mx-[32px] xl:mx-[72px] mt-[120px] sm:mt-[80px]">
        <h1>Add School</h1>
      </div>
    </div>
  )
}

export default page;