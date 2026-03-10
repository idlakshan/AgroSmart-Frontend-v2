const LearnMoreSeaction = () => {
  return (
    <section id="learnmore" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className=" bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                alt="Agricultural technology"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-4">
                Precision Agriculture for Better Yields
              </h3>
              <p className="text-gray-700 mb-6">
                Our system analyzes your soil composition, local climate
                conditions, and historical crop data to suggest the best crops
                for your specific situation.
              </p>
              <p className="text-gray-700 mb-6">
                The heat map visualization helps you understand which areas of
                your soil sample are most important for determining soil type,
                while our confidence scores give you a clear indication of how
                suitable each recommended crop is for your conditions.
              </p>
              <button className="bg-linear-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMoreSeaction;
