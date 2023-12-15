import React from 'react'
import { NavLink } from 'react-router-dom'
import { appRoutes } from '../../lib/routes'

export default function SuccessPage() {
  return (
    <div>
      SuccessPage
       <br />
       <NavLink to={appRoutes.home}>
        Return
       </NavLink>
      </div>
  )
}
