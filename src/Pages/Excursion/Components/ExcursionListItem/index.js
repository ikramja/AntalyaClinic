import {Card, Carousel, Collapse, Image} from "antd";
import {useRef} from "react";

const {Panel} = Collapse;

export default function ExcursionListItem({name, images = [], panels = [], price = 0}) {
    const carouselRef = useRef();

    const carousel = <Carousel
        ref={carouselRef}
        autoplaySpeed={1300}
        adaptiveHeight={true}
        infinite={true}
        dots={false}
        pauseOnHover={false}
        pauseOnFocus={false}
    >
        {images.map(i => (
            <Image key={i} src={i} preview={false} height={250} width='90%' alt={name}/>
        ))}
    </Carousel>;

    const PanelHeader = ({header}) => {
        return (
            <div
                style={{
                    boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.5)',
                    borderRadius: '12px',
                }}
                className='py-3 fw-bold'
            >
                {header}
            </div>
        );
    }

    return <Card
        title={<h3 className='my-3'>{name}</h3>}
        cover={carousel}
        className='border border-1 border-dark'
        onMouseEnter={() => carouselRef.current.autoPlay()}
        onMouseLeave={() => carouselRef.current.innerSlider.pause()}
    >
        <Collapse
            className='mt-3'
            bordered={false}
            expandIcon={() => false}
            ghost
            accordion
        >
            {
                panels.map((p, i) => (
                    <Panel
                        header={<PanelHeader header={p.header}/>}
                        key={i}
                        style={{border: 'none',}}
                    >
                        <p dangerouslySetInnerHTML={{__html: p.text}}/>
                    </Panel>)
                )
            }
        </Collapse>

        <div className='mt-3 h5'>
            СТОИМОСТЬ НА ЧЕЛОВЕКА{<span className='h3 mx-2'>{price}$</span>}
        </div>
    </Card>
}
