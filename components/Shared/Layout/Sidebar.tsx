import React, { Fragment } from 'react'
import Menus from '../../Menus'
import { changeRoute } from '../../../helpers/routesHandler'

const Sidebar = () => {
  return (
    <Fragment>
      <div className="sidebar_menus">
        <Menus changeRoute={changeRoute} />
      </div>
    </Fragment>
  )
}

export default Sidebar
