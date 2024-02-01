import Image from "next/image";
import Page from "@/public/asserts/page.svg";

const PageEmpty = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <Image
          width={400}
          height={362}
          src={Page}
          className="sm:w-[304px] w-[400px] h-[362px] sm:h-[278px]"
          alt="Page Empty"
        />
        <h2 className="text-[32px] sm:text-[24px] font-[600] text-primary-900 mt-4 text-center">
          Nothing found
        </h2>
      </div>
    </div>
  );
};

export default PageEmpty;
