import AddForm from '@/src/components/AddForm';
const APP_URL = process.env.APP_URL || "";
const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL || "";

export const metadata = {
  title: "Add School",
  description: "Here admin can add any school data of all information like name, address, city, state, contact, image and email_id",
  metadataBase: new URL(`${APP_URL}`),
  alternates: {
    canonical: `/add-school/`,
  }
}

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center text-gray-900 bg-gradient-to-r from-primary-500 via-gray-100 to-primary-900 min-h-screen">
      <div className="max-w-[1248px] sm:mx-4 md:mx-6 lg:mx-[32px] xl:mx-[72px] mt-[120px] mb-[120px] sm:mt-[80px] flex flex-col gap-6 border rounded-sm px-8 py-4 sm:p-4">
        <h1>Add School</h1>
        <AddForm BACKEND_BASE_URL={BACKEND_BASE_URL} />
      </div>
    </div>
  )
}

export default page;