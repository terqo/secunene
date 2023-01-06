import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { frases } from './quotes/quotes'

//load frases
export function quotes(){
  document.getElementById('quotesDisplay').value = frases[Math.floor(Math.random() * frases.length)]      
}

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
    controls.enableRotate = false
    //resize
    const resize = () => {
      renderer.setSize(currentMount.clientWidth,
        currentMount.clientHeight)
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight
        camera.updateProjectionMatrix()
    }   
    window.addEventListener('resize', resize)


    //const clock = new THREE.Clock()
    //load model3d
    const loadingManager = new THREE.LoadingManager(
      ()=>{
        const progressBarContainer = document.querySelector('.progress')
        progressBarContainer.style.display = 'none'
        console.log('Model cargado')
      },
      (itemUrl,
        itemsToLoad,
        itemsLoaded
        )=>{
        const progressBar = document.getElementById('progress-bar')
        progressBar.value = (itemsLoaded/itemsLoaded)*100;
        console.log((itemsToLoad/itemsLoaded)*100)
      },
      ()=>{
        console.error('hubo un problema al cargar')
      }
    )
 
    //loader
    const gltfLoader = new GLTFLoader(loadingManager)
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath( '/draco/' );

    gltfLoader.setDRACOLoader(dracoLoader)
    gltfLoader.load('./model/ted.glb',
        (gltf)=> {
          const model = gltf.scene;
          //const elapsedtime = clock.getElapsedTime();
          //model.rotation.y = elapsedtime;
          var plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -2);
          var raycaster = new THREE.Raycaster();
          var mouse = new THREE.Vector2();
          var pointOfIntersection = new THREE.Vector3();
          currentMount.addEventListener("mousemove", onMouseMove, false);
          
          function onMouseMove(event){
            mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            raycaster.ray.intersectPlane(plane, pointOfIntersection);
            model.lookAt(pointOfIntersection);
          }
          model.scale.set(5,5,5)
          //modify materials using .traverse().
          model.traverse((node) => {
            if (!node.isMesh) return;
            node.material.wireframe = true;
          });
          scene.add(model)
        },
        ()=>{
          
        },
        ()=>{
          
        }
        
    )

    const gltfLoader2 = new GLTFLoader()
    const dracoLoader2 = new DRACOLoader()
    dracoLoader2.setDecoderPath( '/draco/' );

    gltfLoader2.setDRACOLoader(dracoLoader2)
    gltfLoader2.load('./model/secunene.glb',
        (gltf2)=> {
          const model = gltf2.scene;
          //const elapsedtime = clock.getElapsedTime();
          //model.rotation.y = elapsedtime;
          model.position.x =0
          model.position.y =-0.1
          model.scale.set(0.1,0.1,0.1)
          //modify materials using .traverse().
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

