import Header from "./components/header";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import React, { useState } from "react";
import Modal from "./components/modal";
import LogHeader from "./components/logHeader";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Admin from "./pages/adminLogin";
import AdminHome from "./pages/admin";
const data = {
  user: {
    email: "ganzrg",
    password: "123",
  },
  header: {
    icon: <i class="bi bi-medium"></i>,
    title: "Medium",
    nav: ["Our story", "Membership", "Write", "Sign in"],
    btn: "Get started",
  },
  section1: {
    title1: "Stay curious.",
    sub: "Discover stories, thinking, and expertise from writers on any topic.",
    btn2: "Start reading",
    image: require("../src/image/M.png"),
  },
  section2: {
    image2: require("../src/image/svg (2).png"),
    title2: "TRENDING ON MEDIUM",
    number: ["01", "02", "03", "04", "05", "06"],
  },
  section3: {
    title: "Discover more of what matters to you",
    category: [
      {
        name: "Programming",
        id: 1,
      },
      {
        name: "Data Science",
        id: 2,
      },
      {
        name: "Technology",
        id: 3,
      },
      {
        name: "Self Improvement",
        id: 4,
      },
      {
        name: "Writing",
        id: 5,
      },
      {
        name: "Relationships",
        id: 6,
      },
      {
        name: "Machine Learning",
        id: 7,
      },
      {
        name: "Productivity",
        id: 8,
      },
      {
        name: "Politics",
        id: 9,
      },
    ],
    category2: [
      "Help",
      "Status",
      "Writers",
      "Blog",
      "Careers",
      "Privacy",
      "Terms",
      "About",
      "Text to speech",
    ],
  },
};
function App() {
  const [color, setColor] = useState("#FFC017");
  const [btnColor, setBtnColor] = useState("black");
  const [modal, setModal] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const style1Obj = {
    backgroundColor: btnColor,
  };
  const styleObj = {
    backgroundColor: color,
  };
  const style2Obj = {
    backgroundColor: modal ? "grey" : "",
  };

  const handleScroll = (event) => {
    console.log(event.currentTarget.scrollTop);
    if (event.currentTarget.scrollTop >= 430) {
      setColor("white");
      setBtnColor("green");
    } else {
      setColor("#FFC017");
      setBtnColor("black");
    }
  };
  const showModal = () => {
    setModal(!modal);
  };
  const hideModal = () => {
    setModal(false);
  };
  const handleAdmin = () => {
    setAdmin(true);
  };
  // const AdminLogin = () => {
  //   setIsAdmin(true);
  // };

  console.log(admin);
  return !admin ? (
    <div
      onScroll={handleScroll}
      style={{
        overflow: "scroll",
        width: "100vw",
        height: "100vh",
        backgroundColor: { style2Obj },
      }}
    >
      {logIn ? (
        <div>
          <LogHeader logData={data.header} />
        </div>
      ) : (
        <Header
          headerData={data.header}
          styleObj={styleObj}
          style1Obj={style1Obj}
          modal={showModal}
        />
      )}

      <Modal
        modal={modal}
        logIn={logIn}
        setLogIn={setLogIn}
        user={data.user}
        hide={hideModal}
        admin={handleAdmin}
      />
      {logIn ? "" : <Section1 section1Data={data.section1} />}
      <Section2 section2Data={data.section2} />
      {logIn ? (
        <Section4 section4Data={data.section3} />
      ) : (
        <Section3 section3Data={data.section3} />
      )}
    </div>
  ) : (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Admin />}></Route>
        <Route path="/admin" element={<AdminHome />} />
      </Routes>
    </div>
  );
}

export default App;
// adminLogin={AdminLogin}
