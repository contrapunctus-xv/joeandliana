import React from 'react';

/**
 * Renders HomePage Component
 * @return {ReactElement} Hello World HTML
 */
const HomePage = () =>
    <div className="container" id="homepage">
        <div className="header">
            <h1>Liana & Joseph</h1>
        </div>
        <div className="container" id="photos">
            {/*<img className="wren-photo" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/1911868_10203576663481354_1964773106549014430_n.jpg?oh=8389de2da4a4a1c8efc719234cf3500b&oe=592D62C8"/>*/}
            <div className="iceland">
                <img className="iceland-photo" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-0/p526x296/14212060_10207270022933032_6169358240044818558_n.jpg?oh=54f422616cd0f77c4899c23c0e97ff1a&oe=59461787"/>
            </div>
                {/*<img className="pinkmarble" src="https://s-media-cache-ak0.pinimg.com/originals/5a/12/9e/5a129e73360e54751a8e0c22f9a47a2d.jpg"/>*/}
        </div>
    </div>;

export default HomePage;
