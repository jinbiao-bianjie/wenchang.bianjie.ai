<template>
    <div class="elite">
        <div class="elite_container">
            <div class="elite_title">{{ eliteServiceProvider.title }}</div>
            <div class="elite_sub_title">{{ eliteServiceProvider.subTitle }}</div>
            <span class="control_text" @click="changeShowModal">
                {{ eliteServiceProvider.applyJoin.text }} <i class="iconfont icon-turnto"></i>
            </span>
            <div class="service_provider_list">
                <div
                    v-for="(item, index) in serviceProviderList"
                    :key="index"
                    class="service_provider_item"
                >
                    <div class="provider">
                        <div class="provider_logo_wrap">
                            <img class="banner_sign" src="../../assets/banner_sign.png" alt="" />
                            <div class="provider_logo">
                                <img class="logo" :src="item.logo" alt="" />
                            </div>
                        </div>
                        <p class="provider_fullname">
                            <span class="fullname">{{ item.fullName }}</span>
                        </p>
                    </div>
                    <div class="provider_back">
                        <p class="provider_back_description">{{ item.description }}</p>
                    </div>
                </div>
            </div>
            <Pagination
                :current="current"
                :pageSize="pageSize"
                :total="total"
                @pageNumChange="pageNumChange"
            ></Pagination>
        </div>
        <NoticeMask
            v-if="showModal"
            :showMask.sync="showModal"
            :notice="eliteServiceProvider.applyJoin.content"
        ></NoticeMask>
    </div>
</template>

<script>
import Pagination from '@theme/components/common/pagination/index.vue';
import NoticeMask from '@theme/components/common/NoticeMask.vue';

export default {
    name: 'Elite',
    props: ['eliteServiceProvider'],
    data() {
        return {
            current: 1,
            pageSize: 8,
            total: 0,
            showModal: false,
            domWidth: document.documentElement.clientWidth || document.body.clientWidth,
        };
    },
    computed: {
        serviceProviderList() {
            if (
                this.eliteServiceProvider &&
                this.eliteServiceProvider.serviceProviderList?.length
            ) {
                let list = JSON.parse(
                    JSON.stringify(this.eliteServiceProvider.serviceProviderList),
                );
                return list.slice((this.current - 1) * this.pageSize, this.current * this.pageSize);
            }
        },
    },
    methods: {
        pageNumChange(page) {
            this.current = page;
        },
        resizeChange() {
            this.domWidth = document.documentElement.clientWidth || document.body.clientWidth;
            if (this.domWidth > 1200) {
                this.pageSize = 8;
            } else if (this.domWidth > 992) {
                this.pageSize = 6;
            } else if (this.domWidth > 624) {
                this.pageSize = 8;
            } else {
                this.pageSize = 4;
            }
        },
        changeShowModal() {
            this.showModal = true;
        },
    },
    mounted() {
        this.total = this.eliteServiceProvider?.serviceProviderList?.length || 0;
        window.addEventListener('resize', this.resizeChange);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.resizeChange);
    },
    components: {
        Pagination,
        NoticeMask,
    },
    watch: {
        domWidth: {
            handler() {
                this.resizeChange();
            },
            immediate: true,
        },
    },
};
</script>

<style lang="stylus" scoped>
.elite {
  padding: 8rem;
  background-color: #fff;

  @media (max-width: 992px) {
    padding: 6rem;
  }

  .elite_container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .elite_title {
      font-size: $fontSize24;
      font-weight: 600;
      color: #000000;
      line-height: 2.4rem;
    }

    .elite_sub_title {
      margin-top: 1.6rem;
      max-width: 83.3rem;
      font-size: $fontSize14;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.75);
      line-height: 2.4rem;
      text-align: center;
    }

    .control_text {
      display: flex;
      align-items: center;
      margin-top: 1.6rem;
      font-size: $fontSize14;
      font-weight: 400;
      color: #7065FF;
      line-height: 1.4rem;
      cursor: pointer;

      .iconfont {
        margin-left: 0.8rem;
      }
    }

    .service_provider_list {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2.4rem 2rem;
      margin-top: 4.8rem;
      max-width: 114rem;

      @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 624px) {
        grid-template-columns: repeat(1, 1fr);
      }

      .service_provider_item {
        position: relative;

        &:hover {
          .provider_back {
            display: block;
          }
        }

        .provider {
          display: flex;
          flex-direction: column;
          padding: 4.2rem 0 2rem;
          min-width: 27rem;
          min-height: 26.4rem;
          border-radius: 0.4rem;
          border: 0.1rem solid #DFE4F4;
          background: url('../../assets/ecology/elite_bg.png') no-repeat center / contain;

          .provider_logo_wrap {
            position: relative;
            align-self: center;
            width: 11rem;
            height: 11rem;
            overflow: hidden;

            .banner_sign {
              width: 100%;
              height: 100%;
            }

            .provider_logo {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              padding: 1.2rem;

              .logo {
                width: 100%;
                height: 100%;
                border-radius: 50%;
              }
            }
          }

          .provider_fullname {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 6.6rem;

            .fullname {
              font-size: $fontSize16;
              font-weight: 600;
              color: #000;
              line-height: 2rem;
              text-align: center;
            }
          }
        }

        .provider_back {
          display: none;
          position: absolute;
          top: -0.8rem;
          bottom: -0.8rem;
          right: -0.5rem;
          left: -0.5rem;
          z-index: 1;
          padding: 0.8rem 0.8rem 0;
          height: 27.8rem;
          background: linear-gradient(180deg, #F1EEFF 0%, #FFFFFF 100%);
          box-shadow: 0rem 0rem 0.8rem 0rem rgba(112, 101, 255, 0.15);
          border-radius: 0.4rem;
          border: 0.1rem solid #C5CEEC;
          overflow: hidden;

          .provider_back_description {
            position: relative;
            padding-bottom: 0.8rem;
            height: 27rem;
            font-size: $fontSize14;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.75);
            line-height: 2.4rem;
            overflow-y: auto;

            &::-webkit-scrollbar {
              width: 0.4rem;
              height: 0.4rem;
            }

            &::-webkit-scrollbar-track-piece {
              background-color: transparent;
              -webkit-border-radius: 6px;
            }

            &::-webkit-scrollbar-thumb:vertical {
              background-color: #CECCF0;
            }
          }
        }
      }
    }

    .pagination {
      margin-top: 2.4rem;
    }
  }
}

:deep(.mask_content) {
  font-size: $fontSize14 !important;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.65);
  line-height: 2.4rem !important;

  .explanation {
    margin-top: 26.8rem;
    color: rgba(0, 0, 0, 0.4) !important;

    @media (max-width: 768px) {
      margin-top: 2.4rem;
    }
  }
}
</style>