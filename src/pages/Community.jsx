import React from 'react';
import { Layout } from '../components';
import Post from '../components/Post';
const Community = () => {
  // Sample stats data for demonstration purposes
  const stats = {
    title: 'Sample Post Title',
    author: 'John Doe',
    content: 'This is the content of the post.',
  };

  return (
    <>
      <Layout>
        <div className="h-150 w-100">
          {/* Rendering the Post component and passing the stats prop */}
          <Post stats={stats} />
        </div>
      </Layout>
    </>
  );
};


export default Community