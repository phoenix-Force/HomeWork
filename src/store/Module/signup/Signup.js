import vue from "vue"
import axios from "axios"
vue.use(axios)
const state = {
  state:{
    userinfo:{
      name:'',
      username:'',
      email:'',
      dob:'',
      password:'',
      country:'',
      mobileNumber:''
    }
  }
}
const mutations={
  signup(state,dtls){
    state.name = dtls.name;
    state.username = dtls.username;
    state.email = dtls.email;
    state.dob = dtls.dob;
    state.password = dtls.password;
    state.country = dtls.country;
    state.mobileNumber = dtls.mobileNumber;
  },
  upload(state){
    axios.post("https://vue-http-3aefd.firebaseio.com/user.json",state).then(res=>console.log(res)).catch(error=>console.log(error));
  }
}
const actions={
  signupData({commit}, dtls){
    commit('signup',dtls);
    commit("uplaod")
  }
}
export default{
  state,
  mutations,
  actions
}



