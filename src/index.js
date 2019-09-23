import React from "react";
import ReactDOM from "react-dom";
import FoodPill from "./food-pill";
import calorieData from "./data/calorie-data";

import "./styles.css";

function TotalCalory({ totalCalorie }) {
  return (
    <h2 className="card-title">
      {" "}
      Your total calorie for today: {totalCalorie}
    </h2>
  );
}
function Header({ heading }) {
  return <h1 className="card-title">{heading} </h1>;
}

function FoodTable({ calorieData, foodPillClickHandler, itemcount }) {
  return calorieData
    .slice(0, itemcount)
    .map(({ name, measure, calories }) => (
      <FoodPill
        key={name}
        name={name}
        measure={measure}
        calories={calories}
        onFoodPillClick={foodPillClickHandler}
      />
    ));
}
class App extends React.Component {
  state = {
    totalCalorie: 0,
    itemcount: 4
  };
  // Put the click handler here.
  foodPillClickHandler = totalCalorie => {
    this.setState({ totalCalorie: this.state.totalCalorie + totalCalorie });
  };
  btn2ClickHandler = itemcount => {
    this.setState({ itemcount: this.state.itemcount + 3 });
  };
  btn1ClickHandler = totalCalorie => {
    this.setState({ totalCalorie: 0 });
  };
  btn3ClickHandler = itemcount => {
    if (this.state.itemcount > 4) {
      this.setState({ itemcount: this.state.itemcount - 3 });
    }
  };

  render() {
    return (
      <div>
        <br />
        <h1 className="text-primary">Cal-Cal</h1>
        <div className="card">
          <div className="card-body">
            <Header heading={"Let's see how many calories"} />
            <FoodTable
              className="list-group"
              calorieData={calorieData}
              foodPillClickHandler={this.foodPillClickHandler}
              itemcount={this.state.itemcount}
            />
            <br />
            <TotalCalory
              className="card-title"
              totalCalorie={this.state.totalCalorie}
            />
            <button className="btn btn-primary" onClick={this.btn2ClickHandler}>
              Load More Items
            </button>
            <span> </span>
            <button className="btn btn-primary" onClick={this.btn3ClickHandler}>
              Reduce Items
            </button>
            <span> </span>
            <button className="btn btn-primary" onClick={this.btn1ClickHandler}>
              Clear Count
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
