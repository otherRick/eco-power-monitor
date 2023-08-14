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

I would like to express my gratitude to [Delfos I.M.](https://delfosim.com/) for providing the opportunity to work on this project as part of their hiring process. This experience allowed me to showcase my skills and learning.

Special thanks to the team members who supported and contributed to this project:

- **Rafael Costa** Support Analyst | Infrastructure | DevOps | Cloud Computing
- **Karla Cardoso Araújo** HR Business Partner | Talent Acquisition | Tech Recruiter
- **Renata R.** Product Designer at Delfos - Artificial Intelligence for the Energy Industry

I'm thankful for the chance to contribute to this test project and for the learning it brought. Regardless of the outcome, this experience has been valuable for my growth.

Feel free to contact me at [drckbr@gmail.com] for feedback or questions about the project.
