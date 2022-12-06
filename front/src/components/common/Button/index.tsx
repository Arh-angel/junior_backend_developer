import React, { ReactElement } from 'react';
import style from './Button.module.scss';

type ButtonPropsType = {
  clName?: string;
  title: string | null;
  handler: () => Promise<void> | void | null;
  width?: string;
  height?: string;
  background?: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string,
  borderRadius?: string,
  icon?: ReactElement
};

const Button = (props: ButtonPropsType) => {
  // eslint-disable-next-line max-len
  const { clName, title, handler, width, height, background, textColor, fontSize, fontWeight, margin, borderRadius, icon } = props;

  return (
    <button className={[style.wrapper, clName].join(' ')} type="button" style={{ width: `${width}`, height: `${height}`, background: `${background}`, color: `${textColor}`, fontSize: `${fontSize}`, fontWeight: `${fontWeight}`, margin: `${margin}`, borderRadius: `${borderRadius}` }} onClick={handler}>
      {title}
      {icon}
    </button>
  );
};

export default Button;
