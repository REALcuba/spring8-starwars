
import LandingPage from "./LandingPage";
import { describe, it, expect } from "vitest";



//testing component LandingPage that include the test: Esta es la landing

describe("LandingPage", () => {
    it("should be a function", () => {
        expect(typeof LandingPage).toBe('function');
    });
    it("should render correctly", () => {
        expect(LandingPage).toMatchSnapshot();
    });
    it('body text should match Esta es la landing', () => {
        expect('Esta es la landing').toMatchSnapshot('Esta es la landing');
    })
})




