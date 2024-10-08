import { Setting } from "obsidian";

export const createSection = (
	el: HTMLElement,
	label: string,
	defaultOpen?: boolean
) => {
	const heading = new Setting(el)
		.setHeading()
		.setName(label)
		.setClass("better-properties-setting-nested-heading");

	const icon = createSpan({
		text: ">",
		attr: { style: "display: inline-block;" },
	});
	// setIcon(iconEl, "chevron-right");
	heading.nameEl.insertAdjacentElement("afterbegin", icon);
	icon.insertAdjacentElement("afterend", createSpan({ text: " " }));
	if (defaultOpen) {
		icon.style.rotate = "90deg";
	}

	const defaultDisplay = defaultOpen ? "display: block;" : "display: none;";

	const content = el.createDiv({
		cls: "better-properties-setting-nested-content",
		attr: { style: defaultDisplay },
	});
	heading.settingEl.addEventListener("click", () => {
		if (content.style.display === "none") {
			icon.style.rotate = "90deg";
			return (content.style.display = "block");
		}
		icon.style.rotate = "0deg";
		content.style.display = "none";
	});
	return { heading, content, icon };
};
