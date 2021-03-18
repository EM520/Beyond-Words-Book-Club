import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { selectUsers, getUsers } from './usersSlice'

export function Users() {
  const users = useSelector(selectUsers)
  console.log(users)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, [])
  return (
    <>
      <div>
        {users.map((user) => (
          <p key={'user-' + user.id}>{user.first_name}</p>
        ))}
      </div>
    </>
  )
}
