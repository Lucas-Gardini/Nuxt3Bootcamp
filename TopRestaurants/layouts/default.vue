<template>
	<div>
		<Navbar />

		<div class="container">
			<slot />
		</div>
	</div>
</template>

<style scoped>
.container {
	text-align: center;
	margin-top: 5rem;
}
</style>
