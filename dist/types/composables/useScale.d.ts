import { ComputedRef, Ref } from 'vue';
import { TimelineBaseUnits, TimelineScales } from '../types/timeline.ts';
/**
 * The scales define the temporal units and their regularity.
 */
export declare const useScale: (viewportStart: Ref<number>, viewportEnd: Ref<number>, viewportDuration: Ref<number>, maxLabelsInView: Ref<number>, scales: ComputedRef<TimelineScales[]>, weekStartsOn: ComputedRef<0 | 1 | 2 | 3 | 4 | 5 | 6>) => {
    scale: ComputedRef<{
        unit: any;
        step: any;
    }>;
    baseDividers: Record<TimelineBaseUnits, number>;
    visibleTimestamps: ComputedRef<number[]>;
};
