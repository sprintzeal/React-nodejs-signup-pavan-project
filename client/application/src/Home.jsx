import React from 'react';

const HomePage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: `url("https://images.unsplash.com/photo-1502201388237-dd1dde0ffba9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    }}>
<div style={{
  maxWidth: '800px',
  textAlign: 'center',
  backgroundImage: `url("https://images.unsplash.com/photo-1541414779316-956a5084c0d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxhbmltYWxzfGVufDB8fDB8fHww")`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  padding: '3rem',
  borderRadius: '20px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
}}>

        <h1 style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          background: 'linear-gradient(to right, #ff8a00, #e52e71)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Welcome to Your Digital Journey
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          color: '#fff'
        }}>
          Embark on an adventure of innovation, creativity, and endless possibilities. 
          Transform your ideas into reality with our cutting-edge solutions.
        </p>
        
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem'
        }}>
          <button style={{
            padding: '12px 24px',
            backgroundColor: '#ff8a00',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Get Started
          </button>
          
          <button style={{
            padding: '12px 24px',
            backgroundColor: 'white',
            color: '#ff8a00',
            border: '2px solid #ff8a00',
            borderRadius: '25px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#ff8a00';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = '#ff8a00';
          }}
          >
            Learn More
          </button>
        </div>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '3rem',
          gap: '1rem'
        }}>
          {['Innovation', 'Creativity', 'Technology'].map((feature, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              width: '250px',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-10px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <h3 style={{
                color: '#ff8a00',
                marginBottom: '0.5rem',
                fontSize: '1.2rem'
              }}>
                {feature}
              </h3>
              <p style={{
                color: '#666',
                fontSize: '0.9rem'
              }}>
                Explore the frontiers of {feature.toLowerCase()} and push beyond 
                your current limitations.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
