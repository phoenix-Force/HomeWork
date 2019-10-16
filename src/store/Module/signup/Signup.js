
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
  }
}
const actions={
  signupData({commit}, dtls){
    commit('signup',dtls)
  }
}
export default{
  state,
  mutations,
  actions
}



