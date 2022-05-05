import Image from "next/image";

function Nuur5() {
  return (
    <>
      <div className="container content-center min-h-[450px] grid md:grid-cols-2">
        <div className="text-white container px-5">
          <h2 className="text-center py-5 text-3xl font-medium">Found a better price? We’ll beat it!</h2>
          <p className="text-center font-semibold md:text-left">
            We’re confident that we offer the best repair value. To ensure it,
            we’ll not only match qualifying quotes from licensed contractors —
            we’ll take off an extra 10%
          </p>
          <div className="text-center py-10"> <button className=" border-b-2 border-blue-800" >Learn more</button></div>
         
        </div>
        <div>
          <Image
            src={"/better-price.webp"}
            alt="Picture of the author"
            width={500}
            height={300}
          />
        </div>
      </div>
    </>
  );
}

export default Nuur5;
