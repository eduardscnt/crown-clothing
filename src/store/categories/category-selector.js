import { createSelector } from 'redux'

const selectCategoryReducer = (state)=>state.categories;

export const selectCategories = createSelector(
  [],
  ()=>{}
  
)

export const selectCategoriesMap = (state) => {
console.log('selector fired');
 return state.categories.categories.reduce((acc, category) => {
    const{title,items}=category;
    acc[title.toLowerCase()] = items;
    return acc;
  },
  {}
  );
}
