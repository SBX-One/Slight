import person1 from '../../assets/imgs/Rectangle 461.webp';
import person2 from '../../assets/imgs/Rectangle 462.webp';
import person3 from '../../assets/imgs/Rectangle 463.webp';
import person4 from '../../assets/imgs/Rectangle 464.webp';
import person5 from '../../assets/imgs/Rectangle 465.webp';
import person6 from '../../assets/imgs/Rectangle 466.webp';
import grid from '../../assets/imgs/grids/gray.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function CardPerson() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        });
    }, []);
    const persondata = [
        {
            id: 1,
            position: 'PRODUCT MANAGER',
            name: 'RICO FERRY',
            img: person1,
        },
        {
            id: 2,
            position: 'PRODUCT MANAGER',
            name: 'RICO FERRY',
            img: person2,
        },
        {
            id: 3,
            position: 'PRODUCT MANAGER',
            name: 'RICO FERRY',
            img: person3,
        },
        {
            id: 4,
            position: 'PRODUCT MANAGER',
            name: 'RICO FERRY',
            img: person4,
        },
        {
            id: 5,
            position: 'PRODUCT MANAGER',
            name: 'RICO FERRY',
            img: person5,
        },
        {
            id: 6,
            position: 'PRODUCT MANAGER',
            name: 'RICO FERRY',
            img: person6,
        },
    ];
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-10">
            {persondata.map(items => (
                <div
                    key={items.id}
                    className="relative sm:grid  sm:grid-cols-2 lg:grid-cols-1 pt-36 sm:pt-0  border border-slate-300 rounded-xl overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={items.id * 150}
                >
                    <div>
                        <div className="absolute flex items-center w-full justify-between z-10">
                            <p className="sub-1  p-10 hidden  lg:block sm:heading-2 w-min">{items.name}</p>
                            <p className="sub-1  hidden p-10 sm:block ">00{items.id}</p>
                        </div>

                        <img src={grid} className="absolute z-10 w-screen bottom-0  h-full" alt={items.name} />
                        <img src={items.img} className="absolute sm:relative top-0 translate-y-1/7 left-1/2 sm:items-center -translate-x-1/2   h-36 sm:h-full object-cover" alt={items.name} />
                    </div>
                    <div className="relative bg-white p-5 sm:p-21 lg:p-10 h-fit grid grid-cols-4 sm:flex sm:flex-col-reverse sm:justify-center sm:text-center lg:text-start border-t sm:border-t-0 sm:border-l sm:h-full border-slate-300  text-sm font-medium lg:border-t lg:border-l-0">
                        <p className="col-start-1  sm:sub-1">{items.position}</p>
                        <p className="col-start-4 lg:hidden sm:heading-2 ">{items.name}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardPerson;
