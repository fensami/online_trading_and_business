import AnalysisSection from "./HomePage/AnalysisSection";
import Banner from "./HomePage/Banner";
// import Banner from "./HomePage/Banner";
import CheckTradingSped from "./HomePage/CheckTradingSped";
import SubLogin from "./HomePage/SubLogin";
import TradeTypes from "./HomePage/TradeTypes";
import UpCommingOther from "./HomePage/UpCommingOther";
import Kaku2 from "./kaku2";
<h1>hello</h1>

 const Home = () => {
  return (
    <main className="container mx-auto">
      <Banner></Banner>
      <CheckTradingSped></CheckTradingSped>
      <SubLogin></SubLogin>
      <UpCommingOther></UpCommingOther>
      <AnalysisSection></AnalysisSection>
      <Kaku2></Kaku2>
     
    </main>
  )
}
export default Home;
