import BriefDescription from "../../Components/BriefDescription";
import {Col, Row} from 'antd';
import ExcursionListItem from "./Components/ExcursionListItem";
import {useState} from 'react'

export default function Excursion() {
    const {brief_header: title, brief_description: description} = {
        brief_header: 'ЭКСКУРСИИ В АНТАЛИИ',
        brief_description: 'Многие из наших пациентов предпочитают приезжать в Турцию не только из-за качества медицинского обслуживания, но и из-за исключительного культурного опыта.\n' +
            'Турция – уникальная и красивая страна с богатой историей и невероятными природными ландшафтами: руины городов древнего Рима, византийские амфитеатры, песчаные пляжи, горнолыжные курорты и даже чудо света  — здесь каждый найдет что-то для себя. \n' +
            'Мы хотим, чтобы наши пациенты во время пребывания на лечении имели возможность увидеть не только стены отеля, но и красоты Средиземноморья. Вот почему мы приглашаем вас присоединиться к нам на экскурсиях, которые станут неотъемлемой частью вашего путешествия. Наши экскурсии разработаны так, чтобы продемонстрировать лучшее из турецкой культуры и истории: от посещения известных достопримечательностей до знакомства с традиционной турецкой кухней.'
    };
    const images = [
        'https://images.unsplash.com/photo-1680967230555-a803660575dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80',
        'https://images.unsplash.com/photo-1680562725444-5a9aaa12525b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        'https://plus.unsplash.com/premium_photo-1673254850293-19e31e837e22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        'https://images.unsplash.com/photo-1680724865873-69e8239f9e63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ];
    const panels = [
        {
            header: 'ДЕТАЛИ ЭКСКУРСИИ',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            header: 'ДЕТАЛИ ЭКСКУРСИИ',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
    ];
    const excursions = [
        {name: 'Зеленый Каньон', price: 25000, images, panels},
        {name: 'Остров Suluada', price: 12500, images, panels},
        {name: 'Старый город Kaleiçi', price: 35990, images, panels},
        {name: 'Tazı Каньон', price: 27500, images, panels},
    ];

    const [currentBg, setCurrentBg] = useState(0);

    return (
        <div>
            <Row
                gutter={16}
                style={{
                    height: '25rem',
                    backgroundImage: `url(${excursions[currentBg].images[currentBg]})`,
                }}
                className='p-5'
            >
                {excursions.map((e, i) => (
                    <Col
                        sm={24}
                        key={i}
                        className='mt-3'
                        onMouseEnter={() => setCurrentBg(i)}
                    >
                        <h2
                            className={`${currentBg === i ? 'text-light' : 'text-muted' }`}
                        >{e.name}</h2>
                    </Col>
                ))}
            </Row>

            <BriefDescription title={title} description={description}/>

            <Row gutter={16} className='m-5'>
                {
                    excursions.map((e, i) => (
                        <Col sm={12} className='my-2' key={i}>
                            <ExcursionListItem
                                name={e.name}
                                images={e.images}
                                panels={e.panels}
                                price={e.price}
                            />
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
}
