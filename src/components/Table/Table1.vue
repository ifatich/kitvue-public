<template>
  <div class="table-box">
    <div class="table-box-content">
      <table class="table table-striped">
        <thead>
          <tr>
            <th class="align-middle">Gol</th>
            <th class="align-middle">Uang Pinjaman</th>
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center">A</td>
            <td>Rp 50.000 - Rp 500.000</td>
            <td class="text-right">1%</td>
            <td>-</td>
            <td class="text-right black-zero">Rp 2.000</td>
          </tr>
          <tr>
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
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "k-table-1",
  props: {},
};
</script>
<style></style>
