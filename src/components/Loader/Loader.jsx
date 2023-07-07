import React from 'react';
import { Rings } from 'react-loader-spinner';

const MyLoader = props => (
  <>
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '1',
      }}
    >
      <Rings
        height="120"
        width="120"
        color="#ffffff"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
    <div
      style={{
        backdropFilter: 'blur(4px)',
        width: '100%',
        height: '100%',
        opacity: '0.5',
        backgroundColor: 'grey',
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        right: '0',
      }}
    ></div>
  </>
);

export default MyLoader;
