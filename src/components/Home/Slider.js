import React from 'react'
import {
    CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';
  
export default function Slider() {
  
    // State for Active index
    const [activeIndex, setActiveIndex] = React.useState(0);
  
    // State for Animation
    const [animating, setAnimating] = React.useState(false);
  
    // Sample items for Carousel
    const items = [
        {   
            name: 'Carol Dias',
            course: 'Economia - UFSC',
            testimonial: '“Uma das lições que vou levar do Einstein é sobre praticar a generosidade. Eu sou uma pessoa que se preocupa muito com os outros e ver isso do Einstein se preocupando com a gente, pra mim, é a parte mais importante.”',
            src: '/images/depoimentos/carol.png',
            altText: 'Slide One'
        },
        {   
            name: 'Sindy de Freitas',
            course: 'Relações Internacional - UFSC',
            testimonial: '“Entrar no Einstein significou que as minhas chances de realizae o sonho de passar na faculdade aumentaram. E que há sim uma luz no fim do túnel. Hoje tenho uma relação de amizade e companheirismo com boa parte do pessoal e de respeito por toda turma.”',
            src: '/images/depoimentos/sindy.png',
            altText: 'Slide One'
        },
        {   
            name: 'Evelin Basques',
            course: 'Ciências Biológicas - UFSC',
            testimonial: '“Eu  era bem desorganizada antigamente , trabalhava, ia para o cursinho e estudava no dia seguinte, por isso  não absorvia o conteúdo. Quando entrei no Einstein, logo fui apadrinhada, mas sempre tive vergonha de pedir ajuda para as pessoas. Porém, quando  meu padrinho ajudou a fazer meu cronograma de estudos, comecei a ver os resultados."',
            src: '/images/depoimentos/evelin.png',
            altText: 'Slide One'
        },
    ];
  
    // Items array length
    const itemLength = items.length - 1
  
    // Previous button for Carousel
    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ?
            itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    }
  
    // Next button for Carousel
    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ?
            0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }
  
    // Carousel Item Data
    const carouselItemData = items.map((item) => {
        return (
            <CarouselItem
                key={item.src}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <div className="self-center bg-blue-50 lg:h-full w-full flex justify-center shadow-xl">
                  <div className="py-10 px-20">
                        <h2 className="text-3xl font-extrabold tracking-tight text-blue-900">
                            {item.name}
                        </h2>
                        <h2 className="text-xl font-extrabold tracking-tight text-blue-900">
                            {item.course}
                        </h2>
                        <div className="flex">
                            <img
                                className="w-36 h-36"
                                src={item.src}
                                alt=""
                            />
                            <div className="h-full">
                                <p className="ml-6 self-center text-center">
                                    {item.testimonial}
                                </p>
                            </div>
                        </div>
                  </div>
                </div>
            </CarouselItem>
        );
    });
  
    return (
        <div style={{
            display: 'block', width: 820, padding: 30
        }}>
            <Carousel previous={previousButton} next={nextButton}
                activeIndex={activeIndex}>
                <CarouselIndicators items={items}
                    activeIndex={activeIndex}
                    onClickHandler={(newIndex) => {
                        if (animating) return;
                        setActiveIndex(newIndex);
                    }} />
                {carouselItemData}
                <CarouselControl directionText="Prev"
                    direction="prev" onClickHandler={previousButton} />
                <CarouselControl directionText="Next"
                    direction="next" onClickHandler={nextButton} />
            </Carousel>
        </div >
    );
}
  