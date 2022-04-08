<template>
  <header class="pgd-header sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light container">
      <a class="navbar-brand mr-auto" href="./index.html">
        <img
          src="https://dl.dropboxusercontent.com/s/3eadt2tmgsyxda7/logo-sahabat-pegadaian.svg"
          alt=""
        />
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
                src="https://dl.dropboxusercontent.com/s/5lzaf2xg0qfabgd/search-dark.svg"
                alt=""
              />
              <input
                type="text"
                placeholder="Cari kebutuhanmu di sini..."
                onkeyup="checkSearch(this, 'clearSearchMobile')"
              />
              <button type="reset" id="clearSearchMobile">
                <img
                  src="https://dl.dropboxusercontent.com/s/t0czo3brgkjtpoi/close.svg"
                  alt=""
                />
              </button>
            </form>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./produk.html">Produk</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./promo.html">Promo</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="./artikel.html"
              id="navbarDropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Artikel
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="./artikel-emas.html">Emas</a>
              <a class="dropdown-item" href="./artikel-inspirasi.html"
                >Inspirasi</a
              >
              <a class="dropdown-item" href="./artikel-investasi.html"
                >Investasi</a
              >
              <a class="dropdown-item" href="./artikel-keuangan.html"
                >Keuangan</a
              >
              <a class="dropdown-item" href="./artikel-wirausaha.html"
                >Wirausaha</a
              >
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./acara.html">Acara</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Simulasi
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="./simulasi-emas.html"
                >Harga Emas Batangan</a
              >
              <a class="dropdown-item" href="./simulasi-tabungan.html"
                >Simulasi Tabungan Emas</a
              >
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./ebook.html">Ebook</a>
          </li>
        </ul>
        <a class="btn btn-search" onclick="openSearchModal()">
          <img
            src="https://dl.dropboxusercontent.com/s/3zlqhzh6ucukomf/Search.svgg"
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
              src="https://dl.dropboxusercontent.com/s/5lzaf2xg0qfabgd/search-dark.svg"
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
                src="https://dl.dropboxusercontent.com/s/t0czo3brgkjtpoi/close.svg"
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
  props: {},
};
</script>
<style></style>
