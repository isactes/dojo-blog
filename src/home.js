import { useState } from "react";
import BlogList from "./bloglist";

const Home = () => {
    const [blogs, setBlogs] =useState([
        {title: 'My new web site', body: 'loren ipsu...', author: 'Isac', id: 1},
        {title: 'Welcome to the new', body: 'loren ipsu...', author: 'Fidel', id: 2},
        {title: 'Web dev ti tips', body: 'loren ipsu...', author: 'Isac', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs); 
    }

    return (    
        <div className="home">
            <BlogList blogs={blogs} 
            title= 'All Blogs!'
            handleDelete={handleDelete}/>
            
        </div>
    );
}

export default Home;