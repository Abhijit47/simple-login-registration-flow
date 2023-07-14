import React from 'react';
import { Link } from 'react-router-dom';
import { MDBContainer } from 'mdb-react-ui-kit';

// eslint-disable-next-line
const bgImage = {
  backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
  height: '95vh',
  // width: '90vw',
  margin: '0 auto',
  marginTop: '58px',
};

const Home = () => {
  return (
    <MDBContainer className='container'>
      {/* <!-- Background image --> */}
      <div className='p-5 text-center bg-image' style={bgImage}>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Login & Registration</h1>
              <Link
                className='btn btn-outline-light btn-lg'
                to='/login'
                role='button'>
                Call to action
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Background image --> */}
    </MDBContainer>
  );
};

export default Home;
