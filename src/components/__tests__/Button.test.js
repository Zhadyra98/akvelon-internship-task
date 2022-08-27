import { render, screen, cleanup } from '@testing-library/react'
import Button from '../innerComponents/Button';

describe("Button Component", () => {
    it("rendered button", () => {
        const { getByTestId } = render(<Button />);
        const button = getByTestId("button");
        expect(button).toBeTruthy();
    });

    it("is Next button disabled", () => {
        const { getByTestId } = render(<Button  page={2} text="Next" incr={1} totalPages={2}/>);
        const button = getByTestId("button");
        expect(button.classList.contains('disabled')).toBeTruthy();
    });

    it("is Next button not disabled", () => {
        const { getByTestId } = render(<Button  page={1} text="Next" incr={1} totalPages={2}/>);
        const button = getByTestId("button");
        expect(button.classList.contains('disabled')).toBeFalsy();
    });
});