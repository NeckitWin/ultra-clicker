import s from './Main.module.css';
import otherStyle from './ButtonUpgrade/ButtonUpgrade.module.css'
import { useEffect, useState } from "react";
import ButtonUpgrade from "./ButtonUpgrade";

const Main = () => {
    const priceBulletsUpgradeXTwo = 200;
    const priceBulletsUpgradeXThree = 500;
    const priceClickIntervalOne = 1000;
    const priceClickIntervalTwo = 2500;
    const ButtonsUpgrade = ['x2 Click', 'x3 Click', 'AutoClick +1 b/s', 'AutoClick +2 b/s'];
    const [bullets, setBullets] = useState(0);
    const [addBullet, setAddBullet] = useState(1);
    const [intervalBullets, setIntervalBullets] = useState(0);
    const [active, setActive] = useState([]);
    let addTimeBullets;

    // Listener for handling clicks
    const handleClick = () => {
        setBullets(bullets + addBullet);
    }

    // Listener to stop the interval
    const stopIntervalBullets = () => {
        clearTimeout(addTimeBullets);
    }

    // Effect to set the interval
    useEffect(() => {
        const addIntervalBullets = (countIntervalBullets) => {
            setBullets((bullets) => bullets + countIntervalBullets);
            addTimeBullets = setTimeout(addIntervalBullets, 1000, countIntervalBullets);
        }
        addIntervalBullets(intervalBullets);
        return () => {
            stopIntervalBullets();
        };
    }, [intervalBullets]);

    // Effect to change the document title
    useEffect(() => {
        document.title = `Bullets: ${bullets}`;
    }, [bullets]);

    // Function to buy upgrade
    const buyFunction = (index, bullets) => {
        if (index === 0 && bullets >= priceBulletsUpgradeXTwo && addBullet < 2) {
            setAddBullet(2);
            setBullets(bullets - priceBulletsUpgradeXTwo);
            setActive([...active, index]);
        } else if (index === 1 && bullets >= priceBulletsUpgradeXThree && addBullet < 3) {
            setAddBullet(3);
            setBullets(bullets - priceBulletsUpgradeXThree);
            setActive([...active, index]);
        } else if (index === 2 && bullets >= priceClickIntervalOne && intervalBullets < 1) {
            setBullets(bullets - priceClickIntervalOne);
            const newInterval = intervalBullets + 1;
            setIntervalBullets(newInterval);
            setActive([...active, index]);
        } else if (index === 3 && bullets >= priceClickIntervalTwo && intervalBullets < 2) {
            stopIntervalBullets();
            setBullets(bullets - priceClickIntervalTwo);
            const newInterval = intervalBullets + 2;
            setIntervalBullets(newInterval);
            setActive([...active, index]);
        }
    }

    return (
        <div className={s.container}>
            <button className={s.clicker} onClick={handleClick}>{bullets}</button>
            <div className={s.frame_upgrades}>
                <h2>Upgrades</h2>
                <div className={s.upgrades}>
                    {ButtonsUpgrade.map((element, index) => (
                        <ButtonUpgrade key={index} content={element} onclick={() => buyFunction(index, bullets)} active={active.includes(index) ? otherStyle.active : ''} />
                    ))}
                    <ul className={s.upgrades_description}>
                        <li>Your bullet multiplier: x{addBullet} b/c</li>
                        <li>Your automatic bullet income: {intervalBullets} b/s</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Main;
