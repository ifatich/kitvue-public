<template>
  <div class="p-5">
    <nav class="card-pagination">
      <ul class="pagination">
        <li class="previous disabled">
          <a
            class="pagination-navigation"
            tabindex="0"
            role="button"
            aria-disabled="true"
            :aria-label="prevText"
            rel="prev"
            ><i class="prev-icon"></i
          ></a>
        </li>
        <template
          v-for="(item, index) in [...Array(totalRows).keys()]"
          :key="index"
        >
          <li
            v-if="item + 1 - 2 <= 0 || item + 1 == totalRows"
            :key="index"
            :class="item + 1 == value ? 'active' : ''"
          >
            <a
              role="button"
              :tabindex="index + 1"
              aria-label="Page 1 is your current page"
              aria-current="page"
              >{{ item + 1 }}</a
            >
          </li>
          <li v-if="item + 1 - 2 == 1" class="break-me">
            <a role="button" tabindex="0">...</a>
          </li>
        </template>
        <!-- <li><a role="button" tabindex="0" aria-label="Page 2">2</a></li>
        <li class="break-me"><a role="button" tabindex="0">...</a></li>
        <li><a role="button" tabindex="0" aria-label="Page 4">4</a></li> -->

        <li class="next">
          <a
            class="pagination-navigation"
            tabindex="0"
            role="button"
            aria-disabled="false"
            :aria-label="nextText"
            rel="next"
            ><i class="next-icon"></i
          ></a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
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
</script>
