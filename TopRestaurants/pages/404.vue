<template>
	<NuxtLayout name="error">
		<template #header>
			<h1>Page not found</h1>
		</template>

		<template #redirect>
			<NuxtLink href="/">Go to home page</NuxtLink>
		</template>
	</NuxtLayout>
</template>

<style scoped>
.container {
	text-align: center;
	margin-top: 5rem;
}
</style>
