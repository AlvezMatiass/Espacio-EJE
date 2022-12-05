import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import Itemlistcontainer from '../../components/Itemlistcontainer';

import Contacto from '../../components/Contacto';
import Productos from '../../components/Productos';
import Home from '../../components/Home';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Detalle from '../../components/Detalle';


const Initial = () => {
    const Menus = [
        {
            name: 'HOME',
            href: '/'
        },
        {
            name: 'REPRESENT',
            href: '/represent'   
        },
        {
            name: 'PRESIDENTE',
            href: '/presidente'
        },
        {
            name: 'BEER & CHURROS',
            href: '/beerchurros'
        },
        {
            name: 'TIGER',
            href: '/tiger'
        },
        {
            name: `OG'S`,
            href: '/og'
        }

    ]
    
    return (
        <Layout>   
            <BrowserRouter>
                <Navbar menus={Menus} />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/contacto' element={<Contacto />} />
                    <Route exact path='/productos'element={<Productos />} />
                    <Route exact path='/detalleproducto/:idproducto' element={<Detalle />}/>
                </Routes>
            </BrowserRouter>  
        </Layout>
    )
}

export default Initial;