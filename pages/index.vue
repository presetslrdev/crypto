<template>
  <div>
    <div class="first-screen">
      <div class="first-screen__wrapper container">
        <div class="first-screen__content">
          <h1 v-html="$t('first-screen.title')"></h1>
          <p v-html="$t('first-screen.subtitle')"></p>
          <div class="btn-wrapper">
            <btn type="downloads">{{ $t('btn.text') }}</btn>
            <div class="text" v-html="$t('first-screen.info')"></div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="block-info"
      id="about"
      v-if="windowWidth >= 992"
      controls="false"
    >
      <div class="block-info__wrapper container">
        <div class="block" data-animation data-animation-loop>
          <div class="icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6667 13.3333H23.3333V18.3333H18.3333V21.6667H23.3333V26.6667H26.6667V21.6667H31.6667V18.3333H26.6667V13.3333ZM3.33333 20C3.33333 15.35 6.06667 11.3333 10.0167 9.46667V5.86667C4.2 7.93333 0 13.4833 0 20C0 26.5167 4.2 32.0667 10.0167 34.1333V30.5333C6.06667 28.6667 3.33333 24.65 3.33333 20ZM25 5C16.7333 5 10 11.7333 10 20C10 28.2667 16.7333 35 25 35C33.2667 35 40 28.2667 40 20C40 11.7333 33.2667 5 25 5ZM25 31.6667C18.5667 31.6667 13.3333 26.4333 13.3333 20C13.3333 13.5667 18.5667 8.33333 25 8.33333C31.4333 8.33333 36.6667 13.5667 36.6667 20C36.6667 26.4333 31.4333 31.6667 25 31.6667Z"
                fill="#E31E24"
              />
            </svg>
          </div>
          <div class="text">{{ $t('info-block.block1') }}</div>
        </div>
        <div class="block" data-animation data-animation-loop>
          <div class="icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.4333 15.8834L17.65 27.6667L10.5833 20.6001L12.9333 18.2501L17.65 22.9667L27.0833 13.5334L29.4333 15.8834ZM6.66668 20.0001C6.66668 16.1167 8.36668 12.6334 11.0333 10.2001L15 14.1667V4.16675H5.00001L8.66668 7.83341C5.40001 10.8667 3.33334 15.1834 3.33334 20.0001C3.33334 28.6501 9.91668 35.7501 18.3333 36.5834V33.2167C11.7667 32.4001 6.66668 26.7834 6.66668 20.0001ZM36.6667 20.0001C36.6667 11.3501 30.0833 4.25008 21.6667 3.41675V6.78342C28.2333 7.60008 33.3333 13.2167 33.3333 20.0001C33.3333 23.8834 31.6333 27.3667 28.9667 29.8001L25 25.8334V35.8334H35L31.3333 32.1667C34.6 29.1334 36.6667 24.8167 36.6667 20.0001Z"
                fill="#E31E24"
              />
            </svg>
          </div>
          <div class="text">{{ $t('info-block.block2') }}</div>
        </div>
        <div class="block" data-animation data-animation-loop>
          <div class="icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.3333 4H6.66667C4.81667 4 3.35 6.0025 3.35 8.5L3.33334 35.5C3.33334 37.9975 4.81667 40 6.66667 40H33.3333C35.1833 40 36.6667 37.9975 36.6667 35.5V8.5C36.6667 6.0025 35.1833 4 33.3333 4ZM33.3333 35.5H6.66667L6.5 22H20H33.3333V35.5ZM33.3333 14H20H6.5L6.66667 8.5H33.3333V14Z"
                fill="#E31E24"
              />
            </svg>
          </div>
          <div class="text">{{ $t('info-block.block3') }}</div>
        </div>
        <div class="block" data-animation data-animation-loop>
          <div class="icon">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 1.66663L5 8.33329V18.3333C5 27.5833 11.4 36.2333 20 38.3333C28.6 36.2333 35 27.5833 35 18.3333V8.33329L20 1.66663ZM16.6667 28.3333L10 21.6666L12.35 19.3166L16.6667 23.6166L27.65 12.6333L30 15L16.6667 28.3333Z"
                fill="#E31E24"
              />
            </svg>
          </div>
          <div class="text">{{ $t('info-block.block4') }}</div>
        </div>
      </div>
    </div>
    <div class="mobile_block-info block-info" id="about" v-else>
      <client-only>
        <vue-tiny-slider
          :mouse-drag="false"
          :loop="true"
          :autoplay="true"
          items="1"
          gutter="0"
        >
          <div class="block">
            <div class="icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.6667 13.3333H23.3333V18.3333H18.3333V21.6667H23.3333V26.6667H26.6667V21.6667H31.6667V18.3333H26.6667V13.3333ZM3.33333 20C3.33333 15.35 6.06667 11.3333 10.0167 9.46667V5.86667C4.2 7.93333 0 13.4833 0 20C0 26.5167 4.2 32.0667 10.0167 34.1333V30.5333C6.06667 28.6667 3.33333 24.65 3.33333 20ZM25 5C16.7333 5 10 11.7333 10 20C10 28.2667 16.7333 35 25 35C33.2667 35 40 28.2667 40 20C40 11.7333 33.2667 5 25 5ZM25 31.6667C18.5667 31.6667 13.3333 26.4333 13.3333 20C13.3333 13.5667 18.5667 8.33333 25 8.33333C31.4333 8.33333 36.6667 13.5667 36.6667 20C36.6667 26.4333 31.4333 31.6667 25 31.6667Z"
                  fill="#E31E24"
                />
              </svg>
            </div>
            <div class="text">{{ $t('info-block.block1') }}</div>
          </div>
          <div class="block">
            <div class="icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.4333 15.8834L17.65 27.6667L10.5833 20.6001L12.9333 18.2501L17.65 22.9667L27.0833 13.5334L29.4333 15.8834ZM6.66668 20.0001C6.66668 16.1167 8.36668 12.6334 11.0333 10.2001L15 14.1667V4.16675H5.00001L8.66668 7.83341C5.40001 10.8667 3.33334 15.1834 3.33334 20.0001C3.33334 28.6501 9.91668 35.7501 18.3333 36.5834V33.2167C11.7667 32.4001 6.66668 26.7834 6.66668 20.0001ZM36.6667 20.0001C36.6667 11.3501 30.0833 4.25008 21.6667 3.41675V6.78342C28.2333 7.60008 33.3333 13.2167 33.3333 20.0001C33.3333 23.8834 31.6333 27.3667 28.9667 29.8001L25 25.8334V35.8334H35L31.3333 32.1667C34.6 29.1334 36.6667 24.8167 36.6667 20.0001Z"
                  fill="#E31E24"
                />
              </svg>
            </div>
            <div class="text">{{ $t('info-block.block2') }}</div>
          </div>
          <div class="block">
            <div class="icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.3333 4H6.66667C4.81667 4 3.35 6.0025 3.35 8.5L3.33334 35.5C3.33334 37.9975 4.81667 40 6.66667 40H33.3333C35.1833 40 36.6667 37.9975 36.6667 35.5V8.5C36.6667 6.0025 35.1833 4 33.3333 4ZM33.3333 35.5H6.66667L6.5 22H20H33.3333V35.5ZM33.3333 14H20H6.5L6.66667 8.5H33.3333V14Z"
                  fill="#E31E24"
                />
              </svg>
            </div>
            <div class="text">{{ $t('info-block.block3') }}</div>
          </div>
          <div class="block">
            <div class="icon">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 1.66663L5 8.33329V18.3333C5 27.5833 11.4 36.2333 20 38.3333C28.6 36.2333 35 27.5833 35 18.3333V8.33329L20 1.66663ZM16.6667 28.3333L10 21.6666L12.35 19.3166L16.6667 23.6166L27.65 12.6333L30 15L16.6667 28.3333Z"
                  fill="#E31E24"
                />
              </svg>
            </div>
            <div class="text">{{ $t('info-block.block4') }}</div>
          </div>
        </vue-tiny-slider>
      </client-only>
    </div>
    <section class="section-info" id="benefits">
      <div class="section-info__wrapper container">
        <div class="section-info__list">
          <div class="section-info__item" data-animation>
            <div class="text">
              <h2 v-html="$t('section-block.block1.title')"></h2>
              <div
                class="text-wrapper"
                v-html="parceText($t('section-block.block1.text'))"
              ></div>
            </div>
            <div class="images">
              <img
                :src="
                  $i18n.locale == 'ru'
                    ? '/image/section-item1.png'
                    : '/image/section-item1_en.png'
                "
                alt="image"
              />
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
              <img
                :src="
                  $i18n.locale == 'ru'
                    ? '/image/section-item2.png'
                    : '/image/section-item2_en.png'
                "
                alt="image"
              />
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
              <img src="/image/section-item3.png" alt="image"/>
            </div>
          </div>
          <div class="section-info__item" data-animation>
            <div class="text">
              <h2 v-html="$t('section-block.block4.title')"></h2>
              <div
                class="text-wrapper"
                v-html="parceText($t('section-block.block4.text'))"
              ></div>
              <nuxt-link to="/about-card" class="more">{{
                  $t('btn.text-about')
                }}
              </nuxt-link>
            </div>
            <div class="images images-card">
              <img src="/image/section-item4.png" alt="image"/>
            </div>
          </div>
        </div>
        <div class="btn-wrapper">
          <btn :type="'card'">{{ $t('btn.text2') }}</btn>
        </div>
      </div>
    </section>
    <section class="app">
      <div class="app__wrapper container">
        <div class="app__left">
          <h2>{{ $t('app.title') }}</h2>
          <ul>
            <li>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.25463 17.5598C7.83669 18.1489 9.13308 17.9536 9.27266 17.0273C10.1411 11.2761 14.4867 6.42422 17.7752 1.85228C18.687 0.585349 16.5904 -0.618196 15.6904 0.633658C12.6854 4.81111 8.89775 9.20686 7.41598 14.276C5.72267 12.5455 4.02253 10.8314 2.12334 9.3107C0.920585 8.34728 -0.799899 10.0446 0.415822 11.0181C2.89023 13.0001 5.0286 15.3113 7.25463 17.5598Z"
                  fill="#43465D"
                />
              </svg>

              {{ $t('app.list.item1') }}
            </li>
            <li>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.25463 17.5598C7.83669 18.1489 9.13308 17.9536 9.27266 17.0273C10.1411 11.2761 14.4867 6.42422 17.7752 1.85228C18.687 0.585349 16.5904 -0.618196 15.6904 0.633658C12.6854 4.81111 8.89775 9.20686 7.41598 14.276C5.72267 12.5455 4.02253 10.8314 2.12334 9.3107C0.920585 8.34728 -0.799899 10.0446 0.415822 11.0181C2.89023 13.0001 5.0286 15.3113 7.25463 17.5598Z"
                  fill="#43465D"
                />
              </svg>

              {{ $t('app.list.item2') }}
            </li>
            <li>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.25463 17.5598C7.83669 18.1489 9.13308 17.9536 9.27266 17.0273C10.1411 11.2761 14.4867 6.42422 17.7752 1.85228C18.687 0.585349 16.5904 -0.618196 15.6904 0.633658C12.6854 4.81111 8.89775 9.20686 7.41598 14.276C5.72267 12.5455 4.02253 10.8314 2.12334 9.3107C0.920585 8.34728 -0.799899 10.0446 0.415822 11.0181C2.89023 13.0001 5.0286 15.3113 7.25463 17.5598Z"
                  fill="#43465D"
                />
              </svg>

              {{ $t('app.list.item3') }}
            </li>
          </ul>
          <div class="btn-wrapper">
            <btn :type="'downloads'">{{ $t('btn.text') }}</btn>
          </div>
        </div>
        <div class="app__right">
          <img
            :src="
              $i18n.locale == 'ru'
                ? '/image/app-img.png'
                : '/image/app-img_en.png'
            "
            alt="image"
          />
        </div>
      </div>
    </section>
    <section class="mission">
      <div class="mission__wrapper container">
        <div class="mission__head" data-animation>
          <h2>{{ $t('mission.title') }}</h2>
          <p v-html="$t('mission.subtitle')"></p>
        </div>
        <div class="mission__content">
          <div class="mission__item mission__item-red">
            <div class="title">{{ $t('mission.tomorrow.title') }}</div>
            <hr/>
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
                {{ $t('mission.tomorrow.item1') }}
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
                {{ $t('mission.tomorrow.item2') }}
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
                {{ $t('mission.tomorrow.item3') }}
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
                {{ $t('mission.tomorrow.item4') }}
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
                {{ $t('mission.tomorrow.item5') }}
              </li>
            </ul>
          </div>
          <div class="mission__item mission__item-green">
            <div class="title">
              {{ $t('mission.today.title') }}
            </div>
            <hr/>
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

                {{ $t('mission.today.item1') }}
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

                {{ $t('mission.today.item2') }}
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

                {{ $t('mission.today.item3') }}
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

                {{ $t('mission.today.item4') }}
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

                {{ $t('mission.today.item5') }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="question" id="faq">
      <div class="question__wrapper container" data-animation>
        <h2>{{ $t('question.title') }}</h2>
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
        <h2>{{ $t('news.title') }}</h2>
        <div class="news__list">
          <a href="#" class="news__item" target="_blank">
            <div class="news__who">ТАСС</div>
            <div class="news__title">
              Brent поднялась выше $30 за баррель впервые с 15 апреля
            </div>
            <div class="news__subtitle">
              Цена североморской нефтяной смеси марки Brent поднялась на 12%
              впервые с 15 апреля...
            </div>
          </a>
          <a href="#" class="news__item" target="_blank">
            <div class="news__who">TUT.BY</div>
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
            <div class="news__who">TUT.BY</div>
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
          <h2>{{ $t('baner.title') }}</h2>
          <p>{{ $t('baner.text') }}</p>
          <div class="btn-wrapper">
            <btn :type="'downloads'">{{ $t('btn.text') }}</btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import i18n from 'nuxt-i18n'

export default Vue.extend({
  data () {
    return {
      windowWidth: 1200,
      questions: [
        {
          head: this.$i18n.t('question.item1.title'),
          content: this.$i18n.t('question.item1.text'),
        },
        {
          head: this.$i18n.t('question.item2.title'),
          content: this.$i18n.t('question.item2.text'),
        },
        {
          head: this.$i18n.t('question.item3.title'),
          content: this.$i18n.t('question.item3.text'),
        },
        {
          head: this.$i18n.t('question.item5.title'),
          content: this.$i18n.t('question.item5.text'),
        },

        {
          head: this.$i18n.t('question.item4.title'),
          content: this.$i18n.t('question.item4.text'),
        },
        {
          head: this.$i18n.t('question.item6.title'),
          content: this.$i18n.t('question.item6.text'),
        },
        {
          head: this.$i18n.t('question.item8.title'),
          content: this.$i18n.t('question.item8.text'),
        },
      ],
    }
  },
  head () {
    return {
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content:
            'CryptoCourse: криптокошелёк и банковская карта в одном приложении',
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content:
            'Простое и удобное приложение для управления собственными криптокошельками. Закажите банковскую карту CryptoCourse и получите прямой доступ к сделкам с криптовалютой.',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            'CryptoCourse: криптокошелёк и банковская карта в одном приложении',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Простое и удобное приложение для управления собственными криптокошельками. Закажите банковскую карту CryptoCourse и получите прямой доступ к сделкам с криптовалютой.',
        },
      ],
    }
  },
  methods: {
    setWindowWidth () {
      this.windowWidth = window && window.innerWidth ? window.innerWidth : 1200
    },
    parceText (text: string) {
      return '<p>' + text.replace('\n', '</p><p>') + '</p>'
    },
    blockAnimation () {
      let options = {
        root: null,
        rootMargin: '5px',
        threshold: 0.5,
      }
      let callback = function (entries: any, observer: any) {
        entries.forEach((element: any) => {
          const target = element.target as HTMLElement
          if (element.isIntersecting) {
            options.rootMargin = `-${target.getBoundingClientRect().height}px`
            target.classList.add('animated')
          } else if (target.hasAttribute('data-animation-loop')) {
            target.classList.remove('animated')
          }
        })
      }
      let observer = new IntersectionObserver(callback, options)

      let targetArray = Array.from(
        document.querySelectorAll('[data-animation]')
      ) as any
      targetArray.forEach((target: any) => {
        observer.observe(target)
      })
    },
  },
  mounted () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.setWindowWidth)
      this.setWindowWidth()
      console.log(this.windowWidth)
      if (this.windowWidth >= 992) {
        this.blockAnimation()
      } else {
        let targetArray = Array.from(
          document.querySelectorAll('[data-animation]')
        ) as any
        targetArray.forEach((target: any) => {
          target.classList.add('animated')
        })
      }
    })
  },
})
</script>

<style lang="scss">
@import "tiny-slider/src/tiny-slider";

.first-screen {
  height: calc(100vh + 300px);
  min-height: 1000px;
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
    min-height: 800px;
    padding-top: 0px;
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
        margin-top: 20px;
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
    h1 {
      font-size: 41px;
      line-height: 41px;
    }
  }
}

.block-info {
  .block {
    width: 100%;
    max-width: 282px;
    padding: 30px;
    background: #fff;
    filter: drop-shadow(10px 4px 30px rgba(0, 0, 0, 0.1));
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

    .icon {
      height: 40px;

      svg {
        height: 100%;
        display: block;
      }
    }

    .text {
      font-family: $roboto;
      font-weight: 500;
      font-size: 24px;
      line-height: 34px;
      color: #43465d;
      margin-top: 12px;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    position: relative;
    top: -40px;
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
        margin-right: 10px;

        &:not(:last-child) {
          margin-right: 10px;
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

.mobile_block-info {
  position: relative;
  top: -250px;

  button[data-action="stop"],
  button[data-action="start"] {
    display: none;
  }

  .tns-controls {
    display: none;
  }

  #tns1-iw {
    width: 80%;
    padding: 20px;
  }

  .block {
    opacity: 1;
    transform: scale(1);
    margin-right: 10px;
    min-height: 180px;
    max-width: unset;
    filter: none;
    @include media(451px) {
      min-height: 214px;
    }
    margin-right: 15px;

    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  .tns-nav {
    position: absolute;
    left: 0;
    bottom: -20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    button {
      transition: 0.5s;
      border-radius: 50%;
      width: 10px;
      height: 10px;
      border: none;
      display: block;
      margin-right: 10px;
      padding: 0 0;
      background: #efefef;

      &.tns-nav-active {
        background: rgb(227, 30, 36);
      }
    }
  }

  @media only screen and (max-width: 361px) {
    // top: -200px;
    .block {
      border: 1px solid #eee;
      min-height: 250px;
    }
  }
  @media only screen and (max-width: 321px) {
    top: -200px;
    .block {
      border: 1px solid #eee;
    }
  }
}

.section-info {
  margin-top: 145px;

  .btn-wrapper {
    margin-top: 25px;

    .btn {
      margin: 0 auto;
    }

    a {
      min-height: 66px;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 160px;

    &:last-child {
      margin-bottom: 0px;
    }

    &:nth-child(even) {
      flex-direction: row-reverse;
    }

    .more {
      box-shadow: none;
      padding: 0 0;
      min-height: auto;
      color: #43465d;
      font-size: 24px;
      font-family: "Nunito", sans-serif;
      text-align: left;
      display: inline-block;
      margin-top: 5px;
      text-decoration: none;
      position: relative;
      @include media(mobile-xl) {
        font-size: 18px;
      }

      &:before {
        content: "";
        width: 100%;
        height: 1px;
        display: block;
        left: 0;
        bottom: 0;
        position: absolute;
        background: #43465d;
      }
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
          font-size: 32px;
          line-height: 34px;
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
        @include media(mobile-xl) {
          font-size: 18px;
          line-height: 28px;
        }

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

        transition: 0.6s;
        opacity: 0;
        transform: translateY(-40px);
        transition-delay: 0.8s;
        display: flex;
        align-items: center;

        .btn {
          &:not(:first-child) {
            margin-left: 10px;
          }
        }

        @include media(mobile-xxxl) {
          flex-direction: column;
          align-items: flex-start;
          .btn {
            width: 100%;

            &:not(:first-child) {
              margin-left: 0px;
              margin-top: 10px;
            }
          }
        }

        a {
          min-height: 66px;

          @include media(tablet) {
            min-width: auto;
            width: 100%;
          }
          padding: 20px 40px;
          box-shadow: 0px 14px 30px rgba(227, 30, 36, 0.25);
        }
      }
    }

    .images {
      opacity: 0;
      transition: 0.6s;
      transition-delay: 0.6s;

      &-card {
        width: 100%;
        max-width: 550px;
        margin-right: 20px;

        .btn {
          margin: 0 auto;
        }

        a {
          margin: 0 auto;
          height: 66px;
        }

        @include media(tablet) {
          margin-right: 0px;
        }

        img {
          border-radius: 10px;
          display: block;
          width: 100%;
        }
      }

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
        margin-top: 25px;
      }
      &:nth-child(even) {
        flex-direction: column;
      }
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
  }

  @include media(mobile-xxl) {
    margin-top: -120px;
    overflow: hidden;
    padding-bottom: 50px;
    &__item {
      margin-bottom: 50px;

      &:nth-child(1) {
        .images {
          // width: 475px;
        }
      }

      // &:nth-child(3) {
      //   .images {
      //     width: 560px;
      //     left: 120px;
      //     position: relative;
      //   }
      // }
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
    min-height: 465px;

    h2 {
      font-family: $roboto;
      font-weight: bold;
      font-size: 48px;
      line-height: 46px;
      color: #43465d;
      margin-bottom: 30px;
      @include media(tablet) {
        font-size: 32px;
        line-height: 34px;
      }
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
  @include media(mobile-xxxl) {
    margin: 0px 0px;
    h2 {
      text-align: center;
    }
    ul li {
      font-size: 18px;
      line-height: 28px;
      // flex-direction: column;
      // justify-content: center;
      // align-items: center;
      // text-align: center;
      svg {
        margin-right: 10px;
        margin-top: 10px;
        margin-bottom: 0px;
      }
    }
    .btn-wrapper {
      margin: 0 auto;
    }
  }
  @include media(tablet) {
    min-height: auto;
    &__wrapper {
      min-height: auto;
    }
    &__left {
      padding: 50px 0px;
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
      @include media(tablet) {
        font-size: 32px;
        line-height: 34px;
      }
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
      @include media(tablet) {
        font-size: 18px;
        line-height: 28px;
      }
    }

    &.animated {
      h2,
      p {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @include media(tablet) {
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
        max-width: 390px;
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
          opacity: 1;
          transform: scale(1);
        }

        svg {
          min-width: 24px;
          min-height: 28px;
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
      .title {
        width: 100%;
        max-width: 370px;
        text-align: center;
      }

      @include media(tablet) {
        margin-bottom: 50px;
        .title {
          text-align: center;
        }
      }

      hr {
        border-top: 2px solid #e31e24;
        width: calc(100% - 40px);
        @include media(tablet) {
          width: 100%;
        }
      }

      ul li {
        opacity: 0.7;

        &.animated {
          opacity: 0.7;
        }
      }
    }

    &-green {
      hr {
        border-top: 2px solid #5bc980;
        position: relative;
        width: calc(100% + 40px);
        left: -40px;
        @include media(tablet) {
          width: 100%;
          left: 0;
        }
      }

      .title {
        width: 100%;
        max-width: 370px;
      }

      @include media(tablet) {
        .title {
          text-align: center;
        }
      }

      ul li svg {
        min-width: 14px;
      }
    }
  }

  @include media(mobile-xxl) {
    margin-top: 50px;
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
    @include media(tablet) {
      opacity: 1;
      transform: translateY(0);
      font-size: 32px;
      line-height: 34px;
    }
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

    @include media(tablet) {
      opacity: 1;
      transform: translateY(0);
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
