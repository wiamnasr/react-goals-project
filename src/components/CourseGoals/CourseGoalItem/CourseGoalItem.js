import React from "react";

// Style
import { CourseGoalListItemControl } from "./CourseGoalItem.styles";

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <CourseGoalListItemControl onClick={deleteHandler}>
      {props.children}
    </CourseGoalListItemControl>
  );
};

export default CourseGoalItem;
