import React from 'react';
import Wrapper from '../assets/Styles/TagsInputWrapper'

const TagsInput = ({value, handleTagChange, handleTagKeyPress, removeTag, tags, placeholder, className})=> {

  return (
    <Wrapper className="tag-input-container">
      <div className="tag-list">
        {tags.map((tag, index) => {
          return (
            <span key={index} className="tag">
              {tag}
              <span className="tag-remove" onClick={() => removeTag(tag)}>x</span>
            </span>
          );
        })}
      </div>
        <input
          type="text"
          className={className || "tag-input"}
          placeholder={placeholder || "Enter tags"}
          value={value}
          onChange={handleTagChange}
          onKeyPress={handleTagKeyPress}
        />
    </Wrapper>
  );
}

export default TagsInput;
