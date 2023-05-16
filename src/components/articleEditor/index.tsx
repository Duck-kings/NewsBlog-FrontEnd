import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import type { MDEditorProps } from '@uiw/react-md-editor';
import { editorCommands, editorExtraCommands } from './editorOptions';

import styles from './articleEditor.module.scss';

export const ArticleEditor: React.FC<MDEditorProps> = ({ value, onChange }) => (
  <MDEditor
    value={value}
    onChange={onChange}
    className={styles.editor}
    commands={editorCommands}
    extraCommands={editorExtraCommands}
    height={300}
  />
);
