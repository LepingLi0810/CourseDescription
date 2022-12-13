import React, { useState } from "react";
import { List } from "react-native-paper";

//find professor
const InstructorList = (props) => {
  const [instructorName, setInstructor] = useState(props.instructor);
  const [titleShow, setTitle] = useState("Instructors");
  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);
  const instructorChangeHandler = (instructor) => {
    setTitle(instructor);
    setExpanded(false);
  };
  const instructorItem = instructorName.map((instructor) => (
    <List.Item title={instructor} onPress={ () => {instructorChangeHandler(instructor); }} />
  ));
  return (
    <List.Accordion
      title={titleShow}
      //left={props => <List.Icon {...props} icon="folder" />}
      expanded={expanded}
      onPress={handlePress}
    >
      {instructorItem}
    </List.Accordion>
  );
};

export default InstructorList;
