import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detalle = () => {

    const {idproducto} = useParams();
    useEffect(() => {
        
    }, [idproducto])

    return (
        <div>
            <h1>Tiburon blanco</h1>
            <img width={200} src='https://www.nationalgeographic.com.es/medio/2019/10/24/tiburon-blanco_2f8d9732_1280x853.jpg' />
        </div>
    )
}

export default Detalle;