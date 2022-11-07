<script setup lang="ts">
import restaurants from "@/data.json";

const restaurantsOrganized = {
	first: [...restaurants].slice(0, 25),
	second: [...restaurants].slice(25, 50),
};
</script>

<template>
	<div class="table">
		<h1>TOP 50: THE RANKING</h1>
		<div class="table-container">
			<div class="table-col">
				<RestaurantRow :is-header="true" />
				<RestaurantRow
					v-for="(restaurant, i) in restaurantsOrganized.first"
					:key="restaurant.id"
					:name="restaurant.name"
					:rank="restaurant.rank"
					:index="i"
				/>
			</div>
			<div class="table-col">
				<RestaurantRow :is-header="true" />
				<RestaurantRow
					v-for="(restaurant, i) in restaurantsOrganized.second"
					:key="restaurant.id"
					:name="restaurant.name"
					:rank="restaurant.rank"
					:index="i"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
.table {
	margin: 3rem 0;
}
.table h1 {
	margin-bottom: 2rem;
}
.table-container {
	display: flex;
	justify-content: space-between;
}
.table-col {
	width: 48%;
}
</style>
