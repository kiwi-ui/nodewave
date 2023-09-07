export const Hero = () => {
  return (
    <>
      <section className="h-screen flex items-center text-white px-[60px] bg-hero bg-auto">
          <div className="mt-20">
              <img className="w-[30px] h-[30px] -rotate-[14.38] ms-3" src="/assets/icons/bracket.svg" alt="code"/>
              <div className="ps-[33px]">
                <p className="text-5xl/[72px]">Make Your Own <br/>Website and Mobile Application <br/> With Nodewave <img className="inline w-[50px] h-[50px] -rotate-[13.72]" src="/assets/icons/idea.svg" alt="idea"/></p>
                <button className="text-xl font-semibold ms-[6px] bg-btn p-[10px] rounded-[41px] leading-normal mt-4">Get Started Now</button>
                <p className="mt-[31px]">Create Mobile Applications and Websites for Companies or Your Business <br/>Have a transparent pricing, easy and straightforward development process</p>
              </div>
          </div>
      </section>
    </>
  )
}
