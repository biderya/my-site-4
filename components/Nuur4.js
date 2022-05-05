import image1 from "../public/feature-1.webp";
import Image from "next/dist/client/image";
function Nuur4() {
  const cartList = [
    {
      name: "Get an Online Estimate",
      path: "Simply upload your inspection report PDF or provide your repair list. We’ll send accurate pricing right to your email.",
      img:  "/feature-1.webp",
      number: "01",
      bgColor: "bg-[#CEF0FF]",
    },
    {
      name: "Modify & Book",
      path: "Your estimate is an online shopping cart. Remove repairs you don’t wish to complete, then book your project with a click.",
      img:  "/feature-2.webp",
      number: "02",
      bgColor: "bg-[#FFD874]",
    },
    {
      name: "We Coordinate Everything",
      path: "After you book, your Success Manager assembles your repair team. From there, they'll make sure your project stays on track.",
      img: "/feature-3.webp",
      number: "03",
      bgColor: "bg-[#CBFCEA]",
    },
    {
      name: "Get Guaranteed Quality Repairs",
      path: "Our skilled Pros complete your repairs on time. Their work is backed by our one-year warranty.",
      img:  "/feature-1.webp",
      number: "04",
      bgColor: "bg-[#99EDF8]",
    },
  ];
  return (
    <>
      <div>
        <section data-layout="Process" className="pb-[107px]">
          <div className=" ">
            <div className="container">
              <div className="container lg:grid grid-cols-12 space-y-12 lg:space-y-0">
                <div className="col-span-6 relative">
                  <div className="sticky top-[16vh] lg:pr-12 space-y-7">
                    <div className=" h-[50vh]">
                      <h1 className="">
                        <span className="font-bold">
                          Our simple process works the same way
                        </span>{" "}
                        every single time
                      </h1>
                      <p className="py-10 w-2/3 text-lg">
                        Get consistent results, regardless of the home, the
                        project or the circumstances.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-5 col-start-8">
                  <div className="relative space-y-[20vh] py-20">
                  {cartList.map((link, index) => (
                    <div key={index} className="sticky text-center  top-[120px] lg:top-[16vh]">
                      <div className={`${link.bgColor} min-h-[450px] rounded-lg`}>
                        <div className="w-full">
                          <div className=" absolute p-3 m-3 rounded-3xl right-0 bg-black text-white">
                            <span>{link.number}</span>
                          </div>
                        </div>
                        <div className="py-[25%]">
                          <Image
                            src={link.img}
                            alt="Picture of the author"
                            width={100}
                            height={100}
                          />
                          <h2>{link.name}</h2>
                          <p className=" px-10">
                            {link.path}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Nuur4;
