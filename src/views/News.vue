<template>
  <div class="container">
    <nav>
      <ul class="navgation d-flex">
        <li class="navgation-item">
          <router-link to="/" class="navgation-link">HOME </router-link>
          <span class="">/</span>
        </li>
        <li class="navgation-item">
          <router-link to="/news" class="navgation-link">NEWS </router-link>
        </li>
      </ul>
    </nav>

    <section>
      <h1 v-scrollanimation>最新消息</h1>
      <div class="news-panel">
        <div v-scrollanimation class="news-list" v-for="card in cards" :key="card.id">
          <div>
          <a :href="card.link"><img :src="card.image" class="news-img" alt="" /></a>
          
          <div class="news-description">{{card.description}}</div>
          <div class="news-date">{{card.date}}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import image22 from "../assets/img/img22.jpg";
import image11 from "../assets/img/img11.jpg";
import image23 from "../assets/img/img23.jpg";

/* eslint-disable */
const dummyData = {
  cards: [
    {
      id: 22,
      link:"https://www.foodnext.net/life/placemaking/paper/5098675627?fbclid=IwAR160Bvq04-1uOwVvYeRsq0U-szAzrw49aryLyvna15W5fz2DBWyFRlunO8",
      image: image22,
      description: "以優質蜜棗主攻禮盒市場！「覓棗晨」：逆轉種田人的辛苦宿命得開拓新通路！",
      date:"2022.02.19",
    },
    {
      id: 11,
      link:"https://www.facebook.com/chensjujube/",
      image: image11,
      description: "是青蘋果還是棗子？傻傻分不清楚..... 棗子：我7兩重",
      date:"2021.01.25",
    },
    {
      id: 23,
      link:"https://www.facebook.com/events/1121909378191199/?acontext=%7B%22ref%22%3A%2252%22%2C%22action_history%22%3A%22%5B%7B%5C%22surface%5C%22%3A%5C%22share_link%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22share_link%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22invite_link_id%5C%22%3A1787908001565976%7D%7D%5D%22%7D",
      image: image23,
      description: "2020型農市集 8月8日上午4:00 – 8月9日上午9:30 「覓棗晨」在捷運中央公園站 MRT Central Park Station等你喔～",
      date:"2020.08.01",
    },
  ],
};
export default {
  data() {
    return {
      cards: [],
    };
  },
  created() {
    this.fetchCards();
  },
  methods: {
    fetchCards() {
      this.cards = dummyData.cards;
    },
  },
};
</script>

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
  section {
    width: 80%;
    margin: 0 auto 15rem auto;
    h1 {
      z-index: 2;
      font-size: 2.5rem;
      font-weight: 300;
      letter-spacing: 0.1rem;
    }
    .news-panel {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
      grid-gap: 3rem;
      img{
        height: 200px;
        object-fit: cover;
      }
      .news-description{
        margin: 2rem 0 1rem 0;
        padding-bottom: 1rem;
        height: 80px;
        border-bottom: 1px solid #c5c4bf ;
      }

    }
  }
  .before-enter {
    opacity: 0;
    transform: translateY(100px);
    transition: all 1s ease-out;
  }
  .enter {
    opacity: 1;
    transform: translateY(0px);
  }
}

@media screen and (min-width: 900px) {
  .container {
    section {
      h1 {
        font-size: 4rem;
        font-weight: 400;
      }
    }
  }
}
</style>