<template>
  <footer class="footer" id="contacts">
    <div class="footer__wrapper container">
      <div class="footer__top">
        <div class="footer__top-left">
          <a
            :href="
              $i18n.locale == 'ru'
                ? 'PRIVACY_POLICY_RU.pdf'
                : 'PRIVACY_POLICY.pdf'
            "
            target="_blank"
            >{{ $t("footer.politics") }}</a
          >
          <nuxt-link to="#">{{ $t("footer.rules") }}</nuxt-link>
        </div>
        <div class="footer__top-right">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22H17V20H12C7.66 20 4 16.34 4 12C4 7.66 7.66 4 12 4C16.34 4 20 7.66 20 12V13.43C20 14.22 19.29 15 18.5 15C17.71 15 17 14.22 17 13.43V12C17 9.24 14.76 7 12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C13.38 17 14.64 16.44 15.54 15.53C16.19 16.42 17.31 17 18.5 17C20.47 17 22 15.4 22 13.43V12C22 6.48 17.52 2 12 2ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z"
              fill="black"
            />
          </svg>

          <a href="mailTo: info@cryptocourse.app">info@cryptocourse.app</a>
        </div>
      </div>
      <div class="footer__bottom" v-if="false">
        <div class="footer__bottom-left">
          <div class="brand-wrapper">
            <img src="/image/bsb.svg" alt="image" />
          </div>
          <div class="brand-wrapper">
            <img src="/image/spatium.svg" alt="image" />
          </div>
          <div class="brand-wrapper">
            <img src="/image/currency.svg" alt="image" />
          </div>
        </div>
        <div class="footer__bottom-right">
          <div class="footer__bottom-link">
            <div class="text">{{ $t("footer.design") }}</div>
            <a href="https://whale.by/" target="_blank">Whale Studio</a>
          </div>
          <div class="footer__bottom-link">
            <div class="text">{{ $t("footer.develop") }}</div>
            <a href="https://spatium.net/#home">Spatium</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped lang="scss">
.footer {
  &__wrapper {
    padding: 0 0;
    @include media(laptop) {
      padding: 0px 20px;
    }
  }
  &__top {
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    a {
      text-decoration: none;
      font-family: $roboto;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #323232;
      position: relative;
      &:after {
        content: "";
        width: 0%;
        height: 1px;
        background: #323232;
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        transition: 0.3s;
      }
      &:hover {
        &:after {
          width: 100%;
          animation: link-animation 3s;
        }
      }
    }
    &-left {
      a {
        margin-right: 30px;
      }
    }
    &-right {
      display: flex;
      align-items: center;
      svg {
        margin-right: 10px;
      }
    }
  }
  &__bottom {
    margin: 30px 0px 20px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-right {
      display: flex;
      align-items: center;
    }
    &-link {
      display: flex;
      align-items: center;
      &:first-child {
        margin-right: 30px;
      }
      .text {
        font-family: $roboto;
        font-size: 16px;
        line-height: 24px;
        color: #323232;
      }
      a {
        font-family: $roboto;
        font-size: 16px;
        line-height: 24px;
        color: #323232;
        font-weight: bold;
        position: relative;
        text-decoration: none;
        margin-left: 12px;
        &:before {
          content: "";
          width: 1px;
          height: 13px;
          background: #323232;
          position: absolute;
          left: -6px;
          top: 50%;
          transform: translate(0, -50%);
        }
        &:after {
          content: "";
          width: 0;
          height: 1px;
          background: #323232;
          display: block;
          position: absolute;
          right: 0;
          bottom: 0;
          transition: 0.3s;
        }
        &:hover {
          &:after {
            width: 100%;
            animation: link-animation 3s;
          }
        }
      }
    }
    &-left {
      display: flex;
      align-items: center;
      .brand-wrapper {
        margin-right: 50px;
      }
    }
    @include media(laptop) {
      flex-direction: column;
      &-left,
      &-right {
        width: 100%;
      }
      &-right {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
      }
    }
  }
  @include media(tablet) {
    &__top {
      &-left {
        display: flex;
        flex-direction: column;
        a {
          &:first-child {
            margin-bottom: 10px;
          }
        }
      }
    }
    &__bottom {
      &-left {
        flex-wrap: wrap;
        justify-content: flex-start;
        .brand-wrapper {
          margin-right: 20px;
          margin-bottom: 20px;
        }
      }
    }
  }
  @include media(mobile-xxl) {
    &__top {
      flex-direction: column;
      &-left {
        margin-bottom: 10px;
      }
    }
    &__bottom {
      &-link {
        &:first-child {
          margin-right: 0px;
          margin-bottom: 10px;
        }
      }
      &-right {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
}
</style>
