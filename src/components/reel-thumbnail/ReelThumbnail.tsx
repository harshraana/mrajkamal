import React from "react";

type Props = {
  classNames?: string;
};

const ReelThumbnail = (props: Props) => {
  return (
    <>
      <div className='relative aspect-9/16 border rounded-2xl'></div>
    </>
  );
};

export default ReelThumbnail;
