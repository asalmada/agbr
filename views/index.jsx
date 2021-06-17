var React = require("react");
var DefaultLayout = require("./layouts/default");

function HelloMessage(props) {
  return (
    <DefaultLayout>
      <div>
        <a href="/spotify/auth">Login</a>
      </div>
    </DefaultLayout>
  );
}

module.exports = HelloMessage;
