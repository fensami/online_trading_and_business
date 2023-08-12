import AnalysisSection from "./HomePage/AnalysisSection";
import Banner from "./HomePage/Banner";
// import Banner from "./HomePage/Banner";
import CheckTradingSped from "./HomePage/CheckTradingSped";
import SubLogin from "./HomePage/SubLogin";
import TradeTypes from "./HomePage/TradeTypes";
import UpCommingOther from "./HomePage/UpCommingOther";

 const Home = () => {
  return (
    <main className="container mx-auto">
      <Banner></Banner>
      <CheckTradingSped></CheckTradingSped>
      <SubLogin></SubLogin>
      <UpCommingOther></UpCommingOther>
      <AnalysisSection></AnalysisSection>
     
    </main>
  )
}
export default Home;
