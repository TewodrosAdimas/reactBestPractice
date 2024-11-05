# Hello React Project

This is a basic React project to demonstrate how properties (props) are passed to components. This project includes a functional component, `Hello`, which accepts props and renders a greeting message.

## Project Structure

The project consists of:
- **`Hello` Component**: A simple functional component that displays a message.
- **`index.js`**: The main file where the component is rendered into the DOM.

## Components and Props

### Hello Component

The `Hello` component is a functional component that accepts `props` as an argument. Props allow us to pass data from a parent component to a child component.

```javascript
const Hello = (props) => (
  <div>
    <h1>Hello React</h1>
  </div>
);
