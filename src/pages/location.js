import React from 'react';

import Layout from '../components/layout';
import Map from '../components/map';

const LocationPage = () => (
    <Layout>
        <h3 className="letter-text">مكان وتاريخ حفل الزفاف</h3>
        <br/>
        <div className="columns">
            <div className="column">
               <div className="block-centered">
                    <p className="has-text-weight-bold is-marginless">تاريخ الحفل</p>
                    <p className="is-marginless">
                        العاشر من يناير 2020 الساعة السابعة مسائاً
                    </p>
                    <br/>
                    <p className="has-text-weight-bold is-marginless">العنوان</p>
                    <p className="is-marginless">
                        الشارقة، فندق Raddison Blu, شارع الكورنيش
                    </p>
                    <p className="is-marginless"><span className="has-text-weight-bold">قاعة السيدات:</span> المباركية</p>
                    <p className="is-marginless"><span className="has-text-weight-bold">قاعة السادة:</span> views</p>
               </div>
            </div>
            <div className="column">
            <p className="has-text-weight-bold"> المكان على الخريطة</p>
             <Map/>
            </div>
        </div>
    </Layout>
);

export default LocationPage;
