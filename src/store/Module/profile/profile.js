const state = {
  profile_dtls:{
    dp:"../../../src/assets/s5.jpg",
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
const getters = {
  getProfile(state){
    return (state.profile_dtls);
  }
}
export default {
  state,
  getters
}
