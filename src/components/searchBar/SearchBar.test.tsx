import SearchBar from "./SearchBar";
import { describe, it, expect } from "vitest";
// import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event'

describe("SearchBar", () => {
    it("should be a function", () => {
        expect(typeof SearchBar).toBe("function");
    });
    it("should render correctly", () => {
        expect(SearchBar).toMatchSnapshot();
    });
   
});