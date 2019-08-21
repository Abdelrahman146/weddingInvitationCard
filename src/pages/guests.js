import React from 'react';

import Layout from '../components/layout';

const GuestsPage = () => (
    <Layout>
        <h3 className="letter-text">قائمة المدعوين</h3>
        <table className="guests-table">
            <tbody>
                <tr><th>1</th><td className="has-text-right">السيد فلان أ</td></tr>
                <tr><th>2</th><td className="has-text-right">السيدة فلان ب</td></tr>
            </tbody>
        </table>
    </Layout>
);

export default GuestsPage;
