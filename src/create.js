import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
        const [ title, setTitle ] = useState('');
        const [ body, setBody ] = useState('');
        const [ author, setAthor] = useState('');
        const [ isPending, setPending] = useState(false);
        const history = useHistory();


        const handleSubmit = (e) => {
            e.preventDefault();
            const blog = { title, body, author };

            setPending(true);

            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { "Content-Type": "aplication/json"},
                body: JSON.stringify(blog)
            }).then(() => {
                console.log('new blog adding...');
                setPending(false);
                //history.go(-1);
                history.push('/');
            })
        }
    return ( 
        <div className="create">
            <h2> New Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog title: </label>
                <input type="text" required value={ title } onChange= {(e) => setTitle(e.target.value)}/>

                <label>Blog body: </label>
                <textarea  required value={ body } onChange= {(e) => setBody(e.target.value)}></textarea>

                <label>Blog author</label>
                
                <select value={ author } onChange= {(e) => setAthor(e.target.value)}>
                    <option value="isac">isac</option>
                    <option value="fidel">fidel</option>
                    <option value="helen">helen</option>
                    <option value="mime">mime</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button>Adding blog...</button>}
                {/* <p>{ title }</p>
                <p>{ body }</p>
                <p>{ author }</p> */}
            </form>
        </div>
     );
    
}
 
export default Create; 