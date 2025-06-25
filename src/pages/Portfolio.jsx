import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Chart from '../components/Chart'
import MyAssets from '../components/MyAssets';

function Portfolio() {
    function getRandomSortedNumbers(count, max) {
        const numbers = new Set();
        while (numbers.size < count) {
            const num = Math.floor(Math.random() * max) + 1;
            numbers.add(num);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }
    const [last, setLast] = useState({
        card1: 0,
        card2: 0,
        card3: 0
    });
    useEffect(() => {
        const result = getRandomSortedNumbers(59, 90000);
        result.push(90000);
        const result2 = getRandomSortedNumbers(59, 120);
        result2.push(120);
        const result3 = getRandomSortedNumbers(59, 150);
        result3.push(150);

        function update(step) {
            if (step <= 59) {
                setLast({
                    card1: result[step],
                    card2: result2[step],
                    card3: result3[step]
                });
                setTimeout(() => update(step + 1), 30);
            }
        };
        update(0);
    }, []);
    let a = [
        { title: "Total value", value: `$${last.card1}`, },
        { title: "Today's Change", value: `+ $${last.card2}`, },
        { title: "Best Performing", value: `AAPL +${last.card3 / 10}%`, }
    ]
    return (
        <div className='portfolio'>
            <div className='portfolio-header'>
                <h3>Portfolio</h3>
                <div className='person-info'>
                    <img src="src/assets/react.svg" alt="" />
                    <div>
                        <h5>Nihat Ker...</h5>
                        <p>nihatkerimov@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="porftolio-cards">
                {a.map((item, index) => <Card key={index} {...item} />
                )}
            </div>
            <h4 className='title2'>Portfolio Performance</h4>
            <Chart />
            <h4 className='title2'>My Assets</h4>
            <MyAssets />
        </div>
    )
}

export default Portfolio