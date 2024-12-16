import Arrivals from "@/components/arrivals/page";
import Browse from "@/components/browse/page";
import OurCustomer from "@/components/customer-review/page";
import HeroButtom from "@/components/hero-buttom/page";
import Hero from "@/components/hero/page";
import Selling from "@/components/selling/page";


export default function Home() {
  return (
  <div>
    <Hero/>
    <HeroButtom/>
    <Arrivals/>
    <Selling/>
    <Browse/>
    <OurCustomer/>

    </div>

  );
}
