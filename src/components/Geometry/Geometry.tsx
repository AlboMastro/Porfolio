import { LineDashedMaterial, Mesh, MeshBasicMaterial, TorusGeometry } from 'three';

export const Geometry:React.FC = () => {
    const geometry = new TorusGeometry( 10, 3, 16, 100 );
    const material = new MeshBasicMaterial ( { color: 0xffffff , wireframe: true });
    const torus = new Mesh ( geometry, material );
    return (
        <>
            
        </>
    )
}