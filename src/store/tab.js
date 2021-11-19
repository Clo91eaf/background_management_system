export default{
  state:{
    isCollapse:true,
    currentMenu: null
  },
  mutations:{
    collapseMenu(state){
      state.isCollapse = !state.isCollapse
    },
    selectMenu(state, val){
      val.name === 'home' ? (state.currentMenu = null) : state.currentMenu = val;
      // state.currentMenu = values.name === 'home' ? null : val;
    }
  }
}