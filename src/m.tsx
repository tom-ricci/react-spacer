import React, { FC, ReactElement } from "react";

type Unit =  "cm" | "mm" | "in" | "px" | "pt" | "pc" | "em" | "ex" | "ch" | "rem" | "vw" | "vh" | "vmin" | "vmax" | "%";

interface Props extends React.HTMLProps<HTMLDivElement> {
  x?: `${ number }${ Unit }`;
  y?: `${ number }${ Unit }`;
  inline?: boolean;
}

/**
 * A Spacer is a component which can have a height and width written in CSS, designed to act as a blank space separating other components. The default height and width is 100%. The <code>inline</code> prop defines if the spacer should be displayed as <code>inline-block</code>.
 * @constructor
 */
export const Spacer: FC<Props> = ({ x, y, inline, ...props}): ReactElement => {
  const _y = y ?? "100%";
  const _x = x ?? "100%";
  const i = inline ?? false;
  props.style = props.style ?? {};
  props.style.height = _y;
  props.style.width = _x;
  if(i) {
    props.style.display = "inline-block";
  }
  return (
    <React.Fragment>
      <div {...props}/>
    </React.Fragment>
  );
};
