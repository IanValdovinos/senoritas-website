import React from 'react';
import styles from './CustomerReviews.module.css';

// Components
import HeadingOne from '../HeadingOne';
import FloatingCard from '../FloatingCard';

function CustomerREviews() {
    return ( 
        <div>
            <div className={styles.customerReviewsSection}>
                <HeadingOne>Customer Reviews</HeadingOne>
                <div className={styles.customerReviewsContainer}>
                    <FloatingCard name={'Laura P.'} stars={5} text={'"Ate lunch here a couple of months ago, service was fantastic, food was even better! I got the flautas lunch, person I was with got some tacos, and there was complementary chips and salsa. Having moved from Grand Rapids back in 2020 and being spoiled by their plethora of good Mexican places, I was starting to lose hope on the Detroit area, but this place is certainly a bright spot!"'}/>
                    <FloatingCard name={'Jerome K.'} stars={5} text={'"My wife and visited this randomly and was impressed. Service was very friendly and the inside look very cool and fun. Recommend this to anyone wanting to try authentic food."'}/>
                    <FloatingCard name={'Miguel G.'} stars={5} text={'"The food here changed my life. every thing is just like back home. All dishes are made from scratch lovely place and service. The new location is incredibly awesome it has a patio i cant wait for summer. The ambience feels like it is my family if i could give this place 10 stars i would."'} />
                    <FloatingCard name={'Jenn W.'} stars={5} text={'"Being from San Antonio, I am very picky on my Mexican food. Moving up here nothing has come close to back home. Senoritas is the closest I have had! The pastor tacos are full of flavor. The frijoles are creamy and have amazing flavor. The salsa is by far the best I have had since moving here. Try the green sauce! It is what I have been looking for!"'} />
                </div>
            </div>
        </div>
     );
}

export default CustomerREviews;