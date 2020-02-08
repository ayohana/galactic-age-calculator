# [Super Galactic Age Calculator](https://github.com/ayohana/galactic-age-calculator.git/)

#### Test Driven Development Exercise with JavaScript for [Epicodus](https://www.epicodus.com/), 02.07.2020

#### By [**Adela Darmansyah**](https://ayohana.github.io/portfolio/)

## Description

**The back-end of this web application calculates a person's age in solar years of all the planets in our Solar System.** The user will be able to enter their age in years and the back-end logic will return:

* The user's age in Mercury years (.24 Earth years per 1 Mercury year).
* The user's age in Venus years (.62 Earth years per 1 Venus year).
* The user's age in Mars years (1.88 Earth years per 1 Mars year).
* The user's age in Jupiter years (11.86 Earth years per 1 Jupiter year).
* The user's age in Saturn years (0.08 Earth years per 1 Saturn year).
* The user's age in Uranus years (0.23 Earth years per 1 Uranus year).
* The user's age in Neptune years (0.45 Earth years per 1 Neptune year).
* The user's remaining life expectancy on each planet based on their demographics.
* If the user has surpassed their life expectancy, it will return the number of years they have lived past their life expectancy on each planet.

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
| **Program Returns User's Age in Saturn Years** | 25 | 2 |
| **Program Returns User's Age in Uranus Years** | 25 | 5.75 |
| **Program Returns User's Age in Neptune Years** | 25 | 11.25 |
| **Program Returns User's Remaining Life Expectancy Based on Their Demographics** | age 25, exercises daily, BMI within normal limits, occupation: Professional Rock Climber | 75 |
| **Program Returns User's Remaining Life Expectancy on Each Planet** | age 25, exercises daily, BMI within normal limits, occupation: Professional Rock Climber | Remaining Life on Earth = 75, Mercury = 18, Venus = 46.5, Mars = 141, and so on. |
| **Program Returns User's Number of Years Lived Past Their Life Expectancy if User Surpassed Their Life Expectancy** | age 105, exercises daily, BMI within normal limits, occupation: Professional Rock Climber | 5 |
| **Program Returns User's Number of Years Lived Surpassing Their Life Expectancy on Each Planet** | age 105, exercises daily, BMI within normal limits, occupation: Professional Rock Climber | Extra life on Earth = 5, Mercury = 1.2, Venus = 3.1, and so on. |

</details>

## Setup/Installation Requirements

* Clone this [repository](https://github.com/ayohana/galactic-age-calculator.git/)
* Open the command line and navigate into the repository.
* Use the command `npm install` to install all necessary plugins.
* To test all TDD specs, use the command `npm test`.

## Known Bugs

No known bugs at this time. _However,_ **there is no UI to this web application.**

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

This web application is licensed under the MIT license.

Copyright (c) 2020 **Adela Darmansyah**