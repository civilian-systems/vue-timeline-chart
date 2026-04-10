import { Ref } from 'vue';
/**
 * Helpers for touch events.
 */
export declare function useTouchEvents({ viewportStart, viewportEnd }: {
    viewportStart: Ref<number>;
    viewportEnd: Ref<number>;
}): {
    setLastTouchX: (event: TouchEvent) => void;
    setInitialTouchList: (event: TouchEvent) => void;
    state: {
        lastTouchX: number;
        initialTouchList: TouchList;
        initialTouchViewportStart: number;
        initialTouchViewportEnd: number;
        initialPinchDistance: number;
    };
};
