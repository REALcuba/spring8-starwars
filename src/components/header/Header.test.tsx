import Header from "./Header";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
    it("should be a function", () => {
        expect(typeof Header).toBe("function");
    });
    it('should render an input element', () => {
        render(<Header />);
       screen.getByRole('textbox');
    })
})