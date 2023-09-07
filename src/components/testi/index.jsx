import React from 'react'

export const Testimoni = () => {
    const testimonies = [
        {
            testi: 'Buat aplikasi sama tim ini emang luar biasa dicarikan solusi yang paling murah supaya bisa segera mulai aplikasi PPOB saya. 2 minggu udah jadi hasilnya saya tinggal fokus di promosi! Terima kasih Nodewave.',
            name: 'Ahmad Prasetyo'
        },
        {
            testi: 'Awalnya bingung mau buat website pada mahal. Hubungi tim Nodewave, ngobrol bentar, eh aplikasinya langsung jadi. Saya dan suami tinggal cerita aja lewat zoom maunya buat website seperti apa, langsung dibuatin dengan cepat sama Nodewave.',
            name: 'Laras Ratnadewi'
        },
        {
            testi: 'Yang paling keren sih source codenya sekalian dikasih, pas pula bisa pakai Flutter, jadi gw ama cofounder bisa develop lagi fitur2 baru untuk startup gw. Thanks a lot Nodewave supportnya!!',
            name: 'Yusuf Uwais'
        },
    ]
  return (
    <section className="px-[60px] py-10 text-white">
        <p className="text-2xl font-semibold">Testimony</p>
        <div className="flex flex-row gap-[30px] mt-[14px]">
            {testimonies.map((testimony) => (
                <div key={testimony.name} className="px-4 pt-[14px] pb-[11px] text-black bg-white rounded-md flex flex-col justify-between">
                    <p className="text-semiblack mb-4">{testimony.testi}</p>
                    <p className="text-sm text">{testimony.name}</p>
                </div>
            ))}
        </div>
    </section>
  )
}
