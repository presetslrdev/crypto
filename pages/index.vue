<template>
  <div>
    <div class="first-screen">
      <div class="first-screen__wrapper container">
        <div class="first-screen__content">
          <h1 v-html="$t('first-screen.title')"></h1>
          <p v-html="$t('first-screen.subtitle')"></p>
          <div class="btn-wrapper">
            <btn type="downloads">{{ $t("btn.text") }}</btn>
            <div class="text" v-html="$t('first-screen.info')"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="block-info" id="about">
      <div class="block-info__wrapper container">
        <div class="block" data-animation data-animation-loop>
          <div class="icon">
            <svg
              width="40"
              height="30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.667 8.333h-3.334v5h-5v3.334h5v5h3.334v-5h5v-3.334h-5v-5zM3.333 15c0-4.65 2.734-8.667 6.684-10.533v-3.6C4.2 2.933 0 8.483 0 15c0 6.517 4.2 12.067 10.017 14.133v-3.6C6.067 23.667 3.333 19.65 3.333 15zM25 0c-8.267 0-15 6.733-15 15s6.733 15 15 15 15-6.733 15-15S33.267 0 25 0zm0 26.667c-6.433 0-11.667-5.234-11.667-11.667S18.567 3.333 25 3.333 36.667 8.567 36.667 15 31.433 26.667 25 26.667z"
                fill="#E31E24"
              />
            </svg>
          </div>
          <div class="text">{{ $t("info-block.block1") }}</div>
        </div>
        <div class="block" data-animation data-animation-loop>
          <div class="icon">
            <svg
              width="34"
              height="34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.433 12.883L14.65 24.667 7.583 17.6l2.35-2.35 4.717 4.717 9.433-9.434 2.35 2.35zM3.667 17c0-3.883 1.7-7.367 4.366-9.8L12 11.167v-10H2l3.667 3.666C2.4 7.867.333 12.183.333 17c0 8.65 6.584 15.75 15 16.583v-3.366C8.767 29.4 3.667 23.783 3.667 17zm30 0c0-8.65-6.584-15.75-15-16.583v3.366C25.233 4.6 30.333 10.217 30.333 17c0 3.883-1.7 7.367-4.366 9.8L22 22.833v10h10l-3.667-3.666c3.267-3.034 5.334-7.35 5.334-12.167z"
                fill="#E31E24"
              />
            </svg>
          </div>
          <div class="text">{{ $t("info-block.block2") }}</div>
        </div>
        <div class="block" data-animation data-animation-loop>
          <div class="icon">
            <svg
              width="34"
              height="28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.333.667H3.667A3.308 3.308 0 00.35 4L.333 24a3.322 3.322 0 003.334 3.333h26.666A3.322 3.322 0 0033.667 24V4A3.322 3.322 0 0030.333.667zm0 23.333H3.667V14h26.666v10zm0-16.667H3.667V4h26.666v3.333z"
                fill="#E31E24"
              />
            </svg>
          </div>
          <div class="text">{{ $t("info-block.block3") }}</div>
        </div>
        <div class="block" data-animation data-animation-loop>
          <div class="icon">
            <svg
              width="30"
              height="38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 .667L0 7.333v10c0 9.25 6.4 17.9 15 20 8.6-2.1 15-10.75 15-20v-10L15 .667zm-3.333 26.666L5 20.667l2.35-2.35 4.317 4.3L22.65 11.633 25 14 11.667 27.333z"
                fill="#E31E24"
              />
            </svg>
          </div>
          <div class="text">{{ $t("info-block.block4") }}</div>
        </div>
      </div>
    </div>
    <section class="section-info" id="benefits">
      <div class="section-info__wrapper container">
        <div class="section-info__item" data-animation>
          <div class="text">
            <h2 v-html="$t('section-block.block1.title')"></h2>
            <div
              class="text-wrapper"
              v-html="parceText($t('section-block.block1.text'))"
            ></div>
          </div>
          <div class="images">
            <img src="/image/section-item1.png" alt="image" />
          </div>
        </div>
        <div class="section-info__item" data-animation>
          <div class="text">
            <h2 v-html="$t('section-block.block2.title')"></h2>
            <div
              class="text-wrapper"
              v-html="parceText($t('section-block.block2.text'))"
            ></div>
          </div>
          <div class="images">
            <img src="/image/section-item2.png" alt="image" />
          </div>
        </div>
        <div class="section-info__item" data-animation>
          <div class="text">
            <h2 v-html="$t('section-block.block3.title')"></h2>
            <div
              class="text-wrapper"
              v-html="parceText($t('section-block.block3.text'))"
            ></div>
          </div>
          <div class="images">
            <img src="/image/section-item3.png" alt="image" />
          </div>
        </div>
        <div class="section-info__item" data-animation>
          <div class="text">
            <h2 v-html="$t('section-block.block4.title')"></h2>
            <div
              class="text-wrapper"
              v-html="parceText($t('section-block.block4.text'))"
            ></div>
            <div class="btn-wrapper">
              <btn :type="'card'">{{ $t("btn.text2") }}</btn>
            </div>
          </div>
          <div class="images">
            <img src="/image/section-item4.png" alt="image" />
          </div>
        </div>
      </div>
    </section>
    <section class="app">
      <div class="app__wrapper container">
        <div class="app__left">
          <h2>{{ $t("app.title") }}</h2>
          <ul>
            <li>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M7.25463 17.5598C7.83669 18.1489 9.13308 17.9536 9.27266 17.0273C10.1411 11.2761 14.4867 6.42422 17.7752 1.85228C18.687 0.585349 16.5904 -0.618196 15.6904 0.633658C12.6854 4.81111 8.89775 9.20686 7.41598 14.276C5.72267 12.5455 4.02253 10.8314 2.12334 9.3107C0.920585 8.34728 -0.799899 10.0446 0.415822 11.0181C2.89023 13.0001 5.0286 15.3113 7.25463 17.5598Z"
                    fill="#43465D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              {{ $t("app.list.item1") }}
            </li>
            <li>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M7.25463 17.5598C7.83669 18.1489 9.13308 17.9536 9.27266 17.0273C10.1411 11.2761 14.4867 6.42422 17.7752 1.85228C18.687 0.585349 16.5904 -0.618196 15.6904 0.633658C12.6854 4.81111 8.89775 9.20686 7.41598 14.276C5.72267 12.5455 4.02253 10.8314 2.12334 9.3107C0.920585 8.34728 -0.799899 10.0446 0.415822 11.0181C2.89023 13.0001 5.0286 15.3113 7.25463 17.5598Z"
                    fill="#43465D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              {{ $t("app.list.item2") }}
            </li>
            <li>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M7.25463 17.5598C7.83669 18.1489 9.13308 17.9536 9.27266 17.0273C10.1411 11.2761 14.4867 6.42422 17.7752 1.85228C18.687 0.585349 16.5904 -0.618196 15.6904 0.633658C12.6854 4.81111 8.89775 9.20686 7.41598 14.276C5.72267 12.5455 4.02253 10.8314 2.12334 9.3107C0.920585 8.34728 -0.799899 10.0446 0.415822 11.0181C2.89023 13.0001 5.0286 15.3113 7.25463 17.5598Z"
                    fill="#43465D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              {{ $t("app.list.item3") }}
            </li>
          </ul>
          <div class="btn-wrapper">
            <btn :type="'downloads'">{{ $t("btn.text") }}</btn>
          </div>
        </div>
        <div class="app__right">
          <img src="/image/app-img.png" alt="image" />
        </div>
      </div>
    </section>
    <section class="mission">
      <div class="mission__wrapper container">
        <div class="mission__head" data-animation>
          <h2>{{ $t("mission.title") }}</h2>
          <p v-html="$t('mission.subtitle')"></p>
        </div>
        <div class="mission__content">
          <div class="mission__item mission__item-red">
            <div class="title">{{ $t("mission.tomorrow.title") }}</div>
            <hr />
            <ul>
              <li data-animation data-animation-loop>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="#E31E24"
                  />
                </svg>
                {{ $t("mission.tomorrow.item1") }}
              </li>
              <li data-animation data-animation-loop>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="#E31E24"
                  />
                </svg>
                {{ $t("mission.tomorrow.item2") }}
              </li>
              <li data-animation data-animation-loop>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="#E31E24"
                  />
                </svg>
                {{ $t("mission.tomorrow.item3") }}
              </li>
              <li data-animation data-animation-loop>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="#E31E24"
                  />
                </svg>
                {{ $t("mission.tomorrow.item4") }}
              </li>
              <li data-animation data-animation-loop>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="#E31E24"
                  />
                </svg>
                {{ $t("mission.tomorrow.item5") }}
              </li>
            </ul>
          </div>
          <div class="mission__item mission__item-green">
            <div class="title">
              {{ $t("mission.today.title") }}
            </div>
            <hr />
            <ul>
              <li data-animation data-animation-loop>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.64252 13.6576C6.09523 14.1158 7.10353 13.9639 7.2121 13.2434C7.88756 8.77028 11.2674 4.99659 13.8252 1.44064C14.5343 0.455245 12.9037 -0.480846 12.2037 0.492818C9.86641 3.74195 6.9205 7.16086 5.76801 11.1035C4.45099 9.75756 3.12866 8.42436 1.65152 7.24163C0.716038 6.4923 -0.622116 7.81243 0.323444 8.56964C2.24798 10.1112 3.91116 11.9088 5.64252 13.6576Z"
                    fill="#5BC980"
                  />
                </svg>

                {{ $t("mission.today.item1") }}
              </li>
              <li data-animation data-animation-loop>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.64252 13.6576C6.09523 14.1158 7.10353 13.9639 7.2121 13.2434C7.88756 8.77028 11.2674 4.99659 13.8252 1.44064C14.5343 0.455245 12.9037 -0.480846 12.2037 0.492818C9.86641 3.74195 6.9205 7.16086 5.76801 11.1035C4.45099 9.75756 3.12866 8.42436 1.65152 7.24163C0.716038 6.4923 -0.622116 7.81243 0.323444 8.56964C2.24798 10.1112 3.91116 11.9088 5.64252 13.6576Z"
                    fill="#5BC980"
                  />
                </svg>

                {{ $t("mission.today.item2") }}
              </li>
              <li data-animation data-animation-loop>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.64252 13.6576C6.09523 14.1158 7.10353 13.9639 7.2121 13.2434C7.88756 8.77028 11.2674 4.99659 13.8252 1.44064C14.5343 0.455245 12.9037 -0.480846 12.2037 0.492818C9.86641 3.74195 6.9205 7.16086 5.76801 11.1035C4.45099 9.75756 3.12866 8.42436 1.65152 7.24163C0.716038 6.4923 -0.622116 7.81243 0.323444 8.56964C2.24798 10.1112 3.91116 11.9088 5.64252 13.6576Z"
                    fill="#5BC980"
                  />
                </svg>

                {{ $t("mission.today.item3") }}
              </li>
              <li data-animation data-animation-loop>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.64252 13.6576C6.09523 14.1158 7.10353 13.9639 7.2121 13.2434C7.88756 8.77028 11.2674 4.99659 13.8252 1.44064C14.5343 0.455245 12.9037 -0.480846 12.2037 0.492818C9.86641 3.74195 6.9205 7.16086 5.76801 11.1035C4.45099 9.75756 3.12866 8.42436 1.65152 7.24163C0.716038 6.4923 -0.622116 7.81243 0.323444 8.56964C2.24798 10.1112 3.91116 11.9088 5.64252 13.6576Z"
                    fill="#5BC980"
                  />
                </svg>

                {{ $t("mission.today.item4") }}
              </li>
              <li data-animation data-animation-loop>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.64252 13.6576C6.09523 14.1158 7.10353 13.9639 7.2121 13.2434C7.88756 8.77028 11.2674 4.99659 13.8252 1.44064C14.5343 0.455245 12.9037 -0.480846 12.2037 0.492818C9.86641 3.74195 6.9205 7.16086 5.76801 11.1035C4.45099 9.75756 3.12866 8.42436 1.65152 7.24163C0.716038 6.4923 -0.622116 7.81243 0.323444 8.56964C2.24798 10.1112 3.91116 11.9088 5.64252 13.6576Z"
                    fill="#5BC980"
                  />
                </svg>

                {{ $t("mission.today.item5") }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="question" id="faq">
      <div class="question__wrapper container" data-animation>
        <h2>{{ $t("question.title") }}</h2>
        <div class="question__list">
          <custom-accordion
            v-for="(item, index) in questions"
            :key="index"
            :item="item"
          />
        </div>
      </div>
    </section>
    <section class="news" v-if="false">
      <div class="news__wrapper container" data-animation>
        <h2>{{ $t("news.title") }}</h2>
        <div class="news__list">
          <a href="#" class="news__item" target="_blank">
            <div class="news__who">
              ТАСС
            </div>
            <div class="news__title">
              Brent поднялась выше $30 за баррель впервые с 15 апреля
            </div>
            <div class="news__subtitle">
              Цена североморской нефтяной смеси марки Brent поднялась на 12%
              впервые с 15 апреля...
            </div>
          </a>
          <a href="#" class="news__item" target="_blank">
            <div class="news__who">
              TUT.BY
            </div>
            <div class="news__title">
              Трамп заявил, что нефтяные цены снова растут вслед за спросом на
              сырье
            </div>
            <div class="news__subtitle">
              Президент США Дональд Трамп заявил, что нефтяные цены показывают
              рост...
            </div>
          </a>
          <a href="#" class="news__item" target="_blank">
            <div class="news__who">
              TUT.BY
            </div>
            <div class="news__title">
              В Дептрансе назвали стоимость масок и перчаток в метро Москвы
            </div>
            <div class="news__subtitle">
              Медицинские маски и перчатки появятся в вендинговых автоматах на
              15 станциях...
            </div>
          </a>
        </div>
      </div>
    </section>
    <div class="baner">
      <div class="baner__wrapper container">
        <div class="baner__content">
          <h2>{{ $t("baner.title") }}</h2>
          <p>{{ $t("baner.text") }}</p>
          <div class="btn-wrapper">
            <btn :type="'downloads'">{{ $t("btn.text") }}</btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import i18n from "nuxt-i18n";

export default Vue.extend({
  data() {
    return {
      questions: [
        {
          head: this.$i18n.t("question.item1.title"),
          content: this.$i18n.t("question.item1.text")
        },
        {
          head: this.$i18n.t("question.item2.title"),
          content: this.$i18n.t("question.item2.text")
        },
        {
          head: this.$i18n.t("question.item3.title"),
          content: this.$i18n.t("question.item3.text")
        },

        {
          head: this.$i18n.t("question.item4.title"),
          content: this.$i18n.t("question.item4.text")
        },

        {
          head: this.$i18n.t("question.item5.title"),
          content: this.$i18n.t("question.item5.text")
        },

        {
          head: this.$i18n.t("question.item6.title"),
          content: this.$i18n.t("question.item6.text")
        }
      ]
    };
  },
  methods: {
    parceText(text: string) {
      return "<p>" + text.replace("\n", "</p><p>") + "</p>";
    },
    blockAnimation() {
      let options = {
        root: null,
        rootMargin: "5px",
        threshold: 0.5
      };
      let callback = function(entries: any, observer: any) {
        entries.forEach((element: any) => {
          const target = element.target as HTMLElement;
          if (element.isIntersecting) {
            options.rootMargin = `-${target.getBoundingClientRect().height}px`;
            target.classList.add("animated");
          } else {
            if (target.hasAttribute("data-animation-loop")) {
              target.classList.remove("animated");
            }
          }
        });
      };
      let observer = new IntersectionObserver(callback, options);

      let targetArray = Array.from(
        document.querySelectorAll("[data-animation]")
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

<style lang="scss">
.first-screen {
  height: calc(100vh + 300px);
  background: url("/image/first-screen__bg.jpg") no-repeat;
  background-size: cover, 100%;
  background-position: center;
  @include media(mobile-xxl) {
    background-position: 57%;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    @include media(tablet) {
      justify-content: center;
    }
  }
  h1 {
    font-family: $roboto;
    font-weight: 500;
    font-size: 80px;
    line-height: 80px;
    color: #323232;
    margin-bottom: 25px;
    @include media(tablet) {
      color: #43465d;
    }
  }
  p {
    font-family: $nunito;
    font-size: 36px;
    line-height: 46px;
    color: #43465d;
    margin-bottom: 30px;
    @include media(tablet) {
      margin-bottom: 20px;
    }
  }
  .btn-wrapper {
    display: flex;
    align-items: flex-start;
    .btn {
      a {
        padding: 20px 40px;
      }
    }

    .text {
      width: 100%;
      max-width: 380px;
      font-family: $roboto;
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
      margin-left: 20px;
      color: #43465d;
      .red {
        font-weight: bold;
      }
    }
  }
  &__content {
    width: 100%;
    max-width: 700px;
    margin-top: 25%;
    @include media(tablet) {
      margin-top: 0px;
    }
  }
  @include media(mobile-xxl) {
    &__wrapper {
      padding: 0 0;
    }
    height: 100%;
    min-height: 930px;
    padding-top: 120px;
    padding-bottom: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .btn-wrapper {
      flex-direction: column;
      align-items: flex-start;
      align-items: center;
      .btn a {
        padding: 13px 20px;
        font-size: 18px;
      }
      .text {
        margin-left: 0px;
        margin-top: 200px;
      }
    }
    h1 {
      font-size: 46px;
      line-height: 46px;
    }
    p {
      font-size: 24px;
      line-height: 34px;
    }
  }
  @include media(mobile-xl) {
    // h1 {
    //   font-size: 36px;
    // }
  }
}
.block-info {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    position: relative;
    top: -20px;
    .block {
      width: 100%;
      max-width: 282px;
      padding: 30px;
      background: #fff;
      filter: drop-shadow(10px 4px 30px rgba(0, 0, 0, 0.04));
      border-radius: 15px;
      transition: opacity 1s, transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);
      transform-origin: center;
      opacity: 0.5;
      transform: scale(0.8);
      &.animated {
        transform: scale(1);
        opacity: 1;
      }
      &:nth-child(2) {
        transition-delay: 0.2s;
      }
      &:nth-child(3) {
        transition-delay: 0.4s;
      }
      &:nth-child(4) {
        transition-delay: 0.6s;
      }
      &:not(:last-child) {
        margin-right: 15px;
      }
      .text {
        font-family: $roboto;
        font-weight: 500;
        font-size: 24px;
        line-height: 34px;
        color: #43465d;
        margin-top: 10px;
      }
    }
    @include media(laptop) {
      flex-wrap: wrap;
      justify-content: flex-start;
      top: -140px;
      .block {
        width: calc(33% - 15px);
        max-width: inherit;
        margin-bottom: 15px;
      }
    }
    @include media(tablet) {
      .block {
        width: calc(50% - 15px);
      }
    }
    @include media(mobile-xl) {
      top: -100px;
      .block {
        width: 100%;
        margin-right: 0px;
        &:not(:last-child) {
          margin-right: 0px;
        }
        &:nth-child(2) {
          transition-delay: 0s;
        }
        &:nth-child(3) {
          transition-delay: 0s;
        }
        &:nth-child(4) {
          transition-delay: 0s;
        }
      }
    }
  }
}
.section-info {
  margin-top: 145px;
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 160px;
    &:nth-child(even) {
      flex-direction: row-reverse;
    }
    .text {
      width: 100%;
      max-width: 485px;
      h2 {
        font-family: $roboto;
        font-size: 48px;
        line-height: 58px;
        color: #43465d;
        margin-bottom: 15px;
        transition: 0.6s cubic-bezier(0.11, 0.54, 0, 1.01);
        opacity: 0;
        transform: translateY(-40px);
        @include media(mobile-xl) {
          font-size: 36px;
          line-height: 46px;
        }
      }
      p {
        font-family: $nunito;
        color: #43465d;
        font-size: 24px;
        line-height: 34px;
        transition: 0.6s cubic-bezier(0.11, 0.54, 0, 1.01);
        opacity: 0;
        transform: translateY(-40px);
        transition-delay: 0.3s;
        &:not(:last-child) {
          margin-bottom: 50px;
        }
      }
      // @include media(mobile-xxl) {
      //   h2 {
      //     font-size: 24px;
      //     line-height: 34px;
      //   }
      //   p {
      //     font-size: 18px;
      //     line-height: 28px;
      //   }
      // }
      .btn-wrapper {
        margin-top: 25px;
        width: 100%;
        max-width: 245px;
        transition: 0.6s;
        opacity: 0;
        transform: translateY(-40px);
        transition-delay: 0.8s;
        a {
          padding: 20px 40px;
          box-shadow: 0px 14px 30px rgba(227, 30, 36, 0.25);
        }
      }
    }
    .images {
      opacity: 0;
      transition: 0.6s;
      transition-delay: 0.6s;
      img {
        width: 100%;
        display: block;
      }
    }
    &.animated {
      .images {
        opacity: 1;
      }
      .text {
        h2,
        p,
        .btn-wrapper {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
    @include media(tablet) {
      flex-direction: column;
      justify-content: flex-start;
      .text {
        max-width: 100%;
      }
      .images {
        margin-top: 50px;
      }
      &:nth-child(even) {
        flex-direction: column;
      }
    }
  }
  @include media(mobile-xxl) {
    overflow: hidden;
    margin-top: 50px;
    &__item {
      margin-bottom: 50px;
      &:nth-child(1) {
        .images {
          width: 600px;
        }
      }
      &:nth-child(3) {
        .images {
          width: 560px;
          left: 120px;
          position: relative;
        }
      }
    }
  }
}
.app {
  background: url("/image/app-bg.jpg") no-repeat;
  background-size: cover;
  min-height: 465px;
  margin: 160px 0px 120px 0px;
  &__left {
    width: 100%;
    max-width: 485px;
    padding: 50px 0px;
  }
  &__right {
    position: absolute;
    right: 0;
    bottom: -5px;
  }
  &__wrapper {
    position: relative;
    width: 100%;
    max-width: 1000px;
    h2 {
      font-family: $roboto;
      font-weight: bold;
      font-size: 48px;
      line-height: 46px;
      color: #43465d;
      margin-bottom: 30px;
    }
    ul {
      list-style-type: none;
      margin: 0 0;
      padding: 0 0;
      margin-bottom: 25px;
      li {
        font-family: $nunito;
        font-weight: 400;
        font-size: 24px;
        line-height: 34px;
        color: #43465d;
        display: flex;
        svg {
          min-width: 24px;
          margin-top: 10px;
          margin-right: 10px;
        }
        &:not(:last-child) {
          margin-bottom: 15px;
        }
      }
    }
    .btn-wrapper {
      width: 100%;
      max-width: 300px;
      .btn a {
        padding: 20px 40px;
        box-shadow: 0px 14px 30px rgba(227, 30, 36, 0.25);
      }
    }
  }
  @include media(tablet) {
    &__right {
      display: none;
    }
    &__left {
      max-width: 100%;
    }
  }
  @include media(mobile-xxl) {
    margin: 50px 0px;
    &__left {
      padding: 100px 0px;
    }
    h2 {
      text-align: center;
    }
    ul li {
      font-size: 18px;
      line-height: 28px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      svg {
        margin-right: 0px;
        margin-top: 0px;
        margin-bottom: 10px;
      }
    }
    .btn-wrapper {
      margin: 0 auto;
    }
  }
}
.mission {
  &__head {
    margin-bottom: 35px;
    h2 {
      text-align: center;
      font-family: $roboto;
      font-weight: bold;
      font-size: 48px;
      line-height: 46px;
      margin-bottom: 15px;
      color: #43465d;
      transition: 0.6s cubic-bezier(0.11, 0.54, 0, 1.01);
      opacity: 0;
      transform: translateY(-40px);
    }
    p {
      width: 100%;
      max-width: 790px;

      font-size: 24px;
      line-height: 34px;
      font-family: $nunito;
      font-weight: 400;
      color: #43465d;
      margin: 0 auto;
      text-align: center;
      transition: 0.6s cubic-bezier(0.11, 0.54, 0, 1.01);
      opacity: 0;
      transform: translateY(-40px);
      transition-delay: 0.6s;
    }
    &.animated {
      h2,
      p {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  &__content {
    background: #ffffff;
    box-shadow: 20px 4px 40px rgba(0, 0, 0, 0.03);
    border-radius: 5px;
    padding: 60px 102px;
    display: flex;
    .title {
      text-align: center;
      font-family: $roboto;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      color: #43465d;
      margin-bottom: 20px;
    }
    hr {
      margin-bottom: 40px;
      display: block;
      width: 100%;
      height: 1px;
      border: none;
    }
    ul {
      margin: 0 0;
      padding: 0 0;
      list-style-type: none;
      li {
        display: flex;
        font-family: $nunito;
        font-weight: 600;
        width: 100%;
        max-width: 385px;
        font-size: 18px;
        line-height: 28px;
        transition: opacity 1s,
          transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);
        transform-origin: center;
        opacity: 0.5;
        transform: scale(0.8);
        &.animated {
          opacity: 1;
          transform: scale(1);
        }
        @include media(tablet) {
          max-width: 100%;
        }
        svg {
          min-width: 24px;
          margin-right: 10px;
        }
        &:not(:last-child) {
          margin-bottom: 30px;
        }
      }
    }
    @include media(tablet) {
      flex-direction: column;
    }
  }
  &__item {
    width: 50%;
    @include media(tablet) {
      width: 100%;
    }
    &-red {
      @include media(tablet) {
        margin-bottom: 50px;
      }
      hr {
        border-top: 2px solid #e31e24;
      }
      ul li {
        opacity: 0.7;
      }
    }
    &-green {
      hr {
        border-top: 2px solid #5bc980;
      }
      ul li svg {
        margin-top: 5px;
        min-width: 14px;
      }
    }
  }
  @include media(mobile-xxl) {
    &__head {
      // h2 {
      //   font-size: 24px;
      //   line-height: 34px;
      // }
      // p {
      //   font-size: 18px;
      //   line-height: 28px;
      // }
    }
    &__content {
      padding: 30px;
    }
  }
}
.question {
  margin-top: 120px;
  &__wrapper {
    &.animated {
      h2 {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  h2 {
    font-family: $roboto;
    font-weight: bold;
    font-size: 48px;
    line-height: 58px;
    text-align: center;
    margin-bottom: 50px;
    color: #43465d;
    transition: 0.6s cubic-bezier(0.11, 0.54, 0, 1.01);
    opacity: 0;
    transform: translateY(-40px);
  }
  @include media(mobile-xxl) {
    margin-top: 50px;
    // h2 {
    //   font-size: 24px;
    //   line-height: 34px;
    // }
  }
}
.news {
  margin-top: 120px;
  &__wrapper {
    &.animated {
      h2 {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  h2 {
    font-family: $roboto;
    font-weight: bold;
    font-size: 48px;
    line-height: 58px;
    color: #43465d;
    margin-bottom: 50px;
    text-align: center;
    transition: 0.6s cubic-bezier(0.11, 0.54, 0, 1.01);
    opacity: 0;
    transform: translateY(-40px);
  }
  &__list {
    width: 100%;
    max-width: 996px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
    display: block;
    width: 100%;
    max-width: 280px;
    &:hover {
      .news__subtitle {
        opacity: 1;
      }
    }
  }
  &__who {
    font-family: $nunito;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #43465d;
    opacity: 0.5;
    margin-bottom: 10px;
  }
  &__title {
    font-family: $roboto;
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    color: #43465d;
    margin-bottom: 10px;
  }
  &__subtitle {
    font-family: $nunito;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    opacity: 0.7;
    color: #43465d;
    transition: 0.3s;
  }
  @include media(tablet) {
    &__list {
      max-width: 100%;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
    a {
      max-width: 100%;
      width: calc(50% - 20px);
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
  @include media(mobile-xxl) {
    margin-top: 50px;
    h2 {
      font-size: 24px;
      line-height: 34px;
    }
    a {
      width: 100%;
      margin-right: 0px;
    }
  }
}
.baner {
  margin: 80px 0px 40px 0px;
  &__wrapper {
    background: url("/image/first-screen__bg.jpg") no-repeat;
    background-size: cover;
    padding: 50px 0px 50px 100px;
    border-radius: 15px;
    @include media(laptop) {
      margin: 0px 20px;
      padding-right: 20px;
    }
  }
  &__content {
    width: 100%;
    max-width: 485px;
    h2 {
      font-family: $roboto;
      font-weight: bold;
      font-size: 48px;
      line-height: 58px;
      color: #43465d;
      margin-bottom: 8px;
    }
    p {
      font-family: $nunito;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      color: #43465d;
      margin-bottom: 15px;
    }
    .btn-wrapper {
      width: 100%;
      max-width: 300px;
      .btn {
        a {
          padding: 20px 40px;
          box-shadow: 0px 14px 30px rgba(227, 30, 36, 0.25);
        }
      }
    }
  }
  @include media(mobile-xxl) {
    &__wrapper {
      padding-left: 20px;
    }
    h2 {
      font-size: 24px;
      line-height: 34px;
    }
    p {
      font-size: 18px;
      line-height: 28px;
    }
  }
}
span.red {
  color: #e31e24;
  font-weight: bold;
}
</style>
