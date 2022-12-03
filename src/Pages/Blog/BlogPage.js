import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import BlogPostsCards from './BlogPostsCards';
import BlogsCategoryNames from './BlogsCategoryNames';
import BlogsPageCover from './BlogsPageCover';


const BlogPage = () => {
  const allBlogs =useLoaderData();

    return (
        <div className='container mt-2 mb-5 align-center '>
<BlogsPageCover/>
<Row>
<Col lg='3'>
<BlogsCategoryNames />
</Col>
<Col lg='9'>
<hr />
<h2 className='text-center'>This Blogs Category has {allBlogs.length} blogs Post. </h2>
<hr />
{
  allBlogs.map(blogs=> <BlogPostsCards
  key={blogs.id}
  blogs={blogs}
  ></BlogPostsCards>)
}
</Col>
</Row>



</div>        
    );
};

export default BlogPage;