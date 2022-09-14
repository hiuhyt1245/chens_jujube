(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-329c2d88"],{"6ee4":function(t,a,s){},a3a8:function(t,a,s){"use strict";s("6ee4")},b789:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container"},[a("h1",[t._v("購物車內容")]),t._m(0),a("section",{staticClass:"cart-list-panel"},[a("div",{staticClass:"cart-list"},t._l(t.products,(function(s){return a("div",{key:s.id,staticClass:"cart-item d-flex",on:{change:function(a){return t.onQuantityChange(s.id)}}},[a("div",[a("img",{staticClass:"product-img",attrs:{src:s.image,alt:""}})]),a("div",{staticClass:"cart-body d-flex"},[a("div",{staticClass:"cart-description"},[a("p",{staticClass:"product-name"},[t._v(t._s(s.name))]),a("p",{staticClass:"product-specification"},[t._v(t._s(s.specification))]),a("p",{staticClass:"product-specification"},[t._v(" "+t._s(s.subSpecification)+" ")])]),a("p",{staticClass:"cart-price"},[t._v("NT$"+t._s(s.price)+" 元")]),a("div",{staticClass:"cart-quantity d-flex justify-content-around"},[a("input",{directives:[{name:"model",rawName:"v-model",value:s.quantity,expression:"product.quantity"}],staticClass:"quantity",attrs:{type:"number",min:"1",value:"0",inputmode:"numeric"},domProps:{value:s.quantity},on:{change:t.cartQuantity,input:function(a){a.target.composing||t.$set(s,"quantity",a.target.value)}}}),a("div",{on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteItem(s.id)},change:t.cartQuantity}},[a("i",{staticClass:"fa-solid fa-trash-can"})])]),a("div",{staticClass:"cart-subtotal"},[a("p",{staticClass:"subtotal"},[a("span",[t._v("小計：")]),t._v("NT$ "+t._s(s.quantity*s.price)+" ")])])])])})),0)]),0===t.totalCartQuantity?a("div",{staticClass:"no-goods"},[a("h2",[t._v("您的購物車尚無商品。")])]):t._e(),a("section",{staticClass:"cart-total-panel"},[a("div",{staticClass:"cart-total"},[0!==t.totalCartQuantity?a("p",{staticClass:"freight"},[t._v(" 運費：NT$ "+t._s(t.freight)+" ")]):t._e(),a("p",{staticClass:"total"},[t._v("總金額：NT$ "+t._s(t.total))])])]),0!==t.totalCartQuantity?a("div",{staticClass:"button"},[a("button",{staticClass:"haveProduct"},[a("router-link",{staticClass:"back",attrs:{to:"/products"}},[t._v("← 繼續購物")])],1),a("button",{staticClass:"haveProduct"},[a("router-link",{staticClass:"checkout",attrs:{to:"/checkout"}},[t._v("去買單 →")])],1)]):t._e(),0===t.totalCartQuantity?a("div",{staticClass:"button"},[a("button",{staticClass:"noProduct"},[a("router-link",{staticClass:"backProduct",attrs:{to:"/products"}},[t._v("去逛逛")])],1)]):t._e()])},o=[function(){var t=this,a=t._self._c;return a("section",{staticClass:"cart-head-panel"},[a("div",{staticClass:"cart-list"},[a("div",{staticClass:"cart-item"},[a("p",[t._v("商品名稱")]),a("p",[t._v("價格")]),a("p",[t._v("數量")]),a("p",[t._v("小計")])])])])}],c=s("2fa3"),e=s("3d20"),r=s.n(e),n={data(){return{products:[],freight:120,totalAmount:0,totalCartQuantity:0}},created(){this.fetchProducts(),this.cartQuantity()},methods:{fetchProducts(){this.products=JSON.parse(localStorage.getItem("cartList"))||[]},deleteItem(t){const a=this.products.findIndex(a=>a.id===t);-1!==a&&r.a.fire({title:"確定刪除此商品?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes!"}).then(s=>{if(console.log(s),1==s.value)r.a.fire("刪除!","此商品刪除成功.","success"),this.products.splice(a,1),localStorage.setItem("cartList",JSON.stringify(this.products)),this.totalCartQuantity=0,this.products.forEach(t=>{this.totalCartQuantity+=Number(t.quantity)}),this.$store.commit("setTotalCartQuantity",this.totalCartQuantity),this.$store.commit("getTotalCartQuantity");else{const a=this.products.find(a=>a.id===t);a.quantity=1,localStorage.removeItem("cartList");const s=JSON.parse(localStorage.getItem("cartList"))||[];this.products.map(t=>{s.push(t)}),localStorage.setItem("cartList",JSON.stringify(s)),this.totalCartQuantity=0,s.forEach(t=>{this.totalCartQuantity+=Number(t.quantity)}),this.$store.commit("setTotalCartQuantity",this.totalCartQuantity)}})},onQuantityChange(t){const a=this.products.find(a=>a.id===t);0==a.quantity?this.deleteItem(a.id):a.quantity==!Number&&c["a"].fire({icon:"warning",title:"請填寫數量"}),localStorage.removeItem("cartList");const s=JSON.parse(localStorage.getItem("cartList"))||[];this.products.map(t=>{s.push(t)}),localStorage.setItem("cartList",JSON.stringify(s))},cartQuantity(){this.totalCartQuantity=0,this.products.forEach(t=>{this.totalCartQuantity+=Number(t.quantity)}),this.$store.commit("setTotalCartQuantity",this.totalCartQuantity)}},computed:{total(){return 0===this.totalCartQuantity?0:(this.totalAmount=0,this.products.forEach(t=>{this.totalAmount+=t.quantity*t.price}),this.totalAmount=this.totalAmount+this.freight,localStorage.setItem("totalAmount",JSON.stringify(this.totalAmount)),this.totalAmount)}}},u=n,l=(s("a3a8"),s("2877")),d=Object(l["a"])(u,i,o,!1,null,"407a24cc",null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-329c2d88.e4fecf1e.js.map