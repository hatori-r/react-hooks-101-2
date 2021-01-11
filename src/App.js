import React, { useState } from 'react';

const App = () => {
  // useStateは()内に初期値を指定する。
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)

  const reset = () => setCount(0)

  const doubledNumber = () => setCount(count * 2)

  /*
  const divide3 = () => setCount(previousCount => {
    if (previousCount % 3 === 0) {
      return previousCount / 3
    } else {
      return previousCount
    }
  })
  */
  // divide3のより省略した記法（三項演算子を用いたリファクタリング）
  const divide3 = () => setCount(previousCount =>
    previousCount % 3 === 0 ? previousCount / 3 : previousCount
  )

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={doubledNumber}>*2</button>
        <button onClick={divide3}>3の倍数のときだけ3で割る</button>
      </div>
      <a href="https://github.com/hatori-r">hatori-r by github</a>
    </>
  );
}

export default App;
