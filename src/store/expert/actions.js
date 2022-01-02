
import router from "../../router/index";
import AuthService from "src/Services/AuthServices";

export default {
  logout({ commit, dispatch }) {
        commit("SET_USER", null);
        commit("setAPIToken", null);
        dispatch("setToken", null);
        console.log('going null', router.currentRoute)


  },
  async getAuthUser({ commit }) {
    commit("SET_LOADING", true);
    try {
      const response = await AuthService.getAuthUser();
      console.log(response.data)
      commit("SET_USER", response.data);
      commit("SET_LOADING", false);
      return response.data;
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_USER", null);
    }
  },
  setToken(context,  value ){

    if (value==null){
      window.localStorage.removeItem('token')
    } else {
      console.log('value1 ', value.data.api_token)
      window.localStorage.setItem('token', value.data.api_token)
      context.commit("SET_USER", value.data);
    }
  },
  setGuest(context, { value }) {
    window.localStorage.setItem("guest", value);
  },
}

