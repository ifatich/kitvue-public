import CustomTable from '../components/Table/CustomTable.vue'

export default {
  title: 'Components/Table/CustomTable',
  component: CustomTable,
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of row data objects',
      table: {
        type: { summary: 'Array' },
        defaultValue: { summary: '[]' }
      }
    },
    parentHead: {
      control: 'object',
      description: 'Parent header rows configuration with colspan/rowspan',
      table: {
        type: { summary: 'Array' }
      }
    },
    childHead: {
      control: 'object',
      description: 'Child header rows configuration',
      table: {
        type: { summary: 'Array' }
      }
    },
    dataFormatter: {
      control: 'object',
      description: 'Configuration for data formatting and styling',
      table: {
        type: { summary: 'Object' }
      }
    },
    nodataMessage: {
      control: 'text',
      description: 'Message to display when no data available',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Tidak ada data yang ditampilkan' }
      }
    },
    class: {
      control: 'text',
      description: 'Custom CSS classes',
      table: {
        type: { summary: 'string' }
      }
    },
    style: {
      control: 'text',
      description: 'Custom inline styles',
      table: {
        type: { summary: 'string' }
      }
    }
  },
  args: {
    nodataMessage: 'Tidak ada data yang ditampilkan'
  }
}

/**
 * Basic table with simple headers
 */
export const BasicTable = {
  args: {
    parentHead: [
      { label: 'Produk', key: 'produk', col: 1, row: 2, tooltip: { show: false } },
      { label: 'Penjualan', key: 'penjualan', col: 2, row: 1, tooltip: { show: false } }
    ],
    childHead: [
      { label: 'Nama', key: 'nama', tooltip: { show: false } },
      { label: 'Q1', key: 'q1', tooltip: { show: false } },
      { label: 'Q2', key: 'q2', tooltip: { show: false } }
    ],
    data: [
      { '1': 'Emas Batangan', '2': 10000000, '3': 12000000 },
      { '1': 'Emas Perhiasan', '2': 8500000, '3': 9200000 },
      { '1': 'Gadai', '2': 15000000, '3': 14500000 }
    ],
    dataFormatter: { 
      hasBg: [], 
      needFormat: ['2', '3'] 
    },
    nodataMessage: 'Tidak ada data yang ditampilkan'
  },
  render: (args) => ({
    components: { CustomTable },
    template: `
      <div style="padding: 20px;">
        <h3>Basic Table</h3>
        <CustomTable 
          :data="args.data"
          :parentHead="args.parentHead"
          :childHead="args.childHead"
          :dataFormatter="args.dataFormatter"
          :nodataMessage="args.nodataMessage"
        />
      </div>
    `
  })
}

/**
 * Table with background highlighting
 */
export const WithBackgroundHighlight = {
  args: {
    parentHead: [
      { label: 'Produk', key: 'produk', col: 1, row: 2, tooltip: { show: false } },
      { label: 'Rating', key: 'rating', col: 1, row: 2, tooltip: { show: false } }
    ],
    childHead: [
      { label: 'Nama', key: 'nama', tooltip: { show: false } },
      { label: 'Score', key: 'score', tooltip: { show: false } }
    ],
    data: [
      { '1': 'Produk A', '2': 98 },
      { '1': 'Produk B', '2': 87 },
      { '1': 'Produk C', '2': 102 }
    ],
    dataFormatter: { 
      hasBg: ['2'], 
      needFormat: [] 
    },
    nodataMessage: 'Tidak ada data yang ditampilkan'
  },
  render: (args) => ({
    components: { CustomTable },
    template: `
      <div style="padding: 20px;">
        <h3>Table with Background Highlighting</h3>
        <p style="font-size: 12px; color: #666; margin-bottom: 15px;">Values color-coded by score range</p>
        <CustomTable 
          :data="args.data"
          :parentHead="args.parentHead"
          :childHead="args.childHead"
          :dataFormatter="args.dataFormatter"
          :nodataMessage="args.nodataMessage"
        />
      </div>
    `
  })
}

/**
 * Empty table state
 */
export const EmptyState = {
  args: {
    parentHead: [
      { label: 'Produk', key: 'produk', col: 1, row: 2, tooltip: { show: false } },
      { label: 'Data', key: 'data', col: 1, row: 2, tooltip: { show: false } }
    ],
    childHead: [
      { label: 'Nama', key: 'nama', tooltip: { show: false } },
      { label: 'Nilai', key: 'nilai', tooltip: { show: false } }
    ],
    data: [],
    dataFormatter: { 
      hasBg: [], 
      needFormat: [] 
    },
    nodataMessage: 'Tidak ada data yang ditampilkan. Silakan coba lagi nanti.'
  },
  render: (args) => ({
    components: { CustomTable },
    template: `
      <div style="padding: 20px;">
        <h3>Empty State</h3>
        <CustomTable 
          :data="args.data"
          :parentHead="args.parentHead"
          :childHead="args.childHead"
          :dataFormatter="args.dataFormatter"
          :nodataMessage="args.nodataMessage"
        />
      </div>
    `
  })
}

/**
 * Table with indicators (status column visualization)
 */
export const WithIndicators = {
  args: {
    parentHead: [
      { label: 'Produk', key: 'produk', col: 1, row: 2, tooltip: { show: false } },
      { label: 'Kinerja', key: 'INDIKATOR', col: 1, row: 2, tooltip: { show: false } }
    ],
    childHead: [
      { label: 'Nama', key: 'nama', tooltip: { show: false } },
      { label: 'Status', key: 'status', tooltip: { show: false } }
    ],
    data: [
      { '1': 'Produk A', '2': 'Baik' },
      { '1': 'Produk B', '2': 'Normal' },
      { '1': 'Produk C', '2': 'Perlu Perhatian' }
    ],
    dataFormatter: { 
      hasBg: [], 
      needFormat: [] 
    },
    nodataMessage: 'Tidak ada data'
  },
  render: (args) => ({
    components: { CustomTable },
    template: `
      <div style="padding: 20px;">
        <h3>Table with Status Indicators</h3>
        <CustomTable 
          :data="args.data"
          :parentHead="args.parentHead"
          :childHead="args.childHead"
          :dataFormatter="args.dataFormatter"
          :nodataMessage="args.nodataMessage"
        />
      </div>
    `
  })
}
