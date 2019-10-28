const state={
  flag:false,
  reminders:[{header:'',note:'',time:'',date:'',snooze:false}]
}
const mutations={
  setReminds(state,remindersData){
    temp={},
    temp.header = remindersData.header;
    temp.note = remindersData.note;
    temp.time= remindersData.time;
    temp.date = remindersData.date;
    temp.snooze  = remindersData.snooze;
    state.reminders.append(temp);
  },
  setFlagg(state){
    state.flag =! state.flag;
    console.log(state.flag);
  }
}
const actions={
  setFlag({commit}){
    commit('setFlagg');
    console.log("actions");
  }
}
const getters={
  getFlag(state){
    return state.flag;
  },
  reminders(state){
    return state.reminders;
  }
}
export default{
  state,
  mutations,
  actions,
  getters
}
