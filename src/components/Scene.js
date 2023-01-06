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
      <h1>hola </h1>  <h1 className='nene'>nene</h1>
      

      
      <section>
        <div >
          <ul>
            <li> 
              
            </li>
            <br></br>
            <li>
              <p></p>
            </li>
            <br></br>
            <li>
              <p></p>
            </li>
          </ul>
        </div>
      </section>
      

    </div>
    
    </div>
  )
}

export default Scene