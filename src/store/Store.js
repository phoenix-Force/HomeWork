import vue from 'vue'
import Vuex from "vuex"
import profile from "./Module/profile/profile.js"
import signup from "./Module/signup/Signup.js"
vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    profile,
    signup
  }

})
// export const store = new Vuex.Store({
//
//     activeIndex: '1',
//     activeIndex2: '1',
//     dialogFormVisible:false,
//     outerVisible:false,
//     innerVisible:false,
//     user_name:'',
//     cls:false,
//     form: {
//       name: '',
//       user_name:'',
//       password:''
//     }
//   },
//   getters:{

//   }








// })