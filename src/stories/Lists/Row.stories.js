import React from "react";
import '../../styles/style.css'
import {Lists} from '../../'

export default {
    title: 'Example/Lists/Row',
    components: Lists.Row,
    argsTypes: {}
}

const Template = (args) => <Lists.Row {...args}>
    <Lists.Column type={'dt'}>Full name</Lists.Column>
    <Lists.Column type={'dd'} colSpan={2}>Margot Foster</Lists.Column>
</Lists.Row>;

export const Default = Template.bind({});
Default.args = {};