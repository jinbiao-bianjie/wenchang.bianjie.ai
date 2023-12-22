<template>
    <div class="scenario">
        <div class="scenario_container">
            <div class="scenario_title">{{ serviceEcologyScenario.title }}</div>
            <div class="scenario_sub_title">{{ serviceEcologyScenario.subTitle }}</div>
            <div class="scenario_img"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Scenario',
    props: ['serviceEcologyScenario'],
};
</script>

<style lang="stylus" scoped>
.scenario {
  padding: 8rem 0;
  width: 100%;
  min-height: 72rem;
  background: url('../../assets/ecology/scenario_bg.png') no-repeat center / cover;

  @media (max-width: 992px) {
    padding: 6rem 0;
    min-height: 57.2rem;
    background: url('../../assets/ecology/scenario_bg_768.png') no-repeat center / cover;
  }

  @media (max-width: 720px) {
    min-height: 51.82rem;
  }

  @media (max-width: 556px) {
    min-height: 51.82rem;
  }

  @media (max-width: 500px) {
    background: url('../../assets/ecology/scenario_bg_375.png') no-repeat center / cover;
  }

  .scenario_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;

    .scenario_title {
      font-size: $fontSize24;
      font-weight: 600;
      color: #000000;
      line-height: 2.4rem;
    }

    .scenario_sub_title {
      margin-top: 1.6rem;
      font-size: $fontSize14;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.75);
      line-height: 2.4rem;
      text-align: center;
    }

    .scenario_img {
      margin-top: 4rem;
      width: 88.5rem;
      height: 44.6rem;
      background: url('../../assets/ecology/scenario.png') no-repeat center / contain;

      @media (max-width: 992px) {
        width: 68.6rem;
        height: 34.9rem;
        background: url('../../assets/ecology/scenario_768.png') no-repeat center / contain;
      }

      @media (max-width: 720px) {
        width: calc(100% - 6.4rem);
      }

      @media (max-width: 556px) {
        width: 100%;
        height: 29.3rem;
        background: url('../../assets/ecology/scenario_375.png') no-repeat center / contain;
      }

      @media (max-width: 500px) {
        width: 120%;
      }
    }
  }
}
</style>