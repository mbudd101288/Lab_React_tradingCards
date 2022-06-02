'use strict';

function Homepage() {
  return (
  <div>
    <p>Let's check out some trading cards 🤙</p>
    <a rel="cards page" href="/cards" >"Click to view trading cards</a>
    <img src="/static/img/balloonicorn.jpg" />
  </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
