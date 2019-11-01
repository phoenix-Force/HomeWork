import axios from "axios";
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

  },
  setFlagg(state){
    state.flag =! state.flag;
  },
  deleteReminds(state,x){
    state.reminders.splice(x,1);
  },
  LoadFromdb(state){
    axios.get("https://vue-http-3aefd.firebaseio.com/reminders.json")
    .then(response=>{
      let xx= []
      const data = response.data;
      for(let key in data){
        const reminds =data[key];
        var d = new Date(reminds.date );
        reminds.id = key;
        reminds.date = d.toLocaleString();
        xx.push(reminds);
        state.reminders = xx;
      }

    }).catch(error=>console.log(error))
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
  },
  loaddb({commit}){
    commit('LoadFromdb')
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
