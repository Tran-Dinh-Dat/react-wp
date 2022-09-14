import { Link } from "react-router-dom";

function Breadcrumb({breadcrumb}) {
  const items = breadcrumb?.map((item, key) => {
    return (
      <>
        <Link to={item.link}>
        <i className={ key == 0 ? "fa fa-home" : "fas fa-angle-right"} />
        <span>{item.name}</span>
        </Link>
      </>
    )
  })
  
  return (
    <>
      <section className="u-breadcrumb--top  l-container">
          <div className="c-breadcrumb">
            { items }
          </div>
        </section>
    </>
  );
}

export default Breadcrumb;
