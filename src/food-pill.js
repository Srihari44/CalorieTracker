import React from "react";

function FoodPill({ name, measure, calories, onFoodPillClick }) {
  return (
    <div className="list-group-item" onClick={() => onFoodPillClick(calories)}>
      <span> {name} </span>
      <span> {measure} </span>
      <span> {calories} </span>
    </div>
  );
}

export default FoodPill;
