import Contact from "@/components/cards/contact";
import Features from "@/components/cards/features";
import News from "@/components/cards/news";
import Team from "@/components/cards/team";
import Vision from "@/components/cards/vision";

export default function Home() {
  return (
    <div className="bg-white w-screen min-h-screen py-18">
      <div id="Vision">
        <Vision/>
      </div>
      <div id="Features">
        <Features/>
      </div>
      <div id="Team">
        <Team/>
      </div>
      <div id="News">
        <News/>
      </div>
      <div id="Contact">
        <Contact/>
      </div>
    </div>
  );
}