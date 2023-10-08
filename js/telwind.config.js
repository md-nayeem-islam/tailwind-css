
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            clifford: '#da373d',
            black: '#0D0D0D',
            btn: '#FFD2A4',
            lineargradient : '#000,#000',
          },
          maxWidth: {
            'containar': '1200px',
          },
          backgroundImage: {
            'banner': "url('images/banners.jpg')",
            mosque : "url('images/mosque (1).jpg')",
          },
          fontSize: {
            heaing: '54px',
          },
          lineHeight: {
            'line-height': '120%',
          },
          fontFamily: {
            'Roboto': "'Roboto', sans-serif;"
          },
          extend: {
            backdropOpacity: {
              filter: ' blur(20px);',
            }
        }
      }
    }
  }