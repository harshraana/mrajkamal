import type { ClientDTO } from "@/types";

/**
 * The "Our Clients" ticker, now CMS-driven.
 *
 * The marquee can be PAUSED (see `.marquee-track:hover/:focus-within` in
 * globals.css). An infinite animation with no stop control fails WCAG 2.2.2
 * (Pause, Stop, Hide) — perpetually moving text is a genuine barrier for people
 * with attention or vestibular difficulties, and there was no way to stop it.
 *
 * The duplicated half of the track is `aria-hidden`, so a screen reader hears the
 * list once rather than twice.
 */
export default function Clients({ clients }: { clients: ClientDTO[] }) {
  if (clients.length === 0) return null;

  return (
    <>
      {/* Continuous, seamless CSS marquee — 576px and up. The names are rendered
          twice so the -50% loop point is visually identical (no glitch). */}
      <div className='hidden w-full overflow-hidden bg-primary/15 pt-3 pb-4 min-[576px]:block'>
        <ul className='marquee-track flex w-max' tabIndex={0} aria-label='Our clients'>
          {[...clients, ...clients].map((client, i) => (
            <li
              key={`${client.name}-${i}`}
              aria-hidden={i >= clients.length || undefined}
              className='flex items-center'
            >
              <span className='font-heading text-lg whitespace-nowrap text-gray-700 md:text-2xl'>
                {client.name}
              </span>
              <span className='mx-6 h-2 w-2 shrink-0 rounded-full bg-primary md:mx-10' />
            </li>
          ))}
        </ul>
      </div>

      {/* Plain list below 576px — nothing animates, nothing to pause. */}
      <ul className='mx-auto max-w-[320px] space-y-3 text-left min-[576px]:hidden'>
        {clients.map((client) => (
          <li key={client.name} className='flex items-center gap-3'>
            <span className='h-2 w-2 shrink-0 rounded-full bg-primary' />
            <span className='font-heading text-lg text-gray-700'>{client.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
