---

# React Calculator

This project is an advanced calculator application built with React, allowing users to perform a variety of arithmetic operations, including exponentiation and percentage calculations. 

## Features

- **Basic Arithmetic Operations**: Add, subtract, multiply, and divide numbers.
- **Exponentiation**: Calculate powers (e.g., `2 ** 3`).
- **Percentage Calculation**: Convert numbers to percentages with a dedicated `%` function.
- **Clear and Backspace Functions**: Reset the calculator or remove the last digit entered.
- **Decimal Precision**: Results rounded to 4 decimal places for improved readability.
- **Responsive Interface**: Layout adapts smoothly to various screen sizes for a user-friendly experience.

## Project Structure

- **`Calculator` Component**: The main component handling display and all calculation logic.
- **`CalcButton` Component**: A reusable button component for numbers, operators, and functions.

## Code Breakdown

- **State Management**: Uses React's `useState` to manage values such as the current input, total, operator status, and initial state.
- **Core Functions**:
  - `handleNumber(value)`: Adds a number to the current input.
  - `handleOperator(value)`: Sets up an operation (e.g., +, -, *, /) and calculates intermediate totals.
  - `handlePercentage()`: Converts the current value into a percentage.
  - `handleExponential()`: Executes exponentiation based on a base and exponent.
  - `handleDecimal()`: Adds a decimal point to the current input.
  - `handleBackspace()`: Removes the last character in the current input.
  - `handleClear()`: Resets the calculator's display and state.
  - `handleEquals()`: Finalizes and displays the result of the current calculation.
  - `doCalculation()`: Processes the calculation based on the selected operation and rounds the result to 4 decimal places.

## Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/TewodrosAdimas/reactBestPractice.git
   ```
2. Navigate to the project folder:
   ```bash
   cd react-calculator
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Example Usage

- To calculate `7 + 3 = 10`:
  - Click `7`, `+`, `3`, then `=`.
- For exponentiation, try `2 ** 3` to get `8`.
- Convert `50` to a percentage by clicking `50` then `%`.

## Future Enhancements

- **Keyboard Support**: Enable seamless input through keyboard interaction.
- **Memory Functions**: Add memory recall, store, and clear functions to extend usability.
- **Additional Operations**: Add scientific functions like square root and trigonometry for expanded calculations.

## License

This project is licensed under the MIT License.

## Acknowledgments

This project was created as part of a journey to deepen skills in React and JavaScript, focusing on state and event handling in functional components.