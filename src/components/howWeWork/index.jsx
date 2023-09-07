import React from 'react'

export const HowWeWork = () => {
  return (
    <section className="mt-[30px] mb-[37px] h-max px-[60px] py-10 bg-gradientImg bg-no-repeat bg-cover">
            <div className="flex flex-col">
                <p className="text-center text-[32px] font-semibold text-white mb-16">How We Works</p>
                <div className="p-[30px] flex flex-row bg-gradientImgBlack bg-cover bg-no-repeat gap-[50px] w-3/4 rounded-[10px]">
                    <img src="/assets/images/chat.png" alt="chat"/>
                    <div className="text-white">
                        <p className="text-xl font-semibold mb-[13px]">Estimate</p>
                        <p class="text-xl font-normal flex-wrap">Estimate the cost of creating your application with us. Pricing is transparent at the start with a gradual payment method.</p>
                    </div>
                </div>
            </div>
    </section>
  )
}
