<template>
  <div class="btn">
    <nuxt-link to="/">
      <svg
        class="card"
        v-if="type == 'card'"
        width="24"
        height="25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 4.513H4c-1.11 0-1.99.89-1.99 2l-.01 12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2v-12c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4v-2h16v2z"
          fill="#fff"
        />
      </svg>
      <span><slot /></span>
      <svg
        class="downloads"
        v-if="type == 'downloads'"
        width="14"
        height="17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 6h-4V0H4v6H0l7 7 7-7zM0 15v2h14v-2H0z" fill="#fff" />
      </svg>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    type: {
      type: String,
      required: false,
      default: false
    }
  }
});
</script>

<style scoped lang="scss">
.btn {
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
      background: transparent;
      color: #e31e24;
      .downloads,
      .card {
        path {
          fill: #e31e24;
        }
      }
    }
  }
}
</style>
