# simple-react-toast-notifications

A simple and customizable toast notification library for React applications.

## Installation

You can install `simple-react-toast-notifications` via npm or yarn:

```bash
npm install simple-react-toast-notifications
```

or

```bash
yarn add simple-react-toast-notifications
```

## Usage

### 1. Wrap your application with ToastProvider

Wrap your root component with `ToastProvider` to enable toast notifications in your application:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ToastProvider from 'simple-react-toast-notifications';

ReactDOM.render(
  <ToastProvider>
    <App />
  </ToastProvider>,
  document.getElementById('root')
);
```

### 2. Use the useToasts hook to manage and display toasts

Use the `useToasts` hook to add and remove toast notifications from anywhere in your application:

```jsx
import React from 'react';
import { useToasts } from 'simple-react-toast-notifications';

const ExampleComponent = () => {
  const { addToast } = useToasts();

  const handleButtonClick = () => {
    addToast('This is a toast message!');
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show Toast</button>
    </div>
  );
};

export default ExampleComponent;
```

## API

### ToastProvider

#### Props

- `children`: ReactNode (required) - The root component of your application.

### useToasts

#### Returns

An object containing the following functions:

- `addToast(content: string)`: Function to add a new toast with the specified content.
- `removeToast(id: string)`: Function to remove a toast with the specified ID.

## License

This library is licensed under the MIT License.
