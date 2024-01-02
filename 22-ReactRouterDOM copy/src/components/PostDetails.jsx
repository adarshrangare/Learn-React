import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Post from './Post';
const endpoint = 'https://jsonplaceholder.typicode.com/posts?userId='

const PostDetails = () => {
    const {id} = useParams();
    const [posts,setPosts] = useState(null);

    useEffect(()=>{
        
        async function getData(url){
            const res = await fetch(url);
            const resData = await res.json();

            setPosts(resData);
        }

        getData(endpoint+id);

    },[])

  return (
    <div className='postCard'>
        
        {
            posts && posts.map(post=>(<Post key={post.id} {...post}/>))

        }

    </div>
  )
}

export default PostDetails