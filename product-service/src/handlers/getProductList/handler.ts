import 'source-map-support/register';
import {PRODUCTS} from '@app/constants/products';

import {formatJSONResponse} from '@libs/apiGateway';
import {middyfy} from '@libs/lambda';

export const getProductList = middyfy(async () => {
		return formatJSONResponse({
			data: PRODUCTS,
		});
	},
);