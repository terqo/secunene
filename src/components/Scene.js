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
      <label for="progress-bar">Loading...</label>
      <progress id='progress-bar' value='0' max='100' ></progress>
    </div>
    </div>
  )
}

export default Scene