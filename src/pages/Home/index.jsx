import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Banner from "components/Banner";
import SectionTitle from "components/Section/Title";
import PostList from 'components/Post/List';
import Breadcrumb from 'components/Breadcrumb';


function Home() {
  const [posts, setPosts] = useState([]);
  const [breadcrumb, setBreadcrumb] = useState([{name: "Home", link: "/"}]);
  const [errorMsg, setErrorMsg] = useState('');
  
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await axios.get(`https://mothaibatest.000webhostapp.com/wp-json/wp/v2/posts?_embed&per_page=4`);
        setPosts([...posts, ...response.data]);
        setErrorMsg('');
      } catch (error) {
        setErrorMsg('Error while loading data. Try again later.');
      }
    };
    loadPosts();
  }, []);

  return (
    <>
      {/*▼ Content area ▼*/}
      <main className="p-top">
        {/* <section class="c-mainvisual">
  <div class="c-mainvisual__inner">
      <h2>LOREM IPSUM</h2>
      <p>In volutpat metus quis velit malesuada</p>
      <a href="#" class="c-btn1">JOIN NOW</a>
  </div>
    </section> */}
        <Breadcrumb breadcrumb={breadcrumb} />
        <Banner />
        <section className="p-top2 l-container">
          <SectionTitle title="News2" style="c-title-main--1"/>
          <PostList posts={posts}/>
          <div className="c-listpost__viewmore">
            <a href="#" className="c-btn-viewmore c-btn-viewmore--1">
              VIEW MORE
            </a>
          </div>
        </section>
        <section className="p-top3 c-colpost bg-fa">
          <div className=" l-container">
            <h2 className="c-title-main c-title-main--2">Feature</h2>
            <div className="c-colpost__item">
              <div className="item col-4">
                <a href="#" className="box-img">
                  <img src="assets/img/img-300x185.jpg" alt="#" />
                </a>
                <a href="#" className="c-tag c-tag--green">
                  Text text
                </a>
                <div className="box-info">
                  <h3 className="title">
                    Title title title title title title title title title title
                    title title title title title title title title title title
                    title title title title title title title title
                  </h3>
                </div>
              </div>
              <div className="item col-4">
                <a href="#" className="box-img">
                  <img src="assets/img/img-300x185.jpg" alt="#" />
                </a>
                <a href="#" className="c-tag c-tag--green">
                  Text text
                </a>
                <div className="box-info">
                  <h3 className="title">
                    Title title title title title title title title title title
                    title title title title title title title title title title
                    title title
                  </h3>
                </div>
              </div>
              <div className="item col-4">
                <a href="#" className="box-img">
                  <img src="assets/img/img-300x185.jpg" alt="#" />
                </a>
                <a href="#" className="c-tag c-tag--pink">
                  Text
                </a>
                <div className="box-info">
                  <h3 className="title">
                    Title title title title title title title title title title
                    title title title title title title title title title title
                    title title
                  </h3>
                </div>
              </div>
              <div className="item col-4">
                <a href="#" className="box-img">
                  <img src="assets/img/img-300x185.jpg" alt="#" />
                </a>
                <a href="#" className="c-tag c-tag--green">
                  Text text
                </a>
                <div className="box-info">
                  <h3 className="title">
                    Title title title title title title title title title title
                    title title title title title title title title
                  </h3>
                </div>
              </div>
              <div className="item col-4">
                <a href="#" className="box-img">
                  <img src="assets/img/img-300x185.jpg" alt="#" />
                </a>
                <a href="#" className="c-tag c-tag--yellow">
                  Text text text
                </a>
                <div className="box-info">
                  <h3 className="title">
                    Title title title title title title title title title title
                    title title title title title title title title title title
                    title title title title title
                  </h3>
                </div>
              </div>
              <div className="item col-4">
                <a href="#" className="box-img">
                  <img src="assets/img/img-300x185.jpg" alt="#" />
                </a>
                <a href="#" className="c-tag c-tag--green">
                  Text text
                </a>
                <div className="box-info">
                  <h3 className="title">
                    Title title title title title title title title title title
                    title title title title title
                  </h3>
                </div>
              </div>
            </div>
            <div className="c-colpost__viewmore">
              <a href="#" className="c-btn-viewmore c-btn-viewmore--2">
                VIEW MORE
              </a>
            </div>
          </div>
        </section>
        <section className="c-colpost l-container">
          <h2 className="c-title-main c-title-main--3">Blog</h2>
          <div className="c-colpost__item">
            <div className="item col-6">
              <a href="#" className="box-img">
                <img src="assets/img/img-475x185.jpg" alt="#" />
              </a>
              <a href="#" className="c-tag c-tag--green">
                Text text
              </a>
              <div className="box-info">
                <h3 className="title">
                  Title title title title title title title title title title
                  title title title title title title title title title title
                  title title title title title title title title
                </h3>
              </div>
            </div>
            <div className="item col-6">
              <a href="#" className="box-img">
                <img src="assets/img/img-475x185.jpg" alt="#" />
              </a>
              <a href="#" className="c-tag c-tag--pink">
                Text
              </a>
              <div className="box-info">
                <h3 className="title">
                  Title title title title title title title title title title
                  title title title title title title title title title title
                  title title
                </h3>
              </div>
            </div>
            <div className="item col-6">
              <a href="#" className="box-img">
                <img src="assets/img/img-475x185.jpg" alt="#" />
              </a>
              <a href="#" className="c-tag c-tag--green">
                Text text
              </a>
              <div className="box-info">
                <h3 className="title">
                  Title title title title title title title title title title
                  title title title title title title title title title title
                  title title title title title title title title
                </h3>
              </div>
            </div>
            <div className="item col-6">
              <a href="#" className="box-img">
                <img src="assets/img/img-475x185.jpg" alt="#" />
              </a>
              <a href="#" className="c-tag c-tag--pink">
                Text
              </a>
              <div className="box-info">
                <h3 className="title">
                  Title title title title title title title title title title
                  title title title title title title title title title title
                  title title
                </h3>
              </div>
            </div>
          </div>
          <div className="c-colpost__viewmorefull">
            <a href="#" className="c-btn-viewmore c-btn-viewmore--3">
              VIEW MORE
            </a>
          </div>
        </section>
        <section className="u-breadcrumb--bottom">
          <div className="c-breadcrumb">
            <div className="c-breadcrumb__inner">
              <div className="l-container">
                <a href="./index.html">
                  <i className="fa fa-home" />
                  HOME
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/*▲ Content are ▲*/}
    </>
  );
}

export default Home;
