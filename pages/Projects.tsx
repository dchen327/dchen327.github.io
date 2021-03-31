import { Divider, Grid, Header } from "semantic-ui-react";
import Project from "../components/Project";

const projects = {
  Ruzzle: {
    title: "Ruzzle Solver",
    image: "ruzzle-solver.png",
    excerpt:
      "Designed a program to play Ruzzle, a mobile word finding game in a 4x4 grid. Utilized optical character recognition, custom trained models, graph theory, and Android automation.",
    url: "https://github.com/dchen327/ruzzle-solver",
  },
  Arduino: {
    title: "Arduino Obstacle Avoider",
    image: "arduino-car.jpg",
    excerpt:
      "My first dabble into the world of robotics, this Arduino car uses an ultrasonic sensor to avoid bumping into obstacles. Later, I used ROS models for simulation in Gazebo to optimize path following.",
    url: "https://github.com/dchen327/Arduino-Obstacle-Avoiding-Car",
  },
  Isola: {
    title: "Isola Game",
    image: "isola-game.png",
    excerpt:
      "An easy to learn 2 player turned based game, Isola involves players moving and destroying blocks in an attempt to isolate the opposing player. After learning about the minimax algorithm in Stanford CS221 (Intro to AI), I decided to implement it in a more difficult setting, since Isola requires 2 moves per turn rather than per alternating moves.",
    url: "https://github.com/dchen327/isola-game",
  },
  Ambient: {
    title: "Ambient Light Color Adjuster",
    image: "ambient-light-color-adjuster.png",
    excerpt:
      "After purchasing a color changing lightbulb to use a sunrise simulator alarm clock, I decided to have some fun with adjusting ambient light to match a game's dominant color.",
    url: "https://github.com/dchen327/ambient-light-color-adjuster",
  },
  CartPole: {
    title: "CartPole RL",
    image: "cartpole.png",
    excerpt:
      "After learning about Reinforcement Learning in Stanford CS221 (blackjack HW), I applied vanilla Q-learning with epsilon-greedy to OpenAI Gym's CartPole problem. I was able to meet the criterion for solving the problem without any advanced methods such as Deep Q Networks or Policy Gradient.",
    url: "https://github.com/dchen327/cartpole-rl",
  },
  Codenames: {
    title: "Codenames",
    image: "codenames.png",
    excerpt:
      "A simple application of Stanford GloVe word vectors to the game codenames, where a spymaster attempts to give a clue to hint at certain words, while avoiding others.",
    url: "https://github.com/dchen327/codenames",
  },
  SunriseAlarm: {
    image: "sunrise-alarm.jpg",
    title: "Sunrise Alarm",
    excerpt:
      "We always feel more refreshed waking up to the sunrise on weekends without a blaring alarm clock. This Android tasker script uses an adjustable light to simulate the sunrise, as well as the sunset before sleep. REM sleep cycles are considered for alarm times.",
    url:
      "https://taskernet.com/shares/?user=AS35m8nIi33jowYY%2F6X7N9Hf12XdqPGnFaDesuuxyUyrP8D8vG9h3CanL1otRjwH2n7Lxo1AmA%3D%3D&id=Profile%3AAlarm",
  },
  Nonogram: {
    image: "nonogram-solver.png",
    title: "Nonogram Solver",
    excerpt:
      "With Selenium and bit operations, this fully solves nonogram visual logic puzzles.",
    url: "https://github.com/dchen327/nonogram-solver",
  },
  Pictionary: {
    image: "sketchful_demo.png",
    title: "Pictionary AutoDraw",
    excerpt:
      "With image preprocessing, color matching, brush size optimization for resolution, and PyAutoGui, AutoDraw takes images and turns them into beautiful art on a canvas.",
    url: "https://github.com/dchen327/pictionary-autodraw",
  },
};

const projectOrder = [
  "Ruzzle",
  "Isola",
  "Arduino",
  "CartPole",
  "SunriseAlarm",
  "Codenames",
  "Ambient",
  "Pictionary",
  "Nonogram",
];

export default function Projects() {
  return (
    <div style={{ padding: "2%" }}>
      <Header id="Projects" size="large" style={{ textAlign: "center" }}>
        Projects
      </Header>
      <Divider />
      {projectOrder.map((projectName, index) => (
        <Project {...projects[projectName]} imgSide={index % 2} key={index} />
      ))}
    </div>
  );
}
