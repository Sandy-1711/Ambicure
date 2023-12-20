'use client'
import { useEffect } from 'react'
import LineDotLine from '../LineDotLine/LineDotLine'
import cscss from './CustomerSays.module.css'

export default function CustomerSays() {
    useEffect(function () {
        const dots = document.querySelectorAll(`.${cscss.dot}`)
        const carousel = document.querySelectorAll(`.${cscss.carousel}`);
        dots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                document.querySelector(`.${cscss.active}`).classList.remove(cscss.active);
                dot.classList.add(cscss.active);
                if (dot === dots[0]) {
                    carousel.forEach(function (t) {
                        t.style.transform = "translate(0)";
                    })
                    // carousel[0].style.transform = "translate(0)"
                    // carousel[1].style.transform = "translate(0)"
                }
                else if (dot === dots[1]) {

                    carousel.forEach(function (t) {
                        t.style.transform = "translate(-100%)";
                    })
                }
                else if (dot === dots[2]) {

                    carousel.forEach(function (t) {
                        t.style.transform = "translate(-200%)";
                    })
                }
                else {

                    carousel.forEach(function (t) {
                        t.style.transform = "translate(-300%)";
                    })
                }
            })
        })


    })
    useEffect(function () {
        //dragging logic here

    })
    return <section className={cscss.section}>
        <div className={cscss.bg}></div>
        <div className={cscss.wrapper}>
            <h2>CUSTOMER SAYS</h2>
            <LineDotLine />
            <div className={cscss.carouselContainer}>
                <div className={cscss.carousel}>
                    <div>
                        <div className={cscss.quot}>
                            <svg height="16" width="14" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
                        </div>
                        <p>I am beyond delighted with the transformation that Ambicor Space brought to my home. Their innovative designs, attention to detail, and commitment to capturing my vision exceeded all expectations.</p>
                        <span>Jhalak Roy, Customer</span>
                    </div>
                    <div>
                        <div className={cscss.quot}>
                            <svg height="16" width="14" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
                        </div>
                        <p>The result is a space that not only reflects my personality but also radiates sophistication and comfort. Working with their talented team was a truly collaborative and enjoyable experience.</p>
                        <span>Pratik Singh, Customer</span>
                    </div>
                </div>
                <div className={cscss.carousel}>
                    <div>
                        <div className={cscss.quot}>
                            <svg height="16" width="14" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
                        </div>
                        <p>I highly recommend Ambicor for anyone seeking a touch of elegance and style in their living spaces.</p>
                        <span>Laxman Yadav, Customer</span>
                    </div>
                    <div>
                        <div className={cscss.quot}>
                            <svg height="16" width="14" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
                        </div>
                        <p>I highly recommend Ambicor Space for anyone seeking a touch of elegance and style in their living spaces.</p>
                        <span>Dipraj Ghosh, Customer</span>
                    </div>
                </div>
            </div>
            <div className={cscss.carouselContainer + ' ' + cscss.mobileContainer}>
                <div className={cscss.carousel}>
                    <div>
                        <div className={cscss.quot}>
                            <svg height="16" width="14" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
                        </div>
                        <p>I have very much enjoyed with your services.</p>
                        <span>Jhalak Roy, Customer</span>
                    </div>

                </div>
                <div className={cscss.carousel}>
                    <div>
                        <div className={cscss.quot}>
                            <svg height="16" width="14" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
                        </div>
                        <p>I totally recommend your services.</p>
                        <span>Pratik Singh, Customer</span>
                    </div>
                </div>
                <div className={cscss.carousel}>
                    <div>
                        <div className={cscss.quot}>
                            <svg height="16" width="14" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
                        </div>
                        <p>I have very much loved their work, Recommended!.</p>
                        <span>Laxman Yadav, Customer</span>
                    </div>
                </div>
                <div className={cscss.carousel}>
                    <div>
                        <div className={cscss.quot}>
                            <svg height="16" width="14" viewBox="0 0 448 512"><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" /></svg>
                        </div>
                        <p>They are best interior designers in Ranchi</p>
                        <span>Dipraj Ghosh, Customer</span>
                    </div>
                </div>
            </div>
            <div className={cscss.dots}>
                <div className={cscss.dot + ' ' + cscss.active}></div>
                <div className={cscss.dot}></div>
                <div className={cscss.dot}></div>
                <div className={cscss.dot}></div>
            </div>
        </div>
    </section>
}