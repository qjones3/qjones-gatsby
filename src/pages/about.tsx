import * as React from 'react';
import Layout from '../components/layout/layout';
import BlockText from '../components/block-text';

const Styles = {
  backgroundColor:"blue",
  color:"white",
}

const AboutPage = () => {
  return (
    <Layout>
      <div className='firstClass' style={Styles}>
        <h1>About Page</h1>
        <h2>Learn about what we do.</h2>
        <BlockText />
      </div>
    </Layout>
  )
}

export default AboutPage;
