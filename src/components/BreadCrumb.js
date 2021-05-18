import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Breadcrumb } from '@themesberg/react-bootstrap';

export default function BreadCrumb(props) {

    const { description, title, firstItem, secondItem } = props;
  
    return (
        <div className="d-block mb-4 mb-xl-0">
            <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                { firstItem ? 
                    <Breadcrumb.Item active={secondItem ? false : true}>{firstItem}</Breadcrumb.Item>
                    : ""
                }
                { secondItem ? 
                    <Breadcrumb.Item active>{secondItem}</Breadcrumb.Item>
                    : ""
                }
            </Breadcrumb>
            <h4>{title}</h4>
            { description ?
                <p className="mb-0">
                    {description}
                </p> : ""
            }
        </div>
    );
  };