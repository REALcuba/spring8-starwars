import Nav from "./Nav";
import{describe,it, expect} from 'vitest';

describe('Nav',()=>{
    it('should be a function',()=>{
        expect(typeof Nav).toBe('function');
    });
    it('should render correctly',()=>{
        expect(Nav).toMatchSnapshot();
    });
})