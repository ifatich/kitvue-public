import "./assets/scss/g-kit.scss";
import components from "./components/components";

const pgdVueUiKit = {
  install(Vue) {
    for (const prop in components) {
      if (Object.prototype.hasOwnProperty.call(components, prop)) {
        const component = components[prop];
        Vue.component(prop, component);

        if (component.name && component.name !== prop) {
          Vue.component(component.name, component);
        }
      }
    }
  },
};

export default pgdVueUiKit;
export { components };
export { default as Accordion } from "./components/Accordion/Accordion.vue";
export { default as AddAmount } from "./components/AddAmount/AddAmountCounter.vue";
export { default as Alert } from "./components/Alert/Alert.vue";
export { default as AlertVarian } from "./components/Alert/AlertVarian.vue";
export { default as Aspect } from "./components/Aspect/Aspect.vue";
export { default as Breadcrumb } from "./components/Breadcrumb/Breadcrumb.vue";
export { default as Button } from "./components/Button/Button.vue";
export { default as ButtonSize } from "./components/Button/ButtonSize.vue";
export { default as CardAccount } from "./components/Card/CardAccount.vue";
export { default as CardArticle } from "./components/Card/CardArticle.vue";
export { default as CardArticleHighlight } from "./components/Card/CardArticleHighlight.vue";
export { default as CardContent } from "./components/Card/CardContent.vue";
export { default as CardEvent } from "./components/Card/CardEvent.vue";
export { default as CardFile } from "./components/Card/CardFile.vue";
export { default as CardProduct } from "./components/Card/CardProduct.vue";
export { default as CardProductKonvensional } from "./components/Card/CardProductKonvensional.vue";
export { default as CardProductSyariah } from "./components/Card/CardProductSyariah.vue";
export { default as CardPromo } from "./components/Card/CardPromo.vue";
export { default as CardPromoCode } from "./components/Card/CardPromoCode.vue";
export { default as CardVoucher } from "./components/Card/CardVoucher.vue";
export { default as DatePicker } from "./components/Dropdown/DatePicker.vue";
export { default as Dropdown } from "./components/Dropdown/InputDropdown.vue";
export { default as FilePickerLG } from "./components/Filepicker/FilePickerLG.vue";
export { default as FilePickerSM } from "./components/Filepicker/FilePickerSM.vue";
export { default as InputPersen } from "./components/Input/InputNominalEnd.vue";
export { default as Input } from "./components/Input/InputSmallText.vue";
export { default as InputKtp } from "./components/Input/InputKTP.vue";
export { default as InputSmallDate } from "./components/Input/InputSmallDate.vue";
export { default as InputSearch } from "./components/Input/InputSearch.vue";
export { default as TextArea } from "./components/Input/InputTextArea.vue";
export { default as ModalComponent } from "./components/Modal/ModalComponent.vue";
export { default as ListGroupUnordered } from "./components/ListGroup/ListGroupUnordered.vue";
export { default as ListGroupUnit } from "./components/ListGroup/ListGroupUnit.vue";
export { default as ListOrdered } from "./components/ListGroup/ListGroupOrdered.vue";
export { default as TableData } from "./components/Table/TableData.vue";
export { default as DataTable } from "./components/Table/DataTable.vue";
export { default as TableSticky } from "./components/Table/TableSticky.vue";
export { default as DataApps } from "./components/Table/TableData.vue";
export { default as Badge } from "./components/Badge/Badge.vue";
export { default as DropdownGroupItem } from "./components/Dropdown/DropdownGroupItem.vue";
export { default as DropdownItem } from "./components/Dropdown/DropdownItem.vue";
