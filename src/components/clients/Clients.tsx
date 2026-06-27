const clients = [
  "Jindal Steel",
  "Rachana Sansad College of Architecture",
  "GST Office, Mumbai",
  "Aditya Birla Group",
  "Sanjeev Goenka Group",
  "Sane Guruji Vidyalaya",
  "Kohinoor City",
  "Indian Institute of Hotel Management",
  "Tirumala Tirupati Devasthanams",
  "Unilazer Ventures Pvt. Ltd.",
  "RSVP Films",
  "Shemaroo Films",
];

const Clients = () => {
  return (
    <>
      {/* Continuous, seamless CSS marquee — 576px and up. The names are rendered
          twice so the -50% loop point is visually identical (no glitch). */}
      <div className='hidden w-full overflow-hidden min-[576px]:block bg-primary/15 pt-3 pb-4'>
        <div className='marquee-track flex w-max'>
          {[...clients, ...clients].map((name, i) => (
            <div
              key={`${name}-${i}`}
              aria-hidden={i >= clients.length || undefined}
              className='flex items-center'
            >
              <span className='font-heading text-lg md:text-2xl whitespace-nowrap text-gray-700'>
                {name}
              </span>
              <span className='mx-6 md:mx-10 h-2 w-2 shrink-0 rounded-full bg-primary' />
            </div>
          ))}
        </div>
      </div>

      {/* Plain list — below 576px */}
      <ul className='mx-auto max-w-[320px] space-y-3 text-left min-[576px]:hidden'>
        {clients.map((name) => (
          <li key={name} className='flex items-center gap-3'>
            <span className='h-2 w-2 shrink-0 rounded-full bg-primary' />
            <span className='font-heading text-lg text-gray-700'>{name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Clients;
