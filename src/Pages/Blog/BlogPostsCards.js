import React from 'react';
import { Card, Image, } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const BlogPostsCards = ({blogs}) => {

    // console.log(blogs);
    const {id,topic,date,author,author_img,post_img,question,ans,rating,total_view} = blogs;
    console.log(ans);

    return (
       <>
        <div className='mt-3 drop-shadow-lg '>
  <Card className="text-center  dark:bg-black border-2  rounded  dark:border-sky-500 border-gray-500">
      <Card.Header className='d-flex justify-content-between align-items-center '>
       <div className='d-flex '>
        
        <Image
        roundedCircle
        className='me-2 dark:ring ring-info ring-offset-base-100 ring-offset-0 '
        src={author_img}
        style={{height:'60px'}}
        ></Image>
        <div className='mt-1 '>
          <p className='mb-0 '>{author}</p>
          <p className='-ml-8'>{date}</p>
        </div>
      </div>
      <div className='d-flex'>
        <FaRegBookmark className='me-2 hover:text-red-600'></FaRegBookmark>
        <FaShareAlt className='hover:text-sky-500'></FaShareAlt>
      </div>
      </Card.Header>
      
      <Card.Img variant='top' className='' src={post_img}/>
      <Card.Body className='bg-gray-300 dark:bg-black 
'>
      <span className="badge badge-lg badge-dark dark:badge-info hover:animate-bounce">{topic}</span>
        <Card.Title>
          
          <h4 className='text-justify'>{question}</h4><span className="badge badge-lg text-end badge-warning hover:animate-bounce text-black">NEW</span></Card.Title>
        
        <Card.Text className='text-justify font-sans text-lg'>
          {
            ans.length > 250 ?
            <p>{ans.slice(0, 250)+'...'}<Link className='no-underline text-lg' to={`/blogs/${id}`} >Read More</Link></p>
            :
            <p>{ans}</p>
          }
        </Card.Text>
        
      </Card.Body>
      
      <Card.Footer className="d-flex justify-content-between align-items-center border-sky-500 border--4 ">
         <div className='d-flex align-items-center '>
         <FaStar className='text-warning me-2'></FaStar>
         <span>{rating}</span>
         </div>
         <div className='d-flex align-items-center'>
          <FaEye className='me-2'></FaEye>
          <span>{total_view}</span>
         </div>
        
        </Card.Footer>
        
    </Card>
        </div>
       </>
    );
};

export default BlogPostsCards;