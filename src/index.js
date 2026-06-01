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

// Named Exports for all components
export { default as Accordion } from "./components/Accordion/Accordion.vue";
export { default as AccordionItem } from "./components/Accordion/AccordionItem.vue";
export { default as AddAmount } from "./components/AddAmount/AddAmountCounter.vue";
export { default as AddAmountItem } from "./components/AddAmount/AddAmountItem.vue";
export { default as AddAmountDenom } from "./components/AddAmount/AddAmountDenom.vue";
export { default as Alert } from "./components/Alert/Alert.vue";
export { default as AlertVarian } from "./components/Alert/AlertVarian.vue";
export { default as Aspect } from "./components/Aspect/Aspect.vue";
export { default as Breadcrumb } from "./components/Breadcrumb/Breadcrumb.vue";
export { default as Button } from "./components/Button/Button.vue";
export { default as ButtonSize } from "./components/Button/ButtonSize.vue";
export { default as ButtonRightSlider } from "./components/Button/ButtonRightSlider.vue";
export { default as ButtonLeftSlider } from "./components/Button/ButtonLeftSlider.vue";
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
export { default as InputDropdownMultiple } from "./components/Dropdown/InputDropdownMultiple.vue";
export { default as InputDropdownHeader } from "./components/Dropdown/InputDropdownHeader.vue";
export { default as FilePickerLG } from "./components/Filepicker/FilePickerLG.vue";
export { default as FilePickerSM } from "./components/Filepicker/FilePickerSM.vue";
export { default as InputPersen } from "./components/Input/InputNominalEnd.vue";
export { default as Input } from "./components/Input/InputSmallText.vue";
export { default as InputKtp } from "./components/Input/InputKTP.vue";
export { default as TextArea } from "./components/Input/InputTextArea.vue";
export { default as ModalComponent } from "./components/Modal/ModalComponent.vue";
export { default as InputSmallDate } from "./components/Input/InputSmallDate.vue";
export { default as ListGroupUnordered } from "./components/ListGroup/ListGroupUnordered.vue";
export { default as ListGroupUnit } from "./components/ListGroup/ListGroupUnit.vue";
export { default as ListOrdered } from "./components/ListGroup/ListGroupOrdered.vue";
export { default as ListSorted } from "./components/ListGroup/ListSorted.vue";
export { default as TableData } from "./components/Table/TableData.vue";
export { default as DataTable } from "./components/Table/DataTable.vue";
export { default as TableSticky } from "./components/Table/TableSticky.vue";
export { default as DataApps } from "./components/Table/TableData.vue";
export { default as Badge } from "./components/Badge/Badge.vue";
export { default as DropdownGroupItem } from "./components/Dropdown/DropdownGroupItem.vue";
export { default as DropdownItem } from "./components/Dropdown/DropdownItem.vue";
export { default as InputSearch } from "./components/Input/InputSearch.vue";
export { default as InputText } from "./components/Input/InputText.vue";
export { default as InputNominalStart } from "./components/Input/InputNominalStart.vue";
export { default as InputWithActionButton } from "./components/Input/InputWithActionButton.vue";
export { default as CalendarDropdown } from "./components/Input/CalendarDropdown.vue";
export { default as InputCamera } from "./components/Input/InputCamera.vue";
export { default as DateRangePicker } from "./components/Input/DateRangePicker.vue";
export { default as InputMonth } from "./components/Input/InputMonth.vue";
export { default as TimePickerResponsive } from "./components/Input/TimePickerResponsive.vue";
export { default as TimePicker } from "./components/Input/TimePicker.vue";
export { default as InputNIK } from "./components/Input/InputNIK.vue";
export { default as InputTimePicker } from "./components/Input/InputTimePicker.vue";
export { default as InputSearchQR } from "./components/Input/InputSearchQR.vue";
export { default as DateRangePickerOption } from "./components/Input/DateRangePickerOption.vue";
export { default as NewInputCamera } from "./components/Input/NewInputCamera.vue";
export { default as InputPhone } from "./components/Input/InputPhone.vue";
export { default as ContentTimePicker } from "./components/Input/ContentTimePicker.vue";
export { default as InputDatePicker } from "./components/Input/InputDatePicker.vue";
export { default as SideNavCMS } from "./components/Navbar/SideNavCMS.vue";
export { default as ItemSideNav } from "./components/Navbar/ItemSideNav.vue";
export { default as NavbarCorporate } from "./components/Navbar/NavbarCorporate.vue";
export { default as TabPembinaan } from "./components/Navbar/TabPembinaan.vue";
export { default as BerandaHeader } from "./components/Navbar/BerandaHeader.vue";
export { default as NavBackNavigator } from "./components/Navbar/NavBackNavigator.vue";
export { default as Tooltip } from "./components/Tooltip/TooltipComponent.vue";
export { default as Radio } from "./components/Radio/Radio.vue";
export { default as StackedBarChart } from "./components/Chart/StackedBarChart.vue";
export { default as DoughnutChart } from "./components/Chart/DoughnutChart.vue";
export { default as LineChart } from "./components/Chart/LineChart.vue";
export { default as BarChart } from "./components/Chart/BarChart.vue";
export { default as SideStepper } from "./components/SideStepper/SideStepper.vue";
export { default as SideStepperTest } from "./components/SideStepper/SideStepperTest.vue";
export { default as Checkbox } from "./components/Checkbox/CustomCheckbox.vue";
export { default as Label } from "./components/Label/Label.vue";
export { default as LabelIcon } from "./components/Label/LabelIcon.vue";
export { default as StepperVarian } from "./components/Stepper/StepperVarian.vue";
export { default as Stepper } from "./components/Stepper/Stepper.vue";
export { default as TabProduct } from "./components/Tab/TabProduct.vue";
export { default as TabGroup } from "./components/Tab/TabGroup.vue";
export { default as TabKategori } from "./components/Tab/TabKategori.vue";
export { default as ImageView } from "./components/Image/ImageView.vue";
export { default as AutoComplete } from "./components/SelectOption/AutoComplete.vue";
export { default as TablePagination } from "./components/Table/TablePagination.vue";
export { default as CustomTable } from "./components/Table/CustomTable.vue";
export { default as BottomSheet } from "./components/BottomSheet/GOffCanvas.vue";
export { default as Switch } from "./components/Switch/Switch.vue";
export { default as FilterCMS } from "./components/Filter/FilterCMS.vue";
export { default as InputFilter } from "./components/Filter/InputFilter.vue";
export { default as ModalLoad } from "./components/Modal/Load.vue";
export { default as ModalSlider } from "./components/Modal/ModalSlider.vue";
export { default as CustomModal } from "./components/Modal/CustomModal.vue";
export { default as HeaderCMS } from "./components/Header/HeaderCMS.vue";
