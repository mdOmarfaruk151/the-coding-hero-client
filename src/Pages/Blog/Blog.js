import { Link, useLoaderData } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Blog = () => {
    const blog = useLoaderData();
    // console.log(blog);
    const {post_img,question,ans,category_id} = blog;
    
    return (
        <div className='container mt-2 mb-3 drop-shadow-lg'>
            <hr />
            <h2 className='text-center '>This is {blog.topic} Blog.</h2>
            <hr />
            <div className=' border-2 rounded-md dark:border-sky-500 border-gray-500'>
            <Card className='dark:bg-black '>
      <Card.Img variant="top" src={post_img} />
      <Card.Body className='bg-gray-300 dark:bg-black'>
        <Card.Title><h3>{question}</h3></Card.Title>
        <Card.Text>
          <p className='text-justify font-sans text-xl'>
            {ans}
          </p>
        </Card.Text>
        <Link  to={`/blogs-category/${category_id}`}className='text-white no-underline'>
        <button className="p-3 bg-gray-700  text-xl hover:bg-black rounded-md w-full border-2 dark:border-sky-500 ">Back To Blog</button></Link>
      </Card.Body>
    </Card>
            </div>
        </div>
    );
};

export default Blog;