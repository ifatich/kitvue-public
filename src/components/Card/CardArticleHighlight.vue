<template>
  <section class="artikel-category">
    <div class="artikel-category__top">
      <!-- <a href="" class="card-list">
        <div class="img-overlay">
          <img
            src="https://dl.dropboxusercontent.com/s/iqlg9xxgjiz884x/banner-artikel7.png"
            alt=""
          />
        </div>
        <div class="content-item">
          <div class="content-item__tag bg-primary">Inspirasi</div>
          <h2 class="content-item__title">
            Cara Jualan Online Selama Bulan Ramadan
          </h2>
          <div class="content-item__date">
            <img
              src="https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg"
              alt=""
            />
            <span>16 December 2020</span>
          </div>
        </div>
      </a> -->
      <a v-for="(item, index) in items" :key="index" href="" class="card-list">
        <div class="img-overlay">
          <img
            src="/assets/images/banner-artikel7.png"
            alt=""
          />
        </div>
        <div class="content-item">
          <div class="content-item__tag bg-primary">{{ item.label }}</div>
          <h2 class="content-item__title">{{ item.title }}</h2>
          <div class="content-item__date">
            <img
              src="/assets/images/clock.svg"
              alt=""
            />
            <span>{{ item.date }}</span>
          </div>
        </div>
      </a>
    </div>

    <!-- <div class="artikel-category__bottom">
      <div class="list-artikel">
        <div class="list-artikel__box">
          <a href="" class="card-list card-list-lg">
            <div class="img-overlay">
              <img
                src="https://dl.dropboxusercontent.com/s/iqlg9xxgjiz884x/banner-artikel7.png"
                alt=""
              />
            </div>
            <div class="content-item">
              <div class="content-item__tag bg-primary">Inspirasi</div>
              <h2 class="content-item__title">
                Cara Jualan Online Selama Bulan Ramadan
              </h2>
              <div class="content-item__date">
                <img
                  src="https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg"
                  alt=""
                />
                <span>16 December 2020</span>
              </div>
            </div>
          </a>
          <a href="" class="card-list">
            <div class="img-overlay">
              <img
                src="https://dl.dropboxusercontent.com/s/iqlg9xxgjiz884x/banner-artikel7.png"
                alt=""
              />
            </div>
            <div class="content-item">
              <div class="content-item__tag bg-primary">Inspirasi</div>
              <h2 class="content-item__title">
                Cara Jualan Online Selama Bulan Ramadan
              </h2>
              <div class="content-item__date">
                <img
                  src="https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg"
                  alt=""
                />
                <span>16 December 2020</span>
              </div>
            </div>
          </a>
          <a href="" class="card-list">
            <div class="img-overlay">
              <img
                src="https://dl.dropboxusercontent.com/s/iqlg9xxgjiz884x/banner-artikel7.png"
                alt=""
              />
            </div>
            <div class="content-item">
              <div class="content-item__tag bg-primary">Inspirasi</div>
              <h2 class="content-item__title">
                Cara Jualan Online Selama Bulan Ramadan
              </h2>
              <div class="content-item__date">
                <img
                  src="https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg"
                  alt=""
                />
                <span>16 December 2020</span>
              </div>
            </div>
          </a>
          <a href="" class="card-list">
            <div class="img-overlay">
              <img
                src="https://dl.dropboxusercontent.com/s/iqlg9xxgjiz884x/banner-artikel7.png"
                alt=""
              />
            </div>
            <div class="content-item">
              <div class="content-item__tag bg-primary">Inspirasi</div>
              <h2 class="content-item__title">
                Cara Jualan Online Selama Bulan Ramadan
              </h2>
              <div class="content-item__date">
                <img
                  src="https://dl.dropboxusercontent.com/s/7thjx5cu9ar75k6/clock.svg"
                  alt=""
                />
                <span>16 December 2020</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div> -->
  </section>
</template>
<script>
export default {
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
</script>
<style></style>
