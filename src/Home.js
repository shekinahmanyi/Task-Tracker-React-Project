import { useState,useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs,setblogs] = useState([
    {title:'My new website',body: 'lorem ipsum...', author:'sheki',id:1},
    {title:'Welcome party!',body: 'lorem ipsum...', author:'manyi',id:2},
    {title:'Web dev top tips',body: 'lorem ipsum...', author:'sheki',id:3}
    ]);
     
    const[name, setName] = useState('sheki');
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setblogs(newBlogs);
    };

    useEffect(() =>{
        console.log('use effect ran');
        console.log(name);
    },  []);

    
        
    return ( 
        <div className="Home">
         <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/> 
        <button onClick={() => setName('junia')}>Change Name</button>
        <p>{name}</p>
        </div>
     );
}
 
export default Home;
