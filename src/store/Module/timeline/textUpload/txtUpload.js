import vue from "vue"
import axios from "axios"
vue.use(axios)

const state = {
  txt_info:{
  }
}
const mutations={
  saveData(state,dta){
    state.txt_info.id=dta.id;
    state.txt_info.txt=dta.txt;
    state.txt_info.fntSize=dta.fntSize;
    state.txt_info.fntFamily=dta.fntFamily;
    state.txt_info.fntColor=dta.fntColor;
    state.txt_info.fntStyle=dta.fntStyle;
    state.txt_info.fntDeco=dta.fntDeco;
    state.txt_info.fntWeight=dta.fntWeight;
    state.txt_info.bckColor=dta.bckColor;
    state.txt_info.time=dta.time;
    state.txt_info.like=dta.like;
    state.txt_info.unlike=dta.unlike;
    state.txt_info.comments=dta.comments;
  },
  getT(state){
    axios.get("https://vue-http-3aefd.firebaseio.com/uploads.json")
    .then(response=>{
      const data = response.data;
      let zz=[];
      for(let key in data){
        var x = data[key];

        zz.push(x);
      }
      state.txt_info = zz
    }).catch(error=>console.log(error))
  }


}
const actions = {
  setData({commit},dta){
    commit('saveData',dta);
    console.log("set data2")
  },
  getTimeline({commit}){
    commit('getT');
  }
}
const getters = {
  getTxtData(state){
    return(state.txt_info);
  }
}
export default{
  state,
  mutations,
  actions,
  getters
}
