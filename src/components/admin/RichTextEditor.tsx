"use client";

import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

/**
 * Self-hosted TinyMCE — no cloud API key, no domain lock, works offline.
 *
 * `licenseKey="gpl"` and `tinymceScriptSrc` are real PROPS on the React wrapper.
 * Putting `license_key` inside `init` is explicitly type-rejected by the package
 * ("overridden by the integration, use the `licenseKey` prop instead").
 *
 * The assets are copied out of node_modules into /public/tinymce by
 * `scripts/copy-tinymce.mjs` on predev/prebuild — they're generated, and
 * gitignored.
 *
 * The value is mirrored into a hidden input so the form posts plain FormData and
 * the whole thing keeps working with a Server Action.
 */
export default function RichTextEditor({
  name,
  defaultValue = "",
  height = 380,
}: {
  name: string;
  defaultValue?: string;
  height?: number;
}) {
  const [html, setHtml] = useState(defaultValue);

  return (
    <>
      <input type='hidden' name={name} value={html} />
      <Editor
        licenseKey='gpl'
        tinymceScriptSrc='/tinymce/tinymce.min.js'
        value={html}
        onEditorChange={setHtml}
        init={{
          height,
          menubar: false,
          branding: false,
          promotion: false,
          skin_url: "/tinymce/skins/ui/oxide",
          content_css: "/tinymce/skins/content/default/content.min.css",
          plugins: "lists link table code",
          toolbar:
            "undo redo | blocks | bold italic underline | bullist numlist | link table | removeformat code",
          block_formats: "Paragraph=p; Heading 2=h2; Heading 3=h3; Heading 4=h4",
          // A UX guard only — it keeps the editor from OFFERING markup the site
          // won't render. It is NOT the security boundary: it runs in the
          // browser. `sanitizeRichText()` on the server is what actually decides
          // what reaches the database.
          valid_elements:
            "p,br,strong/b,em/i,u,s,h2,h3,h4,ul,ol,li,blockquote,a[href|title|target],table,thead,tbody,tr,th[colspan|rowspan],td[colspan|rowspan],hr",
        }}
      />
    </>
  );
}
