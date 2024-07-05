import {Hero,Subscribe,Footer,SpecialOffers,SuperQuality,PopularProducts,Services,CustomerReviews} from "./Sections/index"
import Nav from './Components/Nav';
export default function App() {
  return (
    <>
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
       <SuperQuality/>
      </section>
      <section className="padding-x py-10">
     <Services/>
      </section>
      <section className="padding">
        <SpecialOffers/>
      </section>
      <section className="bg-pale-blue padding ">
       <CustomerReviews/>
      </section>
      <section className="w-full padding-x sm:py-32 py-16">
        <Subscribe/>
      </section>
      <section className="bg-black padding-x padding-t pb-8 ">
        <Footer/>
      </section>
    </main>
    </>
  )
}