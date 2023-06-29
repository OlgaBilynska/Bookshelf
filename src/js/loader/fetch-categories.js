import {useBooksApi} from '../../services/booksApi.js';

const booksApi = useBooksApi();


const handleOnPress = (e) => {
  e.preventDefault();

//   state.isLoading = true;
//   state.isError = false;

  booksApi
    .getCategoryList()
    .then((res) => {
    //   state.data = res;
      parceCategoryList(res);
    })
    // .catch((err) => {
    //   state.error = err;
    //     state.isError = true;
    //     console.log(err);
    // })
    // .finally(() => {
    //   state.isLoading = false;
    // });
};

const parceCategoryList = (list) => {
  const innerList = list
    .map(({ list_name }) => `<li>${list_name}</li>`)
    .join("");
  console.log(innerList);
//   ListRef.innerHTML = innerList;
};

const fakeEvent = {
  preventDefault: () => {}
};

handleOnPress(fakeEvent);
