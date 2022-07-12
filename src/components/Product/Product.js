import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../commons/Container";
import Input from "../commons/Input";
import { loadProducts } from "../../store/action";
import { Link } from "react-router-dom";

export default function Products() {

  const [filterValue, setFilterValue] = useState([]);
  const [filterDatas, setFilterDatas] = useState([]);

  const store = useSelector((state) => state.productData);
  const dispatch = useDispatch();

  let productsData = [...store.products];

  const [productPage, setProductPage] = useState({
    initialPage: 0,
    totalPage: Math.ceil(store.products.length / 12),
    currentPageNo: 1,
    prevPage: false,
    nextPage: true
  });

  const totalPage = filterDatas.length > 0 ? Math.ceil(filterDatas.length / 12) : Math.ceil(productsData.length / 12);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const onFilterClick = () => {
    document.querySelector(".filter-wrapper").classList.toggle("active");
  }

  const onSortClick = () => {
    document.querySelector(".sorting-wrapper").classList.toggle("active");
  }


  const pageNavigate = (event, pageNo, prev, next) => {
    pageNo = event.target.textContent;
    event.target.parentNode.childNodes.forEach((item) => {
      item.classList.remove("active");
    })
    event.target.classList.add("active");
    prev = +pageNo === 1 ? false : true;
    next = +pageNo === +totalPage ? false : true;
    setProductPage((item) => ({
      ...item,
      initialPage: (pageNo - 1) * 12,
      currentPageNo: pageNo,
      prevPage: prev,
      nextPage: next
    }));
  }

  const nextPage = (event, pageNo, next) => {
    let activePage = "";
    let totalPages = event.target.parentNode.childNodes;
    totalPages.forEach((item, index) => {
      if (item.classList.contains("active")) {
        activePage = item;
      }
      item.classList.remove("active");
    });
    pageNo = activePage.nextSibling.textContent;
    next = +pageNo === +totalPage ? false : true;
    if (Number.isInteger(+pageNo)) {
      activePage.classList === "active" && activePage.classList.remove("active");
      activePage.nextSibling.classList.add("active");
      setProductPage((item) => ({
        ...item,
        initialPage: (pageNo - 1) * 12,
        currentPageNo: pageNo,
        prevPage: true,
        nextPage: next
      }));

    }
  }

  const prevPage = (event, pageNo, prev) => {
    let activePage = "";
    let totalPages = event.target.parentNode.childNodes;
    totalPages.forEach((item, index) => {
      if (item.classList.contains("active")) {
        activePage = item;
      }
      item.classList.remove("active");
    });
    pageNo = activePage.previousSibling.textContent;
    prev = +pageNo === 1 ? false : true;
    if (Number.isInteger(+pageNo)) {
      activePage.classList === "active" && activePage.classList.remove("active");
      activePage.previousSibling.classList.add("active");
      setProductPage((item) => ({
        ...item,
        initialPage: (pageNo - 1) * 12,
        currentPageNo: pageNo,
        nextPage: true,
        prevPage: prev
      }));
    }
  }

  const onChangeFilter = (event) => {
    let filTxt;
    let filterArrt = [...filterValue];
    if (event.target.checked) {
      filTxt = event.target.value;
      filterArrt = [...filterValue, filTxt];
    }
    else {
      filterArrt.splice(filterValue.indexOf(event.target.value), 1);
    };
    setFilterValue(filterArrt);    
    if (filterArrt.length > 0) {
      let filArr = [];
      for (let i = 0; i < store.products.length; i++) {
        for (let j = 0; j < filterArrt.length; j++) {
          if (filterArrt[j] === store.products[i].category) {
            filArr.push(store.products[i])
          }
        }
      }
      [...productsData] = filArr
      setFilterDatas(filArr);
      filArr = []
    }

    else {
      [...productsData] = store.products
      setFilterDatas(store.products);
    }

  }

  const sortingDatas = (event) => {
    event.preventDefault();
    let sortVal = event.target.value;
    let dataToSort = [...filterDatas];
    if (sortVal.toLowerCase() === "ratings") {
      const sortDatas = dataToSort.sort((item1, item2) => item1.rating.rate < item2.rating.rate ? 1 : -1);
      [...dataToSort] = sortDatas;
      setFilterDatas(sortDatas);
      return;
    }
    else if (sortVal.split(" ").join("_") === "Highest_to_lowest") {
      const sortDatas = dataToSort.sort((item1, item2) => item1.price < item2.price ? 1 : -1);
      [...dataToSort] = sortDatas;
      setFilterDatas(sortDatas);
      return;
    }
    else if (sortVal.split(" ").join("_") === "Lowest_to_highest") {
      const sortDatas = dataToSort.sort((item1, item2) => item1.price > item2.price ? 1 : -1);
      [...dataToSort] = sortDatas;
      setFilterDatas(sortDatas);
      return;
    }
    else if (sortVal.split(" ").join("_") === "Sort_by_Latest") {
      const sortDatas = dataToSort.sort((item1, item2) => (item1.id) > (item2.id) ? 1 : -1);
      [...dataToSort] = sortDatas;
      setFilterDatas(sortDatas);
      return;
    }
    else if (sortVal.split(" ").join("_") === "Sorting_Products"){
      const sortDatas = dataToSort.sort((item1, item2) => (item1.id) < (item2.id) ? 1 : -1);
      [...dataToSort] = sortDatas;
      setFilterDatas(sortDatas);
      return;
    }
  }

  const datas = filterDatas.length > 0 ? filterDatas.filter((item, index) => (index >= productPage.initialPage && index < productPage.currentPageNo * 12)) : productsData.filter((item, index) => (index >= productPage.initialPage && index < productPage.currentPageNo * 12));

  const products = datas.map((item) => {
    const { id, image, price, title, category } = item;
    return (<div key={id} className="cards">
      <div className="img-wrapper">
        <img src={image} alt={title}/>
      </div>
      <div className="content-wrapper">
        <Link to={`/products/${category.split(" ").join("_")}/${id}`}><p>{title.slice(0, 20)}...</p></Link>
        <span>&#8377; {(price * 77).toFixed(2)}</span>
        <p><img src={process.env.PUBLIC_URL + `/Images/heart.svg`} alt="heart" /></p>
      </div>
    </div>)
  });


  return (
    <section className="products-list">
      <Container>
        {store.products.length === 0 ? <p className="loading">{store.loadingMsg}</p> : <div className="column-wrapper">
          <div className="col-three">
            <span>Clothing / Women’s / Outerwear</span>
            <div className="filter-wrapper">
              <h5 className="heading-5">Filters</h5>
              <p>Attributes</p>
              <ul>
                <li><Input input={{ id: "womenClothing", type: "checkbox", value: "women's clothing", onChange: onChangeFilter }} className="wrapper" label="Women's Clothing" /></li>
                <li><Input input={{ id: "mensClothing", type: "checkbox", value: "men's clothing", onChange: onChangeFilter }} className="wrapper" label="Men's Clothing" /></li>
                <li><Input input={{ id: "jewelery", type: "checkbox", value: "jewelery", onChange: onChangeFilter }} className="wrapper" label="Jewelery" /></li>
                <li><Input input={{ id: "electronics", type: "checkbox", value: "electronics", onChange: onChangeFilter }} className="wrapper" label="Electronics" /></li>
              </ul>
              <div className="close-btn" onClick={onFilterClick}><span>close</span></div>
            </div>
            <div className="mobile-filter">
              <div className="fiter" onClick={onFilterClick}><span>Filter Results</span></div>
              <div className="sort" onClick={onSortClick}><span>Sort Products</span></div>
            </div>
          </div>
          <div className="col-seven">
            <div className="total-search-sorting">
              <span>{filterDatas.length > 0 ? filterDatas.length : store.products.length} Results</span>
              <div className="sorting-wrapper">
                <h5 className="heading-5">Sorting Products</h5>
                <select onChange={sortingDatas}>
                  <option>Sorting Products</option>
                  <option>Sort by Latest</option>
                  <option>Lowest to highest</option>
                  <option>Highest to lowest</option>
                  <option>Ratings</option>
                </select>
                <div className="close-btn" onClick={onSortClick}><span>close</span></div>
              </div>
            </div>
            {products}
          </div>
          <div className="pagination">
            <ul>
              {productPage.prevPage && <li className="prev" onClick={prevPage}>prev</li>}
              {Array.from({length: totalPage}).map((item, index) => {
                return <li key={index} className={index === 0 ? "active" : undefined} onClick={pageNavigate}>{index + 1}</li>
              })}
              {totalPage > 1 && productPage.nextPage && <li className="next" onClick={nextPage}>next</li>}
            </ul>
          </div>
        </div>
        }
      </Container>
    </section>
  )
}
