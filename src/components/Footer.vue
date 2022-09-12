<template>
  <div class="container">
    <div class="official-account">
      <ul class="official-account-list">
        <li class="fb">
          <a href="https://www.facebook.com/chensjujube/" target="_blank">
            <i class="fa-brands fa-facebook-f"></i>
            <span>Official Facebook</span>
          </a>
        </li>
        <li class="ig">
          <a href="https://www.instagram.com/chens_jujube/" target="_blank">
            <i class="fa-brands fa-instagram"></i>
            <span>Official Instagram</span>
          </a>
        </li>
        <li class="line">
          <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=023ffjhz" target="_blank">
            <i class="fa-brands fa-line"></i>
            <span>Official Line</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="logo">
      <img class="logo-img" src="../assets/img/logo-black.png" alt="" />
    </div>
    <p class="copyright">
      <small>© 蜜棗晨 All Rights Reserved.</small>
    </p>
  </div>
</template> 

<style lang="scss" scoped>
.container {
  background: #354345;
  color: #d6d4cd;
  height: 400px;
  .official-account {
    .official-account-list {
      display: flex;
      gap: 2rem;
      justify-content: center;
      padding: 2.5rem;
      a {
        .fa-facebook-f,
        .fa-instagram,
        .fa-line {
          margin-top: 2rem;
          font-size: 2rem;
        }
        span {
          display: none;
        }
      }
    }
  }
  .logo {
    .logo-img {
      width: 90px;
      height: 90px;
      margin: 2rem auto;
    }
  }
  .copyright {
    text-align: center;
    padding-top: 2rem;
    small {
      font-weight: 300;
      font-size: 0.5rem;
    }
  }
}

@media screen and (min-width: 900px) {
  .container {
    .official-account {
      .official-account-list {
        a {
          margin-top: 2rem;
          display: flex;
          .fa-facebook-f,
          .fa-instagram,
          .fa-line {
            margin: 0 .5rem;
          }
          span {
            display: block;
            display: flex;
            align-items: center;
          }
        }
      }
    }
    .logo {
      .logo-img {
        width: 120px;
        height: 120px;
      }
    }
  }
}
</style>