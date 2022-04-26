<template>
  <div class="home p-5">
    <div class="col-12 p-4">
      <kAccordion />
    </div>
    <div class="col-6 p-4">
      <kAddAmountItem />
    </div>
    <div class="col-6 p-4">
      <kAddAmountCounter />
    </div>
    <div class="col-6 p-4">
      <kAlert color="green" label="Lorem ipsum dolor sit amet" />
    </div>
    <div class="col-6 p-4">
      <kBreadcrumb />
    </div>
    <div class="col-6 p-4">
      <kBreadcrumb :items="['Root', 'Lv1', 'Lv2', 'Lv3', 'Lv4']" />
    </div>
    <div class="col-6 p-4">
      <kBreadcrumb :items="['Root', 'Lv1', 'Lv2', 'Lv3']" />
    </div>
    <div class="col-6 p-4">
      <kBreadcrumb :items="['Root', 'Lv1', 'Lv2']" />
    </div>
    <div class="col-6 p-4">
      <kBreadcrumb :items="['Root', 'Lv1']" />
    </div>
    <div class="col-6 p-4">
      <kBreadcrumb :items="['Root']" />
    </div>
    <div class="col-6 p-4">
      <kButton />
    </div>
    <div class="col-6 p-4">
      <kButtonSize />
    </div>
    <div class="col-6 p-4">
      <kCardVoucher />
    </div>
    <div class="col-6 p-4">
      <kCardPromo />
    </div>
    <div class="col-6 p-4">
      <kCardEvent />
    </div>
    <div class="col-6 p-4">
      <kCardProduct />
    </div>
    <div class="col-6 p-4">
      <kCardProductKonvensional />
    </div>
    <div class="col-6 p-4">
      <kCardProductSyariah />
    </div>
    <div class="col-6 p-4">
      <kCardAccount />
    </div>
    <div class="col-6 p-4">
      <kCardPromoCode1 />
    </div>
    <div class="col-6 p-4">
      <kCardPromoCode2 />
    </div>
    <div class="col-6 p-4">
      <kCardPromoCode3 />
    </div>
    <div class="col-6 p-4">
      <kCardContent />
    </div>
    <div class="col-6 p-4">
      <kCardArticle />
    </div>
    <div class="col-6 p-4">
      <kCardArticleHighlight />
    </div>
    <div class="col-6 p-4">
      <kCardFile />
    </div>
    <div class="col-6 p-4">
      <kCheckbox label="label" value="value" />
    </div>
    <div class="col-6 p-4">
      <kContextualMenu />
    </div>
    <div class="col-12 p-4">
      <kFooterSahabatPgd />
    </div>
    <div class="col-12 p-4">
      <kFooterPdsOnboarding />
    </div>
    <div class="col-12 p-4">
      <kFooterPdsLogin />
    </div>
    <div class="col-12 p-4">
      <kFooterPgdCorporate />
    </div>
    <div class="col-6 p-4">
      <kLabel />
    </div>
    <div class="col-6 p-4">
      <kLabelIcon />
    </div>
    <div class="col-6 p-4">
      <kLink />
    </div>
    <div class="col-6 p-4">
      <kListGroupUnit />
    </div>
    <div class="col-6 p-4">
      <kListGroupOrdered />
    </div>
    <div class="col-6 p-4">
      <kListGroupUnordered />
    </div>
    <div class="col-12 p-4">
      <kNavbarSahabatPgd />
    </div>
    <div class="col-12 p-4">
      <kNavbarPdsOnboarding />
    </div>
    <div class="col-12 p-4">
      <kNavBackNavigator />
    </div>
    <div class="col-12 p-4">
      <kNavBeliTabunganEmas />
    </div>
    <div class="col-12 p-4">
      <kNavMenuDropdown />
    </div>
    <div class="col-12 p-4">
      <kNavbarCorporate />
    </div>
    <div class="col-12 p-4">
      <kBannerCarousel />
    </div>
    <div class="col-12 p-4">
      <kHighlightCarousel />
    </div>
    <div class="col-12 p-4">
      <kProdukKonvensional />
    </div>
    <div class="col-6 p-4">
      <kRadio />
    </div>
    <div class="col-6 p-4">
      <kStepper />
    </div>
    <div class="col-6 p-4">
      <kStepperMobile />
    </div>
    <div class="col-6 p-4">
      <kSwitch />
    </div>
    <div class="col-6 p-4">
      <kTooltip />
    </div>
    <div class="col-12 p-4">
      <kWidgetSaldo />
    </div>
    <div class="col-12 p-4">
      <kWidgetContent />
    </div>
    <div class="col-6 p-4">
      <kDatepicker />
    </div>
    <div class="col-6 p-4">
      <kDropdownTextOnly />
    </div>
    <div class="col-6 p-4">
      <kDropdownIconTextLg />
    </div>
    <div class="col-6 p-4">
      <kDropdownIconTextSm />
    </div>
    <div class="col-6 p-4">
      <kFilepickerLg />
    </div>
    <div class="col-6 p-4">
      <kFilepickerSm />
    </div>
    <div class="col-6 p-4">
      <kOverlay />
    </div>
    <div class="col-6 p-4">
      <kTabKategori />
    </div>
    <div class="col-6 p-4">
      <kTabGroup />
    </div>
    <div class="col-6 p-4">
      <kTabProduct />
    </div>
    <div class="col-8 p-4">
      <kTable1 />
    </div>
    <div class="col-8 p-4">
      <kTable2 />
    </div>
    <div class="col-8 p-4">
      <kImageIllustration />
    </div>
    <div class="col-8 p-4">
      <kImagePhoto />
    </div>
    <div class="col-8 p-4">
      <kLogo />
    </div>
    <div class="col-8 p-4">
      <kLineShape />
    </div>
    <div class="col-8 p-4">
      <kModal />
    </div>
    <div class="col-6 p-4">
      <kPagination />
    </div>
    <div class="col-8 p-4">
      <kSystemIcon />
    </div>
    <div class="col-8 p-4">
      <kProductIcon />
    </div>
    <div class="col-8 p-4">
      <kInputSmallText />
    </div>
    <div class="col-8 p-4">
      <kInputNominal />
    </div>
    <div class="col-8 p-4">
      <kInputTextArea />
    </div>
    <div class="col-8 p-4">
      <kNavBottomTab />
    </div>
    <div class="col-12 p-4">
      <kHomePDS />
    </div>
    <div class="col-12 p-4">
      <kPegadaianCorporate />
    </div>
    <div class="col-12 p-4">
      <kProdukSyariah />
    </div>
    <div class="col-12 p-4">
      <kSahabatPgd />
    </div>
    <div class="col-8 p-4">
      <kChart />
    </div>
    <div class="col-8 p-4">
      <kChartMeter />
    </div>
    <div class="col-8 p-4">
      <kChartProgress />
    </div>
  </div>
</template>

<script>
import kAccordion from "@components/Accordion.vue";
import kAddAmountItem from "@components/AddAmount/AddAmountItem.vue";
import kAddAmountCounter from "@components/AddAmount/AddAmountCounter.vue";
import kAlert from "@components/Alert.vue";
// import kAlertBasic from "@components/AlertBasic.vue";

import kHomePDS from "@components/Banner/HomePDS.vue";
import kPegadaianCorporate from "@components/Banner/PegadaianCorporate.vue";
import kProdukKonvensional from "@components/Banner/ProdukKonvensional.vue";
import kProdukSyariah from "@components/Banner/ProdukSyariah.vue";
import kSahabatPgd from "@components/Banner/SahabatPgd.vue";

import kBreadcrumb from "@components/Breadcrumb/Breadcrumb.vue";
import kButton from "@components/Button/Button.vue";
import kButtonSize from "@components/Button/ButtonSize.vue";
import kCardVoucher from "@components/Card/CardVoucher.vue";
import kCardPromo from "@components/Card/CardPromo.vue";
import kCardEvent from "@components/Card/CardEvent.vue";
import kCardProduct from "@components/Card/CardProduct.vue";
import kCardProductKonvensional from "@components/Card/CardProductKonvensional.vue";
import kCardProductSyariah from "@components/Card/CardProductSyariah.vue";
import kCardAccount from "@components/Card/CardAccount.vue";
import kCardPromoCode1 from "@components/Card/CardPromoCode1.vue";
import kCardPromoCode2 from "@components/Card/CardPromoCode2.vue";
import kCardPromoCode3 from "@components/Card/CardPromoCode3.vue";
import kCardContent from "@components/Card/CardContent.vue";
import kCardArticle from "@components/Card/CardArticle.vue";
import kCardArticleHighlight from "@components/Card/CardArticleHighlight.vue";
import kCardFile from "@components/Card/CardFile.vue";
import kCheckbox from "@components/Checkbox.vue";
import kContextualMenu from "@components/ContextualMenu.vue";
import kFooterSahabatPgd from "@components/Footer/FooterSahabatPgd.vue";
import kFooterPdsOnboarding from "@components/Footer/FooterPdsOnboarding.vue";
import kFooterPdsLogin from "@components/Footer/FooterPdsLogin.vue";
import kFooterPgdCorporate from "@components/Footer/FooterPgdCorporate.vue";
import kLabel from "@components/Label/Label.vue";
import kLabelIcon from "@components/Label/LabelIcon.vue";
import kLink from "@components/Link.vue";
import kListGroupUnit from "@components/ListGroup/ListGroupUnit.vue";
import kListGroupOrdered from "@components/ListGroup/ListGroupOrdered.vue";
import kListGroupUnordered from "@components/ListGroup/ListGroupUnordered.vue";
import kNavbarSahabatPgd from "@components/Navbar/NavbarSahabatPgd.vue";
import kNavbarPdsOnboarding from "@components/Navbar/NavbarPdsOnboarding.vue";
import kNavbarCorporate from "@components/Navbar/NavbarCorporate.vue";
import kNavBackNavigator from "@components/Navbar/NavBackNavigator.vue";
import kNavBeliTabunganEmas from "@components/Navbar/NavBeliTabunganEmas.vue";
import kNavMenuDropdown from "@components/Navbar/NavMenuDropdown.vue";
import kBannerCarousel from "@components/Banner/BannerCarousel.vue";
import kHighlightCarousel from "@components/Carousel/HighlightCarousel.vue";

import kRadio from "@components/Radio.vue";
import kStepper from "@components/Stepper.vue";
import kStepperMobile from "@components/StepperMobile.vue";
import kSwitch from "@components/Switch.vue";
import kTooltip from "@components/Tooltip.vue";
import kWidgetSaldo from "@components/Widget/WidgetSaldo.vue";
import kWidgetContent from "@components/Widget/WidgetContent.vue";
import kDatepicker from "@components/Datepicker.vue";
import kDropdownTextOnly from "@components/Dropdown/DropdownTextOnly.vue";
import kDropdownIconTextLg from "@components/Dropdown/DropdownIconTextLg.vue";
import kDropdownIconTextSm from "@components/Dropdown/DropdownIconTextSm.vue";
import kFilepickerLg from "@components/Filepicker/FilepickerLg.vue";
import kFilepickerSm from "@components/Filepicker/FilepickerSm.vue";
import kOverlay from "@components/Overlay.vue";
import kTabKategori from "@components/Tab/TabKategori.vue";
import kTabGroup from "@components/Tab/TabGroup.vue";
import kTabProduct from "@components/Tab/TabProduct.vue";
import kTable1 from "@components/Table/Table1.vue";
import kTable2 from "@components/Table/Table2.vue";
import kImageIllustration from "@components/Image/ImageIllustration.vue";
import kImagePhoto from "@components/Image/ImagePhoto.vue";
import kLogo from "@components/Logo.vue";
import kLineShape from "@components/Shape/LineShape.vue";
import kModal from "@components/Modal.vue";
import kPagination from "@components/Pagination.vue";
import kSystemIcon from "@components/Icon/SystemIcon.vue";
import kProductIcon from "@components/Icon/ProductIcon.vue";
import kInputSmallText from "@components/Input/InputSmallText.vue";
import kInputNominal from "@components/Input/InputNominal.vue";
import kInputTextArea from "@components/Input/InputTextArea.vue";
import kNavBottomTab from "@components/Navbar/NavBottomTab.vue";
import kChart from "@components/Chart/Chart.vue";
import kChartMeter from "@components/Chart/ChartMeter.vue";
import kChartProgress from "@components/Chart/ChartProgress.vue";

export default {
  name: "Home",
  components: {
    kAccordion,
    kAlert,
    // kAlertBasic,
    kBreadcrumb,
    kButton,
    kButtonSize,
    kCardVoucher,
    kCardPromo,
    kCardEvent,
    kCardProduct,
    kCardProductKonvensional,
    kCardProductSyariah,
    kCardAccount,
    kCardPromoCode1,
    kCardPromoCode2,
    kCardPromoCode3,
    kCardContent,
    kCardArticle,
    kCardArticleHighlight,
    kCardFile,
    kCheckbox,
    kContextualMenu,
    kFooterSahabatPgd,
    kFooterPdsOnboarding,
    kFooterPdsLogin,
    kFooterPgdCorporate,
    kLabel,
    kLabelIcon,
    kLink,
    kListGroupUnit,
    kListGroupOrdered,
    kListGroupUnordered,
    kNavbarSahabatPgd,
    kNavbarPdsOnboarding,
    kNavbarCorporate,
    kNavBackNavigator,
    kNavBeliTabunganEmas,
    kNavMenuDropdown,
    kBannerCarousel,
    kHighlightCarousel,
    kProdukKonvensional,
    kRadio,
    kStepper,
    kStepperMobile,
    kSwitch,
    kTooltip,
    kWidgetSaldo,
    kWidgetContent,
    kAddAmountItem,
    kAddAmountCounter,
    kDatepicker,
    kDropdownTextOnly,
    kDropdownIconTextLg,
    kDropdownIconTextSm,
    kFilepickerLg,
    kFilepickerSm,
    kOverlay,
    kTabKategori,
    kTabGroup,
    kTabProduct,
    kTable1,
    kTable2,
    kImageIllustration,
    kImagePhoto,
    kLogo,
    kLineShape,
    kModal,
    kPagination,
    kSystemIcon,
    kProductIcon,
    kInputSmallText,
    kInputNominal,
    kInputTextArea,
    kNavBottomTab,
    kHomePDS,
    kPegadaianCorporate,
    kProdukSyariah,
    kSahabatPgd,
    kChart,
    kChartMeter,
    kChartProgress,
  },
  setup() {},
  data() {
    return {
      MySelectedValues: [],
    };
  },
};
</script>
