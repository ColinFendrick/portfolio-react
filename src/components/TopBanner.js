import React, { Component } from 'react';
import { Banner, Heading } from 'rebass';

class TopBanner extends Component {
  render() {
    return (
      <Banner
        color='white'
        bg='gray8'
        backgroundImage='https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'>
      >
        <Heading f={[4, 5, 6, 7]}>
          Hello
        </Heading>
      </Banner>
    );
  }
}

export default TopBanner;