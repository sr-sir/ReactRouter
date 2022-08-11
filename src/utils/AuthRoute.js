import React from 'react'
import { Navigate } from 'react-router-dom'

// RequireAuth 组件相当于一个拦截器，是否返回被拦截的组件要听他的
function RequireAuth({ children }) {

    return false ? ( // 判断 localstorage 中登录状态是否为 true
        children
    ) : (
        <Navigate to="/" replace /> // 跳转到登录
    );
}

export default RequireAuth