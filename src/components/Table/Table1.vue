<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="table-box">
        <div class="table-box-content">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th v-for="field in fields" :key="field.key" class="align-middle">
                            {{ field.label }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in items" :key="index">
                        <td v-for="(data, idx) in Object.keys(item)" :key="idx">
                            {{ item[data] }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        name: "TableBasic",
        props: {
            fields: {
                type: Array,
                default: function () {
                    return [{
                            key: "GOL",
                            label: "GOL"
                        },
                        {
                            key: "Uang_Pinjaman",
                            label: "Uang Pinjaman"
                        },
                        {
                            key: "Sewa_Modal",
                            label: "Sewa Modal / 15hari"
                        },
                        {
                            key: "Premi",
                            label: "Premi"
                        },
                        {
                            key: "Administrasi",
                            label: "Administrasi"
                        },
                    ];
                },
            },
            items: {
                type: Array,
                default: function () {
                    return [{
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
</script>
<style></style>