const products = [
  { id: 1, title: "Napoleon", category: "cakes", price: 120, qty: 2, available: true },
  { id: 2, title: "Eclair", category: "pastry", price: 40, qty: 5, available: true },
  { id: 3, title: "Macaron", category: "pastry", price: 25, qty: 0, available: false },
  { id: 4, title: "Medovik", category: "cakes", price: 150, qty: 1, available: true },
  { id: 5, title: "Strudel", category: "strudel", price: 90, qty: 0, available: false },
  { id: 6, title: "Cheesecake", category: "cakes", price: 130, qty: 4, available: true },
  { id: 7, title: "Croissant", category: "pastry", price: 30, qty: 6, available: true },
  { id: 8, title: "Cupcake", category: "pastry", price: 45, qty: 8, available: true },
  { id: 9, title: "Apple Pie", category: "pies", price: 110, qty: 2, available: true },
  { id: 10, title: "Brownie", category: "cakes", price: 70, qty: 5, available: true }
];

const productListEl = document.getElementById('product-list');
const controlPanelEl = document.getElementById('control-panel');
const btnFilterAvailable = document.getElementById('btn-filter-available');
const sortSelectEl = document.getElementById('sort-select');
const searchInputEl = document.getElementById('search-input');
const searchSuggestionsEl = document.getElementById('search-suggestions');

let visibleProducts = products;
let isFilteringAvailable = false;
let currentSort = 'none';
let searchQuery = '';

// const fnList = [filterAvailable, getTotalQty, calculatePriceWithTax];  Учебная задача, для ознакомления и понимания метаданных.
// const logPanelEl = document.getElementById('logPanel');
// const fnMetaRows = [];  
// fnList.forEach(fn => {
//   const fnName = fn.name;
//   const fnLength = fn.length;
//   const metaRow = `Function ${fnName} - parameters: ${fnLength}`;
//   fnMetaRows.push(metaRow);
// });
// const fnMetaHtml = fnMetaRows.join('<br>');
// logPanelEl.innerHTML = fnMetaHtml;


function filterAvailable(products) {
  const filteredProducts = products.filter(product => product.available === true);
  return filteredProducts;
}

function getTotalQty(products) {
  const totalQty = products.reduce((acc, product) => {return acc + product.qty}, 0);
  return totalQty;
}

function calculatePriceWithTax(price, taxPercent) {
  return price + price * (taxPercent / 100);
}

function renderProductList(list) {
    productListEl.innerHTML = '';
    list.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      let badgeClass;
      let badgeText;
      if(product.available) {
        badgeClass = "badge badge-available";
        badgeText = "Available";
      } else {
        badgeClass = "badge badge-unavailable";
        badgeText = "Not available";
      }
      card.innerHTML = `
      <h3>${product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Quantity: ${product.qty}</p>
      <span class="${badgeClass}">${badgeText}</span> 
      `;
      productListEl.appendChild(card);
    });
}

btnFilterAvailable.addEventListener('click', () => {
  if(!isFilteringAvailable) {
    isFilteringAvailable = true;
    btnFilterAvailable.textContent = 'Show All';
  } else {
    isFilteringAvailable = false;
    btnFilterAvailable.textContent = 'Only Available';
  }
  applyFilterAndSort();
});

function sortProducts(list, sortMode) {
  const copied = [...list];
  if(sortMode === 'asc') {
    copied.sort((a, b) => a.price - b.price);
    return copied;
  } else if(sortMode === 'desc') {
    copied.sort((a, b) => b.price - a.price);
    return copied;
  } else {
    return list;
  }
}

sortSelectEl.addEventListener('change', () => {
  currentSort = sortSelectEl.value;
  applyFilterAndSort();
});

function applyFilterAndSort() {
  let result = [...products];

  if(isFilteringAvailable) {
    result = filterAvailable(result);
  }

  if(searchQuery !== '') {
    result = searchProducts(result, searchQuery);
  }

  result = sortProducts(result, currentSort);

  visibleProducts = result;

  renderProductList(visibleProducts);
}

  function searchProducts(list, query) {
    let comparableQuery = query.toLowerCase().trim();
    if(comparableQuery === '') {
      return list;
    } else {
      let filteredList = list.filter(product => isSimilar(product,  comparableQuery));
      return filteredList;
    }
  }

function debounce(fn, delay) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, arguments), delay)
  };
}

function handleSearchInput(){
   // console.log('search triggered');
    searchQuery = searchInputEl.value.trim();
    applyFilterAndSort();
    const baseList = getBaseListForSuggestions();
    const suggestions = getSuggestions(baseList, searchQuery);
    renderSearchSuggestions(suggestions);
}

const debounceSearch = debounce(handleSearchInput, 300);


searchInputEl.addEventListener('input', debounceSearch);

function getSuggestions(list, query) {
   //console.log('getSuggestions list =', list, 'query =', query);
  let comparableQuery = query.toLowerCase().trim();
  if(comparableQuery === '') {
    return [];
  } else {
      let titles = list.filter(product => isSimilar(product, comparableQuery))
      .map(product => product.title);
      let suggestionsTitles = [...new Set(titles)];
      suggestionsTitles.length = 3;
      return suggestionsTitles;
  }
}

function renderSearchSuggestions(suggestions) {
  searchSuggestionsEl.innerHTML = '';
  if(searchQuery === '' || suggestions.length === 0) {
    searchSuggestionsEl.innerHTML = '';
    return;
  } else {
    suggestions.forEach(title => {
      const suggestionItem = document.createElement('div');
      suggestionItem.classList.add('search-suggestions-item');
      suggestionItem.textContent = title;
      suggestionItem.addEventListener('click', () => {
      searchInputEl.value = title;
      searchQuery = title.toLowerCase().trim();
      applyFilterAndSort();
      renderSearchSuggestions([]);
      });
      searchSuggestionsEl.appendChild(suggestionItem);
    });
  }
}

function getBaseListForSuggestions() {
   let result = [...products];
  if(isFilteringAvailable) {
    result = filterAvailable(result);
  }
    return result;
}

function getLevenshteinDistance(a, b) {
  const lowerA = a.toLowerCase();
  const lowerB = b.toLowerCase();
  const lenA = lowerA.length;
  const lenB = lowerB.length;

  if(lenA === 0) {
    return lenB;
  };

  if(lenB === 0) {
    return lenA;
  };

  const dp = [];
  
  for(let i = 0; i <= lenA; i++) {
    const row = new Array(lenB + 1).fill(0);
    dp.push(row);
  }

  for(let j = 0; j <=lenB; j++) {
    dp[0][j] = j;
  }

  for(let i = 0; i <= lenA; i++) {
    dp[i][0] = i;
  }

  for(let i = 1; i <= lenA; i++) {
    for(let j = 1; j <= lenB; j++) {
      const charA = lowerA[i - 1];
      const charB = lowerB[j - 1];
      const cost = charA === charB ? 0 : 1;
      const deletion = dp[i-1][j] + 1;
      const insertion = dp[i][j-1] + 1;
      const substitution = dp[i-1][j-1] + cost;
      dp[i][j] = Math.min( deletion, insertion, substitution );
    }
  }
  return dp[lenA][lenB];
}

function getTitleDistance(product, query) {
  let productLowerCase = product.title.toLowerCase().trim();
  let queryLowerCase = query.toLowerCase().trim();
  
  return getLevenshteinDistance(productLowerCase, queryLowerCase);
}

  function isSimilar(product, query) {
    const productLowerCase = product.title.toLowerCase().trim();
    const queryLowerCase = query.toLowerCase().trim();
    const queryLength = queryLowerCase.length;
    let maxDistance;
    if(queryLength <= 3) {
      maxDistance = 1;
    } else if(queryLength >= 4 && queryLength <= 6) {
      maxDistance = 2;
    } else {
      maxDistance = 3;
    }
    if(productLowerCase.includes(queryLowerCase)) {
      return true;
    } else {
      const distance = getLevenshteinDistance(productLowerCase, queryLowerCase);
      return distance <= maxDistance;
    }
  }

applyFilterAndSort();