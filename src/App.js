import React from "react";
import "./App.css";
import Header from "./Components/header/Header";
import DoctorPatient from "./Components/Cards/DoctorPatient";
import Features from "./Components/Features/Features";
import Countries from "./Components/Countries/Countries";
import Footer from "./Components/Footer/Footer";
function App() {
  let arr = [
    { name: "About US" },
    { name: "Career" },
    {
      name: "Departement",
      drop: [
        "Marketing",
        "Customer Success & Sales",
        "IT, Product, Design & UX",
        "Finance & Administration",
        "HR & more"
      ]
    }
  ];
  let tabFeature = [
    {
      svg: "https://www.docplanner.com/img/flag.png",

      h2: "Leader in 10 countries",
      p:
        "Poland, Turkey, Spain, Italy ,Czech Republic, Mexico, Brazil,Colombia, Argentina and Chile"
    },
    {
      svg: "https://www.docplanner.com/img/visits.png",
      h2: "1.5 million appointments",
      p: "booked last month",
      trans: "trans"
    },

    {
      svg: "https://www.docplanner.com/img/patients.png",
      h2: "30 million unique patients",
      p: "visit us every month"
    },

    {
      svg: "https://www.docplanner.com/img/doctors.png",
      h2: " 2 million active doctors",
      p: "trust in our solutions",
      trans: "trans"
    }
  ];
  let array = [
    {
      name: "For patient",
      title: "Find a doctor, book a visit and solve any health-related doubt",
      select: [
        "Choose country",
        "Argentina",
        "Australia",
        "Brazil",
        "Chile",
        "Colombia",
        "Czech",
        "France",
        "Italy",
        "Mexico"
      ],
      image: "https://www.docplanner.com/img/screen-marketplace@2x.png"
    },

    {
      name: "For Doctors",
      title: "Save time managing visits and cut no-shows by half",
      image: "https://www.docplanner.com/img/screen-saas@2x.png",
      doctors: "doctors"
    }
  ];
  let count = [
    {
      image: "https://www.docplanner.com/images/warsaw.png",
      p: "Warsaw",
      button: "see Opening"
    },
    {
      image: "https://www.docplanner.com/images/barcelona.png",
      p: "Barcelona",
      button: "see Opening"
    },
    {
      image: "https://www.docplanner.com/images/istanbul.png",
      p: "Istanbul",
      button: "see Opening"
    },
    {
      image: "https://www.docplanner.com/images/rome.png",
      p: "Rome",
      button: "see Opening"
    },
    {
      image: "https://www.docplanner.com/images/mexico-city.png",
      p: "Mexico",
      button: "see Opening"
    },
    {
      image: "https://www.docplanner.com/images/curitiba.png",
      p: "Curitibia",
      button: "see Opening"
    }
  ];

  return (
    <div className="App">
      <Header arr={arr} />
      <DoctorPatient array={array} />
      <Features tabFeature={tabFeature} />
      <Countries count={count}/>
      <Footer />
    </div>
  );
}

export default App;
