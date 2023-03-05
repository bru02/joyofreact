import React from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey.hook";

export const ToastContext = React.createContext([]);

let toastId = 0;

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const handleEscapeKey = React.useCallback(() => setToasts([]), [])

  useEscapeKey(handleEscapeKey)

  const value = React.useMemo(() => {
    function deleteToast(oldId) {
      setToasts((toasts) => toasts.filter(({ id }) => id !== oldId));
    }

    function createToast(props) {
      const newId = ++toastId;
      const newToast = { id: newId, ...props };
      const oldDismiss = newToast.onDismiss;

      newToast.onDismiss = (ev) => {
        deleteToast(newId);
        oldDismiss?.(ev, newId);
      };

      setToasts((toasts) => [...toasts, newToast]);

      return newId;
    }

    return {
      toasts,
      deleteToast,
      createToast,
    };
  }, [toasts]);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
