import React from 'react';
import Login from '@/pages/Login';
import User from '@/pages/User';
import NotFound from '@/pages/NotFound';

export default [{
  type:'redirect',
  exact:true,
  from:'/',
  to:'/user'
},{
  type:'route',
  path:'/user',
  exact:true,
  component:User
},{
  type:'route',
  path:'/login',
  exact:true,
  component:Login
},{
  type:'route',
  path:'*',
  // component:NotFound
  render:({staticContext})=>{
    if (staticContext) staticContext.NOT_FOUND = true;
    return <NotFound/>
  }
}]
