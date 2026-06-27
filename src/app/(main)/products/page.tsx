import React from "react";

const ProductsPage = () => {
  return (
    <div className='mt-20 flex-1'>
      <div className='max-w-[1200px] px-4 mx-auto py-12 md:py-16 lg:py-[80px]'>
        <h1 className='font-heading italic text-3xl sm:text-4xl lg:text-[42px]'>
          Products
        </h1>
        <p className='mt-4 max-w-[600px] font-light text-gray-600'>
          Our full furniture catalogue is on its way. In the meantime, explore
          our featured pieces on the home page or get in touch with our team.
        </p>
      </div>
    </div>
  );
};

export default ProductsPage;
