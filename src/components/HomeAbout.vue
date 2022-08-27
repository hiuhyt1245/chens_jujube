<template>
  <div class="container">
    <section class="pharagraph">
      <div v-scrollanimation class="text-panel">
        <h1>覓棗晨</h1>
        <p>
          翠綠清甜、肉質細緻。<br />
          顧客大口咬下後滿足的表情是對覓棗晨最大的肯定，也是我們一路走來始終如一的動力。<br />
          覓棗晨將持續散播這份幸福甘甜，讓更多人品嚐到這份簡單的美好...
        </p>
        <button>
          <router-link class="about" to="/about">ABOUT</router-link>
        </button>
      </div>
      <div class="figure-panel d-flex">
        <div class="figure">
          <img v-scrollanimation class="figure-img" src="../assets/img/img7.jpg" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.container {
  color: #4d4d4d;
  width: 85%;
  margin: 0 auto;
  .pharagraph {
    
    .text-panel {
      z-index: 1;
      h1 {
        font-size: 2rem;
        font-weight: 300;
        letter-spacing: 1rem;
        line-height: 4rem;
      }
      p {
        
        margin: 1rem 0;
        line-height: 2rem;
        font-weight: 300;
      }
      button {
        width: 100%;
        margin: 1rem auto;
        text-align: start;
        .about {
          border: 2px #b6b4ae solid;
          display: block;
          text-align: center;
          margin: 0 0 0 -0.4rem;
          width: 100px;
          border-radius: 25px;
          padding: 0.5rem;
          color: #4d4d4d;
          font-size: 1rem;
          &:hover {
            color: #b6b4ae;
          }
        }
      }
    }
    .figure-panel {
      margin: 2rem 0;
      img {
        object-fit: cover;
      }
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
    .pharagraph {
      position: relative;
      .text-panel {
        position: absolute;
        top: 30%;
        right: 0;
        background: #f6f4ed;
        width: 60%;
        padding: 3rem;
        h1 {
          font-size: 2.3rem;
        }
        p {
          font-size: 1.1rem;
          line-height: 3rem;
          font-weight: 300;
        }
        button {
          .about {
            width: 200px;
          }
        }
      }
      .figure-panel {
        margin-top:5rem;
        width: 50%;
      }
    }
   
  }
}
</style>