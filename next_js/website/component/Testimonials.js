import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
    };
    return (
      <div className="sider-pb pt-5">
        <h1 className="text-center fw-bold pt-5">Testimonials</h1>
        <div className="text-muted text-center pb-4">
          What they say about us...
        </div>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <div className="mt-5 test">
            <div className="col-md-9 box font-size lh-1 me-2 ms-2 box-width">
              <div className="quote d-flex  justify-content-center position-relative">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.218"
                      x2="0.805"
                      y2="0.874"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stopColor="#4d29cf" />
                      <stop offset="1" stopColor="#b32a90" />
                    </linearGradient>
                    <clipPath id="clipPath">
                      <rect
                        id="Rectangle_149597"
                        data-name="Rectangle 149597"
                        width="28.295"
                        height="22.436"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_189528"
                    data-name="Group 189528"
                    transform="translate(11426 -901.001)"
                  >
                    <circle
                      id="Ellipse_8456"
                      data-name="Ellipse 8456"
                      cx="30"
                      cy="30"
                      r="30"
                      transform="translate(-11426 901.001)"
                      fill="url(#linear-gradient)"
                    />
                    <g
                      id="Group_187461"
                      data-name="Group 187461"
                      transform="translate(-11409.422 919.897)"
                      clipPath="url(#clipPath)"
                    >
                      <path
                        id="Path_169095"
                        data-name="Path 169095"
                        d="M27.5,22.436l.8-1.315Q21.52,17.5,21.52,14.347a1.865,1.865,0,0,1,.558-1.335,8.283,8.283,0,0,1,1.993-1.336A8.839,8.839,0,0,0,27.2,9.3a5.079,5.079,0,0,0,.937-3.128,5.964,5.964,0,0,0-1.793-4.383A5.87,5.87,0,0,0,22.038,0a5.5,5.5,0,0,0-4.563,2.232A9.216,9.216,0,0,0,15.741,8.05a13.337,13.337,0,0,0,1.137,5.419,14.428,14.428,0,0,0,3.367,4.7A23.639,23.639,0,0,0,27.5,22.436m-15.742,0,.8-1.315q-6.774-3.587-6.774-6.774,0-1.355,2.55-2.671A9.423,9.423,0,0,0,11.5,9.285a5.044,5.044,0,0,0,.9-3.109A5.949,5.949,0,0,0,10.58,1.813,5.905,5.905,0,0,0,6.257,0,5.461,5.461,0,0,0,1.734,2.232,9.212,9.212,0,0,0,0,8.05,13.452,13.452,0,0,0,4.463,18.172a17.714,17.714,0,0,0,2.969,2.251,34.177,34.177,0,0,0,4.324,2.012"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </svg>
              </div>

              <div className="text-center ">
                <ul className="list-unstyled lh-base">
                  <li>"The Raaghu team has got the perfect </li>
                  <li> mix of design principles and technology</li>

                  <li>depth that has helped us solve a wide array</li>
                  <li>of business problems."</li>
           
                </ul>
              </div>
              <div className="text-center pt-3">
              <div className="pt-5">
                <Image
                  src="/profile1.png "
                  className="profile-image d-inline mb-2"
                  alt="profile3"
                  width={80}
                  height={130}
                />
                <div className=" pt-2 navbar-font-size">
                  <h6 className="fw-bold text-center ">ANNY JOHN</h6>
                  <ul className="list-unstyled color">
                    <li>Full Stack Developer</li>
                    <li className="lh-lg">XYZ Company</li>
                  </ul>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="col-md-9 box font-size lh-1 me-2 ms-2 box-width ">
              <div className="quote d-flex  justify-content-center position-relative ">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.218"
                      x2="0.805"
                      y2="0.874"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stopColor="#4d29cf" />
                      <stop offset="1" stopColor="#b32a90" />
                    </linearGradient>
                    <clipPath id="clipPath">
                      <rect
                        id="Rectangle_149597"
                        data-name="Rectangle 149597"
                        width="28.295"
                        height="22.436"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_189528"
                    data-name="Group 189528"
                    transform="translate(11426 -901.001)"
                  >
                    <circle
                      id="Ellipse_8456"
                      data-name="Ellipse 8456"
                      cx="30"
                      cy="30"
                      r="30"
                      transform="translate(-11426 901.001)"
                      fill="url(#linear-gradient)"
                    />
                    <g
                      id="Group_187461"
                      data-name="Group 187461"
                      transform="translate(-11409.422 919.897)"
                      clipPath="url(#clipPath)"
                    >
                      <path
                        id="Path_169095"
                        data-name="Path 169095"
                        d="M27.5,22.436l.8-1.315Q21.52,17.5,21.52,14.347a1.865,1.865,0,0,1,.558-1.335,8.283,8.283,0,0,1,1.993-1.336A8.839,8.839,0,0,0,27.2,9.3a5.079,5.079,0,0,0,.937-3.128,5.964,5.964,0,0,0-1.793-4.383A5.87,5.87,0,0,0,22.038,0a5.5,5.5,0,0,0-4.563,2.232A9.216,9.216,0,0,0,15.741,8.05a13.337,13.337,0,0,0,1.137,5.419,14.428,14.428,0,0,0,3.367,4.7A23.639,23.639,0,0,0,27.5,22.436m-15.742,0,.8-1.315q-6.774-3.587-6.774-6.774,0-1.355,2.55-2.671A9.423,9.423,0,0,0,11.5,9.285a5.044,5.044,0,0,0,.9-3.109A5.949,5.949,0,0,0,10.58,1.813,5.905,5.905,0,0,0,6.257,0,5.461,5.461,0,0,0,1.734,2.232,9.212,9.212,0,0,0,0,8.05,13.452,13.452,0,0,0,4.463,18.172a17.714,17.714,0,0,0,2.969,2.251,34.177,34.177,0,0,0,4.324,2.012"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </svg>
              </div>

              <div className="text-center">
                <ul className="list-unstyled lh-base">
                  <li>From the beginning it has been a very</li>
                  <li>professional approach to project </li>
                  <li> development. A dedicated group of </li>
                  <li>professionals for every aspect of your</li>
                  <li>project that make sure goals are reached </li>
                  <li>and milestones achieved.</li>
                </ul>
              </div>
              <div className="text-center pt-3 ">
                <Image
                  src="/profile2.png "
                  className="profile-image d-inline mb-2"
                  alt="profile2"
                  width={80}
                  height={130}
                />
                <div className=" pt-2 navbar-font-size">
                  <h6 className="fw-bold text-center ">ANNY JOHN</h6>
                  <ul className="list-unstyled color">
                    <li>Full Stack Developer</li>
                    <li className="lh-lg">XYZ Company</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="col-md-9 box font-size lh-1 me-2 ms-2 box-width">
              <div className="quote d-flex  justify-content-center position-relative ">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.218"
                      x2="0.805"
                      y2="0.874"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stopColor="#4d29cf" />
                      <stop offset="1" stopColor="#b32a90" />
                    </linearGradient>
                    <clipPath id="clipPath">
                      <rect
                        id="Rectangle_149597"
                        data-name="Rectangle 149597"
                        width="28.295"
                        height="22.436"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_189528"
                    data-name="Group 189528"
                    transform="translate(11426 -901.001)"
                  >
                    <circle
                      id="Ellipse_8456"
                      data-name="Ellipse 8456"
                      cx="30"
                      cy="30"
                      r="30"
                      transform="translate(-11426 901.001)"
                      fill="url(#linear-gradient)"
                    />
                    <g
                      id="Group_187461"
                      data-name="Group 187461"
                      transform="translate(-11409.422 919.897)"
                      clipPath="url(#clipPath)"
                    >
                      <path
                        id="Path_169095"
                        data-name="Path 169095"
                        d="M27.5,22.436l.8-1.315Q21.52,17.5,21.52,14.347a1.865,1.865,0,0,1,.558-1.335,8.283,8.283,0,0,1,1.993-1.336A8.839,8.839,0,0,0,27.2,9.3a5.079,5.079,0,0,0,.937-3.128,5.964,5.964,0,0,0-1.793-4.383A5.87,5.87,0,0,0,22.038,0a5.5,5.5,0,0,0-4.563,2.232A9.216,9.216,0,0,0,15.741,8.05a13.337,13.337,0,0,0,1.137,5.419,14.428,14.428,0,0,0,3.367,4.7A23.639,23.639,0,0,0,27.5,22.436m-15.742,0,.8-1.315q-6.774-3.587-6.774-6.774,0-1.355,2.55-2.671A9.423,9.423,0,0,0,11.5,9.285a5.044,5.044,0,0,0,.9-3.109A5.949,5.949,0,0,0,10.58,1.813,5.905,5.905,0,0,0,6.257,0,5.461,5.461,0,0,0,1.734,2.232,9.212,9.212,0,0,0,0,8.05,13.452,13.452,0,0,0,4.463,18.172a17.714,17.714,0,0,0,2.969,2.251,34.177,34.177,0,0,0,4.324,2.012"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </svg>
              </div>

              <div className="text-center">
                <ul className="list-unstyled lh-base">
                  <li>Raaghu tech team provides a perfect</li>
                  <li>blend of experience and expertise on</li>
                  <li>ASP.Net Zero framework. I recommend</li>
                  <li>their modern DevOps team service that</li>
                  <li>provide great value to ASP.Net Zero</li>
                  <li>customer at every stage</li>
                </ul>
              </div>
              <div className="text-center pt-3 ">
                <Image
                  src="/profile3.png "
                  className="profile-image d-inline mb-2"
                  alt="profile3"
                  width={80}
                  height={130}
                />
                <div className=" pt-2 navbar-font-size">
                  <h6 className="fw-bold text-center ">ANNY JOHN</h6>
                  <ul className="list-unstyled color">
                    <li>Full Stack Developer</li>
                    <li className="lh-lg">XYZ Company</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="col-md-9 box font-size lh-1 me-2 ms-2 box-width">
              <div className="quote d-flex  justify-content-center position-relative ">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <defs>
                    <linearGradient
                      id="linear-gradient"
                      x1="0.218"
                      x2="0.805"
                      y2="0.874"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop offset="0" stopColor="#4d29cf" />
                      <stop offset="1" stopColor="#b32a90" />
                    </linearGradient>
                    <clipPath id="clipPath">
                      <rect
                        id="Rectangle_149597"
                        data-name="Rectangle 149597"
                        width="28.295"
                        height="22.436"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                    </clipPath>
                  </defs>
                  <g
                    id="Group_189528"
                    data-name="Group 189528"
                    transform="translate(11426 -901.001)"
                  >
                    <circle
                      id="Ellipse_8456"
                      data-name="Ellipse 8456"
                      cx="30"
                      cy="30"
                      r="30"
                      transform="translate(-11426 901.001)"
                      fill="url(#linear-gradient)"
                    />
                    <g
                      id="Group_187461"
                      data-name="Group 187461"
                      transform="translate(-11409.422 919.897)"
                      clipPath="url(#clipPath)"
                    >
                      <path
                        id="Path_169095"
                        data-name="Path 169095"
                        d="M27.5,22.436l.8-1.315Q21.52,17.5,21.52,14.347a1.865,1.865,0,0,1,.558-1.335,8.283,8.283,0,0,1,1.993-1.336A8.839,8.839,0,0,0,27.2,9.3a5.079,5.079,0,0,0,.937-3.128,5.964,5.964,0,0,0-1.793-4.383A5.87,5.87,0,0,0,22.038,0a5.5,5.5,0,0,0-4.563,2.232A9.216,9.216,0,0,0,15.741,8.05a13.337,13.337,0,0,0,1.137,5.419,14.428,14.428,0,0,0,3.367,4.7A23.639,23.639,0,0,0,27.5,22.436m-15.742,0,.8-1.315q-6.774-3.587-6.774-6.774,0-1.355,2.55-2.671A9.423,9.423,0,0,0,11.5,9.285a5.044,5.044,0,0,0,.9-3.109A5.949,5.949,0,0,0,10.58,1.813,5.905,5.905,0,0,0,6.257,0,5.461,5.461,0,0,0,1.734,2.232,9.212,9.212,0,0,0,0,8.05,13.452,13.452,0,0,0,4.463,18.172a17.714,17.714,0,0,0,2.969,2.251,34.177,34.177,0,0,0,4.324,2.012"
                        transform="translate(0 0)"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </svg>
              </div>

              <div className="text-center">
                <ul className="list-unstyled lh-base">
                  <li>Raaghu tech team provides a perfect</li>
                  <li>blend of experience and expertise on</li>
                  <li>ASP.Net Zero framework. I recommend</li>
                  <li>their modern DevOps team service that</li>
                  <li>provide great value to ASP.Net Zero</li>
                  <li>customer at every stage</li>
                </ul>
              </div>
              <div className="text-center pt-3 ">
                <Image
                  src="/profile2.png "
                  className="profile-image d-inline mb-2"
                  alt="profile3"
                  width={80}
                  height={130}
                />
                <div className=" pt-2 navbar-font-size">
                  <h6 className="fw-bold text-center ">ANNY JOHN</h6>
                  <ul className="list-unstyled color ">
                    <li>Full Stack Developer</li>
                    <li className="lh-lg">XYZ Company</li>
                    <li className=" slick-dots"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
