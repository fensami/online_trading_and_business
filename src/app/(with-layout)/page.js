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
// import SliderOffer from "../HomePage/SliderOffer";
// import TabSection1 from "../HomePage/TabSection1";
import TAbSection from "../HomePage/TAbSection";
import TradeTypes from "../HomePage/TradeTypes";
import UpCommingOther from "../HomePage/UpCommingOther";
import AboutPage from "./about/page";

const Home = () => {
  return (
    <main className=" dark:bg-[#131720]">
      <Banner></Banner>
      <MarqueeCard></MarqueeCard>
      <CheckTradingSped></CheckTradingSped>

      <SubLogin></SubLogin>
      <TAbSection></TAbSection>

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
