<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconClassName" :fill="color" />
    </svg>
</template>

<script>
export default {
    name: 'SvgIcon',
    props: {
        iconName: {
            type: String,
            required: true,
            default: ''
        },
        classDynamic: {
            type: String,
            required: false
        },
        color: {
            type: String,
            required: false,
            default: '#0967E9'
        }
    },
    computed: {
        iconClassName() {
            return `#${this.iconName}`;
        },
        svgClass() {
            if (this.classDynamic) {
                return `svg-icon ${this.classDynamic}`;
            }
            return 'svg-icon';
        }
    }
}
</script>

<style scoped>

    .svg-icon {
        width: 3.6rem;
        height: 3.7rem;
        position: relative;
        fill: currentColor;
        vertical-align: -0.2rem;
        outline: 0;
    }
</style>
