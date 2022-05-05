import imagePro from "../public/sellers-tc-3-1.webp";
import Image from "next/image";

function Nuur3() {
  return (
    <div className="container py-14">
      <div className="grid md:grid-cols-2">
        <div className="text-center">
          <Image
            
            src={imagePro}
            alt="Picture of the author"
            width={450}
            height={450}
          />
        </div>
        <div>
          <h1 className="w-1/2 text-[48px] py-12 leading-[52px] ">
            <span className=" font-bold ">Quality — </span>its guaranteed
          </h1>
          <p className="flex justify-center" >
            Rest assured that our licensed and vetted Pros will provide
            top-quality repairs backed by our one-year warranty.
          </p>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default Nuur3;
