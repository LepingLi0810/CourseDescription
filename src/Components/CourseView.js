import React from "react";
import { Dropdown, Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

//find professor
const CourseView = (props) => {
  const instructorOption = props.instructor;
  const semesterOption = props.semester;
  const onClick = props.onClick;

  return (
    <Form>
      <label>Instructors</label>
      <Dropdown
        style={{ width: 350, marginBottom: 15 }}
        fluid
        selection
        search
        placeholder="All instructors"
        options={instructorOption}
        onChange={onClick}
      />

      <label>Semesters</label>
      <Dropdown
        style={{ width: 350 }}
        fluid
        selection
        search
        placeholder="All semesterss"
        options={semesterOption}
        onChange={onClick}
      />
    </Form>
  );
};

export default CourseView;
