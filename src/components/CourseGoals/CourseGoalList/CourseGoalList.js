import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

// Style
import { GoalUnorderedListControl } from "./CourseGoalList.styles";

const CourseGoalList = (props) => {
  return (
    <GoalUnorderedListControl>
      {props.items.map((goal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </GoalUnorderedListControl>
  );
};

export default CourseGoalList;
