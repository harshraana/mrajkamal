export default function AdminLoading() {
  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ minHeight: 200 }}
    >
      <div className='spinner-border text-dark' role='status'>
        <span className='visually-hidden'>Loading…</span>
      </div>
    </div>
  );
}
