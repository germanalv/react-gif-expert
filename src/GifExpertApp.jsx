import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const category = 'Soccer'; 

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        /* if ( categories.find( cat => cat === newCategory ) )
            throw new Error('Ya existe esa categoria');
        else */
            setCategories( [ newCategory, ...categories]);
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {
                categories.map( (cat) => (
                    <GifGrid 
                        key={cat} 
                        category={cat}
                    /> 
                ))
            }
        </>
    )
}