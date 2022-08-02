import BlogList from "./bloglist";
import useFetch from "./usefecth";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs); 
    // }
    return (    
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            {blogs && <BlogList blogs={blogs}  title= 'All Blogs!'/>}
            
        </div>
    );
}

export default Home;