import React, { useState, useMemo, useCallback } from 'react';

export default function WithoutMemo() {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState('');

  // // 未性能优化前，数据每次更新时，均会触发
  // function expensive() {
  //   console.log('compute');
  //   let sum = 0;
  //   for (let i = 0; i < count * 100; i++) {
  //     sum += i;
  //   }
  //   return sum;
  // }

  // 使用useMemo 性能优化,仅在count更新时触发
  const expensive = useMemo(() => {
    console.log('compute');
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }, [count]);

  return (
    <div>
      <h4>
        {count}-{val}-{expensive}
      </h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+c1</button>
        <input value={val} onChange={event => setValue(event.target.value)} />
      </div>
    </div>
  );
}
