import Proptypes from 'prop-types'
import Itemcount from '../Itemcount'

// <Itemcount stock = {16} initial = {1} onAdd={onAdd}/>

const Itemlistcontainer = ({listas}) => {
  
    const onAdd = (count) => {
        console.log(`La compra de ${count} fue exitosa`);
    }

    return (
        <div className="itemlist__container">
            <div className='itemlist__containerflex'>
                { listas && listas.map((lista, index) =>{
                    const newKey = `${lista}-${index}`
                    return (
                        <a href="#" key={newKey} className="itemlist__itemcontainer">
                            <img src={lista.img} alt="" />
                            <div className='itemlist__detalles'>
                                <p className="itemlist__items">{lista.producto}</p>
                            </div>
                        </a>
                    )  
                })
                } 
            </div>      
        </div>
    )
}

Itemlistcontainer.proptype = {
    listas: Proptypes.array.isRequired
}

export default Itemlistcontainer;
