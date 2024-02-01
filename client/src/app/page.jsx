import Link from "next/link";

const APP_URL = process.env.APP_URL || "";

export const generateMetadata = () => {
  return {
    title: "Landing page for school students applications",
    description: "Start searching a great program for students and enroll here to learn in top level college",
    metadataBase: new URL(`${APP_URL}`),
    alternates: {
      canonical: `/`,
    }
  };
};

const Home = async () => {
  return (
    <div className="flex flex-col justify-center items-center text-gray-900 bg-gradient-to-r from-primary-500 via-gray-100 to-primary-900 min-h-screen">
      <div className="max-w-[1248px] sm:mx-4 md:mx-6 lg:mx-[32px] xl:mx-[72px] mt-[120px] sm:mt-[80px] flex gap-4 flex-col">
        <h1 className="sm:text-[28px] sm:font-[600]">School Listing App</h1>
        <Link className="border text-[22px] sm:text-[20px] sm:px-1 px-2 py-2 hover:text-primary-600 focus:text-green-900 rounded-md hover:bg-primary-10 focus:bg-primary-10 text-center" href={'/add-school'}>ADD SCHOOL</Link>
        <Link className="border text-[22px] px-2 sm:text-[20px] sm:px-1 py-2 hover:text-primary-600 focus:text-green-900 rounded-md hover:bg-primary-10 focus:bg-primary-10 text-center" href={'/show-schools'}>SHOW SCHOOLS</Link>
      </div>
    </div>
  );
};

export default Home;
