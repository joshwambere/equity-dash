import { AiOutlineClockCircle } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { routes } from '../../config/route-config'

export const TopMenus = [
  {
    defaultSelectedKey: '1',
    defaultOpenKey: 'sub1',
    icon: AiOutlineClockCircle,
    name: 'Analytics',
    url: routes.dashboard.url,
  },
  {
    defaultSelectedKey: '2',
    defaultOpenKey: 'sub2',
    icon: FiUsers,
    name: 'Users',
    url: routes.users.url,
  },
]
