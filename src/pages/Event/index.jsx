function Event() {
  return ( 
    <>
    {/*▼ Content area ▼*/}
    <main className="p-link1">
      <section className="u-breadcrumb--top  l-container">
        <div className="c-breadcrumb">
          <a href="./index.html">
            <i className="fa fa-home" />
            <u>HOME</u>
          </a>
          <i className="fas fa-angle-right" />
          <span>Link1</span>
        </div>
      </section>
      
      <section className="p-link1__1">
        <div className="l-container" id="anchor1">
          
        </div>
      </section>
      <section className="u-breadcrumb--bottom">
        <div className="c-breadcrumb">
          <div className="c-breadcrumb__inner">
            <div className="l-container">
              <a href="./index.html">
                <i className="fa fa-home" />
                <u>HOME</u>
              </a>
              <i className="fas fa-angle-right" />
              <span>Link1</span>
            </div>
          </div>
        </div>
      </section>
    </main>
    {/*▲ Content are ▲*/}
  </>
   );
}

export default Event;
