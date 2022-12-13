import React, { useState } from "react";
import logo from "./Images/planet.png";
import CourseView from "./Components/CourseView";
import GradeDistribution from "./Components/Grade";
import Board from "./Components/DiscussionBoard";
import styled from "styled-components";

const App = () => {
  const courseCode = "CS 537";
  const courseName = "Introduction to Operaeting System";
  const instructors = [
    { key: 1, text: "Remzi Arpaci-Dusseau", value: "remziA" },
    { key: 2, text: "Yuvraj Patel", value: "yuvrajP" },
    { key: 3, text: "Michael Swift", value: "michaelS" },
  ];
  const semesters = [
    { key: 1, text: "Fall 2022", value: "fall2022" },
    { key: 2, text: "Summer 2022", value: "summer2022" },
    { key: 3, text: "Spring 2022", value: "spring2022" },
  ];

  const grades = {
    default: {
      labels: ["A", "AB", "B", "BC", "C", "D", "F"],
      datasets: [
        {
          label: "students",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: [138, 67, 84, 22, 3, 0, 4],
        },
      ],
    },
    remziA: {
      labels: ["A", "AB", "B", "BC", "C", "D", "F"],
      datasets: [
        {
          label: "students",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: [40, 50, 30, 10, 2, 1, 0],
        },
      ],
    },
    yuvrajP: {
      labels: ["A", "AB", "B", "BC", "C", "D", "F"],
      datasets: [
        {
          label: "students",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: [50, 40, 24, 12, 7, 0, 0],
        },
      ],
    },
    michaelS: {
      labels: ["A", "AB", "B", "BC", "C", "D", "F"],
      datasets: [
        {
          label: "students",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: [48, 30, 40, 17, 5, 3, 7],
        },
      ],
    },
    fall2022: {
      labels: ["A", "AB", "B", "BC", "C", "D", "F"],
      datasets: [
        {
          label: "students",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: [40, 50, 30, 10, 2, 1, 0],
        },
      ],
    },
    summer2022: {
      labels: ["A", "AB", "B", "BC", "C", "D", "F"],
      datasets: [
        {
          label: "students",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: [50, 40, 24, 12, 7, 0, 0],
        },
      ],
    },
    spring2022: {
      labels: ["A", "AB", "B", "BC", "C", "D", "F"],
      datasets: [
        {
          label: "students",
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: [48, 30, 40, 17, 5, 3, 7],
        },
      ],
    },
  };

  const pageFormat = {
    marginLeft: "150px",
    marginTop: "75px",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "space-around",
  };

  const nameFormat = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const viewFormat = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 75,
  };

  const commentFormat = {
    width: "90%",
    alignSelf: "flex-start",
  };

  const overView =
    "This course will introduce you to an exciting range of materials " +
    "from the broad field of operating systems, including basic operating " +
    "system structure, process and thread synchronization and " +
    "concurrency, file systems and storage servers, memory management " +
    "techniques, process scheduling and resource management, " +
    "virtualization, security, and even distributed systems.";

  const [grade, setGrade] = useState(grades.default);
  const changeGrade = (e, { value }) => {
    setGrade(grades[value]);
  };

  return (
    <div className="courseDescription" style={pageFormat}>
      <CourseInfoWrapper>
        <img src={logo} alt="Planet" style={{ marginRight: 65 }} />
        <div style={nameFormat}>
          <p style={{ fontSize: 25, fontWeight: "bold", marginTop: 10 }}>
            {courseName}
          </p>
          <p style={{ fontSize: 20, color: "grey" }}>{courseCode}</p>
        </div>
      </CourseInfoWrapper>
      <div style={viewFormat}>
        <div style={{ marginTop: 50, marginRight: 100 }}>
          <p style={{ marginBottom: 75, fontSize: 15 }}> {overView} </p>
          <CourseView
            instructor={instructors}
            semester={semesters}
            grade={grade}
            onClick={changeGrade}
          />
        </div>
        <div style={{ marginLeft: 100, marginRight: 75 }}>
          <GradeDistribution gradeData={grade} />
        </div>
      </div>
      <div style={commentFormat}>
        <Board />
      </div>
    </div>
  );
};

export default App;

const CourseInfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-bottom: 50px;
`;
