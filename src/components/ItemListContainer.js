import React from "react";
import Mensaje from "./Bienvenida";
import ItemList from "./ItemList";
import {useEffect, useState} from "react"
import { getProducts, getProductsByCategory } from "./productsMock";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [products, setProducts] = useState ([])

    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error)
            })
    },[categoryId] )


    return(
        <div >
            <Mensaje  greeting="a GameShop estos son todos nuestros productos"/>
            <ItemList products={products}/>
        </div >
    )
}

export default ItemListContainer