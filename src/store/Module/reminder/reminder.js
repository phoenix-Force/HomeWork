const state={
  flag:false,
  reminders:[]
}
const mutations={
  setReminds(state,remindersData){
    let temp={};
    temp.header = remindersData.header;
    temp.note = remindersData.note;
    temp.date = remindersData.date;
    temp.time= remindersData.time;
    temp.isActive = remindersData.isActive;
    temp.snooze  = remindersData.snooze;
    state.reminders.push(temp);
    console.log(state.reminders[0])
  },
  setFlagg(state){
    state.flag =! state.flag;
  },
  deleteReminds(state,x){
    state.reminders.splice(x,1);
  }
}
const actions={
  setFlag({commit}){
    commit('setFlagg');
  },
  setReminders({commit},data){
    commit('setReminds',data);
  },
  dltReminds({commit},x){
    commit('deleteReminds',x)
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
