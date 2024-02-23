import './profile.scss'
import avatar from '../../assets/download.png'

export const ProfileIcon = ({src} : any) => {
  
  return (
    <div className="profile">
      <img src={src} alt="" className='profile-avatar'/>
    </div>
  )
}
