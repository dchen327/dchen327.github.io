---
# layout: splash
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
    title: "Ruzzle Solver"
    excerpt: "Ruzzle is word game played on a 4x4 grid, where the player must attempt to find words to gain the maximum number of points possible in a fixed amount of time. Each letter has a value, and modifiers like double letter and triple word change scores of certain words. This script finds all possible words in a board, and sorts by score. At the bare minimum, the user can provide manual input of the board with or without modifiers like DL and TW, and it will find all words in the board. With pytesseract, the program can use OCR to grab the letters from the board one at a time (this will require some experimentation since we most likely have phone screens with different resolutions). If the user is too lazy to input the words by themselves, this script can also output a list of coordinates for use with AutoInput and Tasker. If the user's android is rooted, adb shell sendevent commands can also be used to autoswipe with better accuracy and speed. These adb shell commands should also work from a computer linked to the phone, and in that case shouldn't require root."

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