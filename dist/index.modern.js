import React from 'react';

var Button = function Button(props) {
  var _buttonDefClasses;
  var type = props.type,
    text = props.text;
  var buttonDefClasses = (_buttonDefClasses = {}, _buttonDefClasses[ButtonDef.INSTAGRAM] = 'instagramBtn', _buttonDefClasses[ButtonDef.TWITTER] = 'twitterBtn', _buttonDefClasses[ButtonDef.LINKEDIN] = 'linkedinBtn', _buttonDefClasses[ButtonDef.GITHUB] = 'githubBtn', _buttonDefClasses[ButtonDef.YOUTUBE] = 'youtubeBtn', _buttonDefClasses);
  var getButtonDefClass = function getButtonDefClass() {
    return buttonDefClasses[type] || 'youtubeBtn';
  };
  return /*#__PURE__*/React.createElement("div", {
    className: getButtonDefClass()
  }, text);
};
var ButtonDef = {
  INSTAGRAM: 'INSTAGRAM',
  TWITTER: 'TWITTER',
  LINKEDIN: 'LINKEDIN',
  GITHUB: 'GITHUB',
  YOUTUBE: 'YOUTUBE'
};

export { Button, ButtonDef };
//# sourceMappingURL=index.modern.js.map
