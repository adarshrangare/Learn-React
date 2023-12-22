import {useContext} from 'react'
// import { AuthContext } from '../main'

import { AuthProviderContext } from './AuthProviderComponent'

export const BasicDetails = () => {
    // const {username,email} = useContext(AuthContext)
    const {username,email} = useContext(AuthProviderContext)
  return (
    <div>
        <b>Username:</b><span> {username}</span>
        <br />
        <b>Email:</b><span> {email}</span>

    </div>
  )
}
