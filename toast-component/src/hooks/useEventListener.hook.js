import React from "react";

export function useEventListener(event, cb, target = window) {
  React.useEffect(() => {
    target.addEventListener(event, cb);
    console.log('new evt listener', event)

    return () => target.removeEventListener(event, cb);
  }, [event, cb, target]);
}
