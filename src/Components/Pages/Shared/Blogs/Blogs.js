import { useQuery } from '@tanstack/react-query';
import React from 'react';
import BlogAns from './BlogAns';

const Blogs = () => {


    const { data: blog = [] } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-sigma-snowy.vercel.app/blog')
            const data = await res.json();
            return data;
        }
    });

    return (
        <section className='my-6'>
            <p className="text-4xl text-center text-sky-600 font-bold pb-8">BLOG QUESTIONS & ANSWERS</p>
            <hr className='text-sky-700 pb-10' />
            <div className='grid grid-cols-1 gap-8'>
                {
                    blog.map(blogAns =>
                        <BlogAns
                            key={blogAns._id}
                            blogAns={blogAns}
                        ></BlogAns>
                    )
                }
            </div>
        </section>
    );
};

export default Blogs;