import Image from "next/image";
import image1 from "../public/feature-1.webp";

function Nuur2() {
  return (
    <>
      <div className=" container py-14">
        <div className=" justify-center">
          <div className="flex justify-center">
            <h1 className="p-8 lg:w-1/2 text-center text-[38px]">
              <span className="font-bold">Meet the</span> streamlined solution{" "}
              <span className="font-bold">to handle any repair project</span>
            </h1>
          </div>

          <p className="text-center">
            Home repairs shouldn’t be stressful, time consuming or
            unpredictable. And with us, they won’t be. Ever.
          </p>
        </div>
        <div className="container py-20 grid md:grid-cols-3">
          <div className="text-center p-2">
            <Image
              src={image1}
              alt="Picture of the author"
              width={100}
              height={100}
            />
            <h3 className="py-4">
              Every contractor{" "}
              <span className=" font-bold">under one roof</span>{" "}
            </h3>
            <p>
              No more scrambling to find skilled trades. We have licensed and
              insured Pros for any project – available on-demand.
            </p>
          </div>
          <div className="text-center p-2">
            <Image
              src={image1}
              alt="Picture of the author"
              width={100}
              height={100}
            />
            <h3 className="py-4">
              <span className=" font-bold">Streamlined</span> online ordering
            </h3>
            <p>
              Get accurate next-day pricing for any repair online – then book
              with a click!
            </p>
          </div>
          <div className="text-center p-2">
            <Image
              src={image1}
              alt="Picture of the author"
              width={100}
              height={100}
            />
            <h3 className="py-4">
              <span className=" font-bold">Fully coordinated </span>from start
              to finish
            </h3>
            <p>
              You get a dedicated coordinator who manages every detail and keeps
              your project on track.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nuur2;
