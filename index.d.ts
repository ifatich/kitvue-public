import type { App } from 'vue';
import type { Component } from 'vue';

declare const KitVue: {
  install(app: App): void;
};

export const components: Record<string, Component>;
export default KitVue;
