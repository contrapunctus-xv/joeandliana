import React from 'react';

const WeddingDayInfo = () =>
    <div className="container">
        <div>
            <h1>Wedding Day Info</h1>
            <div>
                <img className="piggy-back" src="http://res.cloudinary.com/hfstexbmw/image/upload/v1499658612/joeandliana_DearStacey_Wedding_Photography_long_island0165_y7oh5o.jpg"/>
            </div>

            <div className="text-body">
                <h3>When is the wedding?</h3>
                <ul>
                    <li>Saturday August 5, 2017 at 5:30pm</li>
                </ul>
                <h3>Where is the wedding?</h3>
                <ul>
                    <li>Willow Creek Golf and Country Club on Long Island</li>
                    <li>Address: 1 Clubhouse Drive, Mt. Sinai, New York, 11766</li>
                </ul>
                <h3>How should I suit up?</h3>
                <ul>
                    <li>The attire is black tie optional.</li>
                    <li>Gents -- if you have a tux, this is the time to dust off those satin lapels and figure out how to tie a bowtie. Clip on bowties are acceptable only in worse-case scenarios.</li>
                    <li>Ladies -- keep it fresh with a floorlength gown or a classy cocktail dress.</li>
                    <li>Weather permitting, the ceremony will be held outdoors.</li>
                </ul>
            </div>
        </div>
    </div>;

export default WeddingDayInfo;
