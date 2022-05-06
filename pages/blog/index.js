function Blog() {
  return (
    <div className="bg-orange-900">
      <div className="container flex justify-evenly  ">
        <div className="flex items-center min-h-screen">
          <div className="flex flex-wrap justify-center">
            <div className="card-zoom">
              <div className="card-zoom-image bg-beetle" />
              <h1 className="card-zoom-text">BEETLE</h1>
            </div>
            <div className="card-zoom">
              <div className="card-zoom-image bg-fiat" />
              <h1 className="card-zoom-text">FIAT</h1>
            </div>
            <div className="card-zoom">
              <div className="card-zoom-image bg-van" />
              <h1 className="card-zoom-text">VAN</h1>
            </div>
            <div className="card-zoom">
              <div className="card-zoom-image bg-mini" />
              <h1 className="card-zoom-text">MINI</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
