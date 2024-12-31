"use user"
import React from 'react'
import Script from 'next/script'

const About = () => {
    return (
        <div>

            <script>
                {`alert("Welcome to about page")`}
            </script>

            this is the about page of our app

        </div>
    )
}

export default About
export const metadata = {
    title: "Lord.X - Aabout Page ",
    description: "This is a about page lord.x learning matereial",
};
