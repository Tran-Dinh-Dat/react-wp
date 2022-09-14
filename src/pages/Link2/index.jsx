import Breadcrumb from "components/Breadcrumb";
import { useState } from "react";

function Link2() {
  const [breadcrumb, setBreadcrumb] = useState([{name: "Home", link: "/"}, {name: "Link2", link: "/link2"}]);
  return (
    <>
      {/*▼ Content area ▼*/}
      <main className="p-link2">
        <Breadcrumb breadcrumb={breadcrumb}/>
        <section className="l-container c-btn-full">
          <div className="c-colpost__viewmorefull">
            <a href="#" className="c-btn-viewmore c-btn-viewmore--3">
              LINK 2
            </a>
          </div>
        </section>
        <div className="l-container">
          <h2 className="c-title-main c-title-main--4">Title 1</h2>
          <p className="mb-50">
            Text text text text text text text text{" "}
            <a href="#" className="link--4">
              text text text text text text text t
            </a>
            ext text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text{" "}
            <a href="#" className="link--4">
              text text text text text text text
            </a>{" "}
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text
          </p>
          <p className="c-text-color c-text-color--1">
            <i className="fas fa-comment" />
            Text text text text text text text text text text
          </p>
          <p>
            Text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text{" "}
          </p>
          <div className="c-quote c-quote--1">
            <p>
              <i className="fas fa-quote-left" />
              Text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text
              <i className="fas fa-quote-right" />
            </p>
          </div>
          <h2 className="c-title-main c-title-main--5">Title 2</h2>
          <p className="mb-30">
            Text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text{" "}
          </p>
          <p className="c-text-color c-text-color--2">
            <i className="fas fa-seedling" />
            Text text text text text text text text text text
          </p>
          <p className="mb-30">
            Text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text{" "}
          </p>
          <p className="c-text-color c-text-color--2">
            <i className="fas fa-palette" />
            Text text text text text text text{" "}
          </p>
          <p className="mb-20">
            Text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text textt{" "}
          </p>
          <div className="c-list-counter">
            <ol>
              <li>Text text text text</li>
              <li>Text text text text text text text</li>
              <li>
                Text text text text
                <ol>
                  <li>Text text text text</li>
                  <li>Text text text texttext text text text</li>
                  <li>Text text text text</li>
                </ol>
              </li>
            </ol>
          </div>
          <p className="c-text-color c-text-color--2">
            <i className="fas fa-comment" />
            Text text text text text text text text text text
          </p>
          <p>
            Text text text text text text text text text text text text text
            text text text text text
          </p>
          <div className="c-quote c-quote--2">
            <p>
              <i className="fas fa-quote-left" />
              Text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text text text text text text text text text
              text text text text text
              <i className="fas fa-quote-right" />
            </p>
          </div>
          <p className="mb-10">
            Text text text text text text text text text text text text text
            text text text text text text text text text.
            <br /> Text text text text text text text text text text text text
            text text text text text.
            <br /> Text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text.
          </p>
          <div className="c-table c-table--3 mb-70">
            <table>
              <tbody>
                <tr>
                  <th />
                  <th>Title</th>
                  <th>Title</th>
                  <th>Title</th>
                </tr>
                <tr>
                  <td>Title</td>
                  <td>Text text text text</td>
                  <td>Text text text text text</td>
                  <td>Text text text text text text</td>
                </tr>
                <tr>
                  <td>Title</td>
                  <td>Text text text text</td>
                  <td>Text text text text text</td>
                  <td>Text text text text text text</td>
                </tr>
                <tr>
                  <td>Title</td>
                  <td>Text text text text</td>
                  <td>Text text text text text</td>
                  <td>Text text text text text text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <section className="u-breadcrumb--bottom">
          <div className="c-breadcrumb">
            <div className="c-breadcrumb__inner">
              <div className="l-container">
                <a href="./index.html">
                  <i className="fa fa-home" />
                  <u>HOME</u>
                </a>
                <i className="fas fa-angle-right" />
                <span>Link2</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/*▲ Content are ▲*/}
    </>
  );
}

export default Link2;
