import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const auth = true;

export default function ProtectedRoute({component: Component, ...rest}) {
    return (
            <Route 
            {...rest}
            render={
                props => auth? <Component {...props}/> : <Redirect to={
                    {pathname:"/"}
                } />
            }
            />
        
    )
}
