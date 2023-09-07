export const Products = () => {
  return (
    <section className="h-screen text-white px-[60px] py-10">
        <p className="text-center text-[32px] font-semibold">Our Product</p>
        <div className="pt-10 flex mx-16 grid-flow-col gap-6 font-rubik justify-center">
            <div className="w-1/2 flex flex-col gap-6">
                <div className="flex flex-grow relative flex-row items-center bg-white px-10 py-12 gap-6 rounded-3xl">
                    <img className="w-[60px] h-[60px]" src="/assets/icons/phone.svg"/>
                    <div className="text-black">
                        <p className="text-2xl font-medium">Mobile Apps</p>
                        <p className="font-roboto text-semidark font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <img className="top-1/4 relative" width={20} src="/assets/icons/arrow.svg" alt="arrow"/>
                </div>

                <div className="flex relative flex-row items-center shrink bg-transparent mt-4 mx-4 px-10 py-12 gap-6 rounded-3xl border-[1.5px] border-white">
                    <img className="w-[60px] h-[60px]" src="/assets/icons/computer.svg"/>
                    <div className="">
                        <p className="text-2xl font-medium">Website</p>
                        <p className="font-roboto font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <img className="top-1/4 relative" width={20} src="/assets/icons/arrow.svg" alt="arrow"/>
                </div>
            </div>

            <div className="w-1/2 p-10 gap-8 bg-white rounded-3xl text-center flex flex-col">
                <div className="flex flex-row justify-center">
                    <img src="assets/images/mockup.png" className="w-14"/>
                    <img src="assets/images/mockup.png" className="w-14"/>
                    <img src="assets/images/mockup.png" className="w-14"/>
                </div>
                <div className="text-black">
                    <p className="text-[32px] mb-2 font-medium">Mobile Apps</p>
                    <p className="text-center text-base font-normal text-semidark leading-[20.8px]">Mobile apps Android dan iPhone sekaligus, buat aplikasi dengan fitur sesuka anda. Bisa untuk aplikasi transaksi jual beli, Aplikasi kasir, Aplikasi Informasi, maupun Aplikasi chat dengan fitur GPS.</p>
                </div>
                <div>
                    <button className="bg-btn py-[11px] px-[24px] shrink rounded-lg drop-shadow-fit">Pelajari Selengkapnya</button>
                </div>
            </div>
        </div>
    </section>
  )
}
