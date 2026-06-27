/* eslint-disable @next/next/no-img-element */
import React from "react";
import StarRattings from "../star-ratting/StarRattings";
import { Button } from "../ui/button";
import WhatsappIcon from "@/components/icons/WhatsappIcon";

const ProductThumbnail = () => {
  return (
    <>
      <div className='relative border p-1 rounded-xl'>
        <div className='product-image'>
          <img
            src='/products/product-1.png'
            alt='product'
            className='w-full rounded-lg'
          />
        </div>
        <div className='product-info flex justify-between text-left px-3 py-2.5'>
          <div className=''>
            <h6 className='font-medium mb-1'>Modular Office Cabinet</h6>
            <div className='flex items-end gap-2'>
              ₹
              <p className='text-[14px] text-gray-400 line-through'>18,000/-</p>
              <p className='text-[18px] font-semibold'>12,000/-</p>
            </div>
            <div className='mt-2'>
              <StarRattings />
            </div>
          </div>
          <Button
            variant={"link"}
            className={"p-0 h-auto"}
            aria-label='Chat on WhatsApp'
          >
            <WhatsappIcon size={40} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductThumbnail;
