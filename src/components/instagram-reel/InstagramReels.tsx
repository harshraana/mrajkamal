import { getInstagramReels } from "@/lib/instagram";
import InstagramReelsSlider from "./InstagramReelsSlider";

const InstagramReels = async () => {
  const reels = await getInstagramReels();

  if (reels.length === 0) {
    return (
      <p className='py-8 text-center font-light text-gray-500'>
        Latest reels are taking a moment — meanwhile,{" "}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.instagram.com/mrajkamalfurniture/'
          className='underline'
        >
          watch them on Instagram
        </a>
        .
      </p>
    );
  }

  return <InstagramReelsSlider reels={reels} />;
};

export default InstagramReels;
