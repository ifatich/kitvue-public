<template>
    <div class="group-input">

        <label :for="$attrs.id" class="form-label">
            {{ title || "Tanggal Lahir" }}
        </label>

        <div class="input-group custom-input-group-icon">

            <input type="text" :class="['form-control', classes]" v-bind="$attrs" :aria-label="title" :aria-describedby="title"
                :disabled="disabled" :required="required"
                :placeholder="['Pilih ' + (title || placeholder || '').toLowerCase()]" v-model="displayedDate"
                @click="showDatePicker" readonly />

            <div class="input-group-icon">
                <img src="../../assets/icon/icon-system/icon-calendar.svg" />
            </div>

        </div>

        <div class="content-date">

            <div v-if="showCalendar" class="card">

                <div class="card-header d-flex justify-content-between align-items-center">
                    <b>Pilih Tanggal</b>
                    <button class="btn p-0" @click="showDatePicker">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M7.97814 6.27576C7.50308 5.88357 6.79868 5.90971 6.3542 6.3542C5.88193 6.82646 5.88193 7.59215 6.3542 8.06441L10.7898 12.5L6.3542 16.9356C5.88193 17.4079 5.88193 18.1735 6.3542 18.6458C6.79868 19.0903 7.50308 19.1164 7.97814 18.7242L8.06441 18.6458L12.5 14.2102L16.9356 18.6458L17.0219 18.7242C17.4969 19.1164 18.2013 19.0903 18.6458 18.6458C19.1181 18.1735 19.1181 17.4079 18.6458 16.9356L14.2102 12.5L18.6458 8.06441C19.1181 7.59215 19.1181 6.82646 18.6458 6.3542C18.2013 5.90971 17.4969 5.88357 17.0219 6.27576L16.9356 6.3542L12.5 10.7898L8.06441 6.3542L7.97814 6.27576Z"
                                fill="#58585B" />
                        </svg>
                    </button>
                </div>

                <div v-if="showCalendar" ref="calendar" class="datepicker">
                    <div class="d-flex justify-content-between p-3">
                        <button @click="previousMonth">
                            <img src="../../assets/icon/icon-system/icon-chevron-left.svg" alt="">
                        </button>
                        <div class="d-flex justify-content-center border-0">
                            <span class="month-year-text" @click="toggleYearMenu">{{ formattedMonthYear }}</span>
                        </div>
                        <button @click="nextMonth">
                            <img src="../../assets/icon/icon-system/icon-chevron-right.svg" alt="">
                        </button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th v-for="day in days" :key="day">{{ day }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(week, index) in calendar" :key="index">
                                <td v-for="day in week" :key="day.date" @click="selectDate(day)">
                                    {{ day.date ? day.date.getDate() : '' }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <div v-if="showYearMenu" class="year">

                <div class="year-menu">
                    <button v-for="year in years" :key="year" @click="selectYear(year)">
                        {{ year }}
                    </button>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'DatePicker',
        inheritAttrs: false,
        props: {
            title: {
                type: String,
                default: "Tanggal Lahir"
            },
            placeholder: {
                type: String,
            },
            disabled: {
                type: Boolean,
            },
            required: {
                type: Boolean,
            },
            classes: {
                type: String,
            },
        },
        data() {
            return {
                selectedDate: null,
                showCalendar: false,
                showYearMenu: false,
                currentMonth: new Date().getMonth() + 1,
                currentYear: new Date().getFullYear(),
                displayedDate: '',
                internalDate: '',
                days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                months: [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ],
            };
        },
        computed: {
            formattedMonthYear() {
                return `${this.months[this.currentMonth - 1]} ${this.currentYear}`;
            },
            calendar() {
                const firstDayOfMonth = new Date(this.currentYear, this.currentMonth - 1, 1);
                const lastDayOfMonth = new Date(this.currentYear, this.currentMonth, 0);
                const firstDayOfWeek = firstDayOfMonth.getDay();
                const lastDateOfMonth = lastDayOfMonth.getDate();

                let dayCount = 1;
                const calendar = [];

                for (let i = 0; i < 6; i++) {
                    const week = [];
                    for (let j = 0; j < 7; j++) {
                        if ((i === 0 && j < firstDayOfWeek) || dayCount > lastDateOfMonth) {
                            week.push({
                                date: null
                            });
                        } else {
                            const date = new Date(this.currentYear, this.currentMonth - 1, dayCount);
                            week.push({
                                date
                            });
                            dayCount++;
                        }
                    }
                    calendar.push(week);
                }

                return calendar;
            },
            years() {
                const startYear = this.currentYear - 7;
                const endYear = this.currentYear + 7;
                const years = [];
                for (let year = startYear; year <= endYear; year++) {
                    years.push(year);
                }
                return years;
            },
        },
        methods: {
            toggleYearMenu() {
                this.showYearMenu = !this.showYearMenu;
            },
            showDatePicker() {
                this.showYearMenu = false;
                this.showCalendar = !this.showCalendar;
            },
            selectDate(day) {
                if (day.date) {
                    const selectedDate = new Date(day.date);
                    selectedDate.setDate(selectedDate.getDate() + 0);

                    const dayOfMonth = selectedDate.getDate();
                    const month = selectedDate.getMonth() + 1;
                    const year = selectedDate.getFullYear();

                    this.displayedDate = 
                        `${dayOfMonth < 10 ? '0' : ''}${dayOfMonth}-${month < 10 ? '0' : ''}${month}-${year}`;
                    this.internalDate =
                        `${year}-${month < 10 ? '0' : ''}${month}-${dayOfMonth < 10 ? '0' : ''}${dayOfMonth}`;

                    this.showCalendar = false;

                    console.log(this.internalDate);
                    this.$emit('update:modelValue', this.internalDate);
                }
            },
            previousMonth() {
                if (this.currentMonth > 1) {
                    this.currentMonth--;
                } else {
                    this.currentMonth = 12;
                    this.currentYear--;
                }
            },
            nextMonth() {
                if (this.currentMonth < 12) {
                    this.currentMonth++;
                } else {
                    this.currentMonth = 1;
                    this.currentYear++;
                }
            },
            selectYear(year) {
                this.currentYear = year;
                this.showYearMenu = false;
                this.updateCalendar();
            },
            updateCalendar() {
                this.showCalendar = true;
            },
        },
    };
</script>

<style scoped>
    .form-control {
        cursor: pointer;
    }

    .content-date {
        position: relative;
    }

    .card {
        position: absolute;
        z-index: 999;
        background-color: white;
        width: 360px;
        margin: 0 auto;
    }

    .card-header {
        padding: 1rem;
        background-color: white;
        border-bottom: 1px solid var(--g-kit-black-20);
    }

    .card-body .d-flex {
        border-bottom: 1px solid var(--g-kit-black-20);
    }

    .card-body input {
        padding-left: 0px;
    }

    .card b {
        font-size: var(--g-kit-font-size-lambda);
        line-height: var(--g-kit-line-height-lambda);
        font-weight: var(--g-kit-font-weight-bold);
    }

    .flex {
        display: flex;
        justify-content: space-between;
    }

    .datepicker table {
        width: 100%;
        border-collapse: collapse;
    }

    .datepicker th,
    .datepicker td {
        text-align: center;
        padding: .5rem;
        font-size: var(--g-kit-font-size-lambda);
        line-height: var(--g-kit-line-height-lambda);
        font-weight: var(--g-kit-font-weight-normal);
        color: var(--g-kit-black-80);
        cursor: pointer;
    }

    .datepicker th {
        background-color: white;
        border-bottom: 1px solid var(--g-kit-black-20);
        font-size: var(--g-kit-font-size-lambda);
        line-height: var(--g-kit-line-height-lambda);
        font-weight: var(--g-kit-font-weight-normal);
        color: var(--g-kit-black-60);
    }

    .datepicker td:hover {
        background-color: #e6e6e6;
    }

    .datepicker button {
        background-color: transparent;
        border: none;
        font-size: var(--g-kit-font-size-lambda);
        line-height: var(--g-kit-line-height-lambda);
        font-weight: var(--g-kit-font-weight-bold);
    }

    .bold {
        font-weight: 800;
    }

    .appearance-none {
        -webkit-appearance: none;
        -moz-appearance: none;
        text-indent: unset;
        text-overflow: unset;
        font-size: var(--g-kit-font-size-lambda);
        line-height: var(--g-kit-line-height-lambda);
        font-weight: var(--g-kit-font-weight-bold);
    }

    .datepicker span {
        font-size: var(--g-kit-font-size-lambda);
        line-height: var(--g-kit-line-height-lambda);
        font-weight: var(--g-kit-font-weight-bold);
        color: var(--g-kit-black-80);
        cursor: pointer;
    }

    .datepicker span:hover {
        color: var(--g-kit-lime-50);
    }

    .datepicker select {
        border: 0px;
        background-color: white;
    }

    .datepicker select:focus-visible {
        outline: none;
    }

    .year {
        position: absolute;
        z-index: 1080;
        background-color: white;
        top: 120px;
        width: 360px;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        border: 1px solid var(--g-kit-black-20);
        filter: drop-shadow(0px 12px 6px rgba(0, 0, 0, 0.02)) drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.02));
    }

    .year-menu {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .year-menu button {
        margin-top: 18px;
        margin-bottom: 18px;
        margin-right: 14px;
        margin-left: 14px;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: var(--g-kit-font-size-lambda);
        line-height: var(--g-kit-line-height-lambda);
        font-weight: var(--g-kit-font-weight-normal);
        color: var(--g-kit-black-80);
    }

    .year-menu button:hover {
        color: var(--g-kit-lime-50);
    }

    @media only screen and (max-width: 600px) {

        .year-menu button {
            margin-top: 17px;
            margin-bottom: 17px;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            font-size: var(--g-kit-font-size-omicron);
            line-height: var(--g-kit-line-height-omicron);
            font-weight: var(--g-kit-font-weight-normal);
        }

        .year,
        .card {
            width: calc(100% - 2rem) !important;
        }

        .year {
            top: 300px;
        }

        .year-menu {
            margin-bottom: unset;
        }

        .datepicker {
            max-width: 100%;
        }

        .datepicker th,
        .datepicker td {
            text-align: center;
            padding: .5rem;
        }
    }
</style>