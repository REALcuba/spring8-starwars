
type MainPageProps = {
    loading: boolean;
    starshipsData: Starship[];
    handleScroll:()=>void
}
export type Starship = {
    name: string;
    model: string;
    MGLT: string
    cargo_capacity: string
    consumables: string
    cost_in_credits:string 
    created:string 
    crew: string
    edited: string
    films: []
    hyperdrive_rating:string 
    length:string 
    manufacturer:string 
    max_atmosphering_speed: string
    model:string 
    name: string
    passengers:string 
    pilots:[]
    starship_class:string
    url: string
   
}

export type GetStarshipsProps ={
    loading: boolean;
    starshipsData: Starship[];
    handleScroll: ()=>void
}

export type StarshipPageProps = {
    starshipsData: Starship[];
}

export type LoginProps = {
    setEmailValue:Dispatch<SetStateAction<string>>, 
    handleSubmitLogin: FormEventHandler<HTMLFormElement> | undefined, 
    emailValue:string
}

export type SignInProps = {
    setNameValue:Dispatch<SetStateAction<string>>,
    setEmailValue:Dispatch<SetStateAction<string>>, 
    // handleSubmitLogin: React.ReactNode, 
    handleSubmitSignIn: FormEventHandler<HTMLFormElement> | undefined, 
    emailValue:string
}
export type ProtectedRouteProps = {
    user: SetStateAction<string> | undefined,
    redirectPath: string,
    children: React.ReactNode
}