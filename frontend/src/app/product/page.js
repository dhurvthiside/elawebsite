import React from 'react';

const Product = async () => {
  let products = [];

  try {
    // Fetch data with bearer token
    const res = await fetch("http://localhost:1337/api/products", {
      headers: {
        Authorization: `Bearer c26040b0c7cd3c776231b9af0ee81b240db1648c31cc466432efc84b9d699e8e6fc38b7a19786e1fb599f9f0d8f69ece2349f8f7ef1ebbf8fe05d0c757ca070991ef549b8abedbbb2fd990d67fcc2988a8d429c2e32f0682fdf140fbea10955a6c11629cb322f01150be94f053fa53908a56c542bfd155436f88783cc6e90f6a`,
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    products = await res.json();
    console.log(products.data[1].attributes.title);
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Pitchfork Kickstarter Taxidermy
          </h1>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.
        </p>
      </div>
      <div className="flex flex-wrap -m-4">
        {products.data.map((item) => (
          <div key={item.id} className="xl:w-1/4 md:w-1/2 p-4"> {/* Add unique key */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/720x400"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                 {products.data ? products.data[1].attributes.title : 'Loading...'}
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
