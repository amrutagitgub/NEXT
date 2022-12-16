import Image from "next/image";

const Great_UI = () => {
  return (
    <>
    <div className="background-white-color">
      <div className="pt-4">
      <h2 className="fw-bold text-center pt-5 pb-1">
        Everything you need for great ui
      </h2> 
      </div>
      <div className="text-center fs-5 pt-4 me-lg-0 pe-lg-0 sm-me-0 sm-px-0 here-out lh-1 fs-6">
        <p className="line-height">Raaghu iO for Angular delivers components to meet all app </p>
        <p className="line-height">requirements for data handling, performance, UX, design, </p>
        <p className="line-height">
          accessibility, and so much more. Here is just some of what Raaghu UI{" "}
        </p>
        <p>for Angular can do.</p>
      </div>
      <div className="text-center pt-4 pb-5 ms-5 spacing-banner me-5">
        <button
          className="btn-cta rounded-0 text-white grd border border-0"
          type="button"
        >
          <label className="font-size button-size text-white ms-3 me-3 ">
            View Demo
          </label>
        </button>
      </div>
      <div className="text-center">
      <Image
                    src="/Component.png"
                    className=" ms-5 img-fluid"
                    alt="component"
                    width={800}
                    height={600}
                  />
                  </div>
                  </div>
                
    </>
  );
};

export default Great_UI;
