import React from 'react';
import BreadCrumb from 'components/BreadCrumb';

export default function Assignment() {

    return (
        <>
            <div className="d-xl-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                <BreadCrumb firstItem="Assignment" title="Assignment" />
            </div>
        </>
    );
}