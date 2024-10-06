"use client";
import { useEffect, useRef, useState } from 'react';
import 'quill/dist/quill.snow.css'; // Import Quill's CSS
import Quill from 'quill';

const RichTextEditor: React.FC<{name: string}> = ({name}) => {
  const [editorHtml, setEditorHtml] = useState<string>('');
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    console.log("test")
    quillRef.current = new Quill('#editor'+name, {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ header: [1, false, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'blockquote', 'code-block'],
          ['clean'], // remove formatting button
        ],
      },
    });

    quillRef.current.on('text-change', () => {
      setEditorHtml(quillRef.current?.root.innerHTML || '');
    });
  }, []);

  return (
    <div>
      <div id={"editor" + name} style={{ height: '300px' }}></div>
      <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
    </div>
  );
};

export default RichTextEditor;
