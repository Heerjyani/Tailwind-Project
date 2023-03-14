tailwind.config = {
    content: ['./src/**/*.{html,js}'],
    theme: {
      
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        serif: ['Rubik', 'sans-serif'],
      },
      extend: {
       
        backgroundColor: {
            'xy' : '#222F5A',
            'heer' : '#104cba',
            'green':'#0E1E2A'
        },
        colors:{
            'xy' : '#104cba',
        }
      }
    },
  }