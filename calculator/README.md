# React Calculator

This project is a basic calculator application built with React. It allows users to perform arithmetic operations such as addition, subtraction, multiplication, and division.

## Features

- **Basic arithmetic operations**: Add, subtract, multiply, and divide numbers.
- **Clear function**: Reset the calculator to its initial state.
- **Chained calculations**: Supports chained operations (e.g., `2 + 3 * 4`).
- **Responsive interface**: Layout designed to adapt to various screen sizes.

## Project Structure

- `Calculator` component: The main component handling the calculator's display and logic.
- `CalcButton` component: A reusable button component used throughout the calculator for each number and operator.

## Code Breakdown

- **State**: Uses React's `useState` hook to manage the current number, total result, initial input state, and last operator.
- **Functions**:
  - `handleNumber(value)`: Appends numbers to the current input.
  - `handleOperator(value)`: Triggers an operation (+, -, *, /) and calculates intermediate totals.
  - `doCalculation()`: Executes the current calculation based on the last operator.
  - `handleClear()`: Resets the calculator display and state.
  - `handleEquals()`: Calculates the final result and displays it.

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

## Example

- Perform a calculation:
  - Click `7`, then `+`, then `3`, then `=`.
  - The display should show `10`.

## Future Enhancements

- **Additional operations**: Add support for operations such as percentage and square root.
- **Keyboard input**: Enable keyboard support for more seamless user interaction.
- **Memory functions**: Implement memory storage, recall, and clear functions.

## License

This project is licensed under the MIT License.

## Acknowledgments

This project was created to practice and learn React basics, particularly handling state and events in functional components.
