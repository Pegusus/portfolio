import React, {forwardRef} from 'react';
import './Home.css';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Home = forwardRef((props, ref) => {
  const [text] = useTypewriter({
    words: ['Aniruddha', 'a Developer', 'a Problem Solver'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80
  })
  return (
    <div className='home' ref={ref}>
        <div className='profile-image'></div>
        <div className='profile-details'>
            <span className='profile-details-header'>
                Hi, I am 
            <span style={{fontWeight: 'bold', color: 'blue'}}> {text} </span>
            <span><Cursor cursorStyle='<'/></span>
            </span>
            <span className='profile-details-body'>
                <br/>
                I turn Ideas into products.
                <br/>
                Building Products from scratch | Software Developer | Ex-CollegeDekho | Ex-PwC 
                <br/>
                <br/>
                Talks about {' '}
                <span style={{ margin: '0 0.5rem' }}><PsychologyIcon style={{ verticalAlign: 'middle', color: '#b30047' }}/>{' '}DSA,</span> 
                <span style={{ margin: '0 0.5rem' }}><ElectricBoltIcon style={{ verticalAlign: 'middle', color: '#ffaa00'}}/>{' '}developer</span>
                <span style={{ margin: '0 0.5rem' }}><AcUnitIcon style={{ verticalAlign: 'middle', color: '#00ace6' }}/>{' '}system design</span>
            </span>
        </div>
    </div>
  )
})

export default Home