# monolith-aws-shop
Monolith AWS-shop backend
1) Service is done
    Additional scope:
    * webpack
    * swagger
    * ts, es6
    * Lambda handlers (getProductsList, getProductsById) code is written not in 1 single module (file) and separated in codebase.
    * Product not found
2) Link to product-service API -
    GET - https://e1cg7th083.execute-api.us-east-1.amazonaws.com/dev/products
    GET - https://e1cg7th083.execute-api.us-east-1.amazonaws.com/dev/products/{productId}
3) FE PR link:
    link
5) Swagger deploy 
    `npm run swagger` and open http://localhost:3001/