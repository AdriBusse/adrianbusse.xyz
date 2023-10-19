import gsap from 'gsap';
import React, {useEffect} from 'react'
import {Name} from "@/assets/svg/Name";

export default function HeroSection() {
    const tl = gsap.timeline({
        onStart: () => {
            console.log("starting")
        },
        id: 'Timeline',
        repeat: 0,


    });

    const colors = ['#d4cd8d', '#bc11d6', '#dedede'];

    function tween(node: any) {
        let path = node;
        const delay = Math.random() * 1;
        const length = path.getTotalLength();
        colors.forEach((color, index) => {
            if (index !== 0) {
                path = path.cloneNode();
                node.parentNode.appendChild(path);
            }
            path.setAttribute('stroke', color);
            tl.set(path, {
                strokeDasharray: length + 0.5,
                strokeDashoffset: length + 0.6,
                autoRound: false
            }, 0);
            tl.to(path, {
                strokeDashoffset: 0,
                autoRound: false,
                duration: 3.2,
                ease: 'power3.out'
            }, index * 0.5 + delay);
        });
    }

    useEffect(() => {
        document.querySelectorAll('.motion path, .motion line').forEach(p => tween(p));
        tl.from('#slogan', {
            opacity: 0,
            duration: 2
        }, '<=1')

    }, []);


    return (
        <div
            className="flex flex-col flex-wrap content-center justify-center w-screen h-screen min-h-full font-normal bg-cover select-none bg-hero-background1 bg-center">
            <div>
                <Name/>
            </div>
            <p id={"slogan"} className="font-mono mt-4 ml-8">&quot;From the Rhineland to Saigon&quot;</p>
        </div>
    )
}