import android from '../public/images/icons/android3.svg';
import graphql from '../public/images/icons/graphql.svg';
import java from '../public/images/icons/java.svg';
import javascript from '../public/images/icons/javascript.svg';
import kotlin from '../public/images/icons/kotlin.svg';
import mongodb from '../public/images/icons/mongodb.svg';
import next from '../public/images/icons/next.svg';
import node from '../public/images/icons/node.svg';
import reactLogo from '../public/images/icons/react2.svg';
import spring from '../public/images/icons/spring.svg';
import tailwindcss from '../public/images/icons/tailwindcss.svg';
import typescript from '../public/images/icons/typescript.svg';
import illustrator from '../public/images/icons/illustrator.svg';
import express from '../public/images/icons/express.svg';
import hapi from '../public/images/icons/hapi.svg';
import sql from '../public/images/icons/sql.svg';
import sass from '../public/images/icons/sass.svg';
import html from '../public/images/icons/html.svg';
import figma from '../public/images/icons/figma.svg';
import redis from '../public/images/icons/redis.svg';
import redux from '../public/images/icons/redux.svg';
import docker from '../public/images/icons/docker.svg';
import heroku from '../public/images/icons/heroku.svg';
import digitalocean from '../public/images/icons/digitalocean.svg';
import electron from '../public/images/icons/electron.svg';
import vue from '../public/images/icons/vue.svg';
import bootstrap from '../public/images/icons/bootstrap.svg';
import cpp from '../public/images/icons/cpp.svg';
import python from '../public/images/icons/python.svg';
import babel from '../public/images/icons/babel.svg';
import webpack from '../public/images/icons/webpack.svg';
import kafka from '../public/images/icons/kafka.svg';
import rabbitmq from '../public/images/icons/rabbitmq.svg';
import aws from '../public/images/icons/aws.svg';
import gcp from '../public/images/icons/gcp.svg';
import django from '../public/images/icons/django.svg';
import xd from '../public/images/icons/xd.svg';
import photoshop from '../public/images/icons/photoshop.svg';
import linux from '../public/images/icons/linux.svg';
import scala from '../public/images/icons/scala.svg';
import csharp from '../public/images/icons/csharp.svg';
import c from '../public/images/icons/c.svg';
import apache from '../public/images/icons/apache.svg';
import circleci from '../public/images/icons/circleci.svg';
import vercel from '../public/images/icons/vercel.svg';
import firebase from '../public/images/icons/firebase.svg';
import auth0 from '../public/images/icons/auth0.svg';
import graphCMS from '../public/images/icons/Graphcms.svg';
import algolia from '../public/images/icons/algolia.svg';
import gatsby from '../public/images/icons/gatsby.svg';
import imagekit from '../public/images/icons/imagekit.svg';
import jest from '../public/images/icons/jest.svg';
import cypress from '../public/images/icons/cypress.svg';
import rtl from '../public/images/icons/rtl.svg';
import styledComponents from '../public/images/icons/styledComponents.svg';
import junit from '../public/images/icons/junit5.svg';
import googleAnalytics from '../public/images/icons/googleAnalytics.svg';
import googleMaps from '../public/images/icons/googleMaps.svg';
import dotnet from '../public/images/icons/dotnet.svg';
import jquery from '../public/images/icons/jquery.svg';
import apollo from '../public/images/icons/apollo.svg';
import coil from '../public/images/icons/coil.svg';
import materialUI from '../public/images/icons/materialUI.svg';
import github from '../public/images/icons/githubDark.svg';
import preact from '../public/images/icons/preact.svg';

import Image from 'next/image';

export const match = (technology, width = 60, height = 60) => {
    switch (technology) {
        case 'React':
            return (
                <>
                    <Image src={reactLogo} width={width} height={height} alt="React.js" data-tip="React.js" />
                </>
            );
        case 'Nodejs':
            return (
                <>
                    <Image src={node} width={width} height={height} alt="Node.js" data-tip="Node.js" />
                </>
            );
        case 'Javascript':
            return (
                <>
                    <Image src={javascript} width={width} height={height} alt="Javascript" data-tip="Javascript" />
                </>
            );
        case 'Typescript':
            return (
                <>
                    <Image src={typescript} width={width} height={height} alt="Typescript" data-tip="Typescript" />
                </>
            );
        case 'Java':
            return (
                <>
                    <Image src={java} width={width} height={height} alt="Java" data-tip="Java" />
                </>
            );
        case 'Kotlin':
            return (
                <>
                    <Image src={kotlin} width={width} height={height} alt="Kotlin" data-tip="Kotlin" />
                </>
            );
        case 'Android':
            return (
                <>
                    <Image src={android} width={width} height={height} alt="Android" data-tip="Android" />
                </>
            );
        case 'MongoDB':
            return (
                <>
                    <Image src={mongodb} width={width} height={height} alt="MongoDB" data-tip="MongoDB" />
                </>
            );
        case 'Spring':
            return (
                <>
                    <Image src={spring} width={width} height={height} alt="Spring.io" data-tip="Spring.io" />
                </>
            );
        case 'Nextjs':
            return (
                <>
                    <Image src={next} width={width} height={height} alt="Next.js" data-tip="Next.js" />
                </>
            );
        case 'Illustrator':
            return (
                <>
                    <Image src={illustrator} width={width} height={height} alt="Illustrator" data-tip="Adobe Illustrator" />
                </>
            );
        case 'TailwindCSS':
            return (
                <>
                    <Image src={tailwindcss} width={width} height={height} alt="TailwindCSS" data-tip="TailwindCSS" />
                </>
            );
        case 'GraphQL':
            return (
                <>
                    <Image src={graphql} width={width} height={height} alt="GraphQL" data-tip="GraphQL" />
                </>
            );
        case 'Express':
            return (
                <>
                    <Image src={express} width={width} height={height} alt="Express.js" data-tip="Express.js" />
                </>
            );
        case 'Hapi':
            return (
                <>
                    <Image src={hapi} width={width} height={height} alt="Hapi.js" data-tip="Hapi.js" />
                </>
            );
        case 'SQL':
            return (
                <>
                    <Image src={sql} width={width} height={height} alt="MySQL" data-tip="MySQL" />
                </>
            );
        case 'SASS':
            return (
                <>
                    <Image src={sass} width={width} height={height} alt="SASS" data-tip="SASS" />
                </>
            );
        case 'HTML':
            return (
                <>
                    <Image src={html} width={width} height={height} alt="HTML5" data-tip="HTML" />
                </>
            );
        case 'Figma':
            return (
                <>
                    <Image src={figma} width={width} height={height} alt="Figma" data-tip="Figma" />
                </>
            );
        case 'Redis':
            return (
                <>
                    <Image src={redis} width={width} height={height} alt="Redis" data-tip="Redis" />
                </>
            );
        case 'Redux':
            return (
                <>
                    <Image src={redux} width={width} height={height} alt="Redux" data-tip="Redux" />
                </>
            );
        case 'Docker':
            return (
                <>
                    <Image src={docker} width={width} height={height} alt="Docker" data-tip="Docker" />
                </>
            );
        case 'Heroku':
            return (
                <>
                    <Image src={heroku} width={width} height={height} alt="Heroku" data-tip="Heroku" />
                </>
            );
        case 'DigitalOcean':
            return (
                <>
                    <Image src={digitalocean} width={width} height={height} alt="DigitalOcean" data-tip="Digital Ocean" />
                </>
            );
        case 'Electron':
            return (
                <>
                    <Image src={electron} width={width} height={height} alt="Electron" data-tip="Electron" />
                </>
            );
        case 'Vue':
            return (
                <>
                    <Image src={vue} width={width} height={height} alt="Vue.js" data-tip="Vue" />
                </>
            );
        case 'Bootstrap':
            return (
                <>
                    <Image src={bootstrap} width={width} height={height} alt="Bootstrap 5" data-tip="Bootstrap" />
                </>
            );
        case 'Cpp':
            return (
                <>
                    <Image src={cpp} width={width} height={height} alt="C++" data-tip="C++" />
                </>
            );
        case 'Python':
            return (
                <>
                    <Image src={python} width={width} height={height} alt="Python 3" data-tip="Python" />
                </>
            );
        case 'Babel':
            return (
                <>
                    <Image src={babel} width={width} height={height} alt="Babel" data-tip="Babel" />
                </>
            );
        case 'Webpack':
            return (
                <>
                    <Image src={webpack} width={width} height={height} alt="Webpack" data-tip="Webpack" />
                </>
            );
        case 'Kafka':
            return (
                <>
                    <Image src={kafka} width={width} height={height} alt="Kafka" data-tip="Kafka" />
                </>
            );
        case 'RabbitMQ':
            return (
                <>
                    <Image src={rabbitmq} width={width} height={height} alt="RabbitMQ" data-tip="RabbitMQ" />
                </>
            );
        case 'AWS':
            return (
                <>
                    <Image src={aws} width={width} height={height} alt="Amazon Web Services" data-tip="Amazon Web services" />
                </>
            );
        case 'GCP':
            return (
                <>
                    <Image src={gcp} width={width} height={height} alt="Google Cloud Platform" data-tip="Google Cloud Platform" />
                </>
            );
        case 'Django':
            return (
                <>
                    <Image src={django} width={width} height={height} alt="Django" data-tip="Django" />
                </>
            );
        case 'AdobeXD':
            return (
                <>
                    <Image src={xd} width={width} height={height} alt="Adobe XD" data-tip="Adobe XD" />
                </>
            );
        case 'Photoshop':
            return (
                <>
                    <Image src={photoshop} width={width} height={height} alt="Photoshop" data-tip="Adobe Photoshop" />
                </>
            );
        case 'Linux':
            return (
                <>
                    <Image src={linux} width={width} height={height} alt="Linux" data-tip="Linux" />
                </>
            );
        case 'Scala':
            return (
                <>
                    <Image src={scala} width={width} height={height} alt="Scala" data-tip="Scala" />
                </>
            );
        case 'CSharp':
            return (
                <>
                    <Image src={csharp} width={width} height={height} alt="C#" data-tip="C#" />
                </>
            );
        case 'C':
            return (
                <>
                    <Image src={c} width={width} height={height} alt="C" data-tip="C" />
                </>
            );
        case 'Apache':
            return (
                <>
                    <Image src={apache} width={width} height={height} alt="Apache 3" data-tip="Apache" />
                </>
            );
        case 'CircleCI':
            return (
                <>
                    <Image src={circleci} width={width} height={height} alt="CircleCI" data-tip="CircleCI" />
                </>
            );
        case 'Vercel':
            return (
                <>
                    <Image src={vercel} width={width} height={height} alt="Vercel" data-tip="Vercel" />
                </>
            );
        case 'Firebase':
            return (
                <>
                    <Image src={firebase} width={width} height={height} alt="Firebase" data-tip="Firebase" />
                </>
            );
        case 'Auth0':
            return (
                <>
                    <Image src={auth0} width={width} height={height} alt="Auth0" data-tip="Auth0" />
                </>
            );
        case 'GraphCMS':
            return (
                <>
                    <Image src={graphCMS} width={width} height={height} alt="GraphCMS" data-tip="GraphCMS" />
                </>
            );
        case 'Algolia':
            return (
                <>
                    <Image src={algolia} width={width} height={height} alt="Algolia" data-tip="Algolia" />
                </>
            );
        case 'Gatsby':
            return (
                <>
                    <Image src={gatsby} width={width} height={height} alt="Gatsby" data-tip="Gatsby.js" />
                </>
            );
        case 'ImageKit':
            return (
                <>
                    <Image src={imagekit} width={width} height={height} alt="Imagekit" data-tip="Imagekit" />
                </>
            );
        case 'Jest':
            return (
                <>
                    <Image src={jest} width={width} height={height} alt="Jest" data-tip="Jest" />
                </>
            );
        case 'Cypress':
            return (
                <>
                    <Image src={cypress} width={width} height={height} alt="Cypress" data-tip="Cypress" />
                </>
            );
        case 'ReactTestingLibrary':
            return (
                <>
                    <Image src={rtl} width={width} height={height} alt="React Testing Library" data-tip="React Testing Library" />
                </>
            );
        case 'StyledComponents':
            return (
                <>
                    <Image src={styledComponents} width={width} height={height} alt="Styled Components" data-tip="Styled Components" />
                </>
            );
        case 'JUnit5':
            return (
                <>
                    <Image src={junit} width={width} height={height} alt="JUnit5" data-tip="Junit5" />
                </>
            );
        case 'GoogleAnalytics':
            return (
                <>
                    <Image src={googleAnalytics} width={width} height={height} alt="Google Analytics" data-tip="Google Analytics" />
                </>
            );
        case 'GoogleMaps':
            return (
                <>
                    <Image src={googleMaps} width={width} height={height} alt="Google Maps" data-tip="Google Maps" />
                </>
            );
        case 'Dotnet':
            return (
                <>
                    <Image src={dotnet} width={width} height={height} alt=".NET" data-tip=".NET" />
                </>
            );
        case 'JQuery':
            return (
                <>
                    <Image src={jquery} width={width} height={height} alt="JQuery" data-tip="JQuery" />
                </>
            );
        case 'Coil':
            return (
                <>
                    <Image src={coil} width={width} height={height} alt="Coil" data-tip="Coil" />
                </>
            );
        case 'Apollo':
            return (
                <>
                    <Image src={apollo} width={width} height={height} alt="Apollo GraphQL Client" data-tip="Apollo GraphQL Client" />
                </>
            );
        case 'materialUI':
            return (
                <>
                    <Image src={materialUI} width={width} height={height} alt="MaterialUI" data-tip="Material UI" />
                </>
            );
        case 'GithubPages':
            return (
                <>
                    <Image src={github} width={width} height={height} alt="Github Pages" data-tip="Github Pages" />
                </>
            );
        case 'Preact':
            return (
                <>
                    <Image src={preact} width={width} height={height} alt="Preact" data-tip="Preact" />
                </>
            );
        default:
        case 'React':
            return (
                <>
                    <Image src={reactLogo} width={width} height={height} alt="React.js" data-tip="React.js" />
                </>
            );
    }
};
