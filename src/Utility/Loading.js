import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ typeOf = 'spinningBubbles', colorOf = 'black' }) => (
  <ReactLoading type={typeOf} color={colorOf} height={'5%'} width={'5%'} />
);

export default Loading;
