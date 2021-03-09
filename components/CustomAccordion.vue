<template>
  <div class="accordion">
    <div
      class="accordion__head"
      @click="isShow = !isShow"
      :class="{ open: isShow }"
    >
      <div class="arrow">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#43465D" />
        </svg>
      </div>
      <div class="text">{{ item.head }}</div>
    </div>

    <div class="accordion__content" :class="{ open: isShow }">
      <height-transition>
        <div v-if="isShow" v-html="item.content"></div>
      </height-transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    blockAnimation() {
      let options = {
        root: null,
        rootMargin: "-50px 0px -50px 0px",
        threshold: 0.5
      };
      let callback = function(entries: any, observer: any) {
        entries.forEach((element: any) => {
          const target = element.target as HTMLElement;
          if (element.isIntersecting) {
            target.classList.add("animated");
          } else {
            target.classList.remove("animated");
          }
        });
      };
      let observer = new IntersectionObserver(callback, options);

      let targetArray = Array.from(
        document.querySelectorAll(".accordion")
      ) as any;
      targetArray.forEach((target: any) => {
        observer.observe(target);
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.blockAnimation();
    });
  }
});
</script>

<style scoped lang="scss">
.accordion {
  width: 100%;
  max-width: 996px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 20px 4px 40px rgba(0, 0, 0, 0.03);
  margin: 0px auto;
  padding: 20px;
  margin-bottom: 20px;
  transition: 0.6s;
  transform: scale(0.7);
  transform-origin: center;
  &.animated {
    opacity: 1;
    transform: scale(1);
  }
  &__head {
    font-family: $roboto;
    font-weight: normal;
    font-size: 24px;
    color: #43465d;
    display: flex;
    align-items: center;
    @include media(600px) {
      font-size: 16px;
    }
    svg {
      transition: 0.3s;
    }
    cursor: pointer;
    .text {
      transition: 0.3s;
    }
    &:hover {
      color: #e31e24;
    }
    .arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
    }
    &.open {
      color: #e31e24;
      svg {
        transform: rotate(45deg);
        path {
          fill: #e31e24;
        }
      }
    }
  }
  &__content {
    font-family: $nunito;
    font-size: 18px;
    line-height: 28px;
    color: #43465d;
    opacity: 0.8;
    transition: 0.3s;
    &.open {
      margin-top: 40px;
    }
    ::v-deep p {
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }
  }
}
</style>
