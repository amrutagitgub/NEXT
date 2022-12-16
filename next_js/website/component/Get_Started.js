import Image from "next/image";

const Get_Started = () => {
  return <>

<div className="container-fluid text-center pt-5 bg-color margin-Top ">
    <div className="container">
  <div className="row">
    <div className="col">
    <h1 className="fs-1 text-start fw-bold text-white pb-3 pt-5">Ready to get started?</h1>
    <p className="text-white text-start lh-1 ">Request a demo or talk to our technical sales team to answer</p>
    <p className="text-white text-start line-height "> your questions.</p>

     <div className="pb-5 text-start pt-5">
          <button
            className="button-border color navbar-font-size  text-start border-gradient-purple transparent-color navbar-color"
            type="button"
          >
          &nbsp; Enter Email address
          </button>
          <button
          className="btn-cta rounded-0 text-white grd border border-0"
          type="button"
        >
          <label className="font-size button-size text-white ms-3 me-3 pb-2">
          Request Demo
          </label>
        </button>
        </div>
    </div>
    <div className="col">
    <div>
        <Image
                src="/play.png"
                className="pb-5 top-margin img-fluid "
                alt="play"
                width={600}
                height={500}
              />
        </div> 
    </div>
  </div>
</div>
</div>







  </>
  };

  export default Get_Started;