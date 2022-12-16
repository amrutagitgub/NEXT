import Image from "next/image";

const Stand_Behind = () => {
  return (
    <>
      <div className="container">
      <div className="container text-center">
  <div className="row">
    <div className="col-md-6">
      <div className="pt-4">
    <h1 className="fs-3 fw-bold text-start pt-5">We stand behind our</h1>
    <p className="text-break fs-3 fw-bold text-start pb-4 lh-1">Components</p>
      
      
        <div className="lh-1 pb-4 text-start text-muted">
          <p className="line-height">
            Purpose built platform to increase user adoption from the ground
          </p>
          <p className="line-height">by involving designers, developers and businesses to get into</p>
          <p className="line-height">action at every stage to build a future ready modern web app. </p>
          <p className="line-height">Host Raaghu design system for your product and facilitate</p>
          <p className="line-height">persona-based user flows, product demos & tour.</p>
        </div>
        <div className="pb-5 text-start">
          <button
            className="button-gradient  border-gradient-purple  navbar-color background-white-color"
            type="button"
          >
            Start Free Trial
          </button>
        </div>
    </div>
    </div>
    <div className="col-md-6">
    <div>
        <Image
                src="/componants.png"
                className="pb-5 pt-5 img-fluid"
                alt="componant"
                width={600}
                height={600}
              />
        </div> 
    </div>
  </div>
</div>
       
      </div>
    </>
  );
};

export default Stand_Behind;
