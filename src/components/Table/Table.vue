<!-- DataTable.vue -->
<template>
    <div>
        <slot name="table-header"></slot>
    </div>
    <table class="table rounded-corners" style="width: 100%">
        <thead>
            <tr>
                <th v-for="column in columns" :key="column.key" @click="sortTable(column.key)">
                    {{ column.label }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in sortedData" :key="item.id" @click="handleRowClick(item)">
                <td v-for="column in columns" :key="column.key">
                    <slot
                        :name="column.key"
                        :value="item[column.key]"
                        :item="item"
                    >
                        {{ item[column.key] }}
                    </slot>
                </td>
            </tr>
            <tr v-if="sortedData.length === 0">
                <td :colspan="columns.length" style="text-align: center; vertical-align: middle; height: 116px;">
                  {{ nodataMessage }}
                </td>
            </tr>
        </tbody>
    </table>
  </template>
  
  <script>
    export default {
        name: "TableData",
        props: {
            data: {
                type: Array,
                required: true,
            },
            columns: {
                type: Array,
                required: true,
            },
            type: {
                type: String,
            },
            size: {
                type: String,
            },
            nodataMessage: {
              type: String,
              default: 'Tidak ada data yang ditampilkan'
            }
        },
        data() {
            return {
                sortKey: "id",
                sortOrder: 1,
            };
        },
        computed: {
            sortedData() {
                return this.data.slice().sort((a, b) => {
                    const modifier = this.sortOrder;
                    const x = a[this.sortKey];
                    const y = b[this.sortKey];
  
                    if (x === y) return 0;
  
                    return x > y ? modifier : -modifier;
                });
            },
        },
        methods: {
            sortTable(key) {
                if (this.sortKey === key) {
                    this.sortOrder = -this.sortOrder;
                } else {
                    this.sortKey = key;
                    this.sortOrder = 1;
                }
            },
            handleRowClick(item) {
                this.$emit("row-click", item);
            },
        },
    };
  </script>
  