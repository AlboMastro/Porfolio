import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';

// Styles
import '../../styles/Background.css'

export const Background:React.FC<{}> = () => {

    // Constants to inizialize Three.js elements. 
  const scene = new Scene();
  const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  const renderer = new WebGLRenderer({
    canvas: document.querySelector('#bg') as HTMLCanvasElement
  });

  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  camera.position.setZ(30);

  renderer.render( scene, camera );
    return (
    <canvas className='bg'> 
    </canvas>

    )
}