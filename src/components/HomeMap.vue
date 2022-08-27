<template>
  <div class="container">
    <section >
      <div class="origin-info">
        <h1>產地</h1>
        <ul class="origin-info-list">
          <li class="origin-info-item">
            <span>地址：</span>
            822高雄市阿蓮區復安里
          </li>
          <li class="origin-info-item">
            <span>電話號碼： </span>
            07-123-8888
          </li>
          <li class="origin-info-item">
            <span>開放時間：</span>
            平日 11:00-16:00
          </li>
          <li class="origin-info-item">
            <span style="opacity: 0">開放時間：</span> 週末和節假日 11:00-19:00
          </li>
        </ul>
        <ul class="origin-map">
          <a href="https://www.google.com.tw/maps/place/%E5%A4%A7%E5%B2%A1%E5%B1%B1%E9%A2%A8%E6%99%AF%E5%8D%80%E5%81%9C%E8%BB%8A%E5%A0%B4/@22.8523586,120.3348177,17z/data=!3m1!4b1!4m5!3m4!1s0x346e0d5b083f4745:0xf280c69bf877e7ed!8m2!3d22.8523586!4d120.3348177?hl=zh-TW" target="_blank">
            <i class="fa-solid fa-location-dot"></i>
            <span class="ml-1">Google Map</span>
          </a>
        </ul>
      </div>

      <div class="welcome-picture">
        <img src="../assets/img/img21.jpg" alt="" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
section {
  border: 2px solid #b6b4ae;
  border-radius: 20px;
  color: #4d4d4d;
  width: 85%;
  margin: 5rem auto 8rem auto;
  .origin-info {
    h1 {
      text-align: center;
      font-size: 2rem;
      font-weight: 300;
      letter-spacing: 1rem;
      line-height: 4rem;
    }
    .origin-info-list {
      width: 300px;
      margin: auto;
      .origin-info-item {
        span {
          margin: 0.5rem 0;
          line-height: 2rem;
          font-size: 1rem;
          display: inline-block;
          width: 100px;
        }
      }
    }
  }
  .origin-map {
    border: 2px #b6b4ae solid;
    text-align: center;
    margin: 2rem auto;
    width: 120px;
    border-radius: 20px;
    padding: 0.3rem;
    &:hover {
      color: #b6b4ae;
    }
  }
  .welcome-picture {
    padding: 1rem;
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
    margin-top: 9rem;
    background: #f6f4ed;
    position: relative;
    section {
      border: unset;
      .origin-info {
        position: absolute;
        background: #fff;
        top: -10%;
        right: 5%;
        padding: 3rem;
        width: 45%;
        -webkit-box-shadow: 2px 10px 12px 0px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 2px 10px 12px 0px rgba(0, 0, 0, 0.1);
        box-shadow: 2px 10px 12px 0px rgba(0, 0, 0, 0.1);
      }
      .welcome-picture {
        padding: 1rem;
        width: 60%;
        height: 500px;
        img {
          object-fit: cover;
        }
      }
    }
  }
}
</style>