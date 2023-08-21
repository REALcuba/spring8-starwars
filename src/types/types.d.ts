
type MainPageProps = {
    loading: boolean;
    starshipsData: Starship[];
}
export type Starship = {
    name: string;
    model: string;
}
export type GetStarshipsProps ={
    loading: boolean;
    starshipsData: Starship[];
}
export type StarshipPageProps = {
    starshipsData: Starship[];
}