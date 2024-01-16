<template>
    <div class="group-input">
        <input class="form-control" type="text" v-model="selectedDate" @click="showDatePicker" readonly />
        <div v-if="showCalendar" ref="calendar" class="datepicker">
            <div>
                <button @click="previousYear">&lt;&lt;</button>
                <button @click="previousMonth">&lt;</button>
                <select v-model="selectedMonthYear" @change="updateCalendar">
                    <option v-for="(option, index) in monthYearOptions" :key="index" :value="option.value">
                        {{ option.label }}
                    </option>
                </select>
                <button @click="nextMonth">&gt;</button>
                <button @click="nextYear">&gt;&gt;</button>
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
</template>

<script>
    export default {
        data() {
            return {
                selectedDate: null,
                showCalendar: false,
                currentMonth: new Date().getMonth() + 1,
                currentYear: new Date().getFullYear(),
                days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                months: [
                    'January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'
                ],
            };
        },
        computed: {
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
            selectedMonthYear: {
                get() {
                    return `${this.currentYear}-${this.currentMonth.toString().padStart(2, '0')}`;
                },
                set(value) {
                    const [year, month] = value.split('-');
                    this.currentYear = parseInt(year);
                    this.currentMonth = parseInt(month);
                },
            },
            monthYearOptions() {
                const options = [];
                for (let year = this.currentYear - 10; year <= this.currentYear + 10; year++) {
                    for (let month = 1; month <= 12; month++) {
                        options.push({
                            label: `${this.months[month - 1]} ${year}`,
                            value: `${year}-${month.toString().padStart(2, '0')}`,
                        });
                    }
                }
                return options;
            },
        },
        methods: {
            showDatePicker() {
                this.showCalendar = !this.showCalendar;
            },
            selectDate(day) {
                if (day.date) {
                    this.selectedDate = day.date.toISOString().split('T')[0];
                    this.showCalendar = false;
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
            previousYear() {
                this.currentYear--;
            },
            nextYear() {
                this.currentYear++;
            },
            updateCalendar() {
                this.showCalendar = true;
            },
        },
    };
</script>

<style scoped>

    .form-control{
        font-family: NunitoSans-SemiBold;
    }
    .datepicker {
        position: absolute;
        z-index: 999;
        background-color: white;
        border: 1px solid #ccc;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        max-width: 300px;
        width: 100%;
        margin: 0 auto;
    }

    .datepicker table {
        width: 100%;
        border-collapse: collapse;
    }

    .datepicker th,
    .datepicker td {
        text-align: center;
        padding: 8px;
        border: 1px solid #ccc;
    }

    .datepicker th {
        background-color: #f2f2f2;
    }

    .datepicker td:hover {
        background-color: #e6e6e6;
    }

    .datepicker button {
        background-color: transparent;
        border: none;
        font-size: 14px;
        margin: 0 5px;
    }

    .datepicker span {
        font-size: 16px;
        font-weight: bold;
        margin: 0 10px;
    }

    .datepicker select {
        margin: 0 5px;
    }

    @media only screen and (max-width: 600px) {
        .datepicker {
            max-width: 100%;
        }
    }
</style>