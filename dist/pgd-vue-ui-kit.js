'use strict';

var vue = require('vue');

var script$1g = {
  name: "k-add-amount-counter",
};

const _hoisted_1$1e = { class: "input-group add-amount-counter" };
const _hoisted_2$16 = /*#__PURE__*/vue.createElementVNode("div", { class: "add-amount-counter-box" }, [
  /*#__PURE__*/vue.createElementVNode("a", { class: "add-amount-counter-box__button btn-decrement" }, [
    /*#__PURE__*/vue.createElementVNode("img", {
      src: "/assets/images/icon-min-outline-dark.svg",
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
      src: "/assets/images/icon-add-outline-green.svg",
      alt: ""
    })
  ])
], -1 /* HOISTED */);
const _hoisted_3$W = [
  _hoisted_2$16
];

function render$1g(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1e, _hoisted_3$W))
}

script$1g.render = render$1g;
script$1g.__file = "src/components/AddAmount/AddAmountCounter.vue";

var script$1f = {
  name: "k-add-amount-item",
  props: {
    label: String,
  },
};

const _hoisted_1$1d = {
  class: "add-amount-item",
  "data-bs-toggle": "modal",
  "data-bs-target": "#modal-tambah-saham"
};
const _hoisted_2$15 = /*#__PURE__*/vue.createElementVNode("img", {
  src: "/assets/images/ico-add-green.svg",
  alt: ""
}, null, -1 /* HOISTED */);

function render$1f(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1d, [
    _hoisted_2$15,
    vue.createElementVNode("a", null, vue.toDisplayString($props.label), 1 /* TEXT */)
  ]))
}

script$1f.render = render$1f;
script$1f.__file = "src/components/AddAmount/AddAmountItem.vue";

var script$1e = {
  name: "k-homepage-pds",
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [
        "/assets/images/banner-1.png",
        "/assets/images/banner-1.png",
      ],
    },
  },
};

const _hoisted_1$1c = { class: "hero-carousel container" };
const _hoisted_2$14 = ["src"];

function render$1e(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("section", _hoisted_1$1c, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
      return (vue.openBlock(), vue.createElementBlock("a", {
        href: "",
        class: "hero-carousel__item",
        key: index
      }, [
        vue.createElementVNode("img", {
          src: item,
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_2$14)
      ]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script$1e.render = render$1e;
script$1e.__file = "src/components/Banner/HomePDS.vue";

var script$1d = {
  name: "k-homepage-pegadaian-corporate",
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [
        "/assets/images/banner-1.png",
        "/assets/images/banner-1.png",
      ],
    },
  },
};

const _hoisted_1$1b = { class: "carousel-hero" };
const _hoisted_2$13 = { class: "swiper swiper-container carousel-hero-swiper" };
const _hoisted_3$V = { class: "swiper-wrapper" };
const _hoisted_4$G = { class: "carousel-hero-tile" };
const _hoisted_5$A = { class: "carousel-hero-tile__banner-background" };
const _hoisted_6$s = ["src"];
const _hoisted_7$r = { class: "carousel-hero-tile__banner" };
const _hoisted_8$m = ["src"];
const _hoisted_9$k = /*#__PURE__*/vue.createElementVNode("span", {
  class: "swiper-notification",
  "aria-live": "assertive",
  "aria-atomic": "true"
}, null, -1 /* HOISTED */);
const _hoisted_10$j = /*#__PURE__*/vue.createStaticVNode("<div class=\"carousel-navigator\"><button class=\"btn-circle btn-circle-prev\"><img src=\"/assets/images/chevron-left.svg\" alt=\"go to previous slide\"></button><button class=\"btn-circle btn-circle-next\"><img src=\"/assets/images/chevron-right.svg\" alt=\"go to next slide\"></button></div><div class=\"carousel-indicators\"></div>", 2);

function render$1d(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1b, [
    vue.createElementVNode("div", _hoisted_2$13, [
      vue.createElementVNode("div", _hoisted_3$V, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
          return (vue.openBlock(), vue.createElementBlock("div", {
            class: "swiper-slide",
            key: index
          }, [
            vue.createElementVNode("div", _hoisted_4$G, [
              vue.createElementVNode("div", _hoisted_5$A, [
                vue.createElementVNode("img", {
                  src: item,
                  alt: "thumbnail"
                }, null, 8 /* PROPS */, _hoisted_6$s)
              ]),
              vue.createElementVNode("div", _hoisted_7$r, [
                vue.createElementVNode("img", {
                  src: item,
                  alt: "thumbnail"
                }, null, 8 /* PROPS */, _hoisted_8$m)
              ])
            ])
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ]),
      _hoisted_9$k
    ]),
    _hoisted_10$j
  ]))
}

script$1d.render = render$1d;
script$1d.__file = "src/components/Banner/PegadaianCorporate.vue";

var script$1c = {
  name: "k-produk-konvensional",
  props: {
    mainLogo: {
      type: String,
      default:
        "/assets/images/ico-down-white.svg",
    },
    mainDescription: {
      type: String,
      default: `Dapatkan pinjaman dengan mudah dan aman dengan gadai kendaraan
            bermotor.`,
    },
    mainImage: {
      type: String,
      default:
        "/assets/images/gadai-kendaraan.png",
    },
    subTitle: {
      type: String,
      default: "Apa itu Pegadaian Gadai Kendaraan?",
    },
    subDescription: {
      type: String,
      default: `Pegadaian Gadai Kendaraan adalah kredit dengan sistem gadai untuk
        kebutuhan konsumtif maupun produktif dengan barang jaminan berupa
        kendaraan bermotor baik kendaraan roda dua maupun roda empat.`,
    },
    subLogo: {
      type: String,
      default:
        "/assets/images/ico-kendaraan.svg",
    },
  },
};

const _hoisted_1$1a = { class: "produk-konvensional" };
const _hoisted_2$12 = { class: "section-jumbotron-produk" };
const _hoisted_3$U = { class: "section-jumbotron-produk__content container" };
const _hoisted_4$F = { class: "left-section" };
const _hoisted_5$z = ["src"];
const _hoisted_6$r = {
  href: "#gadai-kendaraan",
  id: "gadai-kendaraan",
  class: "btn btn-primary"
};
const _hoisted_7$q = /*#__PURE__*/vue.createTextVNode("Lihat lebih banyak ");
const _hoisted_8$l = ["src"];
const _hoisted_9$j = /*#__PURE__*/vue.createElementVNode("div", { class: "right-section" }, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "/assets/images/round-img5.png",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_10$i = { class: "section-definition-produk bg-primary" };
const _hoisted_11$e = { class: "section-definition-produk__content container" };
const _hoisted_12$d = { class: "icon-box" };
const _hoisted_13$e = ["src"];

function render$1c(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createElementVNode("div", _hoisted_1$1a, [
      vue.createElementVNode("div", _hoisted_2$12, [
        vue.createElementVNode("div", _hoisted_3$U, [
          vue.createElementVNode("div", _hoisted_4$F, [
            vue.createElementVNode("img", {
              src: $props.mainImage,
              alt: ""
            }, null, 8 /* PROPS */, _hoisted_5$z),
            vue.createElementVNode("p", null, vue.toDisplayString($props.mainDescription), 1 /* TEXT */),
            vue.createElementVNode("a", _hoisted_6$r, [
              _hoisted_7$q,
              vue.createElementVNode("img", {
                src: $props.mainLogo,
                alt: ""
              }, null, 8 /* PROPS */, _hoisted_8$l)
            ])
          ]),
          _hoisted_9$j
        ])
      ])
    ]),
    vue.createElementVNode("div", _hoisted_10$i, [
      vue.createElementVNode("div", _hoisted_11$e, [
        vue.createElementVNode("div", _hoisted_12$d, [
          vue.createElementVNode("img", {
            src: $props.subLogo,
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_13$e)
        ]),
        vue.createElementVNode("h4", null, vue.toDisplayString(_ctx.subtitle), 1 /* TEXT */),
        vue.createElementVNode("p", null, vue.toDisplayString($props.subDescription) + "}}", 1 /* TEXT */)
      ])
    ])
  ], 64 /* STABLE_FRAGMENT */))
}

script$1c.render = render$1c;
script$1c.__file = "src/components/Banner/ProdukKonvensional.vue";

var script$1b = {
  name: "k-produk-syariah",
  props: {
    mainLogo: {
      type: String,
      default:
        "/assets/images/ico-down-white.svg",
    },
    mainDescription: {
      type: String,
      default: `Dapatkan pinjaman dengan mudah dan aman dengan gadai kendaraan
            bermotor.`,
    },
    mainImage: {
      type: String,
      default:
        "/assets/images/gadai-kendaraan-syariah.png",
    },
    subTitle: {
      type: String,
      default: "Apa itu Pegadaian Gadai Kendaraan Syariah?",
    },
    subDescription: {
      type: String,
      default: `Pegadaian Gadai Kendaraan Syariah adalah pemberian pinjaman secara
        syariah dengan akad rahn yang diberikan ke seluruh golongan nasabah
        untuk kebutuhan konsumtif maupun produktif dengan jaminan kendaraan baik
        mobil maupun motor dengan menggunakan akad syariah.`,
    },
    subLogo: {
      type: String,
      default:
        "/assets/images/ico-kendaraan.svg",
    },
    items: {
      type: Array,
      default: function () {
        return [
          { imageUrl: "imag", target: "target" },
          { imageUrl: "imag", target: "target" },
          { imageUrl: "imag", target: "target" },
        ];
      },
    },
  },
};

const _hoisted_1$19 = { class: "produk-syariah" };
const _hoisted_2$11 = { class: "section-jumbotron-produk" };
const _hoisted_3$T = { class: "section-jumbotron-produk__content container" };
const _hoisted_4$E = { class: "left-section" };
const _hoisted_5$y = ["src"];
const _hoisted_6$q = {
  href: "#gadai-kendaraan-syariah",
  id: "gadai-kendaraan-syariah",
  class: "btn btn-primary"
};
const _hoisted_7$p = /*#__PURE__*/vue.createTextVNode("Lihat lebih banyak ");
const _hoisted_8$k = ["src"];
const _hoisted_9$i = /*#__PURE__*/vue.createElementVNode("div", { class: "right-section" }, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "/assets/images/round-img10.png",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_10$h = { class: "section-definition-produk bg-primary" };
const _hoisted_11$d = { class: "section-definition-produk__content container" };
const _hoisted_12$c = { class: "icon-box" };
const _hoisted_13$d = ["src"];

function render$1b(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createElementVNode("div", _hoisted_1$19, [
      vue.createElementVNode("div", _hoisted_2$11, [
        vue.createElementVNode("div", _hoisted_3$T, [
          vue.createElementVNode("div", _hoisted_4$E, [
            vue.createElementVNode("img", {
              src: $props.mainImage,
              alt: ""
            }, null, 8 /* PROPS */, _hoisted_5$y),
            vue.createElementVNode("p", null, vue.toDisplayString(_ctx.mainTitle), 1 /* TEXT */),
            vue.createElementVNode("a", _hoisted_6$q, [
              _hoisted_7$p,
              vue.createElementVNode("img", {
                src: $props.mainLogo,
                alt: ""
              }, null, 8 /* PROPS */, _hoisted_8$k)
            ])
          ]),
          _hoisted_9$i
        ])
      ])
    ]),
    vue.createElementVNode("div", _hoisted_10$h, [
      vue.createElementVNode("div", _hoisted_11$d, [
        vue.createElementVNode("div", _hoisted_12$c, [
          vue.createElementVNode("img", {
            src: $props.subLogo,
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_13$d)
        ]),
        vue.createElementVNode("h4", null, vue.toDisplayString($props.subTitle), 1 /* TEXT */),
        vue.createElementVNode("p", null, vue.toDisplayString($props.subDescription), 1 /* TEXT */)
      ])
    ])
  ], 64 /* STABLE_FRAGMENT */))
}

script$1b.render = render$1b;
script$1b.__file = "src/components/Banner/ProdukSyariah.vue";

var script$1a = {
  name: "k-homepage-sahabat-pegadaian-banner",
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [
        {
          imageUrl:
            "/assets/images/banner.png",
          tag: "Inspirasi",
          title: "Ide Hadiah untuk Ibu Tersayang",
          desc: `“Kasih sayang Ibu sepanjang masa, kasih sayang anak sepanjang galah”
          Meski kasih sayang Ibu tak mungkin dibalas lunas, namun tak ...Kasih
          sayang Ibu sepanjang masa, kasih sayang anak sepanjang galah” Meski
          kasih sayang Ibu tak mungkin dibalas lunas, namun tak ...`,
        },
        {
          imageUrl:
            "/assets/images/banner.png",
          tag: "Inspirasi",
          title: "Ide Hadiah untuk Ibu Tersayang",
          desc: `“Kasih sayang Ibu sepanjang masa, kasih sayang anak sepanjang galah”
          Meski kasih sayang Ibu tak mungkin dibalas lunas, namun tak ...Kasih
          sayang Ibu sepanjang masa, kasih sayang anak sepanjang galah” Meski
          kasih sayang Ibu tak mungkin dibalas lunas, namun tak ...`,
        },
      ],
    },
  },
};

const _hoisted_1$18 = { class: "pgd-hero-carousel" };
const _hoisted_2$10 = { class: "img-overlay" };
const _hoisted_3$S = ["src"];
const _hoisted_4$D = { class: "content-item" };
const _hoisted_5$x = { class: "content-item__tag bg-primary" };
const _hoisted_6$p = { class: "content-item__title" };
const _hoisted_7$o = { class: "content-item__desc" };

function render$1a(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("section", _hoisted_1$18, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
      return (vue.openBlock(), vue.createElementBlock("a", {
        href: "",
        class: "pgd-hero-carousel__item",
        key: index
      }, [
        vue.createElementVNode("div", _hoisted_2$10, [
          vue.createElementVNode("img", {
            src: item.imageUrl,
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_3$S)
        ]),
        vue.createElementVNode("div", _hoisted_4$D, [
          vue.createElementVNode("div", _hoisted_5$x, vue.toDisplayString(item.tag), 1 /* TEXT */),
          vue.createElementVNode("h2", _hoisted_6$p, vue.toDisplayString(item.title), 1 /* TEXT */),
          vue.createElementVNode("p", _hoisted_7$o, vue.toDisplayString(item.desc), 1 /* TEXT */)
        ])
      ]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script$1a.render = render$1a;
script$1a.__file = "src/components/Banner/SahabatPgd.vue";

var script$19 = {
  name: "k-breadcrumbs",
  props: {
    items: {
      type: Array,
      required: false,
      default: () => ["Beranda", "Produk", "Layanan Jasa", "Safe Deposit Box"],
    },
  },
};

const _hoisted_1$17 = { "aria-label": "breadcrumb" };
const _hoisted_2$$ = { class: "breadcrumb" };
const _hoisted_3$R = {
  key: 1,
  href: "./index.html"
};

function render$19(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("nav", _hoisted_1$17, [
    vue.createElementVNode("ol", _hoisted_2$$, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
        return (vue.openBlock(), vue.createElementBlock("li", {
          key: index,
          class: vue.normalizeClass(["breadcrumb-item", { active: _ctx.idx === $props.items.length - 1 }])
        }, [
          (index === $props.items.length - 1)
            ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
                vue.createTextVNode(vue.toDisplayString(item), 1 /* TEXT */)
              ], 64 /* STABLE_FRAGMENT */))
            : vue.createCommentVNode("v-if", true),
          (index !== $props.items.length - 1)
            ? (vue.openBlock(), vue.createElementBlock("a", _hoisted_3$R, vue.toDisplayString(item), 1 /* TEXT */))
            : vue.createCommentVNode("v-if", true)
        ], 2 /* CLASS */))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}

script$19.render = render$19;
script$19.__file = "src/components/Breadcrumb/Breadcrumb.vue";

var script$18 = {
  name: "k-button",
  props: {
    label: String,
    type: {
      validator(value) {
        return [
          "primary",
          "outline-primary",
          "link",
          "tertiary",
          "secondary",
        ].includes(value);
      },
    },
    size: {
      validator(value) {
        return ["sm", "md", "lg", "xl"].includes(value);
      },
    },
  },
};

function render$18(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("button", {
    class: vue.normalizeClass(["btn", [`btn-${$props.type}`, `btn-${$props.size}`]])
  }, vue.toDisplayString($props.label), 3 /* TEXT, CLASS */))
}

script$18.render = render$18;
script$18.__file = "src/components/Button/Button.vue";

var script$17 = {
  name: "k-button-style",
  props: {},
};

const _hoisted_1$16 = /*#__PURE__*/vue.createElementVNode("button", { class: "btn btn-primary btn-sm" }, "Button Text", -1 /* HOISTED */);
const _hoisted_2$_ = /*#__PURE__*/vue.createElementVNode("button", { class: "btn btn-primary" }, "Button Text", -1 /* HOISTED */);
const _hoisted_3$Q = /*#__PURE__*/vue.createElementVNode("button", { class: "btn btn-primary btn-lg" }, "Button Text", -1 /* HOISTED */);

function render$17(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    _hoisted_1$16,
    _hoisted_2$_,
    _hoisted_3$Q
  ], 64 /* STABLE_FRAGMENT */))
}

script$17.render = render$17;
script$17.__file = "src/components/Button/ButtonSize.vue";

var script$16 = {
  name: "k-accordion",
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [
        {
          title: "Apa itu produk Kreasi Ultra Mikro?",
          body: "Pinjaman (kredit) dalam jangka waktu tertentu dengan menggunakan konstruksi penjaminan kredit secara jaminan fidusia dan/ atau jaminan gadai, yang diberikan kepada pengusaha mikro dan pengusaha kecil yang membutuhkan dana untuk keperluan pengembangan usaha dengan uang pinjaman 10 juta ke bawah dengan sewa modal yang lebih ringan. Syarat produk ini adalah tidak sedang dalam pembiayaan KUR dari lembaga keuangan lain.",
        },
        {
          title: "Apa itu produk Kreasi Ultra Mikro?",
          body: "Pinjaman (kredit) dalam jangka waktu tertentu dengan menggunakan konstruksi penjaminan kredit secara jaminan fidusia dan/ atau jaminan gadai, yang diberikan kepada pengusaha mikro dan pengusaha kecil yang membutuhkan dana untuk keperluan pengembangan usaha dengan uang pinjaman 10 juta ke bawah dengan sewa modal yang lebih ringan. Syarat produk ini adalah tidak sedang dalam pembiayaan KUR dari lembaga keuangan lain.",
        },
      ],
    },
  },
};

const _hoisted_1$15 = {
  class: "accordion",
  id: "accordionExample"
};
const _hoisted_2$Z = ["id"];
const _hoisted_3$P = ["data-bs-target", "aria-controls"];
const _hoisted_4$C = ["id", "aria-labelledby"];
const _hoisted_5$w = { class: "accordion-body" };

function render$16(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$15, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
      return (vue.openBlock(), vue.createElementBlock("div", {
        class: "accordion-item",
        key: index
      }, [
        vue.createElementVNode("h2", {
          class: "accordion-header",
          id: '#heading' + index
        }, [
          vue.createElementVNode("button", {
            class: "accordion-button",
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": '#collapseOne' + index,
            "aria-expanded": "true",
            "aria-controls": 'collapseOne' + index
          }, vue.toDisplayString(item.title), 9 /* TEXT, PROPS */, _hoisted_3$P)
        ], 8 /* PROPS */, _hoisted_2$Z),
        vue.createElementVNode("div", {
          id: 'collapseOne' + index,
          class: "accordion-collapse collapse",
          "aria-labelledby": '#heading' + index,
          "data-bs-parent": "#accordionExample"
        }, [
          vue.createElementVNode("div", _hoisted_5$w, vue.toDisplayString(item.body), 1 /* TEXT */)
        ], 8 /* PROPS */, _hoisted_4$C)
      ]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script$16.render = render$16;
script$16.__file = "src/components/Accordion.vue";

var script$15 = {
  name: "k-alert",
  props: {
    label: String,
    color: {
      validator(value) {
        return ["green", "light-blue", "red", "yellow"].includes(value);
      },
    },
  },
};

const _hoisted_1$14 = { class: "pb-3" };

function render$15(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", null, [
    vue.createElementVNode("div", _hoisted_1$14, [
      vue.createElementVNode("div", {
        class: vue.normalizeClass(`pgd-alert-${$props.color}`)
      }, vue.toDisplayString($props.label), 3 /* TEXT, CLASS */)
    ])
  ]))
}

script$15.render = render$15;
script$15.__file = "src/components/Alert.vue";

var script$14 = {
  name: "k-alert-basic",
  props: {
    label: String,
    color: {
      validator(value) {
        return ["primary", "blue", "red", "yellow"].includes(value);
      },
    },
  },
};

const _hoisted_1$13 = { class: "pb-3" };

function render$14(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", null, [
    vue.createElementVNode("div", _hoisted_1$13, [
      vue.createElementVNode("div", {
        class: vue.normalizeClass(`pgd-alert-copy-${$props.color}`)
      }, [
        vue.createElementVNode("span", null, vue.toDisplayString($props.label), 1 /* TEXT */)
      ], 2 /* CLASS */)
    ])
  ]))
}

script$14.render = render$14;
script$14.__file = "src/components/AlertBasic.vue";

var script$13 = {
  name: "k-banner-carousel",
  props: {
    items: {
      type: Array,
      default: function () {
        return [
          {
            image:
              "/assets/images/image-banner2.png",
            statusLabel: "Label",
            periodeLabel: "Periode",
            title: "Title",
            description: `1. Kode promo RENCANAEMAS digunakan untuk transaksi buka Tabungan
              Emas.
              2 .Diskon sebesar 40%, maksimal Rp20.000.
              3. Minimal transaksi Rp50.000,-.`,
            action: function () {
              return "/";
            },
            promoCode: "Promi",
          },
          {
            image:
              "/assets/images/image-banner3.png",
            statusLabel: "Label",
            periodeLabel: "Periode",
            title: "Title",
            description: "Des",
            action: function () {
              return "/";
            },
            promoCode: "Promix",
          },
          {
            image:
              "/assets/images/image-banner2.png",
            statusLabel: "Label",
            periodeLabel: "Periode",
            title: "Title",
            description: "Des",
            action: function () {
              return "/";
            },
            promoCode: "Promiy",
          },
          {
            image:
              "/assets/images/image-banner1.png",
            statusLabel: "Label",
            periodeLabel: "Periode",
            title: "Title",
            description: "Des",
            action: function () {
              return "/";
            },
            promoCode: "Promip",
          },
        ];
      },
    },
  },
};

const _hoisted_1$12 = { class: "p-5" };
const _hoisted_2$Y = { class: "pgd-carousel-promo" };
const _hoisted_3$O = /*#__PURE__*/vue.createElementVNode("div", { class: "promo-left" }, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "/assets/images/img-promo.png",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_4$B = { class: "promo-right" };
const _hoisted_5$v = { class: "promo-right__top" };
const _hoisted_6$o = { class: "pgd-status" };
const _hoisted_7$n = { class: "pr-top-date" };
const _hoisted_8$j = { class: "promo-right__content" };
const _hoisted_9$h = ["href"];
const _hoisted_10$g = { class: "promo-right__code" };
const _hoisted_11$c = /*#__PURE__*/vue.createElementVNode("div", { class: "pr-code-top" }, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "/assets/images/coupon.png",
    alt: ""
  }),
  /*#__PURE__*/vue.createElementVNode("h5", null, "Kode Promo")
], -1 /* HOISTED */);
const _hoisted_12$b = { class: "pr-code-bottom" };
const _hoisted_13$c = ["id"];
const _hoisted_14$c = /*#__PURE__*/vue.createElementVNode("button", {
  class: "btn-tertiary copyPromo1",
  onclick: "copyPromo('#code2');showToast('2')"
}, " Salin ", -1 /* HOISTED */);
const _hoisted_15$c = ["id"];
const _hoisted_16$b = /*#__PURE__*/vue.createElementVNode("span", null, "Kode Promo berhasil disalin", -1 /* HOISTED */);
const _hoisted_17$9 = /*#__PURE__*/vue.createElementVNode("button", {
  class: "btn-tertiary",
  onclick: "$('#3').hide()"
}, " × ", -1 /* HOISTED */);
const _hoisted_18$9 = [
  _hoisted_16$b,
  _hoisted_17$9
];
const _hoisted_19$9 = /*#__PURE__*/vue.createElementVNode("div", { class: "bottom-nav-background" }, null, -1 /* HOISTED */);

function render$13(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$12, [
    vue.createElementVNode("div", _hoisted_2$Y, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
        return (vue.openBlock(), vue.createElementBlock("div", {
          key: index,
          class: "pgd-carousel-promo__item"
        }, [
          _hoisted_3$O,
          vue.createElementVNode("div", _hoisted_4$B, [
            vue.createElementVNode("div", _hoisted_5$v, [
              vue.createElementVNode("div", _hoisted_6$o, vue.toDisplayString(item.statusLabel) + "i", 1 /* TEXT */),
              vue.createElementVNode("div", _hoisted_7$n, vue.toDisplayString(item.periodeLabel), 1 /* TEXT */)
            ]),
            vue.createElementVNode("div", _hoisted_8$j, [
              vue.createElementVNode("h2", null, vue.toDisplayString(item.title), 1 /* TEXT */),
              vue.createElementVNode("p", null, vue.toDisplayString(item.description), 1 /* TEXT */),
              vue.createElementVNode("a", {
                href: item.action,
                class: "btn-tertiary"
              }, "Baca Selengkapnya", 8 /* PROPS */, _hoisted_9$h)
            ]),
            vue.createElementVNode("div", _hoisted_10$g, [
              _hoisted_11$c,
              vue.createElementVNode("div", _hoisted_12$b, [
                vue.createElementVNode("h2", {
                  id: item.promoCode + index
                }, vue.toDisplayString(item.promoCode), 9 /* TEXT, PROPS */, _hoisted_13$c),
                _hoisted_14$c,
                vue.createElementVNode("div", {
                  id: index,
                  class: "toast-promo bg-primary"
                }, _hoisted_18$9, 8 /* PROPS */, _hoisted_15$c)
              ])
            ])
          ]),
          _hoisted_19$9
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}

script$13.render = render$13;
script$13.__file = "src/components/Banner/BannerCarousel.vue";

var script$12 = {
  name: "k-highlight-carousel",
  props: {
    items: {
      type: Array,
      default: function () {
        return [
          {
            image:
              "/assets/images/banner-artikel1.png",
            label: "Inspirasi",
            periodeLabel: "16 December 2020",
            title: "Cara Jualan Online Selama Bulan Ramadan",
            description: `1. Kode promo RENCANAEMAS digunakan untuk transaksi buka Tabungan
              Emas.
              2 .Diskon sebesar 40%, maksimal Rp20.000.
              3. Minimal transaksi Rp50.000,-.`,
            action: function () {
              return "/";
            },
          },
          {
            image:
              "/assets/images/image-banner3.png",
            label: "Label",
            periodeLabel: "16 December 2020",
            title: "Title",
            description: "Des",
            action: function () {
              return "/";
            },
          },
          {
            image:
              "/assets/images/image-banner2.png",
            label: "Label",
            periodeLabel: "16 December 2020",
            title: "Cara Jualan Online Selama Jelang Ramadan",
            description: "Des",
            action: function () {
              return "/";
            },
          },
        ];
      },
    },
  },
};

const _hoisted_1$11 = { class: "p-5" };
const _hoisted_2$X = ["href"];
const _hoisted_3$N = { class: "box-top" };
const _hoisted_4$A = { class: "img-overlay" };
const _hoisted_5$u = ["src"];
const _hoisted_6$n = { class: "content-item" };
const _hoisted_7$m = { class: "content-item__tag bg-primary" };
const _hoisted_8$i = { class: "content-item__title" };
const _hoisted_9$g = { class: "content-item__date" };
const _hoisted_10$f = /*#__PURE__*/vue.createElementVNode("img", {
  src: "/assets/images/clock.svg",
  alt: ""
}, null, -1 /* HOISTED */);
const _hoisted_11$b = /*#__PURE__*/vue.createElementVNode("div", { class: "bottom-nav-background" }, null, -1 /* HOISTED */);

function render$12(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$11, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
      return (vue.openBlock(), vue.createElementBlock("div", {
        key: index,
        class: "pgd-carousel-triple"
      }, [
        vue.createElementVNode("a", {
          href: item.action,
          class: "pgd-carousel-triple__item"
        }, [
          vue.createElementVNode("div", _hoisted_3$N, [
            vue.createElementVNode("div", _hoisted_4$A, [
              vue.createElementVNode("img", {
                src: item.image,
                alt: ""
              }, null, 8 /* PROPS */, _hoisted_5$u)
            ]),
            vue.createElementVNode("div", _hoisted_6$n, [
              vue.createElementVNode("div", _hoisted_7$m, vue.toDisplayString(item.label), 1 /* TEXT */),
              vue.createElementVNode("h2", _hoisted_8$i, vue.toDisplayString(item.title), 1 /* TEXT */),
              vue.createElementVNode("div", _hoisted_9$g, [
                _hoisted_10$f,
                vue.createElementVNode("span", null, vue.toDisplayString(item.periodeLabel), 1 /* TEXT */)
              ])
            ])
          ]),
          _hoisted_11$b
        ], 8 /* PROPS */, _hoisted_2$X)
      ]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script$12.render = render$12;
script$12.__file = "src/components/Carousel/HighlightCarousel.vue";

var script$11 = {
  name: "k-chart",
  props: {},
};

const _hoisted_1$10 = { class: "p-5" };
const _hoisted_2$W = /*#__PURE__*/vue.createElementVNode("ul", { class: "nav nav-tabs tab-box" }, [
  /*#__PURE__*/vue.createElementVNode("li", { class: "nav-item tab-box__tab active" }, [
    /*#__PURE__*/vue.createElementVNode("a", {
      class: "nav-link active",
      "data-toggle": "tab",
      href: "#grafik-beli",
      onclick: "changeChart('beli')"
    }, "Harga Beli")
  ]),
  /*#__PURE__*/vue.createElementVNode("li", { class: "nav-item tab-box__tab" }, [
    /*#__PURE__*/vue.createElementVNode("a", {
      class: "nav-link",
      "data-toggle": "tab",
      href: "#grafik-jual",
      onclick: "changeChart('jual')"
    }, "Harga Jual")
  ])
], -1 /* HOISTED */);
const _hoisted_3$M = /*#__PURE__*/vue.createElementVNode("div", { class: "tab-content tab-box-grafik" }, [
  /*#__PURE__*/vue.createElementVNode("div", {
    id: "grafik-beli",
    class: "tab-pane fade tab-box-grafik__div active show"
  }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "grafik-box-top" }, [
      /*#__PURE__*/vue.createElementVNode("div", {
        class: "grafik-box-top__tab tab-active",
        onclick: "changeGrafikBeli('1')"
      }, " 1 Minggu "),
      /*#__PURE__*/vue.createElementVNode("div", {
        class: "grafik-box-top__tab",
        onclick: "changeGrafikBeli('2')"
      }, " 1 Bulan "),
      /*#__PURE__*/vue.createElementVNode("div", {
        class: "grafik-box-top__tab",
        onclick: "changeGrafikBeli('3')"
      }, " 6 Bulan "),
      /*#__PURE__*/vue.createElementVNode("div", {
        class: "grafik-box-top__tab",
        onclick: "changeGrafikBeli('4')"
      }, " 1 Tahun ")
    ]),
    /*#__PURE__*/vue.createElementVNode("div", { class: "grafik-box-bottom" }, [
      /*#__PURE__*/vue.createElementVNode("canvas", {
        id: "chart-beli",
        width: "400",
        height: "200"
      })
    ])
  ]),
  /*#__PURE__*/vue.createElementVNode("div", {
    id: "grafik-jual",
    class: "tab-pane fade tab-box-grafik__div"
  }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "grafik-box-top" }, [
      /*#__PURE__*/vue.createElementVNode("div", {
        class: "grafik-box-top__tab tab-active",
        onclick: "changeGrafikJual('1')"
      }, " 1 Minggu "),
      /*#__PURE__*/vue.createElementVNode("div", {
        class: "grafik-box-top__tab",
        onclick: "changeGrafikJual('2')"
      }, " 1 Bulan "),
      /*#__PURE__*/vue.createElementVNode("div", {
        class: "grafik-box-top__tab",
        onclick: "changeGrafikJual('3')"
      }, " 6 Bulan "),
      /*#__PURE__*/vue.createElementVNode("div", {
        class: "grafik-box-top__tab",
        onclick: "changeGrafikJual('4')"
      }, " 1 Tahun ")
    ]),
    /*#__PURE__*/vue.createElementVNode("div", { class: "grafik-box-bottom" }, [
      /*#__PURE__*/vue.createElementVNode("canvas", {
        id: "chart-jual",
        width: "400",
        height: "200"
      })
    ])
  ])
], -1 /* HOISTED */);
const _hoisted_4$z = [
  _hoisted_2$W,
  _hoisted_3$M
];

function render$11(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$10, _hoisted_4$z))
}

script$11.render = render$11;
script$11.__file = "src/components/Chart/Chart.vue";

var script$10 = {
  name: "k-chart-meter",
  props: {},
};

const _hoisted_1$$ = { class: "ajak-sahabat-info" };
const _hoisted_2$V = /*#__PURE__*/vue.createElementVNode("div", { class: "ajak-sahabat-info__top" }, [
  /*#__PURE__*/vue.createElementVNode("h5", null, "45 Sahabat"),
  /*#__PURE__*/vue.createElementVNode("p", null, "Rp 1.125.000 / Rp 2.500.000")
], -1 /* HOISTED */);
const _hoisted_3$L = /*#__PURE__*/vue.createElementVNode("div", { class: "progress" }, [
  /*#__PURE__*/vue.createElementVNode("div", {
    class: "progress-bar w-50",
    role: "progressbar",
    "aria-valuenow": "45",
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  })
], -1 /* HOISTED */);
const _hoisted_4$y = /*#__PURE__*/vue.createElementVNode("div", { class: "ajak-sahabat-info__bottom" }, [
  /*#__PURE__*/vue.createElementVNode("p", null, [
    /*#__PURE__*/vue.createElementVNode("img", {
      src: "/assets/images/ico-crown-yellow.svg",
      alt: ""
    }),
    /*#__PURE__*/vue.createTextVNode(" Kamu ada di peringkat 3.880.000! ")
  ]),
  /*#__PURE__*/vue.createElementVNode("a", { href: "./lihat-peringkat.html" }, "Lihat Peringkat")
], -1 /* HOISTED */);
const _hoisted_5$t = [
  _hoisted_2$V,
  _hoisted_3$L,
  _hoisted_4$y
];

function render$10(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$$, _hoisted_5$t))
}

script$10.render = render$10;
script$10.__file = "src/components/Chart/ChartMeter.vue";

var script$$ = {
  name: "k-chart-progress",
  props: {
    value: {
      type: Number,
      default: function () {
        return 20;
      },
    },
  },
};

const _hoisted_1$_ = { class: "progress" };
const _hoisted_2$U = ["aria-valuenow"];

function render$$(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$_, [
    vue.createElementVNode("div", {
      class: "progress-bar",
      style: vue.normalizeStyle(`width: ${$props.value}%`),
      role: "progressbar",
      "aria-valuenow": $props.value,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }, null, 12 /* STYLE, PROPS */, _hoisted_2$U)
  ]))
}

script$$.render = render$$;
script$$.__file = "src/components/Chart/ChartProgress.vue";

var script$_ = {
  name: "k-card-account",
  props: {
    type: {
      type: String,
      default: "green",
      Validator: function (value) {
        return ["green", "red", "blue", "white"].indexOf(value) !== -1;
      },
    },
    saldoLabel: {
      type: String,
      default: "Saldo Efektif",
    },
    saldoValue: {
      type: String,
      default: "250, 1234",
    },
    cardNo: {
      type: String,
      default: "",
    },
    holder: {
      type: String,
      default: "UPC Pasar Mencos",
    },
  },
};

const _hoisted_1$Z = { class: "mb-4" };
const _hoisted_2$T = { id: "no-rek-utama" };
const _hoisted_3$K = /*#__PURE__*/vue.createElementVNode("img", {
  src: "/assets/images/ico-emas-black.svg",
  alt: ""
}, null, -1 /* HOISTED */);

function render$_(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createElementVNode("div", _hoisted_1$Z, [
      vue.createElementVNode("div", {
        class: vue.normalizeClass('card-account' + ($props.type ? '-' + $props.type : ''))
      }, [
        vue.createElementVNode("span", null, vue.toDisplayString($props.saldoLabel), 1 /* TEXT */),
        vue.createElementVNode("h4", null, vue.toDisplayString($props.saldoValue) + " gram", 1 /* TEXT */),
        vue.createElementVNode("p", _hoisted_2$T, vue.toDisplayString($props.cardNo), 1 /* TEXT */),
        vue.createElementVNode("span", null, vue.toDisplayString($props.holder), 1 /* TEXT */),
        _hoisted_3$K
      ], 2 /* CLASS */)
    ]),
    vue.createCommentVNode(" <div class=\"card-account-green\">\n    <span>Saldo G-Cash</span>\n    <h4>Rp 500.000</h4>\n\n    <p id=\"no-rek-utama\">{{ cardNo }}</p>\n\n    <img\n      src=\"https://dl.dropboxusercontent.com/s/nkv1p594ku3ph8b/logo-bank-bni-white.png\"\n      alt=\"\"\n    />\n  </div> ")
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$_.render = render$_;
script$_.__file = "src/components/Card/CardAccount.vue";

var script$Z = {
  name: "k-card-article",
  props: {
    image: {
      type: String,
      default:
        "/assets/images/image13.png",
    },
    label: {
      type: String,
      default: "Pengumuman Seleksi",
    },
    title: {
      type: String,
      default: "Management Development Program (MDP) Batch 4",
    },
    created: {
      type: String,
      default: "20 Agustus 2021",
    },
    action: Function,
  },
};

const _hoisted_1$Y = {
  href: "#",
  class: "card-article"
};
const _hoisted_2$S = { class: "card-article-wrapper" };
const _hoisted_3$J = { class: "card-article-banner" };
const _hoisted_4$x = ["src"];
const _hoisted_5$s = { class: "card-article-body" };
const _hoisted_6$m = { class: "label" };
const _hoisted_7$l = { class: "title" };
const _hoisted_8$h = { class: "time" };
const _hoisted_9$f = /*#__PURE__*/vue.createElementVNode("i", { class: "icon-clock" }, null, -1 /* HOISTED */);

function render$Z(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("a", _hoisted_1$Y, [
    vue.createElementVNode("div", _hoisted_2$S, [
      vue.createElementVNode("div", _hoisted_3$J, [
        vue.createElementVNode("img", {
          src: $props.image,
          alt: "banner-article"
        }, null, 8 /* PROPS */, _hoisted_4$x)
      ]),
      vue.createElementVNode("div", _hoisted_5$s, [
        vue.createElementVNode("label", _hoisted_6$m, vue.toDisplayString($props.label), 1 /* TEXT */),
        vue.createElementVNode("h4", _hoisted_7$l, vue.toDisplayString($props.title), 1 /* TEXT */),
        vue.createElementVNode("label", _hoisted_8$h, [
          _hoisted_9$f,
          vue.createTextVNode(" " + vue.toDisplayString($props.created), 1 /* TEXT */)
        ])
      ])
    ])
  ]))
}

script$Z.render = render$Z;
script$Z.__file = "src/components/Card/CardArticle.vue";

var script$Y = {
  name: "k-card-article-highlight",
  props: {
    items: {
      type: Array,
      default: function () {
        return [
          {
            title: "Cara Jualan Online Selama Bulan Ramadan",
            label: "Inspirasi",
            tag: "Inspirasi",
            name: "name_1",
            date: "16 December 2020",
          },
          {
            title: "Ide Jualan Online Selama Bulan Ramadan",
            label: "Inspirasi",
            tag: "Inspirasi",
            name: "name_2",
            date: "16 December 2020",
          },
        ];
      },
      name: {
        type: String,
      },
      label: {
        type: String,
      },
      title: {
        type: String,
      },
      date: {
        type: String,
      },
      tag: {
        type: String,
      },
      action: {
        type: Function,
      },
    },
  },
};

const _hoisted_1$X = { class: "artikel-category" };
const _hoisted_2$R = { class: "artikel-category__top" };
const _hoisted_3$I = /*#__PURE__*/vue.createElementVNode("div", { class: "img-overlay" }, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "/assets/images/banner-artikel7.png",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_4$w = { class: "content-item" };
const _hoisted_5$r = { class: "content-item__tag bg-primary" };
const _hoisted_6$l = { class: "content-item__title" };
const _hoisted_7$k = { class: "content-item__date" };
const _hoisted_8$g = /*#__PURE__*/vue.createElementVNode("img", {
  src: "/assets/images/clock.svg",
  alt: ""
}, null, -1 /* HOISTED */);

function render$Y(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("section", _hoisted_1$X, [
    vue.createElementVNode("div", _hoisted_2$R, [
      vue.createCommentVNode(" <a href=\"\" class=\"card-list\">\n        <div class=\"img-overlay\">\n          <img\n            src=\"https://dl.dropboxusercontent.com/s/iqlg9xxgjiz884x/banner-artikel7.png\"\n            alt=\"\"\n          />\n        </div>\n        <div class=\"content-item\">\n          <div class=\"content-item__tag bg-primary\">Inspirasi</div>\n          <h2 class=\"content-item__title\">\n            Cara Jualan Online Selama Bulan Ramadan\n          </h2>\n          <div class=\"content-item__date\">\n            <img\n              src=\"https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg\"\n              alt=\"\"\n            />\n            <span>16 December 2020</span>\n          </div>\n        </div>\n      </a> "),
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
        return (vue.openBlock(), vue.createElementBlock("a", {
          key: index,
          href: "",
          class: "card-list"
        }, [
          _hoisted_3$I,
          vue.createElementVNode("div", _hoisted_4$w, [
            vue.createElementVNode("div", _hoisted_5$r, vue.toDisplayString(item.label), 1 /* TEXT */),
            vue.createElementVNode("h2", _hoisted_6$l, vue.toDisplayString(item.title), 1 /* TEXT */),
            vue.createElementVNode("div", _hoisted_7$k, [
              _hoisted_8$g,
              vue.createElementVNode("span", null, vue.toDisplayString(item.date), 1 /* TEXT */)
            ])
          ])
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    vue.createCommentVNode(" <div class=\"artikel-category__bottom\">\n      <div class=\"list-artikel\">\n        <div class=\"list-artikel__box\">\n          <a href=\"\" class=\"card-list card-list-lg\">\n            <div class=\"img-overlay\">\n              <img\n                src=\"https://dl.dropboxusercontent.com/s/iqlg9xxgjiz884x/banner-artikel7.png\"\n                alt=\"\"\n              />\n            </div>\n            <div class=\"content-item\">\n              <div class=\"content-item__tag bg-primary\">Inspirasi</div>\n              <h2 class=\"content-item__title\">\n                Cara Jualan Online Selama Bulan Ramadan\n              </h2>\n              <div class=\"content-item__date\">\n                <img\n                  src=\"https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg\"\n                  alt=\"\"\n                />\n                <span>16 December 2020</span>\n              </div>\n            </div>\n          </a>\n          <a href=\"\" class=\"card-list\">\n            <div class=\"img-overlay\">\n              <img\n                src=\"https://dl.dropboxusercontent.com/s/iqlg9xxgjiz884x/banner-artikel7.png\"\n                alt=\"\"\n              />\n            </div>\n            <div class=\"content-item\">\n              <div class=\"content-item__tag bg-primary\">Inspirasi</div>\n              <h2 class=\"content-item__title\">\n                Cara Jualan Online Selama Bulan Ramadan\n              </h2>\n              <div class=\"content-item__date\">\n                <img\n                  src=\"https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg\"\n                  alt=\"\"\n                />\n                <span>16 December 2020</span>\n              </div>\n            </div>\n          </a>\n          <a href=\"\" class=\"card-list\">\n            <div class=\"img-overlay\">\n              <img\n                src=\"https://dl.dropboxusercontent.com/s/iqlg9xxgjiz884x/banner-artikel7.png\"\n                alt=\"\"\n              />\n            </div>\n            <div class=\"content-item\">\n              <div class=\"content-item__tag bg-primary\">Inspirasi</div>\n              <h2 class=\"content-item__title\">\n                Cara Jualan Online Selama Bulan Ramadan\n              </h2>\n              <div class=\"content-item__date\">\n                <img\n                  src=\"https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg\"\n                  alt=\"\"\n                />\n                <span>16 December 2020</span>\n              </div>\n            </div>\n          </a>\n          <a href=\"\" class=\"card-list\">\n            <div class=\"img-overlay\">\n              <img\n                src=\"https://dl.dropboxusercontent.com/s/iqlg9xxgjiz884x/banner-artikel7.png\"\n                alt=\"\"\n              />\n            </div>\n            <div class=\"content-item\">\n              <div class=\"content-item__tag bg-primary\">Inspirasi</div>\n              <h2 class=\"content-item__title\">\n                Cara Jualan Online Selama Bulan Ramadan\n              </h2>\n              <div class=\"content-item__date\">\n                <img\n                  src=\"https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg\"\n                  alt=\"\"\n                />\n                <span>16 December 2020</span>\n              </div>\n            </div>\n          </a>\n        </div>\n      </div>\n    </div> ")
  ]))
}

script$Y.render = render$Y;
script$Y.__file = "src/components/Card/CardArticleHighlight.vue";

var script$X = {
  name: "k-card-content",
  props: {
    icon: {
      type: String,
      default:
        "/assets/images/icon-karir.svg",
    },
    title: {
      type: String,
      default: "title-default",
    },
    body: {
      type: String,
      default: `Bangun perekonomian masyarakat Indonesia melalui kemampuanmu bersama
        Pegadaian. Indonesia melalui kemampuanmu`,
    },
  },
};

const _hoisted_1$W = {
  href: "#",
  class: "card-content",
  target: "blank"
};
const _hoisted_2$Q = { class: "card-content-wrapper" };
const _hoisted_3$H = ["src"];
const _hoisted_4$v = { class: "title" };
const _hoisted_5$q = { class: "subtitle" };

function render$X(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("a", _hoisted_1$W, [
    vue.createElementVNode("div", _hoisted_2$Q, [
      vue.createElementVNode("img", {
        src: $props.icon,
        class: "icon"
      }, null, 8 /* PROPS */, _hoisted_3$H),
      vue.createElementVNode("h4", _hoisted_4$v, vue.toDisplayString($props.title), 1 /* TEXT */),
      vue.createElementVNode("p", _hoisted_5$q, vue.toDisplayString($props.body), 1 /* TEXT */)
    ])
  ]))
}

script$X.render = render$X;
script$X.__file = "src/components/Card/CardContent.vue";

var script$W = {
  name: "k-card-event",
  props: {
    title: {
      type: String,
      default: "Acara Badai Emas",
    },
    description: {
      type: String,
      default: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.`,
    },
    image: {
      type: String,
      default:
        "/assets/images/img-acara.png",
    },
    date: {
      type: String,
      default: "22 Desember 2021",
    },
    time: {
      type: String,
      default: "19:00 WIB",
    },
    location: {
      type: String,
      default: "Zoom Meeting",
    },
    step: {
      type: String,
      default: `1 .Kode promo RENCANAEMAS digunakan untuk transaksi buka Tabungan
          Emas.<br />
          2. Diskon sebesar 40%, maksimal Rp20.000.<br />
          3. Minimal transaksi Rp50.000,-<br />
          4. Kode promo bisa digunakan pada Outlet Pegadaian, aplikasi Pegadaian
          Digital, dan aplikasi Pegadaian Syariah Digital.<br />
          5. Masa aktif kode promo berakhir pada 30 April 2021.`,
    },
    label: {
      type: String,
      default: "Registrasi Acara",
    },
    action: {
      type: Function,
      default: function () {
        return "/action";
      },
    },
  },
};

const _hoisted_1$V = { class: "card-acara" };
const _hoisted_2$P = { class: "card-acara__top" };
const _hoisted_3$G = ["src"];
const _hoisted_4$u = { class: "card-acara__bottom" };
const _hoisted_5$p = { class: "sum-acara" };
const _hoisted_6$k = { class: "info-acara" };
const _hoisted_7$j = { class: "info-acara__box" };
const _hoisted_8$f = /*#__PURE__*/vue.createElementVNode("h6", null, "Tanggal", -1 /* HOISTED */);
const _hoisted_9$e = { class: "info-acara__box" };
const _hoisted_10$e = /*#__PURE__*/vue.createElementVNode("h6", null, "Waktu", -1 /* HOISTED */);
const _hoisted_11$a = { class: "info-acara__box" };
const _hoisted_12$a = /*#__PURE__*/vue.createElementVNode("h6", null, "Tempat", -1 /* HOISTED */);
const _hoisted_13$b = { class: "guide-acara" };
const _hoisted_14$b = /*#__PURE__*/vue.createElementVNode("span", null, "Cara Registrasi:", -1 /* HOISTED */);
const _hoisted_15$b = ["innerHTML"];
const _hoisted_16$a = ["href"];

function render$W(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$V, [
    vue.createElementVNode("div", _hoisted_2$P, [
      vue.createElementVNode("img", {
        src: $props.image,
        alt: ""
      }, null, 8 /* PROPS */, _hoisted_3$G)
    ]),
    vue.createElementVNode("div", _hoisted_4$u, [
      vue.createElementVNode("div", _hoisted_5$p, [
        vue.createElementVNode("h5", null, vue.toDisplayString($props.title), 1 /* TEXT */),
        vue.createElementVNode("p", null, vue.toDisplayString($props.description), 1 /* TEXT */)
      ]),
      vue.createElementVNode("div", _hoisted_6$k, [
        vue.createElementVNode("div", _hoisted_7$j, [
          _hoisted_8$f,
          vue.createElementVNode("p", null, vue.toDisplayString($props.date), 1 /* TEXT */)
        ]),
        vue.createElementVNode("div", _hoisted_9$e, [
          _hoisted_10$e,
          vue.createElementVNode("p", null, vue.toDisplayString($props.time), 1 /* TEXT */)
        ]),
        vue.createElementVNode("div", _hoisted_11$a, [
          _hoisted_12$a,
          vue.createElementVNode("p", null, vue.toDisplayString($props.location), 1 /* TEXT */)
        ])
      ]),
      vue.createElementVNode("div", _hoisted_13$b, [
        _hoisted_14$b,
        vue.createElementVNode("p", null, [
          vue.createElementVNode("span", { innerHTML: $props.step }, null, 8 /* PROPS */, _hoisted_15$b)
        ])
      ]),
      vue.createElementVNode("a", {
        href: $props.action,
        class: "btn btn-primary"
      }, vue.toDisplayString($props.label), 9 /* TEXT, PROPS */, _hoisted_16$a)
    ])
  ]))
}

script$W.render = render$W;
script$W.__file = "src/components/Card/CardEvent.vue";

var script$V = {
  name: "k-card-file",
  props: {
    image: {
      type: String,
      default:
        "/assets/images/ebook2.png",
    },
    subtitle: {
      type: String,
      default: "Subtitle",
    },
    title: {
      type: String,
      default: "Title",
    },
    label: {
      type: String,
      default: "Button",
    },
    action: Function,
  },
};

const _hoisted_1$U = { class: "p-5" };
const _hoisted_2$O = { class: "card-file" };
const _hoisted_3$F = { class: "card-file-item" };
const _hoisted_4$t = { class: "card-file-item-header" };
const _hoisted_5$o = ["src"];
const _hoisted_6$j = { class: "card-file-item-body" };
const _hoisted_7$i = { class: "title-card-file" };
const _hoisted_8$e = { class: "subtitle-card-file" };
const _hoisted_9$d = { class: "btn btn-outline-primary" };

function render$V(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$U, [
    vue.createElementVNode("div", _hoisted_2$O, [
      vue.createElementVNode("div", _hoisted_3$F, [
        vue.createElementVNode("div", _hoisted_4$t, [
          vue.createElementVNode("img", {
            src: $props.image,
            alt: "banner-file"
          }, null, 8 /* PROPS */, _hoisted_5$o)
        ]),
        vue.createElementVNode("div", _hoisted_6$j, [
          vue.createElementVNode("h1", _hoisted_7$i, vue.toDisplayString($props.title), 1 /* TEXT */),
          vue.createElementVNode("p", _hoisted_8$e, vue.toDisplayString($props.subtitle), 1 /* TEXT */),
          vue.createElementVNode("button", _hoisted_9$d, vue.toDisplayString($props.label), 1 /* TEXT */)
        ])
      ])
    ])
  ]))
}

script$V.render = render$V;
script$V.__file = "src/components/Card/CardFile.vue";

var script$U = {
  name: "k-card-product",
  props: {
    // init
    action: {
      type: String,
      default: "./produk-gadai-efek.html",
    },
    icon: {
      type: String,
      default:
        "/assets/images/pegadaian-ico.svg",
    },
    title: {
      type: String,
      default: "Gadai Efek",
    },
    label: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default:
        "/assets/images/product-card.png",
    },
    body: {
      type: String,
      default: `Penuhi kebutuhan di luar dugaan dengan cepat dengan gadai emas
          batangan maupun perhiasan...`,
    },
    syariah: {
      type: Boolean,
      default: false,
    },
  },
};

const _hoisted_1$T = { class: "card-produk" };
const _hoisted_2$N = ["href"];
const _hoisted_3$E = { class: "card-produk__top" };
const _hoisted_4$s = ["src"];
const _hoisted_5$n = { class: "card-produk__bottom" };
const _hoisted_6$i = { class: "icon-box" };
const _hoisted_7$h = ["src"];
const _hoisted_8$d = { class: "status-box" };
const _hoisted_9$c = /*#__PURE__*/vue.createElementVNode("div", { class: "pgd-status-blue" }, "Konvesional", -1 /* HOISTED */);
const _hoisted_10$d = {
  key: 0,
  class: "pgd-status"
};

function render$U(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$T, [
    vue.createElementVNode("a", { href: $props.action }, [
      vue.createElementVNode("div", _hoisted_3$E, [
        vue.createElementVNode("img", {
          src: $props.image,
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_4$s)
      ]),
      vue.createElementVNode("div", _hoisted_5$n, [
        vue.createElementVNode("div", _hoisted_6$i, [
          vue.createElementVNode("img", {
            src: $props.icon,
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_7$h)
        ]),
        vue.createElementVNode("div", _hoisted_8$d, [
          _hoisted_9$c,
          ($props.syariah)
            ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_10$d, "Syariah"))
            : vue.createCommentVNode("v-if", true)
        ]),
        vue.createElementVNode("h5", null, vue.toDisplayString($props.title), 1 /* TEXT */),
        vue.createElementVNode("p", null, vue.toDisplayString($props.body), 1 /* TEXT */)
      ])
    ], 8 /* PROPS */, _hoisted_2$N)
  ]))
}

script$U.render = render$U;
script$U.__file = "src/components/Card/CardProduct.vue";

var script$T = {
  name: "k-card-product-konvensional",
  props: {},
};

const _hoisted_1$S = { class: "card-produk" };
const _hoisted_2$M = /*#__PURE__*/vue.createStaticVNode("<a href=\"./produk-gadai-efek.html\"><div class=\"card-produk__top\"><img src=\"/assets/images/product-card.png\" alt=\"\"></div><div class=\"card-produk__bottom\"><div class=\"icon-box\"><img src=\"/assets/images/pegadaian-ico.svg\" alt=\"\"></div><div class=\"status-box\"><div class=\"pgd-status\">Konvesional</div><div class=\"pgd-status-blue\">Syariah</div></div><h5>Gadai Efek</h5><p> Penuhi kebutuhan di luar dugaan dengan cepat dengan gadai emas batangan maupun perhiasan... </p></div></a>", 1);
const _hoisted_3$D = [
  _hoisted_2$M
];

function render$T(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$S, _hoisted_3$D))
}

script$T.render = render$T;
script$T.__file = "src/components/Card/CardProductKonvensional.vue";

var script$S = {
  name: "k-card-product-syariah",
  props: {},
};

const _hoisted_1$R = { class: "card-produk" };
const _hoisted_2$L = /*#__PURE__*/vue.createStaticVNode("<div class=\"syariah\"><a href=\"./produk-gadai-efek.html\"><div class=\"card-produk__top\"><img src=\"/assets/images/product-card.png\" alt=\"\"></div></a></div><div class=\"card-produk__bottom\"><div class=\"icon-box\"><img src=\"/assets/images/pegadaian-ico.svg\" alt=\"\"></div><div class=\"status-box\"><div class=\"pgd-status\">Syariah</div></div><h5>Gadai Efek</h5><p> Penuhi kebutuhan di luar dugaan dengan cepat dengan gadai emas batangan maupun perhiasan... </p></div>", 2);
const _hoisted_4$r = [
  _hoisted_2$L
];

function render$S(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$R, _hoisted_4$r))
}

script$S.render = render$S;
script$S.__file = "src/components/Card/CardProductSyariah.vue";

var script$R = {
  name: "k-card-promo",
  props: {
    title: {
      type: String,
      default: "Diskon 40% Buka Tabungan Emas di Pegadaian",
    },
    description: {
      type: String,
      default: "",
    },
    period: {
      type: String,
      default: "01 April – 31 Juli 2021",
    },
    countDownLabel: {
      type: String,
      default: "108 Hari lagi",
    },
    promoCode: {
      type: String,
      default: "RENCANAEMAS",
    },
    label: {
      type: String,
      default: "",
    },
    action: {
      type: Function,
      default: function (value = "action") {
        return (window.location.href = `http://localhost/${value}`);
      },
    },
    guideSteps: {
      type: [Array, Object],
    },
  },
  data() {
    return {
      steps: this.guideSteps || [
        "Kode promo RENCANAEMAS digunakan untuk transaksi buka Tabungan Emas.",
        "Diskon sebesar 40%, maksimal Rp20.000.",
        "Minimal transaksi Rp50.000,-",
        "Kode promo bisa digunakan pada Outlet Pegadaian, aplikasi Pegadaian Digital, dan aplikasi Pegadaian Syariah Digital.",
        "Masa aktif kode promo berakhir pada 30 April 2021.",
      ],
    };
  },
  methods: {
    chunk(arr, size) {
      return arr.reduce(
        (acc, e, i) => (
          i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc
        ),
        []
      );
    },
  },
};

const _hoisted_1$Q = { class: "card-promo" };
const _hoisted_2$K = /*#__PURE__*/vue.createElementVNode("div", { class: "card-promo__top" }, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "/assets/images/img-promo.png",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_3$C = { class: "card-promo__bottom" };
const _hoisted_4$q = { class: "promo-title-box" };
const _hoisted_5$m = { class: "slug-box" };
const _hoisted_6$h = { class: "pgd-status" };
const _hoisted_7$g = { class: "slug-box__date" };
const _hoisted_8$c = { class: "promo-code-box" };
const _hoisted_9$b = /*#__PURE__*/vue.createElementVNode("div", { class: "promo-code-box__top" }, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "/assets/images/coupon.png",
    alt: ""
  }),
  /*#__PURE__*/vue.createElementVNode("h5", null, "Kode Promo")
], -1 /* HOISTED */);
const _hoisted_10$c = { class: "promo-code-box__bottom" };
const _hoisted_11$9 = { id: "code1" };
const _hoisted_12$9 = /*#__PURE__*/vue.createElementVNode("button", {
  class: "btn-tertiary copyPromo1",
  onclick: "copyPromo('#code1');showToast('1'); "
}, " Salin ", -1 /* HOISTED */);
const _hoisted_13$a = /*#__PURE__*/vue.createElementVNode("div", {
  id: "1",
  class: "toast-promo bg-primary"
}, [
  /*#__PURE__*/vue.createElementVNode("span", null, "Kode Promo berhasil disalin"),
  /*#__PURE__*/vue.createElementVNode("button", {
    class: "btn-tertiary",
    onclick: "$('#1').hide()"
  }, [
    /*#__PURE__*/vue.createElementVNode("img", {
      src: "/assets/images/close-white.svg",
      alt: ""
    })
  ])
], -1 /* HOISTED */);
const _hoisted_14$a = { class: "promo-guide" };
const _hoisted_15$a = /*#__PURE__*/vue.createElementVNode("li", null, "Diskon sebesar 40%, maksimal Rp20.000.", -1 /* HOISTED */);
const _hoisted_16$9 = /*#__PURE__*/vue.createElementVNode("li", null, "Minimal transaksi Rp50.000,-", -1 /* HOISTED */);
const _hoisted_17$8 = /*#__PURE__*/vue.createElementVNode("li", null, " Kode promo bisa digunakan pada Outlet Pegadaian, aplikasi Pegadaian Digital, dan aplikasi Pegadaian Syariah Digital. ", -1 /* HOISTED */);
const _hoisted_18$8 = /*#__PURE__*/vue.createElementVNode("li", null, "Masa aktif kode promo berakhir pada 30 April 2021.", -1 /* HOISTED */);
const _hoisted_19$8 = {
  class: "more-guide",
  id: "guide1"
};
const _hoisted_20$8 = /*#__PURE__*/vue.createElementVNode("li", null, "Diskon sebesar 40%, maksimal Rp20.000.", -1 /* HOISTED */);
const _hoisted_21$8 = /*#__PURE__*/vue.createElementVNode("li", null, "Minimal transaksi Rp50.000,-", -1 /* HOISTED */);
const _hoisted_22$8 = /*#__PURE__*/vue.createElementVNode("li", null, " Kode promo bisa digunakan pada Outlet Pegadaian, aplikasi Pegadaian Digital, dan aplikasi Pegadaian Syariah Digital. ", -1 /* HOISTED */);
const _hoisted_23$7 = /*#__PURE__*/vue.createElementVNode("li", null, "Masa aktif kode promo berakhir pada 30 April 2021.", -1 /* HOISTED */);
const _hoisted_24$6 = /*#__PURE__*/vue.createElementVNode("button", {
  id: "btn-open1",
  class: "btn-tertiary",
  onclick: "openGuide('1')"
}, " Baca Selengkapnya ", -1 /* HOISTED */);

function render$R(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$Q, [
    _hoisted_2$K,
    vue.createElementVNode("div", _hoisted_3$C, [
      vue.createElementVNode("div", _hoisted_4$q, [
        vue.createElementVNode("div", _hoisted_5$m, [
          vue.createElementVNode("div", _hoisted_6$h, vue.toDisplayString($props.countDownLabel), 1 /* TEXT */),
          vue.createElementVNode("div", _hoisted_7$g, vue.toDisplayString(_ctx.periode), 1 /* TEXT */)
        ]),
        vue.createElementVNode("h4", null, vue.toDisplayString($props.title), 1 /* TEXT */)
      ]),
      vue.createElementVNode("div", _hoisted_8$c, [
        _hoisted_9$b,
        vue.createElementVNode("div", _hoisted_10$c, [
          vue.createElementVNode("h2", _hoisted_11$9, vue.toDisplayString($props.promoCode), 1 /* TEXT */),
          _hoisted_12$9,
          _hoisted_13$a
        ])
      ]),
      vue.createElementVNode("div", _hoisted_14$a, [
        vue.createElementVNode("ol", null, [
          vue.createElementVNode("li", null, " Kode promo " + vue.toDisplayString($props.promoCode) + " digunakan untuk transaksi buka Tabungan Emas. ", 1 /* TEXT */),
          _hoisted_15$a,
          _hoisted_16$9,
          _hoisted_17$8,
          _hoisted_18$8
        ]),
        vue.createElementVNode("div", _hoisted_19$8, [
          vue.createElementVNode("span", null, "Cara menggunakan Promo " + vue.toDisplayString($props.promoCode) + " di aplikasi Pegadaian Digital:", 1 /* TEXT */),
          vue.createElementVNode("ol", null, [
            vue.createElementVNode("li", null, " Kode promo " + vue.toDisplayString($props.promoCode) + " digunakan untuk transaksi buka Tabungan Emas. ", 1 /* TEXT */),
            _hoisted_20$8,
            _hoisted_21$8,
            _hoisted_22$8,
            _hoisted_23$7
          ])
        ])
      ]),
      _hoisted_24$6
    ])
  ]))
}

script$R.render = render$R;
script$R.__file = "src/components/Card/CardPromo.vue";

var script$Q = {
  name: "k-card-promo-code-1",
  props: {
    label: {
      type: String,
      default: "Diskon buka tabungan emas Rp 30.000 untuk pengguna pertama.",
    },
    code: {
      type: String,
      default: "MULAIMENABUNG",
    },
    action: Function,
  },
};

const _hoisted_1$P = { class: "pgd-carousel-get-promo__item" };
const _hoisted_2$J = { class: "content-top" };
const _hoisted_3$B = /*#__PURE__*/vue.createElementVNode("div", { class: "content-bottom" }, [
  /*#__PURE__*/vue.createElementVNode("p", null, "Gunakan")
], -1 /* HOISTED */);

function render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$P, [
    vue.createElementVNode("div", _hoisted_2$J, [
      vue.createElementVNode("h5", null, vue.toDisplayString($props.label), 1 /* TEXT */),
      vue.createElementVNode("p", null, vue.toDisplayString($props.code), 1 /* TEXT */)
    ]),
    _hoisted_3$B
  ]))
}

script$Q.render = render$Q;
script$Q.__file = "src/components/Card/CardPromoCode1.vue";

var script$P = {
  name: "k-card-promo-code-2",
  props: {
    label: {
      type: String,
      default: "Gunakan Kode Promo",
    },
    action: Function,
  },
};

const _hoisted_1$O = {
  href: "",
  class: "box-promo btn-box-promo"
};
const _hoisted_2$I = /*#__PURE__*/vue.createElementVNode("div", { class: "icon" }, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "/assets/images/coupon-ico.svg",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_3$A = { class: "btn-box-promo__text" };

function render$P(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("a", _hoisted_1$O, [
    _hoisted_2$I,
    vue.createElementVNode("div", _hoisted_3$A, [
      vue.createElementVNode("p", null, vue.toDisplayString($props.label), 1 /* TEXT */)
    ])
  ]))
}

script$P.render = render$P;
script$P.__file = "src/components/Card/CardPromoCode2.vue";

var script$O = {
  name: "k-card-promo-code-3",
  props: {
    code: {
      type: String,
      default: "MULAINABUNG",
    },
    label: {
      type: String,
      default: "Gunakan Kode Promo",
    },
    action: Function,
  },
};

const _hoisted_1$N = { class: "box-promo btn-box-promo" };
const _hoisted_2$H = /*#__PURE__*/vue.createElementVNode("div", { class: "icon" }, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "/assets/images/coupon-ico.svg",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_3$z = { class: "btn-box-promo__text" };
const _hoisted_4$p = /*#__PURE__*/vue.createElementVNode("a", { class: "btn-tertiary delete-promo" }, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "/assets/images/close.svg",
    alt: ""
  })
], -1 /* HOISTED */);

function render$O(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$N, [
    _hoisted_2$H,
    vue.createElementVNode("div", _hoisted_3$z, [
      vue.createElementVNode("h5", null, vue.toDisplayString($props.code), 1 /* TEXT */),
      vue.createElementVNode("p", null, vue.toDisplayString($props.label), 1 /* TEXT */)
    ]),
    _hoisted_4$p
  ]))
}

script$O.render = render$O;
script$O.__file = "src/components/Card/CardPromoCode3.vue";

var script$N = {
  name: "k-card-voucher",
  props: {
    image: {
      type: String,
      default:
        "/assets/images/voucher-active.png",
    },
    title: {
      type: String,
      default: "Diskon Beli Emas hingga Rp 300.000",
    },
    subtitle: {
      type: String,
      default: "Berlaku hingga 31 Okt 2020",
    },
    target: {
      type: String,
      default: "./promo-detail.html",
    },
    linkText: {
      type: String,
      default: "",
    },
  },
};

const _hoisted_1$M = { class: "card-voucher" };
const _hoisted_2$G = { class: "card-voucher__top" };
const _hoisted_3$y = ["src"];
const _hoisted_4$o = { class: "card-voucher__bottom" };
const _hoisted_5$l = ["href"];
const _hoisted_6$g = { class: "voucher-period" };
const _hoisted_7$f = { class: "voucher-period__desc" };
const _hoisted_8$b = /*#__PURE__*/vue.createElementVNode("img", {
  src: "/assets/images/clock.svg",
  alt: ""
}, null, -1 /* HOISTED */);
const _hoisted_9$a = ["href"];
const _hoisted_10$b = /*#__PURE__*/vue.createElementVNode("h5", null, "Gunakan", -1 /* HOISTED */);
const _hoisted_11$8 = [
  _hoisted_10$b
];

function render$N(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$M, [
    vue.createElementVNode("div", _hoisted_2$G, [
      vue.createElementVNode("img", {
        src: $props.image,
        alt: ""
      }, null, 8 /* PROPS */, _hoisted_3$y)
    ]),
    vue.createElementVNode("div", _hoisted_4$o, [
      vue.createElementVNode("a", { href: $props.target }, vue.toDisplayString($props.title), 9 /* TEXT, PROPS */, _hoisted_5$l),
      vue.createElementVNode("div", _hoisted_6$g, [
        vue.createElementVNode("div", _hoisted_7$f, [
          _hoisted_8$b,
          vue.createElementVNode("span", null, vue.toDisplayString($props.subtitle), 1 /* TEXT */)
        ]),
        vue.createElementVNode("a", { href: $props.linkText }, _hoisted_11$8, 8 /* PROPS */, _hoisted_9$a)
      ])
    ])
  ]))
}

script$N.render = render$N;
script$N.__file = "src/components/Card/CardVoucher.vue";

var script$M = {
  name: "k-dropdown-icon-text-lg",
  props: {
    placeholder: {
      type: String,
      default: "Pilih Rekening Bank",
    },
    value: {
      type: [String, Number],
      default: "Thoriq Sadad",
    },
    // icon ceklist src="https://dl.dropboxusercontent.com/s/6bfvnm1yap7qvi3/icon-checklist.svg"
    options: {
      type: Array,
      default: function () {
        return [
          {
            title: "G-Cash",
            items: [
              {
                label: "G-Cash BNI",
                value: "2980 8131 6069 555",
                icon: "/assets/images/logo-gcash-bni.png",
              },
              {
                label: "G-Cash BRI",
                value: "8438 8131 6069 555",
                icon: "/assets/images/logo-gcash-bri.png",
              },
            ],
          },
          {
            title: "Bank",
            items: [
              {
                value: "4516 7859 1241 232",
                label: "Bank BCA",
                icon: "/assets/images/logo-bank-bca.png",
              },
              {
                value: "4516 7859 1241 232",
                label: "Bank BNI",
                icon: "/assets/images/logo-bank-bni.png",
              },
              {
                value: "4516 7859 1241 232",
                label: "Bank BRI",
                icon: "/assets/images/logo-bank-bri.png",
              },
              {
                value: "4516 7859 1241 232",
                label: "Bank MANDIRI",
                icon: "/assets/images/logo-bank-mandiri.png",
              },
            ],
          },
        ];
      },
    },
  },
};

const _hoisted_1$L = { class: "group-input" };
const _hoisted_2$F = {
  class: "accordion custom-accordion-input mobile-hide",
  id: "box-Bank2"
};
const _hoisted_3$x = { class: "accordion-item" };
const _hoisted_4$n = {
  class: "accordion-header",
  id: "headingOne"
};
const _hoisted_5$k = {
  class: "accordion-button collapsed",
  id: "pilih-Bank2",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#collapsePilihBank2",
  "aria-expanded": "false",
  "aria-controls": "collapsePilihBank2"
};
const _hoisted_6$f = { id: "getDefaultSelected2" };
const _hoisted_7$e = /*#__PURE__*/vue.createStaticVNode("<input type=\"text\" id=\"getBankVal2\" hidden required><div class=\"accordion-button__selected\" id=\"getRekening2\"><div class=\"accordion-button__selected-img\"><img src=\"\" id=\"getImg2\" alt=\"\"></div><div class=\"accordion-button__selected-detail selected-rekening-tujuan\"><h5 id=\"getText2\"></h5><p id=\"getNameText2\"></p><p id=\"getNo2\"></p></div></div>", 2);
const _hoisted_9$9 = {
  id: "collapsePilihBank2",
  class: "accordion-collapse collapse",
  "aria-labelledby": "headingOne",
  "data-bs-parent": "#box-Bank2"
};
const _hoisted_10$a = { class: "accordion-body" };
const _hoisted_11$7 = /*#__PURE__*/vue.createElementVNode("div", { class: "pgd-box-search-grey m-2" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "icon" }, [
    /*#__PURE__*/vue.createElementVNode("img", {
      src: "/assets/images/search-dark.svg",
      alt: ""
    })
  ]),
  /*#__PURE__*/vue.createElementVNode("input", {
    type: "search",
    placeholder: "Cari nama atau nomor rekening"
  })
], -1 /* HOISTED */);
const _hoisted_12$8 = { class: "box-search-rekening-tujuan" };
const _hoisted_13$9 = {
  class: "box-item__content",
  onclick: "BankSelected3(this, 'G-Cash BNI', '/assets/images/logo-gcash-bni.png', 'Thoriq Sadad ','2980 8131 6069 555')"
};
const _hoisted_14$9 = { class: "img-box" };
const _hoisted_15$9 = ["src"];
const _hoisted_16$8 = { class: "box-detail" };
const _hoisted_17$7 = /*#__PURE__*/vue.createElementVNode("img", {
  class: "ico-check ml-auto",
  src: "/assets/images/icon-checklist.svg",
  alt: ""
}, null, -1 /* HOISTED */);
const _hoisted_18$7 = /*#__PURE__*/vue.createElementVNode("div", { class: "line-divider" }, null, -1 /* HOISTED */);
const _hoisted_19$7 = /*#__PURE__*/vue.createElementVNode("input", {
  type: "hidden",
  id: "kreditMobileInput",
  name: "no-kredit"
}, null, -1 /* HOISTED */);
const _hoisted_20$7 = {
  type: "button",
  class: "btn-pilih-jangka",
  "data-bs-toggle": "modal",
  "data-bs-target": "#modal-select-rekening"
};
const _hoisted_21$7 = { class: "option-with-img" };
const _hoisted_22$7 = /*#__PURE__*/vue.createElementVNode("div", {
  class: "img-box",
  id: "kredit-img-box2"
}, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_23$6 = { class: "box-detail" };
const _hoisted_24$5 = {
  id: "kredit-mobile-text2",
  class: "btn-pilih-jangka__text"
};
const _hoisted_25$2 = /*#__PURE__*/vue.createElementVNode("span", { id: "kredit-mobile-span" }, null, -1 /* HOISTED */);
const _hoisted_26$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "" }, [
  /*#__PURE__*/vue.createElementVNode("span", { id: "kredit-mobile-span2" })
], -1 /* HOISTED */);
const _hoisted_27$1 = /*#__PURE__*/vue.createElementVNode("img", {
  src: "/assets/images/icon-down.svg",
  alt: ""
}, null, -1 /* HOISTED */);
const _hoisted_28$1 = { class: "section-overlay-modal-pds" };
const _hoisted_29$1 = {
  class: "modal fade",
  id: "modal-select-rekening",
  "data-bs-keyboard": "false",
  tabindex: "-1",
  "aria-labelledby": "staticBackdropLabel",
  "aria-hidden": "true"
};
const _hoisted_30 = { class: "modal-dialog modal-dialog-centered modal-change-password modal-select-option" };
const _hoisted_31 = { class: "modal-content" };
const _hoisted_32 = { class: "modal-header" };
const _hoisted_33 = {
  class: "modal-title",
  id: "staticBackdropLabel"
};
const _hoisted_34 = /*#__PURE__*/vue.createElementVNode("button", {
  type: "button",
  id: "close-modal",
  class: "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
}, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "/assets/images/close.svg",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_35 = { class: "modal-body container-nopadding-mobile" };
const _hoisted_36 = { class: "box-search-rekening-tujuan" };
const _hoisted_37 = /*#__PURE__*/vue.createElementVNode("div", { class: "pgd-box-search-grey" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "icon" }, [
    /*#__PURE__*/vue.createElementVNode("img", {
      src: "/assets/images/search-dark.svg",
      alt: ""
    })
  ]),
  /*#__PURE__*/vue.createElementVNode("input", {
    type: "search",
    placeholder: "Cari nama atau nomor rekening",
    name: "findsaham",
    id: "findsaham"
  })
], -1 /* HOISTED */);
const _hoisted_38 = {
  class: "box-item__content jenis-item",
  onclick: "pilihComboBox5('G-Cash BNI', 'Thoriq Sadad ',this,'2980 8131 6069 555', '/assets/images/logo-gcash-bni.png','kreditMobileInput', 'kredit-mobile-text2', 'jenis-item','kredit-mobile-span','kredit-mobile-span2','kredit-img-box2')",
  "data-bs-dismiss": "modal"
};
const _hoisted_39 = { class: "img-box" };
const _hoisted_40 = ["src"];
const _hoisted_41 = { class: "box-detail" };
const _hoisted_42 = /*#__PURE__*/vue.createElementVNode("img", {
  class: "ico-check ml-auto",
  src: "/assets/images/icon-checklist.svg",
  alt: ""
}, null, -1 /* HOISTED */);
const _hoisted_43 = /*#__PURE__*/vue.createElementVNode("div", { class: "line-divider" }, null, -1 /* HOISTED */);

function render$M(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createElementVNode("div", _hoisted_1$L, [
      vue.createElementVNode("div", _hoisted_2$F, [
        vue.createElementVNode("div", _hoisted_3$x, [
          vue.createElementVNode("h2", _hoisted_4$n, [
            vue.createElementVNode("button", _hoisted_5$k, [
              vue.createElementVNode("span", _hoisted_6$f, vue.toDisplayString($props.placeholder), 1 /* TEXT */),
              _hoisted_7$e
            ])
          ]),
          vue.createElementVNode("div", _hoisted_9$9, [
            vue.createElementVNode("div", _hoisted_10$a, [
              _hoisted_11$7,
              vue.createElementVNode("div", _hoisted_12$8, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (option, index) => {
                  return (vue.openBlock(), vue.createElementBlock("div", {
                    key: index,
                    class: "box-search-rekening-tujuan__top"
                  }, [
                    vue.createElementVNode("h6", null, vue.toDisplayString(option.title), 1 /* TEXT */),
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(option.items, (item, index) => {
                      return (vue.openBlock(), vue.createElementBlock("div", {
                        key: index,
                        class: "box-item"
                      }, [
                        vue.createElementVNode("div", _hoisted_13$9, [
                          vue.createElementVNode("div", _hoisted_14$9, [
                            vue.createElementVNode("img", {
                              src: item.icon,
                              alt: ""
                            }, null, 8 /* PROPS */, _hoisted_15$9)
                          ]),
                          vue.createElementVNode("div", _hoisted_16$8, [
                            vue.createElementVNode("h5", null, vue.toDisplayString(item.label), 1 /* TEXT */),
                            vue.createElementVNode("p", null, vue.toDisplayString($props.value), 1 /* TEXT */),
                            vue.createElementVNode("p", null, vue.toDisplayString(item.value), 1 /* TEXT */)
                          ]),
                          _hoisted_17$7
                        ])
                      ]))
                    }), 128 /* KEYED_FRAGMENT */))
                  ]))
                }), 128 /* KEYED_FRAGMENT */)),
                _hoisted_18$7
              ])
            ])
          ])
        ])
      ]),
      _hoisted_19$7,
      vue.createElementVNode("button", _hoisted_20$7, [
        vue.createElementVNode("div", _hoisted_21$7, [
          _hoisted_22$7,
          vue.createElementVNode("div", _hoisted_23$6, [
            vue.createElementVNode("h6", _hoisted_24$5, vue.toDisplayString($props.placeholder), 1 /* TEXT */),
            _hoisted_25$2,
            _hoisted_26$1
          ])
        ]),
        _hoisted_27$1
      ])
    ]),
    vue.createElementVNode("section", _hoisted_28$1, [
      vue.createElementVNode("div", _hoisted_29$1, [
        vue.createElementVNode("div", _hoisted_30, [
          vue.createElementVNode("div", _hoisted_31, [
            vue.createElementVNode("div", _hoisted_32, [
              vue.createElementVNode("h5", _hoisted_33, vue.toDisplayString($props.placeholder), 1 /* TEXT */),
              _hoisted_34
            ]),
            vue.createElementVNode("div", _hoisted_35, [
              vue.createElementVNode("div", _hoisted_36, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (option, index) => {
                  return (vue.openBlock(), vue.createElementBlock("div", {
                    key: index,
                    class: "box-search-rekening-tujuan__top"
                  }, [
                    _hoisted_37,
                    vue.createElementVNode("h6", null, vue.toDisplayString(option.title), 1 /* TEXT */),
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(option.items, (item, index) => {
                      return (vue.openBlock(), vue.createElementBlock("div", {
                        key: index,
                        class: "box-item"
                      }, [
                        vue.createElementVNode("div", _hoisted_38, [
                          vue.createElementVNode("div", _hoisted_39, [
                            vue.createElementVNode("img", {
                              src: item.icon,
                              alt: ""
                            }, null, 8 /* PROPS */, _hoisted_40)
                          ]),
                          vue.createElementVNode("div", _hoisted_41, [
                            vue.createElementVNode("h5", null, vue.toDisplayString(item.label), 1 /* TEXT */),
                            vue.createElementVNode("p", null, vue.toDisplayString($props.value), 1 /* TEXT */),
                            vue.createElementVNode("p", null, vue.toDisplayString(item.value), 1 /* TEXT */)
                          ]),
                          _hoisted_42
                        ])
                      ]))
                    }), 128 /* KEYED_FRAGMENT */))
                  ]))
                }), 128 /* KEYED_FRAGMENT */)),
                _hoisted_43
              ])
            ])
          ])
        ])
      ])
    ])
  ], 64 /* STABLE_FRAGMENT */))
}

script$M.render = render$M;
script$M.__file = "src/components/Dropdown/DropdownIconTextLg.vue";

var script$L = {
  name: "k-dropdown-icon-text-sm",
  props: {},
};

const _hoisted_1$K = /*#__PURE__*/vue.createElementVNode("div", { class: "group-input" }, [
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
              onclick: "rekeningSelected4('rekeningSendiri', '/assets/images/ico-tabungan.svg', '100,1234 gram', '1234 5678 9101 2345', this, 'pilih-nomor-kredit'), checkKredit('jenis-transaksi1', 'getrekeningEmasVal1')"
            }, [
              /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                /*#__PURE__*/vue.createElementVNode("img", {
                  src: "/assets/images/ico-tabungan.svg",
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
              onclick: "rekeningSelected4('rekeningSendiri', '/assets/images/ico-tabungan.svg', '200,1234 gram', '1234 5678 9101 2345', this, 'pilih-nomor-kredit'), checkKredit('jenis-transaksi1', 'getrekeningEmasVal1')"
            }, [
              /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                /*#__PURE__*/vue.createElementVNode("img", {
                  src: "/assets/images/ico-tabungan.svg",
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
              onclick: "rekeningSelected4('rekeningSendiri', '/assets/images/ico-tabungan.svg', '300,1234 gram', '1234 5678 9101 2345', this, 'pilih-nomor-kredit'), checkKredit('jenis-transaksi1', 'getrekeningEmasVal1')"
            }, [
              /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                /*#__PURE__*/vue.createElementVNode("img", {
                  src: "/assets/images/ico-tabungan.svg",
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
              onclick: "rekeningSelected4('rekeningSendiri', '/assets/images/ico-tabungan.svg', '400,1234 gram', '1234 5678 9101 2345', this, 'pilih-nomor-kredit'), checkKredit('jenis-transaksi1', 'getrekeningEmasVal1')"
            }, [
              /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                /*#__PURE__*/vue.createElementVNode("img", {
                  src: "/assets/images/ico-tabungan.svg",
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
              onclick: "rekeningSelected4('rekeningSendiri', '/assets/images/ico-tabungan.svg', '200,1234 gram', '1234 5678 9101 2345', this, 'pilih-nomor-kredit'), checkKredit('jenis-transaksi1', 'getrekeningEmasVal1')"
            }, [
              /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                /*#__PURE__*/vue.createElementVNode("img", {
                  src: "/assets/images/ico-tabungan.svg",
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
              onclick: "rekeningSelected4('rekeningSendiri', '/assets/images/ico-tabungan.svg', '200,1234 gram', '1234 5678 9101 2345', this, 'pilih-nomor-kredit'), checkKredit('jenis-transaksi1', 'getrekeningEmasVal1')"
            }, [
              /*#__PURE__*/vue.createElementVNode("div", { class: "img-box" }, [
                /*#__PURE__*/vue.createElementVNode("img", {
                  src: "/assets/images/ico-tabungan.svg",
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
          src: "/assets/images/ico-tabungan.svg",
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
      src: "/assets/images/icon-down.svg",
      alt: ""
    })
  ])
], -1 /* HOISTED */);
const _hoisted_2$E = /*#__PURE__*/vue.createElementVNode("section", { class: "section-overlay-modal-pds" }, [
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
              src: "/assets/images/close.svg",
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
                    src: "/assets/images/ico-tabungan.svg",
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
                    src: "/assets/images/ico-tabungan.svg",
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

function render$L(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    _hoisted_1$K,
    _hoisted_2$E
  ], 64 /* STABLE_FRAGMENT */))
}

script$L.render = render$L;
script$L.__file = "src/components/Dropdown/DropdownIconTextSm.vue";

var script$K = {
  name: "k-dropdown-text-only",
  props: {
    placeholder: {
      type: String,
      default: "Pilih Provinsi",
    },
    value: {
      type: [String, Number],
    },
    options: {
      type: Array,
      default: function () {
        return [
          {
            value: "Jakarta",
            label: "Jakarta",
          },
          {
            value: "Bandung",
            label: "Bandung",
          },
        ];
      },
      value: {
        type: [String, Number],
      },
      label: {
        type: String,
      },
    },
  },
};

const _hoisted_1$J = { class: "group-input" };
const _hoisted_2$D = {
  class: "accordion custom-accordion-input mobile-hide",
  id: "box-jenisTransaksi"
};
const _hoisted_3$w = { class: "accordion-item" };
const _hoisted_4$m = {
  class: "accordion-header",
  id: "headingOne"
};
const _hoisted_5$j = {
  class: "accordion-button collapsed",
  type: "button",
  "data-bs-toggle": "collapse",
  "data-bs-target": "#collapseOne",
  "aria-expanded": "false",
  "aria-controls": "collapseOne"
};
const _hoisted_6$e = { id: "defaultSelected-jenisTransaksi" };
const _hoisted_7$d = /*#__PURE__*/vue.createElementVNode("input", {
  type: "text",
  id: "val-jenisTransaksi",
  name: "jenis-transaksi",
  hidden: ""
}, null, -1 /* HOISTED */);
const _hoisted_8$a = /*#__PURE__*/vue.createElementVNode("div", {
  class: "accordion-button__selected",
  id: "newSelected-jenisTransaksi"
}, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "accordion-button__selected-detail" }, [
    /*#__PURE__*/vue.createElementVNode("h5", { id: "newSelectedItem-jenisTransaksi" })
  ])
], -1 /* HOISTED */);
const _hoisted_9$8 = {
  id: "collapseOne",
  class: "accordion-collapse collapse",
  "aria-labelledby": "headingOne",
  "data-bs-parent": "#box-jenisTransaksi"
};
const _hoisted_10$9 = { class: "accordion-body" };
const _hoisted_11$6 = { class: "pgd-box-search-grey m-2" };
const _hoisted_12$7 = /*#__PURE__*/vue.createElementVNode("div", { class: "icon" }, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "/assets/images/search-dark.svg",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_13$8 = ["placeholder"];
const _hoisted_14$8 = {
  class: "box-item__content item-dropdown",
  onclick: "comboBoxSelected('val-jenisTransaksi', 'defaultSelected-jenisTransaksi', 'newSelected-jenisTransaksi', 'newSelectedItem-jenisTransaksi', 'DKI Jakarta')"
};
const _hoisted_15$8 = { class: "box-ceklist" };
const _hoisted_16$7 = /*#__PURE__*/vue.createElementVNode("img", {
  src: "/assets/images/icon-checklist.svg",
  alt: ""
}, null, -1 /* HOISTED */);
const _hoisted_17$6 = /*#__PURE__*/vue.createElementVNode("input", {
  type: "hidden",
  id: "jenisMobileInput",
  name: "jenis",
  onchange: "checkValue(this, 'cicil-gadai-1')"
}, null, -1 /* HOISTED */);
const _hoisted_18$6 = {
  type: "button",
  class: "btn-pilih-jangka",
  "data-bs-toggle": "modal",
  "data-bs-target": "#modal-select-option-jenis"
};
const _hoisted_19$6 = {
  id: "jenis-mobile-text",
  class: "btn-pilih-jangka__text"
};
const _hoisted_20$6 = /*#__PURE__*/vue.createElementVNode("img", {
  src: "/assets/images/icon-down.svg",
  alt: ""
}, null, -1 /* HOISTED */);
const _hoisted_21$6 = { class: "section-overlay-modal-pds" };
const _hoisted_22$6 = {
  class: "modal fade",
  id: "modal-select-option-jenis",
  "data-bs-keyboard": "false",
  tabindex: "-1",
  "aria-labelledby": "staticBackdropLabel",
  "aria-hidden": "true"
};
const _hoisted_23$5 = { class: "modal-dialog modal-dialog-centered modal-change-password modal-select-option" };
const _hoisted_24$4 = { class: "modal-content" };
const _hoisted_25$1 = { class: "modal-header" };
const _hoisted_26 = {
  class: "modal-title",
  id: "staticBackdropLabel"
};
const _hoisted_27 = /*#__PURE__*/vue.createElementVNode("button", {
  type: "button",
  class: "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
}, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "/assets/images/close.svg",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_28 = { class: "modal-body" };
const _hoisted_29 = { class: "pilih-jangka-waktu" };

function render$K(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createElementVNode("div", _hoisted_1$J, [
      vue.createElementVNode("div", _hoisted_2$D, [
        vue.createElementVNode("div", _hoisted_3$w, [
          vue.createElementVNode("h2", _hoisted_4$m, [
            vue.createElementVNode("button", _hoisted_5$j, [
              vue.createElementVNode("span", _hoisted_6$e, vue.toDisplayString($props.placeholder), 1 /* TEXT */),
              _hoisted_7$d,
              _hoisted_8$a
            ])
          ]),
          vue.createElementVNode("div", _hoisted_9$8, [
            vue.createElementVNode("div", _hoisted_10$9, [
              vue.createElementVNode("div", _hoisted_11$6, [
                _hoisted_12$7,
                vue.createElementVNode("input", {
                  type: "search",
                  placeholder: $props.placeholder
                }, null, 8 /* PROPS */, _hoisted_13$8)
              ]),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (option, index) => {
                return (vue.openBlock(), vue.createElementBlock("div", {
                  key: index,
                  class: "box-item"
                }, [
                  vue.createElementVNode("div", _hoisted_14$8, [
                    vue.createElementVNode("div", _hoisted_15$8, [
                      vue.createElementVNode("h6", null, vue.toDisplayString(option.label), 1 /* TEXT */),
                      _hoisted_16$7
                    ])
                  ])
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ])
          ])
        ])
      ]),
      _hoisted_17$6,
      vue.createElementVNode("button", _hoisted_18$6, [
        vue.createElementVNode("h6", _hoisted_19$6, vue.toDisplayString($props.placeholder), 1 /* TEXT */),
        _hoisted_20$6
      ])
    ]),
    vue.createElementVNode("section", _hoisted_21$6, [
      vue.createElementVNode("div", _hoisted_22$6, [
        vue.createElementVNode("div", _hoisted_23$5, [
          vue.createElementVNode("div", _hoisted_24$4, [
            vue.createElementVNode("div", _hoisted_25$1, [
              vue.createElementVNode("h5", _hoisted_26, vue.toDisplayString($props.placeholder), 1 /* TEXT */),
              _hoisted_27
            ]),
            vue.createElementVNode("div", _hoisted_28, [
              vue.createElementVNode("div", _hoisted_29, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (option, index) => {
                  return (vue.openBlock(), vue.createElementBlock("div", {
                    key: index,
                    class: "pilih-jangka-waktu__item jenis-item",
                    onclick: "pilihComboBox('DKI Jakarta', this, 'jenisMobileInput', 'jenis-mobile-text', 'jenis-item')",
                    "data-bs-dismiss": "modal"
                  }, vue.toDisplayString(option.label), 1 /* TEXT */))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ])
          ])
        ])
      ])
    ])
  ], 64 /* STABLE_FRAGMENT */))
}

script$K.render = render$K;
script$K.__file = "src/components/Dropdown/DropdownTextOnly.vue";

var script$J = {
  name: "k-filepicker-lg",
  props: {
    file: {
      type: [File, Object],
    },
  },
  watch: {
    value(value) {
      if (!value) {
        this.$refs.file.value = "";
      }
    },
  },
  methods: {
    filesize(size) {
      var i = Math.floor(Math.log(size) / Math.log(1024));
      return (
        (size / Math.pow(1024, i)).toFixed(2) * 1 +
        " " +
        ["B", "kB", "MB", "GB", "TB"][i]
      );
    },
    browse() {
      this.$refs.file.click();
    },
    change(e) {
      this.$emit("input", e.target.files[0]);
    },
    remove() {
      this.$emit("input", null);
    },
  },
};

const _hoisted_1$I = { class: "custom-file-upload" };
const _hoisted_2$C = /*#__PURE__*/vue.createElementVNode("div", {
  class: "custom-file-upload__box-preview",
  id: "box-preview-image"
}, null, -1 /* HOISTED */);
const _hoisted_3$v = /*#__PURE__*/vue.createElementVNode("div", { class: "custom-file-upload__box-input" }, [
  /*#__PURE__*/vue.createElementVNode("span", { class: "custom-file-upload__box-input-icon" }, [
    /*#__PURE__*/vue.createElementVNode("img", {
      src: "/assets/images/ico-image-upload.svg",
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
const _hoisted_4$l = [
  _hoisted_2$C,
  _hoisted_3$v
];

function render$J(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$I, _hoisted_4$l))
}

script$J.render = render$J;
script$J.__file = "src/components/Filepicker/FilepickerLg.vue";

var script$I = {
  name: "k-filepicker-sm",
  props: {
    props: {
      file: {
        type: [File, Object],
      },
    },
    watch: {
      value(value) {
        if (!value) {
          this.$refs.file.value = "";
        }
      },
    },
    methods: {
      filesize(size) {
        var i = Math.floor(Math.log(size) / Math.log(1024));
        return (
          (size / Math.pow(1024, i)).toFixed(2) * 1 +
          " " +
          ["B", "kB", "MB", "GB", "TB"][i]
        );
      },
      browse() {
        this.$refs.file.click();
      },
      change(e) {
        this.$emit("input", e.target.files[0]);
      },
      remove() {
        this.$emit("input", null);
      },
    },
  },
};

const _hoisted_1$H = /*#__PURE__*/vue.createElementVNode("input", {
  type: "file",
  accept: "image/*",
  id: "upload-multiple-image",
  capture: "camera",
  multiple: "",
  hidden: "",
  required: "",
  onchange: "imagesPreview2(this, '.box-upload-multiple-image__preview');closeModalThis2('closeModal')"
}, null, -1 /* HOISTED */);
const _hoisted_2$B = /*#__PURE__*/vue.createElementVNode("div", { class: "box-upload-multiple-image" }, [
  /*#__PURE__*/vue.createElementVNode("label", {
    for: "",
    class: "box-upload-multiple-image__input",
    "data-bs-toggle": "modal",
    "data-bs-target": "#modal-upload-profile"
  }, [
    /*#__PURE__*/vue.createElementVNode("img", {
      src: "/assets/images/ico-image-upload.svg",
      alt: ""
    })
  ]),
  /*#__PURE__*/vue.createElementVNode("div", { class: "box-upload-multiple-image__preview" })
], -1 /* HOISTED */);
const _hoisted_3$u = /*#__PURE__*/vue.createElementVNode("section", { class: "section-overlay-modal-pds" }, [
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
              src: "/assets/images/close.svg",
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
              src: "/assets/images/image-outline.svg",
              alt: ""
            })
          ]),
          /*#__PURE__*/vue.createElementVNode("label", {
            for: "upload-multiple-image",
            class: "modal-upload-profile__item desktop-hide-flex"
          }, [
            /*#__PURE__*/vue.createElementVNode("h6", null, "Kamera"),
            /*#__PURE__*/vue.createElementVNode("img", {
              src: "/assets/images/camera-outline.svg",
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
              src: "/assets/images/camera-outline.svg",
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
              src: "/assets/images/close.svg",
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

function render$I(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    _hoisted_1$H,
    _hoisted_2$B,
    _hoisted_3$u
  ], 64 /* STABLE_FRAGMENT */))
}

script$I.render = render$I;
script$I.__file = "src/components/Filepicker/FilepickerSm.vue";

var script$H = {
  name: "k-footer-pds-login",
  props: {
    menu1: {
      type: Object,
      default: function () {
        return {
          label: "Tautan Cepat",
          items: [
            { link: "./promo.html", action: "Gadaizz" },
            { link: "./artikel.html", action: "Pembiayaan" },
            { link: "./acara.html", action: "Pembayaran dan Top Up" },
            { link: "./simulasi-emas.html", action: "Cicil Emas" },
            { link: "./ebook.html", action: "Cabang Pegadaian" },
          ],
        };
      },
    },
    menu2: {
      type: Object,
      default: function () {
        return {
          label: "Bantuan",
          items: [
            { link: "./syarat-ketentuan.html", action: "Syarat dan Ketentuan" },
            { link: "./hubungi-kami.html", action: "Hubungi Kami" },
          ],
        };
      },
    },
    socialMedia: {
      type: Object,
      default: function () {
        return {
          facebook:
            "/assets/images/facebook.svg",
          twitter:
            "/assets/images/twitter.svg",
          instagram:
            "/assets/images/instagram.svg",
          youtube:
            "/assets/images/youtube.svg",
        };
      },
    },
  },
};

const _hoisted_1$G = { class: "footer-top container" };
const _hoisted_2$A = { class: "footer-box" };
const _hoisted_3$t = { class: "footer-box__div" };
const _hoisted_4$k = { class: "box-map" };
const _hoisted_5$i = ["href"];
const _hoisted_6$d = { class: "box-map" };
const _hoisted_7$c = ["href"];
const _hoisted_8$9 = /*#__PURE__*/vue.createStaticVNode("<div class=\"footer-box__div\"><h4>Download Pegadaian Digital</h4><div class=\"box-download-app\"><a href=\"https://play.google.com/store/apps/details?id=com.pegadaiandigital&amp;hl=en&amp;gl=US\"><img src=\"/assets/images/google-play-badge.png\" alt=\"\"></a><a href=\"/assets/images/id1350501409\"><img src=\"/assets/images/badge-app.png\" alt=\"\"></a></div><span>PT. Pegadaian (Persero) terdaftar dan diawasi oleh</span><br><img src=\"/assets/images/ojk.png\" alt=\"\" class=\"ojk\"></div>", 1);
const _hoisted_9$7 = { class: "footer-box__div-3" };
const _hoisted_10$8 = /*#__PURE__*/vue.createStaticVNode("<h4>Kantor Pusat Pegadaian</h4><div class=\"box-map-2\"><div class=\"location\"><img class=\"location__icon\" src=\"/assets/images/pinpoint.svg\"><span class=\"location__text\">Jl. Kramat Raya 162 Jakarta Pusat 10430<br> Indonesia</span></div><div class=\"contact\"><div class=\"contact__phone\"><img src=\"/assets/images/phone.svg\" alt=\"\"><span>021 3155 550 </span></div><div class=\"contact__box\"><img src=\"/assets/images/box-mail.svg\" alt=\"\"><span>021 8063 5162 </span></div></div><img src=\"/assets/images/call-center.svg\" class=\"call-center\" alt=\"\"></div>", 2);
const _hoisted_12$6 = { class: "social-media-desktop" };
const _hoisted_13$7 = /*#__PURE__*/vue.createElementVNode("h4", null, "Ikuti Media Sosial Kami", -1 /* HOISTED */);
const _hoisted_14$7 = { class: "box-map-2" };
const _hoisted_15$7 = { class: "outer-box-socmed" };
const _hoisted_16$6 = {
  href: "https://facebook.com/shbtpegadaian",
  class: "box-socmed"
};
const _hoisted_17$5 = ["src"];
const _hoisted_18$5 = {
  href: "https://twitter.com/shbt_pegadaian",
  class: "box-socmed"
};
const _hoisted_19$5 = ["src"];
const _hoisted_20$5 = {
  href: "https://instagram.com/sahabatpegadaian",
  class: "box-socmed"
};
const _hoisted_21$5 = ["src"];
const _hoisted_22$5 = {
  href: "https://www.youtube.com/c/PTPegadaianPersero_official",
  class: "box-socmed"
};
const _hoisted_23$4 = ["src"];
const _hoisted_24$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "copyright" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "container" }, " Copyright © 2021 PT. Pegadaian - Persero. All Rights Reserved. ")
], -1 /* HOISTED */);

function render$H(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("footer", null, [
    vue.createElementVNode("div", _hoisted_1$G, [
      vue.createElementVNode("div", _hoisted_2$A, [
        vue.createElementVNode("div", _hoisted_3$t, [
          vue.createElementVNode("h4", null, vue.toDisplayString($props.menu1.label), 1 /* TEXT */),
          vue.createElementVNode("div", _hoisted_4$k, [
            vue.createElementVNode("ul", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.menu1.items, (item, index) => {
                return (vue.openBlock(), vue.createElementBlock("li", { key: index }, [
                  vue.createElementVNode("a", {
                    href: item.link
                  }, vue.toDisplayString(item.action), 9 /* TEXT, PROPS */, _hoisted_5$i)
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ])
          ]),
          vue.createElementVNode("h4", null, vue.toDisplayString($props.menu2.label), 1 /* TEXT */),
          vue.createElementVNode("div", _hoisted_6$d, [
            vue.createElementVNode("ul", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.menu2.items, (item, index) => {
                return (vue.openBlock(), vue.createElementBlock("li", { key: index }, [
                  vue.createElementVNode("a", {
                    href: item.link
                  }, vue.toDisplayString(item.action), 9 /* TEXT, PROPS */, _hoisted_7$c)
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ])
          ])
        ]),
        _hoisted_8$9,
        vue.createElementVNode("div", _hoisted_9$7, [
          _hoisted_10$8,
          vue.createElementVNode("div", _hoisted_12$6, [
            _hoisted_13$7,
            vue.createElementVNode("div", _hoisted_14$7, [
              vue.createElementVNode("div", _hoisted_15$7, [
                vue.createElementVNode("a", _hoisted_16$6, [
                  vue.createElementVNode("img", {
                    src: $props.socialMedia.facebook,
                    alt: "",
                    class: "box-socmed__icon"
                  }, null, 8 /* PROPS */, _hoisted_17$5)
                ]),
                vue.createElementVNode("a", _hoisted_18$5, [
                  vue.createElementVNode("img", {
                    src: $props.socialMedia.twitter,
                    alt: "",
                    class: "box-socmed__icon"
                  }, null, 8 /* PROPS */, _hoisted_19$5)
                ]),
                vue.createElementVNode("a", _hoisted_20$5, [
                  vue.createElementVNode("img", {
                    src: $props.socialMedia.instagram,
                    alt: "",
                    class: "box-socmed__icon"
                  }, null, 8 /* PROPS */, _hoisted_21$5)
                ]),
                vue.createElementVNode("a", _hoisted_22$5, [
                  vue.createElementVNode("img", {
                    src: $props.socialMedia.youtube,
                    alt: "",
                    class: "box-socmed__icon"
                  }, null, 8 /* PROPS */, _hoisted_23$4)
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _hoisted_24$3
  ]))
}

script$H.render = render$H;
script$H.__file = "src/components/Footer/FooterPdsLogin.vue";

var script$G = {
  name: "k-footer-pds-onboarding",
  props: {
    menu1: {
      type: Object,
      default: function () {
        return {
          label: "Tautan Cepat",
          items: [
            { link: "./promo.html", action: "Gadaiy" },
            { link: "./artikel.html", action: "Pembiayaan" },
            { link: "./acara.html", action: "Pembayaran dan Top Up" },
            { link: "./simulasi-emas.html", action: "Cicil Emas" },
            { link: "./ebook.html", action: "Cabang Pegadaian" },
          ],
        };
      },
    },
    menu2: {
      type: Object,
      default: function () {
        return {
          label: "Bantuan",
          items: [
            { link: "./syarat-ketentuan.html", action: "Syarat dan Ketentuan" },
            { link: "./hubungi-kami.html", action: "Hubungi Kami" },
          ],
        };
      },
    },
    socialMedia: {
      type: Object,
      default: function () {
        return {
          facebook:
            "/assets/images/facebook.svg",
          twitter:
            "/assets/images/twitter.svg",
          instagram:
            "/assets/images/instagram.svg",
          youtube:
            "/assets/images/youtube.svg",
        };
      },
    },
  },
};

const _hoisted_1$F = { class: "footer-top container" };
const _hoisted_2$z = { class: "footer-box" };
const _hoisted_3$s = { class: "footer-box__div" };
const _hoisted_4$j = { class: "box-map" };
const _hoisted_5$h = ["href"];
const _hoisted_6$c = /*#__PURE__*/vue.createStaticVNode("<div class=\"footer-box__div\"><h4>Download Pegadaian Digital</h4><div class=\"box-download-app\"><a href=\"https://play.google.com/store/apps/details?id=com.pegadaiandigital&amp;hl=en&amp;gl=US\"><img src=\"/assets/images/google-play-badge.png\" alt=\"\"></a><a href=\"https://apps.apple.com/us/app/pegadaian-digital/id1350501409\"><img src=\"/assets/images/badge-app.png\" alt=\"\"></a></div><span>PT. Pegadaian (Persero) terdaftar dan diawasi oleh</span><br><img src=\"/assets/images/ojk.png\" alt=\"\" class=\"ojk\"></div>", 1);
const _hoisted_7$b = { class: "footer-box__div-3" };
const _hoisted_8$8 = /*#__PURE__*/vue.createStaticVNode("<h4>Kantor Pusat Pegadaian</h4><div class=\"box-map-2\"><div class=\"location\"><img class=\"location__icon\" src=\"/assets/images/pinpoint.svg\"><span class=\"location__text\">Jl. Kramat Raya 162 Jakarta Pusat 10430<br> Indonesia</span></div><div class=\"contact\"><div class=\"contact__phone\"><img src=\"/assets/images/phone.svg\" alt=\"\"><span>021 3155 550 </span></div><div class=\"contact__box\"><img src=\"/assets/images/box-mail.svg\" alt=\"\"><span>021 8063 5162 </span></div></div><img src=\"/assets/images/call-center.svg\" class=\"call-center\" alt=\"\"></div>", 2);
const _hoisted_10$7 = { class: "social-media-desktop" };
const _hoisted_11$5 = /*#__PURE__*/vue.createElementVNode("h4", null, "Ikuti Media Sosial Kami", -1 /* HOISTED */);
const _hoisted_12$5 = { class: "box-map-2" };
const _hoisted_13$6 = { class: "outer-box-socmed" };
const _hoisted_14$6 = {
  href: "https://facebook.com/shbtpegadaian",
  class: "box-socmed"
};
const _hoisted_15$6 = ["src"];
const _hoisted_16$5 = {
  href: "https://twitter.com/shbt_pegadaian",
  class: "box-socmed"
};
const _hoisted_17$4 = ["src"];
const _hoisted_18$4 = {
  href: "https://instagram.com/sahabatpegadaian",
  class: "box-socmed"
};
const _hoisted_19$4 = ["src"];
const _hoisted_20$4 = {
  href: "https://www.youtube.com/c/PTPegadaianPersero_official",
  class: "box-socmed"
};
const _hoisted_21$4 = ["src"];
const _hoisted_22$4 = /*#__PURE__*/vue.createElementVNode("div", { class: "copyright" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "container" }, " Copyright © 2021 PT. Pegadaian - Persero. All Rights Reserved. ")
], -1 /* HOISTED */);

function render$G(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("footer", null, [
    vue.createElementVNode("div", _hoisted_1$F, [
      vue.createElementVNode("div", _hoisted_2$z, [
        vue.createElementVNode("div", _hoisted_3$s, [
          vue.createElementVNode("h4", null, vue.toDisplayString($props.menu1.label), 1 /* TEXT */),
          vue.createElementVNode("div", _hoisted_4$j, [
            vue.createElementVNode("ul", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.menu1.items, (item, index) => {
                return (vue.openBlock(), vue.createElementBlock("li", { key: index }, [
                  vue.createElementVNode("a", {
                    href: item.link
                  }, vue.toDisplayString(item.action), 9 /* TEXT, PROPS */, _hoisted_5$h)
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ])
          ]),
          vue.createCommentVNode(" <h4>Tautan Cepat</h4>\n          <div class=\"box-map\">\n            <ul>\n              <li><a href=\"#tentangpgd\">Tentang Pegadaian Digital</a></li>\n              <li><a href=\"#promo\">Promo</a></li>\n              <li><a href=\"#pusatbantuan\">Pusat Bantuan</a></li>\n              <li><a href=\"#syaratdanketentuan\">Syarat & Ketentuan</a></li>\n              <li><a href=\"#hubungikami\">Hubungi Kami</a></li>\n            </ul>\n          </div> ")
        ]),
        _hoisted_6$c,
        vue.createElementVNode("div", _hoisted_7$b, [
          _hoisted_8$8,
          vue.createElementVNode("div", _hoisted_10$7, [
            _hoisted_11$5,
            vue.createElementVNode("div", _hoisted_12$5, [
              vue.createElementVNode("div", _hoisted_13$6, [
                vue.createElementVNode("a", _hoisted_14$6, [
                  vue.createElementVNode("img", {
                    src: $props.socialMedia.facebook,
                    alt: "",
                    class: "box-socmed__icon"
                  }, null, 8 /* PROPS */, _hoisted_15$6)
                ]),
                vue.createElementVNode("a", _hoisted_16$5, [
                  vue.createElementVNode("img", {
                    src: $props.socialMedia.twitter,
                    alt: "",
                    class: "box-socmed__icon"
                  }, null, 8 /* PROPS */, _hoisted_17$4)
                ]),
                vue.createElementVNode("a", _hoisted_18$4, [
                  vue.createElementVNode("img", {
                    src: $props.socialMedia.instagram,
                    alt: "",
                    class: "box-socmed__icon"
                  }, null, 8 /* PROPS */, _hoisted_19$4)
                ]),
                vue.createElementVNode("a", _hoisted_20$4, [
                  vue.createElementVNode("img", {
                    src: $props.socialMedia.youtube,
                    alt: "",
                    class: "box-socmed__icon"
                  }, null, 8 /* PROPS */, _hoisted_21$4)
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _hoisted_22$4
  ]))
}

script$G.render = render$G;
script$G.__file = "src/components/Footer/FooterPdsOnboarding.vue";

var script$F = {
  name: "k-footer-pgd-corporate",
  props: {
    menu1: {
      type: Object,
      default: function () {
        return {
          label: "Tautan Cepat",
          items: [
            { link: "./promo.html", action: "Produk dan Layanan" },
            { link: "./artikel.html", action: "Hubungan Investor" },
            { link: "./acara.html", action: "Profil Korporasi" },
            { link: "./simulasi-emas.html", action: "Berita" },
          ],
        };
      },
    },
    menu2: {
      type: Object,
      default: function () {
        return {
          label: "Bantuan",
          items: [
            { link: "./syarat-ketentuan.html", action: "Syarat dan Ketentuan" },
            { link: "/faq", action: "FAQ" },
            { link: "/kebijakan-privasi", action: "Kebijakan Privasi" },
          ],
        };
      },
    },
    socialMedia: {
      type: Object,
      default: function () {
        return {
          facebook:
            "/assets/images/facebook.svg",
          twitter:
            "/assets/images/twitter.svg",
          instagram:
            "/assets/images/instagram.svg",
          youtube:
            "/assets/images/youtube.svg",
        };
      },
    },
  },
};

const _hoisted_1$E = { class: "footer-pgd" };
const _hoisted_2$y = { class: "footer-pgd-top" };
const _hoisted_3$r = { class: "footer-box" };
const _hoisted_4$i = { class: "footer-box__div" };
const _hoisted_5$g = { class: "box-map" };
const _hoisted_6$b = ["href"];
const _hoisted_7$a = { class: "box-map" };
const _hoisted_8$7 = ["href"];
const _hoisted_9$6 = /*#__PURE__*/vue.createStaticVNode("<div class=\"footer-box__div-2\"><div class=\"box-map-2\"><h4>PT Pegadaian (Persero) terdaftar dan diawasi oleh</h4><img src=\"/assets/images/ojk.png\"></div><div class=\"box-map-2\"><h4>PT Pegadaian (Persero) telah terverifikasi</h4><img src=\"/assets/images/logo_safegard.png\"></div></div>", 1);
const _hoisted_10$6 = { class: "footer-box__div-3" };
const _hoisted_11$4 = /*#__PURE__*/vue.createStaticVNode("<h4>Kantor Pusat Pegadaian</h4><div class=\"box-map-3\"><div class=\"location\"><img class=\"location__icon\" src=\"/assets/images/pinpoint.svg\" alt=\"\"><span class=\"location__text\"> Jl. Kramat Raya 162 Jakarta Pusat 10430 Indonesia </span></div><div class=\"contact\"><div class=\"contact__phone\"><img src=\"/assets/images/phone.svg\" alt=\"\"><span>021 3155 550 </span></div><div class=\"contact__box\"><img src=\"/assets/images/box-mail.svg\" alt=\"\"><span>021 8063 5162</span></div></div><img class=\"call-center\" src=\"/assets/images/call-center.svg\" alt=\"\"></div>", 2);
const _hoisted_13$5 = { class: "social-media" };
const _hoisted_14$5 = /*#__PURE__*/vue.createElementVNode("h4", null, "Ikuti Media Sosial Kami", -1 /* HOISTED */);
const _hoisted_15$5 = { class: "box-map-3" };
const _hoisted_16$4 = { class: "outer-box-sosmed" };
const _hoisted_17$3 = {
  href: "https://www.facebook.com/PegadaianPersero",
  class: "box-sosmed",
  target: "blank"
};
const _hoisted_18$3 = ["src"];
const _hoisted_19$3 = {
  href: "https://twitter.com/Pegadaian",
  class: "box-sosmed",
  target: "blank"
};
const _hoisted_20$3 = ["src"];
const _hoisted_21$3 = {
  href: "https://www.instagram.com/pegadaian_id/",
  class: "box-sosmed",
  target: "blank"
};
const _hoisted_22$3 = ["src"];
const _hoisted_23$3 = {
  href: "https://www.youtube.com/channel/UC_acigZTCXTQuXL-3hqm6Gg",
  class: "box-sosmed",
  target: "blank"
};
const _hoisted_24$2 = ["src"];
const _hoisted_25 = /*#__PURE__*/vue.createElementVNode("div", { class: "footer-pgd-bottom" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "copyright" }, " Copyright © 2021 PT. Pegadaian - Persero. All Rights Reserved. ")
], -1 /* HOISTED */);

function render$F(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$E, [
    vue.createElementVNode("div", _hoisted_2$y, [
      vue.createElementVNode("div", _hoisted_3$r, [
        vue.createElementVNode("div", _hoisted_4$i, [
          vue.createElementVNode("h4", null, vue.toDisplayString($props.menu1.label), 1 /* TEXT */),
          vue.createElementVNode("div", _hoisted_5$g, [
            vue.createElementVNode("ul", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.menu1.items, (item, index) => {
                return (vue.openBlock(), vue.createElementBlock("li", { key: index }, [
                  vue.createElementVNode("a", {
                    href: item.link
                  }, vue.toDisplayString(item.action), 9 /* TEXT, PROPS */, _hoisted_6$b)
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ])
          ]),
          vue.createElementVNode("h4", null, vue.toDisplayString($props.menu2.label), 1 /* TEXT */),
          vue.createElementVNode("div", _hoisted_7$a, [
            vue.createElementVNode("ul", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.menu2.items, (item, index) => {
                return (vue.openBlock(), vue.createElementBlock("li", { key: index }, [
                  vue.createElementVNode("a", {
                    href: item.link
                  }, vue.toDisplayString(item.action), 9 /* TEXT, PROPS */, _hoisted_8$7)
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ])
          ])
        ]),
        _hoisted_9$6,
        vue.createElementVNode("div", _hoisted_10$6, [
          _hoisted_11$4,
          vue.createElementVNode("div", _hoisted_13$5, [
            _hoisted_14$5,
            vue.createElementVNode("div", _hoisted_15$5, [
              vue.createElementVNode("div", _hoisted_16$4, [
                vue.createElementVNode("a", _hoisted_17$3, [
                  vue.createElementVNode("img", {
                    src: $props.socialMedia.facebook,
                    class: "box-sosmed__icon",
                    alt: ""
                  }, null, 8 /* PROPS */, _hoisted_18$3)
                ]),
                vue.createElementVNode("a", _hoisted_19$3, [
                  vue.createElementVNode("img", {
                    src: $props.socialMedia.twitter,
                    class: "box-sosmed__icon",
                    alt: ""
                  }, null, 8 /* PROPS */, _hoisted_20$3)
                ]),
                vue.createElementVNode("a", _hoisted_21$3, [
                  vue.createElementVNode("img", {
                    src: $props.socialMedia.instagram,
                    class: "box-sosmed__icon",
                    alt: ""
                  }, null, 8 /* PROPS */, _hoisted_22$3)
                ]),
                vue.createElementVNode("a", _hoisted_23$3, [
                  vue.createElementVNode("img", {
                    src: $props.socialMedia.youtube,
                    class: "box-sosmed__icon",
                    alt: ""
                  }, null, 8 /* PROPS */, _hoisted_24$2)
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _hoisted_25
  ]))
}

script$F.render = render$F;
script$F.__file = "src/components/Footer/FooterPgdCorporate.vue";

var script$E = {
  name: "k-footer-sahabat-pgd",
  props: {
    menu1: {
      type: Object,
      default: function () {
        return {
          label: "Tautan Cepat",
          items: [
            { link: "./promo.html", action: "Gadaizz" },
            { link: "./artikel.html", action: "Pembiayaan" },
            { link: "./acara.html", action: "Pembayaran dan Top Up" },
            { link: "./simulasi-emas.html", action: "Cicil Emas" },
            { link: "./ebook.html", action: "Cabang Pegadaian" },
          ],
        };
      },
    },
    menu2: {
      type: Object,
      default: function () {
        return {
          label: "Bantuan",
          items: [
            { link: "./syarat-ketentuan.html", action: "Syarat dan Ketentuan" },
            { link: "./hubungi-kami.html", action: "Hubungi Kami" },
          ],
        };
      },
    },
    socialMedia: {
      type: Object,
      default: function () {
        return {
          facebook:
            "/assets/images/facebook.svg",
          twitter:
            "/assets/images/twitter.svg",
          instagram:
            "/assets/images/instagram.svg",
          youtube:
            "/assets/images/youtube.svg",
        };
      },
    },
  },
};

const _hoisted_1$D = { class: "footer-top container" };
const _hoisted_2$x = { class: "footer-box" };
const _hoisted_3$q = { class: "footer-box__div" };
const _hoisted_4$h = { class: "box-map" };
const _hoisted_5$f = ["href"];
const _hoisted_6$a = { class: "box-map" };
const _hoisted_7$9 = ["href"];
const _hoisted_8$6 = /*#__PURE__*/vue.createStaticVNode("<div class=\"footer-box__div\"><h4>Download Pegadaian Digital</h4><div class=\"box-download-app\"><a href=\"https://play.google.com/store/apps/details?id=com.pegadaiandigital&amp;hl=en&amp;gl=US\"><img src=\"/assets/images/google-play-badge.png\" alt=\"\"></a><a href=\"https://apps.apple.com/us/app/pegadaian-digital/id1350501409\"><img src=\"/assets/images/badge-app.png\" alt=\"\"></a></div><span>PT. Pegadaian (Persero) terdaftar dan diawasi oleh</span><br><img src=\"/assets/images/ojk.png\" alt=\"\" class=\"ojk\"></div>", 1);
const _hoisted_9$5 = { class: "footer-box__div-3" };
const _hoisted_10$5 = /*#__PURE__*/vue.createStaticVNode("<h4>Kantor Pusat Pegadaian</h4><div class=\"box-map-2\"><div class=\"location\"><img class=\"location__icon\" src=\"/assets/images/pinpoint.svg\"><span class=\"location__text\">Jl. Kramat Raya 162 Jakarta Pusat 10430<br> Indonesia</span></div><div class=\"contact\"><div class=\"contact__phone\"><img src=\"/assets/images/phone.svg\" alt=\"\"><span>021 3155 550 </span></div><div class=\"contact__box\"><img src=\"/assets/images/box-mail.svg\" alt=\"\"><span>021 8063 5162 </span></div></div><img src=\"/assets/images/call-center.svg\" class=\"call-center\" alt=\"\"></div>", 2);
const _hoisted_12$4 = { class: "social-media-desktop" };
const _hoisted_13$4 = /*#__PURE__*/vue.createElementVNode("h4", null, "Ikuti Media Sosial Kami", -1 /* HOISTED */);
const _hoisted_14$4 = { class: "box-map-2" };
const _hoisted_15$4 = { class: "outer-box-socmed" };
const _hoisted_16$3 = {
  href: "https://facebook.com/shbtpegadaian",
  class: "box-socmed"
};
const _hoisted_17$2 = ["src"];
const _hoisted_18$2 = {
  href: "https://twitter.com/shbt_pegadaian",
  class: "box-socmed"
};
const _hoisted_19$2 = ["src"];
const _hoisted_20$2 = {
  href: "https://instagram.com/sahabatpegadaian",
  class: "box-socmed"
};
const _hoisted_21$2 = ["src"];
const _hoisted_22$2 = {
  href: "https://www.youtube.com/c/PTPegadaianPersero_official",
  class: "box-socmed"
};
const _hoisted_23$2 = ["src"];
const _hoisted_24$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "copyright" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "container" }, " Copyright © 2021 PT. Pegadaian - Persero. All Rights Reserved. ")
], -1 /* HOISTED */);

function render$E(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("footer", null, [
    vue.createElementVNode("div", _hoisted_1$D, [
      vue.createElementVNode("div", _hoisted_2$x, [
        vue.createElementVNode("div", _hoisted_3$q, [
          vue.createElementVNode("div", _hoisted_4$h, [
            vue.createElementVNode("ul", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.menu1.items, (item, index) => {
                return (vue.openBlock(), vue.createElementBlock("li", { key: index }, [
                  vue.createElementVNode("a", {
                    href: item.link
                  }, vue.toDisplayString(item.action), 9 /* TEXT, PROPS */, _hoisted_5$f)
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ])
          ]),
          vue.createElementVNode("h4", null, vue.toDisplayString($props.menu2.label), 1 /* TEXT */),
          vue.createElementVNode("div", _hoisted_6$a, [
            vue.createElementVNode("ul", null, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.menu2.items, (item, index) => {
                return (vue.openBlock(), vue.createElementBlock("li", { key: index }, [
                  vue.createElementVNode("a", {
                    href: item.link
                  }, vue.toDisplayString(item.action), 9 /* TEXT, PROPS */, _hoisted_7$9)
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ])
          ])
        ]),
        _hoisted_8$6,
        vue.createElementVNode("div", _hoisted_9$5, [
          _hoisted_10$5,
          vue.createElementVNode("div", _hoisted_12$4, [
            _hoisted_13$4,
            vue.createElementVNode("div", _hoisted_14$4, [
              vue.createElementVNode("div", _hoisted_15$4, [
                vue.createElementVNode("a", _hoisted_16$3, [
                  vue.createElementVNode("img", {
                    src: $props.socialMedia.facebook,
                    alt: "",
                    class: "box-socmed__icon"
                  }, null, 8 /* PROPS */, _hoisted_17$2)
                ]),
                vue.createElementVNode("a", _hoisted_18$2, [
                  vue.createElementVNode("img", {
                    src: $props.socialMedia.twitter,
                    alt: "",
                    class: "box-socmed__icon"
                  }, null, 8 /* PROPS */, _hoisted_19$2)
                ]),
                vue.createElementVNode("a", _hoisted_20$2, [
                  vue.createElementVNode("img", {
                    src: $props.socialMedia.instagram,
                    alt: "",
                    class: "box-socmed__icon"
                  }, null, 8 /* PROPS */, _hoisted_21$2)
                ]),
                vue.createElementVNode("a", _hoisted_22$2, [
                  vue.createElementVNode("img", {
                    src: $props.socialMedia.youtube,
                    alt: "",
                    class: "box-socmed__icon"
                  }, null, 8 /* PROPS */, _hoisted_23$2)
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _hoisted_24$1
  ]))
}

script$E.render = render$E;
script$E.__file = "src/components/Footer/FooterSahabatPgd.vue";

var script$D = {
  name: "k-product-icon",
  props: {},
};

const _hoisted_1$C = { class: "p-5" };
const _hoisted_2$w = /*#__PURE__*/vue.createStaticVNode("<div class=\"row\"><div class=\"col\"><img class=\"product-icons\" src=\"/assets/images/ico-tabungan.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"product-icons\" src=\"/assets/images/ico-uang.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"product-icons\" src=\"/assets/images/ico-gadai-titipan-emas-fisik.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"product-icons\" src=\"/assets/images/ico-haji.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"product-icons\" src=\"/assets/images/ico-riwayat-emas-batangan.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"product-icons\" src=\"/assets/images/ico-pembayaran-no-bg.svg\" alt=\"system-icons\"></div></div>", 1);
const _hoisted_3$p = [
  _hoisted_2$w
];

function render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$C, _hoisted_3$p))
}

script$D.render = render$D;
script$D.__file = "src/components/Icon/ProductIcon.vue";

var script$C = {
  name: "k-system-icons",
  props: {},
};

const _hoisted_1$B = { class: "p-5" };
const _hoisted_2$v = /*#__PURE__*/vue.createStaticVNode("<div class=\"row\"><div class=\"col\"><img class=\"system-icons\" src=\"/assets/images/close-round-dark.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"system-icons\" src=\"/assets/images/icon-checklist.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"system-icons\" src=\"/assets/images/ico-point-pegadaian.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"system-icons\" src=\"/assets/images/icon-info.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"system-icons\" src=\"/assets/images/ico-calendar-outline.svg\" alt=\"system-icons\"></div><div class=\"col\"><img class=\"system-icons\" src=\"/assets/images/ico-email-outline-green.svg\" alt=\"system-icons\"></div></div>", 1);
const _hoisted_3$o = [
  _hoisted_2$v
];

function render$C(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$B, _hoisted_3$o))
}

script$C.render = render$C;
script$C.__file = "src/components/Icon/SystemIcon.vue";

var script$B = {
  name: "k-image-illustration",
  props: {},
};

const _hoisted_1$A = { class: "ilustration-ellipse" };
const _hoisted_2$u = /*#__PURE__*/vue.createElementVNode("img", {
  src: "/assets/images/round-img2.png",
  alt: "ilustration-ellipse"
}, null, -1 /* HOISTED */);
const _hoisted_3$n = [
  _hoisted_2$u
];

function render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$A, _hoisted_3$n))
}

script$B.render = render$B;
script$B.__file = "src/components/Image/ImageIllustration.vue";

var script$A = {
  name: "k-image-photo",
  props: {},
};

const _hoisted_1$z = { class: "ilustration-released" };
const _hoisted_2$t = /*#__PURE__*/vue.createElementVNode("img", {
  src: "/assets/images/image-released.png",
  alt: "ilustration-released"
}, null, -1 /* HOISTED */);
const _hoisted_3$m = [
  _hoisted_2$t
];

function render$A(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$z, _hoisted_3$m))
}

script$A.render = render$A;
script$A.__file = "src/components/Image/ImagePhoto.vue";

var script$z = {
  name: "k-input",
  props: {
    title: {
      type: String,
      default: "Title",
    },
    icon: {
      type: String,
      default:
        "/assets/images/icon-info.svg",
    },
    placeholder: {
      type: String,
      default: "placeholder . . .",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  data: () => ({
    currentValue: "",
  }),
  watch: {
    value: {
      handler(after) {
        this.currentValue = this.format(after);
      },
      immediate: true,
    },
  },
  methods: {
    format: (value) =>
      (value + "").replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "."),

    handleInput() {
      this.currentValue = this.format(this.currentValue);
      this.$emit("input", (this.currentValue + "").replace(/[^0-9]/g, ""));
    },
  },
  setup(props) {
    props = vue.reactive(props);
    return {
      classes: vue.computed(() => ({
        [`${props.error ? "is-invalid" : ""}`]: true,
      })),
    };
  },
  
};

const _hoisted_1$y = { class: "p-5" };
const _hoisted_2$s = { class: "group-input" };
const _hoisted_3$l = { class: "input-group custom-input-group mb-2" };
const _hoisted_4$g = /*#__PURE__*/vue.createElementVNode("span", {
  class: "input-group-text",
  id: "basic-addon1"
}, "Rupiah", -1 /* HOISTED */);
const _hoisted_5$e = /*#__PURE__*/vue.createElementVNode("div", { class: "group-input" }, [
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

function render$z(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$y, [
    vue.createElementVNode("div", _hoisted_2$s, [
      vue.createElementVNode("div", _hoisted_3$l, [
        _hoisted_4$g,
        vue.withDirectives(vue.createElementVNode("input", {
          type: "tel",
          class: vue.normalizeClass(['form-control prevent-zero rupiah', $setup.classes]),
          placeholder: "Text Input",
          "aria-label": "Masukkanrupiah",
          "aria-describedby": "basic-addon1",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.currentValue) = $event)),
          onInput: _cache[1] || (_cache[1] = (...args) => ($options.handleInput && $options.handleInput(...args)))
        }, null, 34 /* CLASS, HYDRATE_EVENTS */), [
          [vue.vModelText, _ctx.currentValue]
        ])
      ])
    ]),
    _hoisted_5$e
  ]))
}

script$z.render = render$z;
script$z.__file = "src/components/Input/InputNominal.vue";

var script$y = {
  name: "k-input",
  props: {
    title: {
      type: String,
      default: "Title",
    },
    icon: {
      type: String,
      default:
        "/assets/images/icon-info.svg",
    },
    placeholder: {
      type: String,
      default: "placeholder . . .",
    },
    value: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  setup(props) {
    props = vue.reactive(props);
    return {
      classes: vue.computed(() => ({
        [`${props.error ? "is-invalid" : ""}`]: true,
      })),
    };
  },
};

const _hoisted_1$x = { class: "p-5" };
const _hoisted_2$r = { class: "group-input" };
const _hoisted_3$k = ["for"];
const _hoisted_4$f = ["src"];
const _hoisted_5$d = { class: "input-group custom-input-group-icon" };
const _hoisted_6$9 = /*#__PURE__*/vue.createElementVNode("div", { class: "input-group-icon" }, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "/assets/images/icon-avatar.svg",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_7$8 = ["type", "id", "disabled", "required", "error", "placeholder"];

function render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$x, [
    vue.createElementVNode("div", _hoisted_2$r, [
      vue.createElementVNode("label", {
        for: $props.title,
        class: "group-input__label"
      }, [
        vue.createTextVNode(vue.toDisplayString($props.title) + " ", 1 /* TEXT */),
        vue.createElementVNode("img", {
          src: $props.icon,
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_4$f)
      ], 8 /* PROPS */, _hoisted_3$k),
      vue.createElementVNode("div", _hoisted_5$d, [
        _hoisted_6$9,
        vue.createElementVNode("input", {
          type: $props.type,
          class: vue.normalizeClass(['form-control', $setup.classes]),
          id: _ctx.name,
          onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('input', $event.target.value))),
          disabled: $props.disabled,
          required: $props.required,
          error: $props.error,
          placeholder: $props.placeholder
        }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_7$8)
      ])
    ])
  ]))
}

script$y.render = render$y;
script$y.__file = "src/components/Input/InputSmallText.vue";

var script$x = {
  name: "k-input",
  props: {
    title: {
      type: String,
      default: "Title",
    },
    icon: {
      type: String,
      default:
        "/assets/images/icon-info.svg",
    },
    placeholder: {
      type: String,
      default: "placeholder Textarea . . .",
    },
    value: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  setup(props) {
    props = vue.reactive(props);
    return {
      classes: vue.computed(() => ({
        [`${props.error ? "is-invalid" : ""}`]: true,
      })),
    };
  },
};

const _hoisted_1$w = { class: "p-5" };
const _hoisted_2$q = { class: "group-input" };
const _hoisted_3$j = {
  for: "",
  class: "group-input__label"
};
const _hoisted_4$e = /*#__PURE__*/vue.createElementVNode("img", {
  src: "/assets/images/icon-info.svg",
  alt: ""
}, null, -1 /* HOISTED */);
const _hoisted_5$c = { class: "input-group custom-input-group-lg-icon" };
const _hoisted_6$8 = /*#__PURE__*/vue.createElementVNode("div", { class: "input-group-icon" }, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "/assets/images/icon-avatar.svg",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_7$7 = ["type", "id", "disabled", "required", "error", "placeholder"];

function render$x(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$w, [
    vue.createElementVNode("div", _hoisted_2$q, [
      vue.createElementVNode("label", _hoisted_3$j, [
        vue.createTextVNode(vue.toDisplayString($props.title) + " ", 1 /* TEXT */),
        _hoisted_4$e
      ]),
      vue.createElementVNode("div", _hoisted_5$c, [
        _hoisted_6$8,
        vue.createElementVNode("textarea", {
          type: $props.type,
          class: vue.normalizeClass(['form-control', $setup.classes]),
          id: _ctx.name,
          onInput: _cache[0] || (_cache[0] = $event => (_ctx.$emit('input', $event.target.value))),
          disabled: $props.disabled,
          required: $props.required,
          error: $props.error,
          placeholder: $props.placeholder
        }, null, 42 /* CLASS, PROPS, HYDRATE_EVENTS */, _hoisted_7$7)
      ])
    ])
  ]))
}

script$x.render = render$x;
script$x.__file = "src/components/Input/InputTextArea.vue";

var script$w = {
  name: "k-label",
  props: {
    text: {
      type: String,
      default: "Status",
    },
    variant: {
      type: String,
      default: "",
      Validator: function (value) {
        return ["blue", "red", "yellow"].indexOf(value) !== -1;
      },
    },
  },
  setup(props) {
    props = vue.reactive(props);
    return {
      classes: vue.computed(() => ({
        [`${
          props.variant ? `pgd-status-${props.variant}` : "pgd-status"
        }`]: true,
      })),
    };
  },
};

function render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass([$setup.classes])
  }, vue.toDisplayString($props.text), 3 /* TEXT, CLASS */))
}

script$w.render = render$w;
script$w.__file = "src/components/Label/Label.vue";

var script$v = {
  name: "k-label-icon",
  props: {
    text: {
      type: String,
      default: "Status",
    },
    variant: {
      type: String,
      default: "",
      Validator: function (value) {
        return ["blue", "red", "yellow"].indexOf(value) !== -1;
      },
    },
    icon: {
      type: String,
      default:
        "/assets/images/icon-crown-green.svg",
    },
  },
  setup(props) {
    props = vue.reactive(props);
    return {
      classes: vue.computed(() => ({
        [`${
          props.variant ? `pgd-status-${props.variant}` : "pgd-status"
        }`]: true,
      })),
    };
  },
};

const _hoisted_1$v = ["src"];

function render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createElementVNode("div", {
      class: vue.normalizeClass([$setup.classes])
    }, [
      vue.createElementVNode("img", {
        src: $props.icon,
        alt: ""
      }, null, 8 /* PROPS */, _hoisted_1$v),
      vue.createTextVNode(vue.toDisplayString($props.text), 1 /* TEXT */)
    ], 2 /* CLASS */),
    vue.createCommentVNode(" <div class=\"pgd-status-blue\">\n    <img\n      src=\"https://dl.dropboxusercontent.com/s/8dx7mmeozqodu20/icon-crown.svg\"\n      alt=\"\"\n    />Status\n  </div> ")
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

script$v.render = render$v;
script$v.__file = "src/components/Label/LabelIcon.vue";

var script$u = {
  name: "k-list-group-ordered",
  props: {
    items: {
      type: Array,
      default: function () {
        return [
          "Nasabah mengisi formulir dan melampirkan fotokopi KTP",
          "Nasabah membayar biaya admin Rp 10.000, biaya pengelolaan rekening Rp30.000 dan biaya materai Rp 10.000",
          "Nasabah membeli emas batangan dengan berat minimal 0.01 gram",
          "Nasabah membeli emas batangan dengan berat minimal 0.01 gram",
        ];
      },
    },
  },
};

const _hoisted_1$u = { class: "styled-ol" };

function render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("ol", _hoisted_1$u, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
      return (vue.openBlock(), vue.createElementBlock("li", { key: index }, vue.toDisplayString(item), 1 /* TEXT */))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script$u.render = render$u;
script$u.__file = "src/components/ListGroup/ListGroupOrdered.vue";

var script$t = {
  name: "k-list-group-unit",
  props: {
    icon: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "sm",
      Validator: function (value) {
        return ["lg", "sm"].indexOf(value) !== -1;
      },
    },
  },
  setup(props) {
    props = vue.reactive(props);
    return {
      classes: vue.computed(() => ({
        [`${props.size ? `${props.size}-unit` : "sm-unit"}`]: true,
      })),
    };
  },
};

const _hoisted_1$t = { class: "p-2" };
const _hoisted_2$p = /*#__PURE__*/vue.createElementVNode("img", {
  src: "/assets/images/checklist.svg",
  alt: ""
}, null, -1 /* HOISTED */);
const _hoisted_3$i = /*#__PURE__*/vue.createElementVNode("p", null, " Dapatx dicicil dan dilunasi sewaktu-waktu, serta bisa diperpanjang berkali-kali. ", -1 /* HOISTED */);
const _hoisted_4$d = [
  _hoisted_2$p,
  _hoisted_3$i
];
const _hoisted_5$b = { class: "p-2" };
const _hoisted_6$7 = /*#__PURE__*/vue.createElementVNode("img", {
  src: "/assets/images/checklist.svg",
  alt: ""
}, null, -1 /* HOISTED */);
const _hoisted_7$6 = /*#__PURE__*/vue.createElementVNode("p", null, " Dapat dicicil dan dilunasi sewaktu-waktu, serta bisa diperpanjang berkali-kali. ", -1 /* HOISTED */);
const _hoisted_8$5 = [
  _hoisted_6$7,
  _hoisted_7$6
];

function render$t(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createElementVNode("div", _hoisted_1$t, [
      vue.createElementVNode("div", {
        class: vue.normalizeClass(['card-why-produk', $setup.classes])
      }, _hoisted_4$d, 2 /* CLASS */)
    ]),
    vue.createElementVNode("div", _hoisted_5$b, [
      vue.createElementVNode("div", {
        class: vue.normalizeClass(['card-why-produk', $setup.classes])
      }, _hoisted_8$5, 2 /* CLASS */)
    ])
  ], 64 /* STABLE_FRAGMENT */))
}

script$t.render = render$t;
script$t.__file = "src/components/ListGroup/ListGroupUnit.vue";

var script$s = {
  name: "k-list-group-unordered",
  props: {
    items: {
      type: Array,
      default: function () {
        return [
          "Memiliki identitas yang masih berlaku (KTP/Paspor)",
          "Mengisi formulir pembukaan Rekening Tabungan Emas",
          "Biaya transaksi Tabungan Emas",
        ];
      },
    },
  },
};

const _hoisted_1$s = { class: "styled-ul" };

function render$s(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("ul", _hoisted_1$s, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
      return (vue.openBlock(), vue.createElementBlock("li", { key: index }, vue.toDisplayString(item), 1 /* TEXT */))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script$s.render = render$s;
script$s.__file = "src/components/ListGroup/ListGroupUnordered.vue";

var script$r = {
  name: "k-navbar-pds-onboarding",
  props: {
    image: {
      type: String,
      default:
        "/assets/images/logo-pds.svg",
    },
    signIn: {
      type: Object,
      default: function () {
        return {
          label: "MASUK",
          action: "../onboarding/index.html",
        };
      },
      label: String,
      action: Function,
    },
    signUp: {
      type: Object,
      default: function () {
        return {
          label: "DAFTAR",
          action: "/../registrasi/index.html",
        };
      },
      label: String,
      action: Function,
    },
  },
};

const _hoisted_1$r = { class: "pgd-header sticky-top header-pds" };
const _hoisted_2$o = { class: "navbar navbar-expand-lg navbar-light container" };
const _hoisted_3$h = {
  class: "navbar-brand mr-auto",
  href: "./index.html"
};
const _hoisted_4$c = ["src"];
const _hoisted_5$a = { class: "menu-btn-registrasi" };
const _hoisted_6$6 = ["href"];
const _hoisted_7$5 = ["href"];

function render$r(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("header", _hoisted_1$r, [
    vue.createElementVNode("nav", _hoisted_2$o, [
      vue.createElementVNode("a", _hoisted_3$h, [
        vue.createElementVNode("img", {
          src: $props.image,
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_4$c)
      ]),
      vue.createElementVNode("div", _hoisted_5$a, [
        vue.createElementVNode("a", {
          href: $props.signIn.action,
          class: "btn btn-outline-primary"
        }, vue.toDisplayString($props.signIn.label), 9 /* TEXT, PROPS */, _hoisted_6$6),
        vue.createElementVNode("a", {
          href: $props.signUp.action,
          class: "btn btn-primary"
        }, vue.toDisplayString($props.signUp.label), 9 /* TEXT, PROPS */, _hoisted_7$5)
      ])
    ])
  ]))
}

script$r.render = render$r;
script$r.__file = "src/components/Navbar/NavbarPdsOnboarding.vue";

var script$q = {
  name: "k-navbar-sahabat-pgd",
  props: {
    image: {
      type: String,
      default:
        "/assets/images/logo-sahabat-pegadaian.svg",
    },
    searchHandler: {
      type: Function,
      default: function () {
        console.log("Your Function");
      },
    },
    items: {
      type: Array,
      default: function () {
        return [
          {
            label: "Produt",
            action: "action",
            child: null,
          },
          {
            label: "Promo",
            action: "action",
            child: null,
          },
          {
            label: "Artikel",
            action: "action",
            child: [
              {
                label: "Emas",
                action: "child_action",
              },
              {
                label: "Inspirasi",
                action: "child_action",
              },
              {
                label: "Wirausaha",
                action: "child_action",
              },
            ],
          },
          {
            label: "Acara",
            action: "action_2",
            child: null,
          },
          {
            label: "Simulasi",
            action: "action",
            child: [
              {
                label: "Harga Emas Batangan",
                action: "child_action",
              },
              {
                label: "Simulasi Tabungan Emas",
                action: "child_action",
              },
            ],
          },
        ];
      },
    },
  },
};

const _hoisted_1$q = { class: "pgd-header sticky-top" };
const _hoisted_2$n = { class: "navbar navbar-expand-lg navbar-light container" };
const _hoisted_3$g = {
  class: "navbar-brand mr-auto",
  href: "./index.html"
};
const _hoisted_4$b = ["src"];
const _hoisted_5$9 = /*#__PURE__*/vue.createElementVNode("button", {
  class: "navbar-toggler",
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#navbarSupportedContent",
  "aria-controls": "navbarSupportedContent",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation"
}, [
  /*#__PURE__*/vue.createElementVNode("span", { class: "navbar-toggler-icon hided" })
], -1 /* HOISTED */);
const _hoisted_6$5 = {
  class: "collapse navbar-collapse",
  id: "navbarSupportedContent"
};
const _hoisted_7$4 = { class: "navbar-nav mr-auto" };
const _hoisted_8$4 = /*#__PURE__*/vue.createElementVNode("li", { class: "nav-item search-responsive" }, [
  /*#__PURE__*/vue.createElementVNode("form", { class: "search-responsive__box" }, [
    /*#__PURE__*/vue.createElementVNode("img", {
      src: "/assets/images/search-dark.svg",
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
        src: "/assets/images/close.svg",
        alt: ""
      })
    ])
  ])
], -1 /* HOISTED */);
const _hoisted_9$4 = { key: 0 };
const _hoisted_10$4 = {
  class: "nav-link dropdown-toggle",
  id: "navbarDropdown",
  "aria-haspopup": "true",
  "aria-expanded": "false"
};
const _hoisted_11$3 = {
  class: "dropdown-menu",
  "aria-labelledby": "navbarDropdown"
};
const _hoisted_12$3 = ["href"];
const _hoisted_13$3 = { key: 1 };
const _hoisted_14$3 = ["href"];
const _hoisted_15$3 = /*#__PURE__*/vue.createElementVNode("a", {
  class: "btn btn-search",
  onclick: "openSearchModal()"
}, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "/assets/images/Search.svg",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_16$2 = /*#__PURE__*/vue.createElementVNode("div", { class: "search-modal" }, [
  /*#__PURE__*/vue.createElementVNode("div", { class: "search-modal__box" }, [
    /*#__PURE__*/vue.createElementVNode("form", {
      class: "box-input-search container",
      action: "./search-page.html"
    }, [
      /*#__PURE__*/vue.createElementVNode("div", { class: "box-border-input" }, [
        /*#__PURE__*/vue.createElementVNode("img", {
          src: "/assets/images/search-dark.svg",
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
            src: "/assets/images/close.svg",
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

function render$q(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("header", _hoisted_1$q, [
    vue.createElementVNode("nav", _hoisted_2$n, [
      vue.createElementVNode("a", _hoisted_3$g, [
        vue.createElementVNode("img", {
          src: $props.image,
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_4$b)
      ]),
      _hoisted_5$9,
      vue.createElementVNode("div", _hoisted_6$5, [
        vue.createElementVNode("ul", _hoisted_7$4, [
          _hoisted_8$4,
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
            return (vue.openBlock(), vue.createElementBlock("li", {
              key: index,
              class: vue.normalizeClass(["nav-item", { dropdown: item.child }])
            }, [
              (item.child !== null)
                ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_9$4, [
                    vue.createElementVNode("a", _hoisted_10$4, vue.toDisplayString(item.label), 1 /* TEXT */),
                    vue.createElementVNode("div", _hoisted_11$3, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.child, (child_item, index) => {
                        return (vue.openBlock(), vue.createElementBlock("a", {
                          key: index,
                          class: "dropdown-item",
                          href: child_item.action
                        }, vue.toDisplayString(child_item.label), 9 /* TEXT, PROPS */, _hoisted_12$3))
                      }), 128 /* KEYED_FRAGMENT */))
                    ])
                  ]))
                : (vue.openBlock(), vue.createElementBlock("div", _hoisted_13$3, [
                    vue.createElementVNode("a", {
                      class: "nav-link",
                      href: item.action
                    }, vue.toDisplayString(item.label), 9 /* TEXT, PROPS */, _hoisted_14$3)
                  ]))
            ], 2 /* CLASS */))
          }), 128 /* KEYED_FRAGMENT */))
        ]),
        _hoisted_15$3
      ])
    ]),
    _hoisted_16$2
  ]))
}

script$q.render = render$q;
script$q.__file = "src/components/Navbar/NavbarSahabatPgd.vue";

var script$p = {
  name: "k-nav-back-navigator",
  props: {
    label: {
      type: String,
      default: "Beli Tabungan Emas",
    },
    action: {
      type: Function,
      default: function () {
        window.history.go(-1);
      },
    },
  },
};

const _hoisted_1$p = { class: "section-bg-top bg-white" };
const _hoisted_2$m = { class: "section-bg-top__back bg-white container" };
const _hoisted_3$f = /*#__PURE__*/vue.createElementVNode("img", {
  src: "/assets/images/arrow-left-green.svg",
  alt: ""
}, null, -1 /* HOISTED */);
const _hoisted_4$a = [
  _hoisted_3$f
];
const _hoisted_5$8 = { class: "text-black-80" };

function render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("section", _hoisted_1$p, [
    vue.createElementVNode("div", _hoisted_2$m, [
      vue.createElementVNode("a", {
        onOnclick: _cache[0] || (_cache[0] = (...args) => ($props.action && $props.action(...args)))
      }, _hoisted_4$a, 32 /* HYDRATE_EVENTS */),
      vue.createElementVNode("h4", _hoisted_5$8, vue.toDisplayString($props.label), 1 /* TEXT */)
    ])
  ]))
}

script$p.render = render$p;
script$p.__file = "src/components/Navbar/NavBackNavigator.vue";

var script$o = {
  name: {
    type: "k-navbar-corporate",
  },
  props: {
    image: {
      type: String,
      default:
        "/assets/images/logo-pegadaian-small.svg",
    },
    items: {
      type: Array,
      default: function () {
        return [
          {
            label: "Kerjasama",
            action: "",
            icon: "/assets/images/world.svg",
            child: null,
          },
          {
            label: "Promo",
            action: "",
            icon: "/assets/images/bag-dark.svg",
            child: null,
          },
          {
            label: "Artikel",
            action: "action",
            icon: "",
            child: [
              {
                label: "Emas",
                action: "child_action",
              },
              {
                label: "Inspirasi",
                action: "child_action",
              },
              {
                label: "Wirausaha",
                action: "child_action",
              },
            ],
          },
          {
            label: "Acara",
            action: "action_2",
            child: null,
          },
          {
            label: "Simulasi",
            action: "action",
            child: [
              {
                label: "Harga Emas Batangan",
                action: "child_action",
              },
              {
                label: "Simulasi Tabungan Emas",
                action: "child_action",
              },
            ],
          },
        ];
      },
    },
    searchHandler: {
      type: Function,
      default: function () {
        return "search";
      },
    },
  },
};

const _hoisted_1$o = { class: "main-app-bar" };
const _hoisted_2$l = { class: "navbar navbar-expand-lg navbar-light container" };
const _hoisted_3$e = {
  class: "navbar-brand",
  href: "/"
};
const _hoisted_4$9 = ["src"];
const _hoisted_5$7 = /*#__PURE__*/vue.createElementVNode("button", {
  class: "navbar-toggler-pgd collapsed",
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#navbarSupportedContentTest",
  "aria-controls": "navbarSupportedContentTest",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation",
  onclick: "showMenu()"
}, [
  /*#__PURE__*/vue.createElementVNode("span", { class: "navbar-toggler-icon pgd-corporate hided" })
], -1 /* HOISTED */);
const _hoisted_6$4 = {
  class: "collapse navbar-collapse-pgd",
  id: "navbarSupportedContentTest"
};
const _hoisted_7$3 = { class: "small-app-bar-box" };
const _hoisted_8$3 = { class: "small-app-bar-box-top" };
const _hoisted_9$3 = { class: "small-app-bar-box-top-item-left" };
const _hoisted_10$3 = /*#__PURE__*/vue.createElementVNode("div", { class: "left" }, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "/assets/images/other-square.svg",
    alt: ""
  }),
  /*#__PURE__*/vue.createElementVNode("h5", null, "Menu Lainnya")
], -1 /* HOISTED */);
const _hoisted_11$2 = /*#__PURE__*/vue.createElementVNode("i", { class: "chevron-icon" }, null, -1 /* HOISTED */);
const _hoisted_12$2 = { class: "overlay-header-sm-mobile" };
const _hoisted_13$2 = { class: "modal-menu-lainnya" };
const _hoisted_14$2 = { class: "modal-menu-lainnya__box" };
const _hoisted_15$2 = {
  key: 0,
  class: "modal-menu-lainnya__box-content"
};
const _hoisted_16$1 = ["src"];
const _hoisted_17$1 = ["href"];
const _hoisted_18$1 = ["src"];
const _hoisted_19$1 = /*#__PURE__*/vue.createStaticVNode("<div class=\"small-app-bar-box-top-item-right\"><div class=\"left\"><img src=\"/assets/images/flag_id.svg\" alt=\"\"><h5>ID</h5></div><i class=\"chevron-icon\"></i><div class=\"overlay-header-sm-mobile\"><div class=\"modal-language\"><div class=\"modal-language__box\"><div class=\"modal-language__box-content\"><img src=\"/assets/images/flag_id2.svg\" alt=\"\"><p class=\"active\">ID</p></div><div class=\"modal-language__box-content\"><img src=\"/assets/images/flag_en.svg\" alt=\"\"><p>EN</p></div></div></div></div></div>", 1);
const _hoisted_20$1 = /*#__PURE__*/vue.createStaticVNode("<div class=\"small-app-bar-box-bottom\"><div class=\"small-app-bar-box-bottom-item\"><div class=\"left\"><img class=\"icon\" src=\"/assets/images/lock_icon.svg\" alt=\"\"><h5>Masuk</h5></div><i class=\"chevron-icon\"></i><div class=\"overlay-header-sm-mobile\"><div class=\"modal-type-in\"><div class=\"modal-type-in__box\"><div class=\"modal-type-in__box-content\"><img src=\"/assets/images/logo-pegadaian-digital.svg\" alt=\"\"></div><div class=\"modal-type-in__box-content\"><img src=\"/assets/images/logo-pegadaian-digital-syariah.svg\" alt=\"\"></div></div></div></div></div></div>", 1);
const _hoisted_21$1 = /*#__PURE__*/vue.createStaticVNode("<div class=\"main-app-bar-box\"><div class=\"main-app-bar-box-search\"><form><div class=\"input-group left-icon\"><span class=\"input-group-text\"><img src=\"/assets/images/icon-search-dark.svg\" alt=\"\"></span><input type=\"search\" class=\"form-control\" placeholder=\"Cari kebutuhanmu di sini...\" value=\"\"></div></form></div><div class=\"main-app-bar-box-menu\"><div class=\"accordion accordion-flush\" id=\"accordionMobileMenu\"><div class=\"accordion-item\"><h2 class=\"accordion-header\" id=\"flush-menuOne\"><button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#flush-collapseMenuOne\" aria-expanded=\"false\" aria-controls=\"flush-collapseMenuOne\"> Produk dan Layanan </button></h2><div id=\"flush-collapseMenuOne\" class=\"accordion-collapse collapse\" aria-labelledby=\"flush-menuOne\" data-bs-parent=\"#accordionMobileMenu\"><div class=\"accordion-body\"><h5 class=\"title-menu\">PINJAMAN GADAI</h5><div class=\"link-menu\"><a href=\"/produk/gadai-emas\">Gadai Emas</a><a href=\"/produk/gadai-tabungan-emas\">Gadai Tabungan Emas</a><a href=\"/\">Gadai Titipan Emas</a><a href=\"/produk/gadai-non-emas\">Gadai Non Emas</a><a href=\"/produk/gadai-efek\">Gadai Efek</a><a href=\"/produk/gadai-kendaraan\">Gadai Kendaraan</a><a href=\"/produk/pembiayaan-porsi-haji\">Pembiayaan Porsi Haji</a><a href=\"/produk/pembiayaan-wisata-religi\">Pembiayaan Wisata Religi</a></div><h5 class=\"title-menu\">PINJAMAN NON GADAI</h5><div class=\"link-menu\"><a href=\"/produk/pinjaman-usaha\">Pinjaman Usaha</a><a href=\"/produk/pinjaman-serbaguna\">Pinjaman Serbaguna</a><a href=\"/produk/gadai-sertifikat\">Gadai Sertifikat</a><a href=\"/produk/cicil-emas\">Cicil Emas</a><a href=\"/\">Cicil Kendaraan</a><a href=\"/\">Pinjaman Modal Produktif</a></div><h5 class=\"title-menu\">LAYANAN JASA</h5><div class=\"link-menu\"><a href=\"/produk/tabungan-emas\">Tabungan Emas</a><a href=\"/produk/jasa-taksiran\">Jasa Taksiran</a><a href=\"/produk/jasa-sertifikasi\">Jasa Sertifikasi</a><a href=\"/produk/jasa-titipan\">Jasa Titipan</a><a href=\"/produk/safe-deposit-box\">Safe Deposit Box</a><a href=\"/produk/jasa-pembayaran-online\">Jasa Pembayaran Online</a><a href=\"/produk/jasa-pengiriman-uang\">Jasa Pengiriman Uang</a><a href=\"/produk/titipan-emas-fisik\">Titipan Emas Fisik</a></div><h5 class=\"title-menu\">KORPORASI</h5><div class=\"link-menu\"><a href=\"/\">Pinjaman Kredit Instansi</a><a href=\"/produk/pinjaman-modal-produktif\">Pinjaman Modal Produktif</a><a href=\"/\">Kerja Sama/Partnership</a></div><h5 class=\"title-menu\">HARGA EMAS</h5><div class=\"link-menu\"><a href=\"/produk/harga-emas-batangan-dan-tabungan-tabungan-emas\">Harga Emas Batangan dan Tabungan Emas</a></div></div></div></div><div class=\"accordion-item\"><h2 class=\"accordion-header\" id=\"flush-menuTwo\"><button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#flush-collapseMenuTwo\" aria-expanded=\"false\" aria-controls=\"flush-collapseMenuTwo\"> Hubungan Investor </button></h2><div id=\"flush-collapseMenuTwo\" class=\"accordion-collapse collapse\" aria-labelledby=\"flush-menuTwo\" data-bs-parent=\"#accordionMobileMenu\"><div class=\"accordion-body\"><h5 class=\"title-menu\">KINERJA KEUANGAN</h5><div class=\"link-menu\"><a href=\"/kinerja-keuangan/laporan-tahunan\">Laporan Tahunan</a><a href=\"/kinerja-keuangan/laporan-keuangan\">Laporan Keuangan</a><a href=\"/kinerja-keuangan/laporan-penawaran-umum\">Laporan Penawaran Umum</a><a href=\"/kinerja-keuangan/rapat-umum-pemegang-saham\">Rapat Umum Pemegang Saham</a><a href=\"/kinerja-keuangan/rapat-umum-pemegang-obligasi\">Informasi Obligasi</a><a href=\"/kinerja-keuangan/propektus-penawaran-umum\">Prospektus Penawaran Umum</a></div><h5 class=\"title-menu\">KEBERLANJUTAN</h5><div class=\"link-menu\"><a href=\"/keberlanjutan/sustainability-report\">Sustainability Report</a><a href=\"/keberlanjutan/kemitraan\">Kemitraan</a><a href=\"/keberlanjutan/bina-lingkungan\">Bina Lingkungan</a><a href=\"/keberlanjutan/lingkungan-hidup\">Lingkungan Hidup</a><a href=\"/keberlanjutan/ketenagakerjaan-kesehatan-keselamtan-kerja\">Ketenagakerjaan, Kesehatan, dan Keselamatan Kerja</a><a href=\"/keberlanjutan/tanggung-jawab-produk-layanan\">Pengembangan Sosial dan Kemasyarakatan</a><a href=\"/keberlanjutan/pengembangan-sosial-dan-kemasyarakatan\">Tanggung Jawab Produk dan/atau Layanan</a></div></div></div></div><div class=\"accordion-item\"><h2 class=\"accordion-header\" id=\"flush-menuThree\"><button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#flush-collapseMenuThree\" aria-expanded=\"false\" aria-controls=\"flush-collapseMenuThree\"> Profil Korporasi </button></h2><div id=\"flush-collapseMenuThree\" class=\"accordion-collapse collapse\" aria-labelledby=\"flush-menuThree\" data-bs-parent=\"#accordionMobileMenu\"><div class=\"accordion-body\"><h5 class=\"title-menu\">TENTANG KAMI</h5><div class=\"link-menu\"><a href=\"/profile/sejarah-pegadaian\">Sejarah Pegadaian</a><a href=\"/profile/visi-misi\">Visi &amp; Misi</a><a href=\"/profile/budaya-perusahaan\">Budaya Perusahaan</a><a href=\"/profile/struktur-organisasi\">Struktur Organisasi</a><a href=\"/profile/struktur-grup-perusahaan\">Struktur Grup Perusahaan</a><a href=\"/profile/penghargaan\">Penghargaan</a><a href=\"/profile/dokumen-anggaran-dasar\">Dokumen Anggaran Dasar</a><div class=\"sub-link-menu\"><div class=\"accordion accordion-flush\" id=\"accordionManejemen\"><div class=\"accordion-item\"><h2 class=\"accordion-header\" id=\"flush-headingManajemenOne\"><button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#flush-collapseManajemenOne\" aria-expanded=\"false\" aria-controls=\"flush-collapseManajemenOne\"> Manajemen </button></h2><div id=\"flush-collapseManajemenOne\" class=\"accordion-collapse collapse\" aria-labelledby=\"flush-headingManajemenOne\" data-bs-parent=\"#accordionManejemen\"><div class=\"accordion-body\"><a href=\"/profile/komisaris\">Jajaran Komisaris</a><a href=\"/profile/direksi\">Jajaran Direksi</a><a href=\"/profile/komite\">Komite</a><a href=\"/profile/sekertaris-perusahaan\">Sekretaris Perusahaan</a><a target=\"_blank\" href=\"https://ppid.pegadaian.co.id/\">Layanan Informasi Publik</a></div></div></div></div></div></div><h5 class=\"title-menu\">TATA KELOLA</h5><div class=\"link-menu\"><a href=\"/tata-kelola/pedoman-kerja\">Pedoman Kerja</a><div class=\"sub-link-menu\"><div class=\"accordion accordion-flush\" id=\"accordionPengangkatandanPemberhentian\"><div class=\"accordion-item\"><h2 class=\"accordion-header\" id=\"flush-headingPengangkatandanPemberhentianOne\"><button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#flush-collapsePengangkatandanPemberhentianOne\" aria-expanded=\"false\" aria-controls=\"flush-collapsePengangkatandanPemberhentianOne\"> Pengangkatan &amp; Pemberhentian </button></h2><div id=\"flush-collapsePengangkatandanPemberhentianOne\" class=\"accordion-collapse collapse\" aria-labelledby=\"flush-headingPengangkatandanPemberhentianOne\" data-bs-parent=\"#accordionPengangkatandanPemberhentian\"><div class=\"accordion-body\"><a href=\"/tata-kelola/pengangkatan-dan-pemberhentian-sekretaris-perusahaan\">Sekretaris Perusahaan</a><a href=\"/tata-kelola/pengangkatan-dan-pemberhentian-anggota-komite-audit\">Anggota Komite Audit</a></div></div></div></div></div><a href=\"/tata-kelola/kode-etik\">Kode Etik</a><a href=\"/tata-kelola/sistem-pelaporan-pelanggan\">Sistem Pelaporan Pelanggaran</a><div class=\"sub-link-menu\"><div class=\"accordion accordion-flush\" id=\"accordionKebijakan\"><div class=\"accordion-item\"><h2 class=\"accordion-header\" id=\"flush-headingKebijakanOne\"><button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#flush-collapseKebijakanOne\" aria-expanded=\"false\" aria-controls=\"flush-collapseKebijakanOne\"> Kebijakan </button></h2><div id=\"flush-collapseKebijakanOne\" class=\"accordion-collapse collapse\" aria-labelledby=\"flush-headingKebijakanOne\" data-bs-parent=\"#accordionKebijakan\"><div class=\"accordion-body\"><a href=\"/tata-kelola/kebijakan-manajemen-resiko\">Manajemen Risiko</a><a href=\"/tata-kelola/kebijakan-anti-korupsi\">Anti Korupsi</a><a href=\"/tata-kelola/kebijakan-seleksi-pemasok\">Seleksi Pemasok</a></div></div></div></div></div><a href=\"/tata-kelola/adaptasi-kebiasaan-baru\">Adaptasi Kebiasaan Baru</a><a href=\"/\">e-Announcement</a></div><h5 class=\"title-menu\">PENGADAAN</h5><div class=\"link-menu\"><a href=\"/pengadaan/pengadaan-barang-jasa\">Pengadaan Barang dan Jasa</a><a href=\"/pengadaan/kebijakan-seleksi-pemasok\">Kebijakan Seleksi Pemasok dan Hak Kreditur</a><a href=\"/pengadaan/kebijakan-peningkatan-kemampuan-vendor\">Kebijakan Peningkatan Kemampuan Vendor</a></div></div></div></div></div><div class=\"menu-link\"><a href=\"/berita\">Berita</a></div></div></div>", 1);
const _hoisted_22$1 = /*#__PURE__*/vue.createElementVNode("div", {
  class: "collapse navbar-collapse head-menu",
  id: "navbarSupportedContent"
}, [
  /*#__PURE__*/vue.createElementVNode("div", {
    class: "head-menu__item",
    onclick: "showMenuLgProduk(this)"
  }, [
    /*#__PURE__*/vue.createElementVNode("h5", { class: "" }, "Produk dan Layanan"),
    /*#__PURE__*/vue.createElementVNode("i", { class: "icon" })
  ]),
  /*#__PURE__*/vue.createElementVNode("div", {
    class: "head-menu__item",
    onclick: "showMenuLgHubunganInvestor(this)"
  }, [
    /*#__PURE__*/vue.createElementVNode("h5", { class: "" }, "Hubungan Investor"),
    /*#__PURE__*/vue.createElementVNode("i", { class: "icon" })
  ]),
  /*#__PURE__*/vue.createElementVNode("div", {
    class: "head-menu__item",
    onclick: "showMenuLgProfile(this)"
  }, [
    /*#__PURE__*/vue.createElementVNode("h5", { class: "" }, "Profil Korporasi"),
    /*#__PURE__*/vue.createElementVNode("i", { class: "icon" })
  ]),
  /*#__PURE__*/vue.createElementVNode("a", {
    class: "head-menu__item",
    href: "/berita"
  }, [
    /*#__PURE__*/vue.createElementVNode("h5", { class: "" }, "Berita")
  ]),
  /*#__PURE__*/vue.createElementVNode("div", { class: "head-menu__item" }, [
    /*#__PURE__*/vue.createElementVNode("i", { class: "nav-search-icon" }),
    /*#__PURE__*/vue.createElementVNode("div", { class: "search-box" }, [
      /*#__PURE__*/vue.createElementVNode("form", null, [
        /*#__PURE__*/vue.createElementVNode("div", { class: "input-group left-icon" }, [
          /*#__PURE__*/vue.createElementVNode("span", { class: "input-group-text" }, [
            /*#__PURE__*/vue.createElementVNode("img", {
              src: "/assets/images/icon-search-dark.svg",
              alt: ""
            })
          ]),
          /*#__PURE__*/vue.createElementVNode("input", {
            type: "search",
            class: "form-control",
            placeholder: "Cari kebutuhanmu di sini...",
            value: ""
          })
        ])
      ])
    ])
  ])
], -1 /* HOISTED */);
const _hoisted_23$1 = /*#__PURE__*/vue.createElementVNode("div", { class: "submenu-box" }, [
  /*#__PURE__*/vue.createElementVNode("div", {
    class: "produk-layanan",
    onclick: "showMenuLgProduk()"
  }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "produk-layanan-item" }, [
      /*#__PURE__*/vue.createElementVNode("h5", null, "PINJAMAN GADAI"),
      /*#__PURE__*/vue.createElementVNode("div", { class: "menu-item" }, [
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/gadai-emas" }, "Gadai Emas"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/gadai-tabungan-emas" }, "Gadai Tabungan Emas"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/" }, "Gadai Titipan Emas"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/gadai-non-emas" }, "Gadai Non Emas"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/gadai-efek" }, "Gadai Efek"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/gadai-kendaraan" }, "Gadai Kendaraan"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/pembiayaan-porsi-haji" }, " Pembiayaan Porsi Haji "),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/pembiayaan-wisata-religi" }, " Pembiayaan Wisata Religi ")
      ])
    ]),
    /*#__PURE__*/vue.createElementVNode("div", { class: "produk-layanan-item" }, [
      /*#__PURE__*/vue.createElementVNode("h5", null, "PINJAMAN NON GADAI"),
      /*#__PURE__*/vue.createElementVNode("div", { class: "menu-item" }, [
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/pinjaman-usaha" }, "Pinjaman Usaha"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/pinjaman-serbaguna" }, "Pinjaman Serbaguna"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/gadai-sertifikat" }, "Gadai Sertifikat"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/cicil-emas" }, "Cicil Emas"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/" }, "Cicil Kendaraan"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/pinjaman-modal-produktif" }, " Pinjaman Modal Produktif "),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/pinjaman-modal-kerja" }, " Pinjaman Modal Kerja ")
      ])
    ]),
    /*#__PURE__*/vue.createElementVNode("div", { class: "produk-layanan-item" }, [
      /*#__PURE__*/vue.createElementVNode("h5", null, "LAYANAN JASA"),
      /*#__PURE__*/vue.createElementVNode("div", { class: "menu-item" }, [
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/tabungan-emas" }, "Tabungan Emas"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/jasa-taksiran" }, "Jasa Taksiran"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/jasa-sertifikasi" }, "Jasa Sertifikasi"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/jasa-titipan" }, "Jasa Titipan"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/safe-deposit-box" }, "Safe Deposit Box"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/jasa-pembayaran-online" }, " Jasa Pembayaran Online "),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/jasa-pengiriman-uang" }, " Jasa Pengiriman Uang "),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/titipan-emas-fisik" }, "Titipan Emas Fisik")
      ])
    ]),
    /*#__PURE__*/vue.createElementVNode("div", { class: "produk-layanan-item" }, [
      /*#__PURE__*/vue.createElementVNode("h5", null, "KORPORASI"),
      /*#__PURE__*/vue.createElementVNode("div", { class: "menu-item" }, [
        /*#__PURE__*/vue.createElementVNode("a", { href: "/" }, "Pinjaman Kredit Instansi"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/" }, "Kerja Sama/Partnership")
      ]),
      /*#__PURE__*/vue.createElementVNode("h5", { class: "bottom-title" }, "HARGA EMAS"),
      /*#__PURE__*/vue.createElementVNode("div", { class: "menu-item" }, [
        /*#__PURE__*/vue.createElementVNode("a", { href: "/produk/harga-emas-batangan-dan-tabungan-tabungan-emas" }, " Harga Emas Batangan dan Tabungan Emas ")
      ])
    ])
  ]),
  /*#__PURE__*/vue.createElementVNode("div", {
    class: "hubungan-investor",
    onclick: "showMenuLgHubunganInvestor()"
  }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "hubungan-investor-item" }, [
      /*#__PURE__*/vue.createElementVNode("h5", null, "KINERJA KEUANGAN"),
      /*#__PURE__*/vue.createElementVNode("div", { class: "menu-item" }, [
        /*#__PURE__*/vue.createElementVNode("a", { href: "/kinerja-keuangan/laporan-tahunan" }, " Laporan Tahunan "),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/kinerja-keuangan/laporan-keuangan" }, " Laporan Keuangan "),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/kinerja-keuangan/laporan-penawaran-umum" }, " Laporan Penawaran Umum "),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/kinerja-keuangan/rapat-umum-pemegang-saham" }, " Rapat Umum Pemegang Saham "),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/kinerja-keuangan/rapat-umum-pemegang-obligasi" }, " Informasi Obligasi "),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/kinerja-keuangan/propektus-penawaran-umum" }, " Prospektus Penawaran Umum ")
      ])
    ]),
    /*#__PURE__*/vue.createElementVNode("div", { class: "hubungan-investor-item" }, [
      /*#__PURE__*/vue.createElementVNode("h5", null, "KEBERLANJUTAN"),
      /*#__PURE__*/vue.createElementVNode("div", { class: "menu-item" }, [
        /*#__PURE__*/vue.createElementVNode("a", { href: "/keberlanjutan/sustainability-report" }, " Sustainability Report "),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/keberlanjutan/kemitraan" }, "Kemitraan"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/keberlanjutan/bina-lingkungan" }, "Bina Lingkungan"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/keberlanjutan/lingkungan-hidup" }, "Lingkungan Hidup"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/keberlanjutan/ketenagakerjaan-kesehatan-keselamtan-kerja" }, " Ketenagakerjaan, Kesehatan, dan Keselamatan Kerja "),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/keberlanjutan/tanggung-jawab-produk-layanan" }, " Pengembangan Sosial dan Kemasyarakatan "),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/keberlanjutan/pengembangan-sosial-dan-kemasyarakatan" }, " Tanggung Jawab Produk dan/atau Layanan ")
      ])
    ])
  ]),
  /*#__PURE__*/vue.createElementVNode("div", {
    class: "profile-korporasi",
    onclick: "showMenuLgProfile()"
  }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "profile-korporasi-item" }, [
      /*#__PURE__*/vue.createElementVNode("h5", null, "TENTANG KAMI"),
      /*#__PURE__*/vue.createElementVNode("div", { class: "menu-item" }, [
        /*#__PURE__*/vue.createElementVNode("a", { href: "/profile/sejarah-pegadaian" }, "Sejarah Pegadaian"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/profile/visi-misi" }, "Visi & Misi"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/profile/budaya-perusahaan" }, "Budaya Perusahaan"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/profile/struktur-organisasi" }, "Struktur Organisasi"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/profile/struktur-grup-perusahaan" }, " Struktur Grup Perusahaan "),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/profile/penghargaan" }, "Penghargaan"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/profile/dokumen-anggaran-dasar" }, " Dokumen Anggaran Dasar "),
        /*#__PURE__*/vue.createElementVNode("div", { class: "sub-menu-item" }, [
          /*#__PURE__*/vue.createTextVNode(" Manajemen "),
          /*#__PURE__*/vue.createElementVNode("i", { class: "icon-chevron" }),
          /*#__PURE__*/vue.createElementVNode("div", { class: "sub-menu-item-box sub-menu-item-box-bottom" }, [
            /*#__PURE__*/vue.createElementVNode("a", { href: "/profile/komisaris" }, "Jajaran Komisaris"),
            /*#__PURE__*/vue.createElementVNode("a", { href: "/profile/direksi" }, "Jajaran Direksi"),
            /*#__PURE__*/vue.createElementVNode("a", { href: "/profile/komite" }, "Komite"),
            /*#__PURE__*/vue.createElementVNode("a", { href: "/profile/sekertaris-perusahaan" }, " Sekretaris Perusahaan ")
          ])
        ]),
        /*#__PURE__*/vue.createElementVNode("a", {
          href: "https://ppid.pegadaian.co.id/",
          target: "_blank"
        }, " Layanan Informasi Publik ")
      ])
    ]),
    /*#__PURE__*/vue.createElementVNode("div", { class: "profile-korporasi-item" }, [
      /*#__PURE__*/vue.createElementVNode("h5", null, "TATA KELOLA"),
      /*#__PURE__*/vue.createElementVNode("div", { class: "menu-item" }, [
        /*#__PURE__*/vue.createElementVNode("a", { href: "/tata-kelola/pedoman-kerja" }, "Pedoman Kerja"),
        /*#__PURE__*/vue.createElementVNode("div", { class: "sub-menu-item" }, [
          /*#__PURE__*/vue.createTextVNode(" Pengangkatan & Pemberhentian "),
          /*#__PURE__*/vue.createElementVNode("i", { class: "icon-chevron" }),
          /*#__PURE__*/vue.createElementVNode("div", { class: "sub-menu-item-box sub-menu-item-box-top" }, [
            /*#__PURE__*/vue.createElementVNode("a", { href: "/tata-kelola/pengangkatan-dan-pemberhentian-sekretaris-perusahaan" }, " Sekretaris Perusahaan "),
            /*#__PURE__*/vue.createElementVNode("a", { href: "/tata-kelola/pengangkatan-dan-pemberhentian-anggota-komite-audit" }, " Anggota Komite Audit ")
          ])
        ]),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/tata-kelola/kode-etik" }, "Kode Etik"),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/tata-kelola/sistem-pelaporan-pelanggan" }, " Sistem Pelaporan Pelanggaran "),
        /*#__PURE__*/vue.createElementVNode("div", { class: "sub-menu-item" }, [
          /*#__PURE__*/vue.createTextVNode(" Kebijakan "),
          /*#__PURE__*/vue.createElementVNode("i", { class: "icon-chevron" }),
          /*#__PURE__*/vue.createElementVNode("div", { class: "sub-menu-item-box sub-menu-item-box-top" }, [
            /*#__PURE__*/vue.createElementVNode("a", { href: "/tata-kelola/kebijakan-manajemen-resiko" }, " Manajemen Risiko "),
            /*#__PURE__*/vue.createElementVNode("a", { href: "/tata-kelola/kebijakan-anti-korupsi" }, " Anti Korupsi "),
            /*#__PURE__*/vue.createElementVNode("a", {
              href: "/tata-kelola/kebijakan-seleksi-pemasok",
              class: "sub-menu-box__item"
            }, " Seleksi Pemasok ")
          ])
        ]),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/tata-kelola/adaptasi-kebiasaan-baru" }, " Adaptasi Kebiasaan Baru "),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/" }, "e-Announcement")
      ])
    ]),
    /*#__PURE__*/vue.createElementVNode("div", { class: "profile-korporasi-item" }, [
      /*#__PURE__*/vue.createElementVNode("h5", null, "PENGADAAN"),
      /*#__PURE__*/vue.createElementVNode("div", { class: "menu-item" }, [
        /*#__PURE__*/vue.createElementVNode("a", { href: "/pengadaan/pengadaan-barang-jasa" }, " Pengadaan Barang dan Jasa "),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/pengadaan/kebijakan-seleksi-pemasok" }, " Kebijakan Seleksi Pemasok dan Hak Kreditur "),
        /*#__PURE__*/vue.createElementVNode("a", { href: "/pengadaan/kebijakan-peningkatan-kemampuan-vendor" }, " Kebijakan Peningkatan Kemampuan Vendor ")
      ])
    ])
  ])
], -1 /* HOISTED */);

function render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createElementVNode("header", _hoisted_1$o, [
      vue.createElementVNode("nav", _hoisted_2$l, [
        vue.createElementVNode("a", _hoisted_3$e, [
          vue.createElementVNode("img", {
            src: $props.image,
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_4$9)
        ]),
        _hoisted_5$7,
        vue.createElementVNode("div", _hoisted_6$4, [
          vue.createElementVNode("div", _hoisted_7$3, [
            vue.createElementVNode("div", _hoisted_8$3, [
              vue.createElementVNode("div", _hoisted_9$3, [
                _hoisted_10$3,
                _hoisted_11$2,
                vue.createElementVNode("div", _hoisted_12$2, [
                  vue.createElementVNode("div", _hoisted_13$2, [
                    vue.createElementVNode("div", _hoisted_14$2, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
                        return (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: index }, [
                          (!item.action)
                            ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_15$2, [
                                vue.createElementVNode("img", {
                                  src: item.icon,
                                  alt: ""
                                }, null, 8 /* PROPS */, _hoisted_16$1),
                                vue.createElementVNode("p", null, vue.toDisplayString(item.label), 1 /* TEXT */)
                              ]))
                            : (vue.openBlock(), vue.createElementBlock("a", {
                                key: 1,
                                class: "modal-menu-lainnya__box-content",
                                href: item.action
                              }, [
                                vue.createElementVNode("img", {
                                  src: item.icon,
                                  alt: ""
                                }, null, 8 /* PROPS */, _hoisted_18$1),
                                vue.createElementVNode("p", null, vue.toDisplayString(item.label), 1 /* TEXT */)
                              ], 8 /* PROPS */, _hoisted_17$1))
                        ], 64 /* STABLE_FRAGMENT */))
                      }), 128 /* KEYED_FRAGMENT */))
                    ])
                  ])
                ])
              ]),
              _hoisted_19$1
            ]),
            _hoisted_20$1
          ]),
          _hoisted_21$1
        ]),
        _hoisted_22$1
      ])
    ]),
    _hoisted_23$1
  ], 64 /* STABLE_FRAGMENT */))
}

script$o.render = render$o;
script$o.__file = "src/components/Navbar/NavbarCorporate.vue";

var script$n = {
  name: "k-nav-beli-tabungan-emas",
  props: {
    label: {
      type: String,
      default: "Beli Tabungan Emas",
    },
    action: {
      type: Function,
      default: function () {
        window.history.go(-1);
      },
    },
  },
};

const _hoisted_1$n = { class: "section-bg-top" };
const _hoisted_2$k = { class: "section-bg-top__back container" };
const _hoisted_3$d = /*#__PURE__*/vue.createElementVNode("img", {
  src: "/assets/images/arrow-left-white.svg",
  alt: ""
}, null, -1 /* HOISTED */);
const _hoisted_4$8 = [
  _hoisted_3$d
];

function render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("section", _hoisted_1$n, [
    vue.createElementVNode("div", _hoisted_2$k, [
      vue.createElementVNode("a", {
        onOnclick: _cache[0] || (_cache[0] = (...args) => ($props.action && $props.action(...args)))
      }, _hoisted_4$8, 32 /* HYDRATE_EVENTS */),
      vue.createElementVNode("h4", null, vue.toDisplayString($props.label), 1 /* TEXT */)
    ])
  ]))
}

script$n.render = render$n;
script$n.__file = "src/components/Navbar/NavBeliTabunganEmas.vue";

var script$m = {
  name: "k-nav-bottom-tab",
  props: {
    items: {
      default: function () {
        return [
          {
            label: "Beranda",
            icon: "/assets/images/icon-home-active.svg",
            action: () => console.log("Clicked"),
          },
          {
            label: "Riwayat",
            icon: "/assets/images/icon-history-idle.svg",
            action: () => console.log("Clicked"),
          },
          {
            label: "Notifikasi",
            icon: "/assets/images/icon-notif-idle.svg",
            action: () => console.log("Clicked"),
          },
          {
            label: "Profil",
            icon: "/assets/images/icon-profile-idle.svg",
            action: () => console.log("Clicked"),
          },
        ];
      },
    },
  },
};

const _hoisted_1$m = { style: {"position":"relative"} };
const _hoisted_2$j = {
  class: "section-nav-bottom d-block",
  style: {"display":"grid !important"}
};
const _hoisted_3$c = ["href"];
const _hoisted_4$7 = { class: "img-box" };
const _hoisted_5$6 = ["src"];

function render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$m, [
    vue.createElementVNode("section", _hoisted_2$j, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
        return (vue.openBlock(), vue.createElementBlock("a", {
          href: item.action,
          class: "section-nav-bottom__box active",
          key: index
        }, [
          vue.createElementVNode("div", _hoisted_4$7, [
            vue.createElementVNode("img", {
              src: item.icon,
              alt: ""
            }, null, 8 /* PROPS */, _hoisted_5$6)
          ]),
          vue.createElementVNode("h6", null, vue.toDisplayString(item.label), 1 /* TEXT */)
        ], 8 /* PROPS */, _hoisted_3$c))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}

script$m.render = render$m;
script$m.__file = "src/components/Navbar/NavBottomTab.vue";

var script$l = {
  name: "k-nav-menu-dropdown",
  props: {
    otherMenu: {
      type: Object,
      label: String,
      icon: String,
      child: Array,
      default: function () {
        return {
          label: "Menu Lainnya",
          icon: "/assets/images/icon-other-square-green.svg",
          child: [
            {
              label: "Kerjasama",
              action: "",
              icon: "/assets/icon/icon-system/icon-world.svg",
            },
            {
              label: "Cabang",
              action: "/lokasi-cabang",
              icon: "/assets/icon/icon-system/icon-location-outline.svg",
            },

            {
              label: "Karir",
              action: "/karir",
              icon: "/assets/icon/icon-system/icon-case.svg",
            },
            {
              label: "Hubungi Kami",
              action: "/hubungi-kami",
              icon: "/assets/icon/icon-system/icon-send.svg",
            },
          ],
        };
      },
    },
    languageMenu: {
      type: Object,
      default: function () {
        return {
          default: "ID",
          item: [
            {
              label: "ID",
              icon: "https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/icons/icon-system/icon-flag-Indonesian.svg",
            },
            {
              label: "EN",
              icon: "https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/icons/icon-system/icon-flag-English.svg",
            },
          ],
        };
      },
      item: Array,
    },
    signInMenu: {
      type: Object,
      label: String,
      icon: String,
      child: Array,
      default: function () {
        return {
          label: "Masuk",
          icon: "https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/icons/icon-system/icon-lock.svg",
          child: [
            {
              label: "child_label",
              icon: "https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/logo-pgd/logo-pgd-pds-horizontal.svg",
            },
            {
              label: "child_label",
              icon: "https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/images/logo-pgd/logo-pgd-pds-horizontal.svg",
            },
          ],
        };
      },
    },
  },
};

const _hoisted_1$l = { class: "small-app-bar active" };
const _hoisted_2$i = { class: "small-app-bar__box container fadeIn" };
const _hoisted_3$b = { class: "small-app-bar__box-item" };
const _hoisted_4$6 = ["src"];
const _hoisted_5$5 = /*#__PURE__*/vue.createElementVNode("i", { class: "chevron-icon" }, null, -1 /* HOISTED */);
const _hoisted_6$3 = { class: "overlay-header-sm" };
const _hoisted_7$2 = { class: "modal-menu-lainnya" };
const _hoisted_8$2 = { class: "modal-menu-lainnya__box" };
const _hoisted_9$2 = ["href"];
const _hoisted_10$2 = ["src"];
const _hoisted_11$1 = { class: "small-app-bar__box-item box-language" };
const _hoisted_12$1 = /*#__PURE__*/vue.createElementVNode("img", {
  src: "/assets/icon/icon-system/icon-flag-Indonesian.svg",
  alt: ""
}, null, -1 /* HOISTED */);
const _hoisted_13$1 = /*#__PURE__*/vue.createElementVNode("i", { class: "chevron-icon" }, null, -1 /* HOISTED */);
const _hoisted_14$1 = { class: "overlay-header-sm" };
const _hoisted_15$1 = { class: "modal-language" };
const _hoisted_16 = { class: "modal-language__box" };
const _hoisted_17 = ["src"];
const _hoisted_18 = { class: "small-app-bar__box-item primary-box" };
const _hoisted_19 = ["src"];
const _hoisted_20 = /*#__PURE__*/vue.createElementVNode("i", { class: "chevron-icon" }, null, -1 /* HOISTED */);
const _hoisted_21 = { class: "overlay-header-sm" };
const _hoisted_22 = { class: "modal-type-in" };
const _hoisted_23 = { class: "modal-type-in__box" };
const _hoisted_24 = ["src"];

function render$l(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$l, [
    vue.createElementVNode("div", _hoisted_2$i, [
      vue.createElementVNode("div", _hoisted_3$b, [
        vue.createElementVNode("img", {
          src: $props.otherMenu.icon,
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_4$6),
        vue.createElementVNode("h5", null, vue.toDisplayString($props.otherMenu.label), 1 /* TEXT */),
        _hoisted_5$5,
        vue.createElementVNode("div", _hoisted_6$3, [
          vue.createElementVNode("div", _hoisted_7$2, [
            vue.createElementVNode("div", _hoisted_8$2, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.child, (item, index) => {
                return (vue.openBlock(), vue.createElementBlock("a", {
                  key: index,
                  class: "modal-menu-lainnya__box-content",
                  href: item.action
                }, [
                  vue.createElementVNode("img", {
                    src: item.icon,
                    alt: ""
                  }, null, 8 /* PROPS */, _hoisted_10$2),
                  vue.createElementVNode("p", null, vue.toDisplayString(item.label), 1 /* TEXT */)
                ], 8 /* PROPS */, _hoisted_9$2))
              }), 128 /* KEYED_FRAGMENT */))
            ])
          ])
        ])
      ]),
      vue.createElementVNode("div", _hoisted_11$1, [
        _hoisted_12$1,
        vue.createElementVNode("h5", null, vue.toDisplayString($props.languageMenu.default), 1 /* TEXT */),
        _hoisted_13$1,
        vue.createElementVNode("div", _hoisted_14$1, [
          vue.createElementVNode("div", _hoisted_15$1, [
            vue.createElementVNode("div", _hoisted_16, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.languageMenu.item, (it, index) => {
                return (vue.openBlock(), vue.createElementBlock("div", {
                  key: index,
                  class: "modal-language__box-content"
                }, [
                  vue.createElementVNode("img", {
                    src: it.icon,
                    alt: ""
                  }, null, 8 /* PROPS */, _hoisted_17),
                  vue.createElementVNode("p", {
                    class: vue.normalizeClass(it.label == $props.languageMenu.default ? 'active' : '')
                  }, vue.toDisplayString(it.label), 3 /* TEXT, CLASS */)
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ])
          ])
        ])
      ]),
      vue.createElementVNode("div", _hoisted_18, [
        vue.createElementVNode("img", {
          class: "icon",
          src: $props.signInMenu.icon,
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_19),
        vue.createElementVNode("h5", null, vue.toDisplayString($props.signInMenu.label), 1 /* TEXT */),
        _hoisted_20,
        vue.createElementVNode("div", _hoisted_21, [
          vue.createElementVNode("div", _hoisted_22, [
            vue.createElementVNode("div", _hoisted_23, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.signInMenu.child, (item, index) => {
                return (vue.openBlock(), vue.createElementBlock("div", {
                  key: index,
                  class: "modal-type-in__box-content"
                }, [
                  vue.createElementVNode("img", {
                    src: item.icon,
                    alt: ""
                  }, null, 8 /* PROPS */, _hoisted_24)
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ])
          ])
        ])
      ])
    ])
  ]))
}

script$l.render = render$l;
script$l.__file = "src/components/Navbar/NavMenuDropdown.vue";

var script$k = {
  name: "k-line-shape",
  props: {},
};

const _hoisted_1$k = { class: "line-shape" };

function render$k(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$k))
}

script$k.render = render$k;
script$k.__file = "src/components/Shape/LineShape.vue";

var script$j = {
  name: "k-tab-group",
  props: {
    items: {
      type: Array,
      default: function () {
        return [
          {
            label: "title",
            active: true,
            action: function () {
              return "/";
            },
            icon: "/assets/images/ico-tabungan.svg",
          },
          {
            label: "title 2",
            active: false,
            action: function () {
              return "/";
            },
            icon: "/assets/images/ico-uang.svg",
          },
          {
            label: "title_3",
            active: false,
            action: function () {
              return "/";
            },
            icon: "/assets/images/ico-invest-emas.svg",
          },
        ];
      },
    },
  },
  methods: {
    sanitize: function (str = "") {
      return str.replace(/ /g, "");
    },
  },
};

const _hoisted_1$j = {
  class: "nav nav-underline tab-group",
  id: "pills-tab-section",
  role: "tablist"
};
const _hoisted_2$h = ["id", "data-bs-target", "aria-controls"];

function render$j(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("ul", _hoisted_1$j, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
      return (vue.openBlock(), vue.createElementBlock("li", {
        key: index,
        class: "nav-item",
        role: "presentation"
      }, [
        vue.createElementVNode("button", {
          class: vue.normalizeClass(["nav-link", item.active ? ' active' : '']),
          id: $options.sanitize(item.label),
          "data-bs-toggle": "pill",
          "data-bs-target": `#${$options.sanitize(item.label)}-box`,
          type: "button",
          role: "tab",
          "aria-controls": `${$options.sanitize(item.label)}-box`,
          "aria-selected": "true"
        }, vue.toDisplayString(item.label), 11 /* TEXT, CLASS, PROPS */, _hoisted_2$h)
      ]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script$j.render = render$j;
script$j.__file = "src/components/Tab/TabGroup.vue";

var script$i = {
  name: "k-tab-kategori",
  props: {
    items: {
      type: Array,
      default: function () {
        return [
          {
            label: "Konvensional",
            active: true,
            action: function () {
              return "/";
            },
          },
          {
            label: "Syariah",
            active: false,
            action: function () {
              return "/";
            },
          },
        ];
      },
    },
  },
};

const _hoisted_1$i = {
  class: "nav nav-underline",
  id: "pills-tab-section",
  role: "tablist"
};
const _hoisted_2$g = ["id", "data-bs-target", "aria-controls"];

function render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("ul", _hoisted_1$i, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
      return (vue.openBlock(), vue.createElementBlock("li", {
        key: index,
        class: "nav-item w-50 text-center",
        role: "presentation"
      }, [
        vue.createElementVNode("a", {
          class: vue.normalizeClass(["nav-link", item.active ? ' active' : '']),
          id: item.label + '-tab',
          "data-bs-toggle": "pill",
          "data-bs-target": item.label + '-box',
          type: "button",
          role: "tab",
          "aria-controls": item.label + '-box',
          "aria-selected": "true"
        }, vue.toDisplayString(item.label), 11 /* TEXT, CLASS, PROPS */, _hoisted_2$g)
      ]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script$i.render = render$i;
script$i.__file = "src/components/Tab/TabKategori.vue";

var script$h = {
  name: "k-tab-product",
  props: {
    items: {
      type: Array,
      default: function () {
        return [
          {
            label: "Tabungan Emas",
            active: true,
            action: function () {
              return "/";
            },
            icon: "/assets/images/ico-tabungan.svg",
          },
          {
            label: "Pinjamattn",
            active: false,
            action: function () {
              return "/";
            },
            icon: "/assets/images/ico-uang.svg",
          },
          {
            label: "Gadai",
            active: false,
            action: function () {
              return "/";
            },
            icon: "/assets/images/ico-invest-emas.svg",
          },
          {
            label: "Pembiayaan",
            active: false,
            action: function () {
              return "/";
            },
            icon: "/assets/images/ico-pembiayaan-no-bg.svg",
          },
          {
            label: "Cicil Emas",
            active: false,
            action: function () {
              return "/";
            },
            icon: "/assets/images/ico-cicil-emas-no-bg.svg",
          },
          {
            label: "Pembayaran & Topup",
            active: false,
            action: function () {
              return "/";
            },
            icon: "/assets/images/ico-pembayaran-no-bg.svg",
          },
          {
            label: "Titipan Emas",
            active: false,
            action: function () {
              return "/";
            },
            icon: "/assets/images/ico-gadai-titipan-emas-fisik.svg",
          },
        ];
      },
    },
  },
};

const _hoisted_1$h = { class: "deck-product-riwayat" };
const _hoisted_2$f = ["href"];
const _hoisted_3$a = { class: "pgd-btn-featured-product__img-box" };
const _hoisted_4$5 = ["src"];
const _hoisted_5$4 = { class: "pgd-btn-featured-product__title" };

function render$h(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$h, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
      return (vue.openBlock(), vue.createElementBlock("a", {
        key: index,
        href: item.action,
        class: vue.normalizeClass(["pgd-btn-featured-product deck-product-riwayat__item", item.active ? ' active' : ''])
      }, [
        vue.createElementVNode("div", _hoisted_3$a, [
          vue.createElementVNode("img", {
            src: item.icon,
            alt: ""
          }, null, 8 /* PROPS */, _hoisted_4$5)
        ]),
        vue.createElementVNode("span", _hoisted_5$4, vue.toDisplayString(item.label), 1 /* TEXT */)
      ], 10 /* CLASS, PROPS */, _hoisted_2$f))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script$h.render = render$h;
script$h.__file = "src/components/Tab/TabProduct.vue";

var script$g = {
  name: "k-table-1",
  props: {
    fields: {
      type: Array,
      default: function () {
        return [
          { key: "GOL", label: "GOL" },
          { key: "Uang_Pinjaman", label: "Uang Pinjaman" },
          { key: "Sewa_Modal", label: "Sewa Modal / 15hari" },
          { key: "Premi", label: "Premi" },
          { key: "Administrasi", label: "Administrasi" },
        ];
      },
    },
    items: {
      type: Array,
      default: function () {
        return [
          {
            GOL: "A",
            Uang_Pinjaman: "Rp 50.000 - Rp 500.000",
            Sewa_Modal: "1%",
            Premi: "-",
            Administrasi: "RP. 2000",
          },
          {
            GOL: "B",
            Uang_Pinjaman: " Rp 1.000.000 - Rp 2.500.000",
            Sewa_Moda: "1%",
            Premi: "-",
            Administrasi: "RP. 2000",
          },
          {
            GOL: "C",
            Uang_Pinjaman: "Rp 50.000 - Rp 500.000",
            Sewa_Moda: "1%",
            Premi: "-",
            Administrasi: "RP. 2000",
          },
        ];
      },
    },
  },
};

const _hoisted_1$g = { class: "table-box" };
const _hoisted_2$e = { class: "table-box-content" };
const _hoisted_3$9 = { class: "table table-striped" };

function render$g(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$g, [
    vue.createElementVNode("div", _hoisted_2$e, [
      vue.createElementVNode("table", _hoisted_3$9, [
        vue.createElementVNode("thead", null, [
          vue.createElementVNode("tr", null, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.fields, (field) => {
              return (vue.openBlock(), vue.createElementBlock("th", {
                key: field.key,
                class: "align-middle"
              }, vue.toDisplayString(field.label), 1 /* TEXT */))
            }), 128 /* KEYED_FRAGMENT */)),
            vue.createCommentVNode(" <th class=\"align-middle\">Uang Pinjaman</th>\n            <th class=\"text-right align-middle\" width=\"122px\">\n              Sewa Modal <br />\n              /15 Hari <br />\n            </th>\n            <th class=\"align-middle\" width=\"88px\">Premi</th>\n            <th class=\"text-right align-middle\" width=\"104px\">Administrasi</th>\n          </tr>\n          <tr class=\"rowspan-custom\">\n            <th></th>\n            <th></th>\n            <th class=\"text-right\">TR</th>\n            <th></th>\n            <th></th> ")
          ])
        ]),
        vue.createElementVNode("tbody", null, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
            return (vue.openBlock(), vue.createElementBlock("tr", { key: index }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(Object.keys(item), (data, idx) => {
                return (vue.openBlock(), vue.createElementBlock("td", { key: idx }, vue.toDisplayString(item[data]), 1 /* TEXT */))
              }), 128 /* KEYED_FRAGMENT */))
            ]))
          }), 128 /* KEYED_FRAGMENT */)),
          vue.createCommentVNode(" <tr>\n            <td class=\"text-center\">B</td>\n            <td>> Rp 500.000 - Rp 1.000.000</td>\n            <td class=\"text-right\">1,2%</td>\n            <td>Rp 1.000</td>\n            <td class=\"text-right black-zero\">Rp 10.000</td>\n          </tr>\n          <tr>\n            <td class=\"text-center\">B</td>\n            <td>> Rp 1.000.000 - Rp 2.500.000</td>\n            <td class=\"text-right\">1,2%</td>\n            <td>Rp 1.000</td>\n            <td class=\"text-right black-zero\">Rp 20.000</td>\n          </tr>\n          <tr>\n            <td class=\"text-center\">B</td>\n            <td>> Rp 2.500.000 - Rp 5.000.000</td>\n            <td class=\"text-right\">1,2%</td>\n            <td>Rp 1.000</td>\n            <td class=\"text-right black-zero\">Rp 35.000</td>\n          </tr>\n          <tr>\n            <td class=\"text-center\">C</td>\n            <td>> Rp 5.000.000 - Rp 10.000.000</td>\n            <td class=\"text-right\">1,2%</td>\n            <td>Rp 1.000</td>\n            <td class=\"text-right black-zero\">Rp 50.000</td>\n          </tr>\n          <tr>\n            <td class=\"text-center\">C</td>\n            <td>> Rp 2.500.000 - Rp 5.000.000</td>\n            <td class=\"text-right\">1,2%</td>\n            <td>Rp 1.000</td>\n            <td class=\"text-right black-zero\">Rp 75.000</td>\n          </tr>\n          <tr>\n            <td class=\"text-center\">C</td>\n            <td>> Rp 15.000.000 - Rp 20.000.000</td>\n            <td class=\"text-right\">1,2%</td>\n            <td>Rp 1.000</td>\n            <td class=\"text-right black-zero\">Rp 100.000</td>\n          </tr>\n          <tr>\n            <td class=\"text-center\">D</td>\n            <td>> Rp 20.000.000</td>\n            <td class=\"text-right\">1,2%</td>\n            <td>Rp 1.000 - Rp 1.500</td>\n            <td class=\"text-right black-zero\">Rp 125.000</td>\n          </tr> ")
        ])
      ])
    ])
  ]))
}

script$g.render = render$g;
script$g.__file = "src/components/Table/Table1.vue";

var script$f = {
  name: "k-table-2",
  props: {
    fields: {
      type: Array,
      default: function () {
        return [
          { key: "Uang_Muka", label: "Uang Muka" },
          { key: "Margin", label: "Margin/mu'nah pemeliharaan" },
          { key: "Administrasi", label: "Administrasi" },
        ];
      },
    },
    items: {
      type: Object,
      default: function () {
        return {
          Uang_Muka: ["Minimal 15%"],
          Margin: ["0,92% x nilai taksiran emas per bulan"],
          Administrasi: ["Rp 50.000 per transaksi"],
        };
      },
    },
    // items: {
    //   type: Array,
    //   default: function () {
    //     return [
    //       {
    //         Uang_Muka: "A",
    //         Margin: "Rp 50.000 - Rp 500.000",
    //         Administrasi: "1%",
    //       },
    //     ];
    //   },
    // },
  },
};

const _hoisted_1$f = { class: "table-box" };
const _hoisted_2$d = { class: "table-box-content mb-0" };
const _hoisted_3$8 = { class: "table table-striped" };
const _hoisted_4$4 = { class: "bg-primary-pgd" };

function render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$f, [
    vue.createElementVNode("div", _hoisted_2$d, [
      vue.createElementVNode("table", _hoisted_3$8, [
        vue.createElementVNode("tbody", null, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.fields, (field) => {
            return (vue.openBlock(), vue.createElementBlock("tr", {
              key: field.key
            }, [
              vue.createElementVNode("td", _hoisted_4$4, vue.toDisplayString(field.label), 1 /* TEXT */),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items[field.key], (item) => {
                return (vue.openBlock(), vue.createElementBlock("td", {
                  key: item.key
                }, vue.toDisplayString(item), 1 /* TEXT */))
              }), 128 /* KEYED_FRAGMENT */))
            ]))
          }), 128 /* KEYED_FRAGMENT */)),
          vue.createCommentVNode(" <tr>\n            <td class=\"bg-primary-pgd\">Uang Muka</td>\n            <td>Minimal 15%</td>\n          </tr>\n          <tr>\n            <td class=\"bg-primary-pgd\">Margin/mu'nah pemeliharaan</td>\n            <td>0,92% x nilai taksiran emas per bulan</td>\n          </tr>\n          <tr>\n            <td class=\"bg-primary-pgd\">Administrasi</td>\n            <td>Rp 50.000 per transaksi</td>\n          </tr> ")
        ])
      ])
    ])
  ]))
}

script$f.render = render$f;
script$f.__file = "src/components/Table/Table2.vue";

var script$e = {
  name: "k-widget-content",
  props: {},
};

const _hoisted_1$e = { class: "wrap-section-saldo" };
const _hoisted_2$c = /*#__PURE__*/vue.createStaticVNode("<div class=\"section-saldo\"><div class=\"section-saldo__left\"><div class=\"pgd-alert-green open-tabungan\"> Investasi tanpa cemas dengan nabung emas! <a href=\"\" class=\"btn btn-primary\">Buka Tabungan</a></div></div><div class=\"section-saldo__right\"><div class=\"harga-jual-beli\"><h6>Rp 5.000<span>/ 0,01 gr</span></h6><a href=\"\">Beli Emas <img src=\"/assets/images/icon-right.svg\" alt=\"\"></a></div><div class=\"harga-jual-beli\"><h6>Rp 5.000<span>/ 0,01 gr</span></h6><a href=\"\">Jual Emas <img src=\"/assets/images/icon-right.svg\" alt=\"\"></a></div></div></div>", 1);
const _hoisted_3$7 = [
  _hoisted_2$c
];

function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("section", _hoisted_1$e, _hoisted_3$7))
}

script$e.render = render$e;
script$e.__file = "src/components/Widget/WidgetContent.vue";

var script$d = {
  name: "k-widget-saldo",
  props: {},
};

const _hoisted_1$d = { class: "wrap-section-saldo" };
const _hoisted_2$b = /*#__PURE__*/vue.createStaticVNode("<div class=\"section-saldo\"><div class=\"section-saldo__left\"><div class=\"saldo-showed\"><div class=\"saldo-showed__left\"><p>Saldo Efektif</p><div class=\"hide-value\"><div class=\"hide-value__dot\"><div class=\"dot-div\"></div><div class=\"dot-div\"></div><div class=\"dot-div\"></div><div class=\"dot-div\"></div><div class=\"dot-div\"></div><div class=\"dot-div\"></div><div class=\"dot-div\"></div></div><h5 class=\"hide-value__text\">250,1234 gram</h5></div><div class=\"hide-value\"><p>Saldo blokir:</p><div class=\"hide-value__dot\"><div class=\"dot-div-sm\"></div><div class=\"dot-div-sm\"></div><div class=\"dot-div-sm\"></div><div class=\"dot-div-sm\"></div></div><span class=\"hide-value__text\"> 100,9876 gr</span></div></div><div class=\"saldo-showed__right\"><button id=\"show-saldo\"><img src=\"/assets/images/eye-off.svg\" id=\"eye-saldo\" alt=\"\"></button></div></div></div><div class=\"section-saldo__right\"><div class=\"harga-jual-beli\"><h6>Rp 5.000<span>/ 0,01 gr</span></h6><a href=\"\"> Beli Emas <img src=\"/assets/images/icon-right.svg\" alt=\"\"></a></div><div class=\"harga-jual-beli\"><h6>Rp 5.000<span>/ 0,01 gr</span></h6><a href=\"\"> Jual Emas <img src=\"/assets/images/icon-right.svg\" alt=\"\"></a></div></div></div>", 1);
const _hoisted_3$6 = [
  _hoisted_2$b
];

function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("section", _hoisted_1$d, _hoisted_3$6))
}

script$d.render = render$d;
script$d.__file = "src/components/Widget/WidgetSaldo.vue";

var script$c = {
  name: "k-checkbox",
  props: {
    value: { type: String },
    modelValue: { default: "" },
    label: { type: String, required: true, default: "label" },
    trueValue: { default: true },
    falseValue: { default: false },
  },
  computed: {
    isChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value);
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue;
    },
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked;
      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];
        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }

        this.$emit("change", newValue);
      } else {
        this.$emit("change", isChecked ? this.trueValue : this.falseValue);
      }
    },
  },
};

const _hoisted_1$c = { class: "group-input custom-control custom-checkbox" };
const _hoisted_2$a = ["value", "id"];
const _hoisted_3$5 = ["for"];

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$c, [
    vue.createElementVNode("input", {
      type: "checkbox",
      class: "custom-control-input",
      value: $props.value,
      onChange: _cache[0] || (_cache[0] = (...args) => ($options.updateInput && $options.updateInput(...args))),
      id: $props.value
    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2$a),
    vue.createElementVNode("label", {
      class: "custom-control-label",
      for: $props.value
    }, vue.toDisplayString($props.label), 9 /* TEXT, PROPS */, _hoisted_3$5)
  ]))
}

script$c.render = render$c;
script$c.__file = "src/components/Checkbox.vue";

var script$b = {
  name: "k-contextual-menu",
  props: {
    items: {
      type: Array,
      default: function () {
        return [
          {
            label: "Ubah",
            action: "",
            icon: "/assets/images/edit-filled.svg",
          },
          {
            label: "Hapus",
            action: "",
            icon: "/assets/images/icon-delete-dark.svg",
          },
        ];
      },
    },
  },
};

const _hoisted_1$b = { class: "contextual-menu" };
const _hoisted_2$9 = ["src"];

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$b, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
      return (vue.openBlock(), vue.createElementBlock("div", {
        key: index,
        class: "contextual-menu__item"
      }, [
        vue.createElementVNode("p", null, vue.toDisplayString(item.label), 1 /* TEXT */),
        vue.createElementVNode("img", {
          src: item.icon,
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_2$9)
      ]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script$b.render = render$b;
script$b.__file = "src/components/ContextualMenu.vue";

var script$a = {
  name: "k-datepicker",
  props: {
    placeholder: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  data() {
    return {
      date: "",
      month: "",
      year: "",
    };
  },
  watch: {
    date: function () {},
    month: function () {},
    year: function () {},
  },
  methods: {
    setDateValue: function () {},
    setMonthValue: function () {},
    setMYearValue: function () {},
  },
};

const _hoisted_1$a = { class: "group-input" };
const _hoisted_2$8 = { class: "box-left-icon" };
const _hoisted_3$4 = ["placeholder", "value"];
const _hoisted_4$3 = /*#__PURE__*/vue.createElementVNode("a", {
  "data-bs-toggle": "modal",
  "data-bs-target": "#tangalLahirModal"
}, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "/assets/images/ico-calendar-outline.svg",
    id: "eye",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_5$3 = /*#__PURE__*/vue.createStaticVNode("<section class=\"section-overlay-modal-pds\"><div class=\"modal fade\" id=\"tangalLahirModal\" data-bs-backdrop=\"static\" data-bs-keyboard=\"false\" tabindex=\"-1\" aria-labelledby=\"staticBackdropLabel\" aria-hidden=\"true\"><div class=\"modal-dialog modal-dialog-centered tangalLahirModal modal-sm\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\" id=\"staticBackdropLabel\">Pilih Tanggal</h5><button type=\"button\" id=\"close-modal\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"><img src=\"/assets/images/close.svg\" alt=\"\"></button></div><div class=\"modal-body\"><form name=\"setDateBirth\"><div class=\"custom-datepicker\"><div class=\"field-input-box\"><label>Tanggal</label><label>Bulan</label><label>Tahun</label></div><div class=\"field-input-box\"><input type=\"text\" id=\"date\" pattern=\"[0-9]*\" minlength=\"2\" maxlength=\"2\" size=\"2\" class=\"date-field\" placeholder=\"DD\" required><input type=\"text\" id=\"month\" pattern=\"[0-9]*\" minlength=\"2\" maxlength=\"2\" size=\"2\" class=\"date-field\" placeholder=\"MM\" required><input type=\"text\" id=\"year\" pattern=\"[0-9]*\" minlength=\"4\" maxlength=\"4\" size=\"4\" class=\"date-field\" placeholder=\"YYYY\" required></div></div></form></div></div></div></div></section>", 1);

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createElementVNode("div", _hoisted_1$a, [
      vue.createElementVNode("div", _hoisted_2$8, [
        vue.createElementVNode("input", {
          type: "text",
          placeholder: $props.placeholder,
          value: $props.value,
          name: "tanggallahir",
          id: "tanggalLahir",
          required: "",
          "data-bs-toggle": "modal",
          "data-bs-target": "#tangalLahirModal",
          readonly: ""
        }, null, 8 /* PROPS */, _hoisted_3$4),
        _hoisted_4$3
      ])
    ]),
    _hoisted_5$3
  ], 64 /* STABLE_FRAGMENT */))
}

script$a.render = render$a;
script$a.__file = "src/components/Datepicker.vue";

var script$9 = {
  name: "k-link",
  props: {
    text: {
      type: String,
      default: "Simulasi Gadai",
    },
    action: {
      type: [String, Function],
      default:
        "/assets/images/icon-chevron-right-green.svg",
    },
  },
};

const _hoisted_1$9 = ["href"];
const _hoisted_2$7 = /*#__PURE__*/vue.createElementVNode("img", {
  src: "/assets/images/icon-chevron-right-green.svg",
  alt: ""
}, null, -1 /* HOISTED */);

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("a", {
    href: $props.action,
    class: "btn btn-tertiary"
  }, [
    vue.createTextVNode(vue.toDisplayString($props.text) + " ", 1 /* TEXT */),
    _hoisted_2$7
  ], 8 /* PROPS */, _hoisted_1$9))
}

script$9.render = render$9;
script$9.__file = "src/components/Link.vue";

var script$8 = {
  name: "k-logo",
  props: {
    image: {
      type: String,
      default: "/assets/images/BUMN.svg",
    },
  },
};

const _hoisted_1$8 = ["src"];

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("img", { src: $props.image }, null, 8 /* PROPS */, _hoisted_1$8))
}

script$8.render = render$8;
script$8.__file = "src/components/Logo.vue";

var script$7 = {
  name: "k-modal",
  props: {
    status: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "title",
    },
    content: {
      default: ". . . .",
    },
    name: {
      default: "Modal",
    },
    actionName: {
      default: "Button",
    },
  },

  methods: {
    isShow: function () {
      this.props.status = !this.props.status;
      // some code to filter users
    },
  },
};

const _hoisted_1$7 = {
  type: "button",
  class: "btn btn-primary",
  "data-bs-target": "#getModal",
  "data-bs-toggle": "modal"
};
const _hoisted_2$6 = { class: "section-overlay-modal-pds" };
const _hoisted_3$3 = {
  class: "modal fade",
  id: "getModal",
  "data-bs-backdrop": "static",
  "data-bs-keyboard": "false",
  tabindex: "-1",
  "aria-labelledby": "staticBackdropLabel",
  "aria-hidden": "true"
};
const _hoisted_4$2 = { class: "modal-dialog modal-dialog-centered modal-layout-pds" };
const _hoisted_5$2 = { class: "modal-content" };
const _hoisted_6$2 = { class: "modal-header" };
const _hoisted_7$1 = {
  class: "modal-title",
  id: "staticBackdropLabel"
};
const _hoisted_8$1 = /*#__PURE__*/vue.createElementVNode("button", {
  type: "button",
  class: "btn-close",
  "data-bs-dismiss": "modal",
  "aria-label": "Close"
}, [
  /*#__PURE__*/vue.createElementVNode("img", {
    src: "/assets/images/close.svg",
    alt: ""
  })
], -1 /* HOISTED */);
const _hoisted_9$1 = { class: "modal-body" };
const _hoisted_10$1 = {
  "data-bs-dismiss": "modal",
  "aria-label": "Close",
  class: "btn btn-primary btn-block"
};

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    vue.createCommentVNode(" Button trigger modal "),
    vue.createElementVNode("button", _hoisted_1$7, vue.toDisplayString($props.name), 1 /* TEXT */),
    vue.createCommentVNode(" Modal "),
    vue.createElementVNode("section", _hoisted_2$6, [
      vue.createElementVNode("div", _hoisted_3$3, [
        vue.createElementVNode("div", _hoisted_4$2, [
          vue.createElementVNode("div", _hoisted_5$2, [
            vue.createElementVNode("div", _hoisted_6$2, [
              vue.createElementVNode("h5", _hoisted_7$1, vue.toDisplayString($props.title), 1 /* TEXT */),
              _hoisted_8$1
            ]),
            vue.createElementVNode("div", _hoisted_9$1, [
              vue.renderSlot(_ctx.$slots, "default", {}, () => [
                vue.createTextVNode(vue.toDisplayString($props.content), 1 /* TEXT */)
              ]),
              vue.createElementVNode("a", _hoisted_10$1, vue.toDisplayString($props.actionName), 1 /* TEXT */)
            ])
          ])
        ])
      ])
    ])
  ], 64 /* STABLE_FRAGMENT */))
}

script$7.render = render$7;
script$7.__file = "src/components/Modal.vue";

var script$6 = {
  name: "k-overlay",
  props: {
    status: {
      type: Boolean,
      default: false,
    },
  },
};

const _hoisted_1$6 = /*#__PURE__*/vue.createElementVNode("button", {
  class: "btn btn-primary",
  "data-bs-target": "#getModal",
  "data-bs-toggle": "modal"
}, " Show Overlay ", -1 /* HOISTED */);
const _hoisted_2$5 = /*#__PURE__*/vue.createElementVNode("section", { class: "section-overlay-modal-pds" }, [
  /*#__PURE__*/vue.createElementVNode("div", {
    class: "modal fade",
    id: "getModal",
    "data-bs-backdrop": "static",
    "data-bs-keyboard": "false",
    tabindex: "-1",
    "aria-labelledby": "staticBackdropLabel",
    "aria-hidden": "true"
  }, [
    /*#__PURE__*/vue.createElementVNode("div", { class: "modal-dialog modal-dialog-centered modal-layout-pds" })
  ])
], -1 /* HOISTED */);

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
    _hoisted_1$6,
    _hoisted_2$5
  ], 64 /* STABLE_FRAGMENT */))
}

script$6.render = render$6;
script$6.__file = "src/components/Overlay.vue";

var script$5 = {
  name: "k-pagination",
  props: {
    value: {
      type: [Boolean, Number, String],
      default: 2,
    },
    prevText: {
      type: String,
      default: "Prev Page",
    },
    nextText: {
      type: String,
      default: "Next Page",
    },
    lastText: {
      type: String,
      default: "Last Page",
    },
    firstText: {
      type: String,
      default: "First Page",
    },
    perPage: {
      type: [String, Number],
      default: "",
    },
    totalRows: {
      type: Number,
      default: 10,
    },
  },
};

const _hoisted_1$5 = { class: "p-5" };
const _hoisted_2$4 = { class: "card-pagination" };
const _hoisted_3$2 = { class: "pagination" };
const _hoisted_4$1 = { class: "previous disabled" };
const _hoisted_5$1 = ["aria-label"];
const _hoisted_6$1 = /*#__PURE__*/vue.createElementVNode("i", { class: "prev-icon" }, null, -1 /* HOISTED */);
const _hoisted_7 = [
  _hoisted_6$1
];
const _hoisted_8 = ["tabindex"];
const _hoisted_9 = {
  key: 1,
  class: "break-me"
};
const _hoisted_10 = /*#__PURE__*/vue.createElementVNode("a", {
  role: "button",
  tabindex: "0"
}, "...", -1 /* HOISTED */);
const _hoisted_11 = [
  _hoisted_10
];
const _hoisted_12 = { class: "next" };
const _hoisted_13 = ["aria-label"];
const _hoisted_14 = /*#__PURE__*/vue.createElementVNode("i", { class: "next-icon" }, null, -1 /* HOISTED */);
const _hoisted_15 = [
  _hoisted_14
];

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
    vue.createElementVNode("nav", _hoisted_2$4, [
      vue.createElementVNode("ul", _hoisted_3$2, [
        vue.createElementVNode("li", _hoisted_4$1, [
          vue.createElementVNode("a", {
            class: "pagination-navigation",
            tabindex: "0",
            role: "button",
            "aria-disabled": "true",
            "aria-label": $props.prevText,
            rel: "prev"
          }, _hoisted_7, 8 /* PROPS */, _hoisted_5$1)
        ]),
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList([...Array($props.totalRows).keys()], (item, index) => {
          return (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: index }, [
            (item + 1 - 2 <= 0 || item + 1 == $props.totalRows)
              ? (vue.openBlock(), vue.createElementBlock("li", {
                  key: index,
                  class: vue.normalizeClass(item + 1 == $props.value ? 'active' : '')
                }, [
                  vue.createElementVNode("a", {
                    role: "button",
                    tabindex: index + 1,
                    "aria-label": "Page 1 is your current page",
                    "aria-current": "page"
                  }, vue.toDisplayString(item + 1), 9 /* TEXT, PROPS */, _hoisted_8)
                ], 2 /* CLASS */))
              : vue.createCommentVNode("v-if", true),
            (item + 1 - 2 == 1)
              ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_9, _hoisted_11))
              : vue.createCommentVNode("v-if", true)
          ], 64 /* STABLE_FRAGMENT */))
        }), 128 /* KEYED_FRAGMENT */)),
        vue.createCommentVNode(" <li><a role=\"button\" tabindex=\"0\" aria-label=\"Page 2\">2</a></li>\n        <li class=\"break-me\"><a role=\"button\" tabindex=\"0\">...</a></li>\n        <li><a role=\"button\" tabindex=\"0\" aria-label=\"Page 4\">4</a></li> "),
        vue.createElementVNode("li", _hoisted_12, [
          vue.createElementVNode("a", {
            class: "pagination-navigation",
            tabindex: "0",
            role: "button",
            "aria-disabled": "false",
            "aria-label": $props.nextText,
            rel: "next"
          }, _hoisted_15, 8 /* PROPS */, _hoisted_13)
        ])
      ])
    ])
  ]))
}

script$5.render = render$5;
script$5.__file = "src/components/Pagination.vue";

var script$4 = {
  name: "k-navbar-radio",
  props: {
    items: {
      default: function () {
        return [
          {
            disabled: false,
            value: 1,
            label: "Option 1",
            checked: false,
          },
          {
            disabled: false,
            value: 2,
            label: "Option 2",
            checked: true,
          },
        ];
      },
    },
  },
};

const _hoisted_1$4 = { class: "group-input__box-radio" };
const _hoisted_2$3 = ["for"];
const _hoisted_3$1 = ["disabled", "id", "value", "name"];
const _hoisted_4 = /*#__PURE__*/vue.createElementVNode("span", { class: "checkmark" }, null, -1 /* HOISTED */);

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
      return (vue.openBlock(), vue.createElementBlock("label", {
        key: index,
        class: vue.normalizeClass(["radio-tab tab-option", { active: item.checked }]),
        for: 'option' + index,
        onclick: "clickRadioForm('tab-option', 'option2')"
      }, [
        vue.createElementVNode("h6", null, vue.toDisplayString(item.label), 1 /* TEXT */),
        vue.createElementVNode("input", {
          disabled: item.disabled,
          type: "radio",
          id: 'option' + index,
          value: item.value,
          name: _ctx.label
        }, null, 8 /* PROPS */, _hoisted_3$1),
        _hoisted_4
      ], 10 /* CLASS, PROPS */, _hoisted_2$3))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script$4.render = render$4;
script$4.__file = "src/components/Radio.vue";

var script$3 = {
  name: "k-stepper",
  props: {
    items: {
      type: Array,
      default: function () {
        return [
          { active: false, label: "Detail Jaminan" },
          { active: true, label: "Detail Pinjaman" },
          { active: false, label: "Cabang Pengajuan" },
          { active: false, label: "Waktu Kedatangan" },
        ];
      },
      active: {
        type: Boolean,
      },
      label: {
        type: String,
      },
    },
  },
};
// class="breadcrumb-item" :class="pages.current ? 'active': ''" :aria-current="page.current ? 'page' : undefined"

const _hoisted_1$3 = { class: "stepper-ol" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("ol", _hoisted_1$3, [
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item, index) => {
      return (vue.openBlock(), vue.createElementBlock("li", {
        key: index,
        class: vue.normalizeClass(item.active === true ? 'active' : '')
      }, vue.toDisplayString(item.label), 3 /* TEXT, CLASS */))
    }), 128 /* KEYED_FRAGMENT */)),
    vue.createCommentVNode(" <li class=\"active\">Detail Jaminan</li>\n    <li>Detail Pinjaman</li>\n    <li>Cabang Pengajuan</li>\n    <li>Waktu Kedatangan</li> ")
  ]))
}

script$3.render = render$3;
script$3.__file = "src/components/Stepper.vue";

var script$2 = {
  name: "k-stepper-mobile",
  props: {
    currentStep: {
      type: Number,
      default: 1,
    },
    lastStep: {
      type: Number,
      default: 4,
    },
    label: {
      type: String,
      default: "Detail Jaminan",
    },
  },
};

const _hoisted_1$2 = { class: "p-5" };
const _hoisted_2$2 = { class: "stepper-ol-mobile-version" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$2, [
    vue.createElementVNode("div", _hoisted_2$2, [
      vue.createElementVNode("p", null, "Langkah " + vue.toDisplayString($props.currentStep) + " dari " + vue.toDisplayString($props.lastStep), 1 /* TEXT */),
      vue.createElementVNode("h5", null, vue.toDisplayString($props.label), 1 /* TEXT */)
    ])
  ]))
}

script$2.render = render$2;
script$2.__file = "src/components/StepperMobile.vue";

var script$1 = {
  name: "k-switch",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
    },
    label: {
      type: String,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
};

const _hoisted_1$1 = { class: "custom-control custom-switch" };
const _hoisted_2$1 = ["disabled", "checked"];
const _hoisted_3 = /*#__PURE__*/vue.createElementVNode("span", { class: "custom-switch-control-indicator" }, null, -1 /* HOISTED */);

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("label", _hoisted_1$1, [
    vue.createElementVNode("input", {
      disabled: $props.disabled,
      checked: $props.checked,
      type: "checkbox",
      class: "custom-switch-control-input"
    }, null, 8 /* PROPS */, _hoisted_2$1),
    _hoisted_3,
    vue.createTextVNode(" " + vue.toDisplayString($props.label), 1 /* TEXT */)
  ]))
}

script$1.render = render$1;
script$1.__file = "src/components/Switch.vue";

var script = {
  name: "k-tooltip",
  props: {},
};

const _hoisted_1 = { class: "d-flex align-items-center" };
const _hoisted_2 = /*#__PURE__*/vue.createStaticVNode(" Beli Emas <div class=\"icon-info mobile-hide\"><img src=\"/assets/images/ico-info-tips.svg\" alt=\"\"><div class=\"tooltips\"> Harga saat Pegadaian membeli emas Anda, yang Anda terima saat menjual emas. Harga dapat berubah sewaktu-waktu. </div></div><div class=\"icon-info mobile-show\" data-bs-toggle=\"modal\" data-bs-target=\"#beliEmas\"><img src=\"/assets/images/ico-info-tips.svg\" alt=\"\"></div>", 3);
const _hoisted_5 = /*#__PURE__*/vue.createElementVNode("section", { class: "section-overlay-modal-pds mobile-version" }, [
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
              src: "/assets/images/close.svg",
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
const _hoisted_6 = [
  _hoisted_2,
  _hoisted_5
];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("h6", _hoisted_1, _hoisted_6))
}

script.render = render;
script.__file = "src/components/Tooltip.vue";

//add amount

var components = {
  kAddAmountCounter: script$1g,
  KAddAmountItem: script$1f,
  kHomePDS: script$1e,
  kSahabatPgd: script$1a,
  kPegadaianCorporate: script$1d,
  kProdukKonvensional: script$1c,
  kProdukSyariah: script$1b,
  kBreadcrumb: script$19,
  kButton: script$18,
  kButtonSize: script$17,
  kAccordion: script$16,
  kAlert: script$15,
  kAlertBasic: script$14,
  kCheckbox: script$c,
  kContextualMenu: script$b,
  kDatepicker: script$a,
  kLink: script$9,
  kLogo: script$8,
  kModal: script$7,
  kOverlay: script$6,
  kRadio: script$4,
  kStepper: script$3,
  kSwitch: script$1,
  kTooltip: script,
  kCardAccount: script$_,
  kCardArticle: script$Z,
  kCardArticleHighlight: script$Y,
  kCardContent: script$X,
  kCardEvent: script$W,
  kCardFile: script$V,
  kCardProduct: script$U,
  kCardProductKonvensional: script$T,
  kCardProductSyariah: script$S,
  kCardPromo: script$R,
  kCardPromoCode1: script$Q,
  kCardPromoCode2: script$P,
  kCardPromoCode3: script$O,
  kCardVoucher: script$N,
  kDropdownIconTextLg: script$M,
  kDropdownIconTextSm: script$L,
  kDropdownTextOnly: script$K,
  kFilepickerLg: script$J,
  kFilepickerSm: script$I,
  kFooterPdsLogin: script$H,
  kFooterPdsOnboarding: script$G,
  kFooterPgdCorporate: script$F,
  kFooterSahabatPgd: script$E,
  kProductIcon: script$D,
  kSystemIcon: script$C,
  kImageIllustration: script$B,
  kImagePhoto: script$A,
  kInputNominal: script$z,
  kInputSmallText: script$y,
  kInputTextArea: script$x,
  kLabel: script$w,
  kLabelIcon: script$v,
  kListGroupOrdered: script$u,
  kListGroupUnit: script$t,
  kListGroupUnordered: script$s,
  kNavbarPdsOnboarding: script$r,
  kNavbarSahabatPgd: script$q,
  kLineShape: script$k,
  kTabGroup: script$j,
  kTabKategori: script$i,
  kTabProduct: script$h,
  kTable1: script$g,
  kTable2: script$f,
  kWidgetContent: script$e,
  kWidgetSaldo: script$d,
  kBannerCarousel: script$13,
  kHighlightCarousel: script$12,
  kChart: script$11,
  kChartMeter: script$10,
  kChartProgress: script$$,
  kNavBackNavigator: script$p,
  kNavbarCorporate: script$o,
  kNavBeliTabunganEmas: script$n,
  kNavBottomTab: script$m,
  kNavMenuDropdown: script$l,
  kPagination: script$5,
  kStepperMobile: script$2,
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
