<template>
    <div class="ecoloapp_container">
        <EcoloBanner :ecologyBannerContent="ecologyBannerContent"></EcoloBanner>
        <Elite :eliteServiceProvider="eliteServiceProvider"></Elite>
        <SmartContract :smartContract="smartContract"></SmartContract>
        <Payment :paymentServiceProvider="paymentServiceProvider"></Payment>
        <Wallet :walletsServiceProvider="walletsServiceProvider"></Wallet>
        <Scenario :serviceEcologyScenario="serviceEcologyScenario"></Scenario>
    </div>
</template>

<script>
import EcoloBanner from './EcoloBanner.vue';
import Elite from './Elite.vue';
import SmartContract from './SmartContract.vue';
import Payment from './Payment.vue';
import Wallet from './Wallet.vue';
import Scenario from './Scenario.vue';

export default {
    name: 'EcoloApp',
    computed: {
        ecologyBannerContent() {
            return this.$frontmatter.ecologyBannerContent;
        },
        eliteServiceProvider() {
            return this.$frontmatter.eliteServiceProvider;
        },
        smartContract() {
            return this.$frontmatter.smartContract;
        },
        paymentServiceProvider() {
            return this.$frontmatter.paymentServiceProvider;
        },
        walletsServiceProvider() {
            return this.$frontmatter.walletsServiceProvider;
        },
        serviceEcologyScenario() {
            return this.$frontmatter.serviceEcologyScenario;
        },
    },
    components: {
        EcoloBanner,
        Elite,
        SmartContract,
        Payment,
        Wallet,
        Scenario,
    },
};
</script>

<style lang="stylus" scoped></style>
