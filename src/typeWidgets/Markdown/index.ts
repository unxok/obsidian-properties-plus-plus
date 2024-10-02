import { EmbeddableMarkdownEditor } from "@/classes/EmbeddableMarkdownEditor";
import { CustomTypeWidget } from "..";

export const MarkdownWidget: CustomTypeWidget = {
	type: "markdown",
	icon: "m-square",
	default: () => "",
	name: () => "Markdown",
	validate: (v) => typeof v?.toString() === "string",
	render: (plugin, el, data, ctx) => {
		const container = el.createDiv({
			cls: "metadata-input-longtext properties-plus-plus-metadata-property-markdown-div",
		});
		const { value } = data;
		const str = value?.toString() ?? "";
		const emde = new EmbeddableMarkdownEditor(
			plugin.app,
			container,
			{
				value: str,
				onBlur: (editor) => {
					const val = editor.editor?.getValue() ?? "";
					ctx.onChange(val);
				},
			},
			ctx.sourcePath
		);
		ctx.metadataEditor.register(() => emde.destroy());
	},
};
