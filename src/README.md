# [Super Galactic Age Calculator](https://github.com/ayohana/galactic-age-calculator.git/)

#### Test Driven Development Exercise with JavaScript for [Epicodus](https://www.epicodus.com/), 02.07.2020

#### By [**Adela Darmansyah**](https://ayohana.github.io/portfolio/)

## Description

![An snippet of Super Galactic Age Calculator](./img/homepage.JPG/)

**The back-end of this website calculates a person's age in solar years of various planets in our Solar System.** The user will enter their age in years and the back-end logic will return:

* The user's age in Mercury years (.24 Earth years per 1 Mercury year).
* The user's age in Venus years (.62 Earth years per 1 Venus year).
* The user's age in Mars years (1.88 Earth years per 1 Mars year).
* The user's age in Jupiter years (11.86 Earth years per 1 Jupiter year).
* The user's remaining life expectancy based on their demographics.
* If the user has surpassed their life expectancy, it will return the number of years they have lived past the life expectancy.

## Specs

<details>
  <summary>Click to expand!</summary>

| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program Returns User's Age in Earth Years** | 25 | 25 |
| **Program Returns User's Age in Mercury Years** | 25 | 6 |
| **Program Returns User's Age in Venus Years** | 25 | 15.5 |
| **Program Returns User's Age in Mars Years** | 25 | 47 |
| **Program Returns User's Age in Jupiter Years** | 25 | 296.5 |
| **Program Returns User's Remaining Life Expectancy Based on Their Demographics** | age 25, exercises daily, BMI within normal limits, occupation: professional rock climber | 75 |
| **Program Returns User's Number of Years Lived Past Their Life Expectancy if User Surpassed Their Life Expectancy** | age 105, exercises daily, BMI within normal limits, occupation: professional rock climber | 5 |

</details>

## Setup/Installation Requirements

* Clone this [repository](https://github.com/ayohana/galactic-age-calculator.git/)
* Open the command line and navigate into the repository.
* Use the command `npm install` to install all necessary plugins.
* To test all TDD specs, use the command `npm test`.

## Known Bugs

No known bugs at this time.

## Support and contact details

Feel free to provide feedback via email: adela.yohana@gmail.com.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* Markdown
* npm
  * Webpack
  * Jest
  * Code Linter
  * _etc.*_

_*Check out `package.json` file to see the complete list of all plugins._

### License

This webpage is licensed under the MIT license.

Copyright (c) 2020 **Adela Darmansyah**