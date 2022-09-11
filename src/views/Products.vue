<template>
  <div class="container">
    <nav>
      <ul class="navgation d-flex">
        <li class="navgation-item">
          <router-link to="/" class="navgation-link">HOME </router-link>
          <span class="">/</span>
        </li>
        <li class="navgation-item">
          <router-link to="/products" class="navgation-link"
            >PRODUCTS
          </router-link>
        </li>
      </ul>
    </nav>

    <section>
      <h1 v-scrollanimation>全部商品</h1>
      <div class="card-panel">
        <div class="card" v-for="product in products" :key="product.id">
          <img :src="product.image" class="product-img" alt="" />
          <div class="card-body">
            <div class="description">
              <p class="product-name">{{ product.name }}</p>
              <p class="product-price">{{ product.specification }}</p>
              <p class="product-price">{{ product.subSpecification }}</p>
              <p class="product-price">NT${{ product.price }} 元</p>
            </div>
            <div class="control-panel d-flex justify-content-around">
              <input
                type="number"
                min="0"
                value="0"
                inputmode="numeric"
                v-model="product.quantity"
                class="quantity"
                @focus="clear"
                @blur="doneEdit"
              />
              <button
                class="add-cart"
                @click.stop.prevent="addCart(product.id)"
              >
                加入購物車
              </button>
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
import image400 from "../assets/img/400.jpg";
import image150 from "../assets/img/img12.jpg";
import { Toast } from "./../utils/helpers";

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
    {
      id: 400,
      name: "雪麗棗 3A",
      image: image400,
      specification: "特級(每顆平均3.0-3.4兩)",
      subSpecification: "顆數: 24 ± 1",
      price: 400,
      quantity: 0,
    },
    {
      id: 150,
      name: "柴燒蜜棗糖",
      image: image150,
      specification: "頂級蜜棗製作",
      subSpecification: "顆數: 10 ± 1",
      price: 150,
      quantity: 0,
    },
  ],
};

export default {
  data() {
    return {
      products: [],
      totalCartQuantity: 0,
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      this.products = dummyData.products;
    },
    addCart(productId) {
      const product = this.products.find((product) => product.id === productId);
      const cartList = JSON.parse(localStorage.getItem("cartList")) || [];
      const productIndex = cartList.findIndex(
        (product) => product.id === productId
      );

      if (product.quantity <1 || product.quantity[0] == 0 || !Number) {
        Toast.fire({
          icon: "warning",
          title: "請填寫正確數量",
        });
        product.quantity = 0
      } else {
        if (!cartList[productIndex]) {
          cartList.push(product);
          localStorage.setItem("cartList", JSON.stringify(cartList));
        } else {
          cartList[productIndex].quantity =
            Number(cartList[productIndex].quantity) + Number(product.quantity);
          localStorage.setItem("cartList", JSON.stringify(cartList));
        }

        this.totalCartQuantity = 0;
        cartList.forEach((product) => {
          this.totalCartQuantity += Number(product.quantity);
        });
        this.$store.commit("setTotalCartQuantity", this.totalCartQuantity);
        Toast.fire({
          icon: "success",
          title: `商品： ${product.name}， 數量：${product.quantity}，成功加入購物車!`,
        });
        product.quantity = 0;
      }

      // this.products = this.products.map((product) => {
      //   if (product.id !== productId) {
      //     return product;
      //   } else {
      //     if (product.quantity === 0) {
      //       console.log(product.quantity);
      //       return;
      //     } else {
      //       alert(
      //         `商品： ${product.name}， 數量：${product.quantity}，成功加入購物車!`
      //       );
      //       product.quantity = 0;
      //       console.log(product);
      //     }
      //   }
      // });
    },
    clear(e) {
      if (e.target.value==0){
        e.target.value=''
      } 
    },
    doneEdit(e){
      if (e.target.value == ""){
        e.target.value=0
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  color: #4d4d4d;
  nav {
    width: 80%;
    margin: 9rem auto 3rem auto;
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
    margin: 0 auto 5rem auto;
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
        margin: 1rem 0;
        .quantity {
          width: 25%;
          font-size: 1rem;
          color: #b6b4ae;
          border: 1px solid #b6b4ae;
          border-radius: 40px;
          padding: 0.5em;
          &:hover,
          &:focus {
            border: 1px solid #354345;
          }
        }
        .add-cart {
          width: 60%;
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