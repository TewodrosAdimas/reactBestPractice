# Hello React Project with Multiple Props

This is a basic React project that demonstrates how to pass and use multiple properties (props) in a functional component. The `Hello` component now accepts both `name` and `ID` as props and displays a greeting message using `name`.

## Project Structure

The project consists of:
- **`Hello` Component**: A simple functional component that accepts and displays props.
- **`index.js`**: The main file where the component is rendered into the DOM.

## Components and Props

### Hello Component

The `Hello` component is a functional component that takes in `props` as an argument. Props are used to pass data from the parent to the child component.

```javascript
const Hello = (props) => (
  <div>
    <h1>Hello {props.name}</h1>
  </div>
);
