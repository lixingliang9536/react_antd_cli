import React from 'react';
import {hot} from 'react-hot-loader/root';
import Detail from '../detail/index'

import './index.less'

function Home(){
  return (
    <div>
      <div className='text'>hello react</div>
      <Detail />
    </div>
  )
}

export default hot(Home);