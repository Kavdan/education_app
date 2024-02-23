import { Button } from '../Button/Button'
import { Search } from '../Search/Search'
import { SiteIcon } from '../SiteLogo/SiteIcon'
import { DarkModeToggle } from '../svgs/DarkModeToggle'
import { ProfileIcon } from '../ProfileIcon/ProfileIcon'
import avatar from '../../assets/download.png'
import './header.scss'
import { Hamburger } from '../Hamburger/Hamburger'

export const Header = () => {

  const getScreenWidth = () => window.screen.width;

  return (
    <div className='header'>
        <div className="header-icon">
          <SiteIcon />
        </div>
        {getScreenWidth() >= 450 ? 
          <>
          <Search />
          <Button text='Reference'/>
          <Button text='Login'/>
          </> 
          : ""
        }
        <div className="header-menu"><Hamburger /></div>
        <div className="header-options">
          <Button text={<DarkModeToggle />}/>
          <ProfileIcon src={avatar}/>
        </div>
    </div>
  )
}
