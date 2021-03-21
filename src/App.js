import React from "react";
import CV from "./components/CV";

function App() {
  const store = {
    lang: "ru",
    titles: [
      {
        lang: "ru",
        title: "Резюме",
      },
      {
        lang: "en",
        title: "CV",
      },
    ],
    generalInfo: {
      title: "Основная информация",
      items: {
        fullName: "Юн Александр Денисович",
        birthYear: 1990,
        position: "Developer",
        salary: 55000
      },
    },
    education: {
      title: "Образование",
      items: {
        univercity: "КГТУ",
        finished: 2011,
      },
    },
    experience: {
      title: "Место работы",
      items: {
        company: "Google",
        workingStart: 2011,
        workingEnd: 2020,
        skills: ["html", "css", "js"],
      },
    },
  };

  const store2 = {
    lang: "en",
    titles: [
      {
        lang: "ru",
        title: "Резюме",
      },
      {
        lang: "en",
        title: "CV",
      },
    ],
    generalInfo: {
      title: "Основная информация",
      items: {
        fullName: "Lee Александр Денисович",
        birthYear: 1985,
        position: "Developer",
        salary: 1200
      },
    },
    education: {
      title: "Образование",
      items: {
        univercity: "КГТУ",
        finished: 2000,
      },
    },
    experience: {
      title: "Место работы",
      items: {
        company: "Facebook",
        workingStart: 2011,
        workingEnd: 2020,
        skills: ["html", "css", "js"],
      },
    },
  };

  return (
    <>
      <CV store={store}></CV>
      <CV store={store2}></CV>
    </>
  );
}

export default App;
