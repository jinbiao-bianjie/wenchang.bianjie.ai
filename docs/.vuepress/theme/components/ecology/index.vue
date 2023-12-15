<template>
    <div class="ecoloapp_container">
        <EcoloBanner :ecologyBannerContent="ecologyBannerContent"></EcoloBanner>
    </div>
</template>

<script>
import EcoloBanner from './EcoloBanner.vue';
export default {
    name: 'EcoloApp',
    computed: {
        ecologyBannerContent() {
            return this.$frontmatter.ecologyBannerContent;
        },
    },
    components: {
        EcoloBanner,
    },
};
</script>

<style lang="stylus" scoped></style>
