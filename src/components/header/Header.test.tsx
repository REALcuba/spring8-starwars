import Header from "./Header";
import { describe, it, expect } from "vitest";
// import { render, screen } from "@testing-library/react";

describe("Header", () => {
   
    it("should render correctly", () => {
        expect(Header).toMatchSnapshot();
    });

})