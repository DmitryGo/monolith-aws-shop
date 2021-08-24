type TProduct = Readonly<{
	id: number;
	name: string;
	price: number;
}>;

export const PRODUCTS: ReadonlyArray<TProduct> = [
	{
		id: 1,
		name: 'cap',
		price: 199,
	},
	{
		id: 2,
		name: 'shorts',
		price: 299,
	},
	{
		id: 3,
		name: 'shorts 2',
		price: 499,
	}
];
