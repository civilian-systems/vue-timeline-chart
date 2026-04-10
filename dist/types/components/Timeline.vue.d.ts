import type { TimelineItem, TimelineGroup, TimelineMarker, TimelineScale, TimelineScales } from '../types/timeline.ts';
declare const _default: <GTimelineItem extends TimelineItem, GTimelineGroup extends TimelineGroup, GTimelineMarker extends TimelineMarker>(__VLS_props: {
    onPointermove?: (value: {
        time: number;
        event: PointerEvent;
        item: GTimelineItem | GTimelineMarker;
    }) => any;
    onPointerdown?: (value: {
        time: number;
        event: PointerEvent;
        item: GTimelineItem | GTimelineMarker;
    }) => any;
    onPointerup?: (value: {
        time: number;
        event: PointerEvent;
        item: GTimelineItem | GTimelineMarker;
    }) => any;
    onWheel?: (value: WheelEvent) => any;
    onClick?: (value: {
        time: number;
        event: MouseEvent;
        item: GTimelineItem | GTimelineMarker;
    }) => any;
    onClickGroup?: (value: {
        id: string;
    }) => any;
    onContextmenu?: (value: {
        time: number;
        event: MouseEvent;
        item: GTimelineItem | GTimelineMarker;
    }) => any;
    onTouchmove?: (value: {
        time: number;
        event: TouchEvent;
    }) => any;
    onTouchstart?: (value: {
        time: number;
        event: TouchEvent;
    }) => any;
    onTouchend?: (value: {
        event: TouchEvent;
    }) => any;
    onMousemoveTimeline?: (value: {
        time: number;
        event: MouseEvent;
    }) => any;
    onMouseleaveTimeline?: (value: {
        event: MouseEvent;
    }) => any;
    onChangeViewport?: (value: {
        start: number;
        end: number;
    }) => any;
    onChangeScale?: (value: TimelineScale) => any;
    groups?: GTimelineGroup[];
    items?: GTimelineItem[];
    markers?: GTimelineMarker[];
    groupSelectable?: boolean;
    groupSelectableOnItemClick?: boolean;
    viewportMin?: number;
    viewportMax?: number;
    minViewportDuration?: number;
    maxViewportDuration?: number;
    initialViewportStart?: number;
    initialViewportEnd?: number;
    renderTimestampLabel?: (timestamp: number, scale: {
        unit: string;
        step: number;
    }) => string;
    fixedLabels?: boolean;
    minTimestampWidth?: number;
    maxZoomSpeed?: number;
    activeItems?: TimelineItem['id'][];
    maxOffsetOutsideViewport?: number;
    scales?: TimelineScales[];
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
} & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, __VLS_ctx?: {
    attrs: any;
    emit: {
        (e: 'pointermove', value: {
            time: number;
            event: PointerEvent;
            item: GTimelineItem | GTimelineMarker;
        }): void;
        (e: 'pointerdown', value: {
            time: number;
            event: PointerEvent;
            item: GTimelineItem | GTimelineMarker;
        }): void;
        (e: 'pointerup', value: {
            time: number;
            event: PointerEvent;
            item: GTimelineItem | GTimelineMarker;
        }): void;
        (e: 'wheel', value: WheelEvent): void;
        (e: 'click', value: {
            time: number;
            event: MouseEvent;
            item: GTimelineItem | GTimelineMarker;
        }): void;
        (e: 'clickGroup', value: {
            id: string;
        }): void;
        (e: 'contextmenu', value: {
            time: number;
            event: MouseEvent;
            item: GTimelineItem | GTimelineMarker;
        }): void;
        (e: 'touchmove', value: {
            time: number;
            event: TouchEvent;
        }): void;
        (e: 'touchstart', value: {
            time: number;
            event: TouchEvent;
        }): void;
        (e: 'touchend', value: {
            event: TouchEvent;
        }): void;
        (e: 'mousemoveTimeline', value: {
            time: number;
            event: MouseEvent;
        }): void;
        (e: 'mouseleaveTimeline', value: {
            event: MouseEvent;
        }): void;
        (e: 'changeViewport', value: {
            start: number;
            end: number;
        }): void;
        (e: 'changeScale', value: TimelineScale): void;
    };
    slots: Partial<Record<`items-${string}`, (_: {
        group: GTimelineGroup;
        itemsInViewport: GTimelineItem[];
        viewportStart: number;
        viewportEnd: number;
    }) => any>> & {
        "timestamps-before"?(_: {
            scale: {
                unit: any;
                step: any;
            };
        }): any;
        timestamp?(_: {
            timestamp: number;
            scale: {
                unit: any;
                step: any;
            };
        }): any;
        "timestamps-after"?(_: {
            scale: {
                unit: any;
                step: any;
            };
        }): any;
        marker?(_: {
            item: GTimelineMarker;
        }): any;
        "group-label"?(_: {
            group: GTimelineGroup;
        }): any;
        item?(_: {
            item: GTimelineItem;
        }): any;
    };
}, __VLS_expose?: (exposed: import("vue").ShallowUnwrapRef<{
    setViewport: (start?: number, end?: number) => void;
    onWheel: (e: WheelEvent) => void;
    clearCache: () => void;
}>) => void, __VLS_setup?: Promise<{
    props: {
        onPointermove?: (value: {
            time: number;
            event: PointerEvent;
            item: GTimelineItem | GTimelineMarker;
        }) => any;
        onPointerdown?: (value: {
            time: number;
            event: PointerEvent;
            item: GTimelineItem | GTimelineMarker;
        }) => any;
        onPointerup?: (value: {
            time: number;
            event: PointerEvent;
            item: GTimelineItem | GTimelineMarker;
        }) => any;
        onWheel?: (value: WheelEvent) => any;
        onClick?: (value: {
            time: number;
            event: MouseEvent;
            item: GTimelineItem | GTimelineMarker;
        }) => any;
        onClickGroup?: (value: {
            id: string;
        }) => any;
        onContextmenu?: (value: {
            time: number;
            event: MouseEvent;
            item: GTimelineItem | GTimelineMarker;
        }) => any;
        onTouchmove?: (value: {
            time: number;
            event: TouchEvent;
        }) => any;
        onTouchstart?: (value: {
            time: number;
            event: TouchEvent;
        }) => any;
        onTouchend?: (value: {
            event: TouchEvent;
        }) => any;
        onMousemoveTimeline?: (value: {
            time: number;
            event: MouseEvent;
        }) => any;
        onMouseleaveTimeline?: (value: {
            event: MouseEvent;
        }) => any;
        onChangeViewport?: (value: {
            start: number;
            end: number;
        }) => any;
        onChangeScale?: (value: TimelineScale) => any;
        groups?: GTimelineGroup[];
        items?: GTimelineItem[];
        markers?: GTimelineMarker[];
        groupSelectable?: boolean;
        groupSelectableOnItemClick?: boolean;
        viewportMin?: number;
        viewportMax?: number;
        minViewportDuration?: number;
        maxViewportDuration?: number;
        initialViewportStart?: number;
        initialViewportEnd?: number;
        renderTimestampLabel?: (timestamp: number, scale: {
            unit: string;
            step: number;
        }) => string;
        fixedLabels?: boolean;
        minTimestampWidth?: number;
        maxZoomSpeed?: number;
        activeItems?: TimelineItem['id'][];
        maxOffsetOutsideViewport?: number;
        scales?: TimelineScales[];
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
    expose(exposed: import("vue").ShallowUnwrapRef<{
        setViewport: (start?: number, end?: number) => void;
        onWheel: (e: WheelEvent) => void;
        clearCache: () => void;
    }>): void;
    attrs: any;
    slots: Partial<Record<`items-${string}`, (_: {
        group: GTimelineGroup;
        itemsInViewport: GTimelineItem[];
        viewportStart: number;
        viewportEnd: number;
    }) => any>> & {
        "timestamps-before"?(_: {
            scale: {
                unit: any;
                step: any;
            };
        }): any;
        timestamp?(_: {
            timestamp: number;
            scale: {
                unit: any;
                step: any;
            };
        }): any;
        "timestamps-after"?(_: {
            scale: {
                unit: any;
                step: any;
            };
        }): any;
        marker?(_: {
            item: GTimelineMarker;
        }): any;
        "group-label"?(_: {
            group: GTimelineGroup;
        }): any;
        item?(_: {
            item: GTimelineItem;
        }): any;
    };
    emit: {
        (e: 'pointermove', value: {
            time: number;
            event: PointerEvent;
            item: GTimelineItem | GTimelineMarker;
        }): void;
        (e: 'pointerdown', value: {
            time: number;
            event: PointerEvent;
            item: GTimelineItem | GTimelineMarker;
        }): void;
        (e: 'pointerup', value: {
            time: number;
            event: PointerEvent;
            item: GTimelineItem | GTimelineMarker;
        }): void;
        (e: 'wheel', value: WheelEvent): void;
        (e: 'click', value: {
            time: number;
            event: MouseEvent;
            item: GTimelineItem | GTimelineMarker;
        }): void;
        (e: 'clickGroup', value: {
            id: string;
        }): void;
        (e: 'contextmenu', value: {
            time: number;
            event: MouseEvent;
            item: GTimelineItem | GTimelineMarker;
        }): void;
        (e: 'touchmove', value: {
            time: number;
            event: TouchEvent;
        }): void;
        (e: 'touchstart', value: {
            time: number;
            event: TouchEvent;
        }): void;
        (e: 'touchend', value: {
            event: TouchEvent;
        }): void;
        (e: 'mousemoveTimeline', value: {
            time: number;
            event: MouseEvent;
        }): void;
        (e: 'mouseleaveTimeline', value: {
            event: MouseEvent;
        }): void;
        (e: 'changeViewport', value: {
            start: number;
            end: number;
        }): void;
        (e: 'changeScale', value: TimelineScale): void;
    };
}>) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> & {
    __ctx?: {
        props: {
            onPointermove?: (value: {
                time: number;
                event: PointerEvent;
                item: GTimelineItem | GTimelineMarker;
            }) => any;
            onPointerdown?: (value: {
                time: number;
                event: PointerEvent;
                item: GTimelineItem | GTimelineMarker;
            }) => any;
            onPointerup?: (value: {
                time: number;
                event: PointerEvent;
                item: GTimelineItem | GTimelineMarker;
            }) => any;
            onWheel?: (value: WheelEvent) => any;
            onClick?: (value: {
                time: number;
                event: MouseEvent;
                item: GTimelineItem | GTimelineMarker;
            }) => any;
            onClickGroup?: (value: {
                id: string;
            }) => any;
            onContextmenu?: (value: {
                time: number;
                event: MouseEvent;
                item: GTimelineItem | GTimelineMarker;
            }) => any;
            onTouchmove?: (value: {
                time: number;
                event: TouchEvent;
            }) => any;
            onTouchstart?: (value: {
                time: number;
                event: TouchEvent;
            }) => any;
            onTouchend?: (value: {
                event: TouchEvent;
            }) => any;
            onMousemoveTimeline?: (value: {
                time: number;
                event: MouseEvent;
            }) => any;
            onMouseleaveTimeline?: (value: {
                event: MouseEvent;
            }) => any;
            onChangeViewport?: (value: {
                start: number;
                end: number;
            }) => any;
            onChangeScale?: (value: TimelineScale) => any;
            groups?: GTimelineGroup[];
            items?: GTimelineItem[];
            markers?: GTimelineMarker[];
            groupSelectable?: boolean;
            groupSelectableOnItemClick?: boolean;
            viewportMin?: number;
            viewportMax?: number;
            minViewportDuration?: number;
            maxViewportDuration?: number;
            initialViewportStart?: number;
            initialViewportEnd?: number;
            renderTimestampLabel?: (timestamp: number, scale: {
                unit: string;
                step: number;
            }) => string;
            fixedLabels?: boolean;
            minTimestampWidth?: number;
            maxZoomSpeed?: number;
            activeItems?: TimelineItem['id'][];
            maxOffsetOutsideViewport?: number;
            scales?: TimelineScales[];
            weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps;
        expose(exposed: import("vue").ShallowUnwrapRef<{
            setViewport: (start?: number, end?: number) => void;
            onWheel: (e: WheelEvent) => void;
            clearCache: () => void;
        }>): void;
        attrs: any;
        slots: Partial<Record<`items-${string}`, (_: {
            group: GTimelineGroup;
            itemsInViewport: GTimelineItem[];
            viewportStart: number;
            viewportEnd: number;
        }) => any>> & {
            "timestamps-before"?(_: {
                scale: {
                    unit: any;
                    step: any;
                };
            }): any;
            timestamp?(_: {
                timestamp: number;
                scale: {
                    unit: any;
                    step: any;
                };
            }): any;
            "timestamps-after"?(_: {
                scale: {
                    unit: any;
                    step: any;
                };
            }): any;
            marker?(_: {
                item: GTimelineMarker;
            }): any;
            "group-label"?(_: {
                group: GTimelineGroup;
            }): any;
            item?(_: {
                item: GTimelineItem;
            }): any;
        };
        emit: {
            (e: 'pointermove', value: {
                time: number;
                event: PointerEvent;
                item: GTimelineItem | GTimelineMarker;
            }): void;
            (e: 'pointerdown', value: {
                time: number;
                event: PointerEvent;
                item: GTimelineItem | GTimelineMarker;
            }): void;
            (e: 'pointerup', value: {
                time: number;
                event: PointerEvent;
                item: GTimelineItem | GTimelineMarker;
            }): void;
            (e: 'wheel', value: WheelEvent): void;
            (e: 'click', value: {
                time: number;
                event: MouseEvent;
                item: GTimelineItem | GTimelineMarker;
            }): void;
            (e: 'clickGroup', value: {
                id: string;
            }): void;
            (e: 'contextmenu', value: {
                time: number;
                event: MouseEvent;
                item: GTimelineItem | GTimelineMarker;
            }): void;
            (e: 'touchmove', value: {
                time: number;
                event: TouchEvent;
            }): void;
            (e: 'touchstart', value: {
                time: number;
                event: TouchEvent;
            }): void;
            (e: 'touchend', value: {
                event: TouchEvent;
            }): void;
            (e: 'mousemoveTimeline', value: {
                time: number;
                event: MouseEvent;
            }): void;
            (e: 'mouseleaveTimeline', value: {
                event: MouseEvent;
            }): void;
            (e: 'changeViewport', value: {
                start: number;
                end: number;
            }): void;
            (e: 'changeScale', value: TimelineScale): void;
        };
    };
};
export default _default;
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
