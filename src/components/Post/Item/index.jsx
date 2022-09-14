import axios from "axios";
import Categories from "components/Categories";
import { useEffect, useState } from "react";


function PostItem({id, title, excerpt, link, _embedded}) {
  const [categories, setCategories1] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  let imageUrl = () => {
    let featuredmedia = _embedded['wp:featuredmedia'];
    if (typeof(featuredmedia) != "undefined") {
      return featuredmedia[0].media_details.sizes.thumbnail.source_url;
    } else {
      return 'assets/img/img-300x185.jpg';
    }
  }
 
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await axios.get(
          `https://mothaibatest.000webhostapp.com/wp-json/wp/v2/categories?post=${id}`
        );

        setCategories1([...categories, ...response.data]);
        setErrorMsg('');
      } catch (error) {
        setErrorMsg('Error while loading data. Try again later.');
      }
    };

    loadCategories();
  }, []);

  let cates = categories.map((cate, key) => {
    return <Categories category={cate} key={key}/>
  })
  
  return (
    <>
      <div className="c-listpost__item">
        <a href={link} className="box-img">
          <div className="c-tag c-tag--green">
           {cates}
          </div>
          <img src={imageUrl()} alt="#" />
        </a>
        <div className="box-info">
          <h3 className="title">
            {title.rendered}
          </h3>
          <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} className="desc"></div>
          <a href={link} className="c-btn c-btn-2">
            Link<span>1</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default PostItem;
