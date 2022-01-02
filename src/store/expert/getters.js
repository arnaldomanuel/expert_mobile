
const authUser=  (state) => {

  return state.user
}
  const isAdmin =  (state) => {
  return state.user ? state.user.isAdmin : false;
}
 const error = (state) => {
  return state.error;
}
 const  loading =  (state) => {
  return state.loading;
}
  const loggedIn = (state) => {
  return state.user!=null;
}
 const  guest= () => {
  const storageItem = window.localStorage.getItem("guest");
  if (!storageItem) return false;
  if (storageItem === "isGuest") return true;
  if (storageItem === "isNotGuest") return false;
}
 const token = () =>{
  return  window.localStorage.getItem('token')
}
export default {
  authUser,isAdmin,loggedIn,guest, loading, error, token
}
