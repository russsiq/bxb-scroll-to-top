<template>
    <div class="scrolltop" v-if="isActive" :style="{ opacity: opacity }" @click="click()" @mouseover="hover()" @mouseout="handle()">
        <svg id="icon-arrow-up" viewBox="0 0 24 24" width="24" height="24">
            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" fill="#fff"></path>
        </svg>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            active: {
                type: Boolean,
                default: true,
                required: true
            },
            opacity: {
                type: Number,
                default: 0,
                required: false
            }
        },
        data() {
            return {
                isActive: this.active
            }
        },
        beforeMount() {
            document.querySelector('body').appendChild(this.$el)
        },
        mounted() {
            window.addEventListener('scroll', this.handle)
        },
        methods: {
            handle() {
                this.opacity = window.scrollY > 160 ? .5 : 0
            },
            hover() {
                this.opacity = 1
            },
            click() {
                window.scrollTo(0, 0)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .scrolltop {
        position: fixed;
        z-index: 999;
        bottom: 1rem;
        right: 1rem;
        padding: .48rem;
        color: #fff;
        background: #008cba;
        text-align: center;
        font-size: 100%;
        line-height: 1rem;
        cursor: pointer;
        transition: opacity .3s ease-in;
    }
</style>

<style lang="css">
    html {
        scroll-behavior: smooth;
    }
</style>
