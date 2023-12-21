<template>
    <div class="wallet">
        <div class="wallet_container">
            <div class="wallet_title">{{ walletsServiceProvider.title }}</div>
            <div class="wallet_content">
                <div
                    v-for="(item, index) in walletsServiceProvider.providers"
                    :key="index"
                    class="provider"
                    :style="{
                        background: `url(/ecology/${item.bgImg}.png) no-repeat center / cover`,
                    }"
                >
                    <img :src="getWalletProviderLogo(item.logo)" alt="" />
                    <p class="provider_name">{{ item.name }}</p>
                    <div class="provider_info">
                        <div
                            class="application_wrap"
                            :style="{
                                background: `url(/ecology/${item.backBgImg}.png) no-repeat center / cover`,
                            }"
                        >
                            <div
                                v-for="(app, aIndex) in item.application"
                                :key="aIndex"
                                class="application"
                            >
                                <div class="app_name">{{ app.name }}</div>
                                <div
                                    v-for="(desciption, dIndex) in app.descriptions"
                                    :key="dIndex"
                                    class="description_wrap"
                                >
                                    <div class="description">{{ desciption.paragraph }}</div>
                                </div>
                                <a
                                    class="control_text"
                                    :href="app.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {{ app.moreText }}
                                    <i class="iconfont icon-turnto"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Wallet',
    props: ['walletsServiceProvider'],
    methods: {
        getWalletProviderLogo(img) {
            return `/ecology/${img}.png`;
        },
    },
    mounted() {},
};
</script>

<style lang="stylus" scoped>
.wallet {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3.2rem 8rem;
  background-color: #fff;

  @media (max-width: 992px) {
    padding: 0 3.2rem 6rem;
  }

  .wallet_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 112.4rem;
    width: 100%;

    .wallet_title {
      font-size: $fontSize24;
      font-weight: 600;
      color: #000000;
      line-height: 2.4rem;
    }

    .wallet_content {
      display: flex;
      justify-content: center;
      gap: 2.4rem;
      margin: 4rem auto 0;
      min-height: 36.2rem;

      @media (max-width: 570px) {
        display: unset;
        width: 100%;
        height: auto;
        max-height: 66.8rem;
      }

      .provider {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10rem 0 0;
        width: 27.6rem;
        min-width: 27.6rem;
        max-width: 27.6rem;
        height: 34.4rem;
        transition: width 0.5s;

        &:hover {
          display: block;
          padding: 0;
          width: 100%;
          max-width: 100%;
          background: none !important;

          img {
            display: none;
          }

          .provider_name {
            display: none;
          }

          .provider_info {
            display: block;
            transform: translateY(-2.11%);
          }
        }

        @media (max-width: 992px) {
          width: 19.4rem;
          min-width: 19.4rem;
          max-width: 19.4rem;
          height: 36.8rem;
        }

        @media (max-width: 570px) {
          margin: 2.4rem auto 0;
          padding: 2.4rem 0;
          width: calc(100% - 16px);
          min-width: calc(100% - 16px);
          max-width: calc(100% - 16px);
          height: 16.4rem;
          min-height: 16.4rem;
          max-height: 16.4rem;
          transition: width 0s, height 0.5s;

          &:first-child {
            margin-top: 0;
          }

          &:hover {
            width: 100%;
            height: 48rem;
            max-height: 48rem;

            .provider_info {
              display: block;
              height: 100%;
              transform: translateY(0);

              .application_wrap {
                height: 100%;
              }
            }
          }
        }

        img {
          width: 10rem;
          height: 10rem;

          @media (max-width: 570px) {
            width: 8rem;
            height: 8rem;
          }
        }

        .provider_name {
          margin-top: 2.4rem;
          font-size: $fontSize20;
          font-weight: 600;
          color: #000000;
          line-height: 2rem;
          text-align: center;

          @media (max-width: 992px) {
            max-width: 13.9rem;
            line-height: 2.4rem;
          }

          @media (max-width: 570px) {
            margin-top: 1.6rem;
            max-width: 100%;
            line-height: 2rem;
          }
        }

        .provider_info {
          display: none;
          box-sizing: border-box;
          padding: 0.8rem;
          max-width: 84.2rem;
          background: #fff;
          box-shadow: 0rem 0rem 0.8rem 0rem rgba(112, 101, 255, 0.15);
          border-radius: 0.4rem;
          border: 0.1rem solid $highlightDetailColor;
          animation: providerInfo 0.5s;

          @media (max-width: 570px) {
            animation: none;
          }

          .application_wrap {
            padding: 2.3rem 23.3rem 2.4rem 2.4rem;
            height: 34.4rem;
            overflow-y: auto;

            @media (max-width: 992px) {
              padding: 2.4rem;
              height: 36.8rem;
              background: url('../../assets/ecology/back_bg_768.png') no-repeat center / cover !important;
            }

            @media (max-width: 570px) {
              height: 16.4rem;
              background: url('../../assets/ecology/back_bg_375.png') no-repeat center / cover !important;
            }

            .application {
              margin-top: 4rem;

              &:first-child {
                margin-top: 0;
              }

              .app_name {
                font-size: $fontSize20;
                font-weight: 600;
                color: #000000;
                line-height: 2rem;
              }

              .description_wrap {
                margin-top: 1.6rem;

                .description {
                  margin-top: 2.4rem;
                  max-width: 55.1rem;

                  @media (max-width: 992px) {
                    max-width: 42.2rem;
                  }

                  @media (max-width: 570px) {
                    max-width: 100%;
                  }

                  &:first-child {
                    margin-top: 0;
                  }
                }
              }

              .control_text {
                display: flex;
                align-items: center;
                margin-top: 1.6rem;

                .iconfont {
                  margin-left: 0.8rem;
                }
              }
            }
          }
        }
      }
    }
  }
}

@keyframes providerInfo {
  0% {
    opacity: 0;
    width: 80%;
  }

  100% {
    opacity: 1;
    width: 100%;
  }
}
</style>