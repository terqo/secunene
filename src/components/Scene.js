import {useRef, useEffect} from 'react'
import { cleanupScene, mountScene } from './script'


const Scene = () => {

  const mountRef = useRef(null)
  useEffect(() => {
    //init Scene
    mountScene(mountRef)
    
    //clean up scene 
    return () => {
      cleanupScene()
    }
    
  }, [])

  return (
    <div 
      className='Contenedor3D'
      ref={mountRef}
      style={{width: '100%', height:'100vh'}}
    >

    <div className="progress">
      <div className='loader'></div>
      <label for="progress-bar">Loading...</label>
      <progress id='progress-bar' value='0' max='100' ></progress>
    </div>
    <div className='contenedor'>
      <h1>Secunene Landingpage</h1>
      <p><a href="https://twitter.com/secunene" target="_blank" rel="noopener noreferrer">twitter</a></p>
      <br></br>
      <br></br>
      <p><a href="https://www.instagram.com/secunene/" target="_blank" rel="noopener noreferrer">instagram</a></p>
      <br></br>
      <br></br>
      <p><a href="https://twitter.com/terqoo" target="_blank" rel="noopener noreferrer">creador uwu</a></p>
      
    </div>
    
    </div>
  )
}

export default Scene