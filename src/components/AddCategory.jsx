import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputChange = (event) => {
        setInputValue(event.target.value);
        //console.log();
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        //setCategories( categories => [inputValue, ...categories] );

        onNewCategory( inputValue.trim() );
        setInputValue('');
    };

    return (
        
        <form onSubmit={onSubmit}>
        {/* Tambien se puede escribir asi: <form onSubmit={ onSubmit }> por el es el misom el parametro y el valor */}
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue} 
                onChange={ onInputChange }
            />
        </form>
        
    )
}