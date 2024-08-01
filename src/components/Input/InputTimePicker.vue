<template>
  <BOffcanvas 
    v-model="model" 
    placement="bottom"
    class="w-100 offcanvas-kit"
    :title="'Pilih Tanggal' || title"
    style="height: fit-content;"
  >
    <div id="scroll-container" class="scroll-container d-flex">
      <div class="wrap-container" ref="wrapScrollHours">
        <ul id="hours" ref="hoursScroll">
          <li v-for="(item, index) in hours" :key="index" :class="{ active: activeHourIndex === index }">
            <span class="item">{{ item }}</span>
          </li>
        </ul>
      </div>
      <p class="mb-0"><b>:</b></p>
      <div class="wrap-container" ref="wrapScrollMinutes">
        <ul id="minutes" ref="minutesScroll">
          <li v-for="(item, index) in minutes" :key="index" :class="{ active: activeMinuteIndex === index }">
            <span class="item">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="px-3 pb-0 pt-3">
      <Button class="w-100" type="primary" size="lg" label="Selesai" @click="model = false" />
    </div>
  </BOffcanvas>
</template>

<script setup>
  import { defineModel } from 'vue'
  const model = defineModel()
</script>


<script>
import { BOffcanvas } from 'bootstrap-vue-next';
import Button from '../Button/Button.vue';


export default {
  name: 'InputTimePicker',
  components: {
    BOffcanvas,
    Button
  },
  props: {
    defaultHour: {
      type: String,
      default: '23'
    },
    defaultMinute: {
      type: String,
      default: '50'
    }
  },
  data() {
    return {
      model: false,
      hours: [
        '23', '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16',
        '17', '18', '19', '20', '21', '22', '23', '00', '01',
      ],
      minutes: [
        '50', '55', '00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '00'
      ],
      activeHourIndex: 0,
      activeMinuteIndex: 0,
      hoursOpts: {
        itemCount: null,
        itemHeight: null,
        items: [],
      },
      minutesOpts: {
        itemCount: null,
        itemHeight: null,
        items: [],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initItems('hours');
      this.initItems('minutes');
      this.setDefaultValues();
      this.$refs.wrapScrollHours.onscroll = () => this.scrollWrap('hours');
      this.$refs.wrapScrollMinutes.onscroll = () => this.scrollWrap('minutes');
      this.scrollToActiveItem('hours');
      this.scrollToActiveItem('minutes');
    });
  },
  methods: {
    click() {
      this.model = !this.model;
      // this.showCalendar = this.model;
    },
    scrollWrap(listName) {
      const scrollW = this.$refs[`wrapScroll${listName.charAt(0).toUpperCase() + listName.slice(1)}`];
      const listOpts = this[`${listName}Opts`];

      if (scrollW.scrollTop + scrollW.clientHeight >= scrollW.scrollHeight) {
        scrollW.scrollTop = 1;
      } else if (scrollW.scrollTop <= 0) {
        scrollW.scrollTop = scrollW.scrollHeight - scrollW.clientHeight + 2;
      }

      this.itemsScrolled = Math.floor(scrollW.scrollTop / listOpts.itemHeight) + 1;
      const itemsScrolled = Math.floor(scrollW.scrollTop / listOpts.itemHeight) + 1;
      this[`active${listName.charAt(0).toUpperCase() + listName.slice(1)}Index`] = this.itemsScrolled % listOpts.itemCount;
      this.updateActiveClass(listName);

      const activeIndex = itemsScrolled % listOpts.itemCount;

      if (listName === 'hours') {
        this.activeHourIndex = activeIndex;
      } else if (listName === 'minutes') {
        this.activeMinuteIndex = activeIndex;
      }

      this.activeIndex = this.itemsScrolled % listOpts.itemCount;
      this.updateActiveClass(listName);
      this.scrollToActiveItem(listName);
      this.emitActiveTime();
    },
    scrollToActiveItem(listName) {
      const listOpts = this[`${listName}Opts`];
      const activeIndex = this[`active${listName.charAt(0).toUpperCase() + listName.slice(1)}Index`];
      const activeItem = listOpts.items[activeIndex];

      if (activeItem) {
        activeItem.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      }
    },
    initItems(listName) {
      const scrollUl = this.$refs[`${listName}Scroll`];
      const listOpts = this[`${listName}Opts`];

      listOpts.items = Array.from(scrollUl.querySelectorAll('li'));
      listOpts.itemHeight = listOpts.items[0]?.clientHeight || 50;
      listOpts.itemCount = listOpts.items.length;
    },
    updateActiveClass(listName) {
      const listOpts = this[`${listName}Opts`];
      const scrollW = this.$refs[`wrapScroll${listName.charAt(0).toUpperCase() + listName.slice(1)}`];
      const viewportHeight = scrollW.clientHeight;
      const scrollTop = scrollW.scrollTop;

      const viewportStart = scrollTop;
      const viewportEnd = scrollTop + viewportHeight;

      listOpts.items.forEach(item => {
        item.classList.remove('active');
      });

      listOpts.items.forEach((item, index) => {
        const itemTop = item.offsetTop;
        const itemBottom = itemTop + listOpts.itemHeight;

        if (itemBottom > viewportStart && itemTop < viewportEnd) {
          const relativeIndex = index % listOpts.itemCount;
          if (relativeIndex === this.activeIndex) {
            item.classList.add('active');
          }
        }
      });
    },
    emitActiveTime() {
      const activeHour = this.hours[this.activeHourIndex] || '00';
      const activeMinute = this.minutes[this.activeMinuteIndex] || '00';
      const formattedTime = `${activeHour}:${activeMinute.padStart(2, '0')}`;

      this.$emit('activeTime', {
        activeTime: formattedTime
      });
    },
    setDefaultValues() {
      this.activeHourIndex = this.hours.indexOf(this.defaultHour);
      this.activeMinuteIndex = this.minutes.indexOf(this.defaultMinute);

      if (this.activeHourIndex === -1) this.activeHourIndex = 0;
      if (this.activeMinuteIndex === -1) this.activeMinuteIndex = 0;

      this.$nextTick(() => {
        this.$refs.wrapScrollHours.scrollTop = this.activeHourIndex * this.hoursOpts.itemHeight;
        this.$refs.wrapScrollMinutes.scrollTop = this.activeMinuteIndex * this.minutesOpts.itemHeight;
      });

      this.emitActiveTime();
    }
  }
};
</script>

<style scoped lang="scss">
.scroll-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.wrap-container {
  position: relative;
  max-height: 280px;
  width: 125px;
  overflow-y: hidden;
  overflow: auto;
  -webkit-mask-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.5, black), color-stop(1, transparent));

  &::-webkit-scrollbar {
    display: none;
  }
}

.wrap-container ul {
  list-style: none;
  position: relative;
  transition: transform .3s;
  top: 100px;
}

.wrap-container ul,
.wrap-container ul li {
  margin: 0;
  padding: 0;
  text-align: center;
}

.wrap-container ul li {
  height: 50px;
  line-height: 50px;
  transition: transform .3s;
  overflow: hidden;
  font-size: var(--g-kit-font-size-omicron);
  color: var(--g-kit-black-50);

  &.active {
    font-size: var(--g-kit-font-size-kappa);
    font-weight: var(--g-kit-font-weight-bold);
    color: var(--g-kit-black-80);
  }
}

.wrap-container ul li:last-of-type {
  height: unset;
  padding-bottom: 20px;
}

.wrap-container ul li.active .item {
  transform: scale(1.9);
}

.wrap-container ul li .item {
  position: relative;
  transition: transform 200ms;
  display: inline-block;
}
</style>
