import Editor from '@monaco-editor/react';
import { useRef } from 'react';
type MonacoType = any | null;


interface CodePreviewProps {
  description?: string;
  id?: string;
}

export default function CodePreview(props: CodePreviewProps) {
  const { description } = props;

  const monacoRef = useRef(null);
  function handleEditorWillMount(monaco: MonacoType) {
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true,
    });
  }
  function handleEditorDidMount(_: any, monaco: MonacoType) {
    monacoRef.current = monaco;
  }

  return (
    <Editor
        height="300px"
        defaultLanguage="typescript"
        defaultValue={description}
        beforeMount={handleEditorWillMount}
        onMount={handleEditorDidMount}
        />
  );
}