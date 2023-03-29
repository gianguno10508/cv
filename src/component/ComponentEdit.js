import React, { useState } from 'react';
import ContentEditable from 'react-contenteditable';

const ComponentEdit = ({data}) => {
  const [content, setContent] = useState(data);
  const handleChange = event => {
    // console.log(event.target.value);
    setContent(event.target.value);
  };
  return (
    <ContentEditable
      html={content}
      onChange={handleChange}
    />
  );
}
export default ComponentEdit;