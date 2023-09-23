
import { useState } from 'react';
import X from '../../assets/svg/cancel-x.svg';
type inputSearchProps = {
    handleCancelSearch: () => void;
}

 const SearchBar: React.FC<inputSearchProps> = ({ handleCancelSearch }) => {
    const [value, setValue] = useState('')
const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    return value
    console.log(value);
}
    return (
        <label className='relative flex justify-end items-center' >
            <input className='absolute h-6 rounded-md bg-slate-950 border-white focus:border-none px-2' type="text"
            onChange={handleSearch}
            placeholder='Search'
            />
            <div className='absolute rigth-0 w-6  justify-center h-6 rounded-md'
                 onClick={handleCancelSearch}>
                <img className="absolute rounded-md" src={X} alt="" />
            </div>
        </label>)
}
export default SearchBar