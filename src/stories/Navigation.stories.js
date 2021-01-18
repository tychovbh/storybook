import React from 'react';
import '../components/Navigations/Navigation.css';
import * as Navigation from "../components/Navigations/Navigation";
import * as Elements from '../components/Elements/Elements'
import Avatar from '../assets/profile.jpg'

export default {
    title: 'Example/Navigations',
    component: Navigation.Container,
    argsTypes: {}
};

const Template = (args) => <Navigation.Container {...args}>
    <Navigation.Nav>
        <Navigation.NavLink active>Dashboard</Navigation.NavLink>
        <Navigation.NavLink>Team</Navigation.NavLink>
        <Navigation.NavLink>Projects</Navigation.NavLink>
        <Navigation.NavLink>Calendar</Navigation.NavLink>
    </Navigation.Nav>
    <Elements.Avatar img={Avatar}/>
</Navigation.Container>;

export const Simple_dark = Template.bind({});
Simple_dark.args = {};

