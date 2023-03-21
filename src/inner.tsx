import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom';


const Outside: FC = () => {
  const [count, setCount] = useState(0);
  return <div>
    <button onClick={() => setCount(n => n + 1)}>Count ({count})</button>
  </div>
}

function renderComponentInOutside() {
  const outside = window.parent.document.querySelector('#container');
  ReactDOM.render(<Outside />, outside);
}

ReactDOM.render(
  <div>
    <button onClick={() => renderComponentInOutside()}>Render component in outside</button>
    <hr/>
    <button onClick={() => window.location.href = window.location.href}>Reload Iframe</button>
    <button onClick={() => window.frameElement?.remove()}>Remove this iframe</button>
  </div>,
  document.body
)

window.addEventListener('unload', (event) => {
  window.parent.document.getElementById('container')!.innerHTML = 'destroyed';
})