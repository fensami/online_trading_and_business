"use client";
import SubLogin from "../Home/SubLogin";
import AnalysisSection from "../HomePage/AnalysisSection";
import Banner from "../HomePage/Banner";
import BitcoinConverter from "../HomePage/BitcoinConverter";
import CheckTradingSped from "../HomePage/CheckTradingSped";
import Mail from "../HomePage/Mail";
import MarqueeCard from "../HomePage/MarqueeCard";
import OfferService from "../HomePage/OfferService";
import OtherSection from "../HomePage/OtherSection";
import SliderOffer from "../HomePage/SliderOffer";
import TAbSection from "../HomePage/TAbSection";
import TabSection1 from "../HomePage/TabSection1";
import TradeTypes from "../HomePage/TradeTypes";
import UpCommingOther from "../HomePage/UpCommingOther";
import AboutPage from "./about/page";

const Home = () => {
  return (
    <main className=" bg-[#131720] text-white">
      <Banner></Banner>
      <MarqueeCard></MarqueeCard>
      <CheckTradingSped></CheckTradingSped>
      {/* <SliderOffer></SliderOffer> */}
      <SubLogin></SubLogin>
      <TAbSection></TAbSection>
      {/* <TabSection1></TabSection1> */}
      <BitcoinConverter />
      <UpCommingOther></UpCommingOther>
      <OtherSection></OtherSection>
      <OfferService></OfferService>
      <AnalysisSection></AnalysisSection>
      <AboutPage></AboutPage>
      <TradeTypes></TradeTypes>
      <Mail></Mail>
    </main>
  );
};
export default Home;
