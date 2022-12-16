import Image from "next/image";

const Banner = () => {
  return (
    <>
      <section className="clr">
        <div className="container">
          <div className="row d-flex align-items-center pt-5">
            <div className="col-md-5">
              <h1 className="fw-bold gredient banner-text pt-5">
                micro frontend
              </h1>
              <h2 className=" fw-bold example pb-3">design system</h2>
              <p className="text-white  pb-2 fs-5 ">
                For modern web applications
              </p>

              <button
                className="btn-cta  btn-success rounded-0 text-white grd navbar-font-size button-size "
                type="button"
              >Start Free trial
              
              </button>
    
              <a
                href="p-2 navbar-font-size"
                className="link-btn color mx-lg-5 ms-4 "
              >
                Our Story
              </a>

              <p className="text-white pt-4 text-start mt-5 pb-2 fs-5">
                Our Frameworks
              </p>




              <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight">
  <svg width="28.861" height="31" viewBox="0 0 28.861 31">
                    <g id="angular_solidBlack" transform="translate(-31.9 -30)">
                      <path
                        id="Path_131113"
                        data-name="Path 131113"
                        d="M108,100.84h5.27l-2.635-6.34Z"
                        transform="translate(-64.304 -54.502)"
                        fill="#fff"
                      />
                      <path
                        id="Path_131114"
                        data-name="Path 131114"
                        d="M46.33,30h0L31.9,35.146l2.2,19.081L46.33,61h0L58.56,54.227l2.2-19.081Zm9.006,23.653H51.973l-1.813-4.526H42.5l-1.813,4.526H37.325L46.33,33.425h0l9.006,20.228Z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                  <span className="fs-6 ms-2 navbar-font-size color">Angular</span>
  </div>
  <div className="pt-3">
    
  <div class="p-2 bd-highlight border-end border-opacity-25 border-light h-auto pt-3">

  </div>
  </div>
  <div class="p-2 bd-highlight ms-3">
  <svg width="30.33" height="32.366" viewBox="0 0 30.33 32.366">
                    <g id="React-icon" transform="translate(11.5 12.309)">
                      <circle
                        id="Ellipse_8216"
                        data-name="Ellipse 8216"
                        cx="2.733"
                        cy="2.733"
                        r="2.733"
                        transform="translate(0.932 1.141)"
                        fill="#a0a0a0"
                      />
                      <g
                        id="Group_172960"
                        data-name="Group 172960"
                        transform="translate(-11 -11.626)"
                      >
                        <ellipse
                          id="Ellipse_8217"
                          data-name="Ellipse 8217"
                          cx="14.665"
                          cy="5.599"
                          rx="14.665"
                          ry="5.599"
                          transform="translate(0 9.901)"
                          fill="none"
                          stroke="#a0a0a0"
                          strokeWidth="1"
                        />
                        <ellipse
                          id="Ellipse_8218"
                          data-name="Ellipse 8218"
                          cx="14.665"
                          cy="5.599"
                          rx="14.665"
                          ry="5.599"
                          transform="translate(12.182 0) rotate(60)"
                          fill="none"
                          stroke="#a0a0a0"
                          strokeWidth="1"
                        />
                        <ellipse
                          id="Ellipse_8219"
                          data-name="Ellipse 8219"
                          cx="14.665"
                          cy="5.599"
                          rx="14.665"
                          ry="5.599"
                          transform="translate(26.847 5.599) rotate(120)"
                          fill="none"
                          stroke="#a0a0a0"
                          strokeWidth="1"
                        />
                      </g>
                    </g>
                  </svg>
                  <span className="fs-6 ms-2 navbar-font-size color">React</span>
  </div>
</div>










              {/* <div className="row">
                <div className="col-md-3 text-white">
                  <svg width="28.861" height="31" viewBox="0 0 28.861 31">
                    <g id="angular_solidBlack" transform="translate(-31.9 -30)">
                      <path
                        id="Path_131113"
                        data-name="Path 131113"
                        d="M108,100.84h5.27l-2.635-6.34Z"
                        transform="translate(-64.304 -54.502)"
                        fill="#fff"
                      />
                      <path
                        id="Path_131114"
                        data-name="Path 131114"
                        d="M46.33,30h0L31.9,35.146l2.2,19.081L46.33,61h0L58.56,54.227l2.2-19.081Zm9.006,23.653H51.973l-1.813-4.526H42.5l-1.813,4.526H37.325L46.33,33.425h0l9.006,20.228Z"
                        fill="#fff"
                      />
                    </g>
                  </svg>
                  <span className="fs-6 ms-2 navbar-font-size ">Angular</span>
                  
                </div>
              

                <div className="col-md-4 text-white ms-4">
                <div className="border-end border-opacity-25 border-light h-50"></div>
                  <svg width="30.33" height="32.366" viewBox="0 0 30.33 32.366">
                    <g id="React-icon" transform="translate(11.5 12.309)">
                      <circle
                        id="Ellipse_8216"
                        data-name="Ellipse 8216"
                        cx="2.733"
                        cy="2.733"
                        r="2.733"
                        transform="translate(0.932 1.141)"
                        fill="#a0a0a0"
                      />
                      <g
                        id="Group_172960"
                        data-name="Group 172960"
                        transform="translate(-11 -11.626)"
                      >
                        <ellipse
                          id="Ellipse_8217"
                          data-name="Ellipse 8217"
                          cx="14.665"
                          cy="5.599"
                          rx="14.665"
                          ry="5.599"
                          transform="translate(0 9.901)"
                          fill="none"
                          stroke="#a0a0a0"
                          strokeWidth="1"
                        />
                        <ellipse
                          id="Ellipse_8218"
                          data-name="Ellipse 8218"
                          cx="14.665"
                          cy="5.599"
                          rx="14.665"
                          ry="5.599"
                          transform="translate(12.182 0) rotate(60)"
                          fill="none"
                          stroke="#a0a0a0"
                          strokeWidth="1"
                        />
                        <ellipse
                          id="Ellipse_8219"
                          data-name="Ellipse 8219"
                          cx="14.665"
                          cy="5.599"
                          rx="14.665"
                          ry="5.599"
                          transform="translate(26.847 5.599) rotate(120)"
                          fill="none"
                          stroke="#a0a0a0"
                          strokeWidth="1"
                        />
                      </g>
                    </g>
                  </svg>
                  <span className="fs-6 ms-2 navbar-font-size">React</span>

                  <div className="ms-4">
                    <div className="ms-3 lh-1">
                      <span
                        className="badge background-color-purple small-font-size"
                      
                      >
                        Coming Soon
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-md-7">
              <Image
                src="/boys.png"
                className="banner-image"
                alt="banner"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
