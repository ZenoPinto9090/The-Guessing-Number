# 🎯 The Guessing Game

A simple browser-based number guessing game built with **HTML, CSS, and vanilla JavaScript**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

</div>

---

## 📖 About

The computer picks a secret number and you try to find it within a limited number of chances. After every guess you're told whether to go **HIGHER** or **LOWER**. Choose from three difficulty levels and see how few guesses you need!

## ✨ Features

- 🎚️ Three difficulty levels (Easy, Medium, Hard)
- 🔢 Live display of the number range and remaining chances
- 💡 Instant **HIGHER** / **LOWER** hints
- 🔄 Restart button that replays the last chosen difficulty
- 🛡️ Input validation (invalid or out-of-range guesses don't cost a chance)
- 🎨 Gradient background with a glass-style game card

## 🎮 How to Play

1. Pick a difficulty: **Easy**, **Medium**, or **Hard**.
2. Type a number into the input box and click **Guess**.
3. Follow the **HIGHER** / **LOWER** hints to narrow it down.
4. Find the secret number before your chances run out to win.
5. Click **Restart** to play again with the same difficulty.

### Difficulty Levels

| Difficulty | Range     | Chances |
|------------|-----------|---------|
| Easy       | 0 – 100   | 12      |
| Medium     | 0 – 1000  | 15      |
| Hard       | 0 – 10000 | 20      |

## 🚀 Getting Started

No installation or build step needed.

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

Then open `index.html` in your browser (just double-click it).

## 📁 Project Structure

```
.
├── index.html   # Page structure: title, difficulty buttons, guess input
├── script.js    # Game logic: starting games, validating and comparing guesses
├── style.css    # Styling: gradient background, game card, button colours
└── README.md
```

## ⚙️ How It Works

- `startGame(maxNum, chances)` sets the range and chance count, generates the secret number with `Math.random()`, and resets the on-screen text.
- The **Guess** handler validates the input, compares it to the secret, shows a hint, subtracts a chance, and checks for a win or loss.
- `lastMax` and `lastchance` remember the last difficulty so **Restart** can replay it.
- A `gameOver` flag blocks guessing after the game ends.

## 🛠️ Built With

- HTML5
- CSS3 (flexbox, gradients)
- JavaScript (ES6, no libraries)

## 🗺️ Roadmap

- [ ] Reveal the secret number when the player loses
- [ ] Press **Enter** to submit a guess
- [ ] Best score / win streak tracking
- [ ] Guess history list
- [ ] Disable Guess until a difficulty is chosen

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to fork the repo and open a pull request.
