const Create = () => {
    return ( 
        <div className="create">
            <h2> New Blog</h2>
            <form action="">
                <label>Blog title: </label>
                <input type="text" required />
                <label>Blog body: </label>
                <textarea>required</textarea>
                <label>Blog author</label>
                <select>
                    <option value="isac">isac</option>
                    <option value="fidel">fidel</option>
                </select>
                <button>Add blog</button>
            </form>
        </div>
     );
}
 
export default Create; 