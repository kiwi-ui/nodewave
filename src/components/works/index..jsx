export const Works = () => {
  return (
    <section className="px-[60px] py-10 text-white">
        <p className="text-[32px] font-semibold leading-normal text-center mb-9">Our Works</p>
        <div className="flex flex-row gap-7 overflow-hidden">
            <div className="flex flex-row items-center gap-5 bg-rayu px-4">
                <img className="rounded-[10px] h-2/4" src="assets/images/thumbnailrayu.png" alt="rayu motor"/>
                <div>
                    <p className="font-semibold text-[32px] leading-[48px] text-center">Rayu Motor</p>
                    <p className="text-xl">AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales</p>
                </div>
            </div>

            <div className="flex flex-row items-center gap-5 bg-jasa bg-no-repeat bg-cover px-4">
                <img className="rounded-[10px] h-2/4" src="assets/images/jasa.png" alt="rayu motor"/>
                <div>
                    <p className="font-semibold text-[32px] leading-[48px] text-center">Rayu</p>
                    <p className="text-xl">AC Service Workshop that has implemented online registration to make it easier for consumers, mechanics, and sales</p>
                </div>
            </div>
        </div>
    </section>
  )
}
