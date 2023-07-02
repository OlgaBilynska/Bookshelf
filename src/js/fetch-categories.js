import { useBooksApi } from '../services/booksApi';
import { getTopBooksByCategories } from "./top-books";
import { createCategoriesMarkup } from './top-books';
import { renderBooks } from './renderBooksByCategories';
import { getCategoryElements } from './categories';
const booksApi = useBooksApi();

const handleOnPress = (e) => {

  booksApi
    .getCategoryList()
    .then((res) => {
      parseCategoryList(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
    });
};
const categoryListEl = document.querySelector('.category-list');


const parseCategoryList = (list) => {
  const uniqueCategories = [...new Set(list.map(({ list_name }) => list_name))].sort();
  const categoryList = uniqueCategories.map((category) => {
    if (category !== null && category !== undefined) {
      return `<li class="category-item list"><a class="category-link link" href="">${category}</a></li>`
    }
  }).join('');
  categoryListEl.insertAdjacentHTML('beforeend', categoryList);
  getCategoryElements()
};

handleOnPress();
