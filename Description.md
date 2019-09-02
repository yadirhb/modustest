# React / Redux coding test

The following coding test is meant to test the problem solving skills and knowledge of the React and Redux libs.

## Guidelines

- Use **Create React App** to generate a react project 
- Keep the presentational layer separated from the app layer.
- Use any layout of your choice; keep both search and list (described below) always visible
- Use stateful React components only when necessary, make use of pure and functional components wherever possible
- Not use any other library/framework outside of the strictly necessary ones in the React/Redux ecosystem;  e.g. Lodash, Bootstrap are not allowed

## Requisites
### The shopping list 

Create a shopping list that does the followings:
  - Allows searching the products (Using the mock described below)
  - Renders every product in the list with + / - buttons to add / remove items. Automatically remove the product when items are 0.
  - Allows up to 5 different products to be selected.
  - Allows up to 3 items of the same product to be selected
  - Allows up to a maximimum of 10 different items in total to be selected
  - Previews the total price amount
  - **Nice to have** Has a button that will save/reset the selected products in localstorage. When refreshing the page, the previous list of products (if available) should be restored.

### The api mock

Mock an api server (it can be a function, class, or anything that suits the behaviour) returning a list of the available items in the catalog where the item name or sector contains the api argument used; e.g. if looking for _eed_, the item _needle_ should be returned, while the item _hammer_ shouldn't.
  - The api is async
  - The response delay will be 200ms per request character
  - Multi search can be achieved by comma separated words
  - Search on both fields _name_, _sector_
  - The api should throw an error if non alphanumeric characters are used
  - Render anything representing a "pending state" when pending
  - Render the products only on succesful requests
  - Render the error otherwise

### Sample Items 

Below a list of items - other items can be added if necessary

```javascript
[
  {
    name: 'Hammer',
    sector: 'Buildings', 
    price: 20
  },
  {
    name: 'Needle',
    sector: 'Building', 
    price: 0.02
  },
  {
    name: 'Metal Chain',
    sector: 'Building', 
    price: 55
  },
  {
    name: 'Scotch Tape',
    sector: 'Building', 
    price: 7.5
  },
  {
    name: 'Keyboard',
    sector: 'Office', 
    price: 37
  },
  {
    name: 'Monitor',
    sector: 'Office', 
    price: 299
  },
  {
    name: 'Desk',
    sector: 'Office', 
    price: 250
  },
  {
    name: 'Lamp',
    sector: 'Office', 
    price: 43,
  },
  {
    name: 'Bread Loft',
    sector: 'Food & Beverages', 
    price: 5
  },
  {
    name: 'Soda',
    sector: 'Food & Beverages', 
    price: 3.3
  },
  {
    name: 'Sugar',
    sector: 'Food & Beverages', 
    price: 1.99
  },
  {
    name: 'Socks',
    sector: 'Clothing', 
    price: 7.3
  },
  {
    name: 'Winter Jacket',
    sector: 'Clothing', 
    price: 94
  },
  {
    name: 'Shirt',
    sector: 'Clothing', 
    price: 45
  },
]
```
