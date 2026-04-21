<template>
  <div class="timeline-tooltip-content" :class="[position]">
    <slot></slot>
    <div class="timeline-tooltip-arrow"></div>
  </div>
</template>

<script lang="ts" setup>
  import { inject, type Ref, computed } from 'vue';

  const tooltipPositionClass = inject<Ref<string>>('tooltipPositionClass');

  const position = computed(() => tooltipPositionClass?.value ?? 'top-center');
</script>

<style lang="scss" scoped>
  .timeline-tooltip-content {
    --_bg: var(--tooltip-background, rgba(0, 0, 0, 0.85));
    --_color: var(--tooltip-color, #fff);
    --_padding: var(--tooltip-padding, 0.5em 0.75em);
    --_border-radius: var(--tooltip-border-radius, 6px);
    --_arrow-size: var(--tooltip-arrow-size, 6px);

    position: relative;
    background: var(--_bg);
    color: var(--_color);
    padding: var(--_padding);
    border-radius: var(--_border-radius);
    white-space: nowrap;
    font-size: 0.85em;
  }

  .timeline-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border: var(--_arrow-size) solid transparent;
  }

  // top-*: arrow at bottom pointing down
  .top-center,
  .top-left,
  .top-right {
    .timeline-tooltip-arrow {
      bottom: calc(-2 * var(--_arrow-size));
      border-top-color: var(--_bg);
    }
  }

  // bottom-*: arrow at top pointing up
  .bottom-center,
  .bottom-left,
  .bottom-right {
    .timeline-tooltip-arrow {
      top: calc(-2 * var(--_arrow-size));
      border-bottom-color: var(--_bg);
    }
  }

  // *-center: arrow centered
  .top-center,
  .bottom-center {
    .timeline-tooltip-arrow {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  // *-left: tooltip shifted left, cursor at right → arrow on right
  .top-left,
  .bottom-left {
    .timeline-tooltip-arrow {
      right: var(--_arrow-size);
    }
  }

  // *-right: tooltip shifted right, cursor at left → arrow on left
  .top-right,
  .bottom-right {
    .timeline-tooltip-arrow {
      left: var(--_arrow-size);
    }
  }
</style>
