<template>
  <div class="container">
    <p>
      親愛的貴賓：<br />
      已收到您的訂單明細<br />
      如有訂單相關問題請洽<br />
      官方LINE客服：＠023ffjhz<br />
      感謝您對覓棗晨的支持！
    </p>
    <button>
        <router-link class="back" to="/">回首頁</router-link>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 900px;
  margin: 65px auto 0 auto;
  background: url("https://images.pexels.com/photos/4439466/pexels-photo-4439466.jpeg?cs=srgb&dl=pexels-vie-studio-4439466.jpg&fm=jpg")
    no-repeat center center;
  background-size: cover;
  p{
    text-align: center;
    font-size: 1.2rem;
    padding: 3rem;
    line-height: 2rem;
    letter-spacing: 3px;
    color: #354345;
  }
  button {
      width: 100%;
      .back {
        margin: auto;
        display: flex;
        width: 150px;
        justify-content: center;
        border: 2px #354345 solid;
        border-radius: 40px;
        padding: 0.5rem;
        color: #fff;
        background: #354345;
        font-size: 16px;
        &:hover {
          background: transparent;
          color: #354345;
          border: 2px #354345 solid;
        }
      }
  }
}

@media screen and (min-width:900px) {
  .container{
    height: 1200px;
    margin: 80px auto 0 auto;
    p{
      font-size: 1.5rem;
      letter-spacing: 3px;
      line-height: 2.5rem;
    }
  }
}
</style>