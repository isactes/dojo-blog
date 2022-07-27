import { useState, useEffect } from "react";
import BlogList from "./bloglist";

const Home = () => {
    const [blogs, setBlogs] =useState(null);
    const [isPending, setPending] = useState(true);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs); 
    // }
    useEffect(() => {
         setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data)
                setPending(false);
            });
         }, 1000);
    },[]);

    return (    
        <div className="home">
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs}  title= 'All Blogs!'/>}
            
        </div>
    );
}

export default Home;