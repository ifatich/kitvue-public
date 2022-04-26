<template>
  <div class="table-box">
    <div class="table-box-content">
      <table class="table table-striped">
        <thead>
          <tr>
            <th v-for="field in fields" :key="field.key" class="align-middle">
              {{ field.label }}
            </th>
            <!-- <th class="align-middle">Uang Pinjaman</th>
            <th class="text-right align-middle" width="122px">
              Sewa Modal <br />
              /15 Hari <br />
            </th>
            <th class="align-middle" width="88px">Premi</th>
            <th class="text-right align-middle" width="104px">Administrasi</th>
          </tr>
          <tr class="rowspan-custom">
            <th></th>
            <th></th>
            <th class="text-right">TR</th>
            <th></th>
            <th></th> -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="index">
            <td v-for="(data, idx) in Object.keys(item)" :key="idx">
              {{ item[data] }}
            </td>
          </tr>
          <!-- <tr>
            <td class="text-center">B</td>
            <td>> Rp 500.000 - Rp 1.000.000</td>
            <td class="text-right">1,2%</td>
            <td>Rp 1.000</td>
            <td class="text-right black-zero">Rp 10.000</td>
          </tr>
          <tr>
            <td class="text-center">B</td>
            <td>> Rp 1.000.000 - Rp 2.500.000</td>
            <td class="text-right">1,2%</td>
            <td>Rp 1.000</td>
            <td class="text-right black-zero">Rp 20.000</td>
          </tr>
          <tr>
            <td class="text-center">B</td>
            <td>> Rp 2.500.000 - Rp 5.000.000</td>
            <td class="text-right">1,2%</td>
            <td>Rp 1.000</td>
            <td class="text-right black-zero">Rp 35.000</td>
          </tr>
          <tr>
            <td class="text-center">C</td>
            <td>> Rp 5.000.000 - Rp 10.000.000</td>
            <td class="text-right">1,2%</td>
            <td>Rp 1.000</td>
            <td class="text-right black-zero">Rp 50.000</td>
          </tr>
          <tr>
            <td class="text-center">C</td>
            <td>> Rp 2.500.000 - Rp 5.000.000</td>
            <td class="text-right">1,2%</td>
            <td>Rp 1.000</td>
            <td class="text-right black-zero">Rp 75.000</td>
          </tr>
          <tr>
            <td class="text-center">C</td>
            <td>> Rp 15.000.000 - Rp 20.000.000</td>
            <td class="text-right">1,2%</td>
            <td>Rp 1.000</td>
            <td class="text-right black-zero">Rp 100.000</td>
          </tr>
          <tr>
            <td class="text-center">D</td>
            <td>> Rp 20.000.000</td>
            <td class="text-right">1,2%</td>
            <td>Rp 1.000 - Rp 1.500</td>
            <td class="text-right black-zero">Rp 125.000</td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-table-1",
  props: {
    fields: {
      type: Array,
      default: function () {
        return [
          { key: "GOL", label: "GOL" },
          { key: "Uang_Pinjaman", label: "Uang Pinjaman" },
          { key: "Sewa_Modal", label: "Sewa Modal / 15hari" },
          { key: "Premi", label: "Premi" },
          { key: "Administrasi", label: "Administrasi" },
        ];
      },
    },
    items: {
      type: Array,
      default: function () {
        return [
          {
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
