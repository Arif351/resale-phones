import React from 'react';

const BlogAns = ({ blogAns }) => {
    const { q_no, question, ans, react, angular, Vue } = blogAns;
    return (
        <div className="card w-full bg-slate-800 p-7 shadow-xl">
            <div className="">
                <h2 className="mb-7 card-title text-sky-400 font-medium">{q_no} {question}</h2>
                <p className='mb-7 text-white font-medium'>{ans}</p>
                <p className='mb-7 text-white font-medium'>{react}</p>
                <p className='mb-7 text-white font-medium'>{angular}</p>
                <p className='mb-7 text-white font-medium'>{Vue}</p>
            </div>
        </div>
    );
};

export default BlogAns;