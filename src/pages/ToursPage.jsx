import React from 'react';
import {Page, SkeletonImage} from "framework7-react";
import {AlarmFill, Bag, Giftcard} from "framework7-icons/react";
import Like from "@/components/post/Like";

const ToursPage = () => {
    return (
        <div>
            <Page name='ToursPage'>
                <Bag/>
            </Page>
        </div>
    );
};

export default ToursPage;