import React, { useState } from "react";
import { List } from "react-native-paper";

//api, find semester
const SemesterList = (props) => {
  const [semesters, setSemester] = useState(props.semester);
  const [expanded, setExpanded] = React.useState(false);
  const [titleShow, setTitle] = useState("Semesters");
  const handlePress = () => setExpanded(!expanded);
  const semesterChangeHandler = (semester) => {
    setTitle(semester);
    setExpanded(false);
    //setSemester(event.target.value);
  };
  const semesterItem = semesters.map((semester) => (
    <List.Item title={semester} onPress={() => {semesterChangeHandler(semester)}} />
  ));
  return (
    <List.Accordion
      title={titleShow}
      //left={props => <List.Icon {...props} icon="folder" />}
      expanded={expanded}
      onPress={handlePress}
    >
      {semesterItem}
    </List.Accordion>
  );
};

export default SemesterList;