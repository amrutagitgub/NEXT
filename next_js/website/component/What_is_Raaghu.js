import Image from "next/image";

const What_is_Raaghu = () => {
  return (
    <>

<h1 className="text-center pt-2 pb-4 fs-2 fw-bold spacing-banner-top">What is Raaghu?</h1>
      <div className="container text-center pt-5">
        <div className="row">
          <div className="col-md-6">
            <Image
              src="/bird.png "
              className="birds img-fluid pb-5 pt-5"
              alt="bird"
              width={400}
              height={400}
            />
          </div>

          <div className="col-md-6 text-start">
            <div className="col-md-8">
              <div className="d-flex flex-column bd-highlight mb-3">
                <div className="p-2 bd-highlight ">
                  <Image src="/logo.png " 
                  alt="logo"
                  width={40} height={40} />
                  <h5 className="pt-3 fs-5 ">
                      Design System & Component Library
                  </h5>
                  <div>
                    
                  <div className="font-size color pb-4 ">
                    Ready to use templates for ASP.Net and ABP frameworks. Fully
                    customisable 
                  <div>with the help of our Adobe XD and Figma design Kits.</div> 
                
                 
                  </div>
                  </div>
                </div>
                <div className="p-2 bd-highlight">
                  <Image src="/logo2.png "
                  alt="logo1"
                  width={40} height={40} />
                  <h5 className="pt-3 fs-5">
                  Micro-Front End Architecture
                  </h5>
                  <div>
                  <div className="font-size color pb-4">
                    With more than 60+ elements, components for Angular, Raaghu
                    offers a wide array catering to your Ui requirements.
                  </div>
                  
</div>
                </div>
                <div className="p-2 bd-highlight">
                  <Image src="/logo3.png "
                   alt="logo2"
                  width={40} height={40} />
                  <h5 className="txt pt-3 fs-5">
                  Cloud Hosted Portal & Staging Apps
                  </h5>
                  <div>
                  <div className="font-size color pb-5">
                    A crafted component library for building professional angular based
                     applications
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>

);
};

export default What_is_Raaghu;
