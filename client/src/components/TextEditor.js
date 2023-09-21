import React from "react";
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Wrapper from '../assets/Styles/TextEditorWrapper'

const TextEditor = ({handleChange, editorState})=> {
 
  const toolbarOptions = {
    options: ["inline"],
    inline: {
      options: ["bold", "italic", "underline", "strikethrough"],
    },
  };

  return (
    <Wrapper className="editor-container">
            <Editor
                editorState={editorState}
                onEditorStateChange={handleChange}
                wrapperClassName="editor-wrapper"
                editorClassName="message-editor"
                toolbarClassName="message-toolbar"
                toolbar={toolbarOptions}
                placeholder="Add text"
            />      
            {/* <div className="html-output" >{parsedContent}</div> */}
    </Wrapper>
  );
}


export default TextEditor