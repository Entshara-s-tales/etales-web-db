import { render } from "@testing-library/svelte";
import Button from "../Button.svelte";
import TestButton from "./TestButtonWithSlot.svelte";

test("should render with missing content", () => {
	const results = render(Button);

	expect(results.getByText("Missing content")).toReturn;
	expect(results.container).toMatchSnapshot();
});

test("should render", () => {
	const results = render(TestButton);

	expect(() => results.getByText("Test content")).not.toThrow();
	expect(results.container).toMatchSnapshot();
});
