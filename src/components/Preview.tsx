import React from "react";
import { useSelector } from "react-redux";

const Preview: React.FC = () => {
  const previewData = useSelector((state: any) => state.preview);

  return (
    <div>
      <h2>Preview</h2>
      <pre>{JSON.stringify(previewData ?? {}, null, 2)}</pre>
    </div>
  );
};

export default Preview;
