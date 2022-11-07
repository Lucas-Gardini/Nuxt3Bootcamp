<script setup lang="ts">
import { Genders, Lengths, Popularities } from "@/data/names";

interface OptionProps {
	option: {
		title: string;
		category: string;
		buttons: Array<Genders> | Array<Popularities> | Array<Lengths>;
	};

	options: {
		gender: Genders;
		popularity: Popularities;
		length: Lengths;
	};
}

const props = defineProps<OptionProps>();

const computeOptionClass = (button: string, index: number) => {
	let css = "";
	if (index === 0) {
		css += "left";
	} else if (index === props.option.buttons.length - 1) {
		css += "right";
	}

	if (props.options[props.option.category] === button) {
		css += " active";
	}

	return css;
};
</script>

<template>
	<div class="option">
		<h4>{{ option.title }}</h4>
		<div class="buttons">
			<button
				v-for="(button, i) in option.buttons"
				:key="i"
				:class="computeOptionClass(button, i)"
				@click="options[option.category] = button"
			>
				{{ button }}
			</button>
		</div>
	</div>
</template>

<style scoped>
.option {
	margin-bottom: 2rem;
}

.option button {
	background-color: white;
	outline: 0.15rem solid rgb(27, 138, 103);
	color: rgb(27, 138, 103);
	border: none;
	border-radius: 0rem;
	padding: 0.5rem 1rem;
	/* margin: 0.5rem; */
	width: 12rem;
	font-size: 1rem;
	cursor: pointer;
	font-weight: 200;
}

.option button:hover {
	background-color: rgb(27, 138, 103);
	color: white;
}

.option button.left {
	border-top-left-radius: 0.75rem;
	border-bottom-left-radius: 0.75rem;
}

.option button.right {
	border-top-right-radius: 0.75rem;
	border-bottom-right-radius: 0.75rem;
}

.option button.active {
	background-color: rgb(27, 138, 103);
	color: white;
}

.option button.active:hover {
	background-color: rgb(19, 108, 80);
}
</style>
