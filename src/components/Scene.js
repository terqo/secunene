import {useRef, useEffect} from 'react'
import { cleanupScene, mountScene } from './script'
import Sidebar from './sidebar/Sidebar'

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
    <Sidebar/>
    <div className="progress">
      <div className='loader'></div>
      <label for="progress-bar">Loading...</label>
      <progress id='progress-bar' value='0' max='100' ></progress>
    </div>

    <div className='contenedor'>
      <h1 id='quotesDisplay'>"If you died right now, how would you feel about your life?" —Tyler Durden</h1>
      <button onClick={() => alert("Hello!")}>Quotes</button>
    </div>
    
    </div>
  )
}

export default Scene