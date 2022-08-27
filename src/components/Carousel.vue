<template>
  <div class="container">
    <ul class="slides">
      <input type="radio" id="control-1" name="control" checked />
      <input type="radio" id="control-2" name="control" />
      <input type="radio" id="control-3" name="control" />

      <li class="slide">
        <div class="navigator slide-1">
          <label for="control-3">
            <i class="fa-solid fa-chevron-left"></i>
          </label>
          <label for="control-2">
            <i class="fa-solid fa-chevron-right"></i>
          </label>
        </div>
        <img src="../assets/img/img2.jpg" alt="" />
        <span v-scrollanimation
          >「覓 • 棗 • 晨」<br />
          阿公用心、阿蓮好棗</span
        >
      </li>
      <li class="slide">
        <div class="navigator slide-2">
          <label for="control-1">
            <i class="fa-solid fa-chevron-left"></i>
          </label>
          <label for="control-3">
            <i class="fa-solid fa-chevron-right"></i>
          </label>
        </div>
        <img src="../assets/img/img4.jpg" alt="" />
        <span v-scrollanimation
          >維生素C多蘋果20倍<br />
          吃一顆，幫你補充抵抗力！</span
        >
        <span></span>
      </li>
      <li class="slide">
        <div class="navigator slide-3">
          <label for="control-2">
            <i class="fa-solid fa-chevron-left"></i>
          </label>
          <label for="control-1">
            <i class="fa-solid fa-chevron-right"></i>
          </label>
        </div>
        <img src="../assets/img/img6.jpg" alt="" />
        <span v-scrollanimation class="slide3"
          >「柴燒蜜棗糖」<br />
          超人氣伴手禮<i class="fa-solid fa-thumbs-up ml-2 mb-1"></i><br />
          冬季限定、不容錯過！
          </span
        >
      </li>

      <div class="controls-visible">
        <label for="control-1"></label>
        <label for="control-2"></label>
        <label for="control-3"></label>
      </div>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 65px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // @keyframes zoom {
  //   from {
  //     transform: scale(1, 1);
  //   }
  //   to {
  //     transform: scale(1.5, 1.5);
  //   }
  // }
  // min-height: 100vh;

  // @keyframes round {
  //   0% {
  //     transform: translateX(0);
  //   }
  //   30% {
  //     transform: translateX(0);
  //   }
  //   35% {
  //     transform: translateX(-100%);
  //   }
  //   65% {
  //     transform: translateX(-100%);
  //   }
  //   70% {
  //     transform: translateX(-200%);
  //   }
  //   95% {
  //     transform: translatex(-200%);
  //   }
  // }

  ul.slides {
    position: relative;
    width: 100%;
    height: 300px;
    background-color: #eee;
    overflow: hidden;
    .navigator {
      position: absolute;
      top: 50%;
      transform: translatey(-50%);
      width: 100%;
      z-index: 100;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      // display: none;
      .fa-chevron-left,
      .fa-chevron-right {
        // z-index: 999;
        font-size: 32px;
        color: rgb(209, 206, 206);
      }
    }

    li.slide {
      width: inherit;
      height: inherit;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      // animation: round 30s linear infinite;
      // transition: 0.5s transform ease-in-out;
      // animation: zoom 20s;
      //  opacity: 0;
      img {
        object-fit: cover;
      }
      span {
        position: absolute;
        top: 15%;
        left: 8%;
        font-size: 1.1rem;
        font-weight: 300;
        text-align: center;
        line-height: 2rem;
      }
      .slide3 {
        top: 55%;
        left: 8%;
      }
    }

    .slide:nth-of-type(2) {
      left: 100%;
    }
    .slide:nth-of-type(3) {
      left: 200%;
    }
    // .slide:nth-child(1) {
    //   animation-delay: 0s;
    // }
    // .slide:nth-child(2) {
    //   animation-delay: 5s;
    // }
    // .slide:nth-child(3) {
    //   animation-delay: 10s;
    // }
    input[type="radio"] {
      position: relative;
      z-index: 100;
      display: none;
    }
    .controls-visible {
      position: absolute;
      width: 100%;
      bottom: 12px;
      text-align: center;
    }
    .controls-visible label {
      border: 2px #fff solid;
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: #fff;
      border-radius: 50%;
      margin: 0 3px;
    }
  }
  .slides
    input[type="radio"]:nth-of-type(1):checked
    ~ .controls-visible
    label:nth-of-type(1) {
    background-color: rgb(128, 126, 126);
  }
  .slides
    input[type="radio"]:nth-of-type(2):checked
    ~ .controls-visible
    label:nth-of-type(2) {
    background-color: rgb(128, 126, 126);
  }
  .slides
    input[type="radio"]:nth-of-type(3):checked
    ~ .controls-visible
    label:nth-of-type(3) {
    background-color: rgb(128, 126, 126);
  }
  .slides input[type="radio"]:nth-of-type(1):checked ~ .slide {
    transform: translateX(0%);
  }
  .slides input[type="radio"]:nth-of-type(2):checked ~ .slide {
    transform: translateX(-100%);
  }
  .slides input[type="radio"]:nth-of-type(3):checked ~ .slide {
    transform: translateX(-200%);
  }
  .slides
    input[type="radio"]:nth-of-type(1):checked
    ~ .navigator:nth-of-type(1) {
    display: flex;
  }

  .slides
    input[type="radio"]:nth-of-type(2):checked
    ~ .navigator:nth-of-type(2) {
    display: flex;
  }

  .slides
    input[type="radio"]:nth-of-type(3):checked
    ~ .navigator:nth-of-type(3) {
    display: flex;
  }
  .before-enter{
    opacity:0;
    transform: translateX(50px);
    transition: all 1s cubic-bezier(.41, .01, .57, 1.61);
  }
  .enter{
    opacity: 1;
    transform: translateX(0px);
  }
}

@media screen and (min-width: 900px) {
  .container {
    margin-top: 80px;
    ul.slides {
      height: 500px;
      li.slide {
        span {
          font-size: 1.5rem;
          line-height: 2.5rem;
        }
      }
    }
  }
}
</style>