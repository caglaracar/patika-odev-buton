import React from 'react'


export const Button = (props) => {
  const {type, text} = props;

  const buttonDefClasses = {
    [ButtonDef.INSTAGRAM]: 'instagramBtn',
    [ButtonDef.TWITTER]: 'twitterBtn',
    [ButtonDef.LINKEDIN]: 'linkedinBtn',
    [ButtonDef.GITHUB]: 'githubBtn',
    [ButtonDef.YOUTUBE]: 'youtubeBtn'
  };

  const getButtonDefClass = () => buttonDefClasses[type] || 'youtubeBtn';

  return <div className={getButtonDefClass()}>{text}</div>;
}

export const ButtonDef = {
  INSTAGRAM: 'INSTAGRAM',
  TWITTER: 'TWITTER',
  LINKEDIN: 'LINKEDIN',
  GITHUB: 'GITHUB',
  YOUTUBE: 'YOUTUBE'
};

