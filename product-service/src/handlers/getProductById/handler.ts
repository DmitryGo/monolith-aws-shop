import 'source-map-support/register';
import {PRODUCTS} from '@app/constants/products';

import {formatJSONResponse} from '@libs/apiGateway';
import {middyfy} from '@libs/lambda';

export const getProductById = middyfy(async (event) => {
	const {productId} = event?.pathParameters || {};
	const product = PRODUCTS.find(product => product.id === Number(productId));
	if (product) {
		return formatJSONResponse(product);
	}

	return {
		statusCode: 503,
		body: JSON.stringify({
			error: `Product with productId="${productId}" not found`,
		})
	}
});