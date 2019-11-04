import axios from "axios";
const state = {
  profile_dtls:{
    // dp:"blob:http://localhost:8080/c163b32d-7285-43cf-9608-dcc6e2d81d8d",
    // name:"Joussonara Khatun",
    // about:"loremjcncnjcjcjucjuewdcbhyhwebgcuij bgvweiuijcklbjvgrwwuejcdbvgfufuhf huhefjnwjnfuf98y89f98fhfhjmajna",
    // gender:"Male",
    // age:20,
    // address:"chinarpark, Kolkata",
    // Email:"PAradox.joe.007@gmail.com",
    // mobNo:8116927786,
    // altrMobNo:8617651914,
  }
}
const mutations={
  setProfile(state){
    axios.get("https://vue-http-3aefd.firebaseio.com/profile_dtls.json")
    .then(response=>{
      let info={};
      let data = response.data;
      // console.log(data);
      info.dp = data.dp;
      info.name = data.name;
      info.about = data.about;
      info.gender = data.gender;
      info.age = data.age;
      info.address = data.address;
      info.email = data.email;
      info.mobNo= data.mobNo;
      info.altrMobNo = data.altrMobNo;
      state.profile_dtls = info;
    })
    .catch(error=>console.log(error));
  }
}
const actions={
  profileSet({commit}){
    commit('setProfile');
  }
}

const getters = {
  getProfile(state){
    return (state.profile_dtls);
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
