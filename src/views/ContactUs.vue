<template>
  <div class="container">
    <nav>
      <ul class="navgation d-flex">
        <li class="navgation-item">
          <router-link to="/" class="navgation-link">HOME </router-link>
          <span class="">/</span>
        </li>
        <li class="navgation-item">
          <router-link to="/contact" class="navgation-link"
            >CONTACT US
          </router-link>
        </li>
      </ul>
    </nav>

    <section>
      <h1>聯繫我們</h1>
      <form id="contact_form" ref="form" @submit.prevent="sendEmail">
        <div class="title-name d-flex justify-content-between mt-8">
          <div class="form-row title-wrapper d-flex flex-column">
            <label for="" class="mb-2">稱謂</label>
            <select
              class="select-wrapper"
              name="title"
              id="a-type"
              v-model="title"
              required
            >
              <option class="select-title" value="" disabled selected>
                稱謂
              </option>
              <option value="male">先生</option>
              <option value="femail">小姐</option>
            </select>
          </div>
          <div class="form-row name-wrapper d-flex flex-column">
            <label for="" class="mb-2">姓名</label>
            <input
              class="name"
              name="name"
              id="name"
              type="text"
              placeholder="請輸入姓名"
              v-model="name"
              required
            />
          </div>
        </div>

        <div class="form-row d-flex flex-column mt-8">
          <label for="" class="mb-2">主旨</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="請輸入電子郵件"
            v-model="subject"
            required
          />
        </div>

        <div class="form-row d-flex flex-column mt-8">
          <label for="" class="mb-2">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="請輸入電子郵件"
            v-model="email"
            required
          />
        </div>

        <div class="form-row d-flex flex-column mt-8">
          <label for="" class="mb-2">電話</label>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="請輸入行動電話"
            v-model="phone"
            required
          />
        </div>

        <div class="form-row d-flex flex-column mt-8">
          <label for="" class="mb-2">詢問內容</label>
          <textarea
            id="note"
            name="message"
            class="scrollbar"
            rows="5"
            v-model="message"
            required
          ></textarea>
        </div>

        <button>
          <div class="button" :disabled="isProcessing">
            {{ isProcessing ? "發送中" : "發送" }}
          </div>
        </button>
      </form>
    </section>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
import { Toast } from "./../utils/helpers"


export default {
  data() {
    return {
      title: "",
      name: "",
      subject:"",
      email: "",
      phone: "",
      message: "",
      isProcessing: false,
    };
  },
  methods: {
    sendEmail() {
      this.isProcessing = true;
      emailjs
        .sendForm(
          "service_ID",
          "contact_form",
          this.$refs.form,
          "6fUuRFmIvC7jCoayW"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            Toast.fire({
              icon: "success",
              title: "發送成功",
            });
            this.title = "";
            this.name = "";
            this.subject = "";
            this.email = "";
            this.phone = "";
            this.message = "";
          },
          (error) => {
            console.log("FAILED...", error.text);
            Toast.fire({
              icon: "error",
              title: "無法發送訊息，請稍後再試",
            });
            this.isProcessing = false;
          }
        );
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../assets/scss/application.scss";
.container {
  color: #4d4d4d;
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
    // border:1px red solid;
    width: 90%;
    margin: auto;
    h1 {
      font-size: 2rem;
    }
    .title-name {
      .title-wrapper {
        width: 25%;
        .select-wrapper {
          height: 45px;
          @extend %input-style;
          &:invalid {
            color: #b6b4ae;
          }
        }
      }
      .name-wrapper {
        width: 70%;
        .name {
          height: 45px;
          @extend %input-style;
        }
        ::placeholder {
          color: #b6b4ae;
        }
      }
    }
    .form-row {
      // border:1px red solid;
      ::placeholder {
        color: #b6b4ae;
      }
      #email,
      #phone,
      #subject {
        height: 45px;
        @extend %input-style;
      }
      .scrollbar {
        resize: none;
        overflow-y: scroll;
        @extend %input-style;
        &::-webkit-scrollbar {
          width: 6px;
        }
        // bar的樣式
        &::-webkit-scrollbar-thumb {
          border-radius: 3px;
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
  button {
    width: 100%;
    margin: 2rem auto;
    text-align: center;
    .button {
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

@media screen and (min-width: 900px) {
  .container {
    width: 90%;
    margin: auto;
    section {
      h1 {
        font-size: 3rem;
      }
    }
    button {
      .button {
        width: 400px;
        margin: 0 auto 3rem auto;
      }
    }
  }
}
</style>