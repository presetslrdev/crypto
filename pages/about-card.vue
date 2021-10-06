<template>
  <div class="about-card container">
    <div class="about-card__header row" data-animation>
      <div class="col">
        <h1 class="about-card__title" v-html="$t('about-card.header.title')"/>
        <div
          class="text-wrapper about-card__description"
          v-html="parceText($t('about-card.header.subtitle'))"
        />
        <div class="images images-card mobile">
          <div class="animated-bounce">
            <img src="/image/about-card.png" alt="about crypto card bsb" class="card">
          </div>
        </div>
        <div class="btn-wrapper mt-64">
          <btn narrow>
            {{ $t('about-card.header.button') }}
          </btn>
        </div>
      </div>
      <div class="col images images-card desktop">
        <div class="animated-bounce">
          <img src="/image/about-card.png" alt="about crypto card bsb" id="card" class="card">
        </div>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-lg-2">
      <div class="col">
        <cCard
          :title="$t('about-card.card_1.title')"
          :description="$t('about-card.card_1.description')"
          :logo="icon1Url"
          class="h-100"
        />
      </div>
      <div class="col">
        <cCard
          :title="$t('about-card.card_2.title')"
          :description="$t('about-card.card_2.description')"
          :logo="icon2Url"
          class="h-100"
        />
      </div>
    </div>
    <cCard
      class="mt-64"
      :overflow-hidden="false"
    >
      <div class="row row-cols-1 row-cols-lg-2">
        <div class="col">
          <div class="c-card__title">
            {{ $t('about-card.card_3.title') }}
          </div>
          <div class="c-card__description">
            {{ $t('about-card.card_3.description') }}
          </div>
        </div>
        <div class="col c-card__image-wrapper">
          <div class="c-card__image bottom">
            <img src="/image/phone.png" alt="crypto BSB">
            <div class="images-block">
              <div class="icon btc-top">
                <img src="/image/BTC.svg" alt="btc">
              </div>
              <div class="icon btc-bottom">
                <img src="/image/BTC.svg" alt="btc">
              </div>
              <div class="icon ethereum">
                <img src="/image/ethereum.svg" alt="ethereum">
              </div>
              <div class="icon litecoin">
                <img src="/image/litecoin.svg" alt="litecoin">
              </div>
            </div>
          </div>
        </div>
      </div>
    </cCard>
    <cCard
      class="mt-64"
      :overflow-hidden="false"
    >
      <div class="row row-cols-1 row-cols-lg-2">
        <div class="col">
          <div class="c-card__title">
            {{ $t('about-card.card_4.title') }}
          </div>
          <div class="c-card__description">
            {{ $t('about-card.card_4.description') }}
          </div>
        </div>
        <div class="col c-card__image-wrapper center">
          <div class="c-card__image">
            <img src="/image/BSB-logo.svg" alt="BSB logotipe">
          </div>
        </div>
      </div>
    </cCard>
    <div class="conditions__wrapper mt-64">
      <h2 class="conditions__title">
        {{ $t('conditions.title') }}
      </h2>
      <div class="conditions mt-24">
        <transition-group name="list" tag="ul">
          <li
            v-for="(item, index) in conditions"
            :key="index"
          >
            <p>{{ item.name }}</p>
            <p>{{ item.value }}</p>
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import _ from 'lodash'
import cCard from '~/components/cCard.vue'

export default Vue.extend({
  components: {
    cCard
  },
  data () {
    return {
      conditions: [
        {
          name: this.$i18n.t('conditions.condition_1.name'),
          value: this.$i18n.t('conditions.condition_1.value')
        },
        {
          name: this.$i18n.t('conditions.condition_2.name'),
          value: this.$i18n.t('conditions.condition_2.value')
        },
        {
          name: this.$i18n.t('conditions.condition_3.name'),
          value: this.$i18n.t('conditions.condition_3.value')
        },
        {
          name: this.$i18n.t('conditions.condition_4.name'),
          value: this.$i18n.t('conditions.condition_4.value')
        },
        {
          name: this.$i18n.t('conditions.condition_5.name'),
          value: this.$i18n.t('conditions.condition_5.value')
        }
      ],
      windowWidth: 1600
    }
  },
  computed: {
    icon1Url () {
      return require('../static/image/logo_1.svg')
    },
    icon2Url () {
      return require('../static/image/logo_2.svg')
    },
    isPC (): boolean {
      return this.windowWidth > 1200
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth || 1201
    })

    const $card = document.querySelector<HTMLElement>('#card') || null
    const $btcTop = document.querySelector<HTMLElement>('.btc-top') || null
    const $btcbottom = document.querySelector<HTMLElement>('.btc-bottom') || null
    const $ethereum = document.querySelector<HTMLElement>('.ethereum') || null
    const $litecoin = document.querySelector<HTMLElement>('.litecoin') || null

    const cumulativeOffset = (element: any) => {
      let top = 0
      let left = 0
      do {
        top += element.offsetTop || 0
        left += element.offsetLeft || 0
        element = element.offsetParent
      } while (element)

      return {
        top,
        left
      }
    }

    // eslint-disable-next-line no-undef
    document.onmousemove = _.throttle((event: any) => {
      const e = event || window.event
      const x = (e.pageX - cumulativeOffset($card).left - (10 / 2)) * -1 / 100
      const y = (e.pageY - cumulativeOffset($card).top - (10 / 2)) * -1 / 100

      const matrix = [
        [1, 0, 0, -x * 0.000005],
        [0, 1, 0, -y * 0.000005],
        [0, 0, 1, 1],
        [0, 0, 0, 1]
      ]
      if (this.isPC) {
        if ($card) {
          $card.style.transform = `matrix3d(${matrix.toString()})`
        }
        if ($btcTop) {
          $btcTop.style.transform = `translate(${x / 3}px,${y / 2}px) rotate(${-x / 1.5}deg)`
        }
        if ($btcbottom) {
          $btcbottom.style.transform = `translate(${x / 1.5}px,${y / 1}px) rotate(${y / 2}deg)`
        }
        if ($ethereum) {
          $ethereum.style.transform = `translate(${-x / 2}px,${y / 4}px) rotate(${-y / 1}deg)`
        }
        if ($litecoin) {
          $litecoin.style.transform = `translate(${x / 1}px,${-y / 2}px) rotate(${x / 1.7}deg)`
        }
      } else {
        if ($card) {
          $card.style.transform = ''
        }
        if ($btcTop) {
          $btcTop.style.transform = ''
        }
        if ($btcbottom) {
          $btcbottom.style.transform = ''
        }
        if ($ethereum) {
          $ethereum.style.transform = ''
        }
        if ($litecoin) {
          $litecoin.style.transform = ''
        }
      }
    }, 50)
  },
  methods: {
    parceText (text: string) {
      return '<p>' + text.replace('\n', '</p><p>') + '</p>'
    }
  }
})
</script>
<style scoped lang="scss">
h1 {
  font-family: $roboto;
  font-weight: 500;
  font-size: 72px;
  line-height: 82px;
  color: #43465D;
  margin-bottom: 25px;
}

.animated-bounce {
  animation: 6s ease-in-out 0s infinite normal none running bounce;
}

.list-enter {
  transition: all 0.5s ease-in-out;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.images-block {
  .icon {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0px 4px 10px rgba(86, 187, 235, 0.25);
    backdrop-filter: blur(10px);

    &.btc-top {
      height: 103px;
      width: 103px;
      border: 0.519492px solid #FFFFFF;
      background: rgba(255, 128, 44, 0.5);
      top: 0%;
      right: 33%;
    }

    &.btc-bottom {
      height: 93px;
      width: 93px;
      background: rgba(10, 193, 142, 0.5);
      border: 0.473409px solid #FFFFFF;
      top: 69%;
      left: 5%;
    }

    &.litecoin {
      height: 88px;
      width: 88px;
      background: rgba(230, 230, 230, 0.5);
      border: 0.418784px solid #FFFFFF;
      top: 25%;
      left: -3%;
    }

    &.ethereum {
      height: 79px;
      width: 79px;
      background: rgba(86, 187, 235, 0.6);
      border: 1.64463px solid #FFFFFF;
      top: 50%;
      right: 36%;
    }
  }
}

.about-card {
  min-height: 100vh;

  &__header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 175px
  }

  &__description {
    max-width: 430px;
    font-family: $nunito;
    font-weight: normal;
    font-size: 24px;
    line-height: 34px;
    color: #43465D;
  }

  .images-card {
    &.desktop {
      display: flex;
    }

    &.mobile {
      display: none;
      align-items: center;
      justify-content: center;

      img {
        max-width: 100%;
      }
    }
  }

  .text {
    font-weight: normal;
    font-size: 24px;
    line-height: 34px;
    color: #43465D;
  }
}

.conditions {
  &__wrapper {
    h2 {
      font-family: $roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 58px;
      color: #43465D;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-bottom: 42px;
    padding-left: 0;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 0;
      border-bottom: 1px dashed rgba(0, 0, 0, 0.5);

      p {
        font-family: $nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 34px;

        &:last-child {
          font-weight: 600;
        }
      }
    }
  }
}

.row {
  margin-right: -15px !important;
  margin-left: -15px !important;
}

.mt-24 {
  margin-top: 24px;
}

.mt-64 {
  margin-top: 64px;
}

.h-100 {
  height: 100%;
}

@media only screen and (max-width: 1139px) {
  h1 {
    font-size: 46px;
    line-height: 48px;
  }
  .images-card {
    &.desktop {
      display: none !important;
    }

    &.mobile {
      display: flex !important;

      & + .mt-64 {
        margin-top: 12px !important;
      }
    }
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
  }

  .conditions__wrapper h2 {
    font-size: 36px;
    line-height: 40px
  }

  .conditions ul li p {
    font-size: 18px;
    line-height: 20px;
  }

}

@media only screen and (max-width: 750px) {
  .conditions ul li {
    align-items: flex-start;
    flex-direction: column;
    p:first-child {
      padding-bottom: 12px;
    }
  }
}

@media only screen and (max-width: 365px) {
  .images-block {
    .icon {
      &.btc-top {
        transform: scale(0.6);
        top: -12%;
        right: 25%;
      }

      &.btc-bottom {
        transform: scale(0.6);
        left: -5%;
      }

      &.litecoin {
        transform: scale(0.6);
      }

      &.ethereum {
        transform: scale(0.6);
        right: 30%;
      }
    }
  }
}

</style>
