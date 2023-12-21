<template>
    <div class="contract">
        <div class="contract_container">
            <p class="contarct_title">
                {{ smartContract.title }}
            </p>
            <div class="service_provider_list">
                <div
                    v-for="(item, index) in smartContract.serviceProviderList"
                    :key="index"
                    class="service_provider_item"
                >
                    <div class="contract_logo_wrap">
                        <div class="contract_logo">
                            <img :src="getSmartContractLogo(item.logo)" />
                        </div>
                    </div>
                    <div class="service_provider_details">
                        <div class="service_provider_name_wrap">
                            <span class="service_provider_name">{{ item.info.name }}</span>
                            <a
                                class="control_text"
                                :href="item.info.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {{ item.info.moreText }} <i class="iconfont icon-turnto"></i>
                            </a>
                        </div>
                        <p class="service_provider_intro">{{ item.info.intro }}</p>
                        <a
                            class="control_text_mobile"
                            :href="item.info.href"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {{ item.info.moreText }} <i class="iconfont icon-turnto"></i>
                        </a>
                        <div class="service_provider_contracts">
                            <div
                                v-for="(contract, cIndex) in item.info.contractList"
                                :key="cIndex"
                                class="contract_item"
                            >
                                <Hexagon>
                                    <template>
                                        <SvgIcon
                                            class="svg_icon"
                                            :iconName="contract.icon"
                                        ></SvgIcon>
                                    </template>
                                </Hexagon>
                                <span class="contract_label">{{ contract.label }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Hexagon from '@theme/components/common/Hexagon.vue';
import SvgIcon from '@theme/components/common/SvgIcon.vue';

export default {
    name: 'SmartContract',
    props: ['smartContract'],
    methods: {
        getSmartContractLogo(logo) {
            return `/ecology/${logo}`;
        },
    },
    components: {
        Hexagon,
        SvgIcon,
    },
};
</script>

<style lang="stylus" scoped>
.contract {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 2.4rem;
  min-height: 50.8rem;
  background-color: #f9fafd;

  @media (max-width: 992px) {
    padding: 6rem 2.4rem;
  }

  .contract_container {
    max-width: 92.6rem;

    @media (max-width: 992px) {
      max-width: 64rem;
    }

    @media (max-width: 704px) {
      max-width: 31.1rem;
    }

    .contarct_title {
      font-size: $fontSize24;
      font-weight: 600;
      color: #000;
      line-height: 2.4rem;
      text-align: center;
    }

    .service_provider_list {
      margin-top: 4.8rem;

      @media (max-width: 704px) {
        margin-top: 2.4rem;
      }

      .service_provider_item {
        display: flex;
        align-items: center;
        gap: 2.4rem 6rem;
        padding: 4rem;
        background: #fff;
        box-shadow: 0 0 2.5rem 0 #F0F3FC;
        border-radius: 4rem;

        @media (max-width: 992px) {
          flex-direction: column;
          align-items: flex-start;
        }

        @media (max-width: 704px) {
          padding: 2.3rem;
        }

        .contract_logo_wrap {
          box-sizing: border-box;
          padding: 0.4rem;
          border: 0.2rem solid #E8EBF5;
          border-radius: 50%;

          @media (max-width: 992px) {
            padding: 0.2rem;
          }

          .contract_logo {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              width: 14.8rem;
              height: 14.8rem;
              border: 0.1rem solid #E8EBF5;
              border-radius: 50%;

              @media (max-width: 992px) {
                width: 6.6rem;
                height: 6.6rem;
              }
            }
          }
        }

        .service_provider_details {
          .service_provider_name_wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .service_provider_name {
              font-size: $fontSize20;
              font-weight: 600;
              color: #000000;
              line-height: 2rem;
            }

            .control_text {
              display: flex;
              align-items: center;

              @media (max-width: 704px) {
                display: none;
              }

              .iconfont {
                margin-left: 0.8rem;
              }
            }
          }

          .service_provider_intro {
            margin-top: 1.6rem;
            font-size: $fontSize14;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.75);
            line-height: 2.4rem;
          }

          .control_text_mobile {
            display: none;

            @media (max-width: 704px) {
              display: flex;
              align-items: center;
              margin-top: 1.6rem;

              .iconfont {
                margin-left: 0.8rem;
              }
            }
          }

          .service_provider_contracts {
            display: flex;
            align-items: center;
            gap: 4.8rem;
            margin-top: 1.6rem;
            margin-left: 2.4rem;

            @media (max-width: 992px) {
              gap: 3.7rem;
            }

            @media (max-width: 704px) {
              flex-direction: column;
              align-items: flex-start;
              gap: 1.6rem;
              margin-top: 2.4rem;
            }

            .contract_item {
              position: relative;
              padding: 0.8rem 1.4rem 0.8rem 3.4rem;
              background: #F0F4FE;
              border-radius: 0rem 2.4rem 2.4rem 0rem;
              border: 0.1rem solid #ECEEFE;

              .svg_icon {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 2.4rem;
                height: 2.6rem;
                font-size: 2.4rem;
                z-index: 1;
              }

              .contract_label {
                font-size: $fontSize14;
                font-weight: 400;
                color: rgba(0, 0, 0, 0.75);
                line-height: 2.4rem;
                white-space: nowrap;
              }
            }
          }
        }
      }
    }
  }
}
</style>