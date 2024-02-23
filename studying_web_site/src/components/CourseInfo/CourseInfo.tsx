import './courseinfo.scss'

type course = {
    src:string,
}

export const CourseInfo = ({src} : course) => {
  return (
    <div className='course-info'>
        <div className="course-image">
            <img src={src} alt=""/>
        </div>
        <p className="course-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio sapiente, quae tenetur obcaecati repudiandae ipsam minus qui blanditiis libero vero asperiores fugiat numquam, ipsa id dolore, pariatur nesciunt sequi autem!
            Quis, cum temporibus blanditiis repellendus at quae vitae itaque sint. Itaque dolorum ea unde doloribus consectetur veniam possimus blanditiis eius quod atque cupiditate, earum voluptatem accusantium ad sit vitae modi.
            Deleniti corporis eaque nostrum quibusdam. Consequatur doloribus porro ipsam dolorum animi alias nisi quasi dignissimos repellendus ullam est magnam ex praesentium libero cumque, neque perspiciatis suscipit repudiandae ea et ut.
            Provident et unde autem sapiente praesentium iusto possimus. Aliquid quae cumque amet sit qui molestiae quas optio autem temporibus est fugit omnis eveniet, corrupti cupiditate totam quibusdam. Voluptatibus, facere facilis!
            Fugit incidunt ut rerum aut necessitatibus dignissimos suscipit earum voluptatum, impedit porro tempora itaque, totam quod recusandae sed vel laboriosam ipsam blanditiis eius tenetur dolore nostrum rem sunt. Vero, repellendus!
        </p>
        <div className="course-options">
            <button className="course-start">Начать курс</button>
        </div>
    </div>
  )
}
