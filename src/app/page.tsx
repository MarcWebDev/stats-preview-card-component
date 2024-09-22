import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[100vw] min-h-[100vh] flex items-center justify-center">
      <div className="bg-[#1B1937] w-[calc(100vw-165px-165px)] max-[1100px]:w-[calc(100vw-50px-50px)] max-[750px]:my-[88px] max-[750px]:w-[calc(100vw-48px)] min-h-[446px] rounded-lg relative overflow-hidden">
          <div className="top-0 right-0 absolute overflow-hidden w-[calc((100vw-165px-165px)/2)] max-[1100px]:w-[calc((100vw-100px)/2.25)] max-[750px]:w-full max-[750px]:h-[250px] h-full">
              <div className="desktop-image-mask absolute"></div>
              <Image src={"/image-header-desktop.jpg"} alt={"Image Header"} width={600} height={200} className={"w-full h-full object-cover desktop-image"} />
          </div>

          <div className="max-[750px]:mt-[300px]">
              <h1 className="mt-[70px] ml-[70px] max-[750px]:text-[28px] max-[750px]:w-[calc((100vw-48px)-64px)] max-[750px]:mx-8 max-[750px]:text-center max-[750px]:leading-[32px] w-[calc((100vw-165px-165px)/2-70px-70px)] max-[1100px]:w-[calc((100vw-100px)/2-30px-30px)] text-white text-[36px] font-bold leading-[44px]">Get <span className="text-[#AB5CDB]">insights</span> that help your business grow.</h1>
              <p className="text-white opacity-75 max-[750px]:w-[calc((100vw-48px)-64px)] max-[750px]:mx-8 max-[750px]:text-center w-[calc((100vw-165px-165px)/2-70px-70px)] max-[1100px]:w-[calc((100vw-100px)/2-30px-30px)] text-[15px] ml-[70px] mt-[25px] leading-[25px]">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>

              <div className="flex items-center mt-[70px] mb-8 ml-[70px] max-[750px]:ml-0 w-[calc((100vw-165px-165px)/2-70px-70px)] max-[1100px]:w-[calc((100vw-100px)/2-30px-30px)] justify-between max-[750px]:flex-col max-[750px]:w-[calc(100vw-48px)]">
                  <div className="max-[750px]:w-[calc(100vw-48px)] max-[750px]:flex max-[750px]:flex-col max-[750px]:items-center max-[750px]:mb-6">
                      <h3 className="text-white text-[24px] leading-normal font-bold">10k+</h3>
                      <h4 className="text-white opacity-60 lexend-deca text-[12px] leading-[25px] tracking-[1px] font-normal">COMPANIES</h4>
                  </div>
                  <div className="max-[750px]:w-[calc(100vw-48px)] max-[750px]:flex max-[750px]:flex-col max-[750px]:items-center max-[750px]:mb-6">
                      <h3 className="text-white text-[24px] leading-normal font-bold">314</h3>
                      <h4 className="text-white opacity-60 lexend-deca text-[12px] leading-[25px] tracking-[1px] font-normal">TEMPLATES</h4>
                  </div>
                  <div className="max-[750px]:w-[calc(100vw-48px)] max-[750px]:flex max-[750px]:flex-col max-[750px]:items-center max-[750px]:mb-6">
                      <h3 className="text-white text-[24px] leading-normal font-bold">12M+</h3>
                      <h4 className="text-white opacity-60 lexend-deca text-[12px] leading-[25px] tracking-[1px] font-normal">QUERIES</h4>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
