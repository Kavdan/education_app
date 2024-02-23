import { CourseBlock } from '../CourseBlock/CourseBlock'
import { Footer } from '../Footer/Footer';
import './content.scss'

export const Content = () => {
   const arr = new Array(24);

  return (
    <div className='content'>
    <CourseBlock />
    <CourseBlock />
    <CourseBlock />
    <CourseBlock />
    <CourseBlock />
    <CourseBlock />
    <CourseBlock />
    <CourseBlock />
    <CourseBlock />
    <CourseBlock />
    <Footer />
    </div>
  )
}
