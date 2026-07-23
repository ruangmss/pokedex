import React from 'react';

const useHead = (title, description) => {
  React.useEffect(() => {
    document.title = title;

    const meta = document.querySelector('meta[name="description"]');
    meta.setAttribute('content', description);
  }, [title, description]);
};

export default useHead;
