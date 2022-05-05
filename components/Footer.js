function Footer() {
  return (
    <>
      <div className="bg-nuur5_color">
        <p className=" text-white text-center py-4">
          PunchListUSA is a one-stop solution that makes home{" "}
          <span className=" text-blue-700">repairs</span> and{" "}
          <span className=" text-blue-700">renovations</span> hassle-free.
        </p>
      </div>
      <div className=" container text-white p-20 px-10">
        <div className="grid grid-cols-5 gap-5">
          <ul className=" flex flex-col p-3">
            <li className="py-2">
              <h3>Services</h3>
            </li>
            <li className="py-2">Estimates</li>
            <li className="py-2">Repairs</li>
            <li className="py-2">Renovations</li>
            <li className="py-2">Inspections</li>
          </ul>
          <ul className=" flex flex-col p-3">
            <li className="py-2">
              <h3>Use Cases</h3>
            </li>
            <li className="py-2">Sellers</li>
            <li className="py-2">Buyers</li>
            <li className="py-2">Realtors</li>
            <li className="py-2">Enterprise</li>
          </ul>
          <ul className=" flex flex-col p-3">
            <li className="py-2">
              <h3>Service Area</h3>
            </li>
            <li className="py-2">Atlanta</li>
            <li className="py-2">Austin</li>
            <li className="py-2">Charleston, SC</li>
            <li className="py-2">Charlotte</li>
            <li className="py-2">Dallas</li>
            <li className="py-2">Denver</li>
            <li className="py-2">Nashville</li>
            <li className="py-2">Orlando</li>
            <li className="py-2">Raleigh</li>
            <li className="py-2">Tampa</li>
            <li className="py-2">Washington, DC</li>
          </ul>
          <ul className=" flex flex-col p-3">
            <li className="py-2">
              <h3>Resources</h3>
            </li>
            <li className="py-2">Articles</li>
            <li className="py-2">News</li>
          </ul>
          <ul className=" flex flex-col p-3">
            <li className="py-2">
              <h3>Company</h3>
            </li>
            <li className="py-2">Our</li>
            <li className="py-2">Story</li>
            <li className="py-2">Careers</li>
            <li className="py-2">Contact</li>
            <li className="py-2">Become a Pro</li>
            <li className="py-2">Our Promise</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
