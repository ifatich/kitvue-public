'use strict';

var vue = require('vue');

var script$16 = {
  name: "k-add-amount-counter",
};

const _hoisted_1$16 = { class: "input-group add-amount-counter" };
const _hoisted_2$W = /*#__PURE__*/vue.createElementVNode("div", { class: "add-amount-counter-box" }, [
  /*#__PURE__*/vue.createElementVNode("a", { class: "add-amount-counter-box__button btn-decrement" }, [
    /*#__PURE__*/vue.createElementVNode("img", {
      src: "https://dl.dropboxusercontent.com/s/jo9wfsxd294jjr6/icon-min-outline-dark.svg",
      alt: ""
    })
  ]),
  /*#__PURE__*/vue.createElementVNode("div", { class: "add-amount-counter-box__content" }, [
    /*#__PURE__*/vue.createElementVNode("input", {
      type: "tel",
      id: "sumGold",
      class: "add-amount-counter-box__input",
      minlength: "1",
      value: "1",
      onchange: "checkFormsValidity('form-tambah-emas-batangan', 'SubmitReply')",
      required: ""
    })
  ]),
  /*#__PURE__*/vue.createElementVNode("a", { class: "add-amount-counter-box__button btn-increment" }, [
    /*#__PURE__*/vue.createElementVNode("img", {
      src: "https://dl.dropboxusercontent.com/s/d7qbw3rdesg056n/icon-add-outline-green.svg",
      alt: ""
    })
  ])
], -1 /* HOISTED */);
const _hoisted_3$L = [
  _hoisted_2$W
];

function render$16(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$16, _hoisted_3$L))
}

script$16.render = render$16;
script$16.__file = "src/components/AddAmount/AddAmountCounter.vue";

var script$15 = {
  name: "k-add-amount-item",
};

const _hoisted_1$15 = {
  class: "add-amount-item",
  "data-bs-toggle": "modal",
  "data-bs-target": "#modal-tambah-saham"
};
const _hoisted_2$V = /*#__PURE__*/vue.createElementVNode("img", {
  src: "https://dl.dropboxusercontent.com/s/hwxxnep8t4gg89g/ico-add-green.svg",
  alt: ""
}, null, -1 /* HOISTED */);
const _hoisted_3$K = /*#__PURE__*/vue.createElementVNode("a", null, "Tambah Saham", -1 /* HOISTED */);
const _hoisted_4$o = [
  _hoisted_2$V,
  _hoisted_3$K
];

function render$15(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$15, _hoisted_4$o))
}

script$15.render = render$15;
script$15.__file = "src/components/AddAmount/AddAmountItem.vue";

var script$14 = {
  name: "k-breadcrumbs",
  props: {},
};

const _hoisted_1$14 = { "aria-label": "breadcrumb" };
const _hoisted_2$U = /*#__PURE__*/vue.createStaticVNode("<ol class=\"breadcrumb\"><li class=\"breadcrumb-item\"><a href=\"./index.html\">Beranda</a></li><li class=\"breadcrumb-item\"><a href=\"./produk.html\">Produk</a></li><li class=\"breadcrumb-item\"><a href=\"./produk.html\">Layanan Jasa</a></li><li class=\"breadcrumb-item active\" aria-current=\"page\"> Safe Deposit Box </li></ol>", 1);
const _hoisted_3$J = [
  _hoisted_2$U
];

function render$14(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("nav", _hoisted_1$14, _hoisted_3$J))
}

script$14.render = render$14;
script$14.__file = "src/components/Breadcrumb/Breadcrumb.vue";

var script$13 = {
  name: "k-breadcrumbs-lv1",
  props: {},
};

const _hoisted_1$13 = {
  "aria-label": "breadcrumb",
  class: "container"
};
const _hoisted_2$T = /*#__PURE__*/vue.createElementVNode("ol", { class: "breadcrumb" }, [
  /*#__PURE__*/vue.createElementVNode("li", { class: "breadcrumb-item" }, [
    /*#__PURE__*/vue.createElementVNode("a", { href: "./index.html" }, "Root")
  ]),
  /*#__PURE__*/vue.createElementVNode("li", {
    class: "breadcrumb-item active",
    "aria-current": "page"
  }, "Lv1")
], -1 /* HOISTED */);
const _hoisted_3$I = [
  _hoisted_2$T
];

function render$13(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("nav", _hoisted_1$13, _hoisted_3$I))
}

script$13.render = render$13;
script$13.__file = "src/components/Breadcrumb/BreadcrumbLv1.vue";

var script$12 = {
  name: "k-breadcrumbs-lv2",
  props: {},
};

const _hoisted_1$12 = {
  "aria-label": "breadcrumb",
  class: "container"
};
const _hoisted_2$S = /*#__PURE__*/vue.createStaticVNode("<ol class=\"breadcrumb\"><li class=\"breadcrumb-item\"><a href=\"./index.html\">Root</a></li><li class=\"breadcrumb-item\"><a href=\"./produk.html\">Lv1</a></li><li class=\"breadcrumb-item active\" aria-current=\"page\">Lv2</li></ol>", 1);
const _hoisted_3$H = [
  _hoisted_2$S
];

function render$12(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("nav", _hoisted_1$12, _hoisted_3$H))
}

script$12.render = render$12;
script$12.__file = "src/components/Breadcrumb/BreadcrumbLv2.vue";

var script$11 = {
  name: "k-breadcrumbs-lv3",
  props: {},
};

const _hoisted_1$11 = {
  "aria-label": "breadcrumb",
  class: "container"
};
const _hoisted_2$R = /*#__PURE__*/vue.createStaticVNode("<ol class=\"breadcrumb\"><li class=\"breadcrumb-item\"><a href=\"./index.html\">Root</a></li><li class=\"breadcrumb-item\"><a href=\"./produk.html\">Lv1</a></li><li class=\"breadcrumb-item\"><a href=\"./produk.html\">Lv2</a></li><li class=\"breadcrumb-item active\" aria-current=\"page\">Lv3</li></ol>", 1);
const _hoisted_3$G = [
  _hoisted_2$R
];

function render$11(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("nav", _hoisted_1$11, _hoisted_3$G))
}

script$11.render = render$11;
script$11.__file = "src/components/Breadcrumb/BreadcrumbLv3.vue";

var script$10 = {
  name: "k-breadcrumbs-lv4",
  props: {},
};

const _hoisted_1$10 = {
  "aria-label": "breadcrumb",
  class: "container"
};
const _hoisted_2$Q = /*#__PURE__*/vue.createStaticVNode("<ol class=\"breadcrumb\"><li class=\"breadcrumb-item\"><a href=\"./index.html\">Root</a></li><li class=\"breadcrumb-item\"><a href=\"./produk.html\">Lv1</a></li><li class=\"breadcrumb-item\"><a href=\"./produk.html\">Lv2</a></li><li class=\"breadcrumb-item\"><a href=\"./produk.html\">Lv3</a></li><li class=\"breadcrumb-item active\" aria-current=\"page\">Lv4</li></ol>", 1);
const _hoisted_3$F = [
  _hoisted_2$Q
];

function render$10(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("nav", _hoisted_1$10, _hoisted_3$F))
}

script$10.render = render$10;
script$10.__file = "src/components/Breadcrumb/BreadcrumbLv4.vue";

var script$$ = {
  name: "k-breadcrumbs-root",
  props: {},
};

const _hoisted_1$$ = {
  "aria-label": "breadcrumb",
  class: "container"
};
const _hoisted_2$P = /*#__PURE__*/vue.createElementVNode("ol", { class: "breadcrumb" }, [
  /*#__PURE__*/vue.createElementVNode("li", {
    class: "breadcrumb-item active",
    "aria-current": "page"
  }, "Root")
], -1 /* HOISTED */);
const _hoisted_3$E = [
  _hoisted_2$P
];

function render$$(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("nav", _hoisted_1$$, _hoisted_3$E))
}

script$$.render = render$$;
script$$.__file = "src/components/Breadcrumb/BreadcrumbRoot.vue";

var script$_ = {
  name: "k-button",
  props: {},
};

const _hoisted_1$_ = /*#__PURE__*/vue.createStaticVNode("<button class=\"btn btn-primary\">Button Text</button><button type=\"button\" class=\"btn btn-outline-primary\">Button Text</button><button type=\"button\" class=\"btn btn-link d-none\">Button Text</button><a type=\"button\" class=\"btn btn-tertiary\">Button Text</a><button type=\"button\" class=\"btn btn-outline-secondary\">Button Text</button>", 5);

function render$_(_ctx, _cache, $props, $setup, $data, $options) {
  return _hoisted_1$_
}

script$_.render = render$_;
script$_.__file = "src/components/Button/Button.vue";

var script$Z = {
  name: "k-button-style",
  props: {},
};

const _hoisted_1$Z = /*#__PURE__*/vue.createElementVNode("button", { class: "btn btn-primary btn-sm" }, "Button Text", -1 /* HOISTED */);
const _hoisted_2$O = /*#__PURE__*/vue.createElementVNode("button", { class: "btn btn-primary" }, "Button Text", -1 /* HOISTED */);
const _hoisted_3$D = /*#__PURE__*/vue.createElementVNode("button", { class: "btn btn-primary btn-lg" }, "Button Text", -1 /* HOISTED */);

function render$Z(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    _hoisted_1$Z,
    _hoisted_2$O,
    _hoisted_3$D
  ], 64 /* STABLE_FRAGMENT */))
}

script$Z.render = render$Z;
script$Z.__file = "src/components/Button/ButtonSize.vue";

var script$Y = {
  name: "k-accordion",
};

const _hoisted_1$Y = {
  class: "accordion",
  id: "accordionExample"
};
const _hoisted_2$N = /*#__PURE__*/vue.createStaticVNode("<div class=\"accordion-item\"><h2 class=\"accordion-header\" id=\"headingOne\"><button class=\"accordion-button\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\"> Apa itu produk Kreasi Ultra Mikro? </button></h2><div id=\"collapseOne\" class=\"accordion-collapse collapse show\" aria-labelledby=\"headingOne\" data-bs-parent=\"#accordionExample\"><div class=\"accordion-body\"> Pinjaman (kredit) dalam jangka waktu tertentu dengan menggunakan konstruksi penjaminan kredit secara jaminan fidusia dan/ atau jaminan gadai, yang diberikan kepada pengusaha mikro dan pengusaha kecil yang membutuhkan dana untuk keperluan pengembangan usaha dengan uang pinjaman 10 juta ke bawah dengan sewa modal yang lebih ringan. Syarat produk ini adalah tidak sedang dalam pembiayaan KUR dari lembaga keuangan lain. </div></div></div><div class=\"accordion-item\"><h2 class=\"accordion-header\" id=\"headingTwo\"><button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\"> Apa itu produk Kreasi Ultra Mikro? </button></h2><div id=\"collapseTwo\" class=\"accordion-collapse collapse\" aria-labelledby=\"headingTwo\" data-bs-parent=\"#accordionExample\"><div class=\"accordion-body\"> Pinjaman (kredit) dalam jangka waktu tertentu dengan menggunakan konstruksi penjaminan kredit secara jaminan fidusia dan/ atau jaminan gadai, yang diberikan kepada pengusaha mikro dan pengusaha kecil yang membutuhkan dana untuk keperluan pengembangan usaha dengan uang pinjaman 10 juta ke bawah dengan sewa modal yang lebih ringan. Syarat produk ini adalah tidak sedang dalam pembiayaan KUR dari lembaga keuangan lain. </div></div></div>", 2);
const _hoisted_4$n = [
  _hoisted_2$N
];

function render$Y(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$Y, _hoisted_4$n))
}

script$Y.render = render$Y;
script$Y.__file = "src/components/Accordion.vue";

var script$X = {
  name: "k-alert",
};

const _hoisted_1$X = /*#__PURE__*/vue.createStaticVNode("<div class=\"pb-3\"><div class=\"pgd-alert-green\"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </div></div><div class=\"pb-3\"><div class=\"pgd-alert-light-blue\"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </div></div><div class=\"pb-3\"><div class=\"pgd-alert-red\"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </div></div><div class=\"pb-3\"><div class=\"pgd-alert-yellow\"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </div></div>", 4);
const _hoisted_5$9 = [
  _hoisted_1$X
];

function render$X(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", null, _hoisted_5$9))
}

script$X.render = render$X;
script$X.__file = "src/components/Alert.vue";

var script$W = {
  name: "k-carousel",
  props: {
    active: {
      type: Number,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
    controls: {
      type: Boolean,
    },
    indicators: {
      type: Boolean,
    },
  },
  created() {
    this.itemActive = this.active;
  },
  data() {
    return {
      itemActive: 0,
    };
  },
  methods: {
    setActive(index) {
      let active = index;

      if (index === this.data.length) active = 0;
      else if (index === -1) active = this.data.length - 1;

      this.itemActive = active;
    },
  },
};

const _withScopeId = n => (vue.pushScopeId("data-v-e3565ce0"),n=n(),vue.popScopeId(),n);
const _hoisted_1$W = {
  id: "carouselExampleCaptions",
  class: "carousel slide h-50",
  "data-bs-ride": "carousel"
};
const _hoisted_2$M = {
  key: 0,
  class: "carousel-indicators"
};
const _hoisted_3$C = ["data-bs-slide-to", "aria-current"];
const _hoisted_4$m = { class: "carousel-inner" };
const _hoisted_5$8 = ["src"];
const _hoisted_6$5 = { class: "carousel-caption d-none d-md-block" };
const _hoisted_7$1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("span", {
  class: "carousel-control-prev-icon",
  "aria-hidden": "true"
}, null, -1 /* HOISTED */));
const _hoisted_8$1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("span", { class: "visually-hidden" }, "Previous", -1 /* HOISTED */));
const _hoisted_9$2 = [
  _hoisted_7$1,
  _hoisted_8$1
];
const _hoisted_10$1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("span", {
  class: "carousel-control-next-icon",
  "aria-hidden": "true"
}, null, -1 /* HOISTED */));
const _hoisted_11$1 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("span", { class: "visually-hidden" }, "Next", -1 /* HOISTED */));
const _hoisted_12$1 = [
  _hoisted_10$1,
  _hoisted_11$1
];

function render$W(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$W, [
    ($props.indicators)
      ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$M, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.data, (item, index) => {
            return (vue.openBlock(), vue.createElementBlock("button", {
              key: index,
              type: "button",
              "data-bs-target": ['#carouselExampleCaptions'],
              "data-bs-slide-to": `${index}`,
              class: vue.normalizeClass({ 'active': index === $data.itemActive }),
              "aria-current": { 'active': index === $data.itemActive }
            }, null, 10 /* CLASS, PROPS */, _hoisted_3$C))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      : vue.createCommentVNode("v-if", true),
    vue.createElementVNode("div", _hoisted_4$m, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.data, (item, index) => {
        return (vue.openBlock(), vue.createElementBlock("div", {
          key: index,
          class: vue.normalizeClass({ 'carousel-item': true, 'active': index === $data.itemActive })
        }, [
          vue.createElementVNode("img", {
            src: item.image,
            class: "d-block w-100"
          }, null, 8 /* PROPS */, _hoisted_5$8),
          vue.createElementVNode("div", _hoisted_6$5, [
            vue.createElementVNode("h5", null, vue.toDisplayString(item.title), 1 /* TEXT */),
            vue.createElementVNode("p", null, vue.toDisplayString(item.content), 1 /* TEXT */)
          ])
        ], 2 /* CLASS */))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    ($props.controls)
      ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 1,
          class: "carousel-control-prev",
          type: "button",
          "data-bs-target": ['#carouselExampleCaptions'],
          "data-bs-slide": ['prev'],
          onClick: _cache[0] || (_cache[0] = $event => ($options.setActive($data.itemActive - 1)))
        }, _hoisted_9$2))
      : vue.createCommentVNode("v-if", true),
    ($props.controls)
      ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 2,
          class: "carousel-control-next",
          type: "button",
          "data-bs-target": ['#carouselExampleCaptions'],
          "data-bs-slide": ['next'],
          onClick: _cache[1] || (_cache[1] = $event => ($options.setActive($data.itemActive + 1)))
        }, _hoisted_12$1))
      : vue.createCommentVNode("v-if", true)
  ]))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.carousel .carousel-item[data-v-e3565ce0] {\n  height: 300px;\n}\n.carousel-item img[data-v-e3565ce0] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-height: 300px;\n}\n";
styleInject(css_248z);

script$W.render = render$W;
script$W.__scopeId = "data-v-e3565ce0";
script$W.__file = "src/components/Carousel.vue";

var script$V = {
  name: "k-checkbox",
  props: {},
};

const _hoisted_1$V = { class: "group-input custom-control custom-checkbox" };
const _hoisted_2$L = /*#__PURE__*/vue.createElementVNode("input", {
  type: "checkbox",
  class: "custom-control-input",
  id: "custom-checkbox"
}, null, -1 /* HOISTED */);
const _hoisted_3$B = /*#__PURE__*/vue.createElementVNode("label", {
  class: "custom-control-label",
  for: "custom-checkbox"
}, "Opt 1", -1 /* HOISTED */);
const _hoisted_4$l = [
  _hoisted_2$L,
  _hoisted_3$B
];

function render$V(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$V, _hoisted_4$l))
}

script$V.render = render$V;
script$V.__file = "src/components/Checkbox.vue";

var script$U = {
  name: "k-contextual-menu",
  props: {},
};

const _hoisted_1$U = { class: "contextual-menu" };
const _hoisted_2$K = /*#__PURE__*/vue.createElementVNode("div", { class: "contextual-menu__item" }, [
  /*#__PURE__*/vue.createElementVNode("p", null, "Ubah"),
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "https://dl.dropboxusercontent.com/s/67onewx8wj7mryc/edit-filled.svg",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_3$A = /*#__PURE__*/vue.createElementVNode("div", { class: "contextual-menu__item" }, [
  /*#__PURE__*/vue.createElementVNode("p", null, "Hapus"),
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "https://dl.dropboxusercontent.com/s/l67aq7uvo49epom/icon-delete-dark.svg",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_4$k = [
  _hoisted_2$K,
  _hoisted_3$A
];

function render$U(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$U, _hoisted_4$k))
}

script$U.render = render$U;
script$U.__file = "src/components/ContextualMenu.vue";

var script$T = {
  name: "k-datepicker",
  props: {},
};

const _hoisted_1$T = /*#__PURE__*/vue.createStaticVNode("<div class=\"group-input\"><div class=\"box-left-icon\"><input type=\"text\" placeholder=\"Pilih tanggal\" name=\"tanggallahir\" id=\"tanggalLahir\" required data-bs-toggle=\"modal\" data-bs-target=\"#tangalLahirModal\" readonly><a data-bs-toggle=\"modal\" data-bs-target=\"#tangalLahirModal\"><img src=\"https://dl.dropboxusercontent.com/s/ju7cwwhnvje3vda/ico-calendar-outline.svg\" id=\"eye\" alt=\"\"></a></div></div><section class=\"section-overlay-modal-pds\"><div class=\"modal fade\" id=\"tangalLahirModal\" data-bs-backdrop=\"static\" data-bs-keyboard=\"false\" tabindex=\"-1\" aria-labelledby=\"staticBackdropLabel\" aria-hidden=\"true\"><div class=\"modal-dialog modal-dialog-centered tangalLahirModal modal-sm\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\" id=\"staticBackdropLabel\">Pilih Tanggal</h5><button type=\"button\" id=\"close-modal\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"><img src=\"https://dl.dropboxusercontent.com/s/t0czo3brgkjtpoi/close.svg\" alt=\"\"></button></div><div class=\"modal-body\"><form name=\"setDateBirth\"><div class=\"custom-datepicker\"><div class=\"field-input-box\"><label>Tanggal</label><label>Bulan</label><label>Tahun</label></div><div class=\"field-input-box\"><input type=\"text\" id=\"date\" pattern=\"[0-9]*\" minlength=\"2\" maxlength=\"2\" size=\"2\" class=\"date-field\" placeholder=\"DD\" required><input type=\"text\" id=\"month\" pattern=\"[0-9]*\" minlength=\"2\" maxlength=\"2\" size=\"2\" class=\"date-field\" placeholder=\"MM\" required><input type=\"text\" id=\"year\" pattern=\"[0-9]*\" minlength=\"4\" maxlength=\"4\" size=\"4\" class=\"date-field\" placeholder=\"YYYY\" required></div></div></form></div></div></div></div></section>", 2);

function render$T(_ctx, _cache, $props, $setup, $data, $options) {
  return _hoisted_1$T
}

script$T.render = render$T;
script$T.__file = "src/components/Datepicker.vue";

var script$S = {
  name: "k-link",
  props: {},
};

const _hoisted_1$S = {
  href: "",
  class: "btn btn-tertiary"
};
const _hoisted_2$J = /*#__PURE__*/vue.createTextVNode("Simulasi Gadai ");
const _hoisted_3$z = /*#__PURE__*/vue.createElementVNode("img", {
  src: "https://dl.dropboxusercontent.com/s/ft5eipwmtxysb0n/icon-chevron-right-green.svg",
  alt: ""
}, null, -1 /* HOISTED */);
const _hoisted_4$j = [
  _hoisted_2$J,
  _hoisted_3$z
];

function render$S(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("a", _hoisted_1$S, _hoisted_4$j))
}

script$S.render = render$S;
script$S.__file = "src/components/Link.vue";

var script$R = {
  name: "k-logo",
  props: {},
};

const _hoisted_1$R = { src: "https://dl.dropboxusercontent.com/s/wca0lc73wnzszqp/BUMN.svg" };

function render$R(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("img", _hoisted_1$R))
}

script$R.render = render$R;
script$R.__file = "src/components/Logo.vue";

var script$Q = {
  name: "k-modal",
  props: {},
};

const _hoisted_1$Q = /*#__PURE__*/vue.createStaticVNode("<button class=\"btn btn-primary\" data-bs-target=\"#get-modal\" data-bs-toggle=\"modal\"> Modal </button><section class=\"section-overlay-modal-pds\"><div class=\"modal fade\" id=\"get-modal\" data-bs-backdrop=\"static\" data-bs-keyboard=\"false\" tabindex=\"-1\" aria-labelledby=\"staticBackdropLabel\" aria-hidden=\"true\"><div class=\"modal-dialog modal-dialog-centered modal-layout-pds\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\" id=\"staticBackdropLabel\">Title</h5><button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"><img src=\"https://dl.dropboxusercontent.com/s/t0czo3brgkjtpoi/close.svg\" alt=\"\"></button></div><div class=\"modal-body\"><p>Your content is here.</p><a data-bs-dismiss=\"modal\" aria-label=\"Close\" class=\"btn btn-primary btn-block\">Button</a></div></div></div></div></section>", 2);

function render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  return _hoisted_1$Q
}

script$Q.render = render$Q;
script$Q.__file = "src/components/Modal.vue";

var script$P = {
  name: "k-overlay",
  props: {},
};

const _hoisted_1$P = /*#__PURE__*/vue.createElementVNode("button", {
  class: "btn btn-primary",
  "data-bs-target": "#get-modal",
  "data-bs-toggle": "modal"
}, " Show Overlay ", -1 /* HOISTED */);
const _hoisted_2$I = /*#__PURE__*/vue.createElementVNode("section", { class: "section-overlay-modal-pds" }, [
  /*#__PURE__*/vue.createElementVNode("div", {
    class: "modal fade",
    id: "get-modal",
    "data-bs-backdrop": "static",
    "data-bs-keyboard": "false",
    tabindex: "-1",
    "aria-labelledby": "staticBackdropLabel",
    "aria-hidden": "true"
  }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "modal-dialog modal-dialog-centered modal-layout-pds" })
  ])
], -1 /* HOISTED */);

function render$P(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    _hoisted_1$P,
    _hoisted_2$I
  ], 64 /* STABLE_FRAGMENT */))
}

script$P.render = render$P;
script$P.__file = "src/components/Overlay.vue";

var script$O = {
  name: "k-navbar-radio",
  props: {},
};

const _hoisted_1$O = { class: "group-input__box-radio" };
const _hoisted_2$H = /*#__PURE__*/vue.createElementVNode("label", {
  class: "radio-tab tab-option active",
  for: "option-1",
  onclick: "clickRadioForm('tab-option','option-1')"
}, [
  /*#__PURE__*/vue.createElementVNode("h6", null, "Option 1"),
  /*#__PURE__*/vue.createElementVNode("input", {
    type: "radio",
    id: "option-1",
    value: "option-1",
    name: "option",
    checked: ""
  }),
  /*#__PURE__*/vue.createElementVNode("span", { class: "checkmark" })
], -1 /* HOISTED */);
const _hoisted_3$y = /*#__PURE__*/vue.createElementVNode("label", {
  class: "radio-tab tab-option",
  for: "option-2",
  onclick: "clickRadioForm('tab-option', 'option-2')"
}, [
  /*#__PURE__*/vue.createElementVNode("h6", null, "Option 2"),
  /*#__PURE__*/vue.createElementVNode("input", {
    type: "radio",
    id: "option-2",
    value: "option-2",
    name: "option"
  }),
  /*#__PURE__*/vue.createElementVNode("span", { class: "checkmark" })
], -1 /* HOISTED */);
const _hoisted_4$i = [
  _hoisted_2$H,
  _hoisted_3$y
];

function render$O(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$O, _hoisted_4$i))
}

script$O.render = render$O;
script$O.__file = "src/components/Radio.vue";

var script$N = {
  name: "k-stepper",
  props: {},
};

const _hoisted_1$N = { class: "stepper-ol" };
const _hoisted_2$G = /*#__PURE__*/vue.createElementVNode("li", { class: "active" }, "Detail Jaminan", -1 /* HOISTED */);
const _hoisted_3$x = /*#__PURE__*/vue.createElementVNode("li", null, "Detail Pinjaman", -1 /* HOISTED */);
const _hoisted_4$h = /*#__PURE__*/vue.createElementVNode("li", null, "Cabang Pengajuan", -1 /* HOISTED */);
const _hoisted_5$7 = /*#__PURE__*/vue.createElementVNode("li", null, "Waktu Kedatangan", -1 /* HOISTED */);
const _hoisted_6$4 = [
  _hoisted_2$G,
  _hoisted_3$x,
  _hoisted_4$h,
  _hoisted_5$7
];

function render$N(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("ol", _hoisted_1$N, _hoisted_6$4))
}

script$N.render = render$N;
script$N.__file = "src/components/Stepper.vue";

var script$M = {
  name: "k-switch",
  props: {},
};

const _hoisted_1$M = { class: "custom-control custom-switch" };
const _hoisted_2$F = /*#__PURE__*/vue.createElementVNode("input", {
  type: "checkbox",
  class: "custom-switch-control-input"
}, null, -1 /* HOISTED */);
const _hoisted_3$w = /*#__PURE__*/vue.createElementVNode("span", { class: "custom-switch-control-indicator" }, null, -1 /* HOISTED */);
const _hoisted_4$g = [
  _hoisted_2$F,
  _hoisted_3$w
];

function render$M(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("label", _hoisted_1$M, _hoisted_4$g))
}

script$M.render = render$M;
script$M.__file = "src/components/Switch.vue";

var script$L = {
  name: "k-tooltip",
  props: {},
};

const _hoisted_1$L = { class: "d-flex align-items-center" };
const _hoisted_2$E = /*#__PURE__*/vue.createStaticVNode(" Beli Emas <div class=\"icon-info mobile-hide\"><img src=\"https://dl.dropboxusercontent.com/s/aj1b446pab7o2oo/ico-info-tips.svg\" alt=\"\"><div class=\"tooltips\"> Harga saat Pegadaian membeli emas Anda, yang Anda terima saat menjual emas. Harga dapat berubah sewaktu-waktu. </div></div><div class=\"icon-info mobile-show\" data-bs-toggle=\"modal\" data-bs-target=\"#beliEmas\"><img src=\"https://dl.dropboxusercontent.com/s/aj1b446pab7o2oo/ico-info-tips.svg\" alt=\"\"></div>", 3);
const _hoisted_5$6 = /*#__PURE__*/vue.createElementVNode("section", { class: "section-overlay-modal-pds mobile-version" }, [
  /*#__PURE__*/vue.createElementVNode("div", {
    class: "modal fade",
    id: "beliEmas",
    tabIndex: "-1",
    "aria-labelledby": "staticBackdropLabel",
    "aria-hidden": "true",
    "data-backdrop": "false"
  }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "modal-dialog modal-dialog-centered modal-tambah-emas-batangan modal-layout-pds custom-width-360" }, [
      /*#__PURE__*/vue.createElementVNode("div", { class: "modal-content" }, [
        /*#__PURE__*/vue.createElementVNode("div", { class: "modal-header" }, [
          /*#__PURE__*/vue.createElementVNode("h5", {
            class: "modal-title",
            id: "staticBackdropLabel"
          }, "Beli Emas"),
          /*#__PURE__*/vue.createElementVNode("button", {
            type: "button",
            class: "btn-close",
            "data-bs-dismiss": "modal",
            "aria-label": "Close"
          }, [
            /*#__PURE__*/vue.createElementVNode("img", {
              src: "https://dl.dropboxusercontent.com/s/t0czo3brgkjtpoi/close.svg",
              alt: ""
            })
          ])
        ]),
        /*#__PURE__*/vue.createElementVNode("div", { class: "modal-body" }, [
          /*#__PURE__*/vue.createTextVNode(" Harga saat Pegadaian membeli emas Anda, yang Anda terima saat menjual emas. Harga dapat berubah sewaktu-waktu. "),
          /*#__PURE__*/vue.createElementVNode("div", { class: "mt-3" }, [
            /*#__PURE__*/vue.createElementVNode("button", {
              type: "submit",
              class: "btn btn-primary btn-block",
              "data-bs-dismiss": "modal"
            }, " Mengerti ")
          ])
        ])
      ])
    ])
  ])
], -1 /* HOISTED */);
const _hoisted_6$3 = [
  _hoisted_2$E,
  _hoisted_5$6
];

function render$L(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("h6", _hoisted_1$L, _hoisted_6$3))
}

script$L.render = render$L;
script$L.__file = "src/components/Tooltip.vue";

var script$K = {
  name: "k-card-account",
  props: {},
};

const _hoisted_1$K = /*#__PURE__*/vue.createStaticVNode("<div class=\"mb-4\"><div class=\"card-account\"><span>Saldo Efektif</span><h4>250,1234 gram</h4><p id=\"no-rek-utama\">1234 5678 9012 3456</p><span>UPC Pasar Mencos</span><img src=\"https://dl.dropboxusercontent.com/s/v2silnyi0qkgjda/ico-emas-black.svg\" alt=\"\"></div></div><div class=\"card-account-green\"><span>Saldo G-Cash</span><h4>Rp 500.000</h4><p id=\"no-rek-utama\">1234 5678 9012 3456</p><img src=\"https://dl.dropboxusercontent.com/s/nkv1p594ku3ph8b/logo-bank-bni-white.png\" alt=\"\"></div>", 2);

function render$K(_ctx, _cache, $props, $setup, $data, $options) {
  return _hoisted_1$K
}

script$K.render = render$K;
script$K.__file = "src/components/Card/CardAccount.vue";

var script$J = {
  name: "k-card-article",
  props: {},
};

const _hoisted_1$J = {
  href: "#",
  class: "card-article"
};
const _hoisted_2$D = /*#__PURE__*/vue.createStaticVNode("<div class=\"card-article-wrapper\"><div class=\"card-article-banner\"><img src=\"https://dl.dropboxusercontent.com/s/f36tb9d0f3lxuar/image13.png\" alt=\"banner-article\"></div><div class=\"card-article-body\"><label class=\"label\">Pengumuman Seleksi</label><h4 class=\"title\">Management Development Program (MDP) Batch 4</h4><label class=\"time\"><i class=\"icon-clock\"></i> 20 Agustus 2021 </label></div></div>", 1);
const _hoisted_3$v = [
  _hoisted_2$D
];

function render$J(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("a", _hoisted_1$J, _hoisted_3$v))
}

script$J.render = render$J;
script$J.__file = "src/components/Card/CardArticle.vue";

var script$I = {
  name: "k-card-article-highlight",
  props: {},
};

const _hoisted_1$I = { class: "artikel-category" };
const _hoisted_2$C = /*#__PURE__*/vue.createStaticVNode("<div class=\"artikel-category__top\"><a href=\"\" class=\"card-list\"><div class=\"img-overlay\"><img src=\"https://dl.dropboxusercontent.com/s/iqlg9xxgjiz884x/banner-artikel7.png\" alt=\"\"></div><div class=\"content-item\"><div class=\"content-item__tag bg-primary\">Inspirasi</div><h2 class=\"content-item__title\"> Cara Jualan Online Selama Bulan Ramadan </h2><div class=\"content-item__date\"><img src=\"https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg\" alt=\"\"><span>16 December 2020</span></div></div></a><a href=\"\" class=\"card-list\"><div class=\"img-overlay\"><img src=\"https://dl.dropboxusercontent.com/s/iqlg9xxgjiz884x/banner-artikel7.png\" alt=\"\"></div><div class=\"content-item\"><div class=\"content-item__tag bg-primary\">Inspirasi</div><h2 class=\"content-item__title\">Ide Usaha Rumahan Jelang Ramadan</h2><div class=\"content-item__date\"><img src=\"https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg\" alt=\"\"><span>16 December 2020</span></div></div></a><a href=\"\" class=\"card-list\"><div class=\"img-overlay\"><img src=\"https://dl.dropboxusercontent.com/s/iqlg9xxgjiz884x/banner-artikel7.png\" alt=\"\"></div><div class=\"content-item\"><div class=\"content-item__tag bg-primary\">Inspirasi</div><h2 class=\"content-item__title\"> Website untuk Usaha Sampingan Di Rumah </h2><div class=\"content-item__date\"><img src=\"https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg\" alt=\"\"><span>16 December 2020</span></div></div></a><a href=\"\" class=\"card-list\"><div class=\"img-overlay\"><img src=\"https://dl.dropboxusercontent.com/s/iqlg9xxgjiz884x/banner-artikel7.png\" alt=\"\"></div><div class=\"content-item\"><div class=\"content-item__tag bg-primary\">Inspirasi</div><h2 class=\"content-item__title\"> Ide Usaha Makanan yang Sedang Tren </h2><div class=\"content-item__date\"><img src=\"https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg\" alt=\"\"><span>16 December 2020</span></div></div></a></div><div class=\"artikel-category__bottom\"><div class=\"list-artikel\"><div class=\"list-artikel__box\"><a href=\"\" class=\"card-list card-list-lg\"><div class=\"img-overlay\"><img src=\"https://dl.dropboxusercontent.com/s/iqlg9xxgjiz884x/banner-artikel7.png\" alt=\"\"></div><div class=\"content-item\"><div class=\"content-item__tag bg-primary\">Inspirasi</div><h2 class=\"content-item__title\"> Cara Jualan Online Selama Bulan Ramadan </h2><div class=\"content-item__date\"><img src=\"https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg\" alt=\"\"><span>16 December 2020</span></div></div></a><a href=\"\" class=\"card-list\"><div class=\"img-overlay\"><img src=\"https://dl.dropboxusercontent.com/s/iqlg9xxgjiz884x/banner-artikel7.png\" alt=\"\"></div><div class=\"content-item\"><div class=\"content-item__tag bg-primary\">Inspirasi</div><h2 class=\"content-item__title\"> Cara Jualan Online Selama Bulan Ramadan </h2><div class=\"content-item__date\"><img src=\"https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg\" alt=\"\"><span>16 December 2020</span></div></div></a><a href=\"\" class=\"card-list\"><div class=\"img-overlay\"><img src=\"https://dl.dropboxusercontent.com/s/iqlg9xxgjiz884x/banner-artikel7.png\" alt=\"\"></div><div class=\"content-item\"><div class=\"content-item__tag bg-primary\">Inspirasi</div><h2 class=\"content-item__title\"> Cara Jualan Online Selama Bulan Ramadan </h2><div class=\"content-item__date\"><img src=\"https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg\" alt=\"\"><span>16 December 2020</span></div></div></a><a href=\"\" class=\"card-list\"><div class=\"img-overlay\"><img src=\"https://dl.dropboxusercontent.com/s/iqlg9xxgjiz884x/banner-artikel7.png\" alt=\"\"></div><div class=\"content-item\"><div class=\"content-item__tag bg-primary\">Inspirasi</div><h2 class=\"content-item__title\"> Cara Jualan Online Selama Bulan Ramadan </h2><div class=\"content-item__date\"><img src=\"https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg\" alt=\"\"><span>16 December 2020</span></div></div></a></div></div></div>", 2);
const _hoisted_4$f = [
  _hoisted_2$C
];

function render$I(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("section", _hoisted_1$I, _hoisted_4$f))
}

script$I.render = render$I;
script$I.__file = "src/components/Card/CardArticleHighlight.vue";

var script$H = {
  name: "k-card-content",
  props: {},
};

const _hoisted_1$H = {
  href: "#",
  class: "card-content",
  target: "blank"
};
const _hoisted_2$B = /*#__PURE__*/vue.createElementVNode("div", { class: "card-content-wrapper" }, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "https://dl.dropboxusercontent.com/s/stm8f4vuko68qs0/icon-karir.svg",
    class: "icon"
  }),
  /*#__PURE__*/vue.createElementVNode("h4", { class: "title" }, "Karir"),
  /*#__PURE__*/vue.createElementVNode("p", { class: "subtitle" }, " Bangun perekonomian masyarakat Indonesia melalui kemampuanmu bersama Pegadaian. Indonesia melalui kemampuanmu ")
], -1 /* HOISTED */);
const _hoisted_3$u = [
  _hoisted_2$B
];

function render$H(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("a", _hoisted_1$H, _hoisted_3$u))
}

script$H.render = render$H;
script$H.__file = "src/components/Card/CardContent.vue";

var script$G = {
  name: "k-card-event",
  props: {},
};

const _hoisted_1$G = { class: "card-acara" };
const _hoisted_2$A = /*#__PURE__*/vue.createStaticVNode("<div class=\"card-acara__top\"><img src=\"https://dl.dropboxusercontent.com/s/7dscsa0gxnv2mbs/img-acara.png\" alt=\"\"></div><div class=\"card-acara__bottom\"><div class=\"sum-acara\"><h5>Acara Badai Emas</h5><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p></div><div class=\"info-acara\"><div class=\"info-acara__box\"><h6>Tanggal</h6><p>22 Desember 2021</p></div><div class=\"info-acara__box\"><h6>Waktu</h6><p>19:00 WIB</p></div><div class=\"info-acara__box\"><h6>Tempat</h6><p>Zoom Meeting</p></div></div><div class=\"guide-acara\"><span>Cara Registrasi:</span><p> 1 .Kode promo RENCANAEMAS digunakan untuk transaksi buka Tabungan Emas.<br> 2. Diskon sebesar 40%, maksimal Rp20.000.<br> 3. Minimal transaksi Rp50.000,-<br> 4. Kode promo bisa digunakan pada Outlet Pegadaian, aplikasi Pegadaian Digital, dan aplikasi Pegadaian Syariah Digital.<br> 5. Masa aktif kode promo berakhir pada 30 April 2021. </p></div><a href=\"\" class=\"btn btn-primary\">Registrasi Acara</a></div>", 2);
const _hoisted_4$e = [
  _hoisted_2$A
];

function render$G(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$G, _hoisted_4$e))
}

script$G.render = render$G;
script$G.__file = "src/components/Card/CardEvent.vue";

var script$F = {
  name: "k-card-file",
  props: {},
};

const _hoisted_1$F = { class: "p-5" };
const _hoisted_2$z = /*#__PURE__*/vue.createStaticVNode("<div class=\"card-file\"><div class=\"card-file-item\"><div class=\"card-file-item-header\"><img src=\"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/ebook2.png\" alt=\"banner-file\"></div><div class=\"card-file-item-body\"><h1 class=\"title-card-file\">Title</h1><p class=\"subtitle-card-file\">Subtitle</p><button class=\"btn btn-outline-primary\">Button</button></div></div></div>", 1);
const _hoisted_3$t = [
  _hoisted_2$z
];

function render$F(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$F, _hoisted_3$t))
}

script$F.render = render$F;
script$F.__file = "src/components/Card/CardFile.vue";

var script$E = {
  name: "k-card-product",
  props: {},
};

const _hoisted_1$E = { class: "card-produk" };
const _hoisted_2$y = /*#__PURE__*/vue.createStaticVNode("<a href=\"./produk-gadai-efek.html\"><div class=\"card-produk__top\"><img src=\"https://dl.dropboxusercontent.com/s/ctyhm3c98u6kn2z/product-card.png\" alt=\"\"></div><div class=\"card-produk__bottom\"><div class=\"icon-box\"><img src=\"https://dl.dropboxusercontent.com/s/0t42wwdladvwz8v/pegadaian-ico.svg\" alt=\"\"></div><div class=\"status-box\"><div class=\"pgd-status\">Konvesional</div></div><h5>Gadai Efek</h5><p> Penuhi kebutuhan di luar dugaan dengan cepat dengan gadai emas batangan maupun perhiasan... </p></div></a>", 1);
const _hoisted_3$s = [
  _hoisted_2$y
];

function render$E(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$E, _hoisted_3$s))
}

script$E.render = render$E;
script$E.__file = "src/components/Card/CardProduct.vue";

var script$D = {
  name: "k-card-product-konvensional",
  props: {},
};

const _hoisted_1$D = { class: "card-produk" };
const _hoisted_2$x = /*#__PURE__*/vue.createStaticVNode("<a href=\"./produk-gadai-efek.html\"><div class=\"card-produk__top\"><img src=\"https://dl.dropboxusercontent.com/s/ctyhm3c98u6kn2z/product-card.png\" alt=\"\"></div><div class=\"card-produk__bottom\"><div class=\"icon-box\"><img src=\"https://dl.dropboxusercontent.com/s/0t42wwdladvwz8v/pegadaian-ico.svg\" alt=\"\"></div><div class=\"status-box\"><div class=\"pgd-status\">Konvesional</div><div class=\"pgd-status-blue\">Syariah</div></div><h5>Gadai Efek</h5><p> Penuhi kebutuhan di luar dugaan dengan cepat dengan gadai emas batangan maupun perhiasan... </p></div></a>", 1);
const _hoisted_3$r = [
  _hoisted_2$x
];

function render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$D, _hoisted_3$r))
}

script$D.render = render$D;
script$D.__file = "src/components/Card/CardProductKonvensional.vue";

var script$C = {
  name: "k-card-product-syariah",
  props: {},
};

const _hoisted_1$C = { class: "card-produk" };
const _hoisted_2$w = /*#__PURE__*/vue.createStaticVNode("<div class=\"syariah\"><a href=\"./produk-gadai-efek.html\"><div class=\"card-produk__top\"><img src=\"https://dl.dropboxusercontent.com/s/ctyhm3c98u6kn2z/product-card.png\" alt=\"\"></div></a></div><div class=\"card-produk__bottom\"><div class=\"icon-box\"><img src=\"https://dl.dropboxusercontent.com/s/0t42wwdladvwz8v/pegadaian-ico.svg\" alt=\"\"></div><div class=\"status-box\"><div class=\"pgd-status\">Syariah</div></div><h5>Gadai Efek</h5><p> Penuhi kebutuhan di luar dugaan dengan cepat dengan gadai emas batangan maupun perhiasan... </p></div>", 2);
const _hoisted_4$d = [
  _hoisted_2$w
];

function render$C(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$C, _hoisted_4$d))
}

script$C.render = render$C;
script$C.__file = "src/components/Card/CardProductSyariah.vue";

var script$B = {
  name: "k-card-promo",
  props: {},
};

const _hoisted_1$B = { class: "card-promo" };
const _hoisted_2$v = /*#__PURE__*/vue.createElementVNode("div", { class: "card-promo__top" }, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "https://dl.dropboxusercontent.com/s/vi6mqix3kmzs6n8/img-promo.png",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_3$q = /*#__PURE__*/vue.createElementVNode("div", { class: "card-promo__bottom" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "promo-title-box" }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "slug-box" }, [
      /*#__PURE__*/vue.createElementVNode("div", { class: "pgd-status" }, "108 Hari lagi"),
      /*#__PURE__*/vue.createElementVNode("div", { class: "slug-box__date" }, "01 April – 31 Juli 2021")
    ]),
    /*#__PURE__*/vue.createElementVNode("h4", null, "Diskon 40% Buka Tabungan Emas di Pegadaian")
  ]),
  /*#__PURE__*/vue.createElementVNode("div", { class: "promo-code-box" }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "promo-code-box__top" }, [
      /*#__PURE__*/vue.createElementVNode("img", {
        src: "https://dl.dropboxusercontent.com/s/9zbkljajtry1tzs/coupon.png",
        alt: ""
      }),
      /*#__PURE__*/vue.createElementVNode("h5", null, "Kode Promo")
    ]),
    /*#__PURE__*/vue.createElementVNode("div", { class: "promo-code-box__bottom" }, [
      /*#__PURE__*/vue.createElementVNode("h2", { id: "code1" }, "RENCANAEMAS"),
      /*#__PURE__*/vue.createElementVNode("button", {
        class: "btn-tertiary copyPromo1",
        onclick: "copyPromo('#code1');showToast('1'); "
      }, " Salin "),
      /*#__PURE__*/vue.createElementVNode("div", {
        id: "1",
        class: "toast-promo bg-primary"
      }, [
        /*#__PURE__*/vue.createElementVNode("span", null, "Kode Promo berhasil disalin"),
        /*#__PURE__*/vue.createElementVNode("button", {
          class: "btn-tertiary",
          onclick: "$('#1').hide()"
        }, [
          /*#__PURE__*/vue.createElementVNode("img", {
            src: "https://dl.dropboxusercontent.com/s/9adobynb1elkelw/close-white.svg",
            alt: ""
          })
        ])
      ])
    ])
  ]),
  /*#__PURE__*/vue.createElementVNode("div", { class: "promo-guide" }, [
    /*#__PURE__*/vue.createElementVNode("ol", null, [
      /*#__PURE__*/vue.createElementVNode("li", null, " Kode promo RENCANAEMAS digunakan untuk transaksi buka Tabungan Emas. "),
      /*#__PURE__*/vue.createElementVNode("li", null, "Diskon sebesar 40%, maksimal Rp20.000."),
      /*#__PURE__*/vue.createElementVNode("li", null, "Minimal transaksi Rp50.000,-"),
      /*#__PURE__*/vue.createElementVNode("li", null, " Kode promo bisa digunakan pada Outlet Pegadaian, aplikasi Pegadaian Digital, dan aplikasi Pegadaian Syariah Digital. "),
      /*#__PURE__*/vue.createElementVNode("li", null, "Masa aktif kode promo berakhir pada 30 April 2021.")
    ]),
    /*#__PURE__*/vue.createElementVNode("div", {
      class: "more-guide",
      id: "guide1"
    }, [
      /*#__PURE__*/vue.createElementVNode("span", null, "Cara menggunakan Promo RENCANAEMAS di aplikasi Pegadaian Digital:"),
      /*#__PURE__*/vue.createElementVNode("ol", null, [
        /*#__PURE__*/vue.createElementVNode("li", null, " Kode promo RENCANAEMAS digunakan untuk transaksi buka Tabungan Emas. "),
        /*#__PURE__*/vue.createElementVNode("li", null, "Diskon sebesar 40%, maksimal Rp20.000."),
        /*#__PURE__*/vue.createElementVNode("li", null, "Minimal transaksi Rp50.000,-"),
        /*#__PURE__*/vue.createElementVNode("li", null, " Kode promo bisa digunakan pada Outlet Pegadaian, aplikasi Pegadaian Digital, dan aplikasi Pegadaian Syariah Digital. "),
        /*#__PURE__*/vue.createElementVNode("li", null, "Masa aktif kode promo berakhir pada 30 April 2021.")
      ])
    ])
  ]),
  /*#__PURE__*/vue.createElementVNode("button", {
    id: "btn-open1",
    class: "btn-tertiary",
    onclick: "openGuide('1')"
  }, " Baca Selengkapnya ")
], -1 /* HOISTED */);
const _hoisted_4$c = [
  _hoisted_2$v,
  _hoisted_3$q
];

function render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$B, _hoisted_4$c))
}

script$B.render = render$B;
script$B.__file = "src/components/Card/CardPromo.vue";

var script$A = {
  name: "k-card-promo-code-1",
  props: {},
};

const _hoisted_1$A = { class: "pgd-carousel-get-promo__item" };
const _hoisted_2$u = /*#__PURE__*/vue.createElementVNode("div", { class: "content-top" }, [
  /*#__PURE__*/vue.createElementVNode("h5", null, "Diskon buka tabungan emas Rp 30.000 untuk pengguna pertama."),
  /*#__PURE__*/vue.createElementVNode("p", null, "MULAINABUNG")
], -1 /* HOISTED */);
const _hoisted_3$p = /*#__PURE__*/vue.createElementVNode("div", { class: "content-bottom" }, [
  /*#__PURE__*/vue.createElementVNode("p", null, "Gunakan")
], -1 /* HOISTED */);
const _hoisted_4$b = [
  _hoisted_2$u,
  _hoisted_3$p
];

function render$A(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$A, _hoisted_4$b))
}

script$A.render = render$A;
script$A.__file = "src/components/Card/CardPromoCode1.vue";

var script$z = {
  name: "k-card-promo-code-2",
  props: {},
};

const _hoisted_1$z = {
  href: "",
  class: "box-promo btn-box-promo"
};
const _hoisted_2$t = /*#__PURE__*/vue.createElementVNode("div", { class: "icon" }, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "https://dl.dropboxusercontent.com/s/j0g3sis191rz7ag/coupon-ico.svg",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_3$o = /*#__PURE__*/vue.createElementVNode("div", { class: "btn-box-promo__text" }, [
  /*#__PURE__*/vue.createElementVNode("p", null, "Gunakan Kode Promo")
], -1 /* HOISTED */);
const _hoisted_4$a = [
  _hoisted_2$t,
  _hoisted_3$o
];

function render$z(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("a", _hoisted_1$z, _hoisted_4$a))
}

script$z.render = render$z;
script$z.__file = "src/components/Card/CardPromoCode2.vue";

var script$y = {
  name: "k-card-promo-code-3",
  props: {},
};

const _hoisted_1$y = { class: "box-promo btn-box-promo" };
const _hoisted_2$s = /*#__PURE__*/vue.createStaticVNode("<div class=\"icon\"><img src=\"https://dl.dropboxusercontent.com/s/j0g3sis191rz7ag/coupon-ico.svg\" alt=\"\"></div><div class=\"btn-box-promo__text\"><h5>MULAINABUNG</h5><p>Gunakan Kode Promo</p></div><a class=\"btn-tertiary delete-promo\"><img src=\"https://dl.dropboxusercontent.com/s/t0czo3brgkjtpoi/close.svg\" alt=\"\"></a>", 3);
const _hoisted_5$5 = [
  _hoisted_2$s
];

function render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$y, _hoisted_5$5))
}

script$y.render = render$y;
script$y.__file = "src/components/Card/CardPromoCode3.vue";

var script$x = {
  name: "k-card-voucher",
  props: {},
};

const _hoisted_1$x = { class: "card-voucher" };
const _hoisted_2$r = /*#__PURE__*/vue.createStaticVNode("<div class=\"card-voucher__top\"><img src=\"https://dl.dropboxusercontent.com/s/fr18rgd6lhrrqrf/voucher-active.png\" alt=\"\"></div><div class=\"card-voucher__bottom\"><a href=\"./promo-detail.html\">Diskon Beli Emas hingga Rp 300.000</a><div class=\"voucher-period\"><div class=\"voucher-period__desc\"><img src=\"https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg\" alt=\"\"><span>Berlaku hingga 31 Okt 2020</span></div><a href=\"\"><h5>Gunakan</h5></a></div></div>", 2);
const _hoisted_4$9 = [
  _hoisted_2$r
];

function render$x(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$x, _hoisted_4$9))
}

script$x.render = render$x;
script$x.__file = "src/components/Card/CardVoucher.vue";

var script$w = {
  name: "k-hero-carousel",
  props: {},
};

const _hoisted_1$w = { class: "hero-carousel container" };
const _hoisted_2$q = /*#__PURE__*/vue.createStaticVNode("<a href=\"\" class=\"hero-carousel__item\"><img src=\"https://dl.dropboxusercontent.com/s/xob7r1f9qk84mm6/banner-1.png\" alt=\"\"></a><a href=\"\" class=\"hero-carousel__item\"><img src=\"https://dl.dropboxusercontent.com/s/xob7r1f9qk84mm6/banner-1.png\" alt=\"\"></a><a href=\"\" class=\"hero-carousel__item\"><img src=\"https://dl.dropboxusercontent.com/s/xob7r1f9qk84mm6/banner-1.png\" alt=\"\"></a>", 3);
const _hoisted_5$4 = [
  _hoisted_2$q
];

function render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("section", _hoisted_1$w, _hoisted_5$4))
}

script$w.render = render$w;
script$w.__file = "src/components/Carousel/HeroCarousel.vue";

var script$v = {
  name: "k-pgd-hero-carousel",
  props: {},
};

const _hoisted_1$v = { class: "pgd-hero-carousel" };
const _hoisted_2$p = /*#__PURE__*/vue.createStaticVNode("<a href=\"\" class=\"pgd-hero-carousel__item\"><div class=\"img-overlay\"><img src=\"https://dl.dropboxusercontent.com/s/he7w8wxs8nqelt4/banner.png\" alt=\"\"></div><div class=\"content-item\"><div class=\"content-item__tag bg-primary\">Inspirasi</div><h2 class=\"content-item__title\">Ide Hadiah untuk Ibu Tersayang</h2><p class=\"content-item__desc\"> “Kasih sayang Ibu sepanjang masa, kasih sayang anak sepanjang galah” Meski kasih sayang Ibu tak mungkin dibalas lunas, namun tak ... </p></div></a><a href=\"\" class=\"pgd-hero-carousel__item\"><div class=\"img-overlay\"><img src=\"https://dl.dropboxusercontent.com/s/he7w8wxs8nqelt4/banner.png\" alt=\"\"></div><div class=\"content-item\"><div class=\"content-item__tag bg-primary\">Inspirasi</div><h2 class=\"content-item__title\">Ide Hadiah untuk Ibu Tersayang</h2><p class=\"content-item__desc\"> “Kasih sayang Ibu sepanjang masa, kasih sayang anak sepanjang galah” Meski kasih sayang Ibu tak mungkin dibalas lunas, namun tak ...Kasih sayang Ibu sepanjang masa, kasih sayang anak sepanjang galah” Meski kasih sayang Ibu tak mungkin dibalas lunas, namun tak ... </p></div></a><a href=\"\" class=\"pgd-hero-carousel__item\"><div class=\"img-overlay\"><img src=\"https://dl.dropboxusercontent.com/s/he7w8wxs8nqelt4/banner.png\" alt=\"\"></div><div class=\"content-item\"><div class=\"content-item__tag bg-primary\">Inspirasi</div><h2 class=\"content-item__title\">Ide Hadiah untuk Ibu Tersayang</h2><p class=\"content-item__desc\"> “Kasih sayang Ibu sepanjang masa, kasih sayang anak sepanjang galah” Meski kasih sayang Ibu tak mungkin dibalas lunas, namun tak ...Kasih sayang Ibu sepanjang masa, kasih sayang anak sepanjang galah” Meski kasih sayang Ibu tak mungkin dibalas lunas, namun tak ... </p></div></a><a href=\"\" class=\"pgd-hero-carousel__item\"><div class=\"img-overlay\"><img src=\"https://dl.dropboxusercontent.com/s/he7w8wxs8nqelt4/banner.png\" alt=\"\"></div><div class=\"content-item\"><div class=\"content-item__tag bg-primary\">Inspirasi</div><h2 class=\"content-item__title\">Ide Hadiah untuk Ibu Tersayang</h2><p class=\"content-item__desc\"> “Kasih sayang Ibu sepanjang masa, kasih sayang anak sepanjang galah” Meski kasih sayang Ibu tak mungkin dibalas lunas, namun tak ...Kasih sayang Ibu sepanjang masa, kasih sayang anak sepanjang galah” Meski kasih sayang Ibu tak mungkin dibalas lunas, namun tak ... </p></div></a>", 4);
const _hoisted_6$2 = [
  _hoisted_2$p
];

function render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("section", _hoisted_1$v, _hoisted_6$2))
}

script$v.render = render$v;
script$v.__file = "src/components/Carousel/PgdHeroCarousel.vue";

var script$u = {
  name: "k-dropdown-icon-text-lg",
  props: {},
};

const _hoisted_1$u = /*#__PURE__*/vue.createElementVNode("div", { class: "group-input" }, [
  /*#__PURE__*/vue.createElementVNode("div", {
    class: "accordion custom-accordion-input mobile-hide",
    id: "box-Bank2"
  }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "accordion-item" }, [
      /*#__PURE__*/vue.createElementVNode("h2", {
        class: "accordion-header",
        id: "headingOne"
      }, [
        /*#__PURE__*/vue.createElementVNode("button", {
          class: "accordion-button collapsed",
          id: "pilih-Bank2",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#collapsePilihBank2",
          "aria-expanded": "false",
          "aria-controls": "collapsePilihBank2"
        }, [
          /*#__PURE__*/vue.createElementVNode("span", { id: "getDefaultSelected2" }, "Pilih rekening bank"),
          /*#__PURE__*/vue.createElementVNode("input", {
            type: "text",
            id: "getBankVal2",
            hidden: "",
            required: ""
          }),
          /*#__PURE__*/vue.createElementVNode("div", {
            class: "accordion-button__selected",
            id: "getRekening2"
          }, [
            /*#__PURE__*/vue.createElementVNode("div", { class: "accordion-button__selected-img" }, [
              /*#__PURE__*/vue.createElementVNode("img", {
                src: "",
                id: "getImg2",
                alt: ""
              })
            ]),
            /*#__PURE__*/vue.createElementVNode("div", { class: "accordion-button__selected-detail selected-rekening-tujuan" }, [
              /*#__PURE__*/vue.createElementVNode("h5", { id: "getText2" }),
              /*#__PURE__*/vue.createElementVNode("p", { id: "getNameText2" }),
              /*#__PURE__*/vue.createElementVNode("p", { id: "getNo2" })
            ])
          ])
        ])
      ]),
      /*#__PURE__*/vue.createElementVNode("div", {
        id: "collapsePilihBank2",
        class: "accordion-collapse collapse",
        "aria-labelledby": "headingOne",
        "data-bs-parent": "#box-Bank2"
      }, [
        /*#__PURE__*/vue.createElementVNode("div", { class: "accordion-body" }, [
          /*#__PURE__*/vue.createElementVNode("div", { class: "pgd-box-search-grey m-2" }, [
            /*#__PURE__*/vue.createElementVNode("div", { class: "icon" }, [
              /*#__PURE__*/vue.createElementVNode("img", {
                src: "https://dl.dropboxusercontent.com/s/5lzaf2xg0qfabgd/search-dark.svg",
                alt: ""
              })
            ]),
            /*#__PURE__*/vue.createElementVNode("input", {
              type: "search",
              placeholder: "Cari nama atau nomor rekening"
            })
          ]),
          /*#__PURE__*/vue.createElementVNode("div", { class: "box-search-rekening-tujuan" }, [
            /*#__PURE__*/vue.createElementVNode("div", { class: "box-search-rekening-tujuan__top" }, [
              /*#__PURE__*/vue.createElementVNode("h6", null, "G-Cash"),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-item" }, [
                /*#__PURE__*/vue.createElementVNode("div", {
                  class: "box-item__content",
                  onclick: "BankSelected3(this, 'G-Cash BNI', 'https://dl.dropboxusercontent.com/s/3madk1etpplza3f/logo-gcash-bni.png', 'Thoriq Sadad ','2980 8131 6069 555')"
                }, [
                  /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                    /*#__PURE__*/vue.createElementVNode("img", {
                      src: "https://dl.dropboxusercontent.com/s/3madk1etpplza3f/logo-gcash-bni.png",
                      alt: ""
                    })
                  ]),
                  /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                    /*#__PURE__*/vue.createElementVNode("h5", null, "G-Cash BNI"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "Thoriq Sadad"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "2980 8131 6069 555")
                  ]),
                  /*#__PURE__*/vue.createElementVNode("img", {
                    class: "ico-check ml-auto",
                    src: "https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg",
                    alt: ""
                  })
                ])
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-item" }, [
                /*#__PURE__*/vue.createElementVNode("div", {
                  class: "box-item__content",
                  onclick: "BankSelected3(this, 'G-Cash BRI', 'https://dl.dropboxusercontent.com/s/5ch6s8vueahzplv/logo-gcash-bri.png', 'Thoriq Sadad ','8438 8131 6069 555')"
                }, [
                  /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                    /*#__PURE__*/vue.createElementVNode("img", {
                      src: "https://dl.dropboxusercontent.com/s/5ch6s8vueahzplv/logo-gcash-bri.png",
                      alt: ""
                    })
                  ]),
                  /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                    /*#__PURE__*/vue.createElementVNode("h5", null, "G-Cash BRI"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "Thoriq Sadad"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "8438 8131 6069 555")
                  ]),
                  /*#__PURE__*/vue.createElementVNode("img", {
                    class: "ico-check ml-auto",
                    src: "https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg",
                    alt: ""
                  })
                ])
              ])
            ]),
            /*#__PURE__*/vue.createElementVNode("div", { class: "line-divider" }),
            /*#__PURE__*/vue.createElementVNode("div", { class: "box-search-rekening-tujuan__bottom" }, [
              /*#__PURE__*/vue.createElementVNode("h6", null, "Bank"),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-item" }, [
                /*#__PURE__*/vue.createElementVNode("div", {
                  class: "box-item__content",
                  onclick: "BankSelected3(this, 'Bank BCA', 'https://dl.dropboxusercontent.com/s/r41fp49vk2bq7gy/logo-bank-bca.png', 'Thoriq Sadad ','8438 8131 6069 555')"
                }, [
                  /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                    /*#__PURE__*/vue.createElementVNode("img", {
                      src: "https://dl.dropboxusercontent.com/s/r41fp49vk2bq7gy/logo-bank-bca.png",
                      alt: ""
                    })
                  ]),
                  /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                    /*#__PURE__*/vue.createElementVNode("h5", null, "Bank BCA"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "Thoriq Sadad"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "4516 7859 1241 232")
                  ]),
                  /*#__PURE__*/vue.createElementVNode("img", {
                    class: "ico-check ml-auto",
                    src: "https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg",
                    alt: ""
                  })
                ])
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-item" }, [
                /*#__PURE__*/vue.createElementVNode("div", {
                  class: "box-item__content",
                  onclick: "BankSelected3(this, 'Bank BNI', 'https://dl.dropboxusercontent.com/s/hyv5xxicm3u1vh4/logo-bank-bni.png', 'Thoriq Sadad ','8438 8131 6069 555')"
                }, [
                  /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                    /*#__PURE__*/vue.createElementVNode("img", {
                      src: "https://dl.dropboxusercontent.com/s/hyv5xxicm3u1vh4/logo-bank-bni.png",
                      alt: ""
                    })
                  ]),
                  /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                    /*#__PURE__*/vue.createElementVNode("h5", null, "Bank BNI"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "Thoriq Sadad"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "4516 7859 1241 232")
                  ]),
                  /*#__PURE__*/vue.createElementVNode("img", {
                    class: "ico-check ml-auto",
                    src: "https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg",
                    alt: ""
                  })
                ])
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-item" }, [
                /*#__PURE__*/vue.createElementVNode("div", {
                  class: "box-item__content",
                  onclick: "BankSelected3(this, 'Bank BRI', 'https://dl.dropboxusercontent.com/s/gz3bnrh7t0cjij0/logo-bank-bri.png', 'Thoriq Sadad ','8438 8131 6069 555')"
                }, [
                  /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                    /*#__PURE__*/vue.createElementVNode("img", {
                      src: "https://dl.dropboxusercontent.com/s/gz3bnrh7t0cjij0/logo-bank-bri.png",
                      alt: ""
                    })
                  ]),
                  /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                    /*#__PURE__*/vue.createElementVNode("h5", null, "Bank BRI"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "Thoriq Sadad"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "4516 7859 1241 232")
                  ]),
                  /*#__PURE__*/vue.createElementVNode("img", {
                    class: "ico-check ml-auto",
                    src: "https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg",
                    alt: ""
                  })
                ])
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-item" }, [
                /*#__PURE__*/vue.createElementVNode("div", {
                  class: "box-item__content no-border",
                  onclick: "BankSelected3(this,  'Bank Mandiri', 'https://dl.dropboxusercontent.com/s/jlg4emd77bwcxd3/logo-bank-mandiri.png', 'Thoriq Sadad ','8438 8131 6069 555')"
                }, [
                  /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                    /*#__PURE__*/vue.createElementVNode("img", {
                      src: "https://dl.dropboxusercontent.com/s/jlg4emd77bwcxd3/logo-bank-mandiri.png",
                      alt: ""
                    })
                  ]),
                  /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                    /*#__PURE__*/vue.createElementVNode("h5", null, "Bank Mandiri"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "Thoriq Sadad"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "4516 7859 1241 232")
                  ]),
                  /*#__PURE__*/vue.createElementVNode("img", {
                    class: "ico-check ml-auto",
                    src: "https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg",
                    alt: ""
                  })
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ]),
  /*#__PURE__*/vue.createElementVNode("input", {
    type: "hidden",
    id: "kreditMobileInput",
    name: "no-kredit"
  }),
  /*#__PURE__*/vue.createElementVNode("button", {
    type: "button",
    class: "btn-pilih-jangka",
    "data-bs-toggle": "modal",
    "data-bs-target": "#modal-select-rekening"
  }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "option-with-img" }, [
      /*#__PURE__*/vue.createElementVNode("div", {
        class: "img-box",
        id: "kredit-img-box2"
      }, [
        /*#__PURE__*/vue.createElementVNode("img", {
          src: "",
          alt: ""
        })
      ]),
      /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
        /*#__PURE__*/vue.createElementVNode("h6", {
          id: "kredit-mobile-text2",
          class: "btn-pilih-jangka__text"
        }, " Pilih rekening bank "),
        /*#__PURE__*/vue.createElementVNode("span", { id: "kredit-mobile-span" }),
        /*#__PURE__*/vue.createElementVNode("div", { class: "" }, [
          /*#__PURE__*/vue.createElementVNode("span", { id: "kredit-mobile-span2" })
        ])
      ])
    ]),
    /*#__PURE__*/vue.createElementVNode("img", {
      src: "https://dl.dropboxusercontent.com/s/vnj3lkbwbskynob/icon-down.svg",
      alt: ""
    })
  ])
], -1 /* HOISTED */);
const _hoisted_2$o = /*#__PURE__*/vue.createElementVNode("section", { class: "section-overlay-modal-pds" }, [
  /*#__PURE__*/vue.createElementVNode("div", {
    class: "modal fade",
    id: "modal-select-rekening",
    "data-bs-keyboard": "false",
    tabindex: "-1",
    "aria-labelledby": "staticBackdropLabel",
    "aria-hidden": "true"
  }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "modal-dialog modal-dialog-centered modal-change-password modal-select-option" }, [
      /*#__PURE__*/vue.createElementVNode("div", { class: "modal-content" }, [
        /*#__PURE__*/vue.createElementVNode("div", { class: "modal-header" }, [
          /*#__PURE__*/vue.createElementVNode("h5", {
            class: "modal-title",
            id: "staticBackdropLabel"
          }, " Pilih Rekening Bank "),
          /*#__PURE__*/vue.createElementVNode("button", {
            type: "button",
            id: "close-modal",
            class: "btn-close",
            "data-bs-dismiss": "modal",
            "aria-label": "Close"
          }, [
            /*#__PURE__*/vue.createElementVNode("img", {
              src: "https://dl.dropboxusercontent.com/s/t0czo3brgkjtpoi/close.svg",
              alt: ""
            })
          ])
        ]),
        /*#__PURE__*/vue.createElementVNode("div", { class: "modal-body container-nopadding-mobile" }, [
          /*#__PURE__*/vue.createElementVNode("div", { class: "box-search-rekening-tujuan" }, [
            /*#__PURE__*/vue.createElementVNode("div", { class: "box-search-rekening-tujuan__top" }, [
              /*#__PURE__*/vue.createElementVNode("div", { class: "pgd-box-search-grey" }, [
                /*#__PURE__*/vue.createElementVNode("div", { class: "icon" }, [
                  /*#__PURE__*/vue.createElementVNode("img", {
                    src: "https://dl.dropboxusercontent.com/s/5lzaf2xg0qfabgd/search-dark.svg",
                    alt: ""
                  })
                ]),
                /*#__PURE__*/vue.createElementVNode("input", {
                  type: "search",
                  placeholder: "Cari nama atau nomor rekening",
                  name: "findsaham",
                  id: "findsaham"
                })
              ]),
              /*#__PURE__*/vue.createElementVNode("h6", null, "G-Cash"),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-item" }, [
                /*#__PURE__*/vue.createElementVNode("div", {
                  class: "box-item__content jenis-item",
                  onclick: "pilihComboBox5('G-Cash BNI', 'Thoriq Sadad ',this,'2980 8131 6069 555', 'https://dl.dropboxusercontent.com/s/3madk1etpplza3f/logo-gcash-bni.png','kreditMobileInput', 'kredit-mobile-text2', 'jenis-item','kredit-mobile-span','kredit-mobile-span2','kredit-img-box2')",
                  "data-bs-dismiss": "modal"
                }, [
                  /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                    /*#__PURE__*/vue.createElementVNode("img", {
                      src: "https://dl.dropboxusercontent.com/s/3madk1etpplza3f/logo-gcash-bni.png",
                      alt: ""
                    })
                  ]),
                  /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                    /*#__PURE__*/vue.createElementVNode("h5", null, "G-Cash BNI"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "Thoriq Sadad"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "2980 8131 6069 555")
                  ]),
                  /*#__PURE__*/vue.createElementVNode("img", {
                    class: "ico-check ml-auto",
                    src: "https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg",
                    alt: ""
                  })
                ])
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-item" }, [
                /*#__PURE__*/vue.createElementVNode("div", {
                  class: "box-item__content jenis-item",
                  onclick: "pilihComboBox5('G-Cash BRI', 'Thoriq Sadad ',this,'8438 8131 6069 555', 'https://dl.dropboxusercontent.com/s/5ch6s8vueahzplv/logo-gcash-bri.png','kreditMobileInput', 'kredit-mobile-text2', 'jenis-item','kredit-mobile-span','kredit-mobile-span2','kredit-img-box2')",
                  "data-bs-dismiss": "modal"
                }, [
                  /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                    /*#__PURE__*/vue.createElementVNode("img", {
                      src: "https://dl.dropboxusercontent.com/s/5ch6s8vueahzplv/logo-gcash-bri.png",
                      alt: ""
                    })
                  ]),
                  /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                    /*#__PURE__*/vue.createElementVNode("h5", null, "G-Cash BRI"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "Thoriq Sadad"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "8438 8131 6069 555")
                  ]),
                  /*#__PURE__*/vue.createElementVNode("img", {
                    class: "ico-check ml-auto",
                    src: "https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg",
                    alt: ""
                  })
                ])
              ])
            ]),
            /*#__PURE__*/vue.createElementVNode("div", { class: "line-divider" }),
            /*#__PURE__*/vue.createElementVNode("div", { class: "box-search-rekening-tujuan__bottom" }, [
              /*#__PURE__*/vue.createElementVNode("h6", null, "Bank"),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-item" }, [
                /*#__PURE__*/vue.createElementVNode("div", {
                  class: "box-item__content jenis-item",
                  onclick: "pilihComboBox5('Bank BCA', 'Thoriq Sadad ',this,'4516 7859 1241 232', 'https://dl.dropboxusercontent.com/s/r41fp49vk2bq7gy/logo-bank-bca.png','kreditMobileInput', 'kredit-mobile-text2', 'jenis-item','kredit-mobile-span','kredit-mobile-span2','kredit-img-box2')",
                  "data-bs-dismiss": "modal"
                }, [
                  /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                    /*#__PURE__*/vue.createElementVNode("img", {
                      src: "https://dl.dropboxusercontent.com/s/r41fp49vk2bq7gy/logo-bank-bca.png",
                      alt: ""
                    })
                  ]),
                  /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                    /*#__PURE__*/vue.createElementVNode("h5", null, "Bank BCA"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "Thoriq Sadad"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "4516 7859 1241 232")
                  ]),
                  /*#__PURE__*/vue.createElementVNode("img", {
                    class: "ico-check ml-auto",
                    src: "https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg",
                    alt: ""
                  })
                ])
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-item" }, [
                /*#__PURE__*/vue.createElementVNode("div", {
                  class: "box-item__content jenis-item",
                  onclick: "pilihComboBox5('Bank BNI', 'Thoriq Sadad ',this,'4516 7859 1241 232', 'https://dl.dropboxusercontent.com/s/hyv5xxicm3u1vh4/logo-bank-bni.png','kreditMobileInput', 'kredit-mobile-text2', 'jenis-item','kredit-mobile-span','kredit-mobile-span2','kredit-img-box2')",
                  "data-bs-dismiss": "modal"
                }, [
                  /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                    /*#__PURE__*/vue.createElementVNode("img", {
                      src: "https://dl.dropboxusercontent.com/s/hyv5xxicm3u1vh4/logo-bank-bni.png",
                      alt: ""
                    })
                  ]),
                  /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                    /*#__PURE__*/vue.createElementVNode("h5", null, "Bank BNI"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "Thoriq Sadad"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "4516 7859 1241 232")
                  ]),
                  /*#__PURE__*/vue.createElementVNode("img", {
                    class: "ico-check ml-auto",
                    src: "https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg",
                    alt: ""
                  })
                ])
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-item" }, [
                /*#__PURE__*/vue.createElementVNode("div", {
                  class: "box-item__content jenis-item",
                  onclick: "pilihComboBox5('Bank BRI', 'Thoriq Sadad ',this,'4516 7859 1241 232', 'https://dl.dropboxusercontent.com/s/gz3bnrh7t0cjij0/logo-bank-bri.png','kreditMobileInput', 'kredit-mobile-text2', 'jenis-item','kredit-mobile-span','kredit-mobile-span2','kredit-img-box2')",
                  "data-bs-dismiss": "modal"
                }, [
                  /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                    /*#__PURE__*/vue.createElementVNode("img", {
                      src: "https://dl.dropboxusercontent.com/s/gz3bnrh7t0cjij0/logo-bank-bri.png",
                      alt: ""
                    })
                  ]),
                  /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                    /*#__PURE__*/vue.createElementVNode("h5", null, "Bank BRI"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "Thoriq Sadad"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "4516 7859 1241 232")
                  ]),
                  /*#__PURE__*/vue.createElementVNode("img", {
                    class: "ico-check ml-auto",
                    src: "https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg",
                    alt: ""
                  })
                ])
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-item" }, [
                /*#__PURE__*/vue.createElementVNode("div", {
                  class: "box-item__content jenis-item no-border",
                  onclick: "pilihComboBox5('Bank Mandiri', 'Thoriq Sadad ',this,'4516 7859 1241 232', 'https://dl.dropboxusercontent.com/s/jlg4emd77bwcxd3/logo-bank-mandiri.png','kreditMobileInput', 'kredit-mobile-text2', 'jenis-item','kredit-mobile-span','kredit-mobile-span2','kredit-img-box2')",
                  "data-bs-dismiss": "modal"
                }, [
                  /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                    /*#__PURE__*/vue.createElementVNode("img", {
                      src: "https://dl.dropboxusercontent.com/s/jlg4emd77bwcxd3/logo-bank-mandiri.png",
                      alt: ""
                    })
                  ]),
                  /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                    /*#__PURE__*/vue.createElementVNode("h5", null, "Bank Mandiri"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "Thoriq Sadad"),
                    /*#__PURE__*/vue.createElementVNode("p", null, "4516 7859 1241 232")
                  ]),
                  /*#__PURE__*/vue.createElementVNode("img", {
                    class: "ico-check ml-auto",
                    src: "https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg",
                    alt: ""
                  })
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
], -1 /* HOISTED */);

function render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    _hoisted_1$u,
    _hoisted_2$o
  ], 64 /* STABLE_FRAGMENT */))
}

script$u.render = render$u;
script$u.__file = "src/components/Dropdown/DropdownIconTextLg.vue";

var script$t = {
  name: "k-dropdown-icon-text-sm",
  props: {},
};

const _hoisted_1$t = /*#__PURE__*/vue.createElementVNode("div", { class: "group-input" }, [
  /*#__PURE__*/vue.createElementVNode("div", {
    class: "accordion custom-accordion-input mobile-hide",
    id: "box-rekening-emas"
  }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "accordion-item" }, [
      /*#__PURE__*/vue.createElementVNode("h2", {
        class: "accordion-header",
        id: "headingOne"
      }, [
        /*#__PURE__*/vue.createElementVNode("button", {
          class: "accordion-button collapsed",
          id: "pilih-nomor-kredit",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#collapsePilihRekeningEmas",
          "aria-expanded": "false",
          "aria-controls": "collapsePilihRekeningEmas"
        }, [
          /*#__PURE__*/vue.createElementVNode("span", { id: "getDefaultSelectedNomorKredit1" }, "Pilih rekening emas"),
          /*#__PURE__*/vue.createElementVNode("input", {
            type: "text",
            id: "getPilihKreditVal1",
            value: "",
            hidden: ""
          }),
          /*#__PURE__*/vue.createElementVNode("div", {
            class: "accordion-button__selected",
            id: "getPilihKredit1"
          }, [
            /*#__PURE__*/vue.createElementVNode("div", { class: "accordion-button__selected-img" }, [
              /*#__PURE__*/vue.createElementVNode("img", {
                src: "",
                alt: "",
                id: "getImgPilihKredit1"
              })
            ]),
            /*#__PURE__*/vue.createElementVNode("div", { class: "accordion-button__selected-detail" }, [
              /*#__PURE__*/vue.createElementVNode("h5", { id: "getGramPilihKredit1" }),
              /*#__PURE__*/vue.createElementVNode("span", { id: "getValuePilihKredit1" })
            ])
          ])
        ])
      ]),
      /*#__PURE__*/vue.createElementVNode("div", {
        id: "collapsePilihRekeningEmas",
        class: "accordion-collapse collapse",
        "aria-labelledby": "headingOne",
        "data-bs-parent": "#box-rekening-emas"
      }, [
        /*#__PURE__*/vue.createElementVNode("div", { class: "accordion-body" }, [
          /*#__PURE__*/vue.createElementVNode("div", { class: "box-item" }, [
            /*#__PURE__*/vue.createElementVNode("div", {
              class: "box-item__content",
              onclick: "rekeningSelected4('rekeningSendiri', 'https://dl.dropboxusercontent.com/s/ux03pl3svfxp9ir/ico-tabungan.svg', '100,1234 gram', '1234 5678 9101 2345', this, 'pilih-nomor-kredit'), checkKredit('jenis-transaksi1', 'getrekeningEmasVal1')"
            }, [
              /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                /*#__PURE__*/vue.createElementVNode("img", {
                  src: "https://dl.dropboxusercontent.com/s/ux03pl3svfxp9ir/ico-tabungan.svg",
                  alt: ""
                })
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                /*#__PURE__*/vue.createElementVNode("h5", null, "100,1234 gram"),
                /*#__PURE__*/vue.createElementVNode("span", null, "1234 5678 9101 2345")
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-img-check ml-auto pilihKredit1" })
            ])
          ]),
          /*#__PURE__*/vue.createElementVNode("div", { class: "box-item" }, [
            /*#__PURE__*/vue.createElementVNode("div", {
              class: "box-item__content",
              onclick: "rekeningSelected4('rekeningSendiri', 'https://dl.dropboxusercontent.com/s/ux03pl3svfxp9ir/ico-tabungan.svg', '200,1234 gram', '1234 5678 9101 2345', this, 'pilih-nomor-kredit'), checkKredit('jenis-transaksi1', 'getrekeningEmasVal1')"
            }, [
              /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                /*#__PURE__*/vue.createElementVNode("img", {
                  src: "https://dl.dropboxusercontent.com/s/ux03pl3svfxp9ir/ico-tabungan.svg",
                  alt: ""
                })
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                /*#__PURE__*/vue.createElementVNode("h5", null, "200,1234 gram"),
                /*#__PURE__*/vue.createElementVNode("span", null, "1234 5678 9101 2345")
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-img-check ml-auto pilihKredit1" })
            ])
          ]),
          /*#__PURE__*/vue.createElementVNode("div", { class: "box-item" }, [
            /*#__PURE__*/vue.createElementVNode("div", {
              class: "box-item__content",
              onclick: "rekeningSelected4('rekeningSendiri', 'https://dl.dropboxusercontent.com/s/ux03pl3svfxp9ir/ico-tabungan.svg', '300,1234 gram', '1234 5678 9101 2345', this, 'pilih-nomor-kredit'), checkKredit('jenis-transaksi1', 'getrekeningEmasVal1')"
            }, [
              /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                /*#__PURE__*/vue.createElementVNode("img", {
                  src: "https://dl.dropboxusercontent.com/s/ux03pl3svfxp9ir/ico-tabungan.svg",
                  alt: ""
                })
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                /*#__PURE__*/vue.createElementVNode("h5", null, "300,1234 gram"),
                /*#__PURE__*/vue.createElementVNode("span", null, "1234 5678 9101 2345")
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-img-check ml-auto pilihKredit1" })
            ])
          ]),
          /*#__PURE__*/vue.createElementVNode("div", { class: "box-item" }, [
            /*#__PURE__*/vue.createElementVNode("div", {
              class: "box-item__content",
              onclick: "rekeningSelected4('rekeningSendiri', 'https://dl.dropboxusercontent.com/s/ux03pl3svfxp9ir/ico-tabungan.svg', '400,1234 gram', '1234 5678 9101 2345', this, 'pilih-nomor-kredit'), checkKredit('jenis-transaksi1', 'getrekeningEmasVal1')"
            }, [
              /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                /*#__PURE__*/vue.createElementVNode("img", {
                  src: "https://dl.dropboxusercontent.com/s/ux03pl3svfxp9ir/ico-tabungan.svg",
                  alt: ""
                })
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                /*#__PURE__*/vue.createElementVNode("h5", null, "400,1234 gram"),
                /*#__PURE__*/vue.createElementVNode("span", null, "1234 5678 9101 2345")
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-img-check ml-auto pilihKredit1" })
            ])
          ]),
          /*#__PURE__*/vue.createElementVNode("div", { class: "box-item" }, [
            /*#__PURE__*/vue.createElementVNode("div", {
              class: "box-item__content",
              onclick: "rekeningSelected4('rekeningSendiri', 'https://dl.dropboxusercontent.com/s/ux03pl3svfxp9ir/ico-tabungan.svg', '200,1234 gram', '1234 5678 9101 2345', this, 'pilih-nomor-kredit'), checkKredit('jenis-transaksi1', 'getrekeningEmasVal1')"
            }, [
              /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                /*#__PURE__*/vue.createElementVNode("img", {
                  src: "https://dl.dropboxusercontent.com/s/ux03pl3svfxp9ir/ico-tabungan.svg",
                  alt: ""
                })
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                /*#__PURE__*/vue.createElementVNode("h5", null, "200,1234 gram"),
                /*#__PURE__*/vue.createElementVNode("span", null, "1234 5678 9101 2345")
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-img-check ml-auto pilihKredit1" })
            ])
          ]),
          /*#__PURE__*/vue.createElementVNode("div", { class: "box-item" }, [
            /*#__PURE__*/vue.createElementVNode("div", {
              class: "box-item__content",
              onclick: "rekeningSelected4('rekeningSendiri', 'https://dl.dropboxusercontent.com/s/ux03pl3svfxp9ir/ico-tabungan.svg', '200,1234 gram', '1234 5678 9101 2345', this, 'pilih-nomor-kredit'), checkKredit('jenis-transaksi1', 'getrekeningEmasVal1')"
            }, [
              /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                /*#__PURE__*/vue.createElementVNode("img", {
                  src: "https://dl.dropboxusercontent.com/s/ux03pl3svfxp9ir/ico-tabungan.svg",
                  alt: ""
                })
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                /*#__PURE__*/vue.createElementVNode("h5", null, "200,1234 gram"),
                /*#__PURE__*/vue.createElementVNode("span", null, "1234 5678 9101 2345")
              ]),
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-img-check ml-auto pilihKredit1" })
            ])
          ])
        ])
      ])
    ])
  ]),
  /*#__PURE__*/vue.createElementVNode("input", {
    type: "hidden",
    id: "kreditMobileInput",
    name: "no-kredit"
  }),
  /*#__PURE__*/vue.createElementVNode("button", {
    type: "button",
    class: "btn-pilih-jangka",
    "data-bs-toggle": "modal",
    "data-bs-target": "#modal-select-option-kredit"
  }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "option-with-img" }, [
      /*#__PURE__*/vue.createElementVNode("div", {
        class: "img-box",
        id: "kredit-img-box"
      }, [
        /*#__PURE__*/vue.createElementVNode("img", {
          src: "https://dl.dropboxusercontent.com/s/ux03pl3svfxp9ir/ico-tabungan.svg",
          alt: ""
        })
      ]),
      /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
        /*#__PURE__*/vue.createElementVNode("h6", {
          id: "kredit-mobile-text",
          class: "btn-pilih-jangka__text"
        }, " Pilih rekening emas "),
        /*#__PURE__*/vue.createElementVNode("span", { id: "kredit-mobile-span" })
      ])
    ]),
    /*#__PURE__*/vue.createElementVNode("img", {
      src: "ps://dl.dropboxusercontent.com/s/vnj3lkbwbskynob/icon-down.svg",
      alt: ""
    })
  ])
], -1 /* HOISTED */);
const _hoisted_2$n = /*#__PURE__*/vue.createElementVNode("section", { class: "section-overlay-modal-pds" }, [
  /*#__PURE__*/vue.createElementVNode("div", {
    class: "modal fade",
    id: "modal-select-option-kredit",
    "data-bs-keyboard": "false",
    tabindex: "-1",
    "aria-labelledby": "staticBackdropLabel",
    "aria-hidden": "true"
  }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "modal-dialog modal-dialog-centered modal-change-password modal-select-option" }, [
      /*#__PURE__*/vue.createElementVNode("div", { class: "modal-content" }, [
        /*#__PURE__*/vue.createElementVNode("div", { class: "modal-header" }, [
          /*#__PURE__*/vue.createElementVNode("h5", {
            class: "modal-title",
            id: "staticBackdropLabel"
          }, " Pilih Rekening Asal "),
          /*#__PURE__*/vue.createElementVNode("button", {
            type: "button",
            class: "btn-close",
            "data-bs-dismiss": "modal",
            "aria-label": "Close"
          }, [
            /*#__PURE__*/vue.createElementVNode("img", {
              src: "https://dl.dropboxusercontent.com/s/t0czo3brgkjtpoi/close.svg",
              alt: ""
            })
          ])
        ]),
        /*#__PURE__*/vue.createElementVNode("div", { class: "modal-body" }, [
          /*#__PURE__*/vue.createElementVNode("div", { class: "pilih-jangka-waktu" }, [
            /*#__PURE__*/vue.createElementVNode("div", {
              class: "pilih-jangka-waktu__item kredit-item",
              onclick: "pilihComboBox3('82,0595 gram', '1234 5678 9101 2345', this, 'kreditMobileInput', 'kredit-mobile-text', 'kredit-item', 'kredit-mobile-span', 'kredit-img-box')",
              "data-bs-dismiss": "modal"
            }, [
              /*#__PURE__*/vue.createElementVNode("div", { class: "option-with-img" }, [
                /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                  /*#__PURE__*/vue.createElementVNode("img", {
                    src: "https://dl.dropboxusercontent.com/s/ux03pl3svfxp9ir/ico-tabungan.svg",
                    alt: ""
                  })
                ]),
                /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                  /*#__PURE__*/vue.createElementVNode("h5", null, "82,0595 gram"),
                  /*#__PURE__*/vue.createElementVNode("span", null, "1234 5678 9101 2345")
                ])
              ])
            ]),
            /*#__PURE__*/vue.createElementVNode("div", {
              class: "pilih-jangka-waktu__item kredit-item",
              onclick: "pilihComboBox3('12,1825 gram', '5812 6183 6913 1294', this, 'kreditMobileInput', 'kredit-mobile-text', 'kredit-item', 'kredit-mobile-span', 'kredit-img-box')",
              "data-bs-dismiss": "modal"
            }, [
              /*#__PURE__*/vue.createElementVNode("div", { class: "option-with-img" }, [
                /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                  /*#__PURE__*/vue.createElementVNode("img", {
                    src: "https://dl.dropboxusercontent.com/s/ux03pl3svfxp9ir/ico-tabungan.svg",
                    alt: ""
                  })
                ]),
                /*#__PURE__*/vue.createElementVNode("div", { class: "box-detail" }, [
                  /*#__PURE__*/vue.createElementVNode("h5", null, "12,1825 gram"),
                  /*#__PURE__*/vue.createElementVNode("span", null, "5812 6183 6913 1294")
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
], -1 /* HOISTED */);

function render$t(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    _hoisted_1$t,
    _hoisted_2$n
  ], 64 /* STABLE_FRAGMENT */))
}

script$t.render = render$t;
script$t.__file = "src/components/Dropdown/DropdownIconTextSm.vue";

var script$s = {
  name: "k-dropdown-text-only",
  props: {},
};

const _hoisted_1$s = /*#__PURE__*/vue.createElementVNode("div", { class: "group-input" }, [
  /*#__PURE__*/vue.createElementVNode("div", {
    class: "accordion custom-accordion-input mobile-hide",
    id: "box-jenisTransaksi"
  }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "accordion-item" }, [
      /*#__PURE__*/vue.createElementVNode("h2", {
        class: "accordion-header",
        id: "headingOne"
      }, [
        /*#__PURE__*/vue.createElementVNode("button", {
          class: "accordion-button collapsed",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#collapseOne",
          "aria-expanded": "false",
          "aria-controls": "collapseOne"
        }, [
          /*#__PURE__*/vue.createElementVNode("span", { id: "defaultSelected-jenisTransaksi" }, "Pilih provinsi "),
          /*#__PURE__*/vue.createElementVNode("input", {
            type: "text",
            id: "val-jenisTransaksi",
            name: "jenis-transaksi",
            hidden: ""
          }),
          /*#__PURE__*/vue.createElementVNode("div", {
            class: "accordion-button__selected",
            id: "newSelected-jenisTransaksi"
          }, [
            /*#__PURE__*/vue.createElementVNode("div", { class: "accordion-button__selected-detail" }, [
              /*#__PURE__*/vue.createElementVNode("h5", { id: "newSelectedItem-jenisTransaksi" })
            ])
          ])
        ])
      ]),
      /*#__PURE__*/vue.createElementVNode("div", {
        id: "collapseOne",
        class: "accordion-collapse collapse",
        "aria-labelledby": "headingOne",
        "data-bs-parent": "#box-jenisTransaksi"
      }, [
        /*#__PURE__*/vue.createElementVNode("div", { class: "accordion-body" }, [
          /*#__PURE__*/vue.createElementVNode("div", { class: "pgd-box-search-grey m-2" }, [
            /*#__PURE__*/vue.createElementVNode("div", { class: "icon" }, [
              /*#__PURE__*/vue.createElementVNode("img", {
                src: "https://dl.dropboxusercontent.com/s/5lzaf2xg0qfabgd/search-dark.svg",
                alt: ""
              })
            ]),
            /*#__PURE__*/vue.createElementVNode("input", {
              type: "search",
              placeholder: "Cari provinsi"
            })
          ]),
          /*#__PURE__*/vue.createElementVNode("div", { class: "box-item" }, [
            /*#__PURE__*/vue.createElementVNode("div", {
              class: "box-item__content item-dropdown",
              onclick: "comboBoxSelected('val-jenisTransaksi', 'defaultSelected-jenisTransaksi', 'newSelected-jenisTransaksi', 'newSelectedItem-jenisTransaksi', 'DKI Jakarta')"
            }, [
              /*#__PURE__*/vue.createElementVNode("div", { class: "box-ceklist" }, [
                /*#__PURE__*/vue.createElementVNode("h6", null, "DKI Jakarta"),
                /*#__PURE__*/vue.createElementVNode("img", {
                  src: "https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg",
                  alt: ""
                })
              ])
            ])
          ])
        ])
      ])
    ])
  ]),
  /*#__PURE__*/vue.createElementVNode("input", {
    type: "hidden",
    id: "jenisMobileInput",
    name: "jenis",
    onchange: "checkValue(this, 'cicil-gadai-1')"
  }),
  /*#__PURE__*/vue.createElementVNode("button", {
    type: "button",
    class: "btn-pilih-jangka",
    "data-bs-toggle": "modal",
    "data-bs-target": "#modal-select-option-jenis"
  }, [
    /*#__PURE__*/vue.createElementVNode("h6", {
      id: "jenis-mobile-text",
      class: "btn-pilih-jangka__text"
    }, " Pilih provinsi "),
    /*#__PURE__*/vue.createElementVNode("img", {
      src: "https://dl.dropboxusercontent.com/s/vnj3lkbwbskynob/icon-down.svg",
      alt: ""
    })
  ])
], -1 /* HOISTED */);
const _hoisted_2$m = /*#__PURE__*/vue.createElementVNode("section", { class: "section-overlay-modal-pds" }, [
  /*#__PURE__*/vue.createElementVNode("div", {
    class: "modal fade",
    id: "modal-select-option-jenis",
    "data-bs-keyboard": "false",
    tabindex: "-1",
    "aria-labelledby": "staticBackdropLabel",
    "aria-hidden": "true"
  }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "modal-dialog modal-dialog-centered modal-change-password modal-select-option" }, [
      /*#__PURE__*/vue.createElementVNode("div", { class: "modal-content" }, [
        /*#__PURE__*/vue.createElementVNode("div", { class: "modal-header" }, [
          /*#__PURE__*/vue.createElementVNode("h5", {
            class: "modal-title",
            id: "staticBackdropLabel"
          }, "Pilih Provinsi"),
          /*#__PURE__*/vue.createElementVNode("button", {
            type: "button",
            class: "btn-close",
            "data-bs-dismiss": "modal",
            "aria-label": "Close"
          }, [
            /*#__PURE__*/vue.createElementVNode("img", {
              src: "https://dl.dropboxusercontent.com/s/t0czo3brgkjtpoi/close.svg",
              alt: ""
            })
          ])
        ]),
        /*#__PURE__*/vue.createElementVNode("div", { class: "modal-body" }, [
          /*#__PURE__*/vue.createElementVNode("div", { class: "pilih-jangka-waktu" }, [
            /*#__PURE__*/vue.createElementVNode("div", {
              class: "pilih-jangka-waktu__item jenis-item",
              onclick: "pilihComboBox('DKI Jakarta', this, 'jenisMobileInput', 'jenis-mobile-text', 'jenis-item')",
              "data-bs-dismiss": "modal"
            }, " DKI Jakarta ")
          ])
        ])
      ])
    ])
  ])
], -1 /* HOISTED */);

function render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    _hoisted_1$s,
    _hoisted_2$m
  ], 64 /* STABLE_FRAGMENT */))
}

script$s.render = render$s;
script$s.__file = "src/components/Dropdown/DropdownTextOnly.vue";

var script$r = {
  name: "k-filepicker-lg",
  props: {},
};

const _hoisted_1$r = { class: "custom-file-upload" };
const _hoisted_2$l = /*#__PURE__*/vue.createElementVNode("div", {
  class: "custom-file-upload__box-preview",
  id: "box-preview-image"
}, null, -1 /* HOISTED */);
const _hoisted_3$n = /*#__PURE__*/vue.createElementVNode("div", { class: "custom-file-upload__box-input" }, [
  /*#__PURE__*/vue.createElementVNode("span", { class: "custom-file-upload__box-input-icon" }, [
    /*#__PURE__*/vue.createElementVNode("img", {
      src: "https://dl.dropboxusercontent.com/s/mybidc5332pn1qo/ico-image-upload.svg",
      alt: ""
    })
  ]),
  /*#__PURE__*/vue.createElementVNode("input", {
    type: "file",
    id: "gallery-photo-add",
    class: "custom-file-upload__box-input-file",
    onchange: "imagesPreview1(this, '.custom-file-upload__box-preview')",
    multiple: "",
    accept: "image/*",
    required: ""
  })
], -1 /* HOISTED */);
const _hoisted_4$8 = [
  _hoisted_2$l,
  _hoisted_3$n
];

function render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$r, _hoisted_4$8))
}

script$r.render = render$r;
script$r.__file = "src/components/Filepicker/FilepickerLg.vue";

var script$q = {
  name: "k-filepicker-sm",
  props: {},
};

const _hoisted_1$q = /*#__PURE__*/vue.createElementVNode("input", {
  type: "file",
  accept: "image/*",
  id: "upload-multiple-image",
  capture: "camera",
  multiple: "",
  hidden: "",
  required: "",
  onchange: "imagesPreview2(this, '.box-upload-multiple-image__preview');closeModalThis2('closeModal')"
}, null, -1 /* HOISTED */);
const _hoisted_2$k = /*#__PURE__*/vue.createElementVNode("div", { class: "box-upload-multiple-image" }, [
  /*#__PURE__*/vue.createElementVNode("label", {
    for: "",
    class: "box-upload-multiple-image__input",
    "data-bs-toggle": "modal",
    "data-bs-target": "#modal-upload-profile"
  }, [
    /*#__PURE__*/vue.createElementVNode("img", {
      src: "https://dl.dropboxusercontent.com/s/mybidc5332pn1qo/ico-image-upload.svg",
      alt: ""
    })
  ]),
  /*#__PURE__*/vue.createElementVNode("div", { class: "box-upload-multiple-image__preview" })
], -1 /* HOISTED */);
const _hoisted_3$m = /*#__PURE__*/vue.createElementVNode("section", { class: "section-overlay-modal-pds" }, [
  /*#__PURE__*/vue.createElementVNode("div", {
    class: "modal fade",
    id: "modal-upload-profile",
    "data-bs-backdrop": "static",
    "data-bs-keyboard": "false",
    tabindex: "-1",
    "aria-labelledby": "staticBackdropLabel",
    "aria-hidden": "true"
  }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "modal-dialog modal-dialog-centered modal-layout-pds modal-upload-profile" }, [
      /*#__PURE__*/vue.createElementVNode("div", { class: "modal-content" }, [
        /*#__PURE__*/vue.createElementVNode("div", { class: "modal-header" }, [
          /*#__PURE__*/vue.createElementVNode("h5", {
            class: "modal-title",
            id: "staticBackdropLabel"
          }, " Ambil Foto Melalui "),
          /*#__PURE__*/vue.createElementVNode("button", {
            type: "button",
            id: "closeModal",
            class: "btn-close",
            "data-bs-dismiss": "modal",
            "aria-label": "Close"
          }, [
            /*#__PURE__*/vue.createElementVNode("img", {
              src: "https://dl.dropboxusercontent.com/s/t0czo3brgkjtpoi/close.svg",
              alt: ""
            })
          ])
        ]),
        /*#__PURE__*/vue.createElementVNode("div", { class: "modal-body" }, [
          /*#__PURE__*/vue.createElementVNode("label", {
            for: "upload-multiple-image",
            class: "modal-upload-profile__item"
          }, [
            /*#__PURE__*/vue.createElementVNode("h6", null, "Galeri"),
            /*#__PURE__*/vue.createElementVNode("img", {
              src: "https://dl.dropboxusercontent.com/s/xl375rq4h2z6c26/image-outline.svg",
              alt: ""
            })
          ]),
          /*#__PURE__*/vue.createElementVNode("label", {
            for: "upload-multiple-image",
            class: "modal-upload-profile__item desktop-hide-flex"
          }, [
            /*#__PURE__*/vue.createElementVNode("h6", null, "Kamera"),
            /*#__PURE__*/vue.createElementVNode("img", {
              src: "https://dl.dropboxusercontent.com/s/lnd6rl9xjmjzdoq/camera-outline.svg",
              alt: ""
            })
          ]),
          /*#__PURE__*/vue.createElementVNode("label", {
            for: "",
            class: "modal-upload-profile__item mobile-hide",
            "data-bs-dismiss": "modal",
            "data-bs-toggle": "modal",
            "data-bs-target": "#modal-webcam",
            onclick: "startWebcam()"
          }, [
            /*#__PURE__*/vue.createElementVNode("h6", null, "Kamera"),
            /*#__PURE__*/vue.createElementVNode("img", {
              src: "https://dl.dropboxusercontent.com/s/lnd6rl9xjmjzdoq/camera-outline.svg",
              alt: ""
            })
          ])
        ])
      ])
    ])
  ]),
  /*#__PURE__*/vue.createElementVNode("div", {
    class: "modal fade",
    id: "modal-webcam",
    "data-bs-backdrop": "static",
    "data-bs-keyboard": "false",
    tabindex: "-1",
    "aria-labelledby": "staticBackdropLabel",
    "aria-hidden": "true"
  }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "modal-dialog modal-dialog-centered modal-md" }, [
      /*#__PURE__*/vue.createElementVNode("div", { class: "modal-content" }, [
        /*#__PURE__*/vue.createElementVNode("div", { class: "modal-header" }, [
          /*#__PURE__*/vue.createElementVNode("h5", {
            class: "modal-title",
            id: "staticBackdropLabel"
          }, "Ambil Foto"),
          /*#__PURE__*/vue.createElementVNode("button", {
            type: "button",
            class: "btn-close",
            "data-bs-dismiss": "modal",
            "aria-label": "Close"
          }, [
            /*#__PURE__*/vue.createElementVNode("img", {
              src: "https://dl.dropboxusercontent.com/s/t0czo3brgkjtpoi/close.svg",
              alt: ""
            })
          ])
        ]),
        /*#__PURE__*/vue.createElementVNode("div", { class: "modal-body" }, [
          /*#__PURE__*/vue.createElementVNode("video", {
            autoplay: "true",
            id: "video-webcam",
            width: "100%"
          }, " Browser anda tidak mendukung "),
          /*#__PURE__*/vue.createElementVNode("button", {
            class: "btn btn-primary",
            onclick: "takeSnapshot('jaminan')",
            "data-bs-dismiss": "modal"
          }, " Ambil Foto ")
        ])
      ])
    ])
  ])
], -1 /* HOISTED */);

function render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    _hoisted_1$q,
    _hoisted_2$k,
    _hoisted_3$m
  ], 64 /* STABLE_FRAGMENT */))
}

script$q.render = render$q;
script$q.__file = "src/components/Filepicker/FilepickerSm.vue";

var script$p = {
  name: "k-footer-pds-login",
  props: {},
};

const _hoisted_1$p = /*#__PURE__*/vue.createStaticVNode("<div class=\"footer-top container\"><div class=\"footer-box\"><div class=\"footer-box__div\"><h4>Tautan Cepat</h4><div class=\"box-map\"><ul><li><a href=\"./produk.html\">Emas</a></li><li><a href=\"./promo.html\">Gadai</a></li><li><a href=\"./artikel.html\">Pembiayaan</a></li><li><a href=\"./acara.html\">Pembayaran dan Top Up</a></li><li><a href=\"./simulasi-emas.html\">Cicil Emas</a></li><li><a href=\"./ebook.html\">Cabang Pegadaian</a></li></ul></div><h4>Bantuan</h4><div class=\"box-map\"><ul><li><a href=\"./syarat-ketentuan.html\">Syarat dan Ketentuan</a></li><li><a href=\"./hubungi-kami.html\"> Hubungi Kami</a></li></ul></div></div><div class=\"footer-box__div\"><h4>Download Pegadaian Digital</h4><div class=\"box-download-app\"><a href=\"https://play.google.com/store/apps/details?id=com.pegadaiandigital&amp;hl=en&amp;gl=US\"><img src=\"https://dl.dropboxusercontent.com/s/l5rwge1z23cq4ge/google-play-badge.png\" alt=\"\"></a><a href=\"https://apps.apple.com/us/app/pegadaian-digital/id1350501409\"><img src=\"https://dl.dropboxusercontent.com/s/5e5cty67bqpc887/badge-app.png\" alt=\"\"></a></div><span>PT. Pegadaian (Persero) terdaftar dan diawasi oleh</span><br><img src=\"https://dl.dropboxusercontent.com/s/u0hdhxyv9hcmar3/ojk.png\" alt=\"\" class=\"ojk\"></div><div class=\"footer-box__div-3\"><h4>Kantor Pusat Pegadaian</h4><div class=\"box-map-2\"><div class=\"location\"><img class=\"location__icon\" src=\"https://dl.dropboxusercontent.com/s/6zfu1my4mi6zsbp/pinpoint.svg\"><span class=\"location__text\">Jl. Kramat Raya 162 Jakarta Pusat 10430<br> Indonesia</span></div><div class=\"contact\"><div class=\"contact__phone\"><img src=\"https://dl.dropboxusercontent.com/s/zha8knznkbyigrh/phone.svg\" alt=\"\"><span>021 3155 550 </span></div><div class=\"contact__box\"><img src=\"https://dl.dropboxusercontent.com/s/rh0hy2qyn0hwfjh/box-mail.svg\" alt=\"\"><span>021 8063 5162 </span></div></div><img src=\"https://dl.dropboxusercontent.com/s/h6guv72qux35urd/call-center.svg\" class=\"call-center\" alt=\"\"></div><div class=\"social-media-desktop\"><h4>Ikuti Media Sosial Kami</h4><div class=\"box-map-2\"><div class=\"outer-box-socmed\"><a href=\"https://facebook.com/shbtpegadaian\" class=\"box-socmed\"><img src=\"https://dl.dropboxusercontent.com/s/td9ju6ilnuz9w4h/facebook.svg\" alt=\"\" class=\"box-socmed__icon\"></a><a href=\"https://twitter.com/shbt_pegadaian\" class=\"box-socmed\"><img src=\"https://dl.dropboxusercontent.com/s/l12f586kdmxxch8/twitter.svg\" alt=\"\" class=\"box-socmed__icon\"></a><a href=\"https://instagram.com/sahabatpegadaian\" class=\"box-socmed\"><img src=\"https://dl.dropboxusercontent.com/s/nxamq3dx5osmmib/instagram.svg\" alt=\"\" class=\"box-socmed__icon\"></a><a href=\"https://www.youtube.com/c/PTPegadaianPersero_official\" class=\"box-socmed\"><img src=\"https://dl.dropboxusercontent.com/s/945mjb6z4ipeahj/youtube.svg\" alt=\"\" class=\"box-socmed__icon\"></a></div></div></div></div></div></div><div class=\"copyright\"><div class=\"container\"> Copyright © 2021 PT. Pegadaian - Persero. All Rights Reserved. </div></div>", 2);
const _hoisted_3$l = [
  _hoisted_1$p
];

function render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("footer", null, _hoisted_3$l))
}

script$p.render = render$p;
script$p.__file = "src/components/Footer/FooterPdsLogin.vue";

var script$o = {
  name: "k-footer-pds-onboarding",
  props: {},
};

const _hoisted_1$o = /*#__PURE__*/vue.createStaticVNode("<div class=\"footer-top container\"><div class=\"footer-box\"><div class=\"footer-box__div\"><h4>Tautan Cepat</h4><div class=\"box-map\"><ul><li><a href=\"#tentangpgd\">Tentang Pegadaian Digital</a></li><li><a href=\"#promo\">Promo</a></li><li><a href=\"#pusatbantuan\">Pusat Bantuan</a></li><li><a href=\"#syaratdanketentuan\">Syarat &amp; Ketentuan</a></li><li><a href=\"#hubungikami\">Hubungi Kami</a></li></ul></div></div><div class=\"footer-box__div\"><h4>Download Pegadaian Digital</h4><div class=\"box-download-app\"><a href=\"https://play.google.com/store/apps/details?id=com.pegadaiandigital&amp;hl=en&amp;gl=US\"><img src=\"https://dl.dropboxusercontent.com/s/l5rwge1z23cq4ge/google-play-badge.png\" alt=\"\"></a><a href=\"https://apps.apple.com/us/app/pegadaian-digital/id1350501409\"><img src=\"https://dl.dropboxusercontent.com/s/5e5cty67bqpc887/badge-app.png\" alt=\"\"></a></div><span>PT. Pegadaian (Persero) terdaftar dan diawasi oleh</span><br><img src=\"https://dl.dropboxusercontent.com/s/u0hdhxyv9hcmar3/ojk.png\" alt=\"\" class=\"ojk\"></div><div class=\"footer-box__div-3\"><h4>Kantor Pusat Pegadaian</h4><div class=\"box-map-2\"><div class=\"location\"><img class=\"location__icon\" src=\"https://dl.dropboxusercontent.com/s/6zfu1my4mi6zsbp/pinpoint.svg\"><span class=\"location__text\">Jl. Kramat Raya 162 Jakarta Pusat 10430<br> Indonesia</span></div><div class=\"contact\"><div class=\"contact__phone\"><img src=\"https://dl.dropboxusercontent.com/s/zha8knznkbyigrh/phone.svg\" alt=\"\"><span>021 3155 550 </span></div><div class=\"contact__box\"><img src=\"https://dl.dropboxusercontent.com/s/rh0hy2qyn0hwfjh/box-mail.svg\" alt=\"\"><span>021 8063 5162 </span></div></div><img src=\"https://dl.dropboxusercontent.com/s/h6guv72qux35urd/call-center.svg\" class=\"call-center\" alt=\"\"></div><div class=\"social-media-desktop\"><h4>Ikuti Media Sosial Kami</h4><div class=\"box-map-2\"><div class=\"outer-box-socmed\"><a href=\"https://facebook.com/shbtpegadaian\" class=\"box-socmed\"><img src=\"https://dl.dropboxusercontent.com/s/td9ju6ilnuz9w4h/facebook.svg\" alt=\"\" class=\"box-socmed__icon\"></a><a href=\"https://twitter.com/shbt_pegadaian\" class=\"box-socmed\"><img src=\"https://dl.dropboxusercontent.com/s/l12f586kdmxxch8/twitter.svg\" alt=\"\" class=\"box-socmed__icon\"></a><a href=\"https://instagram.com/sahabatpegadaian\" class=\"box-socmed\"><img src=\"https://dl.dropboxusercontent.com/s/nxamq3dx5osmmib/instagram.svg\" alt=\"\" class=\"box-socmed__icon\"></a><a href=\"https://www.youtube.com/c/PTPegadaianPersero_official\" class=\"box-socmed\"><img src=\"https://dl.dropboxusercontent.com/s/945mjb6z4ipeahj/youtube.svg\" alt=\"\" class=\"box-socmed__icon\"></a></div></div></div></div></div></div><div class=\"copyright\"><div class=\"container\"> Copyright © 2021 PT. Pegadaian - Persero. All Rights Reserved. </div></div>", 2);
const _hoisted_3$k = [
  _hoisted_1$o
];

function render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("footer", null, _hoisted_3$k))
}

script$o.render = render$o;
script$o.__file = "src/components/Footer/FooterPdsOnboarding.vue";

var script$n = {
  name: "k-footer-pgd-corporate",
  props: {},
};

const _hoisted_1$n = { class: "footer-pgd" };
const _hoisted_2$j = { class: "footer-pgd-top" };
const _hoisted_3$j = { class: "footer-box" };
const _hoisted_4$7 = { class: "footer-box__div" };
const _hoisted_5$3 = /*#__PURE__*/vue.createElementVNode("h4", null, "Tautan Cepat", -1 /* HOISTED */);
const _hoisted_6$1 = { class: "box-map" };
const _hoisted_7 = /*#__PURE__*/vue.createElementVNode("ul", null, [
  /*#__PURE__*/vue.createElementVNode("li", null, [
    /*#__PURE__*/vue.createElementVNode("a", { href: "" }, "Produk dan Layanan")
  ]),
  /*#__PURE__*/vue.createElementVNode("li", null, [
    /*#__PURE__*/vue.createElementVNode("a", { href: "" }, "Hubungan Investor")
  ])
], -1 /* HOISTED */);
const _hoisted_8 = /*#__PURE__*/vue.createElementVNode("li", null, [
  /*#__PURE__*/vue.createElementVNode("a", { href: "" }, "Profil Korporasi")
], -1 /* HOISTED */);
const _hoisted_9$1 = /*#__PURE__*/vue.createTextVNode("Berita");
const _hoisted_10 = /*#__PURE__*/vue.createElementVNode("h4", null, "Bantuan", -1 /* HOISTED */);
const _hoisted_11 = { class: "box-map" };
const _hoisted_12 = /*#__PURE__*/vue.createTextVNode("Syarat dan Ketentuan");
const _hoisted_13 = /*#__PURE__*/vue.createTextVNode("FAQ");
const _hoisted_14 = /*#__PURE__*/vue.createTextVNode("Kebijakan Privasi");
const _hoisted_15 = /*#__PURE__*/vue.createStaticVNode("<div class=\"footer-box__div-2\"><div class=\"box-map-2\"><h4>PT Pegadaian (Persero) terdaftar dan diawasi oleh</h4><img src=\"https://dl.dropboxusercontent.com/s/u0hdhxyv9hcmar3/ojk.png\"></div><div class=\"box-map-2\"><h4>PT Pegadaian (Persero) telah terverifikasi</h4><img src=\"https://dl.dropboxusercontent.com/s/x9bkfnvtuyoniqp/logo_safegard.png\"></div></div><div class=\"footer-box__div-3\"><h4>Kantor Pusat Pegadaian</h4><div class=\"box-map-3\"><div class=\"location\"><img class=\"location__icon\" src=\"https://dl.dropboxusercontent.com/s/6zfu1my4mi6zsbp/pinpoint.svg\" alt=\"\"><span class=\"location__text\"> Jl. Kramat Raya 162 Jakarta Pusat 10430 Indonesia </span></div><div class=\"contact\"><div class=\"contact__phone\"><img src=\"https://dl.dropboxusercontent.com/s/zha8knznkbyigrh/phone.svg\" alt=\"\"><span>021 3155 550 </span></div><div class=\"contact__box\"><img src=\"https://dl.dropboxusercontent.com/s/rh0hy2qyn0hwfjh/box-mail.svg\" alt=\"\"><span>021 8063 5162</span></div></div><img class=\"call-center\" src=\"https://dl.dropboxusercontent.com/s/h6guv72qux35urd/call-center.svg\" alt=\"\"></div><div class=\"social-media\"><h4>Ikuti Media Sosial Kami</h4><div class=\"box-map-3\"><div class=\"outer-box-sosmed\"><a href=\"https://www.facebook.com/PegadaianPersero\" class=\"box-sosmed\" target=\"blank\"><img class=\"box-sosmed__icon\" src=\"https://dl.dropboxusercontent.com/s/td9ju6ilnuz9w4h/facebook.svg\" alt=\"\"></a><a href=\"https://twitter.com/Pegadaian\" class=\"box-sosmed\" target=\"blank\"><img class=\"box-sosmed__icon\" src=\"https://dl.dropboxusercontent.com/s/l12f586kdmxxch8/twitter.svg\" alt=\"\"></a><a href=\"https://www.instagram.com/pegadaian_id/\" class=\"box-sosmed\" target=\"blank\"><img class=\"box-sosmed__icon\" src=\"https://dl.dropboxusercontent.com/s/nxamq3dx5osmmib/instagram.svg\" alt=\"\"></a><a href=\"https://www.youtube.com/channel/UC_acigZTCXTQuXL-3hqm6Gg\" class=\"box-sosmed\" target=\"blank\"><img class=\"box-sosmed__icon\" src=\"https://dl.dropboxusercontent.com/s/945mjb6z4ipeahj/youtube.svg\" alt=\"\"></a></div></div></div></div>", 2);
const _hoisted_17 = /*#__PURE__*/vue.createElementVNode("div", { class: "footer-pgd-bottom" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "copyright" }, " Copyright © 2021 PT. Pegadaian - Persero. All Rights Reserved. ")
], -1 /* HOISTED */);

function render$n(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Link = vue.resolveComponent("Link");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$n, [
    vue.createElementVNode("div", _hoisted_2$j, [
      vue.createElementVNode("div", _hoisted_3$j, [
        vue.createElementVNode("div", _hoisted_4$7, [
          _hoisted_5$3,
          vue.createElementVNode("div", _hoisted_6$1, [
            _hoisted_7,
            vue.createElementVNode("ul", null, [
              _hoisted_8,
              vue.createElementVNode("li", null, [
                vue.createVNode(_component_Link, { to: "/berita" }, {
                  default: vue.withCtx(() => [
                    _hoisted_9$1
                  ]),
                  _: 1 /* STABLE */
                })
              ])
            ])
          ]),
          _hoisted_10,
          vue.createElementVNode("div", _hoisted_11, [
            vue.createElementVNode("ul", null, [
              vue.createElementVNode("li", null, [
                vue.createVNode(_component_Link, { to: "/syarat-dan-ketentuan" }, {
                  default: vue.withCtx(() => [
                    _hoisted_12
                  ]),
                  _: 1 /* STABLE */
                })
              ]),
              vue.createElementVNode("li", null, [
                vue.createVNode(_component_Link, { to: "/faq" }, {
                  default: vue.withCtx(() => [
                    _hoisted_13
                  ]),
                  _: 1 /* STABLE */
                })
              ]),
              vue.createElementVNode("li", null, [
                vue.createVNode(_component_Link, { to: "/kebijakan-privasi" }, {
                  default: vue.withCtx(() => [
                    _hoisted_14
                  ]),
                  _: 1 /* STABLE */
                })
              ])
            ])
          ])
        ]),
        _hoisted_15
      ])
    ]),
    _hoisted_17
  ]))
}

script$n.render = render$n;
script$n.__file = "src/components/Footer/FooterPgdCorporate.vue";

var script$m = {
  name: "k-footer-sahabat-pgd",
  props: {},
};

const _hoisted_1$m = /*#__PURE__*/vue.createStaticVNode("<div class=\"footer-top container\"><div class=\"footer-box\"><div class=\"footer-box__div\"><h4>Tautan Cepat</h4><div class=\"box-map\"><ul><li><a href=\"./produk.html\">Produk</a></li><li><a href=\"./promo.html\"> Promo</a></li><li><a href=\"./artikel.html\">Artikel</a></li></ul><ul><li><a href=\"./acara.html\">Acara</a></li><li><a href=\"./simulasi-emas.html\">Simulasi</a></li><li><a href=\"./ebook.html\">Ebook</a></li></ul></div><h4>Bantuan</h4><div class=\"box-map\"><ul><li><a href=\"./syarat-ketentuan.html\">Syarat dan Ketentuan</a></li><li><a href=\"./hubungi-kami.html\"> Hubungi Kami</a></li><li><a href=\"./tentang.html\">Tentang Kami</a></li></ul></div></div><div class=\"footer-box__div\"><h4>Download Pegadaian Digital</h4><div class=\"box-download-app\"><a href=\"https://play.google.com/store/apps/details?id=com.pegadaiandigital&amp;hl=en&amp;gl=US\"><img src=\"https://dl.dropboxusercontent.com/s/l5rwge1z23cq4ge/google-play-badge.png\" alt=\"\"></a><a href=\"https://apps.apple.com/us/app/pegadaian-digital/id1350501409\"><img src=\"https://dl.dropboxusercontent.com/s/5e5cty67bqpc887/badge-app.png\" alt=\"\"></a></div><span>PT. Pegadaian (Persero) terdaftar dan diawasi oleh</span><br><img src=\"https://dl.dropboxusercontent.com/s/u0hdhxyv9hcmar3/ojk.png\" alt=\"\" class=\"ojk\"></div><div class=\"footer-box__div-3\"><h4>Kantor Pusat Pegadaian</h4><div class=\"box-map-2\"><div class=\"location\"><img class=\"location__icon\" src=\"https://dl.dropboxusercontent.com/s/6zfu1my4mi6zsbp/pinpoint.svg\"><span class=\"location__text\">Jl. Kramat Raya 162 Jakarta Pusat 10430<br> Indonesia</span></div><div class=\"contact\"><div class=\"contact__phone\"><img src=\"https://dl.dropboxusercontent.com/s/zha8knznkbyigrh/phone.svg\" alt=\"\"><span>021 3155 550 </span></div><div class=\"contact__box\"><img src=\"https://dl.dropboxusercontent.com/s/rh0hy2qyn0hwfjh/box-mail.svg\" alt=\"\"><span>021 8063 5162 </span></div></div><img src=\"https://dl.dropboxusercontent.com/s/h6guv72qux35urd/call-center.svg\" class=\"call-center\" alt=\"\"></div><div class=\"social-media-desktop\"><h4>Ikuti Media Sosial Kami</h4><div class=\"box-map-2\"><div class=\"outer-box-socmed\"><a href=\"https://facebook.com/shbtpegadaian\" class=\"box-socmed\"><img src=\"https://dl.dropboxusercontent.com/s/td9ju6ilnuz9w4h/facebook.svg\" alt=\"\" class=\"box-socmed__icon\"></a><a href=\"https://twitter.com/shbt_pegadaian\" class=\"box-socmed\"><img src=\"https://dl.dropboxusercontent.com/s/l12f586kdmxxch8/twitter.svg\" alt=\"\" class=\"box-socmed__icon\"></a><a href=\"https://instagram.com/sahabatpegadaian\" class=\"box-socmed\"><img src=\"https://dl.dropboxusercontent.com/s/nxamq3dx5osmmib/instagram.svg\" alt=\"\" class=\"box-socmed__icon\"></a><a href=\"\" class=\"box-socmed\"><img src=\"https://dl.dropboxusercontent.com/s/945mjb6z4ipeahj/youtube.svg\" alt=\"\" class=\"box-socmed__icon\"></a></div></div></div></div></div></div><div class=\"copyright\"><div class=\"container\"> Copyright © 2021 PT. Pegadaian - Persero. All Rights Reserved. </div></div>", 2);
const _hoisted_3$i = [
  _hoisted_1$m
];

function render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("footer", null, _hoisted_3$i))
}

script$m.render = render$m;
script$m.__file = "src/components/Footer/FooterSahabatPgd.vue";

var script$l = {
  name: "k-product-icon",
  props: {},
};

const _hoisted_1$l = { class: "p-5" };
const _hoisted_2$i = /*#__PURE__*/vue.createStaticVNode("<div class=\"row\"><div class=\"col\"><img class=\"product-icons\" src=\"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/ico-tabungan.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"product-icons\" src=\"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/ico-uang.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"product-icons\" src=\"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/ico-gadai-titipan-emas-fisik.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"product-icons\" src=\"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/ico-haji.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"product-icons\" src=\"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/ico-riwayat-emas-batangan.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"product-icons\" src=\"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/ico-pembayaran-no-bg.svg\" alt=\"system-icons\"></div></div>", 1);
const _hoisted_3$h = [
  _hoisted_2$i
];

function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$l, _hoisted_3$h))
}

script$l.render = render$l;
script$l.__file = "src/components/Icon/ProductIcon.vue";

var script$k = {
  name: "k-system-icons",
  props: {},
};

const _hoisted_1$k = { class: "p-5" };
const _hoisted_2$h = /*#__PURE__*/vue.createStaticVNode("<div class=\"row\"><div class=\"col\"><img class=\"system-icons\" src=\"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/close-round-dark.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"system-icons\" src=\"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/icon-checklist.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"system-icons\" src=\"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/ico-point-pegadaian.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"system-icons\" src=\"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/icon-info.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"system-icons\" src=\"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/ico-calendar-outline.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"system-icons\" src=\"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/ico-email-outline-green.svg\" alt=\"system-icons\"></div></div>", 1);
const _hoisted_3$g = [
  _hoisted_2$h
];

function render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$k, _hoisted_3$g))
}

script$k.render = render$k;
script$k.__file = "src/components/Icon/SystemIcon.vue";

var script$j = {
  name: "k-image-illustration",
  props: {},
};

const _hoisted_1$j = { class: "ilustration-ellipse" };
const _hoisted_2$g = /*#__PURE__*/vue.createElementVNode("img", {
  src: "https://dl.dropboxusercontent.com/s/006yoksxjm0duco/round-img2.png",
  alt: "ilustration-ellipse"
}, null, -1 /* HOISTED */);
const _hoisted_3$f = [
  _hoisted_2$g
];

function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$j, _hoisted_3$f))
}

script$j.render = render$j;
script$j.__file = "src/components/Image/ImageIllustration.vue";

var script$i = {
  name: "k-image-photo",
  props: {},
};

const _hoisted_1$i = { class: "ilustration-released" };
const _hoisted_2$f = /*#__PURE__*/vue.createElementVNode("img", {
  src: "https://dl.dropboxusercontent.com/s/0zp2zxesdcntdrd/image-released.png",
  alt: "ilustration-released"
}, null, -1 /* HOISTED */);
const _hoisted_3$e = [
  _hoisted_2$f
];

function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$i, _hoisted_3$e))
}

script$i.render = render$i;
script$i.__file = "src/components/Image/ImagePhoto.vue";

var script$h = {
  name: "k-input",
  props: {},
};

const _hoisted_1$h = { class: "p-5" };
const _hoisted_2$e = /*#__PURE__*/vue.createElementVNode("div", { class: "group-input" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "input-group custom-input-group mb-2" }, [
    /*#__PURE__*/vue.createElementVNode("span", {
      class: "input-group-text",
      id: "basic-addon1"
    }, "Rupiah"),
    /*#__PURE__*/vue.createElementVNode("input", {
      type: "tel",
      class: "form-control prevent-zero rupiah",
      placeholder: "Text Input",
      "aria-label": "Masukkanrupiah",
      "aria-describedby": "basic-addon1",
      onkeyup: "this.value = verifyFormatRp3(this.value, 'Rp. ')"
    })
  ])
], -1 /* HOISTED */);
const _hoisted_3$d = /*#__PURE__*/vue.createElementVNode("div", { class: "group-input" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "input-group custom-input-group mb-2" }, [
    /*#__PURE__*/vue.createElementVNode("input", {
      type: "tel",
      class: "form-control prevent-zero rupiah",
      placeholder: "Text Input",
      "aria-label": "Masukkanrupiah",
      "aria-describedby": "basic-addon2",
      onkeyup: "this.value = verifyFormatRp3(this.value, 'Rp. ')"
    }),
    /*#__PURE__*/vue.createElementVNode("span", {
      class: "input-group-text right",
      id: "basic-addon2"
    }, "%")
  ])
], -1 /* HOISTED */);
const _hoisted_4$6 = [
  _hoisted_2$e,
  _hoisted_3$d
];

function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$h, _hoisted_4$6))
}

script$h.render = render$h;
script$h.__file = "src/components/Input/InputNominal.vue";

var script$g = {
  name: "k-input",
  props: {},
};

const _hoisted_1$g = { class: "p-5" };
const _hoisted_2$d = /*#__PURE__*/vue.createStaticVNode("<div class=\"group-input\"><label for=\"\" class=\"group-input__label\">Title <img src=\"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/icon-info.svg\" alt=\"\"></label><div class=\"input-group custom-input-group-icon\"><div class=\"input-group-icon\"><img src=\"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/icon-avatar.svg\" alt=\"\"></div><input type=\"text\" class=\"form-control\" placeholder=\"Placeholder text\"></div></div>", 1);
const _hoisted_3$c = [
  _hoisted_2$d
];

function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$g, _hoisted_3$c))
}

script$g.render = render$g;
script$g.__file = "src/components/Input/InputSmallText.vue";

var script$f = {
  name: "k-input",
  props: {},
};

const _hoisted_1$f = { class: "p-5" };
const _hoisted_2$c = /*#__PURE__*/vue.createStaticVNode("<div class=\"group-input\"><label for=\"\" class=\"group-input__label\">Title <img src=\"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/icon-info.svg\" alt=\"\"></label><div class=\"input-group custom-input-group-lg-icon\"><div class=\"input-group-icon\"><img src=\"https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/icon-avatar.svg\" alt=\"\"></div><textarea class=\"form-control\" placeholder=\"Text Input\"></textarea></div></div>", 1);
const _hoisted_3$b = [
  _hoisted_2$c
];

function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$f, _hoisted_3$b))
}

script$f.render = render$f;
script$f.__file = "src/components/Input/InputTextArea.vue";

var script$e = {
  name: "k-label",
  props: {},
};

const _hoisted_1$e = /*#__PURE__*/vue.createElementVNode("div", { class: "pgd-status" }, "Status", -1 /* HOISTED */);
const _hoisted_2$b = /*#__PURE__*/vue.createElementVNode("div", { class: "pgd-status-blue" }, "Status", -1 /* HOISTED */);
const _hoisted_3$a = /*#__PURE__*/vue.createElementVNode("div", { class: "pgd-status-red" }, "Status", -1 /* HOISTED */);
const _hoisted_4$5 = /*#__PURE__*/vue.createElementVNode("div", { class: "pgd-status-yellow" }, "Status", -1 /* HOISTED */);

function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    _hoisted_1$e,
    _hoisted_2$b,
    _hoisted_3$a,
    _hoisted_4$5
  ], 64 /* STABLE_FRAGMENT */))
}

script$e.render = render$e;
script$e.__file = "src/components/Label/Label.vue";

var script$d = {
  name: "k-label-icon",
  props: {},
};

const _hoisted_1$d = /*#__PURE__*/vue.createStaticVNode("<div class=\"pgd-status\"><img src=\"https://dl.dropboxusercontent.com/s/krjoi5ihrcvu5vl/icon-crown-green.svg\" alt=\"\">Status </div><div class=\"pgd-status-blue\"><img src=\"https://dl.dropboxusercontent.com/s/8dx7mmeozqodu20/icon-crown.svg\" alt=\"\">Status </div><div class=\"pgd-status-red\"><img src=\"https://dl.dropboxusercontent.com/s/gvup9se8s9l33k4/icon-crown-red.svg\" alt=\"\">Status </div><div class=\"pgd-status-yellow\"><img src=\"https://dl.dropboxusercontent.com/s/om5jq35olgh5zxf/icon-crown-yellow.svg\" alt=\"\">Status </div>", 4);

function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return _hoisted_1$d
}

script$d.render = render$d;
script$d.__file = "src/components/Label/LabelIcon.vue";

var script$c = {
  name: "k-list-group-ordered",
  props: {},
};

const _hoisted_1$c = { class: "styled-ol" };
const _hoisted_2$a = /*#__PURE__*/vue.createElementVNode("li", null, "Nasabah mengisi formulir dan melampirkan fotokopi KTP", -1 /* HOISTED */);
const _hoisted_3$9 = /*#__PURE__*/vue.createElementVNode("li", null, " Nasabah membayar biaya admin Rp 10.000, biaya pengelolaan rekening Rp 30.000 dan biaya materai Rp 10.000 ", -1 /* HOISTED */);
const _hoisted_4$4 = /*#__PURE__*/vue.createElementVNode("li", null, "Nasabah membeli emas batangan dengan berat minimal 0.01 gram", -1 /* HOISTED */);
const _hoisted_5$2 = /*#__PURE__*/vue.createElementVNode("li", null, "Nasabah membeli emas batangan dengan berat minimal 0.01 gram", -1 /* HOISTED */);
const _hoisted_6 = [
  _hoisted_2$a,
  _hoisted_3$9,
  _hoisted_4$4,
  _hoisted_5$2
];

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("ol", _hoisted_1$c, _hoisted_6))
}

script$c.render = render$c;
script$c.__file = "src/components/ListGroup/ListGroupOrdered.vue";

var script$b = {
  name: "k-list-group-unit",
  props: {},
};

const _hoisted_1$b = /*#__PURE__*/vue.createStaticVNode("<div class=\"p-2\"><div class=\"card-why-produk lg-unit\"><img src=\"https://dl.dropboxusercontent.com/s/m8h38r2os2il1xe/checklist.svg\" alt=\"\"><p> Dapat dicicil dan dilunasi sewaktu-waktu, serta bisa diperpanjang berkali-kali. </p></div></div><div class=\"p-2\"><div class=\"card-why-produk sm-unit\"><img src=\"https://dl.dropboxusercontent.com/s/m8h38r2os2il1xe/checklist.svg\" alt=\"\"><p> Dapat dicicil dan dilunasi sewaktu-waktu, serta bisa diperpanjang berkali-kali. </p></div></div>", 2);

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return _hoisted_1$b
}

script$b.render = render$b;
script$b.__file = "src/components/ListGroup/ListGroupUnit.vue";

var script$a = {
  name: "k-list-group-unordered",
  props: {},
};

const _hoisted_1$a = { class: "styled-ul" };
const _hoisted_2$9 = /*#__PURE__*/vue.createElementVNode("li", null, "Memiliki identitas yang masih berlaku (KTP/Paspor)", -1 /* HOISTED */);
const _hoisted_3$8 = /*#__PURE__*/vue.createElementVNode("li", null, "Mengisi formulir pembukaan Rekening Tabungan Emas", -1 /* HOISTED */);
const _hoisted_4$3 = /*#__PURE__*/vue.createElementVNode("li", null, "Biaya transaksi Tabungan Emas", -1 /* HOISTED */);
const _hoisted_5$1 = [
  _hoisted_2$9,
  _hoisted_3$8,
  _hoisted_4$3
];

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("ul", _hoisted_1$a, _hoisted_5$1))
}

script$a.render = render$a;
script$a.__file = "src/components/ListGroup/ListGroupUnordered.vue";

var script$9 = {
  name: "k-navbar-pds-onboarding",
  props: {},
};

const _hoisted_1$9 = { class: "pgd-header sticky-top header-pds" };
const _hoisted_2$8 = /*#__PURE__*/vue.createStaticVNode("<nav class=\"navbar navbar-expand-lg navbar-light container\"><a class=\"navbar-brand mr-auto\" href=\"./index.html\"><img src=\"https://dl.dropboxusercontent.com/s/xk156lvrvyog0m8/logo-pds.svg\" alt=\"\"></a><div class=\"menu-btn-registrasi\"><a href=\"../onboarding/index.html\" class=\"btn btn-outline-primary\">Masuk</a><a href=\"../registrasi/index.html\" class=\"btn btn-primary\">Daftar</a></div></nav>", 1);
const _hoisted_3$7 = [
  _hoisted_2$8
];

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("header", _hoisted_1$9, _hoisted_3$7))
}

script$9.render = render$9;
script$9.__file = "src/components/Navbar/NavbarPdsOnboarding.vue";

var script$8 = {
  name: "k-navbar-sahabat-pgd",
  props: {},
};

const _hoisted_1$8 = { class: "pgd-header sticky-top" };
const _hoisted_2$7 = /*#__PURE__*/vue.createElementVNode("nav", { class: "navbar navbar-expand-lg navbar-light container" }, [
  /*#__PURE__*/vue.createElementVNode("a", {
    class: "navbar-brand mr-auto",
    href: "./index.html"
  }, [
    /*#__PURE__*/vue.createElementVNode("img", {
      src: "https://dl.dropboxusercontent.com/s/3eadt2tmgsyxda7/logo-sahabat-pegadaian.svg",
      alt: ""
    })
  ]),
  /*#__PURE__*/vue.createElementVNode("button", {
    class: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, [
    /*#__PURE__*/vue.createElementVNode("span", { class: "navbar-toggler-icon hided" })
  ]),
  /*#__PURE__*/vue.createElementVNode("div", {
    class: "collapse navbar-collapse",
    id: "navbarSupportedContent"
  }, [
    /*#__PURE__*/vue.createElementVNode("ul", { class: "navbar-nav mr-auto" }, [
      /*#__PURE__*/vue.createElementVNode("li", { class: "nav-item search-responsive" }, [
        /*#__PURE__*/vue.createElementVNode("form", { class: "search-responsive__box" }, [
          /*#__PURE__*/vue.createElementVNode("img", {
            src: "https://dl.dropboxusercontent.com/s/5lzaf2xg0qfabgd/search-dark.svg",
            alt: ""
          }),
          /*#__PURE__*/vue.createElementVNode("input", {
            type: "text",
            placeholder: "Cari kebutuhanmu di sini...",
            onkeyup: "checkSearch(this, 'clearSearchMobile')"
          }),
          /*#__PURE__*/vue.createElementVNode("button", {
            type: "reset",
            id: "clearSearchMobile"
          }, [
            /*#__PURE__*/vue.createElementVNode("img", {
              src: "https://dl.dropboxusercontent.com/s/t0czo3brgkjtpoi/close.svg",
              alt: ""
            })
          ])
        ])
      ]),
      /*#__PURE__*/vue.createElementVNode("li", { class: "nav-item" }, [
        /*#__PURE__*/vue.createElementVNode("a", {
          class: "nav-link",
          href: "./produk.html"
        }, "Produk")
      ]),
      /*#__PURE__*/vue.createElementVNode("li", { class: "nav-item" }, [
        /*#__PURE__*/vue.createElementVNode("a", {
          class: "nav-link",
          href: "./promo.html"
        }, "Promo")
      ]),
      /*#__PURE__*/vue.createElementVNode("li", { class: "nav-item dropdown" }, [
        /*#__PURE__*/vue.createElementVNode("a", {
          class: "nav-link dropdown-toggle",
          href: "./artikel.html",
          id: "navbarDropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }, " Artikel "),
        /*#__PURE__*/vue.createElementVNode("div", {
          class: "dropdown-menu",
          "aria-labelledby": "navbarDropdown"
        }, [
          /*#__PURE__*/vue.createElementVNode("a", {
            class: "dropdown-item",
            href: "./artikel-emas.html"
          }, "Emas"),
          /*#__PURE__*/vue.createElementVNode("a", {
            class: "dropdown-item",
            href: "./artikel-inspirasi.html"
          }, "Inspirasi"),
          /*#__PURE__*/vue.createElementVNode("a", {
            class: "dropdown-item",
            href: "./artikel-investasi.html"
          }, "Investasi"),
          /*#__PURE__*/vue.createElementVNode("a", {
            class: "dropdown-item",
            href: "./artikel-keuangan.html"
          }, "Keuangan"),
          /*#__PURE__*/vue.createElementVNode("a", {
            class: "dropdown-item",
            href: "./artikel-wirausaha.html"
          }, "Wirausaha")
        ])
      ]),
      /*#__PURE__*/vue.createElementVNode("li", { class: "nav-item" }, [
        /*#__PURE__*/vue.createElementVNode("a", {
          class: "nav-link",
          href: "./acara.html"
        }, "Acara")
      ]),
      /*#__PURE__*/vue.createElementVNode("li", { class: "nav-item dropdown" }, [
        /*#__PURE__*/vue.createElementVNode("a", {
          class: "nav-link dropdown-toggle",
          id: "navbarDropdown",
          role: "button",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }, " Simulasi "),
        /*#__PURE__*/vue.createElementVNode("div", {
          class: "dropdown-menu",
          "aria-labelledby": "navbarDropdown"
        }, [
          /*#__PURE__*/vue.createElementVNode("a", {
            class: "dropdown-item",
            href: "./simulasi-emas.html"
          }, "Harga Emas Batangan"),
          /*#__PURE__*/vue.createElementVNode("a", {
            class: "dropdown-item",
            href: "./simulasi-tabungan.html"
          }, "Simulasi Tabungan Emas")
        ])
      ]),
      /*#__PURE__*/vue.createElementVNode("li", { class: "nav-item" }, [
        /*#__PURE__*/vue.createElementVNode("a", {
          class: "nav-link",
          href: "./ebook.html"
        }, "Ebook")
      ])
    ]),
    /*#__PURE__*/vue.createElementVNode("a", {
      class: "btn btn-search",
      onclick: "openSearchModal()"
    }, [
      /*#__PURE__*/vue.createElementVNode("img", {
        src: "https://dl.dropboxusercontent.com/s/3zlqhzh6ucukomf/Search.svgg",
        alt: ""
      })
    ])
  ])
], -1 /* HOISTED */);
const _hoisted_3$6 = /*#__PURE__*/vue.createElementVNode("div", { class: "search-modal" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "search-modal__box" }, [
    /*#__PURE__*/vue.createElementVNode("form", {
      class: "box-input-search container",
      action: "./search-page.html"
    }, [
      /*#__PURE__*/vue.createElementVNode("div", { class: "box-border-input" }, [
        /*#__PURE__*/vue.createElementVNode("img", {
          src: "https://dl.dropboxusercontent.com/s/5lzaf2xg0qfabgd/search-dark.svg",
          alt: ""
        }),
        /*#__PURE__*/vue.createElementVNode("input", {
          type: "text",
          placeholder: "Masukkan kata pencarian...",
          name: "search",
          onkeyup: "checkSearch(this, 'clearSearch')"
        }),
        /*#__PURE__*/vue.createElementVNode("button", {
          type: "reset",
          id: "clearSearch"
        }, [
          /*#__PURE__*/vue.createElementVNode("img", {
            src: "https://dl.dropboxusercontent.com/s/t0czo3brgkjtpoi/close.svg",
            alt: ""
          })
        ])
      ]),
      /*#__PURE__*/vue.createElementVNode("div", { class: "group-input" }, [
        /*#__PURE__*/vue.createElementVNode("select", {
          class: "form-select",
          name: "urutkan",
          required: ""
        }, [
          /*#__PURE__*/vue.createElementVNode("option", {
            selected: "",
            disabled: "",
            value: ""
          }, "Urutkan Berdasarkan"),
          /*#__PURE__*/vue.createElementVNode("option", { value: "new" }, "New")
        ])
      ]),
      /*#__PURE__*/vue.createElementVNode("button", {
        type: "submit",
        class: "btn btn-primary"
      }, "Cari")
    ])
  ])
], -1 /* HOISTED */);
const _hoisted_4$2 = [
  _hoisted_2$7,
  _hoisted_3$6
];

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("header", _hoisted_1$8, _hoisted_4$2))
}

script$8.render = render$8;
script$8.__file = "src/components/Navbar/NavbarSahabatPgd.vue";

var script$7 = {
  name: "k-line-shape",
  props: {},
};

const _hoisted_1$7 = { class: "line-shape" };

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$7))
}

script$7.render = render$7;
script$7.__file = "src/components/Shape/LineShape.vue";

var script$6 = {
  name: "k-tab-group",
  props: {},
};

const _hoisted_1$6 = {
  class: "nav nav-underline tab-group",
  id: "pills-tab-section",
  role: "tablist"
};
const _hoisted_2$6 = /*#__PURE__*/vue.createElementVNode("li", {
  class: "nav-item",
  role: "presentation"
}, [
  /*#__PURE__*/vue.createElementVNode("button", {
    class: "nav-link active",
    id: "tab_title1",
    "data-bs-toggle": "pill",
    "data-bs-target": "#tab_title1-box",
    type: "button",
    role: "tab",
    "aria-controls": "tab_title1-box",
    "aria-selected": "true"
  }, " Tab Title ")
], -1 /* HOISTED */);
const _hoisted_3$5 = /*#__PURE__*/vue.createElementVNode("li", {
  class: "nav-item",
  role: "presentation"
}, [
  /*#__PURE__*/vue.createElementVNode("button", {
    class: "nav-link",
    id: "tab_title2",
    "data-bs-toggle": "pill",
    "data-bs-target": "#tab_title2-box",
    type: "button",
    role: "tab",
    "aria-controls": "tab_title2-box",
    "aria-selected": "false"
  }, " Tab Title ")
], -1 /* HOISTED */);
const _hoisted_4$1 = /*#__PURE__*/vue.createElementVNode("li", {
  class: "nav-item",
  role: "presentation"
}, [
  /*#__PURE__*/vue.createElementVNode("button", {
    class: "nav-link",
    id: "tab_title3",
    "data-bs-toggle": "pill",
    "data-bs-target": "#tab_title3-box",
    type: "button",
    role: "tab",
    "aria-controls": "tab_title3-box",
    "aria-selected": "false"
  }, " Tab Title ")
], -1 /* HOISTED */);
const _hoisted_5 = [
  _hoisted_2$6,
  _hoisted_3$5,
  _hoisted_4$1
];

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("ul", _hoisted_1$6, _hoisted_5))
}

script$6.render = render$6;
script$6.__file = "src/components/Tab/TabGroup.vue";

var script$5 = {
  name: "k-tab-kategori",
  props: {},
};

const _hoisted_1$5 = {
  class: "nav nav-underline",
  id: "pills-tab-section",
  role: "tablist"
};
const _hoisted_2$5 = /*#__PURE__*/vue.createElementVNode("li", {
  class: "nav-item w-50 text-center",
  role: "presentation"
}, [
  /*#__PURE__*/vue.createElementVNode("a", {
    class: "nav-link active",
    id: "konvensional-tab",
    "data-bs-toggle": "pill",
    "data-bs-target": "#konvensional-box",
    type: "button",
    role: "tab",
    "aria-controls": "konvensional-box",
    "aria-selected": "true"
  }, " Konvensional ")
], -1 /* HOISTED */);
const _hoisted_3$4 = /*#__PURE__*/vue.createElementVNode("li", {
  class: "nav-item w-50 text-center",
  role: "presentation"
}, [
  /*#__PURE__*/vue.createElementVNode("a", {
    class: "nav-link",
    id: "syariah-tab",
    "data-bs-toggle": "pill",
    "data-bs-target": "#syariah-box",
    type: "button",
    role: "tab",
    "aria-controls": "syariah-box",
    "aria-selected": "false"
  }, " Syariah ")
], -1 /* HOISTED */);
const _hoisted_4 = [
  _hoisted_2$5,
  _hoisted_3$4
];

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("ul", _hoisted_1$5, _hoisted_4))
}

script$5.render = render$5;
script$5.__file = "src/components/Tab/TabKategori.vue";

var script$4 = {
  name: "k-tab-product",
  props: {},
};

const _hoisted_1$4 = { class: "deck-product-riwayat" };
const _hoisted_2$4 = /*#__PURE__*/vue.createStaticVNode("<a href=\"\" class=\"pgd-btn-featured-product deck-product-riwayat__item active\"><div class=\"pgd-btn-featured-product__img-box\"><img src=\"https://dl.dropboxusercontent.com/s/ux03pl3svfxp9ir/ico-tabungan.svg\" alt=\"\"></div><span class=\"pgd-btn-featured-product__title\">Tabungan Emas</span></a><a href=\"\" class=\"pgd-btn-featured-product deck-product-riwayat__item\"><div class=\"pgd-btn-featured-product__img-box\"><img src=\"https://dl.dropboxusercontent.com/s/4fss4cse7xzzoj3/ico-uang.svg\" alt=\"\"></div><span class=\"pgd-btn-featured-product__title\">Pinjaman</span></a><a href=\"\" class=\"pgd-btn-featured-product deck-product-riwayat__item\"><div class=\"pgd-btn-featured-product__img-box\"><img src=\"https://dl.dropboxusercontent.com/s/fjz95u3y4971f1h/ico-invest-emas.svg\" alt=\"\"></div><span class=\"pgd-btn-featured-product__title\">Gadai</span></a><a href=\"\" class=\"pgd-btn-featured-product deck-product-riwayat__item\"><div class=\"pgd-btn-featured-product__img-box\"><img src=\"https://dl.dropboxusercontent.com/s/uii4k7saj8mnt7k/ico-pembiayaan-no-bg.svg\" alt=\"\"></div><span class=\"pgd-btn-featured-product__title\">Pembiayaan</span></a><a href=\"\" class=\"pgd-btn-featured-product deck-product-riwayat__item\"><div class=\"pgd-btn-featured-product__img-box\"><img src=\"https://dl.dropboxusercontent.com/s/pk9uy9mzfbsd5g8/ico-cicil-emas-no-bg.svg\" alt=\"\"></div><span class=\"pgd-btn-featured-product__title\">Cicil Emas</span></a><a href=\"\" class=\"pgd-btn-featured-product deck-product-riwayat__item\"><div class=\"pgd-btn-featured-product__img-box\"><img src=\"https://dl.dropboxusercontent.com/s/xdrg0r4nzkn91lk/ico-pembayaran-no-bg.svg\" alt=\"\"></div><span class=\"pgd-btn-featured-product__title\">Pembayaran &amp; Topup</span></a><a href=\"\" class=\"pgd-btn-featured-product deck-product-riwayat__item\"><div class=\"pgd-btn-featured-product__img-box\"><img src=\"https://dl.dropboxusercontent.com/s/ky6om7jgy9jjrdr/ico-gadai-titipan-emas-fisik.svg\" alt=\"\"></div><span class=\"pgd-btn-featured-product__title\">Titipan Emas</span></a>", 7);
const _hoisted_9 = [
  _hoisted_2$4
];

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, _hoisted_9))
}

script$4.render = render$4;
script$4.__file = "src/components/Tab/TabProduct.vue";

var script$3 = {
  name: "k-table-1",
  props: {},
};

const _hoisted_1$3 = { class: "table-box" };
const _hoisted_2$3 = /*#__PURE__*/vue.createStaticVNode("<div class=\"table-box-content\"><table class=\"table table-striped\"><thead><tr><th class=\"align-middle\">Gol</th><th class=\"align-middle\">Uang Pinjaman</th><th class=\"text-right align-middle\" width=\"122px\"> Sewa Modal <br> /15 Hari <br></th><th class=\"align-middle\" width=\"88px\">Premi</th><th class=\"text-right align-middle\" width=\"104px\">Administrasi</th></tr><tr class=\"rowspan-custom\"><th></th><th></th><th class=\"text-right\">TR</th><th></th><th></th></tr></thead><tbody><tr><td class=\"text-center\">A</td><td>Rp 50.000 - Rp 500.000</td><td class=\"text-right\">1%</td><td>-</td><td class=\"text-right black-zero\">Rp 2.000</td></tr><tr><td class=\"text-center\">B</td><td>&gt; Rp 500.000 - Rp 1.000.000</td><td class=\"text-right\">1,2%</td><td>Rp 1.000</td><td class=\"text-right black-zero\">Rp 10.000</td></tr><tr><td class=\"text-center\">B</td><td>&gt; Rp 1.000.000 - Rp 2.500.000</td><td class=\"text-right\">1,2%</td><td>Rp 1.000</td><td class=\"text-right black-zero\">Rp 20.000</td></tr><tr><td class=\"text-center\">B</td><td>&gt; Rp 2.500.000 - Rp 5.000.000</td><td class=\"text-right\">1,2%</td><td>Rp 1.000</td><td class=\"text-right black-zero\">Rp 35.000</td></tr><tr><td class=\"text-center\">C</td><td>&gt; Rp 5.000.000 - Rp 10.000.000</td><td class=\"text-right\">1,2%</td><td>Rp 1.000</td><td class=\"text-right black-zero\">Rp 50.000</td></tr><tr><td class=\"text-center\">C</td><td>&gt; Rp 2.500.000 - Rp 5.000.000</td><td class=\"text-right\">1,2%</td><td>Rp 1.000</td><td class=\"text-right black-zero\">Rp 75.000</td></tr><tr><td class=\"text-center\">C</td><td>&gt; Rp 15.000.000 - Rp 20.000.000</td><td class=\"text-right\">1,2%</td><td>Rp 1.000</td><td class=\"text-right black-zero\">Rp 100.000</td></tr><tr><td class=\"text-center\">D</td><td>&gt; Rp 20.000.000</td><td class=\"text-right\">1,2%</td><td>Rp 1.000 - Rp 1.500</td><td class=\"text-right black-zero\">Rp 125.000</td></tr></tbody></table></div>", 1);
const _hoisted_3$3 = [
  _hoisted_2$3
];

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, _hoisted_3$3))
}

script$3.render = render$3;
script$3.__file = "src/components/Table/Table1.vue";

var script$2 = {
  name: "k-table-2",
  props: {},
};

const _hoisted_1$2 = { class: "table-box" };
const _hoisted_2$2 = /*#__PURE__*/vue.createStaticVNode("<div class=\"table-box-content mb-0\"><table class=\"table table-striped\"><tbody><tr><td class=\"bg-primary-pgd\">Uang Muka</td><td>Minimal 15%</td></tr><tr><td class=\"bg-primary-pgd\">Margin/mu&#39;nah pemeliharaan</td><td>0,92% x nilai taksiran emas per bulan</td></tr><tr><td class=\"bg-primary-pgd\">Administrasi</td><td>Rp 50.000 per transaksi</td></tr></tbody></table></div>", 1);
const _hoisted_3$2 = [
  _hoisted_2$2
];

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, _hoisted_3$2))
}

script$2.render = render$2;
script$2.__file = "src/components/Table/Table2.vue";

var script$1 = {
  name: "k-widget-content",
  props: {},
};

const _hoisted_1$1 = { class: "wrap-section-saldo" };
const _hoisted_2$1 = /*#__PURE__*/vue.createStaticVNode("<div class=\"section-saldo\"><div class=\"section-saldo__left\"><div class=\"pgd-alert-green open-tabungan\"> Investasi tanpa cemas dengan nabung emas! <a href=\"\" class=\"btn btn-primary\">Buka Tabungan</a></div></div><div class=\"section-saldo__right\"><div class=\"harga-jual-beli\"><h6>Rp 5.000<span>/ 0,01 gr</span></h6><a href=\"\">Beli Emas <img src=\"https://dl.dropboxusercontent.com/s/uecmhmqqol5trjz/icon-right.svg\" alt=\"\"></a></div><div class=\"harga-jual-beli\"><h6>Rp 5.000<span>/ 0,01 gr</span></h6><a href=\"\">Jual Emas <img src=\"https://dl.dropboxusercontent.com/s/uecmhmqqol5trjz/icon-right.svg\" alt=\"\"></a></div></div></div>", 1);
const _hoisted_3$1 = [
  _hoisted_2$1
];

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("section", _hoisted_1$1, _hoisted_3$1))
}

script$1.render = render$1;
script$1.__file = "src/components/Widget/WidgetContent.vue";

var script = {
  name: "k-widget-saldo",
  props: {},
};

const _hoisted_1 = { class: "wrap-section-saldo" };
const _hoisted_2 = /*#__PURE__*/vue.createStaticVNode("<div class=\"section-saldo\"><div class=\"section-saldo__left\"><div class=\"saldo-showed\"><div class=\"saldo-showed__left\"><p>Saldo Efektif</p><div class=\"hide-value\"><div class=\"hide-value__dot\"><div class=\"dot-div\"></div><div class=\"dot-div\"></div><div class=\"dot-div\"></div><div class=\"dot-div\"></div><div class=\"dot-div\"></div><div class=\"dot-div\"></div><div class=\"dot-div\"></div></div><h5 class=\"hide-value__text\">250,1234 gram</h5></div><div class=\"hide-value\"><p>Saldo blokir:</p><div class=\"hide-value__dot\"><div class=\"dot-div-sm\"></div><div class=\"dot-div-sm\"></div><div class=\"dot-div-sm\"></div><div class=\"dot-div-sm\"></div></div><span class=\"hide-value__text\"> 100,9876 gr</span></div></div><div class=\"saldo-showed__right\"><button id=\"show-saldo\"><img src=\"https://dl.dropboxusercontent.com/s/uisj308dan9b71b/eye-off.svg\" id=\"eye-saldo\" alt=\"\"></button></div></div></div><div class=\"section-saldo__right\"><div class=\"harga-jual-beli\"><h6>Rp 5.000<span>/ 0,01 gr</span></h6><a href=\"\">Beli Emas <img src=\"https://dl.dropboxusercontent.com/s/uecmhmqqol5trjz/icon-right.svg\" alt=\"\"></a></div><div class=\"harga-jual-beli\"><h6>Rp 5.000<span>/ 0,01 gr</span></h6><a href=\"\">Jual Emas <img src=\"https://dl.dropboxusercontent.com/s/uecmhmqqol5trjz/icon-right.svg\" alt=\"\"></a></div></div></div>", 1);
const _hoisted_3 = [
  _hoisted_2
];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("section", _hoisted_1, _hoisted_3))
}

script.render = render;
script.__file = "src/components/Widget/WidgetSaldo.vue";

var components = {
  AddAmountCounter: script$16,
  AddAmountItem: script$15,
  Breadcrumb: script$14,
  Breadcrumblv1: script$13,
  Breadcrumblv2: script$12,
  Breadcrumblv3: script$11,
  Breadcrumblv4: script$10,
  BreadcrumbRoot: script$$,
  Button: script$_,
  ButtonSize: script$Z,
  Accordion: script$Y,
  Alert: script$X,
  Carousel: script$W,
  Checkbox: script$V,
  ContextualMenu: script$U,
  Datepicker: script$T,
  Link: script$S,
  Logo: script$R,
  Modal: script$Q,
  Overlay: script$P,
  Radio: script$O,
  Stepper: script$N,
  Switch: script$M,
  Tooltip: script$L,
  CardAccount: script$K,
  CardArticle: script$J,
  CardArticleHighlight: script$I,
  CardContent: script$H,
  CardEvent: script$G,
  CardFile: script$F,
  CardProduct: script$E,
  CardProductKonvensional: script$D,
  CardProductSyariah: script$C,
  CardPromo: script$B,
  CardPromoCode1: script$A,
  CardPromoCode2: script$z,
  CardPromoCode3: script$y,
  CardVoucher: script$x,
  HeroCarousel: script$w,
  PgdHeroCarousel: script$v,
  DropdownIconTextLg: script$u,
  DropdownIconTextSm: script$t,
  DropdownTextOnly: script$s,
  FilepickerLg: script$r,
  FilepickerSm: script$q,
  FooterPdsLogin: script$p,
  FooterPdsOnboarding: script$o,
  FooterPgdCorporate: script$n,
  FooterSahabatPgd: script$m,
  ProductIcon: script$l,
  SystemIcon: script$k,
  ImageIllustration: script$j,
  ImagePhoto: script$i,
  InputNominal: script$h,
  InputSmallText: script$g,
  InputTextArea: script$f,
  Label: script$e,
  LabelIcon: script$d,
  ListGroupOrdered: script$c,
  ListGroupUnit: script$b,
  ListGroupUnordered: script$a,
  NavbarPdsOnboarding: script$9,
  NavbarSahabatPgd: script$8,
  LineShape: script$7,
  TabGroup: script$6,
  TabKategori: script$5,
  TabProduct: script$4,
  Table1: script$3,
  Table2: script$2,
  WidgetContent: script$1,
  WidgetSaldo: script,
};

const pgdVueUiKit = {
  install(Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  },
};

module.exports = pgdVueUiKit;
