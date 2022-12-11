import React from 'react';
import BlogsTextSlider from './BlogsTextSlider';
// import blogCover from '../../images/blog-cover.jpg';
// import { Image } from 'react-bootstrap';
import blogCoverBackground from '../../video/blog-cover-background.mp4';

const BlogsPageCover = () => {
    return (
        <div className="hero  " >
            {/* <Image src={blogCover} className='rounded-md '/> */}
            <video autoPlay loop muted className='mx-auto my-auto'>
                <source src={blogCoverBackground} type="video/mp4"/>
            </video>
<div className="hero-overlay bg-opacity-60"></div>
<div className="hero-content text-center text-neutral-content">
<div className="max-w-md">
<h1 className="mb-5 text-5xl font-bold text-white font-mono ">Blogs</h1>
<BlogsTextSlider/>

</div>
</div>
</div>
    );
};

export default BlogsPageCover;