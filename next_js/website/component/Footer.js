import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="container-fluid navbar-color">
          <div className="container d-flex justify-content-between align-items-center pb-4 pt-4 me-5">
            <div className="p-2 bd-highlight ">
              <Image
                src="/raghu.png"
                alt="raghu"
                className="me-2  ms-1 "
                width={70}
                height={60}
              />
              <span className="text-white fs-3 fw-bold "> raaghu</span>
            </div>

            <div className="d-flex align-items-center gap-3  me-5">
              <div className="social-bg">
                <a href="#">
                  <Image src="/YouTubeLogo.png"
                  alt="youtubelogo"
                  width={35} height={35} />
                </a>
              </div>
              <div className="social-bg">
                <a href="#">
                  <Image src="/ViewLogo.png" 
                  alt="viewlogo"
                  width={35} height={35} />
                </a>
              </div>
              <div className="social-bg">
                <a href="#">
                  <Image src="/LinkdinLogo.png" 
                  alt="linkdin"
                  width={35} height={35} />
                </a>
              </div>
              <div className="social-bg">
                <a href="#">
                  <Image src="/CatLogo.png" 
                  alt="catlogo"
                  width={35} height={35} />
                </a>
              </div>
              <div className="social-bg">
                <a href="#">
                  <Image src="/TwitterLogo.png" 
                  alt="twitter"
                  width={35} height={35} />
                </a>
              </div>
            </div>
          </div>

          <div className="row g-0 text-justify">
            <div className=" mr-5 col-5 col-md-5 text-start d-flex justify-content-around ">
              <div className="d-flex flex-column bd-highlight ms-5">
                <div className="p-2 bd-highlight">
                  <Image
                    src="/smallLocation.png"
                    alt="smalllocation"
                    className="me-2"
                    width={10}
                    height={10}
                  />
                  <span className="navbar-font-size color ">contact@raaghu.io</span>
                </div>
                <div className="p-2 bd-highlight">
                  <Image
                    src="/SmallView.png"
                    className="me-2"
                    alt="smallview"
                    width={10}
                    height={10}
                  />
                  <span className="navbar-font-size color ">USA:</span>
                  <div className="navbar-font-size color ms-3">
                    5201 Great America Parkway, suite #320, Santa Clara, CA
                    <div className="text-break"> 95054</div>
                  </div>
                </div>

                <div className="p-2 bd-highlight">
                  <Image
                    src="/SmallView.png"
                    alt="smallview"
                    className="me-2"
                    width={10}
                    height={10}
                  />
                  <span className="navbar-font-size color">India: </span>
                  <div className="navbar-font-size color ms-3">
                    2101, Sadashiv Peth, Pune, Maharashtra 411030
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-3 col-md-1"></div>

            <div className="col-sm-2 col-md-5 ms-4">
              <div className="flex-row mb-3 text-white d-flex justify-content-evenly">
                <div className="p-2 lh-lg ">
              
                  <h6 className="pb-1 ">Our Partners</h6>
                  <div className="footer-line-height">
                  <div className="navbar-font-size color ">Volosoft</div>
                  <div className="navbar-font-size color">Microsoft</div>
                  <div className="navbar-font-size color">ABP.iO</div>
                  <div className="navbar-font-size color">ASP.Net Zero</div>
                </div>
                </div>
                <div className="p-1 lh-lg">
                <div className="footer-line-height">
                  <h6 className="pb-1 ">Frameworks</h6>
                  <div className="navbar-font-size color">Angular</div>
                  <div className="navbar-font-size color">React</div>
                </div>
</div>
                <div className="p-1 lh-lg">
                  <h6 className="pb-1">Products</h6>
                  <div className="footer-line-height">
                  <div className="navbar-font-size color">Pricing</div>
                  <div className="navbar-font-size color">Get A Quote</div>
                  <div className="navbar-font-size color">Releases</div>
                </div>
</div>
                <div className="p-2 lh-lg">
                  <h6 className="pb-1">Resources</h6>
                  <div className="footer-line-height">
                  <div className="navbar-font-size color">Documentation</div>
                  <div className="navbar-font-size color">Privacy Policy</div>
                  <div className="navbar-font-size color">Terms & conditions</div>
                  <div className="navbar-font-size color">FAQ</div>
                </div>
                </div>
              </div>

         
            </div>
            <div className="container">
              <div className=" row py-1 align-items-center border-bottom border-opacity-50 border-1">
                <div className="col copyright text-center text-white navbar-font-size align-items-center border-top border-opacity-50 border-1 pt-3">
                  <div className="mb-0 pt-1">
                    <h4 className="navbar-font-size color">
                      © 2022 WAi Technologies initiative. All rights Reserved
                    </h4>
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

export default Footer;
