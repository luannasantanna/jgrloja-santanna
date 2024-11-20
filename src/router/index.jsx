import { Route, Routes, useLocation } from "react-router-dom";
import HeroHearder from "../components/HeroHeader";
import TagPromocao from "../components/TagPromocao";
import ItemListContainer from "../pages/ItemListContainer";
import ItemDetailContainer from "../pages/ItemDetailContainer";
import NavBar from "../components/NavBar";

export default function Router () {
    const location = useLocation(); 
    const homePage = location.pathname === '/';
    const otherPages = location.pathname !== '/';

    return (
        <>
            {homePage && <HeroHearder />}
            {homePage && <TagPromocao text={'Promoção válida até 27/03/2024'} />}

            {otherPages && <NavBar otherPages={otherPages} />}

            <Routes>
                <Route exact path="/" element={<ItemListContainer/>} />
                <Route exact path="/category/:filter?" element={<ItemListContainer />} />
                <Route exact path="/JGR-produtos/:id" element={<ItemDetailContainer />} />
            </Routes>
        </>
    );
}