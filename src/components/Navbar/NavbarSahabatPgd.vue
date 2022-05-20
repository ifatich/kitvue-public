<template>
  <header class="pgd-header sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light container">
      <a class="navbar-brand mr-auto" href="./index.html">
        <img :src="image" alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon hided"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item search-responsive">
            <form class="search-responsive__box">
              <img
                src="/assets/images/search-dark.svg"
                alt=""
              />
              <input
                type="text"
                placeholder="Cari kebutuhanmu di sini..."
                onkeyup="checkSearch(this, 'clearSearchMobile')"
              />
              <button type="reset" id="clearSearchMobile">
                <img
                  src="/assets/images/close.svg"
                  alt=""
                />
              </button>
            </form>
          </li>
          <li
            v-for="(item, index) in items"
            :key="index"
            class="nav-item"
            :class="{ dropdown: item.child }"
          >
            <div v-if="item.child !== null">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ item.label }}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a
                  v-for="(child_item, index) in item.child"
                  :key="index"
                  class="dropdown-item"
                  :href="child_item.action"
                  >{{ child_item.label }}</a
                >
              </div>
            </div>
            <div v-else>
              <a class="nav-link" :href="item.action">{{ item.label }}</a>
            </div>
          </li>
        </ul>
        <a class="btn btn-search" onclick="openSearchModal()">
          <img
            src="/assets/images/Search.svg"
            alt=""
          />
        </a>
      </div>
    </nav>

    <div class="search-modal">
      <div class="search-modal__box">
        <form class="box-input-search container" action="./search-page.html">
          <div class="box-border-input">
            <img
              src="/assets/images/search-dark.svg"
              alt=""
            />
            <input
              type="text"
              placeholder="Masukkan kata pencarian..."
              name="search"
              onkeyup="checkSearch(this, 'clearSearch')"
            />
            <button type="reset" id="clearSearch">
              <img
                src="/assets/images/close.svg"
                alt=""
              />
            </button>
          </div>
          <div class="group-input">
            <select class="form-select" name="urutkan" required>
              <option selected disabled value="">Urutkan Berdasarkan</option>
              <option value="new">New</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Cari</button>
        </form>
      </div>
    </div>
  </header>
</template>
<script>
export default {
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
</script>
<style></style>
