<template>
  <div class="container">
    <a
      href="https://www.foodnext.net/life/placemaking/paper/5098675627?fbclid=IwAR160Bvq04-1uOwVvYeRsq0U-szAzrw49aryLyvna15W5fz2DBWyFRlunO8"
    >
      <div class="d-flex justify-content-between">
        <div v-scrollanimation class="news">
          <p class="date">NEWS &nbsp;&nbsp;2022.02.19</p>
          <hr>
          <p class="title">
            以優質蜜棗主攻禮盒市場！「覓棗晨」：逆轉種田人的辛苦宿命得開拓新通路！
          </p>
        </div>
        <div class="icon">
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.container {
  color: #4d4d4d;
  margin: 0 0 5rem 0;
  background: #f8f0d6;
  .news:hover {
      transform: scale(1.05);
     
    }
  p {
    font-size: 0.9rem;
    font-weight: 300;
  }
  .date {
    padding: 1rem 2rem 0 2rem;
  }
  .title {
    padding: 0.2rem 2rem 1rem 2rem;
  }
  hr {
    display: none;
  }
  .icon {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    .fa-angle-right {
      font-size: 1.5rem;
    }
  }
  .before-enter {
    opacity: 0;
    transform: translateY(50px);
    transition: all 1s cubic-bezier(.41, .01, .57, 1.61);;
  }
  .enter {
    opacity: 1;
    transform: translateY(0px);
  }
}

@media screen and (min-width: 900px) {
  .container {
    .news{
      display: flex;
      .date, .title{
        padding:unset;
        padding:1rem 2rem;
      }
      hr{
        display: inline;
        transform: rotate(90deg);
        border: 0px;
        width: 2px;
        background:#b6b4ae;
      }
    }
    .news:hover >.title{
      transform: translateX(30px);
     transition: transform 1s cubic-bezier(.41, .01, .57, 1.61);
    }
  }
}
</style>