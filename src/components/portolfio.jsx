import Image from 'react-bootstrap/Image';
const Portfolio = () => {
    return (
        <>
        <section className="portfolio" id="portfolio">
            <h2 className="heading black-heading">Join Our <span>Fan Club</span></h2>

            <div className="portfolio-container">
                <div className="portfolio-box" id="portfolio-img-1">
                <Image src="https://i.imgur.com/2B25MrM.jpeg" alt="" />
                <div className="portfolio-layer">
                    <h4>Post pictures of your Cats</h4>
                    <p>Share pictures and memories with your cats.</p>
                    <p>We love seeing your cute cat pictures!</p>
                    <a href="/fanclub"><i className="bx bx-link-external"></i></a>
                </div>
                </div>
                <div className="portfolio-box" id="portfolio-img-2">
                <Image src="https://i.imgur.com/CMgPoNc.jpeg" alt="" />
                <div className="portfolio-layer">
                    <h4>Make new cat lovers friends</h4>
                    <p>Connect with like-minded cat lovers friends!</p>
                    <a href="/fanclub"><i className="bx bx-link-external"></i></a>
                </div>
                </div>
                <div className="portfolio-box" id="portfolio-img-3">
                <Image src="https://i.imgur.com/kGAHZGg.jpeg" alt="" />
                <div className="portfolio-layer">
                    <h4>Learn about Cats</h4>
                    <p>
                    Learn how EASY is to take care of cats and the health benefits of
                    petting cats!
                    </p>
                    <a href="/learn-more"><i className="bx bx-link-external"></i></a>
                </div>
                </div>
                <div className="portfolio-box" id="portfolio-img-4">
                <Image src="https://i.imgur.com/h1fgKLS.jpeg" alt="" />
                <div className="portfolio-layer">
                    <h4>Events</h4>
                    <p>
                    Join our Fan club and find events in your area such as fairs,
                    contests, photo shoots and other events.
                    </p>
                    <a href="/fanclub"><i className="bx bx-link-external"></i></a>
                </div>
                </div>
                <div className="portfolio-box" id="portfolio-img-5">
                <Image src="https://i.imgur.com/YX0HdUP.jpeg" alt="" />
                <div className="portfolio-layer">
                    <h4>Blog</h4>
                    <p>
                    Do you want to share about your experience with your cat? How
                    about a cat-shaped cookie recipe? We love our fans posts!
                    </p>
                    <a href="/fanclub"><i className="bx bx-link-external"></i></a>
                </div>
                </div>
                <div className="portfolio-box" id="portfolio-img-6">
                <Image src="https://i.imgur.com/ZwA6GEn.jpeg" alt="" />
                <div className="portfolio-layer">
                    <h4>Funny Cats</h4>
                    <p>
                    Have a GOOD Laugh with the Funny cats section. We love all things
                    funny about cats and their owners!
                    </p>
                    <a href="/fanclub"><i className="bx bx-link-external"></i></a>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Portfolio