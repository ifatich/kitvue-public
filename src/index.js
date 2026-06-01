import components from "./components/components";

const pgdVueUiKit = {
  install(Vue) {
    for (const prop in components) {
      if (Object.prototype.hasOwnProperty.call(components, prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  },
};

export default pgdVueUiKit;
