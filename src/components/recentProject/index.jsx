export const RecentProject = () => {
  const finishedProject = [
    {
        id: 1,
        icons: '/assets/icons/ecommerce.svg',
        name: 'E-commerce'
    },
    {
        id: 2,
        icons: '/assets/icons/companyprofile.svg',
        name : 'Company Profile'
    },
    {
        id: 3,
        icons: '/assets/icons/cashier.svg',
        name: 'Cashier'
    },
    {
        id: 4,
        icons: '/assets/icons/chat.svg',
        name: 'Chat'
    },
    {
        id: 5,
        icons: '/assets/icons/workshop.svg',
        name: 'Workshop'
    },
    {
        id: 6,
        icons: '/assets/icons/construct.svg',
        name: 'Construct and many others'
    },
  ]
  return (
    <section className="mt-[30px] mb-[37px] h-max px-[60px] py-10 text-white">
        <p className="text-[32px] leading-normal font-semibold text-center ">Applications that can be made</p>
        <div className="flex flex-row mt-[50px] gap-5">
            <div className="basis-5/12">
                <div className="flex flex-row items-center mb-[10px] gap-5">
                    <img src="/assets/icons/listcollapse.svg" width={50} height={50} alt="list" />
                    <p className="text-xl leading-none font-semibold">Online Attendace</p>
                </div>
                <div>
                    <p className="text-base font-normal leading-normal mb-6">With the times, your team may be able to work in the office or outside the office. Get the accuracy of your team's work hours with your own company's special online attendance feature with features such as:</p>
                    <ul className="list-disc relative ms-5">
                        <li>Clock in and Clock Out attendance</li>
                        <li>Face Photo</li>
                        <li>Face Recognition </li>
                        <li>Accurate time stamp down to seconds</li>
                        <li>GPS location of employees</li>
                    </ul>
                </div>
            </div>

            <div className="basis-5/12">
                <div className="flex flex-row items-center mb-[10px] gap-5">
                    <img src="/assets/icons/basketball.svg" width={50} height={50} alt="list" />
                    <p className="text-xl leading-none font-semibold">Sport Center</p>
                </div>
                <div>
                    <p className="text-base font-normal leading-normal mb-6">Create your sports center field booking application. Suitable for futsal, mini soccer, badminton, tennis, golf, basketball, to table tennis. Give your customers the freedom to</p>
                    <ul className="list-disc relative ms-5">
                        <li>Choose a booking schedule</li>
                        <li>Online payments</li>
                        <li>Automatic scheduling system</li>
                        <li>Search for Friends feature </li>
                        <li>Split Payment with team members</li>
                        <li>Information and announcements from you</li>
                    </ul>
                </div>
            </div>

            <div className="basis-5/12">
                <div className="flex flex-row items-center mb-[10px] gap-5">
                    <img src="/assets/icons/book.svg" width={50} height={50} alt="list" />
                    <p className="text-xl leading-none font-semibold">Booking</p>
                </div>
                <div>
                    <p className="text-base font-normal leading-normal mb-6">Offer your services in your own application to place orders to delivery directly to the client's house. Suitable for ac service, cleaning, cleaning service, CCTV, massage, and even other digital services. Features that can be made:</p>
                    <ul className="list-disc relative ms-5">
                        <li>Memilih jenis dan kategori jasa yang dikehendaki </li>
                        <li>Melakukan reservasi online dan pembayaran dengan metode pembayaran digital </li>
                        <li>Penjadwalan dengan tim lapangan </li>
                        <li>Aplikasi khusus untuk tim </li>
                        <li>Promosi dan Kode voucher khusus</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="flex flex-row gap-5 mt-[60px] mb-[100px]">
            {finishedProject.map((project) => (
                <div className="flex flex-row gap-[10px] items-center" key={ project.id }>
                    <img src={project.icons} width={50} height={50} alt={project.name}/>
                    <p className="leading-normal font-semibold">{project.name}</p>
                </div>
            ))}
        </div>

        <div>
            <p className="text-[32px] font-semibold leading-normal text-center mb-[30px]">Start Creating Websites or Mobile Apps For You Now</p>
            <div className="flex flex-row gap-[100px] justify-center">
                <div className="flex flex-row bg-white rounded-[10px] items-center">
                    <div className="flex flex-col text-black w-1/2">
                        <div className="text-center">
                            <p className="text-[32px] mb-5 font-semibold">Website</p>
                            <p className="text-xl font-semibold ">Start from</p>
                            <p className="line-through text-blur decoration-[#FF3939]">Rp, 1.000.000 <img className="w-5 h-5 rotate-[24.799deg] inline absolute -ms-3" src="/assets/icons/discount.svg" /></p>
                            <p className="text-sm font-medium">Rp, 500.000</p>
                        </div>
                        <div className="flex justify-center">
                            <button className="text-sm py-[10px] px-[26px] mt-12 bg-btn text-white rounded-[29px]">Order Now</button>
                        </div>
                    </div>
                    <img className="h-full w-1/2" src="/assets/images/code.png" alt="code"/>
                </div>

                <div className="flex flex-row bg-white rounded-[10px] items-center">
                    <div className="flex flex-col text-black w-1/2">
                        <div className="text-center">
                            <p className="text-[32px] mb-5 font-semibold">Mobile Apps</p>
                            <p className="text-xl font-semibold ">Start from</p>
                            <p className="text-sm font-medium">Rp, 999.000</p>
                        </div>
                        <div className="flex justify-center">
                            <button className="text-sm py-[10px] px-[26px] mt-12 bg-btn text-white rounded-[29px]">Order Now</button>
                        </div>
                    </div>
                    <img className="h-full w-1/2" src="/assets/images/hp.png" alt="code"/>
                </div>
            </div>
        </div>

    </section>
  )
}
