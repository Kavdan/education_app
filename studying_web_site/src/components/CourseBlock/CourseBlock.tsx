import { RaitingStarIcon } from '../svgs/RaitingStarIcon'
import { ClockIcon } from '../svgs/ClockIcon'
import { UserIcon } from '../svgs/UserIcon'
import dw from '../../assets/download.png'
import './course_block.scss'

export const CourseBlock = () => {

  const cutTitle = (title : string, limit : number) => {
    if(title.length < limit) return title;
    return title.substring(0, limit)+" ...";
  }

  const howMuchCut = () => {
    const size = window.screen.width;

    if(size > 500 && size < 700) return 500;
    else if(size > 700 && size < 1000) return 600;
    else if(size > 1000) return 700
    else return 10;
  }

  return (
    <div className='course-block'>

         <div className="course-image">
            <img src={dw} alt="" />
         </div>

         <div className="course-info">
         <p className="course-title">
            <span className="course-name"
                  title="C++ super duper course from">
                {cutTitle("C++ super duper course from", 50)}
            </span>
            <span className="course-author">Dmitry Antonovich</span>
         </p>
         <p className="course-description">
          {cutTitle(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic laboriosam voluptate consectetur assumenda nemo ea eius quas vel similique, mollitia quam, expedita adipisci est quod officiis, maiores enim. Nihil, iste?
          Maxime numquam at recusandae, temporibus autem fugit error eligendi impedit fugiat est sapiente quo laborum mollitia animi minima in consectetur explicabo sit, reiciendis eum. Architecto atque nemo incidunt perspiciatis hic.
          Impedit doloribus hic esse quia maiores sequi quisquam non rem aliquid, assumenda saepe dolorum quas ea ullam unde aspernatur aperiam dolore mollitia! Aliquam deserunt quae esse placeat, impedit temporibus perferendis.
          Soluta minus libero, autem officia odio harum praesentium nobis dolore provident, dignissimos eligendi aperiam nulla eos veritatis, maxime delectus voluptate saepe molestias! Veritatis ducimus aut incidunt excepturi iste sed cupiditate?
          Sapiente ratione consequuntur sint quam corrupti libero modi voluptate, illum error vitae! Perferendis eius pariatur velit deleniti quidem quia, ipsa illo optio. Placeat, repudiandae! Commodi perferendis et qui error consequatur?
          Fugit dolorum obcaecati commodi! Asperiores quia iusto similique fugiat laborum libero, commodi, distinctio modi cupiditate ducimus possimus reprehenderit non excepturi tempore labore quo nam eos voluptas! Ullam enim eum earum.
          Vitae, repellendus? Explicabo cum earum deleniti natus. Cum totam ipsam ex deserunt, reiciendis perspiciatis molestiae eius. Officia, adipisci! Eius soluta unde eveniet maxime qui laudantium! Totam accusamus impedit quas delectus!
          Eos assumenda alias libero officia molestias architecto expedita aperiam quae laborum non, dolorum neque voluptatum consectetur odit repellendus commodi tempora porro itaque error aliquam ad illum ipsam? Cum, voluptas ipsa.
          Esse tempora, eius modi reiciendis cum eum exercitationem doloremque nobis beatae assumenda consequuntur recusandae hic voluptas vitae? Autem repellat iste, provident odio, corrupti alias quas natus delectus similique modi accusamus!
          Ipsum quam eum quis earum, nesciunt debitis labore. Accusantium blanditiis sequi, sit nostrum, molestias tempora asperiores itaque optio natus repellat aut corporis distinctio! Inventore voluptatum modi quasi corrupti officiis nisi.`,howMuchCut())}
         </p>
         <div className="course-bottoms">
            <div className="course-raiting">
                <RaitingStarIcon style={{fill: 'white'}}/>
                <span className='course-raiting-number'>4.8</span>
            </div>
            <div className="course-users">
                <UserIcon style={{fill: 'white'}}/>
                <span className='course-users-number'>56.2k</span>
            </div>
            <div className="course-duration">
                <ClockIcon style={{stroke: 'white', strokeWidth: '2.1'}}/>
                <span className='course-users-number'>1h</span>
            </div>
        </div>
         </div>
    </div>
  )
}
