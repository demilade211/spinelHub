import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { SetUser, SetExpired } from "../redux/slices/userSlice";
import { ShowLoader, HideLoader } from "../redux/slices/loaderSlice";
import { getLoggedInUser } from "../services/auth"
import cookie from "js-cookie"
import AppLoader from '../components/loaders/AppLoader';
import Router from "next/router" 

const AppGuard = ({children}) => {
  const {loader} = useSelector(state => state.loaderReducer)
  const { user } = useSelector((state) => state.userReducer);
  let token = cookie.get("token");

  const dispatch = useDispatch();

  const doFetchUserDetails = useCallback(async () => {


    try {
      dispatch(ShowLoader())
      const response = await getLoggedInUser()
      dispatch(HideLoader())
      if (response.success) {
        dispatch(SetUser(response.user))
      } else {
        if (response.message === "JSON Web Token is expired. Try Again!!!") {
          dispatch(SetExpired("expired"))
          cookie.remove("token");
          Router.push("/auth/login");
        } 
      }
    } catch (error) {
      dispatch(HideLoader())
      // dispatch(SetExpired("Unauthenticated"))
      // cookie.remove("token");
      // Router.push("/auth/login");
    }
  }, [dispatch])

  useEffect(() => {  
    if(token){
      doFetchUserDetails()
    } else{
      dispatch(HideLoader())
    }
  }, [doFetchUserDetails])

  return (
    <>
      {loader?<AppLoader/>:children} 
    </>
  )
}

export default AppGuard