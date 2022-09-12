<template>
  <div class="container">
    <h1>購物車內容</h1>

    <section class="cart-head-panel">
      <div class="cart-list">
        <div class="cart-item">
          <p>商品名稱</p>
          <p>價格</p>
          <p>數量</p>
          <p>小計</p>
        </div>
      </div>
    </section>

    <section class="cart-list-panel">
      <div class="cart-list">
        <div
          class="cart-item d-flex"
          v-for="product in products"
          :key="product.id"
          @change="onQuantityChange(product.id)"
        >
          <div>
            <img :src="product.image" class="product-img" alt="" />
          </div>
          <div class="cart-body d-flex">
            <div class="cart-description">
              <p class="product-name">{{ product.name }}</p>
              <p class="product-specification">{{ product.specification }}</p>
              <p class="product-specification">
                {{ product.subSpecification }}
              </p>
            </div>

            <p class="cart-price">NT${{ product.price }} 元</p>

            <div class="cart-quantity d-flex justify-content-around">
              <input
                type="number"
                min="1"
                value="0"
                inputmode="numeric"
                v-model="product.quantity"
                class="quantity"
                @change="cartQuantity"
              />
              <div
                @click.stop.prevent="deleteItem(product.id)"
                @change="cartQuantity"
              >
                <i class="fa-solid fa-trash-can"></i>
              </div>
            </div>

            <div class="cart-subtotal">
              <p class="subtotal">
                <span>小計：</span>NT$ {{ product.quantity * product.price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="no-goods" v-if="totalCartQuantity === 0">
      <h2>您的購物車尚無商品。</h2>
    </div>

    <section class="cart-total-panel">
      <div class="cart-total">
        <p class="freight" v-if="totalCartQuantity !== 0">
          運費：NT$ {{ freight }}
        </p>
        <p class="total">總金額：NT$ {{ total }}</p>
      </div>
    </section>

    <div class="button" v-if="totalCartQuantity !== 0">
      <button class="haveProduct">
        <router-link class="back" to="/products">← 繼續購物</router-link>
      </button>
      <button class="haveProduct">
        <router-link class="checkout" to="/checkout">去買單 →</router-link>
      </button>
    </div>

    <div class="button" v-if="totalCartQuantity === 0">
      <button class="noProduct">
        <router-link class="backProduct" to="/products">去逛逛</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { Toast } from "./../utils/helpers";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      products: [],
      freight: 120,
      totalAmount: 0,
      totalCartQuantity: 0,
    };
  },
  created() {
    this.fetchProducts();
    this.cartQuantity();
  },
  methods: {
    fetchProducts() {
      this.products = JSON.parse(localStorage.getItem("cartList")) || [];
    },
    deleteItem(productId) {
      const productIndex = this.products.findIndex(
        (product) => product.id === productId
      );
      if (productIndex === -1) return;

      Swal.fire({
        title: "確定刪除此商品?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        console.log(result);
        if (result.value == true) {
          Swal.fire("刪除!", "此商品刪除成功.", "success");
          this.products.splice(productIndex, 1);
          localStorage.setItem("cartList", JSON.stringify(this.products));
          this.totalCartQuantity = 0;
          this.products.forEach((product) => {
            this.totalCartQuantity += Number(product.quantity);
          });
          this.$store.commit("setTotalCartQuantity", this.totalCartQuantity);
          this.$store.commit("getTotalCartQuantity");
        } else {
          const product = this.products.find(
            (product) => product.id === productId
          );
          product.quantity = 1;
          localStorage.removeItem("cartList");
          const cartList = JSON.parse(localStorage.getItem("cartList")) || [];
          this.products.map((product) => {
            cartList.push(product);
          });
          localStorage.setItem("cartList", JSON.stringify(cartList));

          this.totalCartQuantity = 0;
          cartList.forEach((product) => {
            this.totalCartQuantity += Number(product.quantity);
          });
          this.$store.commit("setTotalCartQuantity", this.totalCartQuantity);
        }
      });

      // console.log(this.totalCartQuantity);
      // this.totalCartQuantity -= this.products[productIndex].quantity;
      // console.log(this.totalCartQuantity);
      // this.$store.commit("setTotalCartQuantity", this.totalCartQuantity);

      // this.products = this.products.filter(
      //   product=> product.id !== productId
      // )
    },
    onQuantityChange(productId) {
      const product = this.products.find((product) => product.id === productId);

      if (product.quantity == 0) {
        this.deleteItem(product.id);
      } else if (product.quantity == !Number) {
        Toast.fire({
          icon: "warning",
          title: "請填寫數量",
        });
      }
      localStorage.removeItem("cartList");
      const cartList = JSON.parse(localStorage.getItem("cartList")) || [];
      this.products.map((product) => {
        cartList.push(product);
      });
      localStorage.setItem("cartList", JSON.stringify(cartList));
    },
    cartQuantity() {
      this.totalCartQuantity = 0;
      this.products.forEach((product) => {
        this.totalCartQuantity += Number(product.quantity);
      });

      this.$store.commit("setTotalCartQuantity", this.totalCartQuantity);
      // return this.totalCartQuantity;
    },
  },
  /* eslint-disable */
  computed: {
    total() {
      if (this.totalCartQuantity === 0) {
        return 0;
      }
      this.totalAmount = 0;
      this.products.forEach((product) => {
        this.totalAmount += product.quantity * product.price;
      });
      this.totalAmount = this.totalAmount + this.freight
      localStorage.setItem("totalAmount", JSON.stringify(this.totalAmount))
      return this.totalAmount
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 90%;
  margin: 0 auto;
  color: #4d4d4d;
  h1 {
    margin-top: 9rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #b6b4ae;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
    text-align: center;
  }
  .cart-head-panel {
    display: none;
  }
  .cart-list-panel {
    .cart-list {
      .cart-item {
        padding-top: 1rem;
        border-bottom: 1px solid #b6b4ae;
        margin: auto;
        .product-img {
          margin: 1rem;
          width: 10rem;
          height: 10rem;
          object-fit: cover;
        }
        .cart-body {
          flex-direction: column;
          width: 100%;
          .cart-description {
            .product-name {
              display: flex;
              justify-content: start;
              font-size: 1rem;
              line-height: 2rem;
            }
            .product-specification {
              display: flex;
              justify-content: start;
              font-size: 1rem;
              font-weight: 300;
              line-height: 2rem;
              opacity: 0.7;
            }
          }
          .cart-price {
            display: flex;
            justify-content: start;
            font-size: 1rem;
            font-weight: 300;
            line-height: 2rem;
          }
          .cart-quantity {
            display: flex;
            justify-content: end;
            .quantity {
              width: 80px;
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
            .fa-trash-can {
              margin: 0.8rem 0 0.8rem 0.8rem;
              font-size: 1.2rem;
              color: rgb(243, 122, 122);
            }
          }
          .cart-subtotal {
            .subtotal,
            span {
              display: flex;
              justify-content: end;
              font-size: 1rem;
              font-weight: 300;
              line-height: 2rem;
            }
          }
        }
      }
    }
  }
  .no-goods {
    h2 {
      font-size: 1.5rem;
      text-align: center;
      margin: 2rem;
    }
  }
  .cart-total-panel {
    .cart-total {
      margin: 2rem 0 3rem 0;
      text-align: end;
      .freight {
        font-size: 1rem;
        font-weight: 300;
        line-height: 2rem;
      }
      .total {
        font-size: 1.5rem;
        line-height: 3rem;
      }
    }
  }
  .button {
    width: 100%;
    margin: 0 auto 5rem auto;
    display: flex;
    justify-content: space-between;
    // text-align: center;
    .haveProduct {
      width: 45%;
      .back {
        display: flex;
        width: 100%;
        justify-content: center;
        border: 2px #354345 solid;
        border-radius: 40px;
        padding: 0.9rem;
        color: #354345;
        background: #fff;
        font-size: 16px;
        &:hover {
          background: #fff;
          color: #354345;
          border: 2px transparent solid;
        }
      }
      .checkout {
        display: flex;
        width: 100%;
        justify-content: center;
        border: 2px #354345 solid;
        border-radius: 40px;
        padding: 0.9rem;
        color: #fff;
        background: #354345;
        font-size: 16px;
        &:hover {
          background: #fff;
          color: #354345;
        }
      }
    }
    .noProduct {
      margin: 0 auto;
      width: 50%;
      .backProduct {
        display: flex;
        width: 100%;
        justify-content: center;
        border: 2px #354345 solid;
        border-radius: 40px;
        padding: 0.9rem;
        color: #fff;
        background: #354345;
        font-size: 16px;
        &:hover {
          background: #fff;
          color: #354345;
        }
      }
    }
  }
}

@media screen and (min-width: 900px) {
  .container {
    width: 800px;
    h1 {
      font-size: 2.5rem;
      border: unset;
    }
    .cart-head-panel {
      display: block;
      padding-bottom: 1rem;
      border-bottom: 1px #b6b4ae solid;
      .cart-list {
        .cart-item {
          display: grid;
          grid-template-columns: 44.5% 18.5% 18.5% 18.5%;
          p {
            margin: auto;
            font-size: 1.1rem;
          }
        }
      }
    }
    .cart-list-panel {
      .cart-list {
        .cart-item {
          padding-bottom: 1rem;
          .product-img {
            width: 8rem;
            height: 8rem;
          }
          .cart-body {
            flex-direction: row;

            .cart-description {
              width: 35%;
              margin: auto;
            }
            .cart-price {
              width: 25%;
              margin: auto;
              display: flex;
              justify-content: center;
            }
            .cart-quantity {
              width: 25%;
              margin: auto;
              display: flex;
              justify-content: center;
            }
            .cart-subtotal {
              width: 25%;
              margin: auto;
              display: flex;
              justify-content: center;
              span {
                display: none;
              }
            }
          }
        }
      }
    }
    .cart-total-panel {
      margin-right: 3rem;
    }
  }
}
</style>