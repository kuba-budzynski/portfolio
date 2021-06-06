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
import graphCMS from '../public/images/icons/graphcms.svg';
import algolia from '../public/images/icons/algolia.svg';
import gatsby from '../public/images/icons/gatsby.svg';
import Image from 'next/image';

import ReactTooltip from 'react-tooltip';

export const match = (technology, width = 60, height = 60) => {
    switch (technology) {
        case 'React':
            return (
                <>
                    <Image src={reactLogo} width={width} height={height} alt="React.js" data-tip="React.js" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Nodejs':
            return (
                <>
                    <Image src={node} width={width} height={height} alt="Node.js" data-tip="Node.js" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Javascript':
            return (
                <>
                    <Image src={javascript} width={width} height={height} alt="Javascript" data-tip="Javascript" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Typescript':
            return (
                <>
                    <Image src={typescript} width={width} height={height} alt="Typescript" data-tip="Typescript" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Java':
            return (
                <>
                    <Image src={java} width={width} height={height} alt="Java" data-tip="Java" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Kotlin':
            return (
                <>
                    <Image src={kotlin} width={width} height={height} alt="Kotlin" data-tip="Kotlin" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Android':
            return (
                <>
                    <Image src={android} width={width} height={height} alt="Android" data-tip="Android" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'MongoDB':
            return (
                <>
                    <Image src={mongodb} width={width} height={height} alt="MongoDB" data-tip="MongoDB" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Spring':
            return (
                <>
                    <Image src={spring} width={width} height={height} alt="Spring.io" data-tip="Spring.io" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Nextjs':
            return (
                <>
                    <Image src={next} width={width} height={height} alt="Next.js" data-tip="Next.js" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Illustrator':
            return (
                <>
                    <Image src={illustrator} width={width} height={height} alt="Illustrator" data-tip="Adobe Illustrator" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'TailwindCSS':
            return (
                <>
                    <Image src={tailwindcss} width={width} height={height} alt="TailwindCSS" data-tip="TailwindCSS" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'GraphQL':
            return (
                <>
                    <Image src={graphql} width={width} height={height} alt="GraphQL" data-tip="GraphQL" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Express':
            return (
                <>
                    <Image src={express} width={width} height={height} alt="Express.js" data-tip="Express.js" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Hapi':
            return (
                <>
                    <Image src={hapi} width={width} height={height} alt="Hapi.js" data-tip="Hapi.js" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'SQL':
            return (
                <>
                    <Image src={sql} width={width} height={height} alt="MySQL" data-tip="MySQL" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'SASS':
            return (
                <>
                    <Image src={sass} width={width} height={height} alt="SASS" data-tip="SASS" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'HTML':
            return (
                <>
                    <Image src={html} width={width} height={height} alt="HTML5" data-tip="HTML" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Figma':
            return (
                <>
                    <Image src={figma} width={width} height={height} alt="Figma" data-tip="Figma" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Redis':
            return (
                <>
                    <Image src={redis} width={width} height={height} alt="Redis" data-tip="Redis" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Redux':
            return (
                <>
                    <Image src={redux} width={width} height={height} alt="Redux" data-tip="Redux" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Docker':
            return (
                <>
                    <Image src={docker} width={width} height={height} alt="Docker" data-tip="Docker" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Heroku':
            return (
                <>
                    <Image src={heroku} width={width} height={height} alt="Heroku" data-tip="Heroku" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'DigitalOcean':
            return (
                <>
                    <Image src={digitalocean} width={width} height={height} alt="DigitalOcean" data-tip="Digital Ocean" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Electron':
            return (
                <>
                    <Image src={electron} width={width} height={height} alt="Electron" data-tip="Electron" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Vue':
            return (
                <>
                    <Image src={vue} width={width} height={height} alt="Vue.js" data-tip="Vue" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Bootstrap':
            return (
                <>
                    <Image src={bootstrap} width={width} height={height} alt="Bootstrap 5" data-tip="Bootstrap" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Cpp':
            return (
                <>
                    <Image src={cpp} width={width} height={height} alt="C++" data-tip="C++" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Python':
            return (
                <>
                    <Image src={python} width={width} height={height} alt="Python 3" data-tip="Python" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Babel':
            return (
                <>
                    <Image src={babel} width={width} height={height} alt="Babel" data-tip="Babel" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Webpack':
            return (
                <>
                    <Image src={webpack} width={width} height={height} alt="Webpack" data-tip="Webpack" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Kafka':
            return (
                <>
                    <Image src={kafka} width={width} height={height} alt="Kafka" data-tip="Kafka" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'RabbitMQ':
            return (
                <>
                    <Image src={rabbitmq} width={width} height={height} alt="RabbitMQ" data-tip="RabbitMQ" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'AWS':
            return (
                <>
                    <Image src={aws} width={width} height={height} alt="Amazon Web Services" data-tip="Amazon Web services" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'GCP':
            return (
                <>
                    <Image src={gcp} width={width} height={height} alt="Google Cloud Platform" data-tip="Google Cloud Platform" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Django':
            return (
                <>
                    <Image src={django} width={width} height={height} alt="Django" data-tip="Django" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'AdobeXD':
            return (
                <>
                    <Image src={xd} width={width} height={height} alt="Adobe XD" data-tip="Adobe XD" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Photoshop':
            return (
                <>
                    <Image src={photoshop} width={width} height={height} alt="Photoshop" data-tip="Adobe Photoshop" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Linux':
            return (
                <>
                    <Image src={linux} width={width} height={height} alt="Linux" data-tip="Linux" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Scala':
            return (
                <>
                    <Image src={scala} width={width} height={height} alt="Scala" data-tip="Scala" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'CSharp':
            return (
                <>
                    <Image src={csharp} width={width} height={height} alt="C#" data-tip="C#" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'C':
            return (
                <>
                    <Image src={c} width={width} height={height} alt="C" data-tip="C" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Apache':
            return (
                <>
                    <Image src={apache} width={width} height={height} alt="Apache 3" data-tip="Apache" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'CircleCI':
            return (
                <>
                    <Image src={circleci} width={width} height={height} alt="CircleCI" data-tip="CircleCI" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Vercel':
            return (
                <>
                    <Image src={vercel} width={width} height={height} alt="Vercel" data-tip="Vercel" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Firebase':
            return (
                <>
                    <Image src={firebase} width={width} height={height} alt="Firebase" data-tip="Firebase" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Auth0':
            return (
                <>
                    <Image src={auth0} width={width} height={height} alt="Auth0" data-tip="Auth0" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'GraphCMS':
            return (
                <>
                    <Image src={graphCMS} width={width} height={height} alt="GraphCMS" data-tip="GraphCMS" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Algolia':
            return (
                <>
                    <Image src={algolia} width={width} height={height} alt="Algolia" data-tip="Algolia" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        case 'Gatsby':
            return (
                <>
                    <Image src={gatsby} width={width} height={height} alt="Gatsby" data-tip="Gatsby.js" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
        default:
        case 'React':
            return (
                <>
                    <Image src={reactLogo} width={width} height={height} alt="React.js" data-tip="React.js" />
                    {/* <ReactTooltip place="top" type="info" effect="float" /> */}
                </>
            );
    }
};
