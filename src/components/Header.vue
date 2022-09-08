<template>
  <header>
    <router-link to="/" class="navbar-brand">
      <img src="../assets/img/logo.jpg" alt="" />
    </router-link>
    <input type="checkbox" class="navbar-toggle d-none" id="navbar-toggle"
    v-model="toggledNav" />
    <label class="navbar-toggle-hamburger" for="navbar-toggle">
      <span class="hamburger">
        <i class="fa-solid fa-bars fa-2x"></i>
      </span>
    </label>
    <label class="navbar-toggle-close" for="navbar-toggle">
      <span class="x">
        <i class="fa-solid fa-x fa-2x"></i>
      </span>
    </label>

    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/products" class="nav-link">PRODUCTS</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">ABOUT</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/news" class="nav-link">NEWS</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">CONTACT US</router-link>
        </li>
      </ul>
    </nav>

    <nav>
      <ul class="nav-list-cart">
        <li class="nav-item-cart">
          <router-link to="/cart" class="nav-link">
            <i class="fa-solid fa-cart-shopping fa-lg"></i>
            <div class="cart-quantity">
              <span>{{ totalCartQuantity }}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  data(){
    return{
      toggledNav: false
    }
  },
  created() {
    this.$store.commit("getTotalCartQuantity");
  },
  computed: {
    ...mapState(["totalCartQuantity"]),
  },
  watch: {
    '$route' () {
      this.toggledNav = false
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  color: #4d4d4d;
  background: #f6f4ed;
  position: fixed;
  z-index: 999;
  height: 65px;
  width: 100%;
  top: 0px;
  // position: relative;
  // background: #ffffff;
  text-align: center;
  .hamburger {
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: 5%;
    transform: translate(-50%, -50%);
  }
  .navbar-toggle-close {
    position: absolute;
    cursor: pointer;
    top: 50%;
    left: 5%;
    transform: translate(-50%, -50%);
    display: none;
  }
  img {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // align-items: center;
    // justify-content: center;
  }
  /*~選同層元素*/
  .navbar-toggle:checked ~ .navbar-toggle-close {
    display: block;
  }
  .navbar-toggle:checked ~ .navbar-toggle-hamburger {
    display: none;
  }

  .navbar-toggle:checked ~ .nav{
    // display: block;
    background: #f6f4ed;
    transform: scale(1, 1);
    .nav-item {
      opacity: 1;
      transition: opacity 0.2s ease-out 0.15s;
    }
  }

  /*~選.nav 所以寫.nav*/
  .nav {
    position: absolute;
    top: 100%;
    width: 100%;
    transition: transform 0.2s ease-out;
    transform-origin: top;
    transform: scale(1, 0);
    .nav-item {
      opacity: 0;
      :hover {
          color: #b6b4ae;  
        }
    }
    .nav-link {
      font-size: 1.2rem;
      line-height: 50px;
      
    }
  }
  nav {
    .nav-item-cart {
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translate(-50%, -50%);
      .cart-quantity {
        position: absolute;
        top: -10px;
        right: -42%;
        background-color: rgb(243, 122, 122);
        height: 16px;
        width: 16px;
        border-radius: 50%;
        span {
          position: absolute;
          width: 100%;
          height: 100%;
          top: -1px;
          right: 0%;
          font-size: 12px;
          color: white;
        }
      }
    }
  }
}
@media screen and (min-width: 900px) {
  header {
    height: 80px;
    display: grid;
    grid-template-columns: 100px auto minmax(600px, 3fr) 40px 100px;
    img {
      width: 75px;
      height: 75px;
      grid-column: 2/3;
    }
    .hamburger,
    .x {
      display: none;
    }
    .nav {
      all: unset;
      grid-column: 3/4;
      
      .nav-list {
        all: unset;
        height: 100%;
        display: grid;
        grid-auto-flow: column;
        justify-content: end;
        align-items: center;
        grid-gap: 2rem;
      }
      .nav-item {
        opacity: 1;
        :hover {
          border-bottom: 1.5px solid #b6b4ae;
          padding-bottom: 0.4rem;
          
        }
      }
    }
  }
}
</style>