<template>
    <div class="payment">
        <div class="payment_container">
            <div class="payment_title">
                {{ paymentServiceProvider.title }}
            </div>
            <div class="payment_content">
                <p class="name">{{ paymentServiceProvider.info.name }}</p>
                <div class="descriptions">
                    <p
                        v-for="(description, index) in paymentServiceProvider.info.descriptions"
                        :key="index"
                        class="description"
                    >
                        {{ description.paragraph }}
                    </p>
                </div>
            </div>
            <div class="payment_wallets">
                <div
                    v-for="(wallet, index) in paymentServiceProvider.wallets"
                    :key="index"
                    class="wallet_wrap"
                >
                    <div class="wallet">
                        <img :src="getWalletLogo(wallet.logo)" alt="" />
                        <p class="name">{{ wallet.name }}</p>
                        <p class="intro">{{ wallet.intro }}</p>
                    </div>
                    <div class="wallet_descriptions">
                        <div
                            v-for="(walletDescription, wIndex) in wallet.descriptions"
                            :key="wIndex"
                            class="description"
                        >
                            <p class="text">{{ walletDescription.paragraph }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Payment',
    props: ['paymentServiceProvider'],
    methods: {
        getWalletLogo(img) {
            return `/ecology/${img}`;
        },
    },
};
</script>

<style lang="stylus" scoped>
.payment {
  padding: 8rem 2.4rem;
  background-color: #fff;

  @media (max-width: 992px) {
    padding: 6rem 2.4rem;
  }

  .payment_container {
    margin: 0 auto;
    max-width: 111.6rem;

    .payment_title {
      display: flex;
      flex-direction: column;
      z-index: 1;
      margin-left: 2.4rem;
      font-size: $fontSize24;
      font-weight: 600;
      color: #000000;
      line-height: 2.4rem;

      &::before {
        content: '';
        display: block;
        margin-bottom: 2rem;
        width: 9.6rem;
        height: 0.4rem;
        background-color: $highlightDetailColor;
      }
    }

    .payment_content {
      margin-top: -1.2rem;
      padding: 4.8rem 2.4rem;
      background: #F9FAFD url('../../assets/ecology/huifutianxia_bg.png') no-repeat center / cover;
      background-position: 100% 100%;

      @media (max-width: 992px) {
        background: #F9FAFD url('../../assets/ecology/huifutianxia_bg_768.png') no-repeat center / contain;
        background-position: 100% 100%;
      }

      @media (max-width: 556px) {
        background: #F9FAFD url('../../assets/ecology/huifutianxia_bg_375.png') no-repeat center / contain;
      }

      .name {
        font-size: $fontSize20;
        font-weight: 600;
        color: #000000;
        line-height: 2rem;
      }

      .descriptions {
        margin-top: 2rem;
        max-width: 70.5rem;

        @media (max-width: 768px) {
          max-width: 56rem;
        }

        .description {
          margin-top: 2.4rem;
          font-size: $fontSize14;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.75);
          line-height: 2.4rem;

          &:first-child {
            margin-top: 0;
          }
        }
      }
    }

    .payment_wallets {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2.4rem;
      margin-top: 2.4rem;

      @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
      }

      .wallet_wrap {
        position: relative;

        &:hover {
          .wallet_descriptions {
            display: block;
          }
        }

        .wallet {
          padding: 5rem 2.4rem 2.4rem;
          background: #F9FAFD url('../../assets/ecology/huifutianxia_wallet.png') no-repeat center / contain;
          background-position: 100% 100%;
          border-radius: 0.4rem;

          @media (max-width: 768px) {
            background: #F9FAFD url('../../assets/ecology/huifutianxia_wallet_768.png') no-repeat center / contain;
            background-position: 100% 100%;
          }

          @media (max-width: 375px) {
            background: #F9FAFD url('../../assets/ecology/huifutianxia_wallet_375.png') no-repeat center / contain;
            background-position: 100% 100%;
          }

          img {
            width: 7.62rem;
            height: 7.62rem;
            background: #FFFFFF;
            border: 0.1rem solid #E8EBF5;
            border-radius: 50%;
          }

          .name {
            margin-top: 2.4rem;
            font-size: $fontSize16;
            font-weight: 600;
            color: #000000;
            line-height: 2.4rem;
          }

          .intro {
            margin-top: 1.6rem;
            font-size: $fontSize14;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.75);
            line-height: 2.4rem;
          }
        }

        .wallet_descriptions {
          display: none;
          position: absolute;
          top: -0.8rem;
          right: -0.8rem;
          bottom: -0.8rem;
          left: -0.8rem;
          padding: 0.8rem;
          background: #FFFFFF;
          box-shadow: 0rem 0rem 0.8rem 0rem rgba(112, 101, 255, 0.15);
          border-radius: 0.4rem;
          border: 0.1rem solid #7065FF;

          .description {
            padding: 2.4rem;
            height: 100%;
            background: url('../../assets/ecology/huifutianxia_back_bg.png') no-repeat center / cover;

            .text {
              height: 100%;
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
    }
  }
}
</style>