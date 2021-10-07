<template>
  <div class="c-card__wrapper">
    <div class="c-card h-100" :class="{'overflow-hidden': overflowHidden}">
      <div v-if="logo" class="c-card__logo">
        <img :src="logo" alt="logo">
      </div>
      <div class="c-card__content">
        <div v-if="title" class="c-card__title">{{ title }}</div>
        <div v-if="description" class="c-card__description">{{ description }}</div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-card',
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    logo: {
      type: String,
    },
    overflowHidden: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
.c-card {
  display: flex;
  position: relative;
  padding: 40px 0px 40px 48px;
  background: #F8F8F8;
  border-radius: 20px;

  &.overflow-hidden {
    overflow: hidden;
  }

  &__content {
    z-index: 1
  }

  &__logo {
    position: absolute;
    top: 0;
    right: 0;
  }

  &__title {
    font-family: $roboto;
    font-weight: 500;
    font-size: 48px;
    line-height: 58px;
    color: #43465D;
  }

  &__description {
    font-family: $nunito;
    margin-top: 24px;
    padding-right: 95px;
    font-weight: normal;
    font-size: 24px;
    line-height: 34px;
    color: #43465D;
  }

  &__image-wrapper {
    position: relative;

    &.center {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__image {
    &.bottom {
      position: absolute;
      bottom: -42px;
      right: 8px;
    }

    img {
      max-width: 100%;
    }

  }
}

@media only screen and (max-width: 1139px) {
  .c-card {
    padding: 20px 24px;

    &__title {
      font-size: 32px;
      line-height: 34px;
    }

    &__description {
      padding: 0;
      font-size: 18px;
      line-height: 28px;
    }

    &__wrapper {
      margin-top: 64px;
    }

    &__image-wrapper {
      margin-top: 44px;
      display: flex;
      justify-content: flex-end;

      .bottom {
        display: inline-flex;
        position: relative;
        bottom: -19px;
      }
    }

    &.h-100 {
      height: auto !important;
    }

    &__logo {
    zoom: 0.6;
  }
  }
}
</style>
