const About = () => {
    return (
        <>
            <section className="about" id="about">
            <div className="about-img">
                <img src="https://i.imgur.com/6WWb0la.jpeg" alt="" />
            </div>
            <div className="about-content">
                <h2 className="heading">About <span>Meow </span>Matchmaker</h2>
                <h3>Adorable Furry Friend seeking a home</h3>
                <p>
                Meow Matchmaker is an app that connects Cat Lovers to a database of
                over 100 stray cats looking for a loving home. Find your favorite cat
                to adopt, foster, volunteer, or rent a cat for your kid's birtday
                party or host a party for your kids if you don't have the time and
                want them to play with cats and learn the benefits of caring for a pet
                in need of love.
                </p>
                <p>
                Join our <a className="btn" href="/fanclub">Fan Club</a>, make friends, post/find
                events.
                </p>
                <p>
                Find articles about how to care for your cat
                <a className="btn" href="/learn-more">Learn More</a>
                </p>

                <p>I can't wait to <span>play with you!🐱</span></p>
                <a href="/dashboard" className="btn">Read More</a>
                <p>
                Or <a className="btn" href="/auth/signup">Create Your Profile Here</a>
                </p>
            </div>
            </section>
        </>
    )
}

export default About