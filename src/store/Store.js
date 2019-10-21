import vue from 'vue'
import Vuex from "vuex"
import profile from "./Module/profile/profile.js"
import signup from "./Module/signup/Signup.js"
// import uploads from "./Module/timeline/Uploads.js"
import uploads from "./Module/timeline/textUpload/txtUpload.js"
vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    profile,
    signup,
    uploads
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
