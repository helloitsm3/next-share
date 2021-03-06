import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TumblrShareButton,
  TumblrIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
  WeiboShareButton,
  WeiboIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'next-share'

function App() {
  return (
    <div style={{float: 'left'}}>
      
      <FacebookShareButton
        url={'https://github.com/bunlong/next-share'}
        quote={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
        hashtag={'#NextShare'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <FacebookIcon size={32} round />
        </div>
      </FacebookShareButton>
      <LineShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <LineIcon size={32} round />
        </div>
      </LineShareButton>
      <PinterestShareButton
        url={'https://github.com/bunlong/next-share'}
        media={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <PinterestIcon size={32} round />
        </div>
      </PinterestShareButton>
      <RedditShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
        windowWidth={660}
        windowHeight={460}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <RedditIcon size={32} round />
        </div>
      </RedditShareButton>
      <TelegramShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <TelegramIcon size={32} round />
        </div>
      </TelegramShareButton>
      <TumblrShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <TumblrIcon size={32} round />
        </div>
      </TumblrShareButton>
      <TwitterShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <TwitterIcon size={32} round />
        </div>
      </TwitterShareButton>
      <ViberShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <ViberIcon size={32} round />
        </div>
      </ViberShareButton>
      <WeiboShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
        // image={`${String(window.location)}/${exampleImage}`}
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <WeiboIcon size={32} round />
        </div>
      </WeiboShareButton>
      <WhatsappShareButton
        url={'https://github.com/bunlong/next-share'}
        title={'Testing - next-share is a social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps.'}
        separator="::"
      >
        <div style={{marginRight: 10, width: 32, height: 32}}>
          <WhatsappIcon size={32} round />
        </div>
      </WhatsappShareButton>
    </div>
  )
};

export default App;
