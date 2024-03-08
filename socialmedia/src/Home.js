import React from 'react';
import Feed from './Feed';

const Home = ({ posts }) => {
  return (
    <main className='Home'>
      {posts && posts.length > 0 ? (
        <Feed posts={posts} />
      ) : (
        <p style={{ margin: '3em' }}>No Posts Present here</p>
      )}
    </main>
  );
}

export default Home;