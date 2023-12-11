/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = [
    "grandpa",
    "grandma",
    "raccoon",
    "worthless piece of shit",
    "firefighter",
    "rat"
  ];
  let action = ["took my", "threw my", "yelled at my", "bit my", "killed my"];
  let possession = [
    "homework",
    "toe",
    "ungaboonga",
    "misdreavus",
    "eyes",
    "intestines"
  ];
  let where = [
    "in my house",
    "on the street",
    "in a pool",
    "in my desktop",
    "on my lap"
  ];

  let pronIndex = Math.random() * pronoun.length;
  let subjIndex = Math.random() * subject.length;
  let actIndex = Math.random() * action.length;
  let possIndex = Math.random() * possession.length;
  let whereIndex = Math.random() * where.length;

  return (
    pronoun[pronIndex] +
    " " +
    subject[subjIndex] +
    " " +
    action[actIndex] +
    " " +
    possession[possIndex] +
    " " +
    where[whereIndex]
  );
};
