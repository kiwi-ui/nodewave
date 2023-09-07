import { Products } from "@/components/products";
import { Header } from "../components/header";
import { Hero } from "../components/hero";

export default function Home() {
  return (
    <>
      <header className="fixed py-[28px] px-[60px] w-full">
        <Header/>
      </header>

      <main className="leading-[30px]">
        <Hero />
        <Products />
      </main>
    </>
  )
}
