import React, { createContext, useContext, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Create a context for managing toast notifications
const ToastContext = createContext();

// Custom hook to consume toast context
export const useToasts = () => useContext(ToastContext);

// ToastProvider component to manage toast state and provide context
const ToastProvider = ({ children }) => {
  // State to hold the list of toasts
  const [toasts, setToasts] = useState([]);

  // Function to add a new toast
  const addToast = (content) => {
    // Generate a unique ID for the toast
    const id = Math.random().toString(36).substring(2, 9);
    // Add the new toast to the list
    setToasts([...toasts, { id, content }]);
  };

  // Function to remove a toast
  const removeToast = (id) => {
    // Filter out the toast with the given ID
    setToasts(toasts.filter(toast => toast.id !== id));
  };

  // Render the toast notifications using TransitionGroup and CSSTransition
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <TransitionGroup>
        {toasts.map(({ id, content }) => (
          <CSSTransition key={id} timeout={500} classNames="toast">
            <div className="toast">{content}</div>
          </CSSTransition>
        ))}
      </TransitionGroup>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
