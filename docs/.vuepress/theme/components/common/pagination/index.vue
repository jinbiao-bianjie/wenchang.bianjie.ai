<template>
    <a-pagination
        class="pagination"
        :current="current"
        :page-size="pageSize"
        :total="total"
        size="small"
        @change="showSizeChange"
    />
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        current: {
            type: Number,
            default: 1,
        },
        pageSize: {
            type: Number,
            default: 10,
        },
        total: {
            type: Number,
            default: 0,
        },
    },
    methods: {
        showSizeChange(current) {
            this.$emit('pageNumChange', current);
        },
    },
};
</script>

<style lang="stylus" scoped>
.pagination {
  line-height: 3.2rem;

  :deep(.ant-pagination-item) {
    box-sizing: border-box;
    margin: 0 0.6rem;
    width: 2.4rem;
    height: 2.4rem;
    color: #808080;
    background: #fff;
    border-radius: 0.4rem;
    border: 0.1rem solid #CECAFF !important;

    &:hover {
      background-color: $highlightDetailColor;
      border-color: $highlightDetailColor !important;

      a {
        color: #fff;
      }
    }
  }

  :deep(.ant-pagination-item-active) {
    background-color: $highlightDetailColor;
    border-color: $highlightDetailColor !important;

    a {
      color: #fff;
    }
  }

  :deep(.ant-pagination-prev:not(.ant-pagination-disabled)), :deep(.ant-pagination-next:not(.ant-pagination-disabled)) {
    min-width: 1.6rem;

    .ant-pagination-item-link {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      width: 1.6rem;
      color: $highlightDetailColor;

      .anticon {
        svg {
          width: 1.6rem;
          height: 1.6rem;
        }
      }
    }
  }

  :deep(.ant-pagination-disabled) {
    min-width: 1.6rem;

    .ant-pagination-item-link {
      display: flex;
      justify-content: center;
      align-items: center;

      .anticon {
        svg {
          width: 1.6rem;
          height: 1.6rem;
          color: rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
}
</style>
