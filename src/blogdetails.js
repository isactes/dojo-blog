import { useParams } from "react-router-dom";
import useFetch from "./usefecth";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:3000/blogs/' + id);
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { blog && (
                <article>
                    <h2>{ blog.title}</h2>
                </article>
            )
            }
        </div>
     );
}
 
export default BlogDetails;