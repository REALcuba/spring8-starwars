import { useEffect } from "react";
import { Api } from "../../utils/fetchDataFromAPI";

interface MyComponentProps {
    pilots: string[];
}


const PilotsCard: React.FC<MyComponentProps> = ({ pilots }) => {

    useEffect(() => {
        async function fetchData() {
        //   setLoading(true);
          try {
            const response = await Api.get(`/people/`);
            const peopleData:[] = response.data.results;
            // setNextPage(response.data.next)
    console.log(peopleData);
    
            // setData(prevData => [...prevData, ...newData]);
            // setLoading(false);
    
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            if (error.response) {
              console.log(error.response.data);
    
            } else {
              console.error('Error fetching data:', error);
            }
            // setLoading(false);
          }
        }
    
        fetchData();
      }, []);

    return (
        <div className='w-40 h-36 flex flex-col  rounded bg-white text-gray-500 '>
            <h3 className="p-2 border-b-2">Related Pilots</h3>
            <ul className="flex flex-row gap-2 rounded-md mt-2 ms-2">
                {pilots.length > 0 ? (
                    pilots.map((pilot: string) => {
                        const pilotUrl: string = pilot;
                        const pilotNum = pilotUrl.replace(/\D/g, "");
                        return (
                            <img
                                className="rounded-md w-6"
                                key={pilotNum}
                                src={`https://starwars-visualguide.com/assets/img/characters/${pilotNum}.jpg`}
                                alt="pilot of the ship"
                            />
                        )
                    })
                ) : (
                    <div>No pilots found</div>
                )}
            </ul>

        </div>
    )
}

export default PilotsCard
