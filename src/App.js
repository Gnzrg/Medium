import Header from "./components/header"
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3"
// import Data from "./components/data";
import './App.css';
const data = {
  header:{
    icon : <i class="bi bi-medium"></i>,
    title : "Medium",
    nav :["Our story" , "Membership" , "Write" , "Sign in"],
    btn : "Get started"
  },
  section1 :{
    title1 : "Stay curious.",
    sub : "Discover stories, thinking, and expertise from writers on any topic.",
    btn2 : "Start reading",
    image : require("../src/image/M.png")
  },
  section2 :{
    image2 : require("../src/image/svg (2).png"),
    title2: "TRENDING ON MEDIUM"
},
  section3:{
    title: "Discover more of what matters to you",
    category: ["Programming" , "Data Science" , "Technology" , "Self Improvement" , "Writing" , "Relationships", "Machine Learning" , "Productivity" , "Politics"]
}
}
function App() {


  return (
    <div className="App">
      <Header headerData = {data.header}/>
      <Section1 section1Data = {data.section1}/>
      <Section2 section2Data={data.section2}/>
      <Section3 section3Data={data.section3}/>
    </div>
  );
}

export default App;
