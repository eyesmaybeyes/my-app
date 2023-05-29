// import logo from './logo.svg';
import './App.css';
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Communicate", 2],
  ["Play computer games", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"100vh"}
    />
  );
}

export default App;
