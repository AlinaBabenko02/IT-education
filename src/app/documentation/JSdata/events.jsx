import React from "react";
import { Text } from "../../../ui";
import s from "../styles.module.css";

export const EventsBody = () => (
  <>
    <Text size="m" color="green1" className={s.blockName}>
      Mouse
    </Text>
    <div>
      onclick, oncontextmenu, ondblclick, onmousedown, onmouseenter,
      onmouseleave, onmousemove, onmouseover, onmouseout, onmouseup
    </div>
    <Text size="m" color="green1" className={s.blockName}>
      Keyboard
    </Text>
    <div>onkeydown, onkeypress, onkeyup </div>
    <Text size="m" color="green1" className={s.blockName}>
      Frame
    </Text>
    <div>
      onabort, onbeforeunload, onerror, onhashchange, onload, onpageshow,
      onpagehide, onresize, onscroll, onunload
    </div>
    <Text size="m" color="green1" className={s.blockName}>
      Form
    </Text>
    <div>
      onblur, onchange, onfocus, onfocusin, onfocusout, oninput, oninvalid,
      onreset, onsearch, onselect, onsubmit
    </div>
    <Text size="m" color="green1" className={s.blockName}>
      Drag
    </Text>
    <div>
      ondrag, ondragend, ondragenter, ondragleave, ondragover, ondragstart,
      ondrop
    </div>
    <Text size="m" color="green1" className={s.blockName}>
      Clipboard
    </Text>
    <div>
      oncopy, oncut, onpaste Media onabort, oncanplay, oncanplaythrough,
      ondurationchange, onended, onerror, onloadeddata, onloadedmetadata,
      onloadstart, onpause, onplay, onplaying, onprogress, onratechange,
      onseeked, onseeking, onstalled, onsuspend, ontimeupdate, onvolumechange,
      onwaiting
    </div>
    <Text size="m" color="green1" className={s.blockName}>
      Animation
    </Text>
    <div>animationend, animationiteration, animationstart </div>
    <Text size="m" color="green1" className={s.blockName}>
      Miscellaneous
    </Text>
    <div>
      transitionend, onmessage, onmousewheel, ononline, onoffline, onpopstate,
      onshow, onstorage, ontoggle, onwheel, ontouchcancel, ontouchend,
      ontouchmove, ontouchstart
    </div>
  </>
);
