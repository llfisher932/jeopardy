# Jeopardy!

A react app that lets you and your friends play jeopardy!

---

## Features

- Quickly copy and paste boards, allowing text, images, and links in the questions using markdown rendering.
- preview image rendering next to input.
- Add, remove, customize, and adjust player profiles to track your friends balances.

## Installation

### Clone the repo:

```
git clone https://github.com/llfisher932/jeopardy.git
cd jeopardy
```

### Install dependencies:

```

npm install

```

### Running the app:

```

npm run dev

```

---

## Usage

Enter Column titles + questions/cards using the following format:

```
Column One
test question one 100
test question two 200
test question three 300
test question four 400
test question five 500
Column Two
test question one 100
test question two 200
test question three 300
test question four 400
test question five 500
```

if a question goes past the line it is on, it is fine as long as you don't manually press enter or type a new line character. Make sure there are no empty lines! Each column must have 5 questions + a title.

---

## Technologies

- **Frontend:** React, Tailwind CSS, Vite

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
