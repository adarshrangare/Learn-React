import {useEffect,useState} from 'react'
import Post from '../components/Post';

const url = "https://jsonplaceholder.typicode.com/posts";
const Posts = () => {

    const [posts, setPost] = useState(null)
    useEffect(()=>{
        

         async function getData(){
            const res = await fetch(url);
            const resData = await res.json();

            setPost(resData);
        }

        getData();

    },[])

  return (
    <>
        <h1>Posts</h1>

        {
            posts && posts.map(post=>(<Post key={post.id} {...post} indPost={true} />))

        }

    </>
  )
}

export default Posts