import React from "react";
import { useEventListener } from "./useEventListener.hook";

export function useEscapeKey(cb) {
    const handleKeydown = React.useCallback((ev) => {
        if(ev.code === 'Escape') cb()
    }, [cb])

    useEventListener('keydown', handleKeydown)
}