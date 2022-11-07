interface Name {
	id: number;
	name: string;
	gender: Genders;
	popularity: Popularities;
	length: Lengths;
}

export enum Genders {
	GIRL = "Girl",
	BOY = "Boy",
	UNISEX = "Unisex",
}

export enum Popularities {
	TRENDY = "Trendy",
	UNIQUE = "Unique",
}

export enum Lengths {
	SHORT = "Short",
	LONG = "Long",
	ALL = "All",
}
export const names: Array<Name> = [
	{
		id: 1,
		name: "Laith",
		gender: Genders.BOY,
		popularity: Popularities.UNIQUE,
		length: Lengths.SHORT,
	},
	{
		id: 2,
		name: "Jake",
		gender: Genders.BOY,
		popularity: Popularities.TRENDY,
		length: Lengths.SHORT,
	},
	{
		id: 3,
		name: "Lamelo",
		gender: Genders.BOY,
		popularity: Popularities.UNIQUE,
		length: Lengths.SHORT,
	},
	{
		id: 4,
		name: "Abraham",
		gender: Genders.BOY,
		popularity: Popularities.TRENDY,
		length: Lengths.LONG,
	},
	{
		id: 5,
		name: "Bartholomew",
		gender: Genders.BOY,
		popularity: Popularities.UNIQUE,
		length: Lengths.LONG,
	},
	{
		id: 6,
		name: "Noah",
		gender: Genders.BOY,
		popularity: Popularities.TRENDY,
		length: Lengths.SHORT,
	},
	{
		id: 7,
		name: "Benjamin",
		gender: Genders.BOY,
		popularity: Popularities.TRENDY,
		length: Lengths.LONG,
	},
	{
		id: 8,
		name: "William",
		gender: Genders.BOY,
		popularity: Popularities.TRENDY,
		length: Lengths.LONG,
	},
	{
		id: 9,
		name: "Lucus",
		gender: Genders.BOY,
		popularity: Popularities.TRENDY,
		length: Lengths.SHORT,
	},
	{
		id: 10,
		name: "Harrison",
		gender: Genders.BOY,
		popularity: Popularities.UNIQUE,
		length: Lengths.LONG,
	},
	{
		id: 11,
		name: "Selma",
		gender: Genders.BOY,
		popularity: Popularities.UNIQUE,
		length: Lengths.SHORT,
	},
	{
		id: 12,
		name: "Asher",
		gender: Genders.BOY,
		popularity: Popularities.UNIQUE,
		length: Lengths.SHORT,
	},
	{
		id: 13,
		name: "Tucker",
		gender: Genders.BOY,
		popularity: Popularities.TRENDY,
		length: Lengths.SHORT,
	},

	{
		id: 14,
		name: "Arya",
		gender: Genders.GIRL,
		popularity: Popularities.UNIQUE,
		length: Lengths.SHORT,
	},
	{
		id: 15,
		name: "Olivia",
		gender: Genders.GIRL,
		popularity: Popularities.TRENDY,
		length: Lengths.SHORT,
	},
	{
		id: 16,
		name: "Fay",
		gender: Genders.GIRL,
		popularity: Popularities.UNIQUE,
		length: Lengths.SHORT,
	},
	{
		id: 17,
		name: "Brooklyn",
		gender: Genders.GIRL,
		popularity: Popularities.TRENDY,
		length: Lengths.LONG,
	},
	{
		id: 18,
		name: "Genevieve",
		gender: Genders.GIRL,
		popularity: Popularities.UNIQUE,
		length: Lengths.LONG,
	},
	{
		id: 19,
		name: "Zoe",
		gender: Genders.GIRL,
		popularity: Popularities.TRENDY,
		length: Lengths.SHORT,
	},
	{
		id: 20,
		name: "Valentina",
		gender: Genders.GIRL,
		popularity: Popularities.TRENDY,
		length: Lengths.LONG,
	},
	{
		id: 21,
		name: "Josephine",
		gender: Genders.GIRL,
		popularity: Popularities.TRENDY,
		length: Lengths.LONG,
	},
	{
		id: 22,
		name: "Maya",
		gender: Genders.GIRL,
		popularity: Popularities.TRENDY,
		length: Lengths.SHORT,
	},
	{
		id: 23,
		name: "Everleigh",
		gender: Genders.GIRL,
		popularity: Popularities.UNIQUE,
		length: Lengths.LONG,
	},
	{
		id: 24,
		name: "Poppy",
		gender: Genders.GIRL,
		popularity: Popularities.UNIQUE,
		length: Lengths.SHORT,
	},
	{
		id: 25,
		name: "Maia",
		gender: Genders.GIRL,
		popularity: Popularities.UNIQUE,
		length: Lengths.SHORT,
	},
	{
		id: 26,
		name: "Ivy",
		gender: Genders.GIRL,
		popularity: Popularities.TRENDY,
		length: Lengths.SHORT,
	},

	{
		id: 27,
		name: "Jude",
		gender: Genders.UNISEX,
		popularity: Popularities.UNIQUE,
		length: Lengths.SHORT,
	},
	{
		id: 28,
		name: "Adrian",
		gender: Genders.UNISEX,
		popularity: Popularities.TRENDY,
		length: Lengths.SHORT,
	},
	{
		id: 29,
		name: "Sunny",
		gender: Genders.UNISEX,
		popularity: Popularities.UNIQUE,
		length: Lengths.SHORT,
	},
	{
		id: 30,
		name: "Channing",
		gender: Genders.UNISEX,
		popularity: Popularities.TRENDY,
		length: Lengths.LONG,
	},
	{
		id: 31,
		name: "Tennessee",
		gender: Genders.UNISEX,
		popularity: Popularities.UNIQUE,
		length: Lengths.LONG,
	},
	{
		id: 32,
		name: "Dallas",
		gender: Genders.UNISEX,
		popularity: Popularities.TRENDY,
		length: Lengths.SHORT,
	},

	{
		id: 33,
		name: "Zephyr",
		gender: Genders.UNISEX,
		popularity: Popularities.UNIQUE,
		length: Lengths.LONG,
	},

	{
		id: 34,
		name: "Teri",
		gender: Genders.UNISEX,
		popularity: Popularities.TRENDY,
		length: Lengths.SHORT,
	},
];
