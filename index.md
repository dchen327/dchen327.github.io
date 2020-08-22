---
layout: splash
classes:
  - landing

title: David Chen

excerpt: Artificial Intelligence Enthusiast, Self-Taught Programmer
header:
  overlay_image: /assets/images/site-header2.jpg
  overlay_filter: 0.3
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
  actions:
    - label: "Resume"
      url: "/assets/resume.pdf"

num_feature_rows: 6

fr_ruzzle:
  - image_path: /assets/images/ruzzle-solver.png
    title: "RUZZLE SOLVER"
    excerpt: Designed a program to play Ruzzle, a mobile word finding game in a 4x4 grid. Utilized optical character recognition, custom trained models, graph theory, and Android automation.
    url: https://github.com/dchen327/ruzzle-solver
    btn_label: Source Code
    btn_class: "btn--large btn--success"

fr_arduino:
  - image_path: /assets/images/arduino-car.jpg
    title: "ARDUINO OBSTACLE AVOIDER"
    excerpt: My first dabble into the world of robotics, this Arduino car uses an ultrasonic sensor to avoid bumping into obstacles.
    url: https://github.com/dchen327/Arduino-Obstacle-Avoiding-Car
    btn_label: Source Code
    btn_class: "btn--large btn--success"

fr_isola:
  - image_path: /assets/images/isola-game.png
    title: "Isola Game"
    excerpt: An easy to learn 2 player turned based game, Isola involves players moving and destroying blocks in an attempt to isolate the opposing player. After learning about the minimax algorithm in Stanford CS221 (Intro to AI), I decided to implement it in a more difficult setting, since Isola requires 2 moves per turn rather than per alternating moves.
    url: https://github.com/dchen327/isola-game
    btn_label: Source Code
    btn_class: "btn--large btn--success"

fr_quizlet:
  - image_path: /assets/images/quizlet-scatter.png
    title: "Quizlet Scatter"
    excerpt: Quizlet Scatter is a fun flashcard matching mini-game. Using a combination of selenium webdriver and PyAutoGui, this program grabs all pairs and matches them as quickly as possible.
    url: https://github.com/dchen327/quizlet-scatter
    btn_label: Source Code
    btn_class: "btn--large btn--success"
fr_typeracer:
  - image_path: /assets/images/typeracer.png
    title: "TypeRacer Bot"
    excerpt: A fun usage of selenium webdriver for web automation, this script grabs and inputs text at high speeds in TypeRacer.
    url: https://github.com/dchen327/typing-test-bots
    btn_label: Source Code
    btn_class: "btn--large btn--success"
fr_ambient:
  - image_path: /assets/images/ambient-light-color-adjuster.png
    title: "Ambient Light Color Adjuster"
    excerpt: "After purchasing a color changing lightbulb to use a sunrise simulator alarm clock, I decided to have some fun with adjusting ambient light to match a game's dominant color."
    url: https://github.com/dchen327/ambient-light-color-adjuster
    btn_label: Source Code
    btn_class: "btn--large btn--success"

fr_cartpole:
  - image_path: /assets/images/cartpole.png
    title: "CartPole RL"
    excerpt: "After learning about Reinforcement Learning in Stanford CS221 (blackjack HW), I applied vanilla Q-learning with epsilon-greedy to OpenAI Gym's CartPole problem. I was able to meet the criterion for solving the problem without any advanced methods such as Deep Q Networks or Policy Gradient."
    url: https://github.com/dchen327/cartpole-rl
    btn_label: Source Code
    btn_class: "btn--large btn--success"
---

<h1 id="About" style="font-size: 3em; text-align: center">About Me</h1>
<p style="max-width: 80%; margin:auto; padding-bottom: 10px">
Hi! I'm a Computer Science and Math lover, and I'm currently a senior at Princeton High School. <br>
Feel free to check out some of my projects below! <br>
Or read about free <a href="/learning-material">learning materials</a> I've used, or <a href="books">books</a> I've read.
</p>
{: .text-center}
<h1 id="Projects" style="font-size: 3em; text-align: center">Projects</h1>
{% include feature_row id="fr_ruzzle" type="left" %}
{% include feature_row id="fr_isola" type="right" %}
{% include feature_row id="fr_cartpole" type="left" %}
{% include feature_row id="fr_quizlet" type="right" %}
{% include feature_row id="fr_typeracer" type="left" %}
{% include feature_row id="fr_ambient" type="right" %}
{% include feature_row id="fr_arduino" type="left" %}
