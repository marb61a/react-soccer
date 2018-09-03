import React from 'react';
import { Link } from 'react-router-dom';

import mutdlogo from '../../Resources/images/logos/Manchester_United_logo_logotype_crest.png';

export const UtdLogo = (props) => {

    const template = <div
        className="img_cover"
        style={{
            width: props.width,
            height: props.height,
            background:`url(${mutdlogo}) no-repeat`
        }}
    ></div>

  if(props.link){
    return (
        <Link to={props.linkTo} className="link_logo">
            {template}
        </Link>
    )
  } else {
    return template
  }
}