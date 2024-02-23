import './App.css';
import { Content } from './components/Content/Content';
import { CourseBlock } from './components/CourseBlock/CourseBlock';
import { CourseInfo } from './components/CourseInfo/CourseInfo';
import { Footer } from './components/Footer/Footer';
import { Header } from "./components/Header/Header";
import { ClockIcon } from './components/svgs/ClockIcon';
import { RaitingStarIcon } from './components/svgs/RaitingStarIcon';
import { UserIcon } from './components/svgs/UserIcon';
import avatar from './assets/download.png'

function App() {

  return (
    <div className='wrapper'>
    <Header />
    <CourseInfo src={avatar} />
    </div>
  )
}

export default App
