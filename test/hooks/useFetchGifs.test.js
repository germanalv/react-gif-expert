import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Prueba en hook useFetchGifs', () => { 
    
    test('debe regresar el estado inicial', () => { 
            
        //Estado inicial es Arreglo de imagenes vacio y IsLoading=true

        const { result } = renderHook( () => useFetchGifs('One Punch'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test('debe de retornar un arreglo de imagenes y isoading en false', async () => { 
            
        //Estado inicial es Arreglo de imagenes vacio y IsLoading=true

        const { result } = renderHook( () => useFetchGifs('One Punch'));
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
        );
        
        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });

})