# Lunacal Frontend Assignment

## Overview

The Lunacal Frontend project is a React-based application designed to showcase various widgets with interactive content. The primary objective is to provide a smooth user experience with animated transitions and dynamic content based on user interactions. This project is part of the Lunacal assignment and aims to demonstrate proficiency in React.js, GSAP (GreenSock Animation Platform), and modern frontend development practices.

## Project Structure
The project is organized into the following directory structure:

```
📂 Lunacal-Frontend
 ┣ 📂 public
 ┃ ┗ favicon.ico
 ┣ 📂 src
 ┃ ┣ 📂 assets
 ┃ ┃ ┣ 📜 question.svg
 ┃ ┃ ┣ 📜 box.svg
 ┃ ┃ ┗ 📜 react.svg
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Widget_One.jsx
 ┃ ┃ ┣ 📜 Widget_Two.jsx
 ┃ ┃ ┣ 📜 BothWidgets.jsx
 ┃ ┃ ┗ 📜 UnderLine.jsx
 ┃ ┣ 📜 App.jsx
 ┃ ┣ 📜 index.css
 ┃ ┗ 📜 main.jsx
 ┣ 📜 .gitignore
 ┣ 📜 index.html
 ┣ 📜 README.md
 ┗ 📜 package.json
 ┣ 📜 vite.config.js
 ┗ 📜 tailwind.config.js
```

## Features

**Interactive Tabs:** Users can switch between different tabs ("About Me", "Experiences", "Recommended") to view corresponding content.
**Animations:** Smooth animations for tab switching and button clicks using GSAP.
**Responsive Design:** The layout adapts to different screen sizes ensuring a good user experience on both desktop and laptop devices.

## Installation

To get started with the Lunacal Frontend project, follow these steps:

### Clone the Repository:

```
git clone https://github.com/akashkapoor0001/Lunacal-Assignment.git
cd Lunacal-Assignment
```
### Install Dependencies: 

Ensure you have Node.js installed. Then, install the required dependencies using:
```
npm install
```

### Run the Development Server: 

Start the development server with:
```
npm run dev
Navigate to http://localhost:5173 in your browser to view the application.
```

## Usage

**Interact with Tabs:** Click on the tabs ("About Me", "Experiences", "Recommended") to switch between different content sections.
**View Animated Transitions:** Observe smooth transitions and animations applied to buttons and content using GSAP.

## Components
**Widget_One.jsx:** Contains the logic and presentation for the first widget, including the tab navigation and content display.
**Widget_Two.jsx:** Represents additional functionality or another widget component.
**BothWidgets.jsx:** Combines multiple widgets or components as needed.
**UnderLine.jsx:** Handles underline styling below the widgets.

## Technologies Used

React + Vite

GSAP

Tailwind CSS


## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. For bug reports or feature requests, open an issue in the repository.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

