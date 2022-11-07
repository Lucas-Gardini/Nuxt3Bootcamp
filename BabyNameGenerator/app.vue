<script setup lang="ts">
import { Genders, Popularities, Lengths, names } from "@/data/names";

interface Options {
	gender: Genders;
	popularity: Popularities;
	length: Lengths;
}

const options = reactive<Options>({
	gender: Genders.GIRL,
	popularity: Popularities.UNIQUE,
	length: Lengths.ALL,
});

const computeSelectedNames = () => {
	filteredNames.value = names
		.filter((name) => name.gender === options.gender && name.popularity === options.popularity)
		.filter((name) => {
			if (options.length === Lengths.ALL) return true;

			return name.length === options.length;
		})
		.map((name) => name.name);
};

const filteredNames = ref<Array<string>>([]);

const removeName = (index: number) => {
	const names = [...filteredNames.value];
	names.splice(index, 1);
	filteredNames.value = names;
};

const optionsArray = [
	{
		title: "1) Choose the gender",
		category: "gender",
		buttons: [Genders.GIRL, Genders.UNISEX, Genders.BOY],
	},
	{
		title: "2) Choose the name's popularity",
		category: "popularity",
		buttons: [Popularities.UNIQUE, Popularities.TRENDY],
	},
	{
		title: "3) Choose the name's length",
		category: "length",
		buttons: [Lengths.SHORT, Lengths.ALL, Lengths.LONG],
	},
];
</script>

<template>
	<div class="main-container">
		<h1>Baby Name Generator</h1>
		<p>Choose your options and click the "Find names" button below</p>
		<div class="options-container">
			<Option v-for="option in optionsArray" :key="option.title" :option="option" :options="options" />

			<button class="primary" @click="computeSelectedNames">Find Names</button>
		</div>
		<div class="cards">
			<CardName
				v-for="(name, i) in filteredNames"
				:key="name"
				:selected-name="name"
				@remove="() => removeName(i)"
			/>
		</div>
	</div>
</template>

<style scoped>
.main-container {
	font-family: Arial, Helvetica, sans-serif;
	color: rgb(27, 138, 103);
	max-width: 50rem;
	margin: 0 auto;
	text-align: center;
}

.main-container h1 {
	font-size: 3rem;
}

.options-container {
	/* nice pale color background */
	background-color: rgb(255, 255, 255);
	color: #424242;
	border-radius: 2rem;
	padding: 1rem;
	width: 95%;
	margin: 0 auto;
	margin-top: 4rem;
	position: relative;
}

button.primary {
	background-color: rgb(27, 138, 103);
	color: white;
	border: none;
	border-radius: 0.75rem;
	padding: 0.5rem 1rem;
	margin: 0.5rem;
	width: 12rem;
	font-size: 1rem;
	cursor: pointer;
	font-weight: 200;
}

button.primary:hover {
	background-color: rgb(19, 108, 80);
}

.cards {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 3rem;
	flex-wrap: wrap;
}
</style>
