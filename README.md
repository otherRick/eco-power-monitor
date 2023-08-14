# Eco Power Monitor

Welcome to the Eco Power Monitor project, an exclusive hiring test project created by Delfos I.M., an AI-powered enterprise specializing in predicting failures and providing operational knowledge for renewable energy assets and devices.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Dependencies](#dependencies)
7. [Desirable Features](#desirable-features)
8. [Troubleshooting](#troubleshooting)
9. [Acknowledgments](#acknowledgments)

## Introduction

Eco Power Monitor is a mid-level front-end developer hiring test project. The aim of this project is to evaluate HTML, CSS, and JavaScript skills in developing responsive web interfaces. The project is based on a detailed Figma design guide provided by Delfos I.M.

## Features

Eco Power Monitor is built using React with TypeScript, Vite, and Tailwind CSS to ensure a seamless development experience and maintainable user interfaces. The project offers the following features:

- Interactive and visually appealing charts using Highcharts library
- Live status cards for real-time data visualization
- Dynamic data tables with smooth user experience
- Open-close sidebar menu for easy navigation
- Client-side routing with react-router-dom for seamless transitions between screens
- Integration of Heroicons for customizable SVG icons
- Incorporation of Leaflet for interactive and customizable maps

Additionally, a custom hook named `useBooleanPerSecond` has been implemented to generate periodic boolean values for various UI interactions.

## Getting Started

1. Make sure you have [Yarn](https://classic.yarnpkg.com/lang/en/docs/install) installed on your machine.
2. [Install the recommended font](#installation).
3. Clone this repository.
4. Navigate to the project directory.
5. Run the project.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/otherRick/eco-power-monitor.git

   ```

2. Navigate to the project directory:

   ```sh
   cd eco-power-monitor
   ```

3. Install dependencies:
   ```sh
   yarn
   ```
4. Runnig project:
   ```sh
   yarn dev
   ```

## Usage

Eco Power Monitor provides a sidebar for navigation between screens. The main screen, "Highlights," showcases the core content of the hiring test. The sidebar can be fixed or unfixed for a smooth user experience.

Charts within accordion components are displayed on the right side of the screen. Each chart has its own tooltip, providing specific chart stack information.

## Dependencies

Eco Power Monitor is built upon the following technologies:

- React
- TypeScript
- Vite
- Babel
- Tailwind CSS
- react-router-dom
- Heroicons
- Highcharts
- Leaflet

## Desirable Features

Though the project is complete, there are some desirable features that could enhance it further:

1. Mobile-responsive version (considering the absence of a mobile design guide)
2. Animated charts for enhanced visual appeal
3. Link between charts on the map and corresponding accordion component details
4. Integration of the MSW library for backend mocking and HTTP requests
5. Draggable charts for better interactivity
6. Date display option
7. Portfolio display option
8. Integration of portfolio links with live status
   ...and so on...

## Troubleshooting

The usage of the Highcharts library may lead to occasional rendering issues due to its older nature. Some custom Highcharts types had to be created, and occasional forced rerenders were needed to resolve rendering problems.

## Acknowledgments

I would like to express my gratitude to Delfos I.M. for providing the opportunity to work on this project as part of their hiring process. This experience allowed me to showcase my skills and learning.

Special thanks to the team members who supported and contributed to this project:

- [Rafael Costa], Support Analyst | Infrastructure | DevOps | Cloud Computing
- [Karla Cardoso Araújo], HR Business Partner | Talent Acquisition | Tech Recruiter
- [Renata R.], Product Designer at Delfos - Artificial Intelligence for the Energy Industry

I'm thankful for the chance to contribute to this test project and for the learning it brought. Regardless of the outcome, this experience has been valuable for my growth.

Feel free to contact me at [drckbr@gmail.com] for feedback or questions about the project.

<!-- ## Eco Power Monitor

This am exclusive hiring test project made only for me by Delfos I.M. company, an enterprise based on A.I. to predict failures and provides operational knologe to renewable energy assets and devices.

### Table of Contents

1. [Builded Project](#Builded-project)
1. [Introduction](#introduction)
1. [Features](#features)
1. [Getting Started](#getting-started)
1. [Installation](#installation)
1. [Usage](#usage)
1. [Dependencies](#dependencies)
1. [Desirable](#Desirable)
1. [Troubleshooting](#Troubleshooting)
1. [Acknowledgments](#Acknowledgments)

### Builded project

To see the completed and builded project is version follow this [link](link)

### Introduction

This project is part of the Delfos is mid-level front-end developer hiring test. So they create me a good figma design guide with all
details and fonts to make may development process as easier as possible.

The purpose was avaliate my skills in HTML, CSS and JAVASCRIPT web screen size responsive development with an onganized and clean code.
Here, the main chalenge was shown statistics in charts, create live status cards, a danymic data table and a onpen-close sibe bar menu.
So for that I tried to use external libs as minimal as possible to show the vanila skills and the best resposives CSS to give a good
usage experience.

### Features

I choose **React with Typescript** library because it offers the benefits of enhanced type safety, improved code quality, better developer productivity, and seamless integration with the React ecosystem for building scalable and maintainable user interfaces.

Choosing **Vite** for this project to provides fast development with native ES modules, instant hot module replacement, efficient bundling, and optimized production builds, enhancing both developer productivity and application performance.

Opting for **Tailwind CSS** provides the advantages of rapid and consistent UI development through its utility-first approach, facilitating efficient styling, responsiveness, and easy customization, enhancing the overall design and user experience of your project.

Integrating **react-router-dom** to benefits of efficient client-side routing, enabling seamless navigation and dynamic rendering of components based on URLs, resulting in a smooth and responsive user experience while managing complex application states and views.

Embracing **Highcharts** , as the hiring test has suggested, offers the benefits of creating interactive and visually appealing charts and data visualizations with ease, enhancing the test project's data-driven storytelling and providing valuable insights to users in a user-friendly and intuitive manner.

Here I need to say that I need to handmade create some **Hichchars types** once it dosen't provides the necessery types.

Incorporating **Heroicons** library into your project, as the hiring test has suggested, to bring advantages of readily available and customizable SVG icons, simplifying the process of adding visually engaging and contextually relevant icons to enhance the user interface and user experience.

Incorporating **Leaflet** into the project as an option of an interactive and customizable maps, enabling users to visualize geographic data effectively, enhance location-based features, and provide users with an intuitive and immersive mapping experience that enriches the overall functionality and engagement of your application.

I've created a custom hook called **useBooleanPerSecond** which generates a random boolean value every second based on the specified speed (fast, normal, slow). This hook uses `useState`, `useCallback`, and `useEffect` from React to manage the state and timing logic. It calculates the interval time based on the chosen speed and updates the boolean value accordingly. This hook can be useful for scenarios where you need to generate periodic boolean values at different speeds for various UI interactions or animations.

### Getting Started

1. Have [Yarn Package](https://classic.yarnpkg.com/lang/en/docs/install) installed in your machine.
2. [Install the recommended font](#Installation).
3. Clone the projects is repository.
4. Run the project.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/otherRick/eco-power-monitor.git
   ```

2. Navigate to the project directory:

   ```sh
   cd eco-power-monitor
   ```

3. Install dependencies:
   ```sh
   yarn
   ```

### Usage

You can use the **sibebar** to navigate between screen but, only the main screen, Highlighs, brings content once the hiring test was focusing there.
Also you can get the sidebar fixed or unfixed as you want have the same smooth experience.

It is possible to see the charts inside the accordions components right side on the screen.

All the chart has a tooltip itself given the expecific charts stack information

### Dependencies

- React
- TypeScript
- Vite
- Babel
- Tailwind CSS
- React-router-dom
- Heroicons
- Highcharts
- Leaflet

### Desirable

I realy enjoy this hiring test as it was a great oppotunity to improve more my skills and have fun developping components and dynamic components.
But unfurtunetly there was no time to implement everythig I wish even after all the quest was done and here I will list some of them.

1- A mobile resposive version, but there was no procut designe for this.
2- A live motion for some other charts as the time pass.
3- A redirection link between the charts inside the map and its side accordion components details information.
4- MSW library to mock a backend and be abble to make http requests via resp or graphQL
5- Some chart could me draggable.
6- Show date option
7- Show portfolio option
8- Link porfolio option to the live state

### Troubleshooting

Well, unfurtunetly Highcharts is not a recently library so it has many issue and some missing types as mensioned early.
Looks like the orignal version was made for a HTML vanila and receive some adptation for newst technologies like as react aftwerwoods

The problem is byond the code writen, sometimes I see i non rendering components, wich forces me to use hooks as 'useEfect' to force a rerender.

Its documentations is so poor and confusing, wich makes me lost little more time trying to figure it out.

But after all it still an usable and a great lib to illustrate statistic datas.

### Acknowledgments

I would like to express my sincere gratitude to **[Delfos I.M.](https://delfosim.com/)** for giving me the opportunity to work on this project as part of the hiring process. It has been an insightful experience, allowing me to showcase my skills and apply what I've learned.

I am thankful for the chance to demonstrate my abilities and contribute to this test project. Regardless of the outcome, I'm grateful for the learning and growth that this experience has provided.

Thank you, [Delfos I.M.], for considering me for this opportunity.

Also thanks to:

- [Rafeal Costa] Support Analyst | Infrastructure | DevOps | Cloud Computing.
- [Karla Cardoso Araújo] HR Business Partner | Talent Acquisition | Headhunter | Tech Recruiter | at Delfos Intelligent Maintenance.
- [Renata R.] Product Designer at Delfos - Artificial Intelligence for the Energy Industry.

---

If you have any feedback or further questions about the project, please feel free to contact me at [drckbr@gmail.com]. -->
