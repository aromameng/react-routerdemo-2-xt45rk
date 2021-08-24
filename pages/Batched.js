import React, { useState, useEffect } from 'react';

const renderCntMap = {};
const renderOnce = name => {
  return (renderCntMap[name] = (renderCntMap[name] || 0) + 1);
};

function NormalComponent() {
  const [list, setList] = useState(null);
  const [info, setInfo] = useState(null);

  function getData() {
    return new Promise((r, j) => {
      setTimeout(() => {
        r({
          list: [],
          info: 'hello'
        });
      }, 1000);
    });
  }

  useEffect(() => {
    (async () => {
      const data = await getData();
      setList(data.list);
      setInfo(data.info);
    })();
  }, []);

  return (
    <div>
      非批量更新组件时 Render 次数：{renderOnce('normal')}
      <p>{info}</p>
    </div>
  );
}

export default NormalComponent;
