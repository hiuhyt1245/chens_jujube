<template>
  <div class="container">
    <h1>收件人資訊</h1>
    <section class="checkout-form">
      <div class="checkout-information">
        <div class="name-phone">
          <div class="form-row name-wrapper d-flex flex-column mt-8">
            <label for="" class="mb-2">收件人姓名</label>
            <input
              class="name"
              name="name"
              id="name"
              type="text"
              placeholder="請輸入姓名"
              v-model="info.name"
              required
            />
          </div>
          <div class="form-row phone-number-wrapper d-flex flex-column mt-8">
            <label for="" class="mb-2">聯絡電話</label>
            <input
              id="phone"
              name="phine"
              type="text"
              placeholder="請輸入行動電話"
              v-model="info.phone"
              required
            />
          </div>
        </div>
        <div class="form-row address-wrapper d-flex flex-column mt-8">
          <label for="" class="mb-2">寄送地址</label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="請輸入地址"
            v-model="info.address"
            required
          />
        </div>

        <div class="form-row delivery-date-wrapper d-flex flex-column mt-8">
          <label for="" class="mb-2">希望交貨日期</label>
          <input
            id="date"
            name="date"
            type="date"
            v-model="info.date"
          />
        </div>
        <div class="form-row delivery-time-wrapper d-flex flex-column mt-8">
          <label for="" class="mb-2">希望交貨時間</label>
          <select
            class="select-wrapper"
            name="time"
            id="a-type"
            v-model="info.time"
          >
            <option class="select-title" value="" disabled selected>
              未指定
            </option>
            <option value="moring">早上</option>
            <option value="afternoon">下午</option>
          </select>
        </div>
        <div class="form-row remark-wrapper d-flex flex-column mt-8">
          <label for="" class="mb-2">備註</label>
          <textarea
            id="note"
            name="note"
            class="scrollbar"
            rows="4"
            placeholder="如果您有其他需求，請在此輸入"
            v-model="info.note"
          ></textarea>
        </div>
        <p>
          *如果您沒有指定交貨日期，16:00 之前下的訂單通常會在 3 個工作日內發貨。
        </p>
      </div>
    </section>
    <div class="button">
      <button :disabled="isProcessing">
        <router-link class="back" to="/cart">← 返回</router-link>
      </button>
      <button :disabled="isProcessing">
        <router-link class="checkout" @click.native="showDetail" to="/checkout"
          >下單 →</router-link
        >
      </button>
    </div>
    <div class="showInfo" v-if="showInfo">
      <OrderInfo :info="info" :showInfo="showInfo" @close-info="closeInfo" />
    </div>
  </div>
</template>


<script>
import OrderInfo from "../components/OrderInfo.vue";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    OrderInfo,
  },
  data() {
    return {
      info: {
        name: "",
        phone: "",
        address: "",
        date: "",
        time: "",
        note: "",
      },
      showInfo: false,
      isProcessing: false
    };
  },
  methods: {
    showDetail() {
      if (!this.info.name) {
        Toast.fire({
          icon: "warning",
          title: "請填寫收件人姓名",
        });
        return;
      } else if (!this.info.phone) {
        Toast.fire({
          icon: "warning",
          title: "請填寫聯絡電話",
        });
        return;
      }
      else if (!this.info.address) {
        Toast.fire({
          icon: "warning",
          title: "請填寫寄送地址",
        });
        return;
      }
      this.showInfo = true;
      this.isProcessing = true;
    },
    closeInfo() {
      this.showInfo = false;
      this.isProcessing = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/application.scss";

.container {
  position: relative;
  margin: 9rem auto 5rem auto;
  width: 80%;
  h1 {
    padding-bottom: 2rem;
    border-bottom: 1px solid #b6b4ae;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
    text-align: center;
  }
  section {
    background: #f6f4ed;
    margin-top: 1.5rem;
    padding: 0.5rem 2rem 2rem 2rem;
    .checkout-information {
      .form-row {
        ::placeholder {
          color: #b6b4ae;
        }
        #name,
        #phone,
        #address,
        #date,
        #a-type {
          height: 45px;
          @extend %input-style;
          &:invalid {
            color: #b6b4ae;
          }
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
  }
  p {
    font-size: 0.8rem;
    font-weight: 300;
    // opacity: .5;
    margin-top: 1rem;
  }
  .button {
    width: 100%;
    margin: 2rem auto 5rem auto;
    display: flex;
    justify-content: space-between;
    // text-align: center;
    button {
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
  }
  .showInfo {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    
  }
}

@media screen and (min-width: 900px) {
  .container {
// border: 1px red solid;
    width: 800px;
    h1 {
      font-size: 2.5rem;
    }
    section {
      .checkout-information {
        .name-phone {
          display: flex;
          justify-content: space-between;
          .name-wrapper {
            width: 35%;
          }
          .phone-number-wrapper {
            width: 60%;
          }
        }
      }
    }
  }
}
</style>