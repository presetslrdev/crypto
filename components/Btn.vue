<template>
  <div class="btn" :class="{'narrow': narrow}">
    <nuxt-link :to="to">
      <svg
        class="card"
        v-if="type == 'card'"
        width="24"
        height="24"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 4.5127H4C2.89 4.5127 2.01 5.4027 2.01 6.5127L2 18.5127C2 19.6227 2.89 20.5127 4 20.5127H20C21.11 20.5127 22 19.6227 22 18.5127V6.5127C22 5.4027 21.11 4.5127 20 4.5127ZM20 18.5127H4V12.5127H20V18.5127ZM20 8.5127H4V6.5127H20V8.5127Z"
          fill="white"
        />
      </svg>

      <span><slot/></span>
      <svg
        class="downloads"
        v-if="type == 'downloads'"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="white"/>
      </svg>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    type: {
      type: String,
      required: false,
      // eslint-disable-next-line vue/require-valid-default-prop
    },
    to: {
      type: String,
      default: '#',
    },
    narrow: {
      type: Boolean,
      default: false,
    }
  },
})
</script>

<style scoped lang="scss">
.btn {
  max-width: 300px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: $roboto;
    font-weight: 500;
    font-size: 16px;
    padding: 13px 22px;
    color: #fff;
    transition: 0.3s;
    border: 1px solid #e31e24;
    border-radius: 40px;
    background: #e31e24;
    box-shadow: 0px 14px 30px rgba(227, 30, 36, 0.25);

    svg path {
      transition: 0.3s;
    }

    .downloads {
      margin-left: 15px;
    }

    .card {
      margin-right: 10px;
    }

    &:hover {
      background: #fff;
      color: #e31e24;
      box-shadow: none;

      .downloads,
      .card {
        path {
          fill: #e31e24;
        }
      }
    }

    @include media(mobile-xxl) {
      font-size: 15px;
    }
  }
  &.narrow {
    max-width: 230px;
  }
}
</style>
