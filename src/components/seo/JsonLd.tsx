/**
 * Emits a JSON-LD script tag.
 *
 * `JSON.stringify` does NOT escape for HTML. A string containing `</script>`
 * inside the data would close the tag and everything after it becomes markup —
 * which is a real risk here, because product names and review text are
 * user-supplied content going straight into a <script> element. Escaping `<` to
 * `<` is the standard fix and stays valid JSON.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
