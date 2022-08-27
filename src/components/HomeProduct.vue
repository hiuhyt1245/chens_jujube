<template>
  <div class="container">
    <section class="pharagraph">
      <div class="title-panel">
        <div class="title-figure">
          <img class="title-img" src="../assets/img/img9v.jpg" alt="" />
        </div>
        <span v-scrollanimation>PRODUCTS</span>
      </div>
      <div class="content-panel">
        <div class="content-figure">
          <img v-scrollanimation class="content-img" src="../assets/img/img8v2.jpg" alt="" />
        </div>
        <div v-scrollanimation class="content-text">
          <h1>「柴燒蜜棗糖」</h1>
          <p>
            遵循古法以手工紅糖熬煮，獨特棗子柴燒香氣，保留蜜棗甜而不膩。<br />
            富含蜜棗營養與膳食纖維，厚實肉質、綿密香Q口感、不黏牙。<br />
            純天然、無添加、無防腐劑。<br />
          </p>
          <button>
            <router-link class="products" to="/products">BUY NOW</router-link>
          </button>
        </div>
      </div>
    </section>

    <section v-scrollanimation class="card-list-panel">
      <div class="card-panel">
        <div class="card" v-for="product in products" :key="product.id">
          <img :src="product.image" class="product-img" alt="" />
          <div class="card-body">
            <div class="description">
              <p class="product-name">{{ product.name }}</p>
              <p class="product-price">{{ product.specification }}</p>
            </div>
            <div class="control-panel">
              <router-link to="/products" class="add-cart">VIEW &nbsp; MORE</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import image750 from "../assets/img/750.jpg";
import image600 from "../assets/img/600.jpg";
import image500 from "../assets/img/500.jpg";
/* eslint-disable */
const dummyData = {
  products: [
    {
      id: 750,
      name: "雪麗棗 4.5A",
      image: image750,
      specification: "超大大(每顆平均4.5兩)",
      subSpecification: "顆數: 16 ± 1",
      price: 750,
      quantity: 0,
    },
    {
      id: 600,
      name: "雪麗棗 4A",
      image: image600,
      specification: "超大(每顆平均4.0-4.4兩)",
      subSpecification: "顆數: 18 ± 1",
      price: 600,
      quantity: 0,
    },
      {
      id: 500,
      name: "雪麗棗 3.5A",
      image: image500,
      specification: "頂級(每顆平均3.5-3.9兩)",
      subSpecification: "顆數: 21 ± 1",
      price: 500,
      quantity: 0,
    },
  ],
};
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.products = dummyData.products;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  color: #4d4d4d;
  margin: 5rem 0;
  .pharagraph {
    .title-panel {
      position: relative;
      height: 300px;
      img {
        object-fit: cover;
      }
      span {
        position: absolute;
        top: 40%;
        left: 10%;
        font-size: 3rem;
        color: #fff;
        letter-spacing: 0.5rem;
      }
    }
    .content-panel {
      position: relative;
      .content-figure {
        width: 85%;
        margin: auto;
        // position: absolute;
      }
      .content-text {
        // background: #f6f4ed;
        width: 85%;
        margin: 3rem auto;
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
          margin: .5rem auto;
          text-align: start;
          .products {
            border: 2px #b6b4ae solid;
            display: block;
            text-align: center;
            margin: 0 0 0 -0.4rem;
            width: 150px;
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
    }
  }
  .card-list-panel {
    width: 80%;
    margin: 5rem auto 5rem auto;
    h1 {
      z-index: 2;
      font-size: 2.5rem;
      font-weight: 300;
      letter-spacing: 0.1rem;
    }
    .card-panel {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
      grid-gap: 1.5rem;
    }
    .card {
      background: #f6f4ed;
      margin: auto;
      -webkit-box-shadow: 2px 10px 12px 0px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: 2px 10px 12px 0px rgba(0, 0, 0, 0.1);
      box-shadow: 2px 10px 12px 0px rgba(0, 0, 0, 0.1);
      .product-img {
        margin: 1rem;
        width: 18rem;
        height: 18rem;
        // object-fit: cover;
      }
      .product-name {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
      }
      .product-price {
        text-align: center;
        font-size: 1rem;
        font-weight: 300;
        line-height: 2rem;
      }
      .control-panel {
        margin: 1rem auto;
        display: flex;
        justify-content: center;
        .add-cart {
          width: 150px;
          display: flex;
          justify-content: center;
          border: 2px #354345 solid;
          border-radius: 40px;
          padding: 0.5rem;
          color: #fff;
          background: #354345;
          font-size: 1rem;
          &:hover {
            background: #fff;
            color: #354345;
          }
        }
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
      .title-panel {
        height: 470px;
        margin-top: 25%;
        .title-figure {
          height: 500px;
        }
        span {
          font-size: 5rem;
          top: 30%;
        }
      }
      .content-panel {
        height: 300px;
        display: flex;
        width: 90%;
        margin: auto;
        .content-figure {
          width: 100%;
          height: 140%;
          img{
            object-fit: cover;
          }
        }
        .content-text {
          margin: 0;
          background: #f6f4ed;
          width: 100%;
          height: 140%;
          padding: 1.5rem;
          h1 {
          font-size: 2.3rem;
        }
        p {
          line-height: 3rem;
          font-size: 1.1rem;
        }
          button {
            .products {
              width: 200px;
            }
          }
        }
      }
    }
    .card-list-panel{
      margin-top:12rem;
    }
  }
}
</style>