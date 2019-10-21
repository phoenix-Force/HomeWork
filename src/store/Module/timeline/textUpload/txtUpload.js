import vue from "vue"
import axios from "axios"
vue.use(axios)

const state = {
  txt_info:{
    id:1,
    txt:'',
    fntSize:20,
    fntFamily:'verdana',
    fntColor:'rgba(0,0,0,1)',
    fntStyle:'',
    fntDeco:'',
    fntWeight:'',
    bckColor:'rgb(204,212,255)',
    time:'',
    like:20,
    unlike:'',
    comments:''
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
    console.log("set data3")
  }

}
const actions = {
  setData({commit},dta){
    commit('saveData',dta);
    console.log("set data2")
  }
}
const getters = {
  getTxtData(state){
    return(state);
  }
}
export default{
  state,
  mutations,
  actions,
  getters
}
