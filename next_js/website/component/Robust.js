import Image from "next/image";

const Robust = () => {
  return (
    <>
         <div className="container">
      <div className="container text-center">
  <div className="row">
    <div className="col-md-6">
    <div>
    <Image
                src="/platform.png"
                className="pb-5 pt-5 img-fluid"
                alt="platform"
                width={500}
                height={500}
              ght={600}
              />
        </div>
   
    </div>
    <div className="col-md-6">
       <div className="pt-4">
    <h1 className="fs-3 fw-bold text-start pt-5">Built on a robust tech stack </h1>
    <p className="text-break fs-3 fw-bold text-start pb-4 lh-1">and platform</p>
      
      
        <div className="lh-1 pb-4 text-start text-muted">
          <p className="line-height">
          Built using Angular 8, SASS, Gatsby, StorybookJS and Chartjs. 
          </p>
          <p className="line-height">Providing robustness while still being cutting edge in technology.</p>
          <p className="line-height">Supporting ASP Net Zero as well as ABP io out of the box, with many </p>
          <p className="line-height">other integrations coming in the future.</p>
         
        </div>
        <div className="text-start pb-5  spacing-banner me-5">
        <button
          className="btn-cta rounded-0 text-white grd border border-0"
          type="button"
        >
          <label className="font-size button-size text-white ms-3 me-3 ">
          Learn More
          </label>
        </button>
      </div>
    </div>
    </div>
  </div>
</div>
 </div>
 
    </>
  );
};

export default Robust;
