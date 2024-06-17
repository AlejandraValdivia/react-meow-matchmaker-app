const Services = () => {
    return (
        <>
        <section className="services" id="services">
      <h2 className="heading">Welcome to <span>Meow Matchmaker</span></h2>

      <div className="services-container">
        <div className="services-box">
          <i className="bx bxs-cat"></i>
          <h3>Adopt a Cat</h3>
          <p>
            Bring home a new friend who will be your most loyal companionship.
          </p>
          <a href="/cats" className="btn">Read More</a>
        </div>

        <div className="services-box">
          <i className="bx bx-happy-heart-eyes"></i>
          <h3>Foster Care</h3>
          <p>Shelter temporarily a furry friend in need of your love!</p>
          <a href="/cats" className="btn">Read More</a>
        </div>

        <div className="services-box">
          <i className="bx bx-home-heart"></i>
          <h3>On-site Volunteer</h3>
          <p>Help us caring for stray cats in need of love and care.</p>
          <a href="/cats" className="btn">Read More</a>
        </div>

        <div className="services-box">
          <i className="bx bxs-party"></i>
          <h3>Rent A Cat</h3>
          <p>Rent a cat for kid's parties or quality time with them!</p>
          <a href="/cats" className="btn">Read More</a>
        </div>
      </div>
    </section>
        </>
    )
}

export default Services