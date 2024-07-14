import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img
        className="postImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZsH-LA6ud_Ekd4YqQOzyhwIXe1uUCjazWw&s"
        alt=""
        />
        <div className="postInfo">
            <div className="postCategory">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">How can time feel so endless, yet remain constant, while we're the ones racing through it?</span>
            <hr/>
            <span className="postTitle">What is their to do with time if it feels long but in the scheme of thing it's just stagnant and we are the ones moving</span>
            <hr />
            <span className="postDate">1 hour ago</span>

            <p className="postDescr">
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Blanditiis quos veritatis doloribus, numquam in nisi reiciendis fuga sit laborum, cupiditate, veniam atque cum voluptatibus accusamus?
                 Quo voluptatibus voluptate consequatur error.
                 Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Blanditiis quos veritatis doloribus, numquam in nisi reiciendis fuga sit laborum, cupiditate, veniam atque cum voluptatibus accusamus?
                 Quo voluptatibus voluptate consequatur error.
                 Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Blanditiis quos veritatis doloribus, numquam in nisi reiciendis fuga sit laborum, cupiditate, veniam atque cum voluptatibus accusamus?
                 Quo voluptatibus voluptate consequatur error.
                 Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Blanditiis quos veritatis doloribus, numquam in nisi reiciendis fuga sit laborum, cupiditate, veniam atque cum voluptatibus accusamus?
                 Quo voluptatibus voluptate consequatur error.
            </p>
        </div>
     
    </div>
  )
}
