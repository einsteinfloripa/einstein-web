import Slider from "./Slider"


function HomeSlider (){
    return (
    <div className="relative">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-blue-900" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-16 lg:py-20 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl pb-10">
                    <span className="block text-white text-10xl">Depoimentos</span>
                </h1>
                <div className="flex justify-center">
                    <div className="justify-center">
                        <Slider />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomeSlider