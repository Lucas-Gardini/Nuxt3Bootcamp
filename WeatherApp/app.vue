<script setup lang="ts">
const cookie = useCookie("city");
const config = useRuntimeConfig();

if (!cookie.value) {
	cookie.value = "São Paulo";
}

// https://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=558c1e9d9f40efc98891afdbcf9e5182
const search = ref(cookie.value);
const input = ref("");
const background = ref("");

const {
	data: cityInfo,
	error,
	refresh,
}: any = useAsyncData(
	"cityInfo",
	async () => {
		try {
			const response: Record<string, any> = await $fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}`, {
				params: {
					units: "metric",
					APPID: config.WEATHER_APP_SECRET,
				},
			});

			if (response) {
				const temp = response.main.temp;
				if (temp <= -10) {
					background.value =
						"https://images.unsplash.com/photo-1483664852095-d6cc6870702d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80";
				} else if (temp > -10 && temp <= 0) {
					background.value =
						"https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80";
				} else if (temp > 0 && temp <= 10) {
					background.value =
						"https://images.unsplash.com/photo-1560258018-c7db7645254e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4032&q=80";
				} else {
					background.value =
						"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3546&q=80";
				}
			}

			console.log("SETTING COOKIE VALUE");
			cookie.value = search.value;
			return response;
		} catch (error) {
			console.log("ERROR");
			return;
		}
	},
	{ watch: [search] }
);

const handleClick = () => {
	// url encoded string
	const splitted_encoded = input.value.trim().split(" ").join("+");
	search.value = splitted_encoded;
	input.value = "";
};

const reset = () => {
	search.value = cookie.value;
};
</script>

<template>
	<div v-if="cityInfo" class="h-screen relative overflow-hidden">
		<img :src="background" class="w-full h-full" />
		<div class="absolute w-full h-full top-0 overlay" />

		<div class="absolute w-full h-full top-0 p-16 md:p-26">
			<div class="flex justify-between">
				<div>
					<h1 class="text-7xl text-white">{{ cityInfo.name }}</h1>
					<p class="font-extralight text-2xl mt-2 text-white">
						{{ new Date(Date.now()).toLocaleDateString("pt-BR", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) }}
					</p>
					<img :src="`https://openweathermap.org/img/wn/${cityInfo.weather[0].icon}@4x.png`" class="w-56 icon" />
				</div>
				<div>
					<p class="text-8xl text-white font-extralight">{{ cityInfo.main.temp }}°</p>
				</div>
			</div>
			<div class="mt-20">
				<input v-model="input" type="text" class="w-1/2 h-10" placeholder="Search for a city..." />
				<button class="bg-sky-400 w-20 text-white h-10" @click="handleClick">Search</button>
			</div>
		</div>
	</div>
	<div v-else class="p-10">
		<h1 class="text-7xl">Oops, we can't find the city {{ search }}</h1>
		<button class="mt-5 bg-sky-400 px-10 w-50 text-white h-10" @click="reset">Go Back</button>
	</div>
</template>

<style scoped>
.overlay {
	background-color: rgba(0, 0, 0, 0.5);
}

.icon {
	margin-left: -2.75rem;
	margin-top: -2.75rem;
}
</style>
