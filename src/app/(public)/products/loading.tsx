export default function ProductsLoading() {
  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={{ minHeight: 400 }}
    >
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading products…</span>
      </div>
    </div>
  );
}
