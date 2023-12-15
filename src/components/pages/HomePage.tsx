import React from 'react'
import { NavLink } from 'react-router-dom'
import { appRoutes } from '../../lib/routes'

export default function HomePage() {
  return (
    <div>HomePage <br />
      <NavLink to={appRoutes.successPage}>
        SuccessPage
      </NavLink>

      
    </div>
  )
}
