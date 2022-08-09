import { useParams } from "react-router-dom";
import useFetch from "./usefecth";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blogs, isPending, error } = useFetch('http://localhost:3000/blogs/' + id);
    // console.log({});
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>error</div> }
            { blogs && (                <article>
                    <h2>{ blogs.title }</h2>
                    <p> Written by { blogs.author }</p>
                    <div>{ blogs.body }</div>
                    
                </article>    
            )}
        </div>
     );
}
 
export default BlogDetails; 