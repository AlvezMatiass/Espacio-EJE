import Itemlistcontainer from "../Itemlistcontainer";

const Home = () => {
    const Listas = [
        {
            producto: 'REPRESENT',
            img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_NV22_BannerWeb2_XP1fzTY.2e16d0ba.fill-700x930-c100.jpg',
            id: '1',   
        },
        {
            producto: 'REPRESENT',
            img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_NV22_BannerWeb1.2e16d0ba.fill-700x930-c100.jpg',
            id: '2',   
        },
        {
            producto: 'PRESIDENTE',
            img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_NV22_RRSS_Presidente_Web.2e16d0ba.fill-700x930-c100.png',
            id: '3',   
        },
        {
            producto: 'BEER & CHURROS',
            img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_NV22_BannerWeb4b.2e16d0ba.fill-700x930-c100.jpg',
            id: '4',   
        },
        {
            producto: 'ORIGINAL GANGSTER',
            img: 'https://ogsbrand.storage.googleapis.com/media/images/OGS_NV22_BannerWeb2.2e16d0ba.fill-700x930-c100.jpg',
            id: '5',   
        },
        {
            producto: `OG'S`,
            img: 'https://ogsbrand.storage.googleapis.com/media/images/Clasica.2e16d0ba.fill-700x930-c100.jpg',
            id: '6',   
        }
    ];
    return (
        <div>
            <Itemlistcontainer listas={Listas}/>   
        </div>
        )
}

export default Home;