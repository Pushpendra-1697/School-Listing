const APP_URL = process.env.APP_URL || "";

export const metadata = {
  title: "Show Schools",
  description: "Here user can select your best college for chosen best studying",
  metadataBase: new URL(`${APP_URL}`),
  alternates: {
    canonical: `/show-schools/`,
  }
}

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center text-gray-900 bg-gradient-to-r from-primary-500 via-gray-100 to-primary-900 min-h-screen">
      <div className="max-w-[1248px] sm:mx-4 md:mx-6 lg:mx-[32px] xl:mx-[72px] mt-[120px] sm:mt-[80px]">
        <h1>Show School</h1>
      </div>
    </div>
  );
}

export default page;