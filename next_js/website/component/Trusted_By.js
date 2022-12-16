import Image from "next/image";

const Trusted_By = () => {
  return (
    <>
      <div className="container-fluid text-center text-white navbar-color pb-5 align-item-center ">
        <div className="container text">
          <div className="row">
            <h3 className="pb-5 fw-bold ">Trusted by</h3>

            {/* <div className="row mx-5 px-5 ">
              <div className="col-3 ">
                <div className="mt-2 img1">
                  <Image
                    src="/inTimePro.png"
                    className="img-fluid "
                    alt="intimepro"
                    width={130}
                    height={25}
                  />
                </div>
                <div className="-right vr "></div>
              </div>

              <div className="col-3">
                <div className="mt-2 img1">
                  <Image
                    src="/HireTechTeam.png"
                    className="img-fluid"
                    alt="hiretechteam"
                    width={90}
                    height={60}
                  />
                </div>
                <div className="border-right vr"></div>
              </div>

              <div className="col-md-3">
                <div className="mt-2 img1">
                  <Image
                    src="/aribalogo.png"
                    className="pb-3 img-fluid"
                    alt="aribalogo"
                    width={130}
                    height={55}
                  />
                </div>
                <div className="border-right vr"></div>
              </div>

              <div className="col-md-3">
                <div className="mt-2 img1">
                  <Image
                    src="/doohclicklogo.png"
                    className="pb-3 img-fluid"
                    alt="doohclicklogo"
                    width={130}
                    height={50}
                  />
                </div>
                <div className=""></div>
              </div>
            </div> */}
         
              <div className="col-md-3  border-end border-opacity-25 border-light h-50">
                <Image
                    src="/inTimePro.png"
                    className="img-fluid "
                    alt="intimepro"
                    width={130}
                    height={25}
                  />
              </div>
              <div className="col-md-3 border-end border-opacity-25 border-light h-50">
              <Image
                    src="/HireTechTeam.png"
                    className="img-fluid"
                    alt="hiretechteam"
                    width={90}
                    height={60}
                  />
              </div>
              <div className="col-md-3 border-end border-opacity-25 border-light h-50">
              <Image
                    src="/aribalogo.png"
                    className="pb-3 img-fluid"
                    alt="aribalogo"
                    width={130}
                    height={55}
                  />
              </div>
              <div className="col-md-3">
              <Image
                    src="/doohclicklogo.png"
                    className="pb-3 img-fluid"
                    alt="doohclicklogo"
                    width={130}
                    height={50}
                  />
              </div>
            
         
        </div>
      </div>
      </div>
    </>
  );
};

export default Trusted_By;
