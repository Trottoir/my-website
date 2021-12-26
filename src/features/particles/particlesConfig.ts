import { IOptions, RecursivePartial } from 'react-tsparticles';

export const particlesConfig:RecursivePartial<IOptions> = {
    particles: {
        number: { value: 30, density: { enable: true, value_area: 800 } },
        color: { value: '#ded54c' },
        shape: {
            type: 'circle',
            stroke: { width: 0, color: '#000000' },
            polygon: { nb_sides: 3 },
            image: { src: 'img/github.svg', width: 100, height: 100 },
        },
        opacity: {
            value: 0.19240944730386272,
            random: true,
            anim: {
                enable: false,
                speed: 4.710047831347802,
                opacity_min: 0.3329516570435515,
                sync: false,
            },
        },
        size: {
            value: 0,
            random: true,
            anim: { enable: false, speed: 20, size_min: 0.1, sync: false },
        },
        line_linked: {
            enable: true,
            distance: 400.4776885211732,
            color: '#fff000',
            opacity: 0.24463576890600452,
            width: 0.5,
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: false, mode: 'grab' },
            onclick: { enable: false, mode: 'push' },
            resize: true,
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
            },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
        },
    },
    retina_detect: true,
};