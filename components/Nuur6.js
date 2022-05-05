import Image from "next/image";

function Nuur6() {
  const cartList = [
    {
      name: "Estimates",
      path: "Get accurate pricing sent right to your inbox. 100% online.",
      img: "/feature-1.webp",
      bgColor: "hover:bg-[#CEF0FF]",
    },
    {
      name: "Repairs",
      path: "Quality repairs completed by our on-demand network of skilled trades.",
      img: "/feature-2.webp",
      bgColor: "hover:bg-[#FFD874]",
    },
    {
      name: "Renovations",
      path: "Transform your house into a home, without the hassle.",
      img: "/feature-3.webp",
      number: "03",
      bgColor: "hover:bg-[#CBFCEA]",
    },
    {
      name: "Inspections",
      path: "Order a professional inspection from our marketplace.",
      img: "/feature-1.webp",
      number: "04",
      bgColor: "hover:bg-[#99EDF8]",
    },
  ];
  return (
    <>
      <div className=" py-44">
        <div className="container">
          <h1 className="text-center">
            Everything you need,{" "}
            <span className=" font-medium">under one roof</span>{" "}
          </h1>
          <div className=" p-24 grid md:grid-cols-2 content-evenly gap-6">
            {cartList.map((link, index) => (
              <div
                key={index}
                className={`bg-contain  w-full text-center py-[30%] bg-slate-100 rounded-xl hover:bg-cart-image ${link.bgColor} group-hover:opacity-100 transition-opacity duration-300 ease-in-out`}
              >
                <div>
                  <Image
                    src={link.img}
                    alt="Picture of the author"
                    width={100}
                    height={100}
                  />
                  <h2>{link.name}</h2>
                  <p className=" px-10">{link.path}</p>
                  <button className=" border-b-2 border-blue-800">
                    learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Nuur6;
