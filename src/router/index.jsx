import { Route, Routes } from "react-router-dom";
import HeroHearder from "../components/HeroHeader";
import TagPromocao from "../components/TagPromocao";
import ItemListContainer from "../pages/ItemListContainer";
import ItemDetailContainer from "../pages/ItemDetailContainer";

export default function Router () {
    return (
        <>
            <HeroHearder />
            <TagPromocao text={'Promoção válida até 27/03/2024'} />

            <Routes>
                <Route exact path="/" element={<ItemListContainer/>} />
                <Route exact path="/JGR-produtos/:id" element={<ItemDetailContainer />} />
            </Routes>
        </>
    );
}