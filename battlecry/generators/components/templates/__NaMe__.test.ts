import { render } from "@testing-library/svelte";
import __NaMe__ from "./__NaMe__.svelte";

describe("<__NaMe__/>", () => {
	it("matches snapshot", () => {
		const results = render(__NaMe__);
		expect(results.container).toMatchSnapshot();
	});
});
