export const HeroSection = () => {
    return (
        <div className="relative h-125 md:h-150 overflow-hidden">

            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://plus.unsplash.com/premium_photo-1664300227447-d97609bbcb43?q=80&w=1214&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    backgroundPosition: 'center 30%',
                    filter: 'brightness(0.9) blur(1.2px)'
                }}
            ></div>


            <div className="absolute inset-0 bg-black/10 z-0"></div>

            <div className="relative h-full flex flex-col justify-center items-start text-left px-6 md:px-12 lg:px-24 z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-2xl">
                    Precision Agriculture with <span className="text-green-300"></span> Soil Analysis

                </h1>
                <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-xl bg-amber-500 p-2 rounded-xl">
                    Snap, upload, grow smarter !
                </p>


                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#soil-analysis"
                        className="bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors shadow-md hover:shadow-lg">
                        Analyze Your Soil
                    </a>
                    <a
                        href="#learnmore"
                        className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors border border-white/20 backdrop-blur-sm"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
};