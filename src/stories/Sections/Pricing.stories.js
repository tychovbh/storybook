import React from "react";
import '../../styles/style.css';
import {Sections} from '../../';

export default {
    title: 'Example/Sections/Pricing',
    components: Sections.Pricing,
    argsTypes: {}
}

const Template = (args) => <Sections.Pricing {...args}/>;

export const Default = Template.bind({});
Default.args = {
    title: 'Hobby',
    description: 'All the basics for starting a new business',
    price: '12',
    button: 'Buy Hobby',
    list: {
        title: "What's included",
        items: [
            'Potinti felis, in cras at at ligula nunc.',
            'Orci neque eget pellentesque',
            'Potinti felis, in cras at at ligula nunc.',
            'Orci neque eget pellentesque'
        ]
    }
};