<!-- DataTable.vue -->
<template>
    <table ref="dataable" class="table rounded-corners">
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
                    <span v-if="!column.isAction">{{ item[column.key] }}</span>
                    <span v-else-if="column.isAction && column.showAction">
                        <Button class="me-2" :type="action.type" :size="action.size" v-for="action in column.actions" :key="action.name" @click="handleActionClick(action, item)" :label="action.label" />
                    </span>
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
    import Button from '../Button/Button.vue';

    export default {
        name: "TableData",
        components: {
            Button
        },
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
            handleActionClick(action, item) {
                this.$emit(`action-click:${action.name}`, item);
            },
        },
    };
</script>

<style scoped>
    .w-1000{
        width: 50vw;
    }
</style>
