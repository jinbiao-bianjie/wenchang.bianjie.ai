<template>
    <div class="ecoloapp_container">
        <EcoloBanner :ecologyBannerContent="ecologyBannerContent"></EcoloBanner>
        <Elite :eliteServiceProvider="eliteServiceProvider"></Elite>
        <SmartContract :smartContract="smartContract"></SmartContract>
    </div>
</template>

<script>
import EcoloBanner from './EcoloBanner.vue';
import Elite from './Elite.vue';
import SmartContract from './SmartContract.vue';

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
    },
    components: {
        EcoloBanner,
        Elite,
        SmartContract,
    },
};
</script>

<style lang="stylus" scoped></style>
