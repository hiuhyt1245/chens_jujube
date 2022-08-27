<template>
  <div class="container">
    <nav>
      <ul class="navgation d-flex">
        <li class="navgation-item">
          <router-link to="/" class="navgation-link">HOME </router-link>
          <span class="">/</span>
        </li>
        <li class="navgation-item">
          <router-link to="/about" class="navgation-link">ABOUT </router-link>
        </li>
      </ul>
    </nav>

    <section class="marquee">
      <h1 v-scrollanimation>品牌故事</h1>
      <div class="pic-container d-flex">
        <div class="pic-panel d-flex">
          <div class="pic">
            <img src="../assets/img/img10.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="../assets/img/img1.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="../assets/img/img5.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="../assets/img/img13.jpg" alt="" />
          </div>
        </div>
        <div class="pic-panel d-flex">
          <div class="pic">
            <img src="../assets/img/img10.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="../assets/img/img1.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="../assets/img/img5.jpg" alt="" />
          </div>
          <div class="pic">
            <img src="../assets/img/img13.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="first-pharagraph">
      <div class="first-pharagraph-container">
        <p v-scrollanimation>
          <span class="brand">覓棗晨<br /></span>
          覓/蜜 &nbsp; 飽水灌溉，清脆<span class="emphasize">甜蜜</span><br />
          棗/找 &nbsp; <span class="emphasize">棗子</span>分級，品質第一<br />
          晨/陳 &nbsp; <span class="emphasize">清晨</span>採收，注入朝氣<br />
        </p>
      </div>
    </section>

    <section class="second-pharagraph">
      <div class="second-figure-panel d-flex">
        <div class="figure figure-one">
          <img v-scrollanimation class="figure-img" src="../assets/img/img17.jpg" alt="" />
        </div>
        <div class="figure figure-two">
          <img v-scrollanimation class="figure-img" src="../assets/img/img18.jpg" alt="" />
        </div>
        <div class="figure-hide figure-three">
          <img v-scrollanimation class="figure-img" src="../assets/img/img19.jpg" alt="" />
        </div>
      </div>
      <div class="second-text-panel">
        <p v-scrollanimation>
          生根於高雄阿蓮的在地小農陳爺爺是覓棗晨的現任果園負責人。<br />
          往往在天還沒亮的時候，陳爺爺就起身前往果園準備一日的農作。<br />
        </p>
        <p v-scrollanimation>
          傳承了祖孫三代對蜜棗的執著與熱情，陳爺爺秉持著初心，選用土地友善的耕作方式，在經驗與創新的栽種下，<br />
          不僅減少對環境的影響，更培育出天然清脆又香甜的蜜棗。
        </p>
      </div>
    </section>

    <section class="third-pharagraph">
      <div class="third-text-panel">
        <p v-scrollanimation>
          在這超過三十年的棗園裡，承載了陳家對栽種蜜棗的無數寶貴回憶。<br />
          施肥、灌溉、整枝、授粉、疏果、採收，每個環節毫不馬虎，一顆顆收成的棗兒都是陳爺爺悉心照顧下的寶貝。
        </p>
        <p v-scrollanimation>
          顧客大口咬下後滿足的表情是對覓棗晨最大的肯定，也是陳家一路走來始終如一的動力。<br />
          覓棗晨將持續散播這份幸福甘甜，讓更多人品嚐到這份簡單的美好。
        </p>
      </div>
      <div class="third-figure-panel">
        <div class="figure">
          <img v-scrollanimation class="figure-img" src="../assets/img/img3.jpg" alt="" />
        </div>
      </div>
    </section>

    <section class="fourth-paragraph">
      <p v-scrollanimation>想欲呷棗仔，就來找陳家！</p>
    </section>
  </div>
</template>


<style lang="scss" scoped>
.container {
  color: #4d4d4d;
  // width: 90%;
  // margin: 0 auto;
  nav {
    width: 90%;
    margin: 9rem auto 5rem auto;
    .navgation-link {
      opacity: 0.5;
      font-size: 0.8rem;
    }
    span {
      opacity: 0.3;
      font-size: 0.2rem;
      margin: 0 8px 0 3px;
    }
  }

  @keyframes scroll {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }
  .marquee {
    width: 100%;
    position: relative;
    h1 {
      // padding:0;
      // position: relative;
      position: absolute;
      top: -12%;
      // transform: translate(0, 50%);
      z-index: 2;
      font-size: 2.5rem;
      font-weight: 300;
      letter-spacing: 0.1rem;
      margin-left: 1.5em;
    }
    .pic-container {
      z-index: 0;
      width: 100%;
      overflow: hidden;
      position: relative;
      // margin-top: 3rem;
      // position: absolute;
      // top: 50%;
      .pic-panel {
        animation: scroll 30s linear infinite;
        .pic {
          margin-right: 2rem;
          width: 23rem;
          height: 23rem;
          img {
            object-fit: cover;
          }
        }
      }
    }
  }
  .first-pharagraph {
    margin: 3rem auto;
    width: 100%;
    text-align: center;
    p {
      font-weight: 300;
      line-height: 2rem;
      font-size: 1.1rem;
      .brand {
        line-height: 3rem;
        font-size: 1.5rem;
        letter-spacing: 1rem;
      }
      .emphasize {
        font-weight: 400;
        font-size: 1.1rem;
      }
    }
  }
  .second-pharagraph {
    width: 100%;
    .second-figure-panel {
      .figure {
        width: 100%;
        height: 100%;
        overflow: hidden;
        .figure-img {
          width: 90%;
          height: 90%;
          margin: 2rem auto;
          object-fit: cover;
          overflow: hidden;
        }
      }
      .figure-hide {
        display: none;
      }
    }
    .second-text-panel {
      width: 90%;
      margin: 2rem auto;
      p {
        font-weight: 300;
        line-height: 3rem;
        font-size: 1.1rem;
        text-align: center;
        padding: 1rem 0;
      }
    }
  }
  .third-pharagraph {
    .third-text-panel {
      width: 90%;
      margin: 2rem auto;
      p {
        font-weight: 300;
        line-height: 3rem;
        font-size: 1.1rem;
        text-align: center;
        padding: 1rem 0;
      }
    }
    .third-figure-panel {
      .figure {
        width: 100%;
        height: 100%;
        .figure-img {
          width: 90%;
          height: 300px;
          margin: 2rem auto;
          object-fit: cover;
        }
      }
    }
  }
  .fourth-paragraph {
    width: 90%;
    margin: 2rem auto;
    p {
      text-align: center;
      font-size: 1.8rem;
    }
  }
  .before-enter{
    opacity:0;
    transform: translateY(100px);
    transition: all 1s ease-out;
  }
  .enter{
    opacity: 1;
    transform: translateY(0px);
  }
}

@media screen and (min-width: 900px) {
  .container {
    .marquee {
      h1 {
        font-size: 4rem;
        font-weight: 400;
      }
    }
    .first-pharagraph {
      .first-pharagraph-container {
        width: 100%;
        height: 200px;
        position: relative;
        p {
          width: 40%;
          line-height: 5rem;
          background-color: #fff;
          position: absolute;
          top: -40%;
          font-size: 1.15rem;
          .emphasize {
            font-size: 1.15rem;
          }
        }
      }
    }
    .second-pharagraph {
      // overflow: hidden;

      position: relative;
      background: #f6f4ed;
      height: 600px;
      width: 100%;
      .second-figure-panel {
        all: unset;

        .figure-one,
        .figure-two,
        .figure-hide {
          all: unset;
          .figure-img {
            all: unset;
            width: 25rem;
            height: 30rem;
            object-fit: cover;
          }
        }
        .figure-one {
          position: absolute;
          left: 5%;
          top: -3%;
        }
        .figure-two {
          position: absolute;
          left: 25%;
          top: 20%;
        }
        .figure-three {
          position: absolute;
          left: 50%;
          top: -15%;
        }
      }
      .second-text-panel {
        padding: 2rem;
        position: absolute;
        width: 540px;
        background: #fff;
        right: 0;
        top: 8%;
      }
    }
    .third-pharagraph {
      display: flex;
      margin-top: 2rem;
      .third-text-panel {
        width: 60%;
        margin: 0;
        padding: 1.8rem 2.5rem;
        p {
          width: 500px;
          margin: auto;
        }
      }
      .third-figure-panel {
        all: unset;
        width: 40%;
        .figure {
          height: 100%;
          width: 100%;
          .figure-img {
            all: unset;
            display: flex;
            width: 85%;
            height: 350px;
            object-fit: cover;
            margin: 2rem auto;
          }
        }
      }
    }
    .fourth-paragraph {
      margin: 2rem auto;
      p {
        font-size: 2rem;
      }
    }
    
  }
}
</style>