import React from 'react';

interface ResponsiveIframeProps {
  src: string; // The URL to load in the iframe
  title: string; // Title for accessibility
}

const ResponsiveIframe: React.FC<ResponsiveIframeProps> = ({ src, title }) => {
  return (
    <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
      <iframe
        src={src}
        title={title}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          overflow: 'hidden',
        }}
        allowFullScreen
      />
    </div>
  );
};

export default ResponsiveIframe;
