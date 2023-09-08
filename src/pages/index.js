import { Products } from "@/components/products";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Testimoni } from "@/components/testi";
import { Works } from "@/components/works/index.";
import { HowWeWork } from "@/components/howWeWork";
import { RecentProject } from "@/components/recentProject";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <header className="pt-[28px] px-[60px] w-full">
        <Header/>
      </header>

      <main className="leading-[30px]">
        <Hero />
        <Products />
        <Testimoni />
        <Works />
        <HowWeWork />
        <RecentProject />
        <Footer />
      </main>
    </>
  )
}
