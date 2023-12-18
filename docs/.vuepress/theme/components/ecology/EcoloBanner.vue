<template>
    <div class="ecolobanner_container">
        <div class="ecolobanner_content_container">
            <div class="ecolobanner_content">
                <div class="title">{{ ecologyBannerContent.title }}</div>
                <div class="sub_title">{{ ecologyBannerContent.subTitle }}</div>
                <div class="description">
                    <div
                        class="description_item_wrap"
                        v-for="(item, index) in ecologyBannerContent.description"
                        :key="index"
                    >
                        <div class="description_item">
                            <span class="value">
                                {{ item.value }}
                            </span>
                            <span class="label">
                                {{ item.label }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EcoloBanner',
    props: ['ecologyBannerContent'],
};
</script>

<style lang="stylus" scoped>
.ecolobanner_container {
  width: 100%;
  background: url('../../assets/ecology/ecoloapp_banner.png') no-repeat center / cover;

  @media (max-width: 768px) {
    background: url('../../assets/ecology/ecology_banner_768.png') no-repeat center / cover !important;
  }

  .ecolobanner_content_container {
    margin: 0 auto;
    max-width: $contentWidth;

    .ecolobanner_content {
      box-sizing: border-box;
      padding: 9.6rem 3.6rem;

      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 9.6rem 3.2rem;
      }

      .title {
        font-size: $fontSize48;
        font-weight: 400;
        color: #000000;
        line-height: 6rem;
        letter-spacing: 0.4rem;

        @media (max-width: 600px) {
          font-size: $fontSize40;
        }

        @media (max-width: 520px) {
          font-size: $fontSize24;
          font-weight: 600;
        }

        @media (max-width: 400px) {
          text-align: center;
        }
      }

      .sub_title {
        margin-top: 2.4rem;
        max-width: 57.4rem;
        font-size: $fontSize18;
        font-weight: 400;
        color: #000000;
        line-height: 2.4rem;

        @media (max-width: 768px) {
          text-align: center;
        }

        @media (max-width: 520px) {
          font-size: $fontSize16;
        }

        @media (max-width: 400px) {
          text-align: center;
        }
      }

      .description {
        display: flex;
        align-items: center;
        margin-top: 4rem;
        padding: 1rem 0;
        max-width: 50.6rem;
        background: #DCE6FC;
        border-radius: 0.4rem;
        opacity: 0.8;

        @media (max-width: 570px) {
          margin-top: 2.4rem;
        }

        .description_item_wrap {
          display: flex;
          align-items: center;

          &::after {
            content: '';
            display: block;
            width: 0.1rem;
            height: 2rem;
            background-color: rgba(0, 0, 0, 0.1);
          }

          &:last-child {
            &::after {
              content: '';
              display: none;
            }
          }

          .description_item {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 4rem;
            min-width: 16.4rem;
            white-space: nowrap;

            @media (max-width: 570px) {
              padding: 0 1.4rem;
              min-width: auto;
            }

            .value {
              font-size: $fontSize24;
              font-weight: 600;
              color: #000000;
              line-height: 3.2rem;

              @media (max-width: 520px) {
				font-size: $fontSize20;
              }
            }

            .label {
              margin-top: 0.4rem;
              font-size: $fontSize14;
              font-weight: 400;
              color: #000000;
              line-height: 2.4rem;
			  @media (max-width: 520px) {
				font-size: $fontSize12;
              }
            }
          }
        }
      }
    }
  }
}
</style>
