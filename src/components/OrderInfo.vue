<template>
  <div class="showInfo-container">
    <p class="title">
      <span><i class="fa-solid fa-apple-whole"></i></span>
      <span>請再次確認訂單內容是否正確</span>
    </p>
    <div
      class="product-panel d-flex"
      v-for="product in products"
      :key="product.id"
    >
      <div class="product-image">
        <img :src="product.image" alt="" />
      </div>
      <div class="product-info">
        <p>{{ product.name }}</p>
        <div class="d-flex justify-content-between">
          <span>NT＄{{ product.price }}</span>
          <span>X {{ product.quantity }}</span>
        </div>
      </div>
    </div>
    <p class="total">總金額：NT＄{{ totalAmount }}</p>
    <ul>
      <li>收件人姓名：{{ info.name }}</li>
      <li>聯絡電話：{{ info.phone }}</li>
      <li>寄件地址：{{ info.address }}</li>
      <li>希望交貨日期：{{ info.date }}</li>
      <li>希望交貨時間：{{ info.time }}</li>
      <li>備註：{{ info.note }}</li>
    </ul>
    <div class="button">
      <button>
        <router-link @click.native="noShowDetail" class="back" to=""
          >返回</router-link
        >
      </button>
      <button>
        <router-link @click.native="clearCart" class="checkout" to="/success">確認下單</router-link>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
    showInfo: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      products: [],
      totalAmount: 0,
    };
  },
  created() {
    this.fetchProducts();
    this.fetchTotalAmount();
  },
  destroyed(){
    console.log('d')
    localStorage.removeItem("cartList");
    this.$store.commit("setTotalCartQuantity", 0)
  },
  methods: {
    fetchProducts() {
      this.products = JSON.parse(localStorage.getItem("cartList")) || [];
    },
    fetchTotalAmount() {
      this.totalAmount = JSON.parse(localStorage.getItem("totalAmount")) || [];
    },
    noShowDetail() {
      this.$emit("close-info");
    },
    clearCart() {
      console.log('t')
      // localStorage.removeItem("cartList");
    }
  },
};
</script>

<style lang="scss" scoped>
.showInfo-container {
  width: 350px;
  background: #fff;
  border-radius: 20px;
  border: 2px rgb(247, 215, 146) solid;
  -webkit-box-shadow: 2px 10px 12px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 2px 10px 12px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 2px 10px 12px 0px rgba(0, 0, 0, 0.1);
  .title {
    color: rgb(247, 215, 146);
    padding: 10px;
    font-size: 1.5rem;
    text-align: center;
    span {
      padding: 10px;
      font-size: 1.5rem;
      font-weight: 700;
    }
    .fa-apple-whole {
      font-size: 1.5rem;
    }
  }
  .product-panel {
    border-bottom: 1px rgb(245, 229, 209) solid;
    .product-image {
      padding: 1rem;
      img {
        width: 60px;
        height: 60px;
        object-fit: cover;
      }
    }
    .product-info {
      width: 70%;
      margin: auto 0;
    }
  }
  .total {
    margin: 5px 0;
    padding: 1rem;
    border-bottom: 1px rgb(245, 229, 209) solid;
  }
  ul {
    li {
      margin: 0 0 5px 0;
      padding: 1rem;
      border-bottom: 1px rgb(245, 229, 209) solid;
      word-wrap: break-word;
    }
  }
  .button {
    width: 100%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    button {
      width: 45%;
      .back {
        display: flex;
        width: 100%;
        justify-content: center;
        border: 2px rgb(247, 215, 146) solid;
        border-radius: 40px;
        padding: 0.5rem;
        color: rgb(247, 215, 146);
        background: #fff;
        font-size: 16px;
        &:hover {
          background: #fff;
          color: rgb(247, 215, 146);
          border: 1px transparent solid;
        }
      }
      .checkout {
        display: flex;
        width: 100%;
        justify-content: center;
        border: 2px rgb(247, 215, 146) solid;
        border-radius: 40px;
        padding: 0.5rem;
        color: #fff;
        background: rgb(247, 215, 146);
        font-size: 16px;
        &:hover {
          background: #fff;
          color: rgb(247, 215, 146);
        }
      }
    }
  }
}

@media screen and (min-width: 900px) {
  .showInfo-container {
    width: 600px;
    .title {
      span {
        font-size: 2rem;
      }
      .fa-apple-whole {
        font-size: 2rem;
      }
    }
  }
}
</style>