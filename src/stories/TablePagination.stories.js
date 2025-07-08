import TablePagination from "../components/Table/TablePagination.vue";

  export default {
    title: 'Components/Table/Pagination',
    component: TablePagination,
    tags: ['autodocs'],
    argTypes: {
      size: {
        control: 'number'
      },
      totalRows : {
        control: 'number'
      },
      perPage: {
        control: 'number'
      },
      limit: {
        control: 'number'
      },
    },
    args: {
      perPage: 10,
      totalRows: 100,
      modelValue: 1,
    }
  };

  export const Pagination = {
  };