import React from 'react';

function faq({ faqs }) {
    return (
        <div className="max-w-4xl mx-auto space-y-8 my-32">
            {faqs.map((faq) => (
                <div className="p-4 space-y-3" key={faq.id}>
                    <p>{faq.question}</p>
                    <p>{faq.anwser}</p>
                </div>
            ))}
        </div>
    );
}

export default faq;

export async function getStaticProps() {
    const { client } = require('../graphql/client');

    const { faqs } = await client.request(`
        query MyQuery {
            faqs {
                id
                question
                anwser
            }
        }
    `);

    return {
        props: { faqs }
    };
}
