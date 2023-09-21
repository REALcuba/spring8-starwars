import { useEffect, useState } from "react";
import { Api } from "../../utils/fetchDataFromAPI"; // Importa tu API

const UseGetNameData = (url: string, dataArray: string[]) => {
    const [nameData, setNameData] = useState<string[]>([]);
    // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchFilmAndCharacterData = async () => {
            try {
                const movieDataArray = await Promise.all(
                    dataArray.map(async (dataUrl: string) => {
                        const dataNum = dataUrl.replace(/\D/g, "");
                        const response = await Api.get(`${url}${dataNum}`);
                        // Asume que la respuesta contiene el nombre de la película o personaje
                        const getNames = response.data.title || response.data.name;
                        return getNames;
                    })
                );

                setNameData(movieDataArray);
                // setFilmLoading(false)
                // setPilotLoading(false)
            } catch (error) {
                console.log(error);
            }
        };

        fetchFilmAndCharacterData();
    }, [url, dataArray]);

    return nameData;
};

export default UseGetNameData;
