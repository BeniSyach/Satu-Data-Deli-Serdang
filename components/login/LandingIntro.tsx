import TemplatePointers from "./TemplatePointers";

function LandingIntro() {
  return (
    <div className="hero min-h-full rounded-l-xl bg-base-200">
      <div className="hero-content py-12">
        <div className="max-w-md">
          <h5 className="text-xl text-center font-bold ">
            {/* <img
              src="/assets/image/deliserdang.svg"
              className="w-20 inline-block mr-2 mask mask-circle"
              alt="dashwind-logo"
            /> */}
            Login Satu Indonesia Data Kabupaten Deli Serdang
          </h5>

          <div className="text-center mt-12">
            <img
              src="/assets/image/intro.png"
              alt="Dashwind Admin Template"
              className="w-48 inline-block"
            ></img>
          </div>

          {/* Importing pointers component */}
          {/* <TemplatePointers /> */}
        </div>
      </div>
    </div>
  );
}

export default LandingIntro;
