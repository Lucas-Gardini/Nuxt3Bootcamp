<script setup lang="ts">
interface NameProps {
	selectedName: string;
}

const props = defineProps<NameProps>();

const emit = defineEmits(["remove"]);
</script>

<template>
	<div class="card">
		<h4>{{ selectedName }}</h4>
		<p @click="emit('remove')">x</p>
	</div>
</template>

<style>
.card {
	position: relative;
	background-color: rgb(255, 255, 255);
	color: #424242;
	border-radius: 0.75rem;
	border: 1px solid rgb(27, 138, 103);
	width: 28%;
	padding: 0.1rem;
	margin: 0.5rem;
	font-size: 1rem;
	font-weight: 200;
}

.card p {
	position: absolute;
	top: -20%;
	left: 92.5%;
	cursor: pointer;
	color: black;
}
</style>
