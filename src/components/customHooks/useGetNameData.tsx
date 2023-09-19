import { useEffect, useState } from "react";
import { Api } from "../../utils/fetchDataFromAPI"; // Importa tu API

const useGetNameData = (url: string, dataArray: string[]) => {
    const [nameData, setNameData] = useState<string[]>([]);

    useEffect(() => {
        const fetchFilmAndCharacterData = async () => {
            try {
                const movieDataArray = await Promise.all(
                    dataArray.map(async (dataUrl: string) => {
                        const dataNum = dataUrl.replace(/\D/g, "");
                        const response = await Api.get(`${url}${dataNum}`);
                        // Asume que la respuesta contiene el nombre de la película o personaje
                        const names = response.data.title || response.data.name; // Cambia esto según la estructura real de la respuesta
                        return names;
                    })
                );

                setNameData(movieDataArray);
            } catch (error) {
                console.log(error);
            }
        };

        fetchFilmAndCharacterData();
    }, [url, dataArray]);

    return nameData;
};

export default useGetNameData;
