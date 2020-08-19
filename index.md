---
layout: splash
classes:
  - landing

title: David Chen

excerpt: AI Enthusiast, Avid Self-Studyer
header:
  overlay_image: /assets/images/site-header.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
  actions:
    - label: "Resume"
      url: "/assets/resume.pdf"

num_feature_rows: 6

feature_row_1:
  - image_path: /assets/images/ruzzle-solver.png
    title: "RUZZLE SOLVER"
    excerpt: "Ruzzle, a mobile word finding game in a 4x4 grid, can be easily solved with DFS. However, this Python program not only solves a provided board, but grabs letters with OCR, solves with prefix tries, and allows for full automation (with screen drawing) on a rooted Android device."

feature_row_2:
  - image_path: /assets/images/sample_img2.jpg
    title: "Example Title 2"
  
feature_row_3:
  - image_path: /assets/images/sample_img3.jpg
    title: "Example Title 3"

feature_row_4:
  - image_path: /assets/images/sample_img3.jpg
    title: "Example Title 1"
    excerpt: Content goes here?

feature_row_5:
  - image_path: /assets/images/sample_img1.jpg
    title: "Example Title 2"
    excerpt: "Put content here"
feature_row_6:
  - image_path: /assets/images/sample_img2.jpg
    title: "Example Title 3"
    excerpt: "Content 3"
---
<h1 style="font-size: 80px; text-align: center">Projects</h1>
{% include feature_row id="feature_row_1" type="left" %}
{% include feature_row id="feature_row_2" type="right" %}
{% include feature_row id="feature_row_3" type="left" %}
{% include feature_row id="feature_row_4" type="right" %}
{% include feature_row id="feature_row_5" type="left" %}
{% include feature_row id="feature_row_6" type="right" %}