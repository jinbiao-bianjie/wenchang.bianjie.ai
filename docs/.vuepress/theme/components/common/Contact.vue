<template>
    <div class="contact">
        <div class="smart">
            <div id="smart_img" class="smart_img" @click="changeShowIframe">
                <img
                    v-show="!showIframe"
                    src="../../assets/auto.png"
                    alt=""
                    @mouseenter="changeShowTip"
                    @mouseleave="closeShowTip"
                />
                <i v-show="showIframe" class="close_btn iconfont icon-close2"></i>
            </div>
            <div v-show="showTip" class="tip_wrap">
                <p class="tip">
                    <span>想要了解更多？</span>
                    <span>快找<span class="helper">小助</span>来为您解答</span>
                </p>
            </div>
            <div class="smart_dialog">
                <iframe
                    v-show="showIframe"
                    id="fastgpt-chatbot-window"
                    title="FastGPT Chat Window"
                    allow="fullscreen;microphone"
                    src="https://ai.avata.bianjie.ai"
                >
                </iframe>
            </div>
        </div>
        <div class="contact_container">
            <div class="contact_img">
                <img src="../../assets/contact.png" alt="" />
            </div>
            <div class="qrcode_container">
                <div class="qrcode">
                    <img src="../../assets/contact_qrcode.png" alt="" />
                </div>
                <p class="qrcode_text">·文昌链小助手·</p>
                <div class="email_container">
                    <i class="iconfont icon-email"></i>
                    <span>avata@bianjie.ai</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Contact',
    data() {
        return {
            showTip: false,
            showIframe: false,
        };
    },
    methods: {
        changeShowTip() {
            this.showTip = true;
        },
        closeShowTip() {
            this.showTip = false;
        },
        changeShowIframe() {
            this.showIframe = !this.showIframe;
            this.closeShowTip();
        },
    },
};
</script>
<style lang="stylus" scoped>
.contact {
    position: fixed;
    right: 2.3rem;
    bottom: 13.2rem;
    display: flex;
    flex-direction: column;
    @media (max-width: 480px) {
        right: 2rem;
        bottom: 2rem;
    }
    .smart {
        position: relative;
        .smart_img {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            cursor: pointer;
            img {
                width: 6.6rem;
                height: 6.8rem;
            }
            .iconfont {
                margin-right: 0.9rem;
                font-size: $fontSize32;
                color: $highlightDetailColor;
                @media (max-width: 480px) {
                    margin-right: 0;
                }
            }
        }
        .tip_wrap {
            position: absolute;
            top: 50%;
            right: 7.3rem;
            transform: translateY(-50%);
            padding: 0.3rem;
            min-width: 15.8rem;
            background: #fff;
            border-radius: 0.6rem;
            box-shadow: 0px 2px 12px 0px #DCE1EC;
            &::after {
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                right: -0.4rem;
                width: 8px;
                height: 8px;
                background: #fff;
                border-top: 0.1rem solid #fff;
                border-right: 0.1rem solid #fff;
                transform: translateY(-50%) rotate(45deg);
                z-index: -1;
            }
            .tip {
                display: flex;
                flex-direction: column;
                padding: 0.9rem;
                font-size: 14px;
                font-weight: 500;
                color: rgba(0, 0, 0, 0.65);
                line-height: 20px;
                background: linear-gradient(180deg, rgba(112,101,255,0.15) 0%, rgba(169,158,255,0) 100%);
                border-radius: 0.6rem;
                .helper {
                    color: $highlightDetailColor;
                }
            }
        }
        .smart_dialog {
            position: fixed;
            right: 9.2rem;
            bottom: 2.4rem;
            height: 58rem;
            box-shadow: 0px 2px 20px 0px rgba(173,191,221,0.5);
            border-radius: 1.2rem;
            @media (max-width: 480px) {
                right: 2rem;
                bottom: 7.6rem;
                height: 48rem;
            }
            #fastgpt-chatbot-window {
                width: 32rem;
                height: 100%;
                border-radius: 1.2rem;
            }
        }
        :deep(.ant-popover-inner) {
            border-radius: 0.4rem;
        }
        :deep(.ant-popover-inner-content) {
            padding: 0.3rem;
            box-shadow: 0px 2px 12px 0px #DCE1EC;
            .tip {
                display: flex;
                flex-direction: column;
                padding: 0.9rem;
                font-size: 14px;
                font-weight: 500;
                color: rgba(0, 0, 0, 0.65);
                line-height: 20px;
                background: linear-gradient(180deg, rgba(112,101,255,0.15) 0%, rgba(169,158,255,0) 100%);
                border-radius: 0.6rem;
                .helper {
                    color: $highlightDetailColor;
                }
            }
        }
    }
    .contact_container {
        margin-top: 1.6rem;
        margin-right: 0.9rem;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        @media(max-width: 1100px) {
            right: 0.8rem;
        }
        @media(max-width: 500px) {
            display: none;
        }
        &:hover {
            .qrcode_container {
                display: block;
            }
        }
        .contact_img {
            width: 4rem;
            height: 13rem;
            img {
                height: 100%;
            }
        }
        .qrcode_container {
            display: none;
            position: absolute;
            right: 5.2rem;
            box-sizing: border-box;
            padding: 2rem;
            background: #fff;
            box-shadow: 0 0 1.2rem 0 rgba(7, 24, 78, 0.08);
            border-radius: 0.4rem;
            border: 0.1rem solid #E1E5F4;
            .qrcode {
                width: 17rem;
                height: 17rem;
                img {
                    height: 100%;
                }
            }
            .qrcode_text {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 0.6rem;
                font-size: $fontSize14;
                font-weight: $fontWeight600;
                color: #000000;
                line-height: 2.4rem;
                &::after {
                    content: '';
                    display: block;
                    margin-top: 1.2rem;
                    width: 12rem;
                    height: 0.1rem;
                    border: 0.1rem solid rgba(0, 0, 0, 0.1);
                }
            }
            .email_container {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 1.1rem;
                font-size: $fontSize14;
                font-weight: $fontWeight600;
                color: #000000;
                line-height: 2.4rem;
                .iconfont {
                    margin-right: 0.8rem;
                    font-size: 1.7rem;
                    color: $highlightDetailColor;
                }
            }
        }
    }
}
</style>
