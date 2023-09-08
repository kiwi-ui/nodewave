import Link from "next/link"

export const Footer = () => {
  const socialMedias = [
    {
      id: 1,
      name: 'facebook',
      src: '/assets/icons/fb.svg'
    },
    {
      id: 2,
      name: 'twitter',
      src: '/assets/icons/twitter.svg'
    },
    {
      id: 3,
      name: 'youtube',
      src: '/assets/icons/yt.svg'
    },
    {
      id: 4,
      name: 'linkedin',
      src: '/assets/icons/linkedin.svg'
    },
    {
      id: 5,
      name: 'instagram',
      src: '/assets/icons/ig.svg'
    },
  ]
  return (
    <footer className="text-center px-[60px] mt-[72px] text-white flex flex-col items-center">
        <div className="w-max mt-5">
            <img className="" src="/assets/logos/logo.png" alt="brand"/>
        </div>
        <p className="text-xl font-semibold leading-normal mt-[30px]">PT NODEWAVE SOLUSI TEKNOLOGI</p>
        <p className="mt-[45px] text-xl font-semibold leading-normal">Graha Pena Surabaya <br/> Jl. Ahmad Yani no. 88 Surabaya <br/> Phone : +62811258280 <br/> Email : support@nodewave.id</p>
        <div className="flex flex-row mt-[55px] gap-5 mb-[43px]">
          {socialMedias.map((item) => (
            <Link key={ item.id } href="/blank">
                <img src={item.src} alt={item.name} width={30} height={30}/>
            </Link>
          ))}
        </div>
    </footer>
  )
}
