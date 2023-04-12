import {Card, Carousel, Collapse, Image} from "antd";
import {useRef} from "react";

const {Panel} = Collapse;

export default function ExcursionListItem({name, images = [], panels = [], price = 0}) {
    const carouselRef = useRef();

    const carousel = <Carousel
        ref={carouselRef}
        autoplaySpeed={800}
        adaptiveHeight={true}
        infinite={true}
        dots={false}
        pauseOnHover={false}
        pauseOnFocus={false}
    >
        {images.map(i => (
            <Image key={i} src={i} preview={false} height={250} width={550}/>
        ))}
    </Carousel>;

    return <Card
        hoverable
        title={<h3 className='my-3'>{name}</h3>}
        cover={carousel}
        className='border border-1 border-dark'
        onMouseEnter={() => carouselRef.current.autoPlay()}
        onMouseLeave={() => carouselRef.current.innerSlider.pause()}
    >
        <Collapse className='mt-3' accordion expandIcon={() => false}>
            {
                panels.map((p, i) => (
                    <Panel header={p.header} key={i}>
                        <p>{p.text}</p>
                    </Panel>)
                )
            }
        </Collapse>

        <div className='mt-3 h5'>
            всего за {<span className='h3 mx-2'>{price} руб.</span>}
        </div>
    </Card>
}
