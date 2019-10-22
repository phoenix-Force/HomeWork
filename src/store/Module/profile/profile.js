import vue from "vue"
import axios from "axios"

vue.use(axios)

const state = {
  profile_dtls:{
    dp:"blob:http://localhost:8080/c163b32d-7285-43cf-9608-dcc6e2d81d8d",
    name:"Joussonara Khatun",
    about:"loremjcncnjcjcjucjuewdcbhyhwebgcuij bgvweiuijcklbjvgrwwuejcdbvgfufuhf huhefjnwjnfuf98y89f98fhfhjmajna",
    gender:"Male",
    age:20,
    address:"chinarpark, Kolkata",
    Email:"PAradox.joe.007@gmail.com",
    mobNo:8116927786,
    altrMobNo:8617651914,
  }

}
// const mutations={
//   uploadProfile(){
//     profile_dtls={
//       dp:"../../../src/assets/s5.jpg",
//       name:"Joussonara Khatun",
//       about:"loremjcncnjcjcjucjuewdcbhyhwebgcuij bgvweiuijcklbjvgrwwuejcdbvgfufuhf huhefjnwjnfuf98y89f98fhfhjmajna",
//       gender:"Male",
//       age:20,
//       address:"chinarpark, Kolkata",
//       Email:"PAradox.joe.007@gmail.com",
//       mobNo:8116927786,
//       altrMobNo:8617651914,
//     };
//     axios.post("https://vue-http-3aefd.firebaseio.com/profileInfo.json",profile_dtls).then(res=>console.log(res)).catch(error=>console.log(error));
//   }
// }
// const actions = {
//   uploadProfile({commit}){
//     commit("uploadProfile")
//   }
// }
const getters = {
  getProfile(state){
    return (state.profile_dtls);
  }
}
export default {
  state,
  getters
}
