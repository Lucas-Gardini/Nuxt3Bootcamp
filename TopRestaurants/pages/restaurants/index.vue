<template>
	<NuxtLayout name="custom">
		<Html lang="en-US">
			<Head>
				<Title>TOP 50 Restaurants</Title>
				<Meta name="description" content="My page is cool" />
				<Link
					rel="preload"
					href="https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/pensive-face_1f614.gif"
					as="script"
				/>
			</Head>
		</Html>

		<RestaurantTable />
	</NuxtLayout>
</template>
