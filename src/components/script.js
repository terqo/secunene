import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

let currentMount = null

      //scene
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        25,
        100 / 100,
        0.1,
        1000
    )

    camera.position.z = 3
    scene.add(camera)
    
    //renderer
    const renderer = new THREE.WebGLRenderer()


    //Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    //controls.target = new THREE.Vector3(3,3,3)
    controls.enableDamping = true 
    
    //resize
    const resize = () => {
      renderer.setSize(currentMount.clientWidth,
        currentMount.clientHeight)
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight
        camera.updateProjectionMatrix()
    }   
    window.addEventListener('resize', resize)


    //const clock = new THREE.Clock()

    //loader
    const gltfLoader = new GLTFLoader()
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath( '/draco/' );

    gltfLoader.setDRACOLoader(dracoLoader)
    gltfLoader.load('./model/ted.glb',
        (gltf)=> {
          const model = gltf.scene;
          //const elapsedtime = clock.getElapsedTime();
          //model.rotation.y = elapsedtime;
          scene.add(model)
        },
        ()=>{
          
        },
        ()=>{
          
        }
        
    )

    //lights
    const enviromentMap = new THREE.CubeTextureLoader()
    const envMap = enviromentMap.load([
      './envmp/px.png',
      './envmp/nx.png',
      './envmp/py.png',
      './envmp/ny.png',
      './envmp/pz.png',
      './envmp/nz.png',
    ])
    scene.environment = envMap
    //scene.background = envMap

    const directional = new THREE.DirectionalLight('purple',1.2)
    directional.position.set(-20,0,30)
    scene.add(directional)

   
    //render the scene 
    const animate = () => {
      controls.update()
      renderer.render(scene, camera)
      requestAnimationFrame(animate)

    }
    animate()
    

     //Mount Scene
     export const mountScene = (mountRef) => {
        currentMount = mountRef.current
        resize()
        currentMount.appendChild(renderer.domElement)
     }

     //clean Up Scene
    export const cleanupScene = () => {
        renderer.dispose()
        currentMount.removeChild(renderer.domElement)
        
    }
    console.log('limpiado')